import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter_stripe/flutter_stripe.dart';
import 'package:get/get.dart';
import 'package:http/http.dart' as http;
import 'package:photonum/.env.dart';
import 'package:photonum/app/data/globals.dart';

calculateAmount(String amount) {
  return (int.parse(amount) * 100).toString();
}

createPaymentIntent(String amount, String currency) async {
  try {
    Map<String, dynamic> body = {
      'amount': calculateAmount(amount),
      'currency': currency,
      'payment_method_types[]': 'card',
    };

    var response = await http.post(
      Uri.parse("https://api.stripe.com/v1/payment_intents"),
      headers: {
        'Authorization': 'Bearer $SECRET_KEY',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: body,
    );
    // print(response.body);
    return jsonDecode(response.body);
  } catch (e) {
    // print(e);
  }
}

Future<void> makePayment() async {
  Map paymentIntent = await createPaymentIntent(promoPrice, "EUR");
  // print(paymentIntent);
  await Stripe.instance.initPaymentSheet(
    paymentSheetParameters: SetupPaymentSheetParameters(
      paymentIntentClientSecret: paymentIntent['client_secret'],
      merchantDisplayName: 'Photonum',
    ),
  );

  await displayPaymentSheet();

  return;
}

Future<bool> pay() async {
  try {
    await makePayment();
  } on StripeException catch (e) {
    // print("Erreur lors du paiement :");
    // print(e);
    if (e.error.code == FailureCode.Canceled ||
        e.error.code == FailureCode.Failed) {
      ScaffoldMessenger.of(Get.context!).showSnackBar(
        SnackBar(
          content: Text(e.error.code == FailureCode.Canceled
              ? "Paiement annulé"
              : "Erreur lors du paiement"),
          behavior: SnackBarBehavior.floating,
          duration: const Duration(seconds: 1),
        ),
      );
    }
    return false;
  }
  return true;
}

Future<void> displayPaymentSheet() async {
  await Stripe.instance.presentPaymentSheet();
}
