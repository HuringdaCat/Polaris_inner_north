import 'dart:ui';
import 'package:flutter/material.dart';

enum ArchVariant { defaults, compact, wide }

class ArchContainer extends StatelessWidget {
  final Widget children; // Note: Named 'children' in React code, typically 'child' in Flutter unless it's a List
  final ArchVariant variant;
  final VoidCallback? onTap;

  const ArchContainer({
    super.key,
    required this.children,
    this.variant = ArchVariant.defaults,
    this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    EdgeInsets padding;
    switch (variant) {
      case ArchVariant.compact:
        padding = const EdgeInsets.all(20);
        break;
      case ArchVariant.wide:
        padding = const EdgeInsets.all(32);
        break;
      case ArchVariant.defaults:
      default:
        padding = const EdgeInsets.all(24);
        break;
    }

    return GestureDetector(
      onTap: onTap,
      child: ClipRRect(
        borderRadius: BorderRadius.circular(24),
        child: BackdropFilter(
          filter: ImageFilter.blur(sigmaX: 10, sigmaY: 10),
          child: Container(
            padding: padding,
            decoration: BoxDecoration(
              color: Colors.white.withOpacity(0.1), // Fallback/Base
              gradient: LinearGradient(
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
                colors: [
                  Colors.white.withOpacity(0.15),
                  Colors.white.withOpacity(0.05),
                ],
              ),
              borderRadius: BorderRadius.circular(24),
              border: Border.all(
                color: Colors.white.withOpacity(0.2),
                width: 1,
              ),
              boxShadow: [
                BoxShadow(
                  color: Colors.black.withOpacity(0.08),
                  blurRadius: 32,
                  offset: const Offset(0, 8),
                ),
              ],
            ),
            child: children,
          ),
        ),
      ),
    );
  }
}
