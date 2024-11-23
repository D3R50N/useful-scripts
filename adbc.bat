@echo off
set /p h=Host num :
set /p cp=Connecting Port :
@ECHO on
adb connect 192.168.0.%h%:%cp%