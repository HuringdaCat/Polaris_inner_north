export function PathStar({ 
  size = 24, 
  completed = false, 
  active = false,
  className = "" 
}: { 
  size?: number; 
  completed?: boolean;
  active?: boolean;
  className?: string;
}) {
  const opacity = completed ? 1 : active ? 0.7 : 0.3;
  const glowIntensity = completed ? 0.8 : active ? 0.5 : 0.2;
  
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {/* Glow effect */}
      {(completed || active) && (
        <div 
          className="absolute inset-0 rounded-full blur-md"
          style={{
            background: `radial-gradient(circle, rgba(255, 220, 150, ${glowIntensity}) 0%, rgba(255, 200, 120, ${glowIntensity * 0.3}) 50%, transparent 70%)`,
            transform: 'scale(1.5)'
          }}
        />
      )}
      {/* Star shape */}
      <svg 
        viewBox="0 0 100 100" 
        className="absolute inset-0 w-full h-full"
        style={{ 
          opacity,
          filter: completed ? 'drop-shadow(0 0 4px rgba(255, 220, 150, 0.6))' : 'none'
        }}
      >
        <path
          d="M50 10 L58 38 L88 38 L64 56 L72 84 L50 68 L28 84 L36 56 L12 38 L42 38 Z"
          fill={completed ? "url(#pathStarGradient)" : active ? "rgba(255, 235, 180, 0.6)" : "rgba(255, 255, 255, 0.3)"}
        />
        <defs>
          <linearGradient id="pathStarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF5E1" />
            <stop offset="50%" stopColor="#FFE4B5" />
            <stop offset="100%" stopColor="#FFD78C" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
