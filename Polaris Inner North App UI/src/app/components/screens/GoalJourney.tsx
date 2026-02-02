import { useState } from 'react';
import { ArrowLeft, Check, Plus } from 'lucide-react';
import { ArchContainer } from '../ArchContainer';
import { StarGlow } from '../StarGlow';
import { PathStar } from '../PathStar';

export function GoalJourney({ onNavigate }: { onNavigate: (screen: string) => void }) {
  const [steps] = useState([
    { id: 1, title: 'Research destinations', completed: true, left: 20 },
    { id: 2, title: 'Check passport validity', completed: true, left: 60 },
    { id: 3, title: 'Browse flight options', completed: true, left: 35 },
    { id: 4, title: 'Save $50 for trip fund', completed: false, left: 70, active: true },
    { id: 5, title: 'Make a packing list', completed: false, left: 25 },
    { id: 6, title: 'Book accommodation', completed: false, left: 55 },
    { id: 7, title: 'Plan one activity', completed: false, left: 40 }
  ]);

  const completedCount = steps.filter(s => s.completed).length;
  const progress = (completedCount / steps.length) * 100;

  // Calculate star size based on progress
  const goalStarSize = 80 + (progress * 0.4); // Grows from 80 to 120

  const affirmations = [
    "Every small step is honoring your dream",
    "You're allowed to take your time with this",
    "This journey is yours to shape",
    "You're building something beautiful"
  ];

  const currentAffirmation = affirmations[completedCount % affirmations.length];

  return (
    <div className="min-h-screen p-6 flex flex-col" style={{
      background: 'linear-gradient(180deg, #4A5568 0%, #6B5B95 40%, #B39BC8 70%, #F0E5D8 100%)'
    }}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6 mt-4">
        <button 
          onClick={() => onNavigate('home')}
          className="p-2 rounded-full transition-transform active:scale-95"
          style={{
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
        <h1 className="text-white text-lg font-light">My Dream Journey</h1>
        <div className="w-9" /> {/* Spacer for alignment */}
      </div>

      {/* Goal Star - grows brighter as you progress */}
      <div className="flex flex-col items-center mb-6">
        <div 
          className="transition-all duration-700 ease-out"
          style={{ transform: `scale(${1 + progress / 200})` }}
        >
          <StarGlow size={goalStarSize} />
        </div>
        <p className="text-white text-lg mt-4 text-center">Solo Trip to Portugal</p>
        <p className="text-white/60 text-xs mt-1">Your star grows brighter with each step</p>
      </div>

      {/* Affirmation */}
      <ArchContainer className="mb-6">
        <p className="text-white/90 text-sm text-center italic leading-relaxed">
          "{currentAffirmation}"
        </p>
      </ArchContainer>

      {/* Winding path of steps */}
      <div className="flex-1 mb-6">
        <h2 className="text-white/70 text-sm mb-4">Your Path Forward</h2>
        
        <div className="relative">
          {/* Winding path line */}
          <svg 
            className="absolute inset-0 w-full pointer-events-none" 
            style={{ height: `${steps.length * 80}px` }}
          >
            <path
              d={`M ${steps[0].left}% 40 ${steps.map((step, idx) => 
                `Q ${step.left + (idx % 2 === 0 ? 15 : -15)}% ${idx * 80 + 60} ${step.left}% ${idx * 80 + 80}`
              ).join(' ')}`}
              stroke="rgba(255, 255, 255, 0.15)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="4 4"
            />
          </svg>

          {/* Steps */}
          <div className="relative space-y-8" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
            {steps.map((step, idx) => (
              <div 
                key={step.id}
                className="flex items-center relative"
                style={{ paddingLeft: `${step.left}%` }}
              >
                {/* Star marker */}
                <div className="absolute" style={{ left: `${step.left}%`, transform: 'translateX(-50%)' }}>
                  <PathStar size={28} completed={step.completed} active={step.active} />
                </div>
                
                {/* Step card */}
                <button
                  className="ml-8 p-4 rounded-2xl transition-all active:scale-95 text-left flex items-center gap-3 min-w-[200px]"
                  style={{
                    background: step.completed 
                      ? 'rgba(144, 238, 144, 0.15)' 
                      : step.active
                      ? 'rgba(255, 255, 255, 0.2)'
                      : 'rgba(255, 255, 255, 0.1)',
                    border: step.completed
                      ? '1px solid rgba(144, 238, 144, 0.3)'
                      : step.active
                      ? '1px solid rgba(255, 255, 255, 0.3)'
                      : '1px solid rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  {step.completed && (
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: 'rgba(144, 238, 144, 0.3)',
                        border: '1px solid rgba(144, 238, 144, 0.4)'
                      }}
                    >
                      <Check className="w-4 h-4 text-green-200" />
                    </div>
                  )}
                  <p className={`text-sm ${step.completed ? 'text-white/90' : step.active ? 'text-white/90' : 'text-white/60'}`}>
                    {step.title}
                  </p>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Today's gentle micro-habit */}
      <ArchContainer className="mb-6">
        <div className="flex items-start gap-3">
          <div className="w-2 h-2 rounded-full bg-yellow-200 mt-2 flex-shrink-0" 
            style={{ boxShadow: '0 0 8px rgba(255, 220, 150, 0.6)' }}
          />
          <div className="flex-1">
            <p className="text-white/70 text-xs mb-2">Today's gentle suggestion</p>
            <p className="text-white/90 text-sm leading-relaxed">
              Spend 5 minutes looking at photos of Portugal. Notice what makes you smile.
            </p>
          </div>
        </div>
      </ArchContainer>

      {/* Add new step */}
      <button
        className="w-full p-4 rounded-full mb-4 transition-all active:scale-95 flex items-center justify-center gap-2"
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}
      >
        <Plus className="w-5 h-5 text-white/70" />
        <p className="text-white/70 text-sm">Add a tiny step (optional)</p>
      </button>

      <p className="text-white/40 text-xs text-center italic mb-4">
        Your dream doesn't need a deadline. It just needs your gentle attention.
      </p>
    </div>
  );
}
