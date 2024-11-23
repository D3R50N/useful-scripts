import 'package:flutter_local_notifications/flutter_local_notifications.dart';
import 'helper.dart';

// Add your actions id here
enum ActionsId {
  openChat,
}

// Add your actions here
class ActionsList {
  static AndroidNotificationAction openChat = defaultAndroidNotificationAction(
    ActionsId.openChat,
    'Ouvrir le chat',
    // inputs: [const AndroidNotificationActionInput()],
  );
}
