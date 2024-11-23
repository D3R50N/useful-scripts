@echo off
xcopy "%DEV%\scripts\extension-template" . /y /s /i /e >NUL
node %DEV%\scripts\js\ext-temp.js %*%