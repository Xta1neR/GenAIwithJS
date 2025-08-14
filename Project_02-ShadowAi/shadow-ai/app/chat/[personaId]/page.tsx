// app/chat/[personaId]/page.tsx

"use client"; // <--- IMPORTANT: This makes it a Client Component

import { useState } from 'react'; // Import useState hook
import { ChevronLeft, Globe, Linkedin, SendHorizonal, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { personas } from '@/lib/persona';

// Define the structure for a chat message
interface Message {
  role: 'user' | 'model';
  text: string;
}

type PersonaId = keyof typeof personas;

export default function ChatPage({ params }: { params: { personaId: PersonaId } }) {
  const { personaId } = params;
  const persona = personas[personaId];


  const [input, setInput] = useState('');
  
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: `Hello Ji, I am ${persona?.name}.  Bataiye kya baat hai ?` }
  ]);
  
  const [isLoading, setIsLoading] = useState(false);
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page refresh
    if (!input.trim() || isLoading) return; // Don't send empty messages or while loading

    const userMessage: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]); // Add user's message to the chat
    setInput(''); // Clear the input field

    setIsLoading(true);
    setTimeout(() => {
        const modelResponse: Message = { role: 'model', text: "This is a simulated response. We'll connect the AI next!"};
        setMessages(prev => [...prev, modelResponse]);
        setIsLoading(false);
    }, 1500);
  };

  if (!persona) {
    return <div>Persona Not Found</div>
  }

  return (
    <div className="bg-[#121212] text-white min-h-screen font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-3 h-screen">
        
        {/* Left Column remains the same */}
        <aside className="hidden lg:flex lg:col-span-1 bg-[#1a1a1a] p-8 flex-col items-center justify-center gap-8 border-r border-gray-700">
          <Link href="/" className="absolute top-4 left-4 flex items-center gap-2 text-gray-400 hover:text-white">
            <ChevronLeft size={20} />
            <span>Back</span>
          </Link>
          <div className="w-48 h-48 relative"><div className="w-full h-full rounded-full bg-gray-600"></div></div>
          <h1 className="text-3xl font-bold">{persona.name}</h1>
          <div className="flex items-center gap-6">
            <a href={persona.socials.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><Youtube size={28}/></a>
            <a href={persona.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><Twitter size={28}/></a>
            <a href={persona.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><Linkedin size={28}/></a>
            <a href={persona.socials.portfolio} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><Globe size={28}/></a>
          </div>
        </aside>

        {/* ======== Right Column: Chat Interface ======== */}
        <main className="lg:col-span-2 flex flex-col h-screen">
          <div className="flex-grow p-6 overflow-y-auto">
            {/* DYNAMICALLY RENDER MESSAGES */}
            <div className="flex flex-col gap-4">
              {messages.map((msg, index) => (
                <div 
                  key={index} 
                  className={`p-3 rounded-lg max-w-lg ${
                    msg.role === 'user' 
                      ? 'bg-purple-600 self-end' 
                      : 'bg-[#2a2a2a] self-start'
                  }`}
                >
                  <p>{msg.text}</p>
                </div>
              ))}
              {isLoading && (
                 <div className="p-3 bg-[#2a2a2a] rounded-lg self-start">
                    <p className="animate-pulse">Thinking...</p>
                 </div>
              )}
            </div>
          </div>

          {/* Message Input Form */}
          <div className="p-4 border-t border-gray-700">
            <form onSubmit={handleSendMessage} className="flex items-center gap-4">
              <input
                type="text"
                placeholder={`Message ${persona.name}...`}
                className="flex-grow p-3 bg-[#2a2a2a] rounded-lg focus:outline-none"
                autoComplete="off"
                value={input} // Bind input value to state
                onChange={(e) => setInput(e.target.value)} // Update state on change
                disabled={isLoading} // Disable input while AI is "thinking"
              />
              <button type="submit" className="bg-purple-600 p-3 rounded-full hover:bg-purple-700 transition-colors disabled:opacity-50" disabled={isLoading}>
                <SendHorizonal size={20} />
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}