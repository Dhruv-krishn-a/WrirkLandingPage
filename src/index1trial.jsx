import React from "react";
import { Bell, BookOpen, FileSearch, Gift, Users, ArrowRight } from "lucide-react";
import whatsappLogo from "./assets/whatsapp.png";

export default function WrirkCommunityPoster() {
  const whatsappUrl = "https://chat.whatsapp.com/IUUfrrGfyBNH6exy1JzOEA";

  const features = [
    {
      icon: FileSearch,
      title: `Latest
Co-Authorship
Opportunities`,
      desc: "Discover new research collaboration opportunities across multiple domains.",
      accent: "#18a6c9",
      bg: "rgba(24,166,201,0.10)",
    },
    {
      icon: BookOpen,
      title: `Research &
Publication
Updates`,
      desc: "Stay informed about calls, journals, and research insights.",
      accent: "#1976d2",
      bg: "rgba(25,118,210,0.10)",
    },
    {
      icon: Bell,
      title: `Instant
Notifications`,
      desc: "Receive real-time alerts about new opportunities and important updates.",
      accent: "#6f42c1",
      bg: "rgba(111,66,193,0.10)",
    },
    {
      icon: Gift,
      title: "Free to Join",
      desc: "100% free community. No hidden charges. Just value.",
      accent: "#22b14c",
      bg: "rgba(34,177,76,0.10)",
    },
  ];

  return (
    <main className="h-screen w-full bg-white flex flex-col overflow-hidden">
      <section className="relative w-full h-full flex flex-col overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(214,242,255,0.55),transparent_38%),radial-gradient(circle_at_20%_85%,rgba(214,242,255,0.35),transparent_18%),radial-gradient(circle_at_92%_74%,rgba(214,242,255,0.28),transparent_16%),linear-gradient(180deg,#ffffff_0%,#fbfdff_100%)]" />

        <div className="absolute left-0 top-0 h-32 w-32 md:h-40 md:w-40 rounded-br-[140px] bg-[#2d89c6] overflow-hidden">
          <div className="absolute -left-10 -top-10 h-28 w-28 md:h-32 md:w-32 rounded-full bg-[#4fc3f7] opacity-90" />
        </div>

        <div className="absolute right-3 top-8 grid grid-cols-5 gap-2 opacity-70">
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i} className="h-2 w-2 rounded-full bg-[#7ec8ef]" />
          ))}
        </div>

        <div className="absolute left-4 top-[32%] h-9 w-9 rounded-full bg-[#e6f4ff] opacity-80" />
        <div className="absolute right-2 bottom-10 h-12 w-12 rounded-full bg-[#e6f4ff] opacity-80" />

        <div className="absolute left-2 bottom-24 rotate-[-18deg] opacity-90">
          <svg width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 35L43 14L31 29L51 35L8 35Z" fill="#1f8fc6" opacity="0.95" />
            <path d="M20 46L43 14" stroke="#1f8fc6" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="5 7" />
          </svg>
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-1 flex-col justify-center px-4 py-4 md:px-8 lg:px-12 h-full overflow-hidden">
          
          {/* Top Centered Brand Header */}
          <div className="flex flex-col items-center text-center mt-1 lg:mt-3 shrink-0">
            <div className="relative flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-[4px] border-[#1a8eb8] bg-white shadow-[0_4px_12px_rgba(28,136,180,0.12)] sm:h-20 sm:w-20">
                <div className="relative flex items-center justify-center">
                  <span className="text-[36px] font-black leading-none tracking-[-0.08em] text-[#1698c7] sm:text-[44px]">W</span>
                  <div className="absolute -right-0.5 top-0.5 h-12 w-1 rotate-[-34deg] rounded-full bg-[#1698c7] sm:h-16" />
                </div>
              </div>
              <div className="mt-[-6px] text-[10px] font-semibold tracking-[0.24em] text-[#1698c7] sm:text-[11px]">WRIRK</div>
            </div>

            <h1 className="mt-1 text-2xl font-extrabold tracking-[-0.04em] text-[#1698c7] sm:text-3xl">
              WRIRK
            </h1>

            <div className="mt-1 flex items-center gap-3 text-xs font-semibold text-[#12203a] sm:text-sm">
              <span className="h-px w-12 bg-[#1698c7] sm:w-16" />
              <span>Your Research Assistant</span>
              <span className="h-px w-12 bg-[#1698c7] sm:w-16" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center w-full mt-3 lg:mt-6 mb-auto max-w-6xl mx-auto">
            
            {/* Left Column: Headline, Banner, and Button */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-4 lg:gap-6">
              
              {/* Main Headline */}
              <div className="max-w-xl">
                <h1 className="text-[2rem] sm:text-[2.4rem] lg:text-[3rem] font-black leading-[1.05] tracking-[-0.03em] text-[#0b1c4b]">
                  Join the <span className="text-[#1698c7]">WRIRK</span>
                  <br /> Co-Authorship Community
                </h1>
                <p className="text-xs sm:text-sm lg:text-base leading-normal text-[#2c3a52] mt-2.5">
                  Get regular updates on research collaboration opportunities directly on{' '}
                  <span className="font-semibold text-[#25d366]">WhatsApp</span>.
                </p>
              </div>

              {/* Community Banner */}
              <div className="w-full max-w-xl rounded-[24px] border border-[#d8efdf] bg-[#f3fbf5]/95 p-4 sm:p-5 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-sm">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 text-left">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#d8f0fb] shadow-[0_4px_12px_rgba(15,23,42,0.06)]">
                      <Users size={22} className="text-[#1698c7]" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-extrabold text-[#25344d]">Join 1000+ Researchers</p>
                      <p className="text-[10px] sm:text-xs text-[#46556d] mt-0.5 leading-relaxed">
                        A growing community of <span className="font-bold text-[#16849f]">Researchers, PhD Scholars &amp; Faculty Members</span> across India.
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:block shrink-0">
                    <img src={whatsappLogo} alt="WhatsApp Logo" className="h-7 w-7 object-contain" />
                  </div>
                </div>
              </div>

              {/* WhatsApp Join Button (Desktop only) */}
              <div className="hidden lg:block w-full max-w-xl mt-1">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex w-full items-center justify-between gap-4 rounded-[24px] border border-[#1fb84f] bg-[linear-gradient(180deg,#2be15f_0%,#10b43b_100%)] px-6 py-4 shadow-[0_12px_28px_rgba(19,179,60,0.25)] transition-transform duration-200 hover:scale-[1.01] active:scale-[0.99]"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm overflow-hidden p-1.5">
                      <img src={whatsappLogo} alt="WhatsApp Logo" className="h-full w-full object-contain" />
                    </div>
                    <span className="text-base font-extrabold text-white tracking-wide">
                      Join WhatsApp Community
                    </span>
                  </div>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#0ca73a] shadow-sm">
                    <ArrowRight size={20} strokeWidth={3} />
                  </div>
                </a>
              </div>

            </div>

            {/* Right Column: Features Grid */}
            <div className="lg:col-span-5 w-full flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full">
                {features.map((item) => {
                  const Icon = item.icon;
                  return (
                    <article
                      key={item.title}
                      className="rounded-[24px] border border-white/90 bg-white/95 p-4 sm:p-5 text-center shadow-[0_10px_30px_rgba(15,23,42,0.06)] backdrop-blur-sm flex flex-col items-center justify-center min-h-[110px] sm:min-h-[140px] lg:min-h-[160px] transition-all hover:scale-[1.02] hover:shadow-[0_15px_35px_rgba(15,23,42,0.1)]"
                    >
                      <div
                        className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full shadow-[0_4px_12px_rgba(15,23,42,0.06)]"
                        style={{ backgroundColor: item.bg }}
                      >
                        <Icon size={22} strokeWidth={1.9} color={item.accent} />
                      </div>
                      <h2 className="whitespace-pre-line text-xs sm:text-sm font-extrabold leading-tight text-[#10193b]">
                        {item.title}
                      </h2>
                      <p className="text-[10px] sm:text-xs leading-normal text-[#46556d] mt-2 hidden sm:block">
                        {item.desc}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>

          </div>

          {/* WhatsApp Join Button (Mobile/Tablet only) */}
          <div className="lg:hidden w-full max-w-xl mx-auto mt-4 pb-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="group flex w-full items-center justify-between gap-4 rounded-[24px] border border-[#1fb84f] bg-[linear-gradient(180deg,#2be15f_0%,#10b43b_100%)] px-5 py-3.5 shadow-[0_10px_25px_rgba(19,179,60,0.25)] transition-transform duration-200 hover:scale-[1.01] active:scale-[0.99]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm overflow-hidden p-1.5">
                  <img src={whatsappLogo} alt="WhatsApp Logo" className="h-full w-full object-contain" />
                </div>
                <span className="text-base font-extrabold text-white tracking-tight">
                  Join WhatsApp Community
                </span>
              </div>
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#0ca73a] shadow-sm">
                <ArrowRight size={18} strokeWidth={3} />
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
