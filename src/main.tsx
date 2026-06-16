import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

/*
 * PWA 部署後自動復原：
 * 每次部署 chunk 的 hash 會變，使用者開著舊頁面又被 service worker 餵舊版時，
 * 點劇本觸發的動態 import() 會抓不到舊 hash 的檔案而失敗 → 白屏/卡住。
 * 這裡攔截 Vite 的 preloadError 與動態 import 失敗，自動重新整理一次抓最新版本。
 * 用時間戳擋 10 秒內重複重整，避免（chunk 真的不存在時）無限重整迴圈。
 */
function reloadOnceForStaleChunks() {
  const last = Number(sessionStorage.getItem('chunkReloadAt') || 0);
  if (Date.now() - last < 10000) return;
  sessionStorage.setItem('chunkReloadAt', String(Date.now()));
  window.location.reload();
}
window.addEventListener('vite:preloadError', reloadOnceForStaleChunks);
window.addEventListener('unhandledrejection', (e) => {
  const msg = String((e.reason && e.reason.message) || e.reason || '');
  if (/dynamically imported module|Importing a module script failed|ChunkLoadError/i.test(msg)) {
    reloadOnceForStaleChunks();
  }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
