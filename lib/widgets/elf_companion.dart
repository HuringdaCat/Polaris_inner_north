import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ElfCompanion extends StatelessWidget {
  final double size;

  const ElfCompanion({super.key, this.size = 100});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: size,
      height: size * 1.2,
      child: Stack(
        children: [
          // Soft glow behind elf
          Positioned.fill(
            child: Container(
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                gradient: RadialGradient(
                  colors: [
                    const Color(0xFFC8B4FF).withOpacity(0.6),
                    const Color(0xFFB4A0E6).withOpacity(0.3),
                    Colors.transparent,
                  ],
                  stops: const [0.0, 0.5, 0.7],
                ),
              ),
              transform: Matrix4.translationValues(0, size * 0.2, 0),
            ),
          ),
          // Elf SVG
          SvgPicture.asset(
            'assets/images/elf_companion.svg',
            width: size,
            height: size * 1.2,
          ),
        ],
      ),
    );
  }
}
