Add-Type -AssemblyName System.Drawing

$srcLogoPath = "C:\Users\matheus\.gemini\antigravity\brain\5a692096-e004-49db-abe4-dc4705733665\.user_uploaded\media_1793302691894_4b71df1b.png"
$srcPhotoPath = "C:\Users\matheus\.gemini\antigravity\brain\5a692096-e004-49db-abe4-dc4705733665\.user_uploaded\media_1793302722936_a034c7e5.jpg"

$publicDir = "p:\Work\teste de oferta\página de vendas\antigravity\2Ângela Maria Gonçalves Rabelo — Advogada\public"
$appDir = "p:\Work\teste de oferta\página de vendas\antigravity\2Ângela Maria Gonçalves Rabelo — Advogada\app"

if (!(Test-Path $publicDir)) {
    New-Item -ItemType Directory -Path $publicDir -Force | Out-Null
}

Write-Host "1. Processing full logo..."
$logoBmp = [System.Drawing.Bitmap]::FromFile($srcLogoPath)

# Save full logo to public/logo.png and public/logo-full.png
$logoBmp.Save("$publicDir\logo.png", [System.Drawing.Imaging.ImageFormat]::Png)
$logoBmp.Save("$publicDir\logo-full.png", [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "Saved $publicDir\logo.png (1024x341)"

# 2. Extract the "AM" Monogram Symbol
# Bounds from our analysis: X=[398, 622] (width 225), Y=[14, 205] (height 192)
# Center: X=510, Y=110. Side = max(225, 192) + padding = 240
$monoCenterX = 510
$monoCenterY = 110
$cropSize = 230
$cropX = [int]($monoCenterX - ($cropSize / 2))
$cropY = [int]($monoCenterY - ($cropSize / 2))

# Make sure crop is within bounds
if ($cropY -lt 0) { $cropY = 0 }
$srcCropRect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropSize, $cropSize)

# Create 512x512 transparent symbol
$symBmp = New-Object System.Drawing.Bitmap(512, 512, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$gSym = [System.Drawing.Graphics]::FromImage($symBmp)
$gSym.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$gSym.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$gSym.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$gSym.Clear([System.Drawing.Color]::Transparent)

# Draw cropped monogram onto 512x512 with a neat margin
$margin = 32
$destSymRect = New-Object System.Drawing.Rectangle($margin, $margin, 512 - ($margin * 2), 512 - ($margin * 2))
$gSym.DrawImage($logoBmp, $destSymRect, $srcCropRect, [System.Drawing.GraphicsUnit]::Pixel)
$gSym.Dispose()

$symBmp.Save("$publicDir\logo-symbol.png", [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "Saved $publicDir\logo-symbol.png (512x512 monogram)"

# 3. Create Multi-Resolution Favicons & App Icons
# For tab favicon, create a high-contrast badge so it shines brightly on light and dark browser tabs
function CreateFaviconIcon([int]$size, [string]$outPath) {
    $iconBmp = New-Object System.Drawing.Bitmap($size, $size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($iconBmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.Clear([System.Drawing.Color]::Transparent)

    # Draw rounded luxury dark charcoal badge (#0d1017) with refined subtle ruby/titanium ring
    $bgBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 13, 16, 23))
    $g.FillEllipse($bgBrush, 0, 0, $size, $size)
    $bgBrush.Dispose()

    # Outer border ring in ruby carmine / chrome
    $penWidth = [Math]::Max(1.0, [double]$size / 24.0)
    $rubyPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(255, 184, 20, 36), $penWidth)
    $g.DrawEllipse($rubyPen, 1, 1, [int]($size - 2), [int]($size - 2))
    $rubyPen.Dispose()

    # Draw monogram symbol inside with comfortable padding
    $pad = [int]($size * 0.12)
    $innerSize = [int]($size - ($pad * 2))
    $destInner = New-Object System.Drawing.Rectangle($pad, $pad, $innerSize, $innerSize)
    $g.DrawImage($symBmp, $destInner, 0, 0, 512, 512, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()

    $iconBmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $iconBmp.Dispose()
    Write-Host "Created $outPath ($size x $size)"
}

CreateFaviconIcon 512 "$publicDir\icon-512x512.png"
CreateFaviconIcon 192 "$publicDir\icon.png"
CreateFaviconIcon 180 "$publicDir\apple-icon.png"
CreateFaviconIcon 32  "$publicDir\favicon-32x32.png"
CreateFaviconIcon 16  "$publicDir\favicon-16x16.png"

# Copy to app/ directory for Next.js App Router metadata conventions
CreateFaviconIcon 192 "$appDir\icon.png"
CreateFaviconIcon 180 "$appDir\apple-icon.png"

# Create .ico file using 32x32 bitmap
$icoBmp = New-Object System.Drawing.Bitmap("$publicDir\favicon-32x32.png")
$icoHicon = $icoBmp.GetHicon()
$iconObj = [System.Drawing.Icon]::FromHandle($icoHicon)

$fsPublic = [System.IO.File]::OpenWrite("$publicDir\favicon.ico")
$iconObj.Save($fsPublic)
$fsPublic.Close()

$fsApp = [System.IO.File]::OpenWrite("$appDir\favicon.ico")
$iconObj.Save($fsApp)
$fsApp.Close()

$iconObj.Dispose()
$icoBmp.Dispose()
Write-Host "Created favicon.ico in public/ and app/"

# 4. Copy Photo of Dra. Ângela Maria Gonçalves Rabelo
[System.IO.File]::Copy($srcPhotoPath, "$publicDir\hero-advogada.jpg", $true)
[System.IO.File]::Copy($srcPhotoPath, "$publicDir\sobre-advogada.jpg", $true)
[System.IO.File]::Copy($srcPhotoPath, "$publicDir\dra-angela-maria.jpg", $true)
[System.IO.File]::Copy($srcPhotoPath, "$publicDir\hero.jpg", $true)
Write-Host "Created photo files in public/: hero-advogada.jpg, sobre-advogada.jpg, dra-angela-maria.jpg, hero.jpg"

$symBmp.Dispose()
$logoBmp.Dispose()
Write-Host "All assets generated successfully!"
