import 'package:flutter/material.dart';
import 'package:polaris/widgets/elf_companion.dart';
import 'package:polaris/widgets/star_glow.dart';

class ReadyToBegin extends StatelessWidget {
  final String nickname;
  final VoidCallback onComplete;

  const ReadyToBegin({
    super.key,
    required this.nickname,
    required this.onComplete,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        const Spacer(),
        const Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
             ElfCompanion(size: 100),
             SizedBox(width: 16),
             StarGlow(size: 80),
          ],
        ),
        const SizedBox(height: 32),
        Text(
          "You're all set, $nickname",
          style: const TextStyle(
            color: Colors.white,
            fontSize: 24,
            fontWeight: FontWeight.w300,
          ),
        ),
        const SizedBox(height: 24),
        const Padding(
          padding: EdgeInsets.symmetric(horizontal: 40),
          child: Text(
            "Your inner nook is ready whenever you need it.",
            textAlign: TextAlign.center,
            style: TextStyle(
              color: Colors.white70,
              fontSize: 16,
              height: 1.5,
            ),
          ),
        ),
        const SizedBox(height: 16),
        const Padding(
          padding: EdgeInsets.symmetric(horizontal: 40),
          child: Text(
            "Remember: there are no rules here. No wrong answers. No rushing.",
            textAlign: TextAlign.center,
            style: TextStyle(
              color: Colors.white60,
              fontSize: 14,
              height: 1.5,
            ),
          ),
        ),
        const SizedBox(height: 24),
        const Text(
          "Just you, taking care of you.",
          style: TextStyle(
            color: Colors.white54,
            fontSize: 14,
            fontStyle: FontStyle.italic,
          ),
        ),
        const Spacer(),
        GestureDetector(
          onTap: onComplete,
          child: Container(
            margin: const EdgeInsets.symmetric(horizontal: 32),
            width: double.infinity,
            padding: const EdgeInsets.symmetric(vertical: 16),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(30),
              gradient: LinearGradient(
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
                colors: [
                  Colors.white.withOpacity(0.35),
                  Colors.white.withOpacity(0.25),
                ],
              ),
              border: Border.all(color: Colors.white.withOpacity(0.4)),
              boxShadow: [
                BoxShadow(
                  color: Colors.black.withOpacity(0.15),
                  blurRadius: 20,
                  offset: const Offset(0, 4),
                ),
              ],
            ),
            child: const Text(
              "Enter your nook",
              textAlign: TextAlign.center,
              style: TextStyle(color: Colors.white, fontSize: 16),
            ),
          ),
        ),
        const SizedBox(height: 16),
        const Text(
          "I'll be here with you",
          style: TextStyle(
            color: Colors.white54,
            fontSize: 12,
          ),
        ),
         const SizedBox(height: 48),
      ],
    );
  }
}
