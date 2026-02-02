import 'package:flutter/material.dart';
import 'dart:math' as math;

class StarGlow extends StatelessWidget {
  final double size;

  const StarGlow({super.key, this.size = 80});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: size,
      height: size,
      child: Stack(
        fit: StackFit.expand,
        children: [
          // Outer glow
          Container(
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              gradient: RadialGradient(
                colors: [
                  const Color.fromRGBO(255, 220, 150, 0.8),
                  const Color.fromRGBO(255, 200, 120, 0.3),
                  Colors.transparent,
                ],
                stops: const [0.0, 0.5, 0.7],
              ),
            ),
          ),
          // Middle glow
          FractionallySizedBox(
            widthFactor: 0.7,
            heightFactor: 0.7,
            child: Container(
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                gradient: RadialGradient(
                  colors: [
                    const Color.fromRGBO(255, 235, 180, 0.9),
                    const Color.fromRGBO(255, 215, 140, 0.4),
                    Colors.transparent,
                  ],
                  stops: const [0.0, 0.6, 0.8],
                ),
              ),
            ),
          ),
          // Star shape
          CustomPaint(
            painter: StarPainter(),
            child: Container(), // Fill parent
          ),
          // Inner highlight
          FractionallySizedBox(
            widthFactor: 0.3,
            heightFactor: 0.3,
            child: Container(
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                gradient: RadialGradient(
                  colors: [
                    Colors.white.withOpacity(0.9),
                    Colors.transparent,
                  ],
                  stops: const [0.0, 0.6],
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class StarPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..shader = const LinearGradient(
        begin: Alignment.topLeft,
        end: Alignment.bottomRight,
        colors: [
          Color(0xFFFFF5E1),
          Color(0xFFFFE4B5),
          Color(0xFFFFD78C),
        ],
      ).createShader(Rect.fromLTWH(0, 0, size.width, size.height))
      ..style = PaintingStyle.fill;

    // Shadow
    // Note: Simple shadow, can be improved
    final shadowPaint = Paint()
      ..color = const Color.fromRGBO(255, 220, 150, 0.6)
      ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 8);

    final path = Path();
    // Logic to scale 100x100 path to size
    final scaleX = size.width / 100;
    final scaleY = size.height / 100;

    // M50 10 L58 38 L88 38 L64 56 L72 84 L50 68 L28 84 L36 56 L12 38 L42 38 Z
    path.moveTo(50 * scaleX, 10 * scaleY);
    path.lineTo(58 * scaleX, 38 * scaleY);
    path.lineTo(88 * scaleX, 38 * scaleY);
    path.lineTo(64 * scaleX, 56 * scaleY);
    path.lineTo(72 * scaleX, 84 * scaleY);
    path.lineTo(50 * scaleX, 68 * scaleY);
    path.lineTo(28 * scaleX, 84 * scaleY);
    path.lineTo(36 * scaleX, 56 * scaleY);
    path.lineTo(12 * scaleX, 38 * scaleY);
    path.lineTo(42 * scaleX, 38 * scaleY);
    path.close();

    canvas.drawPath(path, shadowPaint);
    canvas.drawPath(path, paint);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) {
    return false;
  }
}
