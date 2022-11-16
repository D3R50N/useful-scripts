mkdir assets
cd assets
mkdir audios
mkdir fonts
mkdir images
cd ..
cd lib
@REM mkdir bindings
@REM mkdir components
@REM mkdir controllers
@REM mkdir database
mkdir extensions
@REM mkdir helpers
@REM mkdir models
@REM mkdir services
@REM mkdir temp
@REM mkdir utils
@REM mkdir views
cd app
cd ui
mkdir widgets
rm -r global_widgets
cd ..
cp "C:\Script\dart files for template\colors.dart" ui/utils/colors.dart
cp "C:\Script\dart files for template\styles.dart" ui/utils/styles.dart
cp "C:\Script\dart files for template\functions.dart" ui/utils/functions.dart
cp "C:\Script\dart files for template\main.dart" main.dart
cp "C:\Script\dart files for template\route.dart" routes/route.dart
@REM cp "C:\Script\dart files for template\home_view.dart" views/home_view.dart
@REM cp "C:\Script\dart files for template\home_binding.dart" bindings/home_binding.dart
@REM cp "C:\Script\dart files for template\home_controller.dart" controllers/home_controller.dart
cat "C:\Script\default_packages.txt"