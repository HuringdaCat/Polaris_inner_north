import { useState } from 'react';
import { ArrowLeft, MessageCircle, Sparkles } from 'lucide-react';
import { ArchContainer } from '../ArchContainer';
import { StarGlow } from '../StarGlow';

export function CompanionView({ onNavigate }: { onNavigate: (screen: string) => void }) {
  const [messages, setMessages] = useState([
    {
      type: 'companion',
      text: "Hello, dear one. I'm here with you, no matter what you're feeling."
    }
  ]);
  const [input, setInput] = useState('');

  const quickResponses = [
    "I'm feeling lost",
    "I need reassurance",
    "Tell me something kind",
    "I'm scared"
  ];

  return (
    <div className="min-h-screen p-6 flex flex-col" style={{
      background: 'linear-gradient(180deg, #4A5568 0%, #6B5B95 40%, #B39BC8 70%, #F0E5D8 100%)'
    }}>
      {/* Header */}
      <div className="flex items-center mb-8 mt-4">
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
        <h1 className="text-white text-xl font-light ml-4">Your Companion</h1>
      </div>

      {/* Small star decoration */}
      <div className="flex justify-center mb-6">
        <StarGlow size={60} />
      </div>

      <p className="text-white/60 text-center text-sm mb-6">
        A gentle presence, always listening
      </p>

      {/* Messages */}
      <div className="flex-1 mb-6 space-y-4 overflow-y-auto">
        {messages.map((message, idx) => (
          <div key={idx} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <ArchContainer 
              variant="compact" 
              className={`max-w-[80%] ${message.type === 'companion' ? 'bg-white/5' : 'bg-purple-400/20'}`}
            >
              {message.type === 'companion' && (
                <Sparkles className="w-4 h-4 text-yellow-200 mb-2" />
              )}
              <p className="text-white/90 text-sm leading-relaxed">
                {message.text}
              </p>
            </ArchContainer>
          </div>
        ))}
      </div>

      {/* Quick responses */}
      <div className="mb-4">
        <p className="text-white/50 text-xs mb-2 text-center">Quick thoughts:</p>
        <div className="grid grid-cols-2 gap-2">
          {quickResponses.map((response, idx) => (
            <button
              key={idx}
              onClick={() => {
                setMessages([...messages, 
                  { type: 'user', text: response },
                  { 
                    type: 'companion', 
                    text: "I hear you. You're not alone in this feeling. Let's stay here together for a moment." 
                  }
                ]);
              }}
              className="p-3 rounded-full text-white/70 text-xs transition-all active:scale-95"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.15)'
              }}
            >
              {response}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Share what's on your heart..."
          className="flex-1 p-4 rounded-full bg-white/10 text-white placeholder-white/40 border border-white/20 focus:outline-none focus:border-white/40 transition-colors"
          style={{ backdropFilter: 'blur(10px)' }}
        />
        <button
          onClick={() => {
            if (input.trim()) {
              setMessages([...messages, 
                { type: 'user', text: input },
                { 
                  type: 'companion', 
                  text: "Thank you for sharing that with me. Your feelings are valid, and you're doing the best you can." 
                }
              ]);
              setInput('');
            }
          }}
          className="p-4 rounded-full transition-all active:scale-95"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 100%)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.3)'
          }}
        >
          <MessageCircle className="w-5 h-5 text-white" />
        </button>
      </div>

      <p className="text-white/40 text-xs text-center italic">
        This companion is here to listen, not to fix or judge
      </p>
    </div>
  );
}
