@echo off
xcopy "%DEV%\scripts\flutter-template" . /y /s /i /e >NUL

echo "Ajout des fonts par defaut..."
call add-f Poppins -r -b -m
echo "Ajout des assets par defaut..."
call add-a 
call add-a images/
echo "Ajout des packages par defaut..."
flutter pub add flutter_launcher_icons flutter_native_splash get gap flutter_animate font_awesome_flutter flutter_animate shared_preferences
