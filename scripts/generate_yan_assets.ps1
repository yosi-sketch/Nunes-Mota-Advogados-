Add-Type -AssemblyName System.Drawing

$srcLogoPath = "C:\Users\matheus\.gemini\antigravity\brain\4545a5a0-c28e-430f-818d-57cf378c0430\.user_uploaded\media_1793307642835_ec7b4517.png"
$srcPhotoPath = "C:\Users\matheus\.gemini\antigravity\brain\4545a5a0-c28e-430f-818d-57cf378c0430\.user_uploaded\media_1793307746825_4ad317b0.jpg"

$publicDir = "p:\Work\teste de oferta\página de vendas\antigravity\2Yan Marlon — Advocacia\public"
$appDir = "p:\Work\teste de oferta\página de vendas\antigravity\2Yan Marlon — Advocacia\app"

if (-not (Test-Path $publicDir)) {
    New-Item -ItemType Directory -Path $publicDir -Force | Out-Null
}

# 1. Copy full logo to public/logo.png
Copy-Item -Path $srcLogoPath -Destination "$publicDir\logo.png" -Force
Write-Host "Saved $publicDir\logo.png"

# 2. Copy photo assets to public/
Copy-Item -Path $srcPhotoPath -Destination "$publicDir\dr-yan-marlon.jpg" -Force
Copy-Item -Path $srcPhotoPath -Destination "$publicDir\hero-advogado.jpg" -Force
Copy-Item -Path $srcPhotoPath -Destination "$publicDir\sobre-advogado.jpg" -Force
Write-Host "Saved photo assets in public"

# 3. Crop Golden Scales Symbol
$logoBmp = [System.Drawing.Bitmap]::FromFile($srcLogoPath)

# Bounding box of the circular scales symbol:
# X: 27 to 359, Y: 33 to 303
[int]$cropX = 26
[int]$cropY = 32
[int]$cropW = 334
[int]$cropH = 272

$srcCropRect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropW, $cropH)

# Create 512x512 transparent symbol
$symBmp = New-Object System.Drawing.Bitmap(512, 512, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$gSym = [System.Drawing.Graphics]::FromImage($symBmp)
$gSym.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$gSym.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$gSym.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$gSym.Clear([System.Drawing.Color]::Transparent)

# Fit into 512x512 with balanced padding
[int]$targetSize = 460
[double]$ratio = [Math]::Min($targetSize / $cropW, $targetSize / $cropH)
[int]$destW = [int]($cropW * $ratio)
[int]$destH = [int]($cropH * $ratio)
[int]$destX = [int]((512 - $destW) / 2)
[int]$destY = [int]((512 - $destH) / 2)

$destSymRect = New-Object System.Drawing.Rectangle($destX, $destY, $destW, $destH)
$gSym.DrawImage($logoBmp, $destSymRect, $srcCropRect, [System.Drawing.GraphicsUnit]::Pixel)
$gSym.Dispose()

$symBmp.Save("$publicDir\logo-symbol.png", [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "Saved $publicDir\logo-symbol.png"

# 4. Multi-resolution Favicons & App Icons
function CreateFaviconIcon([int]$size, [string]$outPath) {
    $iconBmp = New-Object System.Drawing.Bitmap($size, $size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($iconBmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.Clear([System.Drawing.Color]::Transparent)

    # Rich dark luxury midnight navy background (#070d18)
    $bgBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 7, 13, 24))
    $g.FillEllipse($bgBrush, 0, 0, $size, $size)
    $bgBrush.Dispose()

    # Outer border ring in warm polished gold (#d4af37)
    [float]$penWidth = [Math]::Max(1.0, [double]($size / 20.0))
    $goldPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(255, 212, 175, 55), [float]$penWidth)
    $g.DrawEllipse($goldPen, 1, 1, [int]($size - 2), [int]($size - 2))
    $goldPen.Dispose()

    # Draw golden scales symbol inside
    [int]$pad = [int]($size * 0.12)
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

# Generate genuine multi-size .ico file
function CreateIco([string[]]$pngPaths, [string]$outIcoPath) {
    $fs = [System.IO.File]::Create($outIcoPath)
    $bw = New-Object System.IO.BinaryWriter($fs)

    # ICONDIR header: idReserved (0), idType (1 for ICO), idCount
    $bw.Write([uint16]0)
    $bw.Write([uint16]1)
    $bw.Write([uint16]$pngPaths.Length)

    [int]$offset = 6 + (16 * $pngPaths.Length)
    $fileBytesList = @()

    foreach ($pngPath in $pngPaths) {
        $bytes = [System.IO.File]::ReadAllBytes($pngPath)
        $fileBytesList += ,$bytes
        $bmpTemp = [System.Drawing.Bitmap]::FromFile($pngPath)
        [byte]$bWidth = if ($bmpTemp.Width -ge 256) { 0 } else { [byte]$bmpTemp.Width }
        [byte]$bHeight = if ($bmpTemp.Height -ge 256) { 0 } else { [byte]$bmpTemp.Height }
        $bmpTemp.Dispose()

        $bw.Write($bWidth)
        $bw.Write($bHeight)
        $bw.Write([byte]0)   # color count
        $bw.Write([byte]0)   # reserved
        $bw.Write([uint16]1) # color planes
        $bw.Write([uint16]32)# bpp
        $bw.Write([uint32]$bytes.Length)
        $bw.Write([uint32]$offset)

        $offset += $bytes.Length
    }

    foreach ($b in $fileBytesList) {
        $bw.Write($b)
    }

    $bw.Flush()
    $bw.Close()
    $fs.Close()
    Write-Host "Created true multi-res ICO at $outIcoPath"
}

CreateIco @("$publicDir\favicon-16x16.png", "$publicDir\favicon-32x32.png", "$publicDir\icon.png") "$publicDir\favicon.ico"
Copy-Item "$publicDir\favicon.ico" -Destination "$appDir\favicon.ico" -Force
Write-Host "Favicon successfully applied to public and app directory."

$logoBmp.Dispose()
$symBmp.Dispose()
