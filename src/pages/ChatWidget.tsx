import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const ChatWidget: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="fixed bottom-8 right-8 bg-primary-500 text-white rounded-full p-4 shadow-lg z-50 hover:bg-primary-600 transition-colors"
        onClick={() => setOpen((o) => !o)}
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
      {open && (
        <div className="fixed bottom-24 right-8 w-80 bg-white rounded-xl shadow-lg p-4 z-50">
          <h2 className="font-bold mb-2">AI Concierge Chat</h2>
          <div className="h-32 bg-gray-100 rounded mb-2 flex items-center justify-center text-gray-400">
            (Chat UI coming soon)
          </div>
          <input className="input-field w-full" placeholder="Type a message..." disabled />
        </div>
      )}
    </>
  );
};

export default ChatWidget; 