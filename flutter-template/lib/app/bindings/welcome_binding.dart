
import 'package:get/get.dart';
import '../controllers/welcome_controller.dart';


class WelcomeBinding implements Bindings {
  @override
  void dependencies() {
    Get.lazyPut<WelcomeController>(() => WelcomeController());
  }
}