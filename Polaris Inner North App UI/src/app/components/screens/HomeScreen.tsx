import { StarGlow } from '../StarGlow';
import { ArchContainer } from '../ArchContainer';
import { Heart, Sparkles, Cloud, Moon, Compass } from 'lucide-react';

export function HomeScreen({ onNavigate }: { onNavigate: (screen: string) => void }) {
  return (
    <div className="min-h-screen p-6 flex flex-col" style={{
      background: 'linear-gradient(180deg, #4A5568 0%, #6B5B95 40%, #B39BC8 70%, #F0E5D8 100%)'
    }}>
      {/* Header with time-based greeting */}
      <div className="text-center mt-8 mb-6">
        <p className="text-white/70 text-sm mb-2">Good Evening</p>
        <h1 className="text-white text-2xl font-light">Welcome to Your Inner Nook</h1>
      </div>

      {/* Central Star - Your Inner Guide */}
      <div className="flex-1 flex items-center justify-center flex-col mb-8">
        <StarGlow size={120} className="mb-6" />
        <p className="text-white/80 text-center text-sm max-w-xs">
          This is your gentle companion, always here to guide you inward
        </p>
      </div>

      {/* Today's Invitation */}
      <ArchContainer className="mb-6">
        <div className="text-center">
          <Sparkles className="w-6 h-6 text-yellow-200 mx-auto mb-3" />
          <p className="text-white/90 text-sm mb-2">Today's Gentle Invitation</p>
          <p className="text-white/70 text-xs italic">
            "What small thing made you smile today?"
          </p>
        </div>
      </ArchContainer>

      {/* Navigation Cards */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <button
          onClick={() => onNavigate('reflection')}
          className="p-5 rounded-3xl transition-transform active:scale-95"
          style={{
            background: 'linear-gradient(135deg, rgba(139, 114, 185, 0.3) 0%, rgba(159, 134, 205, 0.2) 100%)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
        >
          <Moon className="w-6 h-6 text-purple-200 mb-2" />
          <p className="text-white text-sm">Daily Reflection</p>
        </button>

        <button
          onClick={() => onNavigate('action')}
          className="p-5 rounded-3xl transition-transform active:scale-95"
          style={{
            background: 'linear-gradient(135deg, rgba(139, 114, 185, 0.3) 0%, rgba(159, 134, 205, 0.2) 100%)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
        >
          <Heart className="w-6 h-6 text-pink-200 mb-2" />
          <p className="text-white text-sm">Micro Action</p>
        </button>

        <button
          onClick={() => onNavigate('companion')}
          className="p-5 rounded-3xl transition-transform active:scale-95"
          style={{
            background: 'linear-gradient(135deg, rgba(139, 114, 185, 0.3) 0%, rgba(159, 134, 205, 0.2) 100%)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
        >
          <Sparkles className="w-6 h-6 text-yellow-200 mb-2" />
          <p className="text-white text-sm">Companion</p>
        </button>

        <button
          onClick={() => onNavigate('progress')}
          className="p-5 rounded-3xl transition-transform active:scale-95"
          style={{
            background: 'linear-gradient(135deg, rgba(139, 114, 185, 0.3) 0%, rgba(159, 134, 205, 0.2) 100%)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
        >
          <Cloud className="w-6 h-6 text-blue-200 mb-2" />
          <p className="text-white text-sm">Your Journey</p>
        </button>

        <button
          onClick={() => onNavigate('goal')}
          className="p-5 rounded-3xl transition-transform active:scale-95 col-span-2"
          style={{
            background: 'linear-gradient(135deg, rgba(139, 114, 185, 0.3) 0%, rgba(159, 134, 205, 0.2) 100%)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
        >
          <Compass className="w-6 h-6 text-amber-200 mb-2 mx-auto" />
          <p className="text-white text-sm">My Dream Journey</p>
        </button>
      </div>

      {/* Overwhelm Button */}
      <button
        onClick={() => onNavigate('safe')}
        className="w-full p-4 rounded-full mb-4 transition-transform active:scale-95"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.3)'
        }}
      >
        <p className="text-white text-sm">I'm feeling overwhelmed...</p>
      </button>
    </div>
  );
}
