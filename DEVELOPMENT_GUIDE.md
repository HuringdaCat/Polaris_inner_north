# Development & Testing Guide

This guide outlines the steps to verify and test your changes in the Polaris app prototype.

## 1. Local Development Workflow

The most efficient way to develop Flutter apps is using the "Hot Reload" feature, which allows you to see changes almost instantly without restarting the app.

### A. Setting Up the Environment
1.  **Open VS Code.**
2.  **Start an Emulator:**
    *   Click the device selector in the bottom-right status bar (e.g., "No Device" or "Windows").
    *   Select an **Android Emulator** or **iOS Simulator**.
    *   *Wait for the emulator to fully boot up.*

### B. Running the App (First Time)
1.  Open a terminal in the project root.
2.  Run the following command:
    ```bash
    flutter run
    ```
    *   *Note:* The first build after a clean or fresh install can take several minutes as it downloads dependencies and compiles native code.

### C. Testing Changes (Iterative Loop)
Once the app is running in the terminal:

1.  **Make Code Changes:** Edit your `.dart` files (e.g., `lib/screens/home_screen.dart`).
2.  **Save the File:** `Ctrl + S` (Cmd + S on Mac).
3.  **Hot Reload:**
    *   If running from VS Code's "Run" menu: Simply saving often triggers it, or click the lightning bolt icon in the debug toolbar.
    *   If running from Terminal: Press the **`r`** key (lowercase) in the terminal window.
    *   *Result:* The app updates instantly, maintaining its current state.
4.  **Hot Restart:**
    *   If you changed app initialization logic or global state (like `main.dart` or static variables), a full restart is safer.
    *   Terminal: Press **`R`** (uppercase).
    *   VS Code: Click the green restart icon.

## 2. Troubleshooting Build Issues

If `flutter run` fails or behaves unexpectedly:

1.  **Clean Build Cache:**
    Sometimes old build artifacts cause conflicts. Run:
    ```bash
    flutter clean
    flutter pub get
    flutter run
    ```
2.  **Wipe Emulator Data:**
    If the app crashes on launch repeatedly on Android:
    *   Open Android Virtual Device Manager.
    *   Select "Wipe Data" for your emulator.
    *   Restart the emulator.
3.  **Check Build Config:**
    Ensure `android/app/build.gradle` has the correct `minSdk`. We currently use **minSdk 21**.

## 3. Running on Different Platforms

*   **Web Browser** (Quick UI check):
    ```bash
    flutter run -d chrome
    ```
*   **Android:**
    ```bash
    flutter run -d android
    ```
*   **Windows (Desktop):**
    ```bash
    flutter run -d windows
    ```

## 4. Automated Testing

To run the unit and widget tests to ensure no regressions:

```bash
flutter test
```
*   **Note:** If you drastically change the UI (like we did with `home_screen.dart`), existing tests in `test/` may fail and will need to be updated to match the new component structure.
