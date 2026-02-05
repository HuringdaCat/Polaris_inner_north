import { StarGlow } from '../StarGlow';
import { ElfCompanion } from '../ElfCompanion';

export function ReadyToBegin({ nickname, onComplete }: { nickname: string; onComplete: () => void }) {
  return (
    <div className="min-h-screen p-6 flex flex-col items-center justify-between" style={{
      background: 'linear-gradient(180deg, #4A5568 0%, #6B5B95 40%, #B39BC8 70%, #F0E5D8 100%)'
    }}>
      <div className="flex-1 flex flex-col items-center justify-center">
        {/* Elf and Star together */}
        <div className="relative mb-8">
          <div className="flex items-center gap-4">
            <ElfCompanion size={100} />
            <StarGlow size={80} />
          </div>
        </div>

        {/* Message */}
        <div className="text-center max-w-sm">
          <h2 className="text-white text-2xl font-light mb-4">
            You're all set, {nickname}
          </h2>
          <p className="text-white/80 text-base leading-relaxed mb-4">
            Your inner nook is ready whenever you need it.
          </p>
          <p className="text-white/70 text-sm leading-relaxed mb-6">
            Remember: there are no rules here. No wrong answers. No rushing.
          </p>
          <p className="text-white/60 text-sm italic">
            Just you, taking care of you.
          </p>
        </div>
      </div>

      {/* Begin button */}
      <div className="w-full max-w-sm">
        <button
          onClick={onComplete}
          className="w-full px-8 py-4 rounded-full transition-all active:scale-95 mb-4"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0.25) 100%)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.4)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)'
          }}
        >
          <p className="text-white">Enter your nook</p>
        </button>
        <p className="text-white/50 text-xs text-center">I'll be here with you</p>
      </div>
    </div>
  );
}
