@echo off
xcopy "%DEV%\scripts\flutter-template\assets\fonts" assets/fonts /y /s /i /e >NUL
add-font Lato -r -bl -b -l