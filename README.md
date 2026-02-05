# 🌟 Polaris: Inner North

[![Flutter](https://img.shields.io/badge/Flutter-3.10.7+-02569B?logo=flutter)](https://flutter.dev)
[![Dart](https://img.shields.io/badge/Dart-3.10.7+-0175C2?logo=dart)](https://dart.dev)
[![License](https://img.shields.io/badge/License-Private-red)]()

> *Your guiding star for turning inspiration into action, one mindful step at a time.*

**Polaris: Inner North** is a lightweight, beautifully designed reflection and action app that empowers users to build momentum through daily clarity and micro-steps. Like the guiding North Star, it provides direction when you need it most—without pressure or overwhelm.

[**[Screenshot: App Hero/Home Screen]**](#suggested-images)

---

## ✨ Inspiration

Many people feel deeply inspired by stories of bold lives and dream journeys—but struggle to translate that inspiration into action. They wait for confidence, permission, or the "right time," and slowly lose momentum. 

**Polaris: Inner North** was inspired by the idea that:
- Direction doesn't come from pushing harder, but from **listening inward**
- Empowerment comes from **taking one honest step at a time**
- Growth happens in a **private, safe space** for reflection and clarity

Like a guiding star you can return to, Polaris helps people trust themselves and move forward—gently, authentically, and at their own pace.

---

## 🎯 What It Does

Polaris: Inner North is a **gamified wellness app** that combines:
- 📝 **Daily Reflection** - Gratitude journaling with mood tracking
- 🎯 **Micro Actions** - Single, achievable daily steps (breathing exercises, affirmations)
- �� **AI Companion** - Philosophical guidance powered by OpenAI GPT-3.5-turbo
- 🌠 **Dream Journey** - Visual goal tracking with progress bars
- 📊 **Progress Tracking** - Reflection count, streaks, and activity timeline

Each day, users are guided through a short reflection to reconnect with their inner direction, followed by a self-chosen "next step" they can realistically take. Progress is tracked through **small wins** rather than rigid streaks, reinforcing agency and confidence.

[**[Screenshot: Features Grid]**](#suggested-images)

---

## 🚀 Features

### Core Functionality

| Feature | Description | Screen |
|---------|-------------|--------|
| **🏠 Home Hub** | Personalized greeting with time-based messages and intuitive navigation grid | `HomeScreen` |
| **📔 Daily Reflection** | Gratitude prompts with 4-level mood selector (Rough → Great) | `DailyReflectionScreen` |
| **⚡ Micro Actions** | Quick, guided actions like "Take 3 Deep Breaths" to ground yourself | `MicroActionScreen` |
| **💬 AI Companion** | Chat with an empathetic AI guide for philosophical support | `CompanionScreen` |
| **🌈 My Dream Journey** | Active goal display with visual progress + dream library | `DreamJourneyScreen` |
| **📈 Your Journey** | Stats dashboard (reflections, streaks) + recent activity feed | `ProgressScreen` |
| **👋 Onboarding** | 6-step personalized setup: Welcome → Nickname → Dreams → Actions | `OnboardingScreen` |

[**[Screenshot: Daily Reflection Screen]**](#suggested-images)
[**[Screenshot: AI Companion Chat]**](#suggested-images)

### Design Philosophy

- **🌌 Glassmorphism UI** - Frosted glass containers with backdrop blur and gradient borders
- **🎨 Color-Coded Navigation** - Each feature has a unique icon color (Purple, Pink, Yellow, Blue, Amber)
- **⭐ Star Branding** - Custom-painted star with radial glow effect as visual identity
- **🌙 Dark Theme** - Calming dark gradient background (slate → purple → lavender)

[**[Screenshot: Glassmorphism Design Examples]**](#suggested-images)

---

## 🛠️ Technology Stack

### Frontend
- **Framework**: Flutter 3.10.7+ (Dart 3.10.7+)
- **State Management**: StatefulWidget with SharedPreferences
- **UI Components**: Custom widgets (ArchContainer, StarGlow, NavCard)
- **Styling**: Material Design 3 with custom dark theme

### Backend & Services
- **AI Integration**: OpenAI API (GPT-3.5-turbo) via `dart_openai` package
- **Local Storage**: `shared_preferences` for user data and onboarding state
- **Environment Config**: `flutter_dotenv` for secure API key management
- **Vector Graphics**: `flutter_svg` for scalable icons

### Key Dependencies
```yaml
dependencies:
  flutter: sdk
  cupertino_icons: ^1.0.8
  dart_openai: ^6.1.1          # AI Companion
  flutter_dotenv: ^6.0.0       # Environment variables
  shared_preferences: ^2.5.4   # Local persistence
  flutter_svg: ^2.2.3          # SVG rendering
```

---

## 📦 Installation & Setup

### Prerequisites
- Flutter SDK 3.10.7 or higher ([Install Flutter](https://docs.flutter.dev/get-started/install))
- Dart SDK 3.10.7 or higher
- Android Studio / Xcode (for mobile development)
- OpenAI API Key ([Get API Key](https://platform.openai.com/api-keys))

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/HuringdaCat/Polaris_inner_north.git
   cd Polaris_inner_north
   ```

2. **Install dependencies**
   ```bash
   flutter pub get
   ```

3. **Configure environment variables**
   
   Create a `.env` file in the project root:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   ```
   
   > ⚠️ **Security Note**: Never commit `.env` to version control. It's already in `.gitignore`.

4. **Run the app**
   
   For Android/iOS emulator:
   ```bash
   flutter run
   ```
   
   For web browser:
   ```bash
   flutter run -d chrome
   ```
   
   For specific device:
   ```bash
   flutter devices            # List available devices
   flutter run -d <device_id>  # Run on specific device
   ```

[**[Screenshot: Running App on Device]**](#suggested-images)

---

## 🏗️ Project Structure

```
Polaris_inner_north/
├── lib/
│   ├── main.dart                      # App entry point
│   ├── screens/                       # UI screens
│   │   ├── home_screen.dart
│   │   ├── daily_reflection_screen.dart
│   │   ├── micro_action_screen.dart
│   │   ├── companion_screen.dart      # AI chat
│   │   ├── dream_journey_screen.dart
│   │   ├── progress_screen.dart
│   │   └── onboarding/                # 6-step onboarding flow
│   ├── services/
│   │   └── openai_service.dart        # OpenAI API wrapper
│   ├── theme/
│   │   └── app_theme.dart             # Dark theme config
│   └── widgets/
│       ├── arch_container.dart        # Glassmorphism container
│       ├── star_glow.dart             # Custom star painter
│       └── nav_card.dart              # Navigation button
├── assets/
│   └── images/
│       └── elf_companion.svg          # Companion avatar
├── test/                              # Unit & widget tests
├── .env                               # Environment variables (not tracked)
├── pubspec.yaml                       # Dependencies
└── README.md
```

---

## 🧑‍💻 Development

### Hot Reload Workflow

The most efficient way to develop is using Flutter's **Hot Reload**:

1. Start the app: `flutter run`
2. Make changes to `.dart` files
3. Save the file (`Ctrl/Cmd + S`)
4. Press `r` in terminal for **hot reload** (preserves state)
5. Press `R` for **hot restart** (full restart)

[**[Screenshot: Hot Reload Demo]**](#suggested-images)

### Running Tests

```bash
# Run all tests
flutter test

# Run specific test file
flutter test test/widget_test.dart

# Run with coverage
flutter test --coverage
```

### Building for Production

```bash
# Android APK
flutter build apk --release

# iOS IPA
flutter build ios --release

# Web
flutter build web --release

# Desktop
flutter build windows --release
flutter build macos --release
flutter build linux --release
```

### Code Quality

```bash
# Analyze code
flutter analyze

# Format code
flutter format .

# Clean build cache
flutter clean
flutter pub get
```

For detailed development instructions, see [DEVELOPMENT_GUIDE.md](DEVELOPMENT_GUIDE.md).

---

## 🎨 Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| **Primary Purple** | `#6C63FF` | Branding, accent color |
| **Gold Accent** | `#FFD700` | Companion icon, highlights |
| **Deep Dark** | `#1E1E2C` | Background base |
| **Glass White** | `rgba(255,255,255,0.1)` | Container backgrounds |

### Typography

- **Headings**: Light (300-400 weight), generous letter spacing
- **Body**: Regular (400 weight), readable line height
- **System Fonts**: Roboto (Android), SF Pro (iOS)

### Iconography

Each feature uses a color-coded icon:
- 🟣 Purple - Daily Reflection
- 🟣 Pink - Micro Actions  
- 🟡 Yellow - AI Companion
- 🔵 Blue - Progress Tracking
- 🟠 Amber - Dream Journey

[**[Image: Color Palette Reference]**](#suggested-images)

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Make your changes** following the existing code style
4. **Test thoroughly** (`flutter test`)
5. **Commit your changes** (`git commit -m 'Add amazing feature'`)
6. **Push to your branch** (`git push origin feature/amazing-feature`)
7. **Open a Pull Request**

### Code Style Guidelines

- Follow the [Dart Style Guide](https://dart.dev/guides/language/effective-dart/style)
- Use descriptive variable names
- Comment complex logic
- Keep widgets focused and reusable
- Write tests for new features

---

## 🐛 Troubleshooting

### Common Issues

**1. Build fails after `git pull`**
```bash
flutter clean
flutter pub get
flutter run
```

**2. OpenAI API errors**
- Verify `.env` file exists with valid `OPENAI_API_KEY`
- Check API key has credits at [OpenAI Dashboard](https://platform.openai.com/usage)
- Ensure `.env` is in project root (not inside `lib/`)

**3. Hot reload not working**
- Try hot restart instead (`R` in terminal)
- If changes involve `main.dart` or app initialization, full restart is required

**4. Emulator won't start**
- Android: Open Android Studio → AVD Manager → Wipe Data
- iOS: `open -a Simulator` then restart Xcode

**5. Dependencies conflicts**
```bash
flutter pub upgrade --major-versions
flutter pub get
```

For more detailed troubleshooting, see [DEVELOPMENT_GUIDE.md](DEVELOPMENT_GUIDE.md).

---

## 📸 Suggested Images

Below are descriptions of images that would enhance this README. These can be added to an `assets/screenshots/` directory:

### 1. **App Hero/Home Screen** (`hero-home-screen.png`)
- **Description**: Main home screen showing the personalized greeting ("Good Evening, [Name]") with the central star logo and the 5-feature navigation grid (Reflection, Micro Action, Companion, Progress, Dream Journey)
- **Purpose**: First impression of the app's UI and navigation
- **Placement**: Top of README after title
- **Optimal Size**: 800x1600px (phone aspect ratio)

[**[Screenshot Needed Here]**]

---

### 2. **Features Grid** (`features-overview.png`)
- **Description**: Composite image showing all 5 main features in a grid layout or flow diagram
- **Purpose**: Visual overview of app capabilities
- **Placement**: After "What It Does" section
- **Optimal Size**: 1200x800px (landscape)

[**[Screenshot Needed Here]**]

---

### 3. **Daily Reflection Screen** (`daily-reflection.png`)
- **Description**: The reflection screen showing the gratitude journal input and the 4-level mood selector (emoji faces from Rough to Great)
- **Purpose**: Showcase the journaling UX and mood tracking
- **Placement**: In Features section
- **Optimal Size**: 800x1600px

[**[Screenshot Needed Here]**]

---

### 4. **AI Companion Chat** (`ai-companion-chat.png`)
- **Description**: The companion screen with sample conversation showing user messages and AI philosophical responses
- **Purpose**: Highlight the AI integration feature
- **Placement**: In Features section
- **Optimal Size**: 800x1600px

[**[Screenshot Needed Here]**]

---

### 5. **Dream Journey Progress** (`dream-journey.png`)
- **Description**: The Dream Journey screen showing an active goal with progress bar and the list of saved dreams (Planned/Paused states)
- **Purpose**: Demonstrate goal tracking visualization
- **Placement**: In Features section
- **Optimal Size**: 800x1600px

[**[Screenshot Needed Here]**]

---

### 6. **Glassmorphism Design Examples** (`glassmorphism-ui.png`)
- **Description**: Close-up composite showing the frosted glass containers, backdrop blur effects, and gradient borders used throughout the app
- **Purpose**: Highlight unique design system
- **Placement**: After Design Philosophy
- **Optimal Size**: 1200x600px (landscape)

[**[Screenshot Needed Here]**]

---

### 7. **Onboarding Flow** (`onboarding-flow.png`)
- **Description**: Multi-panel image showing the 6-step onboarding: Welcome → Companion Intro → Nickname → Dreams → Actions → Ready
- **Purpose**: Show user's first experience
- **Placement**: In Features section
- **Optimal Size**: 1600x800px (wide landscape)

[**[Screenshot Needed Here]**]

---

### 8. **Running App on Device** (`running-app.png`)
- **Description**: Terminal/IDE screenshot showing `flutter run` command output with app running on emulator/device
- **Purpose**: Help developers understand setup process
- **Placement**: In Installation section
- **Optimal Size**: 1200x800px

[**[Screenshot Needed Here]**]

---

### 9. **Hot Reload Demo** (`hot-reload-demo.gif`)
- **Description**: Animated GIF showing code change → save → instant UI update in emulator
- **Purpose**: Demonstrate development workflow
- **Placement**: In Development section
- **Optimal Size**: 800x600px, 2-3 second loop
- **Format**: GIF or MP4

[**[Animation Needed Here]**]

---

### 10. **Color Palette Reference** (`color-palette.png`)
- **Description**: Design swatch showing the 5 color-coded feature icons with hex values and usage labels
- **Purpose**: Document design system for contributors
- **Placement**: In Design System section
- **Optimal Size**: 1000x400px (landscape)

[**[Image Needed Here]**]

---

### 11. **App Icon/Logo** (`polaris-logo.png`)
- **Description**: High-resolution app icon showing the star logo with glow effect on transparent background
- **Purpose**: Branding, social media sharing
- **Placement**: Top of README (can be used as favicon)
- **Optimal Size**: 512x512px (square), transparent PNG

[**[Image Needed Here]**]

---

### 12. **Architecture Diagram** (`architecture-diagram.png`)
- **Description**: Simple flowchart showing: User → Flutter UI → OpenAI Service → GPT API, and User → SharedPreferences for local storage
- **Purpose**: Help developers understand technical architecture
- **Placement**: In Technology Stack section
- **Optimal Size**: 1000x600px

[**[Diagram Needed Here]**]

---

## 📄 License

This project is private and not licensed for public use.

---

## 🙏 Acknowledgments

- **OpenAI** for GPT-3.5-turbo API enabling the AI companion
- **Flutter Team** for the amazing cross-platform framework
- **Contributors** who helped shape this project

---

## 📬 Contact & Support

For questions, feedback, or issues:
- 🐛 **Report bugs**: [GitHub Issues](https://github.com/HuringdaCat/Polaris_inner_north/issues)
- 💡 **Feature requests**: [GitHub Discussions](https://github.com/HuringdaCat/Polaris_inner_north/discussions)
- 📧 **Email**: [Your contact email]

---

<div align="center">
  
**⭐ Star this repo if Polaris helps you find your inner north! ⭐**

Made with 💜 by the Polaris Team

[**[Star Icon Image]**]

</div>
