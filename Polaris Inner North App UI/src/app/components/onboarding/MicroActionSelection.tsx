import { useState } from 'react';
import { ElfCompanion } from '../ElfCompanion';
import { Check } from 'lucide-react';

export function MicroActionSelection({ nickname, onNext }: { nickname: string; onNext: (action: string) => void }) {
  const [selectedAction, setSelectedAction] = useState<string | null>(null);

  const microActions = [
    {
      id: 'research',
      title: 'Look at one photo',
      description: 'Just browse and notice what catches your eye',
      duration: '2 minutes'
    },
    {
      id: 'list',
      title: 'Write down three words',
      description: 'Three words about what draws you to this',
      duration: '1 minute'
    },
    {
      id: 'breathe',
      title: 'Take three deep breaths',
      description: 'And imagine yourself doing this dream',
      duration: '30 seconds'
    },
    {
      id: 'share',
      title: `Tell someone "I've been thinking about..."`,
      description: `You don't have to explain. Just mention it.`,
      duration: '1 minute'
    }
  ];

  return (
    <div className="min-h-screen p-6 flex flex-col" style={{
      background: 'linear-gradient(180deg, #4A5568 0%, #6B5B95 40%, #B39BC8 70%, #F0E5D8 100%)'
    }}>
      {/* Small elf at top */}
      <div className="flex justify-center mt-8 mb-6">
        <ElfCompanion size={70} />
      </div>

      <div className="flex-1">
        {/* Question */}
        <div className="text-center mb-8">
          <h2 className="text-white text-xl font-light mb-3">
            Want to try one tiny step today?
          </h2>
          <p className="text-white/70 text-sm leading-relaxed max-w-sm mx-auto">
            No pressure, {nickname}. These are very small. You can skip this if you want.
          </p>
        </div>

        {/* Action cards */}
        <div className="space-y-3 max-w-sm mx-auto mb-6">
          {microActions.map((action) => {
            const isSelected = selectedAction === action.id;
            return (
              <button
                key={action.id}
                onClick={() => setSelectedAction(action.id)}
                className="w-full p-5 rounded-3xl transition-all active:scale-95 text-left"
                style={{
                  background: isSelected 
                    ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.2) 100%)'
                    : 'rgba(255, 255, 255, 0.1)',
                  border: isSelected 
                    ? '2px solid rgba(255, 255, 255, 0.4)' 
                    : '1px solid rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <div className="flex items-start gap-3">
                  {isSelected && (
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                      style={{
                        background: 'rgba(144, 238, 144, 0.3)',
                        border: '1px solid rgba(144, 238, 144, 0.4)'
                      }}
                    >
                      <Check className="w-4 h-4 text-green-200" />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-white/90 text-sm font-normal">{action.title}</p>
                      <span className="text-white/50 text-xs">{action.duration}</span>
                    </div>
                    <p className="text-white/70 text-xs leading-relaxed">{action.description}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <p className="text-white/50 text-xs italic text-center">
          Or skip this for now. You can always come back.
        </p>
      </div>

      {/* Buttons */}
      <div className="w-full max-w-sm mx-auto space-y-3">
        <button
          onClick={() => selectedAction && onNext(selectedAction)}
          disabled={!selectedAction}
          className="w-full px-8 py-4 rounded-full transition-all active:scale-95 disabled:opacity-50 disabled:active:scale-100"
          style={{
            background: selectedAction
              ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.2) 100%)'
              : 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
          }}
        >
          <p className="text-white">I'll try this</p>
        </button>

        <button
          onClick={() => onNext('skip')}
          className="w-full px-8 py-3 rounded-full transition-all active:scale-95"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.15)'
          }}
        >
          <p className="text-white/70 text-sm">Maybe later</p>
        </button>
      </div>
    </div>
  );
}
