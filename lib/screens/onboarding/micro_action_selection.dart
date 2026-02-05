import 'package:flutter/material.dart';
import 'package:polaris/widgets/elf_companion.dart';

class MicroActionSelection extends StatefulWidget {
  final String nickname;
  final ValueChanged<String> onNext;

  const MicroActionSelection({
    super.key,
    required this.nickname,
    required this.onNext,
  });

  @override
  State<MicroActionSelection> createState() => _MicroActionSelectionState();
}

class _MicroActionSelectionState extends State<MicroActionSelection> {
  String? _selectedAction;

  final List<Map<String, String>> _microActions = [
    {
      'id': 'research',
      'title': 'Look at one photo',
      'description': 'Just browse and notice what catches your eye',
      'duration': '2 minutes'
    },
    {
      'id': 'list',
      'title': 'Write down three words',
      'description': 'Three words about what draws you to this',
      'duration': '1 minute'
    },
    {
      'id': 'breathe',
      'title': 'Take three deep breaths',
      'description': 'And imagine yourself doing this dream',
      'duration': '30 seconds'
    },
    {
      'id': 'share',
      'title': "Tell someone \"I've been thinking about...\"",
      'description': "You don't have to explain. Just mention it.",
      'duration': '1 minute'
    },
  ];

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        const SizedBox(height: 32),
        const ElfCompanion(size: 70),
        const SizedBox(height: 24),
        const Padding(
          padding: EdgeInsets.symmetric(horizontal: 24),
          child: Text(
            "Want to try one tiny step today?",
            textAlign: TextAlign.center,
            style: TextStyle(
              color: Colors.white,
              fontSize: 20,
              fontWeight: FontWeight.w300,
            ),
          ),
        ),
        const SizedBox(height: 12),
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 40),
          child: Text(
            "No pressure, ${widget.nickname}. These are very small. You can skip this if you want.",
            textAlign: TextAlign.center,
            style: const TextStyle(
              color: Colors.white70,
              fontSize: 14,
            ),
          ),
        ),
        const SizedBox(height: 32),
        Expanded(
          child: ListView.separated(
            padding: const EdgeInsets.symmetric(horizontal: 24),
            itemCount: _microActions.length,
            separatorBuilder: (context, index) => const SizedBox(height: 12),
            itemBuilder: (context, index) {
              final action = _microActions[index];
              final isSelected = _selectedAction == action['id'];
              return GestureDetector(
                onTap: () => setState(() => _selectedAction = action['id']),
                child: Container(
                  padding: const EdgeInsets.all(20),
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
                  child: Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      if (isSelected)
                        Container(
                          margin: const EdgeInsets.only(right: 12, top: 2),
                          padding: const EdgeInsets.all(4),
                          decoration: BoxDecoration(
                            shape: BoxShape.circle,
                            color: const Color(0xFF90EE90).withOpacity(0.3),
                            border: Border.all(
                              color: const Color(0xFF90EE90).withOpacity(0.4),
                            ),
                          ),
                          child: const Icon(Icons.check, size: 16, color: Color(0xFFC8E6C9)),
                        ),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Text(
                                  action['title']!,
                                  style: const TextStyle(
                                    color: Colors.white,
                                    fontSize: 14,
                                    fontWeight: FontWeight.w500,
                                  ),
                                ),
                                Text(
                                  action['duration']!,
                                  style: const TextStyle(
                                    color: Colors.white54,
                                    fontSize: 12,
                                  ),
                                ),
                              ],
                            ),
                            const SizedBox(height: 4),
                            Text(
                              action['description']!,
                              style: const TextStyle(
                                color: Colors.white70,
                                fontSize: 12,
                              ),
                            ),
                          ],
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
        GestureDetector(
          onTap: () => widget.onNext(_selectedAction ?? 'skip'),
          child: const Text(
            "Or skip this for now. You can always come back.",
            style: TextStyle(
              color: Colors.white54,
              fontSize: 12,
              fontStyle: FontStyle.italic,
              decoration: TextDecoration.underline,
            ),
          ),
        ),
        if (_selectedAction != null) ...[
          const SizedBox(height: 16),
          // Only show 'Continue' if something selected, otherwise "skip" is the button
          GestureDetector(
            onTap: () => widget.onNext(_selectedAction!),
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
                "Let's try this",
                textAlign: TextAlign.center,
                style: TextStyle(color: Colors.white, fontSize: 16),
              ),
            ),
          ),
        ],
        const SizedBox(height: 48),
      ],
    );
  }
}
