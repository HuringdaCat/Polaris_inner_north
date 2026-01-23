import 'package:flutter/material.dart';
import 'package:polaris/widgets/star_glow.dart';
import 'package:polaris/widgets/arch_container.dart';
import 'package:polaris/widgets/nav_card.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  void _onNavigate(BuildContext context, String route) {
    // TODO: Implement navigation
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text('Navigating to $route')),
    );
  }

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
          child: SingleChildScrollView(
            padding: const EdgeInsets.symmetric(horizontal: 24.0, vertical: 16.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                const SizedBox(height: 16),
                
                // Header with time-based greeting
                Column(
                  children: [
                    Text(
                      'Good Evening',
                      style: TextStyle(
                        color: Colors.white.withOpacity(0.7),
                        fontSize: 14,
                        fontWeight: FontWeight.w400,
                      ),
                    ),
                    const SizedBox(height: 8),
                    const Text(
                      'Welcome to Your Inner Nook',
                      style: TextStyle(
                        color: Colors.white,
                        fontSize: 24,
                        fontWeight: FontWeight.w300,
                      ),
                      textAlign: TextAlign.center,
                    ),
                  ],
                ),

                const SizedBox(height: 32),

                // Central Star - Your Inner Guide
                const Column(
                  children: [
                    StarGlow(size: 120),
                    SizedBox(height: 24),
                    SizedBox(
                      width: 250,
                      child: Text(
                        'This is your gentle companion, always here to guide you inward',
                        style: TextStyle(
                          color: Colors.white70,
                          fontSize: 14,
                        ),
                        textAlign: TextAlign.center,
                      ),
                    ),
                  ],
                ),

                const SizedBox(height: 32),

                // Today's Invitation
                ArchContainer(
                  children: SizedBox(
                    width: double.infinity,
                    child: Column(
                      children: [
                        const Icon(
                          Icons.auto_awesome,
                          color: Color(0xFFFFF59D), // yellow-200 equivalent
                          size: 24,
                        ),
                        const SizedBox(height: 12),
                        Text(
                          "Today's Gentle Invitation",
                          style: TextStyle(
                            color: Colors.white.withOpacity(0.9),
                            fontSize: 14,
                            fontWeight: FontWeight.w500,
                          ),
                        ),
                        const SizedBox(height: 8),
                        Text(
                          '"What small thing made you smile today?"',
                          style: TextStyle(
                            color: Colors.white.withOpacity(0.7),
                            fontSize: 12,
                            fontStyle: FontStyle.italic,
                          ),
                          textAlign: TextAlign.center,
                        ),
                      ],
                    ),
                  ),
                ),

                const SizedBox(height: 24),

                // Navigation Cards Grid
                GridView.count(
                  shrinkWrap: true,
                  physics: const NeverScrollableScrollPhysics(),
                  crossAxisCount: 2,
                  mainAxisSpacing: 12,
                  crossAxisSpacing: 12,
                  childAspectRatio: 1.4, // Adjust based on your visual preference
                  children: [
                    NavCard(
                      title: 'Daily Reflection',
                      icon: Icons.nightlight_round,
                      iconColor: const Color(0xFFE1BEE7), // purple-200
                      onTap: () => _onNavigate(context, 'reflection'),
                    ),
                    NavCard(
                      title: 'Micro Action',
                      icon: Icons.favorite,
                      iconColor: const Color(0xFFF48FB1), // pink-200
                      onTap: () => _onNavigate(context, 'action'),
                    ),
                    NavCard(
                      title: 'Companion',
                      icon: Icons.auto_awesome,
                      iconColor: const Color(0xFFFFF59D), // yellow-200
                      onTap: () => _onNavigate(context, 'companion'),
                    ),
                    NavCard(
                      title: 'Your Journey',
                      icon: Icons.cloud,
                      iconColor: const Color(0xFF90CAF9), // blue-200
                      onTap: () => _onNavigate(context, 'progress'),
                    ),
                  ],
                ),
                
                const SizedBox(height: 12),
                
                // Full width button for Dream Journey
                NavCard(
                  title: 'My Dream Journey',
                  icon: Icons.explore,
                  iconColor: const Color(0xFFFFE082), // amber-200
                  onTap: () => _onNavigate(context, 'goal'),
                ),

                const SizedBox(height: 32),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
