"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  X,
  Send,
  ExternalLink,
  Paperclip,
  ShieldAlert,
  ShieldCheck,
  Loader2,
} from "lucide-react";
import { inspectFileSafety } from "@/lib/fileScanner";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  link?: { url: string; label: string };
  fileInfo?: {
    name: string;
    status: "scanning" | "safe" | "rejected";
    reason?: string;
  };
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [imgError, setImgError] = useState(false);
  const [isScanning, setIsScanning] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const getTimeGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return "Good morning";
    if (hour >= 12 && hour < 17) return "Good afternoon";
    if (hour >= 17 && hour < 22) return "Good evening";
    return "Good night";
  };

  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    setMessages([
      {
        id: "init-msg",
        sender: "bot",
        text: `Hi! ${getTimeGreeting()}. I'm Mostakim's Assistant. How can I help you with his web projects, technical stack, or services?`,
      },
    ]);
  }, []);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsScanning(true);
    const userMsgId = Date.now().toString();

    setMessages((prev) => [
      ...prev,
      {
        id: userMsgId,
        sender: "user",
        text: `Uploaded file: ${file.name}`,
        fileInfo: { name: file.name, status: "scanning" },
      },
    ]);

    setTimeout(() => {
      const securityResult = inspectFileSafety(file);
      setIsScanning(false);

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: securityResult.isSafe
            ? `✅ File "${file.name}" passed security verification and has been forwarded to Mostakim.`
            : `⚠️ Upload Blocked: "${file.name}"\nReason: ${securityResult.reason}`,
          fileInfo: {
            name: file.name,
            status: securityResult.isSafe ? "safe" : "rejected",
            reason: securityResult.reason,
          },
        },
      ]);
    }, 1000);

    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const generateAnswer = (
    query: string,
  ): { text: string; link?: { url: string; label: string } } => {
    const q = query.toLowerCase().trim();

    if (/^(hi|hello|hey)(\s|$)/.test(q)) {
      return {
        text: `${getTimeGreeting()}! How can I assist you regarding Mostakim's portfolio or technical expertise?`,
      };
    }

    if (
      q.includes("how are you") ||
      q.includes("how are you?") ||
      q.includes("how about you") ||
      q.includes("how about you?") ||
      q.includes("kemon acho") ||
      q.includes("kemon achen") ||
      q.includes("কেমন আছো") ||
      q.includes("fine.You?") ||
      q.includes("fine.you?") ||
      q.includes("fine and you?") ||
      q.includes("fine and You?")
    ) {
      return {
        text: "Doing well, thank you! What would you like to know about Mostakim's development work?",
      };
    }

    if (
      q.includes("proof") ||
      q.includes("certificate") ||
      q.includes("certification") ||
      q.includes("credential") ||
      q.includes("প্রমাণ") ||
      q.includes("সার্টিফিকেট")
    ) {
      return {
        text: "You can inspect and verify Mostakim's technical certifications on LinkedIn:",
        link: {
          url: "https://www.linkedin.com/in/all-mostakim/details/certifications/",
          label: "Verify Certifications on LinkedIn",
        },
      };
    }

    if (
      /react|next|node|typescript|tailwind|express|mongodb|javascript|full-stack|mern|git/.test(
        q,
      )
    ) {
      return {
        text: "Yes, Mostakim designs and builds full-stack web applications with this technology stack.",
        link: {
          url: "https://www.linkedin.com/in/all-mostakim/details/certifications/",
          label: "View Credentials",
        },
      };
    }

    return {
      text: "For direct project inquiries, scope discussions, or file sharing, feel free to email: allmostakim13@gmail.com",
    };
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = input.trim();
    const userMsgId = Date.now().toString();

    setMessages((prev) => [
      ...prev,
      { id: userMsgId, sender: "user", text: userMsg },
    ]);
    setInput("");

    setTimeout(() => {
      const response = generateAnswer(userMsg);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: response.text,
          link: response.link,
        },
      ]);
    }, 250);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2.5 bg-slate-900/90 backdrop-blur-md border border-slate-800 hover:border-cyan-500/40 text-slate-100 p-1.5 pr-4 rounded-full shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 group"
        >
          <div className="w-8 h-8 rounded-full overflow-hidden border border-slate-700 bg-slate-800 flex items-center justify-center shrink-0">
            {!imgError ? (
              <img
                src="/icon.png"
                alt="Mostakim"
                className="w-full h-full object-cover"
                onError={() => setImgError(true)}
              />
            ) : (
              <span className="font-mono text-xs font-bold text-cyan-400">
                M
              </span>
            )}
          </div>
          <span className="text-xs font-medium text-slate-200">
            Ask Mostakim
          </span>
        </button>
      ) : (
        <div className="w-[330px] sm:w-[370px] h-[480px] bg-slate-950/95 backdrop-blur-xl border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="p-3.5 bg-slate-900/80 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full overflow-hidden border border-slate-700 bg-slate-800 flex items-center justify-center shrink-0">
                {!imgError ? (
                  <img
                    src="/icon.png"
                    alt="Mostakim"
                    className="w-full h-full object-cover"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <span className="font-mono text-xs font-bold text-cyan-400">
                    M
                  </span>
                )}
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-100 block">
                  Mostakim's AI
                </span>
                <span className="text-[10px] text-cyan-400 flex items-center gap-1 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />{" "}
                  Online
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-3.5 overflow-y-auto space-y-3 text-xs custom-scrollbar">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[82%] p-3 rounded-xl leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-cyan-500 text-slate-950 font-medium rounded-tr-xs"
                      : "bg-slate-900/90 text-slate-200 border border-slate-800/80 rounded-tl-xs"
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>

                  {/* File Upload Status */}
                  {msg.fileInfo && (
                    <div className="mt-2 pt-1.5 border-t border-slate-800 text-[10px] font-mono">
                      {msg.fileInfo.status === "scanning" && (
                        <span className="text-cyan-400 flex items-center gap-1">
                          <Loader2 size={11} className="animate-spin" />{" "}
                          Scanning file...
                        </span>
                      )}
                      {msg.fileInfo.status === "safe" && (
                        <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                          <ShieldCheck size={13} /> Verified Safe
                        </span>
                      )}
                      {msg.fileInfo.status === "rejected" && (
                        <span className="text-rose-400 flex items-center gap-1 font-semibold">
                          <ShieldAlert size={13} /> Blocked
                        </span>
                      )}
                    </div>
                  )}

                  {msg.link && (
                    <a
                      href={msg.link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-cyan-400 hover:underline mt-1.5 font-semibold"
                    >
                      {msg.link.label} <ExternalLink size={11} />
                    </a>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Panel */}
          <div className="p-2.5 bg-slate-900/80 border-t border-slate-800 flex items-center gap-2">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              className="hidden"
            />
            <button
              type="button"
              disabled={isScanning}
              onClick={() => fileInputRef.current?.click()}
              className="p-2 text-slate-400 hover:text-cyan-400 rounded-lg transition-colors disabled:opacity-50"
              title="Attach File"
            >
              <Paperclip className="w-4 h-4" />
            </button>

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a message..."
              className="flex-1 bg-slate-950/80 border border-slate-800 focus:border-cyan-500/40 text-slate-100 text-xs rounded-lg px-3 py-2 outline-none transition-colors placeholder:text-slate-500 font-normal"
            />
            <button
              onClick={handleSend}
              className="p-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-lg transition-all duration-200 active:scale-95"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
