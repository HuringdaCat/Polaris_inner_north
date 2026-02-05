import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:polaris/screens/home_screen.dart';
import 'package:polaris/screens/onboarding/welcome_screen.dart';
import 'package:polaris/screens/onboarding/companion_intro.dart';
import 'package:polaris/screens/onboarding/nickname_input.dart';
import 'package:polaris/screens/onboarding/dream_selection.dart';
import 'package:polaris/screens/onboarding/micro_action_selection.dart';
import 'package:polaris/screens/onboarding/ready_to_begin.dart';

class OnboardingScreen extends StatefulWidget {
  const OnboardingScreen({super.key});

  @override
  State<OnboardingScreen> createState() => _OnboardingScreenState();
}

class _OnboardingScreenState extends State<OnboardingScreen> {
  int _currentStep = 0;
  String _nickname = '';
  String _selectedDream = '';
  String _selectedAction = '';

  void _nextStep() {
    setState(() {
      _currentStep++;
    });
  }

  void _completeOnboarding() async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setBool('onboarding_complete', true);
    if (_nickname.isNotEmpty) await prefs.setString('nickname', _nickname);
    if (_selectedDream.isNotEmpty) await prefs.setString('dream', _selectedDream);
    if (_selectedAction.isNotEmpty) await prefs.setString('micro_action', _selectedAction);

    if (mounted) {
      Navigator.of(context).pushReplacement(
        MaterialPageRoute(builder: (context) => const HomeScreen()),
      );
    }
  }

  Widget _buildCurrentStep() {
    switch (_currentStep) {
      case 0:
        return WelcomeScreen(onNext: _nextStep);
      case 1:
        return CompanionIntro(onNext: _nextStep);
      case 2:
        return NicknameInput(onNext: (name) {
          setState(() => _nickname = name);
          _nextStep();
        });
      case 3:
        return DreamSelection(
          nickname: _nickname,
          onNext: (dream) {
            setState(() => _selectedDream = dream);
            _nextStep();
          },
        );
      case 4:
        return MicroActionSelection(
          nickname: _nickname,
          onNext: (action) {
            setState(() => _selectedAction = action);
            _nextStep();
          },
        );
      case 5:
        return ReadyToBegin(
          nickname: _nickname,
          onComplete: _completeOnboarding,
        );
      default:
        return Container();
    }
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
          child: _buildCurrentStep(),
        ),
      ),
    );
  }
}
