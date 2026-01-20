import 'package:flutter/material.dart';

class AppTheme {
  static final ThemeData darkTheme = ThemeData(
    useMaterial3: true,
    brightness: Brightness.dark,
    colorScheme: ColorScheme.fromSeed(
      seedColor: const Color(0xFF1E1E2C), // Deep dark blue/grey
      brightness: Brightness.dark,
      primary: const Color(0xFF6C63FF), // Soft purple/indigo
      secondary: const Color(0xFFFFD700), // Gold for stars/highlights
      surface: const Color(0xFF1E1E2C),
      onSurface: const Color(0xFFE0E0E0),
    ),
    scaffoldBackgroundColor: const Color(0xFF121212), // Very dark background
    textTheme: const TextTheme(
      displayLarge: TextStyle(
        fontSize: 32,
        fontWeight: FontWeight.w300,
        letterSpacing: 1.2,
        color: Colors.white,
      ),
      headlineMedium: TextStyle(
        fontSize: 24,
        fontWeight: FontWeight.w400,
        color: Colors.white70,
      ),
      bodyLarge: TextStyle(
        fontSize: 16,
        color: Colors.white60,
        height: 1.5,
      ),
    ),
    elevatedButtonTheme: ElevatedButtonThemeData(
      style: ElevatedButton.styleFrom(
        padding: const EdgeInsets.symmetric(horizontal: 32, vertical: 16),
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(24)),
      ),
    ),
  );
}
