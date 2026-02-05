export function ElfCompanion({ size = 100, className = "" }: { size?: number; className?: string }) {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size * 1.2 }}>
      {/* Soft glow behind elf */}
      <div 
        className="absolute inset-0 rounded-full opacity-40 blur-2xl"
        style={{
          background: 'radial-gradient(circle, rgba(200, 180, 255, 0.6) 0%, rgba(180, 160, 230, 0.3) 50%, transparent 70%)',
          transform: 'translateY(20%)'
        }}
      />
      
      <svg viewBox="0 0 100 120" className="relative w-full h-full drop-shadow-lg">
        {/* Body - simple robe */}
        <path
          d="M 50 45 Q 35 50 30 75 L 30 95 Q 30 100 35 100 L 65 100 Q 70 100 70 95 L 70 75 Q 65 50 50 45 Z"
          fill="url(#robeGradient)"
        />
        
        {/* Head */}
        <circle cx="50" cy="35" r="18" fill="url(#skinGradient)" />
        
        {/* Elf ears */}
        <ellipse cx="32" cy="32" rx="6" ry="12" fill="url(#skinGradient)" transform="rotate(-20 32 32)" />
        <ellipse cx="68" cy="32" rx="6" ry="12" fill="url(#skinGradient)" transform="rotate(20 68 32)" />
        
        {/* Hair */}
        <path
          d="M 32 25 Q 50 18 68 25 L 68 35 Q 50 30 32 35 Z"
          fill="url(#hairGradient)"
        />
        
        {/* Eyes - closed peaceful expression */}
        <path d="M 42 34 Q 44 36 46 34" stroke="#6B5B95" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M 54 34 Q 56 36 58 34" stroke="#6B5B95" strokeWidth="2" fill="none" strokeLinecap="round" />
        
        {/* Gentle smile */}
        <path d="M 44 42 Q 50 45 56 42" stroke="#B39BC8" strokeWidth="2" fill="none" strokeLinecap="round" />
        
        {/* Arms */}
        <ellipse cx="25" cy="60" rx="6" ry="18" fill="url(#robeGradient)" />
        <ellipse cx="75" cy="60" rx="6" ry="18" fill="url(#robeGradient)" />
        
        {/* Hands */}
        <circle cx="25" cy="75" r="5" fill="url(#skinGradient)" />
        <circle cx="75" cy="75" r="5" fill="url(#skinGradient)" />
        
        {/* Small star they're holding */}
        <path
          d="M 50 85 L 52 90 L 57 90 L 53 93 L 55 98 L 50 95 L 45 98 L 47 93 L 43 90 L 48 90 Z"
          fill="#FFE4B5"
          opacity="0.8"
        />
        <circle cx="50" cy="92" r="8" fill="rgba(255, 235, 180, 0.3)" className="blur-sm" />
        
        <defs>
          <linearGradient id="robeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#B39BC8" />
            <stop offset="100%" stopColor="#9B8AB8" />
          </linearGradient>
          <linearGradient id="skinGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFE5D8" />
            <stop offset="100%" stopColor="#FFD8C8" />
          </linearGradient>
          <linearGradient id="hairGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8B7BA8" />
            <stop offset="100%" stopColor="#7B6B98" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
