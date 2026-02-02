import { ArrowLeft, Heart, Wind, Sparkles } from 'lucide-react';
import { ArchContainer } from '../ArchContainer';
import { StarGlow } from '../StarGlow';

export function SafeMode({ onNavigate }: { onNavigate: (screen: string) => void }) {
  return (
    <div className="min-h-screen p-6 flex flex-col" style={{
      background: 'linear-gradient(180deg, #5A6B7A 0%, #7B6B9B 50%, #C8B5D8 100%)'
    }}>
      {/* Header */}
      <div className="flex items-center mb-8 mt-4">
        <button 
          onClick={() => onNavigate('home')}
          className="p-2 rounded-full transition-transform active:scale-95"
          style={{
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Large star - grounding presence */}
      <div className="flex justify-center mb-8">
        <StarGlow size={100} />
      </div>

      {/* Main message */}
      <div className="text-center mb-8">
        <h1 className="text-white text-2xl font-light mb-4">You're Safe Here</h1>
        <p className="text-white/70 text-sm max-w-xs mx-auto leading-relaxed">
          Nothing is required of you right now. Just breathe. Just be.
        </p>
      </div>

      {/* Grounding exercises */}
      <ArchContainer className="mb-6">
        <h2 className="text-white/90 text-sm mb-4 text-center">If you'd like, try one of these:</h2>
        
        <button className="w-full p-5 mb-3 rounded-2xl transition-all active:scale-95 text-left"
          style={{
            background: 'rgba(255, 255, 255, 0.12)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
        >
          <div className="flex items-start gap-3">
            <Wind className="w-5 h-5 text-blue-200 mt-1" />
            <div>
              <p className="text-white/90 text-sm mb-1">Box Breathing</p>
              <p className="text-white/60 text-xs">In for 4, hold for 4, out for 4, hold for 4</p>
            </div>
          </div>
        </button>

        <button className="w-full p-5 mb-3 rounded-2xl transition-all active:scale-95 text-left"
          style={{
            background: 'rgba(255, 255, 255, 0.12)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
        >
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-yellow-200 mt-1" />
            <div>
              <p className="text-white/90 text-sm mb-1">5-4-3-2-1 Grounding</p>
              <p className="text-white/60 text-xs">Name 5 things you see, 4 you can touch...</p>
            </div>
          </div>
        </button>

        <button className="w-full p-5 rounded-2xl transition-all active:scale-95 text-left"
          style={{
            background: 'rgba(255, 255, 255, 0.12)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
        >
          <div className="flex items-start gap-3">
            <Heart className="w-5 h-5 text-pink-200 mt-1" />
            <div>
              <p className="text-white/90 text-sm mb-1">Place Your Hand on Your Heart</p>
              <p className="text-white/60 text-xs">Feel your heartbeat. You're here. You're alive.</p>
            </div>
          </div>
        </button>
      </ArchContainer>

      {/* Affirmations */}
      <ArchContainer className="mb-6">
        <p className="text-white/80 text-sm text-center leading-relaxed italic">
          "I am allowed to feel overwhelmed. I am allowed to need help. I am allowed to rest. I am still worthy."
        </p>
      </ArchContainer>

      {/* Emergency resources note */}
      <div className="mt-auto mb-4">
        <p className="text-white/50 text-xs text-center mb-2">
          If you're in crisis and need immediate support:
        </p>
        <button className="w-full p-4 rounded-full transition-all active:scale-95"
          style={{
            background: 'rgba(255, 255, 255, 0.15)',
            border: '1px solid rgba(255, 255, 255, 0.25)'
          }}
        >
          <p className="text-white/80 text-sm">View Crisis Resources</p>
        </button>
      </div>

      <p className="text-white/40 text-xs text-center italic">
        You don't have to be okay right now. Just being here is enough.
      </p>
    </div>
  );
}
