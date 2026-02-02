import 'package:flutter/material.dart';
import 'package:polaris/widgets/arch_container.dart';

class DreamJourneyScreen extends StatelessWidget {
  const DreamJourneyScreen({super.key});

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
                        'My Dream Journey',
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
                      const Text(
                        'Path to Your Stars',
                        style: TextStyle(
                          color: Colors.white,
                          fontSize: 28,
                          fontWeight: FontWeight.w300,
                        ),
                      ),
                      const SizedBox(height: 8),
                      Text(
                        'Set intentions and watch them grow.',
                        style: TextStyle(
                          color: Colors.white.withOpacity(0.7),
                          fontSize: 16,
                        ),
                      ),
                      const SizedBox(height: 32),

                      // Active Goal
                      const Text(
                        'Active Journey',
                        style: TextStyle(
                          color: Colors.white,
                          fontSize: 18,
                          fontWeight: FontWeight.w500,
                        ),
                      ),
                      const SizedBox(height: 16),
                      ArchContainer(
                        children: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Row(
                              children: [
                                Container(
                                  padding: const EdgeInsets.all(12),
                                  decoration: BoxDecoration(
                                    color: const Color(0xFFFFF59D).withOpacity(0.2), // Yellow tint
                                    shape: BoxShape.circle,
                                  ),
                                  child: const Icon(
                                    Icons.self_improvement,
                                    color: Color(0xFFFFF59D),
                                    size: 24,
                                  ),
                                ),
                                const SizedBox(width: 16),
                                const Expanded(
                                  child: Column(
                                    crossAxisAlignment: CrossAxisAlignment.start,
                                    children: [
                                      Text(
                                        'Mindfulness Master',
                                        style: TextStyle(
                                          color: Colors.white,
                                          fontSize: 18,
                                          fontWeight: FontWeight.w600,
                                        ),
                                      ),
                                      Text(
                                        'Meditate for 30 days',
                                        style: TextStyle(
                                          color: Colors.white70,
                                          fontSize: 14,
                                        ),
                                      ),
                                    ],
                                  ),
                                ),
                              ],
                            ),
                            const SizedBox(height: 24),
                            // Progress Bar
                            Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Row(
                                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                                  children: [
                                    Text(
                                      'Progress',
                                      style: TextStyle(color: Colors.white.withOpacity(0.6), fontSize: 12),
                                    ),
                                    Text(
                                      '12 / 30 days',
                                      style: TextStyle(color: Colors.white.withOpacity(0.9), fontSize: 12),
                                    ),
                                  ],
                                ),
                                const SizedBox(height: 8),
                                ClipRRect(
                                  borderRadius: BorderRadius.circular(4),
                                  child: LinearProgressIndicator(
                                    value: 12 / 30,
                                    backgroundColor: Colors.black.withOpacity(0.2),
                                    valueColor: const AlwaysStoppedAnimation<Color>(Color(0xFFFFF59D)),
                                    minHeight: 8,
                                  ),
                                ),
                              ],
                            ),
                          ],
                        ),
                      ),

                      const SizedBox(height: 32),

                      // Past / Other Goals
                      const Text(
                        'Saved Dreams',
                        style: TextStyle(
                          color: Colors.white,
                          fontSize: 18,
                          fontWeight: FontWeight.w500,
                        ),
                      ),
                      const SizedBox(height: 16),
                      
                      _buildDreamItem(
                        icon: Icons.book,
                        color: const Color(0xFF90CAF9),
                        title: 'Read 12 Books',
                        status: 'Planned',
                      ),
                      const SizedBox(height: 12),
                      _buildDreamItem(
                        icon: Icons.directions_run,
                        color: const Color(0xFFF48FB1),
                        title: 'Morning Yoga',
                        status: 'Paused',
                      ),

                      const SizedBox(height: 48),

                      // Add New Button
                      Center(
                        child: FloatingActionButton.extended(
                          onPressed: () {
                             ScaffoldMessenger.of(context).showSnackBar(
                               const SnackBar(content: Text('Create new dream journey...')),
                             );
                          },
                          backgroundColor: const Color(0xFFFFE082),
                          foregroundColor: const Color(0xFF4A5568),
                          icon: const Icon(Icons.add),
                          label: const Text('New Dream'),
                        ),
                      ),
                       const SizedBox(height: 32),
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

  Widget _buildDreamItem({
    required IconData icon,
    required Color color,
    required String title,
    required String status,
  }) {
    return ArchContainer(
      variant: ArchVariant.compact,
      children: Row(
        children: [
          Icon(icon, color: color.withOpacity(0.8), size: 24),
          const SizedBox(width: 16),
          Expanded(
            child: Text(
              title,
              style: const TextStyle(
                color: Colors.white,
                fontSize: 16,
              ),
            ),
          ),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
            decoration: BoxDecoration(
              color: color.withOpacity(0.1),
              borderRadius: BorderRadius.circular(12),
              border: Border.all(color: color.withOpacity(0.3)),
            ),
            child: Text(
              status,
              style: TextStyle(
                color: color,
                fontSize: 12,
                fontWeight: FontWeight.w500,
              ),
            ),
          ),
        ],
      ),
    );
  }
}
