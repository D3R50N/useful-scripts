import 'package:flutter/material.dart';

class CustomPopWidget extends StatefulWidget {
  final Widget child;
  final Duration loadingDuration;
  final Duration waitBeforeLoad;
  const CustomPopWidget({
    super.key,
    required this.child,
    this.loadingDuration = const Duration(milliseconds: 500),
    this.waitBeforeLoad = const Duration(milliseconds: 100),
  });

  @override
  State<CustomPopWidget> createState() => _CustomPopWidgetState();
}

class _CustomPopWidgetState extends State<CustomPopWidget> {
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
    return AnimatedScale(
      scale: isLoaded ? 1 : 0,
      duration: widget.loadingDuration,
      child: widget.child,
    );
  }
}
