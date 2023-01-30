@echo off
rm -r lib\app\ui\global_widgets
cp "C:\Script\flutter-template" -r -i -T .
gen-default-fonts; & add-asset images/ ; & cat "C:\Script\default_packages.txt"
