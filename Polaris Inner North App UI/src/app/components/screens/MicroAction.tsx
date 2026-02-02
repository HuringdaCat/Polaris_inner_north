import { useState } from 'react';
import { ArrowLeft, Check, RefreshCw } from 'lucide-react';
import { ArchContainer } from '../ArchContainer';
import { StarGlow } from '../StarGlow';

export function MicroAction({ onNavigate }: { onNavigate: (screen: string) => void }) {
  const [completed, setCompleted] = useState(false);

  const actions = [
    {
      title: "Take Three Gentle Breaths",
      description: "Breathe in slowly for 4, hold for 4, breathe out for 6. Your body is allowed to rest.",
      duration: "30 seconds"
    },
    {
      title: "Name Something Soft",
      description: "Look around. Find something soft—a blanket, a pet, your sweater. Touch it if you can.",
      duration: "1 minute"
    },
    {
      title: "Give Yourself Permission",
      description: "Say (out loud or in your mind): 'I'm allowed to rest. I'm allowed to feel this way.'",
      duration: "30 seconds"
    },
    {
      title: "Sip Some Water",
      description: "Get a glass of water. Take small sips. Notice the temperature. You're taking care of yourself.",
      duration: "2 minutes"
    }
  ];

  const [currentAction] = useState(actions[0]);

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
        <h1 className="text-white text-xl font-light ml-4">Micro Action</h1>
      </div>

      {/* Small star decoration */}
      <div className="flex justify-center mb-6">
        <StarGlow size={60} />
      </div>

      {/* Intro text */}
      <p className="text-white/70 text-center text-sm mb-6 max-w-sm mx-auto">
        Not a task. Just a tiny act of kindness toward yourself. You can skip it anytime.
      </p>

      {/* Action Card */}
      <ArchContainer className="mb-6 flex-1">
        <div className="text-center mb-6">
          <div className="inline-block px-4 py-1 rounded-full mb-4"
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            <p className="text-white/70 text-xs">{currentAction.duration}</p>
          </div>
          <h2 className="text-white text-lg mb-4">{currentAction.title}</h2>
          <p className="text-white/80 text-sm leading-relaxed max-w-xs mx-auto">
            {currentAction.description}
          </p>
        </div>

        {/* Completion state */}
        {!completed ? (
          <button
            onClick={() => setCompleted(true)}
            className="w-full p-4 rounded-full transition-all active:scale-95"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}
          >
            <p className="text-white">I did this 💛</p>
          </button>
        ) : (
          <div className="text-center">
            <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, rgba(144, 238, 144, 0.3) 0%, rgba(144, 238, 144, 0.2) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(144, 238, 144, 0.4)'
              }}
            >
              <Check className="w-8 h-8 text-green-200" />
            </div>
            <p className="text-white/90 mb-2">Beautiful</p>
            <p className="text-white/60 text-sm">You showed up for yourself today</p>
          </div>
        )}
      </ArchContainer>

      {/* Alternative actions */}
      <div className="mb-6">
        <p className="text-white/60 text-xs mb-3 text-center">Or try something else:</p>
        <div className="space-y-2">
          {actions.slice(1, 3).map((action, idx) => (
            <button 
              key={idx}
              className="w-full p-3 rounded-2xl text-left transition-all active:scale-95"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.15)'
              }}
            >
              <p className="text-white/80 text-sm">{action.title}</p>
              <p className="text-white/50 text-xs mt-1">{action.duration}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-3">
        <button
          className="flex-1 p-4 rounded-full transition-all active:scale-95"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
        >
          <p className="text-white/70 text-sm">Skip for now</p>
        </button>
        <button
          className="p-4 rounded-full transition-all active:scale-95"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}
        >
          <RefreshCw className="w-5 h-5 text-white/70" />
        </button>
      </div>
    </div>
  );
}
