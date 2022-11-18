
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import '../../../controllers/welcome_controller.dart';


class WelcomePage extends GetView<WelcomeController> {
  const WelcomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('WelcomePage'),
      ),
      body: const SafeArea(
        child: Text('WelcomeController'),
      ),
    );
  }
}
  