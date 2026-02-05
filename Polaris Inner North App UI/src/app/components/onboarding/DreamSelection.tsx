import { useState } from 'react';
import { ElfCompanion } from '../ElfCompanion';
import { Heart, Compass, Book, Palette, Flower, Coffee } from 'lucide-react';

export function DreamSelection({ nickname, onNext }: { nickname: string; onNext: (dream: string) => void }) {
  const [selectedDream, setSelectedDream] = useState<string | null>(null);

  const dreams = [
    { id: 'solo-trip', label: 'Take a solo trip', icon: Compass },
    { id: 'creative', label: 'Create something', icon: Palette },
    { id: 'learn', label: 'Learn something new', icon: Book },
    { id: 'self-care', label: 'Care for myself better', icon: Heart },
    { id: 'garden', label: 'Grow something', icon: Flower },
    { id: 'slow-down', label: 'Slow down and rest', icon: Coffee }
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
            {nickname ? `${nickname}, ` : ''}is there something you've been dreaming about?
          </h2>
          <p className="text-white/70 text-sm leading-relaxed max-w-sm mx-auto">
            Something small or big. We'll take tiny steps together.
          </p>
        </div>

        {/* Dream cards */}
        <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto mb-6">
          {dreams.map((dream) => {
            const Icon = dream.icon;
            const isSelected = selectedDream === dream.id;
            return (
              <button
                key={dream.id}
                onClick={() => setSelectedDream(dream.id)}
                className="p-5 rounded-3xl transition-all active:scale-95 flex flex-col items-center"
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
                <Icon className="w-7 h-7 text-yellow-200 mb-3" />
                <p className="text-white/90 text-sm text-center leading-snug">{dream.label}</p>
              </button>
            );
          })}
        </div>

        <p className="text-white/50 text-xs italic text-center">
          Choose what feels right today. You can always change your mind.
        </p>
      </div>

      {/* Continue button */}
      <div className="w-full max-w-sm mx-auto">
        <button
          onClick={() => selectedDream && onNext(selectedDream)}
          disabled={!selectedDream}
          className="w-full px-8 py-4 rounded-full transition-all active:scale-95 disabled:opacity-50 disabled:active:scale-100"
          style={{
            background: selectedDream
              ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.2) 100%)'
              : 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
          }}
        >
          <p className="text-white">This feels right</p>
        </button>
      </div>
    </div>
  );
}
