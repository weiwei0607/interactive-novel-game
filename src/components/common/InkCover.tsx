import { useEffect, useRef } from 'react';

/**
 * 互動式水墨封面（流體模擬版）
 * - SVG 山水：沒骨暈染遠山、皴法、孤舟、松枝
 * - Canvas 墨水引擎：Stable Fluids（半拉格朗日平流 + 壓力投影 + 渦度增強）
 *   點一下＝滴墨入水綻開；滑鼠掠過＝攪動水流，把墨混開；按住拖曳＝注墨
 */

export default function InkCover() {
  const rootRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const cv = canvasRef.current;
    if (!root || !cv) return;
    const ctx = cv.getContext('2d');
    if (!ctx) return;

    const host: HTMLElement = root.parentElement ?? root;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ── 流體網格 ──
    const N = 124;
    let M = 156;
    let SZ = N * M;
    let u = new Float32Array(SZ);
    let v = new Float32Array(SZ);
    let u0 = new Float32Array(SZ);
    let v0 = new Float32Array(SZ);
    let d = new Float32Array(SZ);
    let d0 = new Float32Array(SZ);
    let p = new Float32Array(SZ);
    let divg = new Float32Array(SZ);
    let curl = new Float32Array(SZ);

    const oc = document.createElement('canvas');
    const octx = oc.getContext('2d');
    if (!octx) return;
    let img = octx.createImageData(N, M);
    let px = img.data;

    const alloc = () => {
      const W = Math.max(1, root.clientWidth);
      const H = Math.max(1, root.clientHeight);
      M = Math.max(60, Math.min(300, Math.round((N * H) / W)));
      SZ = N * M;
      u = new Float32Array(SZ);
      v = new Float32Array(SZ);
      u0 = new Float32Array(SZ);
      v0 = new Float32Array(SZ);
      d = new Float32Array(SZ);
      d0 = new Float32Array(SZ);
      p = new Float32Array(SZ);
      divg = new Float32Array(SZ);
      curl = new Float32Array(SZ);
      oc.width = N;
      oc.height = M;
      img = octx.createImageData(N, M);
      px = img.data;
      for (let z = 0; z < SZ; z++) {
        px[z * 4] = 26;
        px[z * 4 + 1] = 30;
        px[z * 4 + 2] = 36;
        px[z * 4 + 3] = 0;
      }
      cv.width = W;
      cv.height = H;
      ctx.imageSmoothingEnabled = true;
    };
    alloc();
    const ro = new ResizeObserver(alloc);
    ro.observe(root);

    const sample = (f: Float32Array, x: number, y: number) => {
      if (x < 0.5) x = 0.5;
      if (x > N - 1.5) x = N - 1.5;
      if (y < 0.5) y = 0.5;
      if (y > M - 1.5) y = M - 1.5;
      const i = x | 0;
      const j = y | 0;
      const fx = x - i;
      const fy = y - j;
      const k = i + j * N;
      return (
        f[k] * (1 - fx) * (1 - fy) +
        f[k + 1] * fx * (1 - fy) +
        f[k + N] * (1 - fx) * fy +
        f[k + N + 1] * fx * fy
      );
    };

    const advect = (dst: Float32Array, src: Float32Array, du: Float32Array, dv: Float32Array, diss: number) => {
      for (let j = 1; j < M - 1; j++) {
        for (let i = 1; i < N - 1; i++) {
          const k = i + j * N;
          dst[k] = sample(src, i - du[k], j - dv[k]) * diss;
        }
      }
    };

    const project = () => {
      for (let j = 1; j < M - 1; j++) {
        for (let i = 1; i < N - 1; i++) {
          const k = i + j * N;
          divg[k] = -0.5 * (u[k + 1] - u[k - 1] + v[k + N] - v[k - N]);
          p[k] = 0;
        }
      }
      for (let it = 0; it < 12; it++) {
        for (let j = 1; j < M - 1; j++) {
          for (let i = 1; i < N - 1; i++) {
            const k = i + j * N;
            p[k] = (divg[k] + p[k - 1] + p[k + 1] + p[k - N] + p[k + N]) * 0.25;
          }
        }
      }
      for (let j = 1; j < M - 1; j++) {
        for (let i = 1; i < N - 1; i++) {
          const k = i + j * N;
          u[k] -= 0.5 * (p[k + 1] - p[k - 1]);
          v[k] -= 0.5 * (p[k + N] - p[k - N]);
        }
      }
    };

    const vorticity = () => {
      for (let j = 1; j < M - 1; j++) {
        for (let i = 1; i < N - 1; i++) {
          const k = i + j * N;
          curl[k] = 0.5 * (v[k + 1] - v[k - 1] - u[k + N] + u[k - N]);
        }
      }
      for (let j = 2; j < M - 2; j++) {
        for (let i = 2; i < N - 2; i++) {
          const k = i + j * N;
          const nx = 0.5 * (Math.abs(curl[k + 1]) - Math.abs(curl[k - 1]));
          const ny = 0.5 * (Math.abs(curl[k + N]) - Math.abs(curl[k - N]));
          const len = Math.sqrt(nx * nx + ny * ny) + 1e-5;
          u[k] += 0.45 * (ny / len) * curl[k];
          v[k] -= 0.45 * (nx / len) * curl[k];
        }
      }
    };

    const addVel = (cx: number, cy: number, fx: number, fy: number, rad: number) => {
      const r2 = rad * rad;
      const i0 = Math.max(1, (cx - rad) | 0);
      const i1 = Math.min(N - 2, (cx + rad) | 0);
      const j0 = Math.max(1, (cy - rad) | 0);
      const j1 = Math.min(M - 2, (cy + rad) | 0);
      for (let j = j0; j <= j1; j++) {
        for (let i = i0; i <= i1; i++) {
          const dx = i - cx;
          const dy = j - cy;
          const q = (dx * dx + dy * dy) / r2;
          if (q > 1) continue;
          const w = Math.exp(-q * 3);
          const k = i + j * N;
          u[k] = Math.max(-5, Math.min(5, u[k] + fx * w));
          v[k] = Math.max(-5, Math.min(5, v[k] + fy * w));
        }
      }
    };

    const addDye = (cx: number, cy: number, amt: number, rad: number) => {
      const r2 = rad * rad;
      const i0 = Math.max(1, (cx - rad) | 0);
      const i1 = Math.min(N - 2, (cx + rad) | 0);
      const j0 = Math.max(1, (cy - rad) | 0);
      const j1 = Math.min(M - 2, (cy + rad) | 0);
      for (let j = j0; j <= j1; j++) {
        for (let i = i0; i <= i1; i++) {
          const dx = i - cx;
          const dy = j - cy;
          const q = (dx * dx + dy * dy) / r2;
          if (q > 1) continue;
          d[i + j * N] += amt * Math.exp(-q * 2.5);
        }
      }
    };

    const inkDrop = (cx: number, cy: number) => {
      addDye(cx, cy, 3.2, 3.4);
      for (let a = 0; a < 10; a++) {
        const ang = (a / 10) * 6.2832;
        addVel(cx + Math.cos(ang) * 2, cy + Math.sin(ang) * 2, Math.cos(ang) * 1.5, Math.sin(ang) * 1.5 + 0.3, 2.2);
      }
      addVel(cx, cy, 0, 0.8, 2.5);
    };

    const toCell = (e: PointerEvent) => {
      const r = root.getBoundingClientRect();
      return {
        x: ((e.clientX - r.left) / Math.max(1, r.width)) * N,
        y: ((e.clientY - r.top) / Math.max(1, r.height)) * M,
      };
    };

    let lastP: { x: number; y: number } | null = null;
    let downP: { x: number; y: number } | null = null;
    let moved = 0;

    const onMove = (e: PointerEvent) => {
      const c = toCell(e);
      if (lastP) {
        const dx = c.x - lastP.x;
        const dy = c.y - lastP.y;
        const sp = Math.sqrt(dx * dx + dy * dy);
        if (sp > 0.01) {
          const s = Math.min(3.2, sp) / Math.max(sp, 0.01);
          addVel(c.x, c.y, dx * s * 0.85, dy * s * 0.85, 2.6);
          if (downP) {
            addDye(c.x, c.y, 0.5, 1.6);
            moved += sp;
          }
        }
      }
      lastP = c;
    };
    const onDown = (e: PointerEvent) => {
      downP = toCell(e);
      moved = 0;
    };
    const onUp = (e: PointerEvent) => {
      if (downP && moved < 2.5) {
        const c = toCell(e);
        inkDrop(c.x, c.y);
      }
      downP = null;
    };
    const onCancel = () => {
      downP = null;
    };
    const onLeave = () => {
      lastP = null;
    };

    host.addEventListener('pointermove', onMove);
    host.addEventListener('pointerdown', onDown);
    host.addEventListener('pointerup', onUp);
    host.addEventListener('pointercancel', onCancel);
    host.addEventListener('pointerleave', onLeave);

    let raf = 0;
    const frame = () => {
      vorticity();
      project();
      advect(u0, u, u, v, 0.999);
      advect(v0, v, u, v, 0.999);
      let t = u; u = u0; u0 = t;
      t = v; v = v0; v0 = t;
      for (let k = 0; k < SZ; k++) v[k] += d[k] * 0.0022;
      project();
      advect(d0, d, u, v, 0.9975);
      t = d; d = d0; d0 = t;
      for (let k = 0; k < SZ; k++) {
        let a = d[k];
        if (a > 1) a = 1;
        px[k * 4 + 3] = (a * (2 - a) * 235) | 0;
      }
      octx.putImageData(img, 0, 0);
      ctx.clearRect(0, 0, cv.width, cv.height);
      ctx.drawImage(oc, 0, 0, cv.width, cv.height);
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    const timers: ReturnType<typeof setTimeout>[] = [];
    if (!reduced) {
      timers.push(setTimeout(() => inkDrop(N * 0.46, M * 0.4), 3600));
      timers.push(setTimeout(() => inkDrop(N * 0.65, M * 0.72), 6800));
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      timers.forEach(clearTimeout);
      host.removeEventListener('pointermove', onMove);
      host.removeEventListener('pointerdown', onDown);
      host.removeEventListener('pointerup', onUp);
      host.removeEventListener('pointercancel', onCancel);
      host.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return (
    <div ref={rootRef} className="absolute inset-0 overflow-hidden bg-[#ece7da]" aria-hidden="true">
      {/* 主畫面：遠山、霧、水、孤舟 */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 680 860"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="ic-inkS" x="-30%" y="-30%" width="160%" height="160%">
            <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="3" seed="7" result="n" />
            <feDisplacementMap in="SourceGraphic" in2="n" scale="18" />
            <feGaussianBlur stdDeviation="1.4" />
          </filter>
          <filter id="ic-inkF" x="-30%" y="-30%" width="160%" height="160%">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" seed="3" result="n" />
            <feDisplacementMap in="SourceGraphic" in2="n" scale="7" />
          </filter>
          <filter id="ic-soft" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="14" />
          </filter>
          <filter id="ic-soft2" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="5" />
          </filter>
          <linearGradient id="ic-gFar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#aeb6bc" stopOpacity=".68" />
            <stop offset=".55" stopColor="#b6bdc3" stopOpacity=".3" />
            <stop offset="1" stopColor="#c0c6cb" stopOpacity=".04" />
          </linearGradient>
          <linearGradient id="ic-gMid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#6e7880" stopOpacity=".85" />
            <stop offset=".5" stopColor="#79828a" stopOpacity=".38" />
            <stop offset="1" stopColor="#8a929a" stopOpacity=".05" />
          </linearGradient>
          <linearGradient id="ic-gNear" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#343b42" stopOpacity=".95" />
            <stop offset=".55" stopColor="#3c434a" stopOpacity=".45" />
            <stop offset="1" stopColor="#4a525a" stopOpacity=".08" />
          </linearGradient>
        </defs>

        <rect width="680" height="860" fill="#ece7da" />
        <g opacity=".5">
          <ellipse cx="140" cy="180" rx="240" ry="120" fill="#e3ddcb" filter="url(#ic-soft)" />
          <ellipse cx="560" cy="700" rx="220" ry="160" fill="#e5dfce" filter="url(#ic-soft)" />
          <ellipse cx="380" cy="430" rx="300" ry="90" fill="#efeadf" filter="url(#ic-soft)" />
        </g>

        <g className="ink-rv" style={{ animationDelay: '.1s' }}>
          <path
            d="M-40 318 C 40 268 96 228 170 232 C 230 236 260 270 318 282 C 380 296 420 252 484 246 C 556 240 610 280 720 300 L 720 460 L -40 460 Z"
            fill="url(#ic-gFar)"
            filter="url(#ic-inkS)"
          />
          <path
            d="M-40 350 C 60 320 140 296 230 306 C 300 314 360 340 470 330 C 560 322 620 336 720 352 L 720 470 L -40 470 Z"
            fill="url(#ic-gFar)"
            opacity=".7"
            filter="url(#ic-inkS)"
          />
        </g>

        <g className="ink-rv" style={{ animationDelay: '.45s' }}>
          <path
            d="M-40 416 C 30 366 90 316 158 320 C 226 324 252 372 330 384 C 412 396 458 340 530 338 C 600 336 650 372 720 392 L 720 540 L -40 540 Z"
            fill="url(#ic-gMid)"
            filter="url(#ic-inkS)"
          />
          <g stroke="#5e6770" strokeWidth="1.1" opacity=".4" fill="none" filter="url(#ic-inkF)">
            <path d="M192 342 C 180 360 168 380 162 402" />
            <path d="M222 330 C 214 354 204 380 200 408" />
            <path d="M256 334 C 254 358 250 384 250 410" />
            <path d="M470 350 C 478 372 488 392 500 410" />
            <path d="M508 344 C 518 366 530 388 544 406" />
          </g>
          <g fill="#454c53" opacity=".85" filter="url(#ic-inkF)" transform="translate(72,0)">
            <rect x="146" y="356" width="22" height="16" />
            <path d="M138 358 L 157 344 L 176 358 Z" />
            <path d="M141 348 L 157 336 L 173 348 Z" />
            <path d="M145 339 L 157 329 L 169 339 Z" />
            <rect x="155.4" y="322" width="3.2" height="8" />
          </g>
        </g>

        <g className="ink-mist1" opacity=".8">
          <ellipse cx="240" cy="392" rx="330" ry="34" fill="#ece7da" filter="url(#ic-soft)" />
        </g>

        <g className="ink-rv" style={{ animationDelay: '.85s' }}>
          <path
            d="M-40 520 C 30 470 80 420 170 428 C 250 436 300 484 390 488 C 480 492 530 444 600 446 C 660 448 690 470 720 484 L 720 620 L -40 620 Z"
            fill="url(#ic-gNear)"
            filter="url(#ic-inkS)"
          />
        </g>

        <g className="ink-mist2" opacity=".75">
          <ellipse cx="420" cy="508" rx="360" ry="30" fill="#ece7da" filter="url(#ic-soft)" />
        </g>

        <g className="ink-rv" style={{ animationDelay: '1.2s' }}>
          <g stroke="#969da4" strokeWidth="1.4" opacity=".55" fill="none">
            <path d="M60 596 H 250" />
            <path d="M330 612 H 560" />
            <path d="M110 648 H 300" />
            <path d="M420 668 H 640" />
            <path d="M70 706 H 230" />
            <path d="M350 736 H 520" />
            <path d="M150 778 H 380" />
            <path d="M460 796 H 620" />
          </g>
          <g className="ink-boat">
            <g filter="url(#ic-inkF)">
              <path
                d="M268 634 C 290 642 350 642 372 632 C 366 646 350 652 320 652 C 292 652 274 644 268 634 Z"
                fill="#22262a"
              />
              <path
                d="M318 600 C 322 596 328 596 331 600 L 333 612 C 333 618 328 622 324 622 C 320 622 317 618 317 612 Z"
                fill="#23272b"
              />
              <path
                d="M312 622 C 310 614 318 608 325 608 C 334 608 340 616 338 624 C 336 632 332 636 324 636 C 317 636 314 630 312 622 Z"
                fill="#1d2125"
              />
              <path d="M310 605 C 318 598 333 596 340 602 C 336 592 318 590 310 598 Z" fill="#15181b" />
              <line x1="334" y1="604" x2="368" y2="648" stroke="#1d2125" strokeWidth="2" />
            </g>
            <ellipse cx="320" cy="660" rx="42" ry="4" fill="#3c434a" opacity=".22" filter="url(#ic-soft2)" />
          </g>
        </g>

        <g
          className="ink-rv ink-birds"
          style={{ animationDelay: '1.5s' }}
          stroke="#2c3136"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        >
          <path d="M398 148 q 6 -7 12 0 q 6 -7 12 0" />
          <path d="M446 166 q 5 -6 10 0 q 5 -6 10 0" opacity=".8" />
          <path d="M482 140 q 4 -5 8 0 q 4 -5 8 0" opacity=".6" />
        </g>
      </svg>

      {/* 左上角松枝（固定貼角，不受裁切影響） */}
      <svg className="absolute top-0 left-0 w-56 md:w-72" viewBox="0 0 260 200" preserveAspectRatio="xMinYMin meet">
        <defs>
          <filter id="ic-pf" x="-30%" y="-30%" width="160%" height="160%">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" seed="3" result="n" />
            <feDisplacementMap in="SourceGraphic" in2="n" scale="7" />
          </filter>
        </defs>
        <g className="ink-rv" style={{ animationDelay: '1.05s' }}>
          <g filter="url(#ic-pf)">
            <path d="M-20 52 C 60 64 120 84 196 142" stroke="#23262a" strokeWidth="9" fill="none" strokeLinecap="round" />
            <path d="M96 76 C 140 90 170 110 208 148" stroke="#23262a" strokeWidth="5" fill="none" strokeLinecap="round" />
            <path d="M150 104 C 176 118 196 134 224 162" stroke="#2a2e33" strokeWidth="3" fill="none" strokeLinecap="round" />
          </g>
          <g stroke="#272b30" strokeWidth="1.3" strokeLinecap="round" opacity=".9" fill="none">
            <g transform="translate(118,88)">
              <path d="M0 0 L -26 14" /><path d="M0 0 L -20 22" /><path d="M0 0 L -8 27" /><path d="M0 0 L 4 28" />
              <path d="M0 0 L 16 24" /><path d="M0 0 L 26 14" /><path d="M0 0 L 29 4" /><path d="M0 0 L -28 4" />
            </g>
            <g transform="translate(176,122)">
              <path d="M0 0 L -24 12" /><path d="M0 0 L -16 22" /><path d="M0 0 L -4 26" /><path d="M0 0 L 8 25" />
              <path d="M0 0 L 20 18" /><path d="M0 0 L 26 6" />
            </g>
            <g transform="translate(214,158)">
              <path d="M0 0 L -22 10" /><path d="M0 0 L -14 20" /><path d="M0 0 L -2 24" /><path d="M0 0 L 10 22" />
              <path d="M0 0 L 20 12" />
            </g>
            <g transform="translate(238,178)" opacity=".75">
              <path d="M0 0 L -16 9" /><path d="M0 0 L -8 16" /><path d="M0 0 L 4 17" /><path d="M0 0 L 14 10" />
            </g>
          </g>
        </g>
      </svg>

      {/* 右下角墨石（固定貼角） */}
      <svg className="absolute bottom-0 right-0 w-44 md:w-56" viewBox="0 0 200 146" preserveAspectRatio="xMaxYMax meet">
        <defs>
          <filter id="ic-rf" x="-30%" y="-30%" width="160%" height="160%">
            <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="3" seed="7" result="n" />
            <feDisplacementMap in="SourceGraphic" in2="n" scale="14" />
            <feGaussianBlur stdDeviation="1" />
          </filter>
        </defs>
        <g className="ink-rv" style={{ animationDelay: '1.35s' }}>
          <path
            d="M20 146 C 40 80 80 48 132 40 C 168 36 190 50 200 70 L 200 146 Z"
            fill="#2b3036"
            opacity=".92"
            filter="url(#ic-rf)"
          />
          <g stroke="#343a40" strokeWidth="1.6" strokeLinecap="round" fill="none" opacity=".85">
            <path d="M40 72 C 42 56 48 44 58 34" />
            <path d="M64 66 C 68 52 76 42 88 34" />
            <path d="M90 60 C 96 48 106 40 118 36" />
          </g>
        </g>
      </svg>

      {/* 墨水流體層 */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full mix-blend-multiply pointer-events-none" />
    </div>
  );
}
