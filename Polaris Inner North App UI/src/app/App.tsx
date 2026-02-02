import { useState } from 'react';
import { HomeScreen } from '@/app/components/screens/HomeScreen';
import { DailyReflection } from '@/app/components/screens/DailyReflection';
import { MicroAction } from '@/app/components/screens/MicroAction';
import { CompanionView } from '@/app/components/screens/CompanionView';
import { GentleProgress } from '@/app/components/screens/GentleProgress';
import { SafeMode } from '@/app/components/screens/SafeMode';
import { GoalJourney } from '@/app/components/screens/GoalJourney';

type Screen = 'home' | 'reflection' | 'action' | 'companion' | 'progress' | 'safe' | 'goal';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');

  const handleNavigate = (screen: string) => {
    setCurrentScreen(screen as Screen);
  };

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
