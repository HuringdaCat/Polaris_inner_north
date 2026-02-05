import { ElfCompanion } from '../ElfCompanion';

export function CompanionIntro({ onNext }: { onNext: () => void }) {
  return (
    <div className="min-h-screen p-6 flex flex-col items-center justify-between" style={{
      background: 'linear-gradient(180deg, #4A5568 0%, #6B5B95 40%, #B39BC8 70%, #F0E5D8 100%)'
    }}>
      <div className="flex-1 flex flex-col items-center justify-center">
        {/* Elf companion */}
        <div className="mb-8">
          <ElfCompanion size={140} />
        </div>

        {/* Introduction */}
        <div className="text-center max-w-sm">
          <h2 className="text-white text-2xl font-light mb-4">I'm here with you</h2>
          <p className="text-white/80 text-base leading-relaxed mb-4">
            I'm a gentle guide. You can call me Lumis.
          </p>
          <p className="text-white/70 text-sm leading-relaxed mb-4">
            I won't push you or judge you. I'm just here to walk beside you, if you'd like.
          </p>
          <p className="text-white/60 text-xs italic">
            (You can talk to me anytime, or not at all. It's up to you.)
          </p>
        </div>
      </div>

      {/* Continue button */}
      <div className="w-full max-w-sm">
        <button
          onClick={onNext}
          className="w-full px-8 py-4 rounded-full transition-all active:scale-95"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.2) 100%)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
          }}
        >
          <p className="text-white">Nice to meet you, Lumis</p>
        </button>
        <p className="text-white/50 text-xs text-center mt-4">We'll go slowly together</p>
      </div>
    </div>
  );
}
