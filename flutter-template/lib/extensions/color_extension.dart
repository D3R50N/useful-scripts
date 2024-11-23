import 'dart:math';

import 'package:flutter/material.dart';

extension ColorExtension on Color {
  MaterialColor generateMaterialColor() {
    return MaterialColor(value, {
      50: tintColor(0.9),
      100: tintColor(0.8),
      200: tintColor(0.6),
      300: tintColor(0.4),
      400: tintColor(0.2),
      500: this,
      600: shadeColor(0.1),
      700: shadeColor(0.2),
      800: shadeColor(0.3),
      900: shadeColor(0.4),
    });
  }

  Color tintColor(double factor) => Color.fromRGBO(tintValue(red, factor),
      tintValue(green, factor), tintValue(blue, factor), 1);

  int shadeValue(int value, double factor) =>
      max(0, min(value - (value * factor).round(), 255));

  Color shadeColor(double factor) => Color.fromRGBO(shadeValue(red, factor),
      shadeValue(green, factor), shadeValue(blue, factor), 1);
}

int tintValue(int value, double factor) =>
    max(0, min((value + ((255 - value) * factor)).round(), 255));



