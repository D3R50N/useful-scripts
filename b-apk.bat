cls
set argC=
for %%x in (%*) do call set argC=%%argC%%%%x 
if "%argC%"=="" goto commit
cd "D:\PROGRAMMATION\Flutter\Applications\%argC%" & cls
D: & cls
flutter build apk --split-per-abi & cd build\app\outputs\flutter-apk\ &explorer . & echo Ouverture de l'Explorateur
:commit
   cls & echo La commande est sous la forme : & echo b-apk Nom du dossier