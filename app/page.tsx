export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] flex flex-col items-center px-4">

      {/* Hero */}
      <section className="max-w-2xl w-full text-center pt-24 pb-16">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          RSI Prevention for Developers
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
          Smart Break Reminders<br />
          <span className="text-[#58a6ff]">Based on Your Typing Patterns</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Monitors keystroke velocity and mouse activity to detect intensity spikes and suggest
          personalized break intervals — before RSI becomes a problem.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $5 / month
        </a>
        <p className="mt-3 text-xs text-[#8b949e]">Cancel anytime. No credit card required to try.</p>

        {/* Metrics strip */}
        <div className="mt-14 grid grid-cols-3 gap-4 text-center">
          {[
            ["Keystroke Velocity", "Real-time WPM tracking"],
            ["RSI Risk Score", "ML-powered intensity index"],
            ["Break Compliance", "Daily & weekly streaks"]
          ].map(([title, sub]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
              <p className="text-[#58a6ff] font-semibold text-sm">{title}</p>
              <p className="text-[#8b949e] text-xs mt-1">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm w-full mb-20">
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] text-xs font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$5</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Real-time keystroke & mouse monitoring",
              "ML-based RSI risk scoring",
              "Personalized break interval suggestions",
              "Daily dashboard & compliance streaks",
              "Background tray app — zero distraction"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-xl w-full mb-24">
        <h2 className="text-xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            [
              "How does it detect typing intensity?",
              "The app measures keystrokes per minute, inter-key intervals, and mouse movement patterns locally on your device. No keystrokes are ever transmitted — all processing is on-device."
            ],
            [
              "Will it interrupt me during deep work?",
              "No. The ML model learns your flow states and suppresses break nudges during high-focus periods, only alerting you at natural pause points."
            ],
            [
              "What platforms are supported?",
              "macOS and Windows are fully supported. Linux support is in beta. The dashboard runs in any modern browser."
            ]
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="font-semibold text-white text-sm mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="pb-8 text-xs text-[#8b949e] text-center">
        &copy; {new Date().getFullYear()} RSI Break Reminder. All rights reserved.
      </footer>
    </main>
  );
}
