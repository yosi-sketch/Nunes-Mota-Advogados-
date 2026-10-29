Add-Type -AssemblyName System.Drawing

$srcLogoPath = "C:\Users\matheus\.gemini\antigravity\brain\dc7d0b50-83d9-4e54-97ae-a4cadae5c0ac\.user_uploaded\media_1793305350867_b63d1b88.png"
$srcPhotoPath = "C:\Users\matheus\.gemini\antigravity\brain\dc7d0b50-83d9-4e54-97ae-a4cadae5c0ac\.user_uploaded\media_1793305344264_68f83446.jpg"

$publicDir = "p:\Work\teste de oferta\página de vendas\antigravity\2Mariana Corsi Advocacia\public"
$appDir = "p:\Work\teste de oferta\página de vendas\antigravity\2Mariana Corsi Advocacia\app"

if (-not (Test-Path $publicDir)) {
    New-Item -ItemType Directory -Path $publicDir -Force | Out-Null
}

# 1. Copy source logo as public\logo.png
Copy-Item -Path $srcLogoPath -Destination "$publicDir\logo.png" -Force
Write-Host "Saved $publicDir\logo.png"

# 2. Copy source photo as mariana-corsi.jpg, hero-advogada.jpg, and sobre-advogada.jpg
Copy-Item -Path $srcPhotoPath -Destination "$publicDir\mariana-corsi.jpg" -Force
Copy-Item -Path $srcPhotoPath -Destination "$publicDir\hero-advogada.jpg" -Force
Copy-Item -Path $srcPhotoPath -Destination "$publicDir\sobre-advogada.jpg" -Force
Write-Host "Saved photo assets in public"

# 3. Crop MC monogram
$logoBmp = [System.Drawing.Bitmap]::FromFile($srcLogoPath)

# Bounding box of MC monogram based on scan:
# X from ~288 to ~744 (width ~456)
# Y from ~68 to ~434 (height ~366)
[int]$cropX = 286
[int]$cropY = 66
[int]$cropW = 460
[int]$cropH = 370

$srcCropRect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropW, $cropH)

# Create 512x512 transparent symbol
$symBmp = New-Object System.Drawing.Bitmap(512, 512, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$gSym = [System.Drawing.Graphics]::FromImage($symBmp)
$gSym.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$gSym.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$gSym.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$gSym.Clear([System.Drawing.Color]::Transparent)

# Fit into 512x512
[int]$destW = 440
[int]$destH = [int](($cropH / $cropW) * $destW) # ~354
[int]$destX = [int]((512 - $destW) / 2)
[int]$destY = [int]((512 - $destH) / 2)

$destSymRect = New-Object System.Drawing.Rectangle($destX, $destY, $destW, $destH)
$gSym.DrawImage($logoBmp, $destSymRect, $srcCropRect, [System.Drawing.GraphicsUnit]::Pixel)
$gSym.Dispose()

$symBmp.Save("$publicDir\logo-symbol.png", [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "Saved $publicDir\logo-symbol.png"

# 4. Multi-resolution Favicons
function CreateFaviconIcon([int]$size, [string]$outPath) {
    $iconBmp = New-Object System.Drawing.Bitmap($size, $size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($iconBmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.Clear([System.Drawing.Color]::Transparent)

    # Rounded luxury navy background (#07101E)
    $bgBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 7, 16, 30))
    $g.FillEllipse($bgBrush, 0, 0, $size, $size)
    $bgBrush.Dispose()

    # Outer border ring in warm gold (#C5A059)
    [double]$penWidth = [Math]::Max(1.0, [double]$size / 20.0)
    $goldPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(255, 197, 160, 89), [float]$penWidth)
    $g.DrawEllipse($goldPen, 1, 1, [int]($size - 2), [int]($size - 2))
    $goldPen.Dispose()

    # Draw monogram symbol inside
    [int]$pad = [int]($size * 0.15)
    [int]$innerW = [int]($size - ($pad * 2))
    [int]$innerH = [int]($innerW * ($destH / $destW))
    [int]$innerX = $pad
    [int]$innerY = [int](($size - $innerH) / 2)

    $destInner = New-Object System.Drawing.Rectangle($innerX, $innerY, $innerW, $innerH)
    $g.DrawImage($symBmp, $destInner, $destX, $destY, $destW, $destH, [System.Drawing.GraphicsUnit]::Pixel)
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

# Copy to app/
CreateFaviconIcon 192 "$appDir\icon.png"
CreateFaviconIcon 180 "$appDir\apple-icon.png"

# Create .ico file using 32x32 bitmap
$icoBmp = New-Object System.Drawing.Bitmap("$publicDir\favicon-32x32.png")
$icoHicon = $icoBmp.GetHicon()
$iconObj = [System.Drawing.Icon]::FromHandle($icoHicon)

if (Test-Path "$publicDir\favicon.ico") { Remove-Item "$publicDir\favicon.ico" -Force }
if (Test-Path "$appDir\favicon.ico") { Remove-Item "$appDir\favicon.ico" -Force }

$fsPublic = [System.IO.File]::OpenWrite("$publicDir\favicon.ico")
$iconObj.Save($fsPublic)
$fsPublic.Close()

$fsApp = [System.IO.File]::OpenWrite("$appDir\favicon.ico")
$iconObj.Save($fsApp)
$fsApp.Close()

$iconObj.Dispose()
$icoBmp.Dispose()
Write-Host "Favicons written successfully to public\favicon.ico and app\favicon.ico"

$symBmp.Dispose()
$logoBmp.Dispose()
