import 'package:flutter/material.dart';
import 'package:PKG/app/bindings/home_binding.dart';
import 'package:PKG/app/bindings/welcome_binding.dart';
import 'package:PKG/app/routes/route.dart';
import 'package:PKG/app/ui/pages/home_page/home_page.dart';
import 'package:PKG/app/ui/pages/welcome_page/welcome_page.dart';
import 'package:PKG/app/ui/utils/colors.dart';
import 'package:get/get.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return GetMaterialApp(
      title: 'Flutter Demo',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        scaffoldBackgroundColor: bgColor,
        //  primarySwatch: Colors.blue,
        colorScheme: ColorScheme.fromSwatch(primarySwatch: Colors.blue)
            .copyWith(secondary: mainColor),
      ),
      initialRoute: Routes.welcome,
      getPages: [
        GetPage(
          name: Routes.home,
          page: () => HomePage(),
          binding: HomeBinding(),
        ),
        GetPage(
          name: Routes.welcome,
          page: () => WelcomePage(),
          binding: WelcomeBinding(),
        ),
      ],
    );
  }
}
