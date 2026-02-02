import { useState } from 'react';
import { ArrowLeft, Heart, Smile, Frown, Meh } from 'lucide-react';
import { ArchContainer } from '../ArchContainer';
import { StarGlow } from '../StarGlow';

export function DailyReflection({ onNavigate }: { onNavigate: (screen: string) => void }) {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [reflection, setReflection] = useState('');

  const moods = [
    { id: 'gentle', label: 'Gentle', icon: Smile, color: 'text-green-200' },
    { id: 'tender', label: 'Tender', icon: Heart, color: 'text-pink-200' },
    { id: 'heavy', label: 'Heavy', icon: Frown, color: 'text-blue-300' },
    { id: 'quiet', label: 'Quiet', icon: Meh, color: 'text-purple-200' }
  ];

  return (
    <div className="min-h-screen p-6 flex flex-col" style={{
      background: 'linear-gradient(180deg, #4A5568 0%, #6B5B95 40%, #B39BC8 70%, #F0E5D8 100%)'
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
        <h1 className="text-white text-xl font-light ml-4">Daily Reflection</h1>
      </div>

      {/* Small star decoration */}
      <div className="flex justify-center mb-6">
        <StarGlow size={60} />
      </div>

      {/* Date */}
      <p className="text-white/60 text-center text-sm mb-6">Friday, January 24</p>

      {/* Mood Selection */}
      <ArchContainer className="mb-6">
        <p className="text-white/90 text-sm mb-4 text-center">How does your heart feel today?</p>
        <div className="grid grid-cols-2 gap-3">
          {moods.map((mood) => {
            const Icon = mood.icon;
            const isSelected = selectedMood === mood.id;
            return (
              <button
                key={mood.id}
                onClick={() => setSelectedMood(mood.id)}
                className="p-4 rounded-2xl transition-all active:scale-95 flex flex-col items-center"
                style={{
                  background: isSelected 
                    ? 'rgba(255, 255, 255, 0.25)' 
                    : 'rgba(255, 255, 255, 0.1)',
                  border: isSelected 
                    ? '2px solid rgba(255, 255, 255, 0.4)' 
                    : '1px solid rgba(255, 255, 255, 0.15)'
                }}
              >
                <Icon className={`w-6 h-6 mb-2 ${mood.color}`} />
                <span className="text-white/80 text-xs">{mood.label}</span>
              </button>
            );
          })}
        </div>
      </ArchContainer>

      {/* Reflection Prompt */}
      <ArchContainer className="mb-6 flex-1">
        <p className="text-white/90 text-sm mb-4">
          What's one small thing you'd like to share with yourself today?
        </p>
        <textarea
          value={reflection}
          onChange={(e) => setReflection(e.target.value)}
          placeholder="No pressure, just gentle curiosity..."
          className="w-full h-32 p-4 rounded-2xl bg-white/10 text-white placeholder-white/40 border border-white/20 resize-none focus:outline-none focus:border-white/40 transition-colors"
          style={{ backdropFilter: 'blur(10px)' }}
        />
        <p className="text-white/50 text-xs mt-3 italic text-center">
          This is just for you. No one else will see it.
        </p>
      </ArchContainer>

      {/* Optional prompts */}
      <div className="mb-6">
        <p className="text-white/60 text-xs mb-3 text-center">Or explore a gentle question:</p>
        <div className="space-y-2">
          <button className="w-full p-3 rounded-full text-left text-white/70 text-sm transition-all active:scale-95"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.15)'
            }}
          >
            What made me feel safe today?
          </button>
          <button className="w-full p-3 rounded-full text-left text-white/70 text-sm transition-all active:scale-95"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.15)'
            }}
          >
            What did I need but couldn't ask for?
          </button>
        </div>
      </div>

      {/* Save button */}
      <button
        className="w-full p-4 rounded-full mb-4 transition-all active:scale-95"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.2) 100%)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
        }}
      >
        <p className="text-white">Save & Rest</p>
      </button>
    </div>
  );
}
