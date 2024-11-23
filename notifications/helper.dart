import 'package:flutter/material.dart';
import 'package:flutter_local_notifications/flutter_local_notifications.dart';
import 'actions.dart';

AndroidNotificationAction defaultAndroidNotificationAction(
  ActionsId id,
  String title, {
  bool allowGeneratedReplies = false,
  bool cancelNotification = true,
  AndroidBitmap<Object>? icon,
  bool contextual = false,
  bool showsUserInterface = true,
  List<AndroidNotificationActionInput> inputs = const [],
  Color? titleColor,
}) {
  return AndroidNotificationAction(
    id.toString(),
    title,
    allowGeneratedReplies: allowGeneratedReplies,
    cancelNotification: cancelNotification,
    icon: icon,
    contextual: contextual,
    showsUserInterface: true,
    inputs: inputs,
    titleColor: titleColor,
  );
}

extension ENR on NotificationResponse {
  ActionsId get action =>
      ActionsId.values.firstWhere((element) => element.toString() == actionId);
  bool actionIs(ActionsId id) {
    return actionId == id.toString();
  }

  bool actionIsStr(String id) {
    return actionId == id;
  }

  bool payloadIs(String id) {
    return payload == id;
  }

  bool inputIs(String id) {
    return input == id;
  }

  bool notificationResponseTypeIs(NotificationResponseType type) {
    return notificationResponseType == type;
  }
}
