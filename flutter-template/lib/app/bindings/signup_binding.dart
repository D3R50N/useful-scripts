
import 'package:get/get.dart';
import '../controllers/signup_controller.dart';


class SignupBinding implements Bindings {
  @override
  void dependencies() {
    Get.lazyPut<SignupController>(() => SignupController());
  }
}