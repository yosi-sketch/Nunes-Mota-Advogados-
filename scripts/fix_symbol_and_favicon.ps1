Add-Type -AssemblyName System.Drawing

$srcLogoPath = "C:\Users\matheus\.gemini\antigravity\brain\5a692096-e004-49db-abe4-dc4705733665\.user_uploaded\media_1793302691894_4b71df1b.png"
$publicDir = "p:\Work\teste de oferta\página de vendas\antigravity\2Ângela Maria Gonçalves Rabelo — Advogada\public"
$appDir = "p:\Work\teste de oferta\página de vendas\antigravity\2Ângela Maria Gonçalves Rabelo — Advogada\app"

$logoBmp = [System.Drawing.Bitmap]::FromFile($srcLogoPath)

# Monogram bounds: X=[398, 622] (width 225), Y=[14, 205] (height 192)
# Center: X = 510, Y = 109.5
[int]$cropW = 236
[int]$cropH = 202
[int]$srcX = 393
[int]$srcY = 9

$srcCropRect = New-Object System.Drawing.Rectangle($srcX, $srcY, $cropW, $cropH)

# Create 512x512 transparent symbol
$symBmp = New-Object System.Drawing.Bitmap(512, 512, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$gSym = [System.Drawing.Graphics]::FromImage($symBmp)
$gSym.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$gSym.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$gSym.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$gSym.Clear([System.Drawing.Color]::Transparent)

# Fit into 512x512 with equal aspect ratio
[int]$destW = 440
[int]$destH = [int](($cropH / $cropW) * $destW) # ~376
[int]$destX = [int]((512 - $destW) / 2)
[int]$destY = [int]((512 - $destH) / 2)

$destSymRect = New-Object System.Drawing.Rectangle($destX, $destY, $destW, $destH)
$gSym.DrawImage($logoBmp, $destSymRect, $srcCropRect, [System.Drawing.GraphicsUnit]::Pixel)
$gSym.Dispose()

$symBmp.Save("$publicDir\logo-symbol.png", [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "Created $publicDir\logo-symbol.png with perfect monogram crop"

# Multi-resolution favicons
function CreateFaviconIcon([int]$size, [string]$outPath) {
    $iconBmp = New-Object System.Drawing.Bitmap($size, $size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($iconBmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.Clear([System.Drawing.Color]::Transparent)

    # Rounded luxury dark charcoal badge (#0b0e14)
    $bgBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 11, 14, 20))
    $g.FillEllipse($bgBrush, 0, 0, $size, $size)
    $bgBrush.Dispose()

    # Outer border ring in ruby carmine (#B81424)
    [double]$penWidth = [Math]::Max(1.0, [double]$size / 22.0)
    $rubyPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(255, 184, 20, 36), [float]$penWidth)
    $g.DrawEllipse($rubyPen, 1, 1, [int]($size - 2), [int]($size - 2))
    $rubyPen.Dispose()

    # Draw monogram symbol inside
    [int]$pad = [int]($size * 0.14)
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

# Remove old favicon files first to prevent lock/append issues
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
