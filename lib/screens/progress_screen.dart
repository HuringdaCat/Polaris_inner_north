import 'package:flutter/material.dart';
import 'package:polaris/widgets/arch_container.dart';

class ProgressScreen extends StatelessWidget {
  const ProgressScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: const BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
            stops: [0.0, 0.4, 0.7, 1.0],
            colors: [
              Color(0xFF4A5568),
              Color(0xFF6B5B95),
              Color(0xFFB39BC8),
              Color(0xFFF0E5D8),
            ],
          ),
        ),
        child: SafeArea(
          child: Column(
            children: [
              // Custom AppBar
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
                child: Row(
                  children: [
                    IconButton(
                      icon: const Icon(Icons.arrow_back, color: Colors.white),
                      onPressed: () => Navigator.of(context).pop(),
                    ),
                    const Expanded(
                      child: Text(
                        'Your Journey',
                        textAlign: TextAlign.center,
                        style: TextStyle(
                          color: Colors.white,
                          fontSize: 20,
                          fontWeight: FontWeight.w300,
                        ),
                      ),
                    ),
                    const SizedBox(width: 48), // Balance the back button
                  ],
                ),
              ),

              Expanded(
                child: SingleChildScrollView(
                  padding: const EdgeInsets.all(24.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      // Header
                      const Text(
                        'Constellation',
                        style: TextStyle(
                          color: Colors.white,
                          fontSize: 28,
                          fontWeight: FontWeight.w300,
                        ),
                      ),
                      const SizedBox(height: 8),
                      Text(
                        'See how far you\'ve traveled inward.',
                        style: TextStyle(
                          color: Colors.white.withOpacity(0.7),
                          fontSize: 16,
                        ),
                      ),
                      const SizedBox(height: 32),

                      // Stats Row
                      Row(
                        children: [
                          Expanded(
                            child: ArchContainer(
                              variant: ArchVariant.compact,
                              children: Column(
                                children: [
                                  const Text(
                                    '12',
                                    style: TextStyle(
                                      color: Colors.white,
                                      fontSize: 32,
                                      fontWeight: FontWeight.bold,
                                    ),
                                  ),
                                  const SizedBox(height: 4),
                                  Text(
                                    'Reflections',
                                    style: TextStyle(
                                      color: Colors.white.withOpacity(0.7),
                                      fontSize: 12,
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          ),
                          const SizedBox(width: 16),
                          Expanded(
                            child: ArchContainer(
                              variant: ArchVariant.compact,
                              children: Column(
                                children: [
                                  const Text(
                                    '3',
                                    style: TextStyle(
                                      color: Color(0xFFFFE082), // Gold/Amber
                                      fontSize: 32,
                                      fontWeight: FontWeight.bold,
                                    ),
                                  ),
                                  const SizedBox(height: 4),
                                  Text(
                                    'Day Streak',
                                    style: TextStyle(
                                      color: Colors.white.withOpacity(0.7),
                                      fontSize: 12,
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          ),
                        ],
                      ),

                      const SizedBox(height: 32),

                      const Text(
                         'Recent Stars',
                         style: TextStyle(
                           color: Colors.white,
                           fontSize: 20,
                           fontWeight: FontWeight.w400,
                         ),
                      ),
                      const SizedBox(height: 16),

                      // Timeline / History List
                      _buildHistoryItem(
                        date: 'Today',
                        title: 'Daily Reflection',
                        subtitle: 'Feeling grateful for sunny weather',
                        icon: Icons.nightlight_round,
                        color: const Color(0xFFE1BEE7),
                      ),
                      const SizedBox(height: 12),
                      _buildHistoryItem(
                        date: 'Yesterday',
                        title: 'Micro Action',
                        subtitle: 'Took 3 deep breaths',
                        icon: Icons.favorite,
                        color: const Color(0xFFF48FB1),
                      ),
                      const SizedBox(height: 12),
                      _buildHistoryItem(
                        date: 'Oct 24',
                        title: 'Daily Reflection',
                        subtitle: 'A quiet moment of peace',
                        icon: Icons.nightlight_round,
                        color: const Color(0xFFE1BEE7),
                      ),
                      const SizedBox(height: 12),
                      _buildHistoryItem(
                        date: 'Oct 23',
                        title: 'Dream Journey',
                        subtitle: 'Started a new goal',
                        icon: Icons.explore,
                        color: const Color(0xFFFFE082),
                      ),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildHistoryItem({
    required String date,
    required String title,
    required String subtitle,
    required IconData icon,
    required Color color,
  }) {
    return ArchContainer(
      variant: ArchVariant.compact,
      children: Row(
        children: [
          Container(
            padding: const EdgeInsets.all(10),
            decoration: BoxDecoration(
              color: color.withOpacity(0.2),
              shape: BoxShape.circle,
            ),
            child: Icon(icon, color: color, size: 20),
          ),
          const SizedBox(width: 16),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text(
                      title,
                      style: const TextStyle(
                        color: Colors.white,
                        fontSize: 16,
                        fontWeight: FontWeight.w500,
                      ),
                    ),
                    Text(
                      date,
                      style: TextStyle(
                        color: Colors.white.withOpacity(0.5),
                        fontSize: 12,
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 4),
                Text(
                  subtitle,
                  style: TextStyle(
                    color: Colors.white.withOpacity(0.7),
                    fontSize: 14,
                  ),
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
