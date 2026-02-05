import { StarGlow } from '../StarGlow';

export function WelcomeScreen({ onNext }: { onNext: () => void }) {
  return (
    <div className="min-h-screen p-6 flex flex-col items-center justify-center" style={{
      background: 'linear-gradient(180deg, #4A5568 0%, #6B5B95 40%, #B39BC8 70%, #F0E5D8 100%)'
    }}>
      {/* Glowing star */}
      <div className="mb-8">
        <StarGlow size={100} />
      </div>

      {/* Welcome text */}
      <div className="text-center mb-12 max-w-sm">
        <h1 className="text-white text-3xl font-light mb-4">Welcome</h1>
        <p className="text-white/80 text-base leading-relaxed mb-3">
          This is a gentle space, just for you.
        </p>
        <p className="text-white/70 text-sm leading-relaxed">
          No pressure. No judgment. Just a quiet place to listen to yourself.
        </p>
      </div>

      {/* Floating elements - small stars */}
      <div className="mb-16 flex gap-3">
        <div className="w-2 h-2 rounded-full bg-yellow-200/60 animate-pulse" 
          style={{ animationDelay: '0s', boxShadow: '0 0 8px rgba(255, 220, 150, 0.4)' }} 
        />
        <div className="w-2 h-2 rounded-full bg-yellow-200/60 animate-pulse" 
          style={{ animationDelay: '0.5s', boxShadow: '0 0 8px rgba(255, 220, 150, 0.4)' }} 
        />
        <div className="w-2 h-2 rounded-full bg-yellow-200/60 animate-pulse" 
          style={{ animationDelay: '1s', boxShadow: '0 0 8px rgba(255, 220, 150, 0.4)' }} 
        />
      </div>

      {/* Continue button */}
      <button
        onClick={onNext}
        className="px-12 py-4 rounded-full transition-all active:scale-95"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.2) 100%)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)'
        }}
      >
        <p className="text-white">Come in</p>
      </button>

      <p className="text-white/50 text-xs mt-8 italic">Take your time</p>
    </div>
  );
}
