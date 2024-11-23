import 'package:flutter/material.dart';
import 'colors.dart';

// NOTE Thème clair de l'application
ThemeData lightThemeData = ThemeData(
  colorScheme: ColorScheme(
    background: backgroundColor,
    brightness: Brightness.light,
    error: secondaryColor,
    onBackground: fontColor,
    onError: fontColor,
    onPrimary: fontColor,
    onSecondary: fontColor,
    onSurface: fontColor,
    primary: primaryColor,
    secondary: secondaryColor,
    surface: backgroundColor,
  ),
  cardColor: cardColor,
  bottomNavigationBarTheme: BottomNavigationBarThemeData(
    backgroundColor: navColor,
    elevation: 0,
  ),
  appBarTheme: const AppBarTheme(
    backgroundColor: Colors.transparent,
    elevation: 0,
  ),
  iconTheme: IconThemeData(color: fontColor),
  fontFamily: 'Poppins',
  primaryColor: primaryColor,
  useMaterial3: false,
  scaffoldBackgroundColor: backgroundColor,
);

// NOTE Thème sombre de l'application
ThemeData darkThemeData = ThemeData(
  colorScheme: ColorScheme(
    background: backgroundColorDark,
    brightness: Brightness.dark,
    error: secondaryColorDark,
    onBackground: fontColorDark,
    onError: fontColorDark,
    onPrimary: fontColorDark,
    onSecondary: fontColorDark,
    onSurface: fontColorDark,
    primary: primaryColorDark,
    secondary: secondaryColorDark,
    surface: backgroundColorDark,
  ),
  cardColor: cardColorDark,
  scaffoldBackgroundColor: backgroundColorDark,
  bottomNavigationBarTheme: BottomNavigationBarThemeData(
    backgroundColor: navColorDark,
    elevation: 0,
  ),
  appBarTheme: const AppBarTheme(
    backgroundColor: Colors.transparent,
    elevation: 0,
  ),
  iconTheme: IconThemeData(color: fontColorDark),
  useMaterial3: false,
  fontFamily: 'Poppins',
  primaryColor: primaryColorDark,
);
