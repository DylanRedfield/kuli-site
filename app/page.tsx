import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1758518726869-01aff69a56e3?w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className="absolute inset-0 bg-white/30"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-kuli-dark mb-6 leading-tight">
              Innovation without marketing is a journey with no destination.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl">
              We're the leading growth partner for visionary brands, fusing strategy,
              creativity, and performance to deliver results you can measure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#contact"
                className="bg-kuli-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition text-center"
              >
                Get in Touch
              </a>
            </div>
            <p className="text-sm text-gray-500">
              Trusted by startups, scale-ups, and enterprises worldwide.
            </p>
          </div>
        </div>
        <div className="absolute bottom-2 right-2 z-20 text-xs text-gray-500 opacity-50">
          Photo by{" "}
          <a
            href="https://unsplash.com/@silverkblack?utm_source=kuli_site&utm_medium=referral"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-700"
          >
            Vitaly Gariev
          </a>{" "}
          on{" "}
          <a
            href="https://unsplash.com?utm_source=kuli_site&utm_medium=referral"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-700"
          >
            Unsplash
          </a>
        </div>
      </section>

      {/* External CMO Section */}
      <section className="py-20 px-6 lg:px-8 bg-kuli-dark text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Your external CMO.
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                We operate as your in-house marketing team, with global expertise across
                B2B sectors. From positioning to launch to optimization, we help your
                business scale faster and smarter.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-kuli-orange rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Global Expertise</h3>
                    <p className="text-gray-300">B2B marketing across all sectors</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-kuli-orange rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Full Lifecycle</h3>
                    <p className="text-gray-300">From positioning to optimization</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-kuli-orange rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Scale Faster</h3>
                    <p className="text-gray-300">Smarter growth strategies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        className="relative py-20 px-6 lg:px-8 bg-white"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1721864428830-7417b93831b8?w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className="absolute inset-0 bg-white/30"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-kuli-dark mb-4">
              Your Growth, Our Full Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We adapt to your biggest needs, then scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Strategy & Branding",
                description: "Market positioning, brand identity, and go-to-market strategies that resonate.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                ),
              },
              {
                title: "Inbound Marketing & Demand Generation",
                description: "Content strategies and campaigns that attract, engage, and convert your ideal customers.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                ),
              },
              {
                title: "Marketing Automation",
                description: "Streamlined workflows that nurture leads and maximize efficiency at scale.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                ),
              },
              {
                title: "Growth Marketing",
                description: "Data-driven experiments and rapid testing to find what works and scale it fast.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                ),
              },
              {
                title: "Account-Based Marketing",
                description: "Personalized campaigns targeting high-value accounts with precision.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                ),
              },
              {
                title: "Digital & Social Media",
                description: "Paid and organic campaigns across channels that drive engagement and ROI.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                ),
              },
              {
                title: "Marcom & Sales Tools",
                description: "Collateral, presentations, and assets that empower your sales team to close deals.",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                ),
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl border-2 border-gray-200 hover:border-kuli-orange transition-all hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-kuli-orange/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-kuli-orange transition-colors">
                  <svg
                    className="w-6 h-6 text-kuli-orange group-hover:text-white transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {service.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-kuli-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-2 right-2 z-20 text-xs text-gray-500 opacity-50">
          Photo by{" "}
          <a
            href="https://unsplash.com/@n3gve?utm_source=kuli_site&utm_medium=referral"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-700"
          >
            Evgeny Opanasenko
          </a>{" "}
          on{" "}
          <a
            href="https://unsplash.com?utm_source=kuli_site&utm_medium=referral"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-700"
          >
            Unsplash
          </a>
        </div>
      </section>

      {/* Why Different Section */}
      <section id="why-us" className="py-20 px-6 lg:px-8 bg-gradient-to-br from-kuli-blue to-blue-700 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why We're Different
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-5xl font-bold mb-4 text-kuli-orange">01</div>
              <h3 className="text-2xl font-bold mb-4">
                Data-Driven, Not Opinion Driven
              </h3>
              <p className="text-lg text-gray-200 leading-relaxed">
                KPIs, experiments, and real-time optimization guide every decision.
                We let the numbers tell the story, not hunches.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-5xl font-bold mb-4 text-kuli-orange">02</div>
              <h3 className="text-2xl font-bold mb-4">
                Boutique Focus, High Accountability
              </h3>
              <p className="text-lg text-gray-200 leading-relaxed">
                Senior strategists work directly with you. No layers. No hand-offs.
                Just results and clear communication.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-5xl font-bold mb-4 text-kuli-orange">03</div>
              <h3 className="text-2xl font-bold mb-4">
                Smart Automation Behind the Scenes
              </h3>
              <p className="text-lg text-gray-200 leading-relaxed">
                Advanced systems amplify our work, while the strategy and voice
                stay 100% human. The best of both worlds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        className="relative py-20 px-6 lg:px-8 bg-white"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1548406660-6a5c1865f74d?w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className="absolute inset-0 bg-white/30"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-kuli-dark mb-4">
              How We Get Results, Together
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't ghost you with dashboards. We talk through insights, explain tradeoffs,
              and work in partnership on what to double down on.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Audit",
                description: "We review your funnel, data, creative, and goals to understand where you are today.",
              },
              {
                step: "02",
                title: "Tailored Strategy & Plan",
                description: "We map the best 90-day opportunities specifically for you and your market.",
              },
              {
                step: "03",
                title: "Execution & Optimization",
                description: "We launch, test, iterate, and scale based on real performance data.",
              },
              {
                step: "04",
                title: "Reporting & Growth Cycles",
                description: "We provide clear dashboards and next-phase plans to keep momentum going.",
              },
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-50 rounded-2xl p-8 h-full">
                  <div className="text-6xl font-bold text-kuli-orange/20 mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-kuli-dark mb-3">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {process.description}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <svg className="w-8 h-8 text-kuli-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#contact"
              className="inline-block bg-kuli-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition"
            >
              Let's Talk Strategy →
            </a>
          </div>
        </div>
        <div className="absolute bottom-2 right-2 z-20 text-xs text-gray-500 opacity-50">
          Photo by{" "}
          <a
            href="https://unsplash.com/@benlodge123?utm_source=kuli_site&utm_medium=referral"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-700"
          >
            Ben Lodge
          </a>{" "}
          on{" "}
          <a
            href="https://unsplash.com?utm_source=kuli_site&utm_medium=referral"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-700"
          >
            Unsplash
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative py-20 px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1678345201361-f070f85b62a5?w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className="absolute inset-0 bg-white/30"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-kuli-dark mb-4">
              Wanna hear what we can do for your company?
            </h2>
          </div>

          <form className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Come closer! What did you say your name was?
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-kuli-orange focus:outline-none transition"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-kuli-orange focus:outline-none transition"
                  placeholder="Your company"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Work Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-kuli-orange focus:outline-none transition"
                  placeholder="you@company.com"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-kuli-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition"
              >
                Send
              </button>
            </div>
          </form>
        </div>
        <div className="absolute bottom-2 right-2 z-20 text-xs text-gray-500 opacity-50">
          Photo by{" "}
          <a
            href="https://unsplash.com/@masjidmpd?utm_source=kuli_site&utm_medium=referral"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-700"
          >
            Masjid Pogung Dalangan
          </a>{" "}
          on{" "}
          <a
            href="https://unsplash.com?utm_source=kuli_site&utm_medium=referral"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-700"
          >
            Unsplash
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-kuli-dark text-white py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Kuli Marketing</h3>
              <p className="text-xl text-gray-300 mb-2">
                Strategy, Creative, Growth.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We specialize in helping tech companies expand globally and reach
                B2B clients, wherever they are located.
              </p>
            </div>

            <div className="flex flex-col md:items-end">
              <div className="space-y-3">
                <a href="#services" className="block text-gray-300 hover:text-kuli-orange transition">
                  Services
                </a>
                <a href="#why-us" className="block text-gray-300 hover:text-kuli-orange transition">
                  Why Us
                </a>
                <a href="#process" className="block text-gray-300 hover:text-kuli-orange transition">
                  Process
                </a>
                <a href="#contact" className="block text-gray-300 hover:text-kuli-orange transition">
                  Contact
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <p className="text-center text-gray-400">
              © {new Date().getFullYear()} Kuli Marketing. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
