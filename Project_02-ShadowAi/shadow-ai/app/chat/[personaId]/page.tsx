"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, Globe, Linkedin, SendHorizonal, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';
import { personas } from '@/lib/persona';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import React from "react";

interface MessagePart {
  text: string;
}

interface Message {
  role: 'user' | 'model';
  parts: MessagePart[];
}

type PersonaId = keyof typeof personas;


export default function ChatPage({ params }: { params: Promise<{ personaId: PersonaId }> }) {
  const { personaId } = React.use(params);
  const persona = personas[personaId];

  const [language, setLanguage] = useState('en');
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', parts: [{ text: `Hello Ji, I am ${persona?.name}. ` }] }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', parts: [{ text: input }] };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      // API call to our backend route
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages,
          personaId: personaId,
          language: language
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response from AI');
      }

      const data = await response.json();
      const modelMessage: Message = { role: 'model', parts: [{ text: data.text }] };

      setMessages(prev => [...prev, modelMessage]);

    } catch (error) {
      console.error(error);
      const errorMessage: Message = { role: 'model', parts: [{ text: "Oops! Something went wrong. Please try again." }] };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="bg-[#121212] text-white min-h-screen font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-3 h-screen">

        {/* LEFT SIDEBAR */}
        <aside className="hidden lg:flex lg:col-span-1 bg-[#1a1a1a] p-8 flex-col items-center justify-center gap-8 border-r border-gray-700 relative">
          <Link
            href="/"
            className="absolute top-4 left-4 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ChevronLeft size={20} />
            <span>Back</span>
          </Link>

          {/* Animated Persona Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-48 h-48 relative"
          >
            <Image
              src={persona?.imageUrl}
              alt={persona?.name}
              layout="fill"
              className="rounded-full object-cover border-4 border-purple-600 shadow-lg"
            />
          </motion.div>

          <motion.h1
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl font-bold text-center"
          >
            {persona?.name}
          </motion.h1>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex items-center gap-6"
          >
            <a href={persona?.socials.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><Youtube size={28} /></a>
            <a href={persona?.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><Twitter size={28} /></a>
            <a href={persona?.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><Linkedin size={28} /></a>
            <a href={persona?.socials.portfolio} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><Globe size={28} /></a>
          </motion.div>

          <div className="mt-6 px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded-lg shadow-lg animate-pulse">
            ⚠️ Do not <strong>REFRESH</strong> — your chat will vanish!
          </div>
        </aside>

        {/* MAIN CHAT AREA */}
        <main className="lg:col-span-2 flex flex-col h-screen">

          {/* Header */}
          <header className="flex items-center justify-between p-4 border-b border-gray-700 bg-[#1a1a1a]">
            <h2 className="text-xl font-bold">Chat</h2>
            <div className="flex items-center gap-2">
              <label htmlFor="language" className="text-white">Select language</label>
              <select
                id="language"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-[#2a2a2a] text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="en">English</option>
                <option value="hi_en">Hindi</option>
              </select>
            </div>
          </header>

          {/* Messages */}
          <div className="flex-grow p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-4"
            >
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className={`p-3 rounded-lg max-w-lg ${msg.role === 'user'
                      ? 'bg-purple-600 self-end'
                      : 'bg-[#2a2a2a] self-start'
                    }`}
                >
                  <div className="prose prose-invert prose-p:my-0 prose-headings:my-0">
                    <ReactMarkdown>{msg.parts[0].text}</ReactMarkdown>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="p-3 bg-[#2a2a2a] rounded-lg self-start">
                  <p className="animate-pulse">Thinking...</p>
                </div>
              )}
              <div ref={chatEndRef} />
            </motion.div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-700 bg-[#1a1a1a]">
            <form onSubmit={handleSendMessage} className="flex items-center gap-4">
              <input
                type="text"
                placeholder={`Message ${persona?.name}...`}
                className="flex-grow p-3 bg-[#2a2a2a] rounded-lg focus:outline-none"
                autoComplete="off"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
              />
              <button
                type="submit"
                className="bg-purple-600 p-3 rounded-full hover:bg-purple-700 transition-colors disabled:opacity-50"
                disabled={isLoading}
              >
                <SendHorizonal size={20} />
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}