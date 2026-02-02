import { ReactNode } from 'react';

export function ArchContainer({ 
  children, 
  className = "",
  variant = "default" 
}: { 
  children: ReactNode; 
  className?: string;
  variant?: "default" | "compact" | "wide";
}) {
  const padding = variant === "compact" ? "p-5" : variant === "wide" ? "p-8" : "p-6";
  
  return (
    <div 
      className={`relative ${padding} ${className}`}
      style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)',
        borderRadius: '24px',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)'
      }}
    >
      {children}
    </div>
  );
}
