import 'package:flutter/material.dart';

class CustomFadeWidget extends StatefulWidget {
  final Widget child;
  final Duration loadingDuration;
  final Duration waitBeforeLoad;
  const CustomFadeWidget({
    super.key,
    required this.child,
    this.loadingDuration = const Duration(milliseconds: 500),
    this.waitBeforeLoad = const Duration(milliseconds: 100),
  });

  @override
  State<CustomFadeWidget> createState() => _CustomFadeWidgetState();
}

class _CustomFadeWidgetState extends State<CustomFadeWidget> {
  bool isLoaded = false;
  @override
  void initState() {
    Future.delayed(widget.waitBeforeLoad, () {
    if (mounted) {
      setState(() {
         
          isLoaded = true;
        
      });
    }
    });
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return AnimatedOpacity(
      opacity: isLoaded ? 1 : 0,
      duration: widget.loadingDuration,
      child: widget.child,
    );
  }
}
