@echo off
echo ========================================
echo Starting BEE_Learn_LMS Backend Server
echo ========================================
echo.
cd /d "%~dp0backend"
echo Starting Flask server on http://localhost:5000
echo.
python run.py
pause
