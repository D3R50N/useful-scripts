import 'package:PKG/app/bindings/home_binding.dart';
import 'package:PKG/app/bindings/login_binding.dart';
import 'package:PKG/app/bindings/settings_binding.dart';
import 'package:PKG/app/bindings/signup_binding.dart';
import 'package:PKG/app/bindings/welcome_binding.dart';
import 'package:PKG/app/routes/route.dart';
import 'package:PKG/app/ui/pages/home_page/home_page.dart';
import 'package:PKG/app/ui/pages/login_page/login_page.dart';
import 'package:PKG/app/ui/pages/settings_page/settings_page.dart';
import 'package:PKG/app/ui/pages/signup_page/signup_page.dart';
import 'package:PKG/app/ui/pages/welcome_page/welcome_page.dart';
import 'package:PKG/app/ui/utils/colors.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      title: 'Default App',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        scaffoldBackgroundColor: bgColor,
        //  primarySwatch: Colors.blue,
        fontFamily: "Alexandria",
        appBarTheme: const AppBarTheme(
          elevation: 0,
        ),
        colorScheme: ColorScheme.fromSwatch().copyWith(primary: mainColor),
        //set default text color to fontColor
        textTheme: TextTheme(
          bodyText1: TextStyle(color: fontColor),
          bodyText2: TextStyle(color: fontColor),
        ),
      ),
      initialRoute: Routes.home,
      getPages: [
        GetPage(
          name: Routes.home,
          page: () => const HomePage(),
          binding: HomeBinding(),
        ),
        GetPage(
          name: Routes.welcome,
          page: () => const WelcomePage(),
          binding: WelcomeBinding(),
        ),
        GetPage(
          name: Routes.settings,
          page: () => const SettingsPage(),
          binding: SettingsBinding(),
        ),
        GetPage(
          name: Routes.login,
          page: () => const LoginPage(),
          binding: LoginBinding(),
        ),
        GetPage(
          name: Routes.signup,
          page: () => const SignupPage(),
          binding: SignupBinding(),
        ),
      ],
    );
  }
}
