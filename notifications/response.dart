import 'package:flutter_local_notifications/flutter_local_notifications.dart';
import 'package:get/get.dart';
import 'package:tchatty/app/chat/chat.dart';
import 'package:tchatty/app/chat/tchatty.dart';
import 'package:tchatty/app/routes/route.dart';
import 'actions.dart';
import 'helper.dart';

void onNotificationResponse(NotificationResponse details) async {
  if (details.payload?.startsWith("chat_") ?? false) {
    String chatId = details.payload!.split("_")[1];
    Chat chat = (await Tchatty.chatExists(chatId))["data"] as Chat;
    Get.toNamed(Routes.chat, arguments: chat);
  }
  switch (details.action) {
    case ActionsId.openChat:
      String chatId = details.payload!.split("_")[1];
      Chat chat = (await Tchatty.chatExists(chatId))["data"] as Chat;
      Get.toNamed(Routes.chat, arguments: chat);
      break;
    default:
  }
}
