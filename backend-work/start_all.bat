@echo off
echo ========================================
echo Starting BEE_Learn_LMS Application
echo ========================================
echo.
echo Starting Backend Server...
start "Backend Server" cmd /k "cd /d %~dp0backend && python run.py"
timeout /t 3 /nobreak >nul
echo.
echo Starting Frontend Server...
start "Frontend Server" cmd /k "cd /d %~dp0elearningplatform-main && npm run dev"
echo.
echo ========================================
echo Both servers are starting!
echo Backend: http://localhost:5000
echo Frontend: http://localhost:5173
echo ========================================
echo.
echo Press any key to stop all servers...
pause >nul
taskkill /FI "WINDOWTITLE eq Backend Server*" /T /F >nul 2>&1
taskkill /FI "WINDOWTITLE eq Frontend Server*" /T /F >nul 2>&1
echo Servers stopped.
