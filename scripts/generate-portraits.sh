#!/bin/bash
set -e

OUTDIR="public/characters/audition-night"
mkdir -p "$OUTDIR"

generate() {
  local name=$1
  local prompt=$2
  local seed=$3
  local out="$OUTDIR/${name}-normal.png"

  echo "🎨 生成: $name (seed=$seed)"

  local encoded=$(python3 -c "import urllib.parse; print(urllib.parse.quote('''$prompt'''))")

  curl -sL "https://image.pollinations.ai/prompt/${encoded}?width=512&height=512&nologo=true&seed=${seed}&enhance=true" \
    -o "$out" \
    -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36"

  # 檢查是否真的是 PNG
  local type=$(file -b "$out")
  if echo "$type" | grep -q "PNG"; then
    local size=$(stat -f%z "$out" 2>/dev/null || stat -c%s "$out" 2>/dev/null)
    echo "   ✅ PNG 完成: $size bytes"
  else
    echo "   ❌ 失敗: $type"
    cat "$out" | head -c 300
    rm -f "$out"
    return 1
  fi

  # 等 5 秒再下一張，避免 queue full
  sleep 5
}

# ====== audition-night 角色 ======

generate "writer" \
  "Anime visual novel character portrait of a middle-aged Asian man writer, round glasses, slightly messy black hair with grey temples, tired gentle eyes, wearing a worn brown cardigan over white shirt, soft lighting, detailed face, anime art style, transparent background, waist-up shot, high quality" \
  101

generate "producer" \
  "Anime visual novel character portrait of a middle-aged Asian businessman producer, slicked back black hair, sharp calculating eyes, expensive dark navy suit with sapphire cufflinks, confident expression, detailed face, anime art style, transparent background, waist-up shot, high quality" \
  102

generate "wife" \
  "Anime visual novel character portrait of an elegant mature Asian woman in her 40s, pearl necklace, expensive dark red dress, perfectly styled black hair, graceful but cold expression, beautiful detailed face, anime art style, transparent background, waist-up shot, high quality" \
  103

generate "manager" \
  "Anime visual novel character portrait of a young Asian man talent manager, neatly combed black hair, sharp intelligent eyes, perfectly tailored grey suit with tight tie, polished professional appearance, slight fake smile, detailed face, anime art style, transparent background, waist-up shot, high quality" \
  104

echo ""
echo "✅ 全部生成完成！"
echo "📂 檔案位置: $OUTDIR"
ls -la "$OUTDIR"
