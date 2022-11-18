import 'package:flutter/material.dart';
import 'package:get/get.dart';
import '../../../controllers/settings_controller.dart';

class SettingsPage extends GetView<SettingsController> {
  const SettingsPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Paramètres'),
      ),
      body: SafeArea(
        child: ListView(
          children: [
            SwitchListTile(
              value: true,
              onChanged: (value) {},
              title: const Text("Un paramètre"),
              subtitle: const Text("Une description briève du paramètre"),
            ),
            SwitchListTile(
              value: true,
              onChanged: (value) {},
              title: const Text("Un paramètre"),
              subtitle: const Text("Une description briève du paramètre"),
            ),
            SwitchListTile(
              value: true,
              onChanged: (value) {},
              title: const Text("Un paramètre"),
              subtitle: const Text("Une description briève du paramètre"),
            ),
            CheckboxListTile(
              value: true,
              onChanged: (value) {},
              title: const Text("Un paramètre"),
              subtitle: const Text("Une description briève du paramètre"),
            ),
            RadioListTile(
              value: true,
              groupValue: true,
              onChanged: (value) {},
              title: const Text("Un paramètre"),
              subtitle: const Text("Une description briève du paramètre"),
            ),
            const AboutListTile(
              applicationName: "Default App",
              child: Text("À propos"),
            ),
          ],
        ),
      ),
    );
  }
}
