import { useState } from "react";
import { FiSend } from "react-icons/fi";
import SectionHeading from "../../common/SectionHeading";
import TerminalWindow from "../../common/TerminalWindow";
import Reveal from "../../common/Reveal";
import Magnetic from "../../common/Magnetic";

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

const INITIAL_FORM = { name: "", email: "", message: "" };

function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...form }),
      });
      setStatus("success");
      setForm(INITIAL_FORM);
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact">
      <SectionHeading index="05" title="Contact" subtitle="./send-message.sh" />

      <Reveal>
        <TerminalWindow title="~/sai-potluri — compose">
          <form
            name="contact"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don&apos;t fill this out: <input name="bot-field" onChange={handleChange} />
              </label>
            </p>

            <div>
              <label htmlFor="name" className="mb-1 block font-mono text-xs text-text-muted">
                --name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full rounded-md border border-border bg-bg px-3 py-2 font-mono text-sm text-text outline-none focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/40"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block font-mono text-xs text-text-muted">
                --email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-md border border-border bg-bg px-3 py-2 font-mono text-sm text-text outline-none focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/40"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1 block font-mono text-xs text-text-muted">
                --message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="What's on your mind?"
                className="w-full resize-none rounded-md border border-border bg-bg px-3 py-2 font-mono text-sm text-text outline-none focus:border-accent-cyan focus:ring-2 focus:ring-accent-cyan/40"
              />
            </div>

            <Magnetic
              as="button"
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex items-center gap-2 rounded-md bg-accent-cyan px-4 py-2 font-mono text-sm font-medium text-bg disabled:opacity-60"
            >
              <FiSend />
              {status === "submitting" ? "sending…" : "$ send --message"}
            </Magnetic>

            <p role="status" aria-live="polite" className="font-mono text-sm">
              {status === "success" && (
                <span className="text-accent-green">Message sent — thanks for reaching out.</span>
              )}
              {status === "error" && (
                <span className="text-accent-amber">
                  Something went wrong. Try again, or email directly.
                </span>
              )}
            </p>
          </form>
        </TerminalWindow>
      </Reveal>
    </section>
  );
}

export default Contact;
