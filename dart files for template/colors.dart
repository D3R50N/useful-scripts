import 'package:flutter/material.dart';

class AppTheme {
  static List<Color> mainColors = [rgb(37, 47, 107)];
  static List<Color> fontColors = [rgb(37, 47, 107)];
  static List<Color> bgColors = [rgb(245, 245, 255)];

  static int index = 0;
}

Color get mainColor => AppTheme.index >= AppTheme.mainColors.length
    ? Colors.white
    : AppTheme.mainColors[AppTheme.index];

Color get fontColor => AppTheme.index >= AppTheme.fontColors.length
    ? Colors.black
    : AppTheme.mainColors[AppTheme.index];

Color get bgColor => AppTheme.index >= AppTheme.bgColors.length
    ? Colors.white
    : AppTheme.bgColors[AppTheme.index];

Color rgb(r, g, b) {
  return Color.fromRGBO(r, g, b, 1);
}
