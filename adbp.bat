@echo off
set /p h=Host num :
set /p pp=Pairing Port :
set /p c=Code :
set /p cp=Connecting Port :
@ECHO on
adb pair 192.168.0.%h%:%pp% %c%
adb connect 192.168.0.%h%:%cp%
