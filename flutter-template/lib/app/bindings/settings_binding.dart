
import 'package:get/get.dart';
import '../controllers/settings_controller.dart';


class SettingsBinding implements Bindings {
  @override
  void dependencies() {
    Get.lazyPut<SettingsController>(() => SettingsController());
  }
}