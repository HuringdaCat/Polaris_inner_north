import 'package:flutter/material.dart';
import 'package:polaris/widgets/elf_companion.dart';

class DreamSelection extends StatefulWidget {
  final String nickname;
  final ValueChanged<String> onNext;

  const DreamSelection({
    super.key,
    required this.nickname,
    required this.onNext,
  });

  @override
  State<DreamSelection> createState() => _DreamSelectionState();
}

class _DreamSelectionState extends State<DreamSelection> {
  String? _selectedDream;

  final List<Map<String, dynamic>> _dreams = [
    {'id': 'solo-trip', 'label': 'Take a solo trip', 'icon': Icons.explore_outlined},
    {'id': 'creative', 'label': 'Create something', 'icon': Icons.palette_outlined},
    {'id': 'learn', 'label': 'Learn something new', 'icon': Icons.book_outlined},
    {'id': 'self-care', 'label': 'Care for myself better', 'icon': Icons.favorite_border},
    {'id': 'garden', 'label': 'Grow something', 'icon': Icons.local_florist_outlined},
    {'id': 'slow-down', 'label': 'Slow down and rest', 'icon': Icons.coffee_outlined},
  ];

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        const SizedBox(height: 32),
        const ElfCompanion(size: 70),
        const SizedBox(height: 24),
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 24),
          child: Text(
            "${widget.nickname.isNotEmpty ? '${widget.nickname}, ' : ''}is there something you've been dreaming about?",
            textAlign: TextAlign.center,
            style: const TextStyle(
              color: Colors.white,
              fontSize: 20,
              fontWeight: FontWeight.w300,
            ),
          ),
        ),
        const SizedBox(height: 12),
        const Padding(
          padding: EdgeInsets.symmetric(horizontal: 40),
          child: Text(
            "Something small or big. We'll take tiny steps together.",
            textAlign: TextAlign.center,
            style: TextStyle(
              color: Colors.white70,
              fontSize: 14,
            ),
          ),
        ),
        const SizedBox(height: 32),
        Expanded(
          child: GridView.builder(
            padding: const EdgeInsets.symmetric(horizontal: 24),
            gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
              crossAxisCount: 2,
              crossAxisSpacing: 12,
              mainAxisSpacing: 12,
              childAspectRatio: 1.2,
            ),
            itemCount: _dreams.length,
            itemBuilder: (context, index) {
              final dream = _dreams[index];
              final isSelected = _selectedDream == dream['id'];
              return GestureDetector(
                onTap: () => setState(() => _selectedDream = dream['id']),
                child: Container(
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(24),
                    color: isSelected ? null : Colors.white.withOpacity(0.1),
                    gradient: isSelected
                        ? LinearGradient(
                            begin: Alignment.topLeft,
                            end: Alignment.bottomRight,
                            colors: [
                              Colors.white.withOpacity(0.3),
                              Colors.white.withOpacity(0.2),
                            ],
                          )
                        : null,
                    border: Border.all(
                      color: isSelected
                          ? Colors.white.withOpacity(0.4)
                          : Colors.white.withOpacity(0.15),
                      width: isSelected ? 2 : 1,
                    ),
                  ),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Icon(
                        dream['icon'] as IconData,
                        color: const Color(0xFFFFF59D), // Yellow-200
                        size: 28,
                      ),
                      const SizedBox(height: 12),
                      Text(
                        dream['label'] as String,
                        textAlign: TextAlign.center,
                        style: const TextStyle(
                          color: Colors.white,
                          fontSize: 14,
                        ),
                      ),
                    ],
                  ),
                ),
              );
            },
          ),
        ),
        const SizedBox(height: 16),
        const Text(
          "Choose what feels right today. You can always change your mind.",
          style: TextStyle(
            color: Colors.white54,
            fontSize: 12,
            fontStyle: FontStyle.italic,
          ),
        ),
        const SizedBox(height: 16),
        GestureDetector(
          onTap: _selectedDream != null ? () => widget.onNext(_selectedDream!) : null,
          child: Opacity(
            opacity: _selectedDream != null ? 1.0 : 0.5,
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
                    Colors.white.withOpacity(0.3),
                    Colors.white.withOpacity(0.2),
                  ],
                ),
                border: Border.all(color: Colors.white.withOpacity(0.3)),
                boxShadow: [
                  BoxShadow(
                    color: Colors.black.withOpacity(0.1),
                    blurRadius: 16,
                    offset: const Offset(0, 4),
                  ),
                ],
              ),
              child: const Text(
                "This feels right",
                textAlign: TextAlign.center,
                style: TextStyle(color: Colors.white, fontSize: 16),
              ),
            ),
          ),
        ),
        const SizedBox(height: 48),
      ],
    );
  }
}
