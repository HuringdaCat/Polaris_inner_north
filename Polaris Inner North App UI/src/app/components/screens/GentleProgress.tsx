import { ArrowLeft, Star, Heart, Sparkles } from 'lucide-react';
import { ArchContainer } from '../ArchContainer';
import { StarGlow } from '../StarGlow';

export function GentleProgress({ onNavigate }: { onNavigate: (screen: string) => void }) {
  const recentMoments = [
    { date: 'Jan 23', type: 'reflection', preview: 'I noticed the sunset today and it...' },
    { date: 'Jan 22', type: 'action', title: 'Three Gentle Breaths' },
    { date: 'Jan 21', type: 'reflection', preview: 'Today I felt proud of myself for...' },
    { date: 'Jan 20', type: 'action', title: 'Sip Some Water' },
    { date: 'Jan 19', type: 'companion', preview: 'Had a conversation about feeling...' }
  ];

  const patterns = [
    { label: 'Gentle moments', count: 12, icon: Heart },
    { label: 'Times you showed up', count: 8, icon: Star },
    { label: 'Reflections saved', count: 15, icon: Sparkles }
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
        <h1 className="text-white text-xl font-light ml-4">Your Journey</h1>
      </div>

      {/* Small star decoration */}
      <div className="flex justify-center mb-6">
        <StarGlow size={60} />
      </div>

      <p className="text-white/70 text-center text-sm mb-8 max-w-sm mx-auto">
        Not a scorecard. Just a gentle reminder of the moments you've honored yourself.
      </p>

      {/* Patterns noticed */}
      <ArchContainer className="mb-6">
        <h2 className="text-white/90 text-sm mb-4 text-center">What we've noticed together</h2>
        <div className="space-y-3">
          {patterns.map((pattern, idx) => {
            const Icon = pattern.icon;
            return (
              <div 
                key={idx}
                className="flex items-center justify-between p-3 rounded-2xl"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.15)'
                }}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-yellow-200" />
                  <span className="text-white/80 text-sm">{pattern.label}</span>
                </div>
                <span className="text-white/60 text-sm">{pattern.count}</span>
              </div>
            );
          })}
        </div>
      </ArchContainer>

      {/* Recent moments */}
      <div className="flex-1">
        <h2 className="text-white/70 text-sm mb-4">Recent Moments</h2>
        <div className="space-y-3">
          {recentMoments.map((moment, idx) => (
            <button
              key={idx}
              className="w-full p-4 rounded-2xl text-left transition-all active:scale-95"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.15)'
              }}
            >
              <div className="flex items-start justify-between mb-2">
                <span className="text-white/50 text-xs">{moment.date}</span>
                <div className="px-2 py-1 rounded-full text-xs"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: 'rgba(255, 255, 255, 0.6)'
                  }}
                >
                  {moment.type}
                </div>
              </div>
              <p className="text-white/80 text-sm">
                {moment.preview || moment.title}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom note */}
      <div className="mt-6 text-center">
        <p className="text-white/50 text-xs italic">
          You're building a relationship with yourself, one gentle moment at a time
        </p>
      </div>
    </div>
  );
}
