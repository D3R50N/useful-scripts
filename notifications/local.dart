import 'dart:io';

import 'package:flutter_local_notifications/flutter_local_notifications.dart';

class LocalNotificationService {
  // Instance of Flutternotification plugin
  static final FlutterLocalNotificationsPlugin notificationsPlugin =
      FlutterLocalNotificationsPlugin();

  static String channelId = 'app_channel_id';
  static String channelName = 'app_channel_name';
  static AndroidNotificationSound? sound;

  static Future<void> initialize(
      {void Function(NotificationResponse)? onResponse}) async {
    // Initialization  setting for android

    var initializationsSettings = const InitializationSettings(
      android: AndroidInitializationSettings("mipmap/ic_launcher"),
      iOS: DarwinInitializationSettings(),
    );
    await notificationsPlugin.initialize(
      initializationsSettings,
      onDidReceiveNotificationResponse: (details) async {
        if (onResponse != null) {
          onResponse(details);
        }
      },
    );
  }

  static Future show({
    int id = 0,
    required String title,
    String? body,
    bool playSound = true,
    String? payload,
    List<AndroidNotificationAction>? actions,
    NotificationVisibility visibility = NotificationVisibility.public,
    StyleInformation styleInformation =
        const DefaultStyleInformation(true, true),
  }) async {
    AndroidNotificationDetails androidDetails = AndroidNotificationDetails(
      channelId,
      channelName,
      playSound: playSound,
      channelShowBadge: true,
      visibility: visibility,
      silent: !playSound,
      actions: actions,
      sound: sound,
      importance: Importance.max,
      priority: Priority.high,
      styleInformation: styleInformation,
    ); //AndroidNotificationDetails

    var details = NotificationDetails(
        android: androidDetails, iOS: const DarwinNotificationDetails());

// NotificationDetails
    if (Platform.isAndroid) {
      await LocalNotificationService.notificationsPlugin
          .resolvePlatformSpecificImplementation<
              AndroidFlutterLocalNotificationsPlugin>()
          ?.requestNotificationsPermission();
    }
    await LocalNotificationService.notificationsPlugin
        .show(id, title, body, details, payload: payload);
  }
}
