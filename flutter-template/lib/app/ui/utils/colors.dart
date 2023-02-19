import 'dart:math';

import 'package:flutter/material.dart';

class AppTheme {
  static List<Color> mainColors = [rgb(234, 100, 27)];
  static List<Color> secondaryColors = [rgb(35, 34, 58)];
  static List<Color> fontColors = [
    rgb(35, 35, 46),
    rgb(245, 245, 255),
    rgb(37, 47, 107)
  ];
  static List<Color> bgColors = [
    Colors.white,
    rgb(24, 34, 61),
    rgb(245, 245, 255)
  ];

  static int index = 0;
}

Color get mainColor => AppTheme.index >= AppTheme.mainColors.length
    ? Colors.white
    : AppTheme.mainColors[AppTheme.index];

Color get secondaryColor => AppTheme.index >= AppTheme.secondaryColors.length
    ? Colors.white
    : AppTheme.secondaryColors[AppTheme.index];

Color get fontColor => AppTheme.index >= AppTheme.fontColors.length
    ? Colors.black
    : AppTheme.fontColors[AppTheme.index];

Color get bgColor => AppTheme.index >= AppTheme.bgColors.length
    ? Colors.white
    : AppTheme.bgColors[AppTheme.index];

Color rgb(r, g, b) {
  return Color.fromRGBO(r, g, b, 1);
}



MaterialColor generateMaterialColor(Color color) {
  return MaterialColor(color.value, {
    50: tintColor(color, 0.9),
    100: tintColor(color, 0.8),
    200: tintColor(color, 0.6),
    300: tintColor(color, 0.4),
    400: tintColor(color, 0.2),
    500: color,
    600: shadeColor(color, 0.1),
    700: shadeColor(color, 0.2),
    800: shadeColor(color, 0.3),
    900: shadeColor(color, 0.4),
  });
}

int tintValue(int value, double factor) =>
    max(0, min((value + ((255 - value) * factor)).round(), 255));

Color tintColor(Color color, double factor) => Color.fromRGBO(
    tintValue(color.red, factor),
    tintValue(color.green, factor),
    tintValue(color.blue, factor),
    1);

int shadeValue(int value, double factor) =>
    max(0, min(value - (value * factor).round(), 255));

Color shadeColor(Color color, double factor) => Color.fromRGBO(
    shadeValue(color.red, factor),
    shadeValue(color.green, factor),
    shadeValue(color.blue, factor),
    1);
