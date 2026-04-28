# Start Frontend Server
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Starting BEE_Learn_LMS Frontend Server" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Set-Location -Path "$PSScriptRoot\elearningplatform-main"
Write-Host "Starting Vite dev server..." -ForegroundColor Green
Write-Host ""

npm run dev

Write-Host ""
Write-Host "Press any key to exit..." -ForegroundColor Yellow
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
