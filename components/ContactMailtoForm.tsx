"use client";

import { FormEvent, useMemo, useState } from "react";

interface ContactMailtoFormProps {
  contactEmail: string;
}

function encode(value: string): string {
  return encodeURIComponent(value);
}

export function ContactMailtoForm({ contactEmail }: ContactMailtoFormProps) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("Operations Review Inquiry");

  const mailtoHref = useMemo(() => {
    const body = [
      `Name: ${name}`,
      `Company: ${company}`,
      `Email: ${email}`,
      "",
      "Notes:",
      message
    ].join("\n");

    return `mailto:${contactEmail}?subject=${encode(subject)}&body=${encode(body)}`;
  }, [name, company, email, message, subject, contactEmail]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = mailtoHref;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-line bg-white p-6 shadow-soft sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-foreground">
          Name
          <input
            className="mt-2 w-full rounded-md border border-line bg-surface px-3 py-2 text-sm text-foreground outline-none transition focus:border-accent"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </label>
        <label className="text-sm font-medium text-foreground">
          Company
          <input
            className="mt-2 w-full rounded-md border border-line bg-surface px-3 py-2 text-sm text-foreground outline-none transition focus:border-accent"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
            required
          />
        </label>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-foreground">
          Email
          <input
            type="email"
            className="mt-2 w-full rounded-md border border-line bg-surface px-3 py-2 text-sm text-foreground outline-none transition focus:border-accent"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>
        <label className="text-sm font-medium text-foreground">
          Subject
          <input
            className="mt-2 w-full rounded-md border border-line bg-surface px-3 py-2 text-sm text-foreground outline-none transition focus:border-accent"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            required
          />
        </label>
      </div>
      <label className="mt-4 block text-sm font-medium text-foreground">
        Message
        <textarea
          className="mt-2 min-h-36 w-full rounded-md border border-line bg-surface px-3 py-2 text-sm text-foreground outline-none transition focus:border-accent"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        />
      </label>
      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="submit"
          className="rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-strong"
        >
          Open Email Draft
        </button>
        <a
          href={mailtoHref}
          className="rounded-md border border-line px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-stone-100"
        >
          Copy To Email App
        </a>
      </div>
      <p className="mt-4 text-xs leading-6 text-muted">
        This form opens your local email app and pre-fills details.
      </p>
    </form>
  );
}

