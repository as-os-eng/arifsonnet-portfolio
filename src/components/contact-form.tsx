"use client";

import { useState } from "react";
import { PROFILE } from "@/lib/data";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${name || "your website"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 max-w-[52ch]">
      <div>
        <label htmlFor="name" className="block text-[12px] font-semibold uppercase tracking-wide text-[var(--ivory-500)] mb-2">Name</label>
        <input
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-transparent border-b border-[var(--clay-line)] py-2 text-[16px] focus:outline-none focus:border-[var(--accent)] transition-colors"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-[12px] font-semibold uppercase tracking-wide text-[var(--ivory-500)] mb-2">Email</label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-transparent border-b border-[var(--clay-line)] py-2 text-[16px] focus:outline-none focus:border-[var(--accent)] transition-colors"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-[12px] font-semibold uppercase tracking-wide text-[var(--ivory-500)] mb-2">Message</label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full bg-transparent border-b border-[var(--clay-line)] py-2 text-[16px] focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        className="mt-2 inline-block px-6 py-3 rounded-full border border-[var(--clay-line)] text-[13px] font-medium hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors w-fit"
      >
        Send via email
      </button>
    </form>
  );
}
