import { useState } from 'react';
import { ElfCompanion } from '../ElfCompanion';

export function NicknameInput({ onNext }: { onNext: (nickname: string) => void }) {
  const [nickname, setNickname] = useState('');

  return (
    <div className="min-h-screen p-6 flex flex-col" style={{
      background: 'linear-gradient(180deg, #4A5568 0%, #6B5B95 40%, #B39BC8 70%, #F0E5D8 100%)'
    }}>
      {/* Small elf at top */}
      <div className="flex justify-center mt-8 mb-8">
        <ElfCompanion size={80} />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center max-w-sm mx-auto w-full">
        {/* Question */}
        <div className="text-center mb-8">
          <h2 className="text-white text-xl font-light mb-4">What should I call you?</h2>
          <p className="text-white/70 text-sm leading-relaxed">
            A nickname, a name you like, or anything that feels right.
          </p>
        </div>

        {/* Input */}
        <div className="w-full mb-8">
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="Your name here..."
            className="w-full p-5 rounded-3xl bg-white/10 text-white text-center placeholder-white/40 border border-white/20 focus:outline-none focus:border-white/40 transition-colors text-lg"
            style={{ backdropFilter: 'blur(10px)' }}
            maxLength={20}
          />
        </div>

        <p className="text-white/50 text-xs italic text-center mb-4">
          (You can change this later if you want)
        </p>
      </div>

      {/* Continue button */}
      <div className="w-full max-w-sm mx-auto">
        <button
          onClick={() => onNext(nickname || 'friend')}
          className="w-full px-8 py-4 rounded-full transition-all active:scale-95"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.2) 100%)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
          }}
        >
          <p className="text-white">Continue</p>
        </button>
      </div>
    </div>
  );
}
