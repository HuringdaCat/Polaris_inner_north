import 'package:flutter/material.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:polaris/screens/home_screen.dart';
import 'package:polaris/screens/onboarding/onboarding_screen.dart';
import 'package:polaris/theme/app_theme.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await dotenv.load(fileName: ".env");
  
  final prefs = await SharedPreferences.getInstance();
  final bool onboardingComplete = prefs.getBool('onboarding_complete') ?? false;

  runApp(MyApp(onboardingComplete: onboardingComplete));
}

class MyApp extends StatelessWidget {
  final bool onboardingComplete;

  const MyApp({super.key, required this.onboardingComplete});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Polaris',
      debugShowCheckedModeBanner: false,
      theme: AppTheme.darkTheme,
      home: onboardingComplete ? const HomeScreen() : const OnboardingScreen(),
    );
  }
}


