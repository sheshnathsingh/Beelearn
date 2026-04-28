# Start Backend Server
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Starting BEE_Learn_LMS Backend Server" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Set-Location -Path "$PSScriptRoot\backend"
Write-Host "Starting Flask server on http://localhost:5000" -ForegroundColor Green
Write-Host ""

python run.py

Write-Host ""
Write-Host "Press any key to exit..." -ForegroundColor Yellow
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
