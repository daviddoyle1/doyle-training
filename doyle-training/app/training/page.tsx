"use client";

import { useState, useRef, useEffect } from "react";
import { chapters, TRAINING_PASSWORD } from "./content";

/* ─── Types ─────────────────────────────────────────────── */
interface Message {
  role: "user" | "assistant";
  content: string;
}

/* ─── Password Gate ──────────────────────────────────────── */
function PasswordGate({ onUnlock }: { onUnlock: () => void }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (value === TRAINING_PASSWORD) {
      sessionStorage.setItem("training_auth", "1");
      onUnlock();
    } else {
      setError(true);
      setValue("");
    }
  }

  return (
    <div className="min-h-screen bg-navy-900 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <p className="text-gold-400 text-xs tracking-widest uppercase mb-3">
            Doyle Real Estate Advisors
          </p>
          <h1 className="text-white text-2xl font-semibold">Intern Training Portal</h1>
          <p className="text-navy-400 text-sm mt-2">Enter your access password to continue</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={value}
            onChange={(e) => { setValue(e.target.value); setError(false); }}
            placeholder="Password"
            className="w-full bg-navy-800 border border-navy-700 text-white placeholder-navy-500 rounded px-4 py-3 text-sm focus:outline-none focus:border-gold-500"
            autoFocus
          />
          {error && (
            <p className="text-red-400 text-xs">Incorrect password. Try again.</p>
          )}
          <button
            type="submit"
            className="w-full bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold py-3 rounded text-sm transition-colors"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}

/* ─── Accordion Item ─────────────────────────────────────── */
function AccordionItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-navy-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-4 flex justify-between items-start gap-4 group"
      >
        <span className="text-navy-800 font-medium text-sm leading-snug group-hover:text-gold-600 transition-colors">
          {q}
        </span>
        <span className="text-gold-500 text-lg leading-none shrink-0 mt-0.5">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <div className="pb-4 text-navy-600 text-sm leading-relaxed">
          {a}
        </div>
      )}
    </div>
  );
}

/* ─── AI Chat ────────────────────────────────────────────── */
function AskTheManual() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [apiAvailable] = useState(false); // flip to true once API key is set
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg: Message = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/training-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.content },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I couldn't reach the server. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white rounded-lg border border-navy-200 overflow-hidden">
      <div className="bg-navy-900 px-5 py-4">
        <h3 className="text-white font-semibold text-sm">Ask the Manual</h3>
        <p className="text-navy-400 text-xs mt-0.5">
          Ask any question about the RCS process
        </p>
      </div>

      {!apiAvailable ? (
        <div className="p-6 text-center">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gold-50 mb-3">
            <span className="text-gold-500 text-lg">⚙</span>
          </div>
          <p className="text-navy-700 font-medium text-sm mb-1">
            AI chat coming soon
          </p>
          <p className="text-navy-400 text-xs leading-relaxed">
            This feature will be enabled once the API key is configured in
            Vercel. In the meantime, use the Q&amp;A sections above.
          </p>
        </div>
      ) : (
        <>
          <div className="h-72 overflow-y-auto p-4 space-y-3 bg-navy-50">
            {messages.length === 0 && (
              <p className="text-navy-400 text-xs text-center mt-8">
                Ask anything — adjustments, comparables, maps, glossary…
              </p>
            )}
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-3 py-2 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-navy-800 text-white"
                      : "bg-white border border-navy-200 text-navy-700"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-navy-200 rounded-lg px-3 py-2 text-navy-400 text-sm">
                  Thinking…
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>
          <form onSubmit={sendMessage} className="flex border-t border-navy-200">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g. How do I make a Line 7 adjustment?"
              className="flex-1 px-4 py-3 text-sm text-navy-800 placeholder-navy-400 focus:outline-none"
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="px-4 py-3 bg-gold-500 hover:bg-gold-400 disabled:opacity-40 text-navy-950 font-semibold text-sm transition-colors"
            >
              Send
            </button>
          </form>
        </>
      )}
    </div>
  );
}

/* ─── Main Page ──────────────────────────────────────────── */
export default function TrainingPage() {
  const [authed, setAuthed] = useState(false);
  const [activeChapter, setActiveChapter] = useState(chapters[0].id);

  useEffect(() => {
    if (sessionStorage.getItem("training_auth") === "1") setAuthed(true);
  }, []);

  if (!authed) return <PasswordGate onUnlock={() => setAuthed(true)} />;

  const chapter = chapters.find((c) => c.id === activeChapter)!;

  return (
    <div className="min-h-screen bg-navy-50">
      {/* Top bar */}
      <div className="bg-navy-900 border-b border-navy-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div>
            <p className="text-gold-400 text-xs tracking-widest uppercase">
              Doyle Real Estate Advisors
            </p>
            <h1 className="text-white font-semibold text-lg leading-tight">
              Intern Training Portal
            </h1>
          </div>
          <a
            href="/"
            className="text-navy-400 hover:text-white text-xs transition-colors"
          >
            ← Back to site
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar nav */}
          <aside className="lg:w-56 shrink-0">
            <nav className="space-y-1 lg:sticky lg:top-6">
              {chapters.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveChapter(c.id)}
                  className={`w-full text-left px-3 py-2.5 rounded text-sm transition-colors ${
                    activeChapter === c.id
                      ? "bg-navy-900 text-white font-medium"
                      : "text-navy-600 hover:bg-navy-200 hover:text-navy-900"
                  }`}
                >
                  {c.title}
                </button>
              ))}
            </nav>
          </aside>

          {/* Content */}
          <main className="flex-1 min-w-0 space-y-8">
            {/* Chapter header */}
            <div className="bg-white rounded-lg border border-navy-200 px-6 py-5">
              <h2 className="text-navy-900 text-xl font-semibold mb-1">
                {chapter.title}
              </h2>
              <p className="text-navy-500 text-sm">{chapter.summary}</p>
            </div>

            {/* Q&A accordion */}
            <div className="bg-white rounded-lg border border-navy-200 px-6 py-2">
              {chapter.qa.map((item, i) => (
                <AccordionItem key={i} q={item.q} a={item.a} />
              ))}
            </div>

            {/* AI Chat */}
            <AskTheManual />
          </main>
        </div>
      </div>
    </div>
  );
}
