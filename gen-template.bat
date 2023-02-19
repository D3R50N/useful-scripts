@echo off
cp "C:\Script\flutter-template" -r -i -T .
rm -r lib\app\ui\global_widgets
gen-default-fonts; & add-asset images/ ; & cat "C:\Script\default_packages.txt"
