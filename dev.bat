@echo off
node %DEV%\scripts\js\dev_folder.js %*% > output95875412.txt
set /p targetDirectory=<output95875412.txt
del output95875412.txt
cd %targetDirectory%