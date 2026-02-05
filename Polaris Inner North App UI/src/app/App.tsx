import { useState, useEffect } from 'react';
import { HomeScreen } from '@/app/components/screens/HomeScreen';
import { DailyReflection } from '@/app/components/screens/DailyReflection';
import { MicroAction } from '@/app/components/screens/MicroAction';
import { CompanionView } from '@/app/components/screens/CompanionView';
import { GentleProgress } from '@/app/components/screens/GentleProgress';
import { SafeMode } from '@/app/components/screens/SafeMode';
import { GoalJourney } from '@/app/components/screens/GoalJourney';
import { WelcomeScreen } from '@/app/components/onboarding/WelcomeScreen';
import { CompanionIntro } from '@/app/components/onboarding/CompanionIntro';
import { NicknameInput } from '@/app/components/onboarding/NicknameInput';
import { DreamSelection } from '@/app/components/onboarding/DreamSelection';
import { MicroActionSelection } from '@/app/components/onboarding/MicroActionSelection';
import { ReadyToBegin } from '@/app/components/onboarding/ReadyToBegin';

type Screen = 'home' | 'reflection' | 'action' | 'companion' | 'progress' | 'safe' | 'goal';
type OnboardingStep = 'welcome' | 'companion' | 'nickname' | 'dream' | 'microAction' | 'ready' | 'complete';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [onboardingStep, setOnboardingStep] = useState<OnboardingStep>('welcome');
  const [onboardingComplete, setOnboardingComplete] = useState(false);
  
  // User data from onboarding
  const [nickname, setNickname] = useState('');
  const [selectedDream, setSelectedDream] = useState('');
  const [selectedAction, setSelectedAction] = useState('');

  // Check if user has completed onboarding
  useEffect(() => {
    const completed = localStorage.getItem('polaris_onboarding_complete');
    if (completed === 'true') {
      setOnboardingComplete(true);
    }
  }, []);

  const handleNavigate = (screen: string) => {
    setCurrentScreen(screen as Screen);
  };

  const handleOnboardingComplete = () => {
    setOnboardingComplete(true);
    localStorage.setItem('polaris_onboarding_complete', 'true');
    
    // Optionally save user data
    if (nickname) localStorage.setItem('polaris_nickname', nickname);
    if (selectedDream) localStorage.setItem('polaris_dream', selectedDream);
    if (selectedAction && selectedAction !== 'skip') {
      localStorage.setItem('polaris_first_action', selectedAction);
    }
  };

  // Show onboarding flow
  if (!onboardingComplete) {
    return (
      <div className="max-w-md mx-auto bg-gray-900 min-h-screen">
        {onboardingStep === 'welcome' && (
          <WelcomeScreen onNext={() => setOnboardingStep('companion')} />
        )}
        {onboardingStep === 'companion' && (
          <CompanionIntro onNext={() => setOnboardingStep('nickname')} />
        )}
        {onboardingStep === 'nickname' && (
          <NicknameInput onNext={(name) => {
            setNickname(name);
            setOnboardingStep('dream');
          }} />
        )}
        {onboardingStep === 'dream' && (
          <DreamSelection 
            nickname={nickname}
            onNext={(dream) => {
              setSelectedDream(dream);
              setOnboardingStep('microAction');
            }} 
          />
        )}
        {onboardingStep === 'microAction' && (
          <MicroActionSelection 
            nickname={nickname}
            onNext={(action) => {
              setSelectedAction(action);
              setOnboardingStep('ready');
            }} 
          />
        )}
        {onboardingStep === 'ready' && (
          <ReadyToBegin 
            nickname={nickname}
            onComplete={handleOnboardingComplete}
          />
        )}
      </div>
    );
  }

  // Show main app after onboarding
  return (
    <div className="max-w-md mx-auto bg-gray-900 min-h-screen">
      {currentScreen === 'home' && <HomeScreen onNavigate={handleNavigate} />}
      {currentScreen === 'reflection' && <DailyReflection onNavigate={handleNavigate} />}
      {currentScreen === 'action' && <MicroAction onNavigate={handleNavigate} />}
      {currentScreen === 'companion' && <CompanionView onNavigate={handleNavigate} />}
      {currentScreen === 'progress' && <GentleProgress onNavigate={handleNavigate} />}
      {currentScreen === 'safe' && <SafeMode onNavigate={handleNavigate} />}
      {currentScreen === 'goal' && <GoalJourney onNavigate={handleNavigate} />}
    </div>
  );
}
