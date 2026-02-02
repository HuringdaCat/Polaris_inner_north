export function StarGlow({ size = 80, className = "" }: { size?: number; className?: string }) {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {/* Outer glow */}
      <div 
        className="absolute inset-0 rounded-full opacity-30 blur-xl"
        style={{
          background: 'radial-gradient(circle, rgba(255, 220, 150, 0.8) 0%, rgba(255, 200, 120, 0.3) 50%, transparent 70%)'
        }}
      />
      {/* Middle glow */}
      <div 
        className="absolute inset-[15%] rounded-full opacity-60 blur-md"
        style={{
          background: 'radial-gradient(circle, rgba(255, 235, 180, 0.9) 0%, rgba(255, 215, 140, 0.4) 60%, transparent 80%)'
        }}
      />
      {/* Star shape */}
      <svg 
        viewBox="0 0 100 100" 
        className="absolute inset-0 w-full h-full drop-shadow-lg"
        style={{ filter: 'drop-shadow(0 0 8px rgba(255, 220, 150, 0.6))' }}
      >
        <path
          d="M50 10 L58 38 L88 38 L64 56 L72 84 L50 68 L28 84 L36 56 L12 38 L42 38 Z"
          fill="url(#starGradient)"
        />
        <defs>
          <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF5E1" />
            <stop offset="50%" stopColor="#FFE4B5" />
            <stop offset="100%" stopColor="#FFD78C" />
          </linearGradient>
        </defs>
      </svg>
      {/* Inner highlight */}
      <div 
        className="absolute inset-[35%] rounded-full opacity-80"
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, transparent 60%)'
        }}
      />
    </div>
  );
}
