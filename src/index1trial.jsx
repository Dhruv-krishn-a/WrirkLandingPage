import React from "react";
import { Bell, BookOpen, FileSearch, Gift, Users, ArrowRight } from "lucide-react";
import whatsappLogo from "./assets/whatsapp.png";
import wrirkLogo from "./assets/wrirk_logo.png";

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
      title: "Connect with Researchers",
      desc: "Engage with a community of PhD scholars, faculty, and research enthusiasts.",
      accent: "#22b14c",
      bg: "rgba(34,177,76,0.10)",
    },
  ];

  return (
    <main className="h-dvh w-full bg-white flex flex-col overflow-hidden">
      <section className="relative w-full h-dvh flex flex-col overflow-hidden bg-white">
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

        {/* Floating Research Nodes SVG (Collaboration/Co-authorship Theme) */}
        <div className="absolute right-[4%] bottom-[12%] opacity-35 pointer-events-none hidden lg:block animate-float">
          <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="50" r="5" fill="#18a6c9" />
            <circle cx="150" cy="30" r="7" fill="#1976d2" />
            <circle cx="90" cy="110" r="9" fill="#6f42c1" />
            <circle cx="130" cy="150" r="4" fill="#22b14c" />
            <circle cx="40" cy="140" r="6" fill="#18a6c9" />
            <path d="M30 50L150 30" stroke="#1976d2" strokeWidth="1" strokeDasharray="3 3" />
            <path d="M30 50L90 110" stroke="#18a6c9" strokeWidth="1" strokeDasharray="3 3" />
            <path d="M150 30L90 110" stroke="#6f42c1" strokeWidth="1" strokeDasharray="3 3" />
            <path d="M90 110L130 150" stroke="#22b14c" strokeWidth="1" strokeDasharray="3 3" />
            <path d="M40 140L90 110" stroke="#18a6c9" strokeWidth="1" strokeDasharray="3 3" />
          </svg>
        </div>

        {/* Floating Science Atom SVG */}
        <div className="absolute left-[5%] top-[25%] opacity-20 pointer-events-none hidden lg:block animate-float-slow">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="60" cy="60" rx="50" ry="18" stroke="#18a6c9" strokeWidth="1" transform="rotate(30 60 60)" />
            <ellipse cx="60" cy="60" rx="50" ry="18" stroke="#1976d2" strokeWidth="1" transform="rotate(-30 60 60)" />
            <ellipse cx="60" cy="60" rx="50" ry="18" stroke="#6f42c1" strokeWidth="1" transform="rotate(90 60 60)" />
            <circle cx="60" cy="60" r="6" fill="#1698c7" />
          </svg>
        </div>

        <div className="content-wrapper relative z-10 w-full max-w-5xl mx-auto flex flex-1 flex-col justify-between items-center px-4 py-6 md:px-8 lg:px-12 h-full gap-3 lg:gap-3.5 animate-fade-in-up">
          
          {/* Top Centered Brand Header */}
          <div className="flex flex-col items-center text-center mt-1 lg:mt-3 shrink-0">
            <img src={wrirkLogo} alt="WRIRK Logo" className="logo-img h-20 sm:h-28 md:h-32 object-contain" />

            <div className="mt-0.5 flex items-center gap-3 text-xs font-semibold text-[#12203a] sm:text-sm">
              <span className="h-px w-12 bg-[#1698c7] sm:w-16" />
              <span>Your Research Assistant</span>
              <span className="h-px w-12 bg-[#1698c7] sm:w-16" />
            </div>
          </div>

          {/* Main Headline */}
          <div className="text-center max-w-2xl animate-fade-in-up [animation-delay:150ms] opacity-0">
            <h1 className="headline-text text-[1.5rem] sm:text-[1.8rem] lg:text-[2.2rem] font-black leading-[1.1] tracking-[-0.03em] text-[#0b1c4b]">
              Join the <span className="text-[#1698c7]">WRIRK</span> Co-Authorship Community
            </h1>
            <p className="desc-text text-[11px] sm:text-xs lg:text-sm leading-normal text-[#2c3a52] mt-1">
              Get regular updates on research collaboration opportunities directly on{' '}
              <span className="font-semibold text-[#25d366]">WhatsApp</span>.
            </p>
          </div>

          {/* Features Grid (4 columns on desktop, 2 columns on mobile/tablet) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-5xl mx-auto animate-fade-in-up [animation-delay:300ms] opacity-0">
            {features.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="card-el group rounded-[20px] border border-white/95 bg-white/95 p-3 sm:p-4 text-center shadow-[0_6px_20px_rgba(15,23,42,0.04)] backdrop-blur-sm flex flex-col items-center justify-center min-h-[100px] sm:min-h-[120px] lg:min-h-[135px] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_12px_25px_rgba(15,23,42,0.06)] hover:border-slate-200"
                >
                  <div
                    className="card-icon mx-auto mb-1.5 flex h-9 w-9 items-center justify-center rounded-full shadow-[0_4px_10px_rgba(15,23,42,0.05)] transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: item.bg }}
                  >
                    <Icon size={18} strokeWidth={1.9} color={item.accent} />
                  </div>
                  <h2 className="card-title whitespace-pre-line text-xs sm:text-sm font-extrabold leading-tight text-[#10193b]">
                    {item.title}
                  </h2>
                  <p className="card-desc text-[10px] sm:text-xs leading-normal text-[#46556d] mt-1.5">
                    {item.desc}
                  </p>
                </article>
              );
            })}
          </div>

          {/* Community Banner */}
          <div className="banner-el w-full max-w-lg rounded-[20px] border border-[#d8efdf] bg-[#f3fbf5]/95 p-3 sm:p-3.5 shadow-[0_6px_20px_rgba(15,23,42,0.04)] backdrop-blur-sm transition-all duration-300 hover:shadow-[0_10px_30px_rgba(37,211,102,0.12)] hover:scale-[1.005] hover:border-[#25d366] mx-auto animate-fade-in-up [animation-delay:450ms] opacity-0">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-left">
                <div className="banner-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d8f0fb] shadow-[0_4px_10px_rgba(15,23,42,0.04)]">
                  <Users size={18} className="text-[#1698c7]" />
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

          {/* WhatsApp Join Button (Centered for all screens) */}
          <div className="button-el w-full max-w-lg mx-auto animate-fade-in-up [animation-delay:600ms] opacity-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="group flex w-full items-center justify-between gap-4 rounded-[20px] border border-[#1fb84f] bg-[linear-gradient(180deg,#2be15f_0%,#10b43b_100%)] px-5 py-3 shadow-[0_10px_24px_rgba(19,179,60,0.2)] transition-transform duration-200 hover:scale-[1.01] active:scale-[0.99]"
            >
              <div className="flex items-center gap-4">
                <div className="whatsapp-logo-container flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm overflow-hidden p-1.5">
                  <img src={whatsappLogo} alt="WhatsApp Logo" className="h-full w-full object-contain" />
                </div>
                <span className="text-base font-extrabold text-white tracking-wide">
                  Join WhatsApp Community
                </span>
              </div>
              <div className="arrow-container flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#0ca73a] shadow-sm transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight size={18} strokeWidth={3} />
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
