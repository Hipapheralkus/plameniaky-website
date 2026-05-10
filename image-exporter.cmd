@echo off
setlocal enabledelayedexpansion
title Plameniaky Image Exporter

REM ============================================================
REM   Plameniaky Image Exporter — one-click launcher
REM   Double-click this file. It will:
REM     1. Check that Node.js is installed (offer to install via
REM        winget if it isn't)
REM     2. Install tool dependencies on first run
REM     3. Start the server and open your browser to it
REM ============================================================

REM --- Step 1: is Node.js available? ----------------------------------------
where node >nul 2>nul
if errorlevel 1 (
    echo.
    echo ===============================================
    echo   Node.js is not installed.
    echo ===============================================
    echo.
    echo This tool needs Node.js to run.
    echo.

    where winget >nul 2>nul
    if errorlevel 1 (
        echo Windows Package Manager ^(winget^) is not available either.
        echo.
        echo Please install Node.js LTS from:
        echo     https://nodejs.org/en/download
        echo.
        echo The download page will open in your browser now.
        start "" "https://nodejs.org/en/download"
        pause
        exit /b 1
    )

    set /p INSTALL="Install Node.js LTS now using winget? (Y/N): "
    if /i not "!INSTALL!"=="Y" (
        echo Cancelled. Please install Node.js manually from https://nodejs.org/
        pause
        exit /b 1
    )

    echo.
    echo Installing Node.js LTS via winget...
    echo ^(You may see a User Account Control prompt — click Yes.^)
    echo.
    winget install -e --id OpenJS.NodeJS.LTS --accept-package-agreements --accept-source-agreements
    if errorlevel 1 (
        echo.
        echo Install failed. Please install manually from https://nodejs.org/
        pause
        exit /b 1
    )

    echo.
    echo ===============================================
    echo   Node.js installed.
    echo   IMPORTANT: close this window and double-click
    echo   image-exporter.cmd again so the updated PATH
    echo   takes effect.
    echo ===============================================
    pause
    exit /b 0
)

REM --- Step 2: install tool dependencies on first run ----------------------
cd /d "%~dp0tools\image-exporter"

if not exist node_modules (
    echo.
    echo First-time setup: installing tool dependencies...
    echo This takes about 30 seconds and only happens once.
    echo.
    call npm install --silent
    if errorlevel 1 (
        echo.
        echo Dependency install failed.
        pause
        exit /b 1
    )
    echo Done.
    echo.
)

REM --- Step 3: launch -------------------------------------------------------
cls
echo.
echo  ============================================================
echo.
echo    Plameniaky Image Exporter is starting...
echo.
echo    Your browser will open automatically.
echo    If it doesn't, copy this address into the browser:
echo.
echo        http://127.0.0.1:5174/
echo.
echo    To stop the tool: close this window.
echo.
echo  ============================================================
echo.

REM Open browser shortly after starting node so the server has time to bind.
start "" /b cmd /c "timeout /t 2 /nobreak >nul && start http://127.0.0.1:5174/"

node server.js

echo.
echo Server stopped.
pause
