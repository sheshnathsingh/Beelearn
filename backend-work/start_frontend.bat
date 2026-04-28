@echo off
echo ========================================
echo Starting BEE_Learn_LMS Frontend Server
echo ========================================
echo.
cd /d "%~dp0elearningplatform-main"
echo Starting Vite dev server...
echo.
npm run dev
pause
