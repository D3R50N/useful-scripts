@echo off
ipconfig
if '%1%'=='' goto default

python -m http.server %1%

:default
  python -m http.server 3000