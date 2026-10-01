# Recorta las imágenes del diseño (exports planos de Figma en _referencia/) a public/img/*.jpg
# y escribe src/images.json con el tamaño final de cada una.
# Uso: powershell -File tools/crop.ps1
Add-Type -AssemblyName System.Drawing
$root = Split-Path $PSScriptRoot -Parent
$ref = Join-Path $root '_referencia'
$out = Join-Path $root 'public\img'
New-Item -ItemType Directory -Force $out | Out-Null
$cfg = Get-Content (Join-Path $PSScriptRoot 'crops.json') -Raw -Encoding UTF8 | ConvertFrom-Json

$jpeg = [Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
$params = New-Object Drawing.Imaging.EncoderParameters 1
$params.Param[0] = New-Object Drawing.Imaging.EncoderParameter ([Drawing.Imaging.Encoder]::Quality), 88L

$bitmaps = @{}
$sizes = [ordered]@{}
foreach ($c in $cfg.crops) {
  $src = $cfg.sources.($c.src)
  if (-not $bitmaps.ContainsKey($c.src)) {
    $bitmaps[$c.src] = [Drawing.Bitmap]::FromFile((Join-Path $ref $src.file))
  }
  $img = $bitmaps[$c.src]
  $s = [int]$src.scale
  $rect = New-Object Drawing.Rectangle ([int]($c.x * $s)), ([int]($c.y * $s)), ([int]($c.w * $s)), ([int]($c.h * $s))
  $bmp = New-Object Drawing.Bitmap $rect.Width, $rect.Height
  $g = [Drawing.Graphics]::FromImage($bmp)
  $g.DrawImage($img, (New-Object Drawing.Rectangle 0, 0, $rect.Width, $rect.Height), $rect, [Drawing.GraphicsUnit]::Pixel)
  $g.Dispose()
  $bmp.Save((Join-Path $out ($c.name + '.jpg')), $jpeg, $params)
  $sizes[$c.name] = @{ w = $rect.Width; h = $rect.Height }
  $bmp.Dispose()
}
foreach ($b in $bitmaps.Values) { $b.Dispose() }
$sizes | ConvertTo-Json | Set-Content (Join-Path $root 'src\images.json') -Encoding UTF8
"OK: $($sizes.Count) imágenes"
