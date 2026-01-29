"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Send, Terminal as TerminalIcon, User, MessageSquare } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { supabase } from "@/lib/supabase";

interface GuestMessage {
  id: string;
  name: string;
  message: string;
  created_at: string;
}

export default function Guestbook() {
  const [messages, setMessages] = useState<GuestMessage[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchMessages();
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const fetchMessages = async () => {
    try {
      const { data, error } = await supabase
        .from('guestbook')
        .select('*')
        .order('created_at', { ascending: true }) // Old chat style: oldest to newest
        .limit(50);

      if (!error && data) {
        setMessages(data as GuestMessage[]);
      }
    } catch (err) {
      console.error("Error fetching guestbook:", err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsLoading(true);
    try {
      const { error } = await supabase.from('guestbook').insert([{ name, message }]);
      if (!error) {
        setName("");
        setMessage("");
        fetchMessages();
      }
    } catch (err) {
      console.error("Failed to sign guestbook", err);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <section className="py-24 px-4 md:px-8 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold font-mono tracking-tighter mb-4 flex items-center justify-center gap-3">
          <MessageSquare className="text-purple-500" />
          PUBLIC_LOG
        </h2>
        <p className="text-slate-500 font-mono text-sm uppercase tracking-widest">Leave your mark on the transmission</p>
      </div>

      <div className="glass border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col w-full max-w-3xl mx-auto">
        {/* Terminal Header */}
        <div className="bg-white/5 border-b border-white/10 px-4 py-3 flex items-center justify-between flex-shrink-0">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
          </div>
          <div className="flex items-center gap-2 text-slate-500 font-mono text-[10px] uppercase">
            <TerminalIcon size={12} />
            guestbook_session.log
          </div>
        </div>

        {/* Message Area - Scrollable after 10 messages */}
        <div
          ref={scrollRef}
          className={`p-6 space-y-4 scrollbar-thin scrollbar-thumb-white/10 bg-slate-950/20 ${
            messages.length > 10 ? 'max-h-[400px] overflow-y-auto' : 'overflow-hidden'
          }`}
        >
          <AnimatePresence initial={false}>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex flex-col gap-1 group"
              >
                <div className="flex items-start gap-2">
                  <span className="text-[10px] font-mono text-slate-600 whitespace-nowrap">[{formatDate(msg.created_at)}]</span>
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <span className="text-sm font-bold font-mono text-purple-400">{msg.name}:</span>
                    <span className="text-sm text-slate-300 font-mono break-words">{msg.message}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {messages.length === 0 && (
            <div className="h-full flex items-center justify-center text-slate-600 font-mono text-sm italic">
              NO_LOGS_FOUND // READY_FOR_SIGNAL
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-6 bg-white/5 border-t border-white/10 flex-shrink-0">
          <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-4">
            <div className="flex items-center gap-3 bg-slate-950 border border-white/10 rounded-lg px-4 py-1 focus-within:border-purple-500/50 transition-all flex-shrink-0">
              <User className="text-slate-500" size={16} />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Identity"
                className="bg-transparent py-2 w-24 md:w-32 text-sm font-mono text-slate-200 placeholder:text-slate-600 focus:outline-none"
                maxLength={15}
              />
            </div>
            <div className="flex-grow">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="w-full bg-slate-950 border border-white/10 rounded-lg py-3 px-4 text-sm font-mono text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-purple-500/50 transition-all"
                maxLength={100}
              />
            </div>
            <button
              type="submit"
              disabled={isLoading || !name.trim() || !message.trim()}
              className="bg-purple-600 hover:bg-purple-500 disabled:opacity-50 disabled:hover:bg-purple-600 text-white font-mono text-sm font-bold px-6 py-2 rounded-lg transition-all flex items-center justify-center gap-2"
            >
              {isLoading ? "..." : <><Send size={14} /> SEND</>}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
