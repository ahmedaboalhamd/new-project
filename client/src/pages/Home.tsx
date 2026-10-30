import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import LandingFooter from "@/components/landing/LandingFooter";
import HeroSection from "@/components/landing/HeroSection";
import LandingHeader from "@/components/landing/LandingHeader";
import { ConnectSection, DesignSection, HealthSection, StatsStrip } from "@/components/landing/ProductSections";
import { FAQSection, FinalCTA, TestimonialsSection } from "@/components/landing/TrustSections";
import { landingCopy, type Language } from "@/lib/landing-copy";
import { useTheme } from "@/contexts/ThemeContext";

function getSavedLanguage(): Language {
  try {
    return localStorage.getItem("nabdh-language") === "en" ? "en" : "ar";
  } catch {
    return "ar";
  }
}

export default function Home() {
  const [language, setLanguage] = useState<Language>(getSavedLanguage);
  const [orderDialogOpen, setOrderDialogOpen] = useState(false);
  const dialogCloseRef = useRef<HTMLButtonElement>(null);
  const { theme, toggleTheme } = useTheme();
  const copy = landingCopy[language];

  useEffect(() => {
    const root = document.documentElement;
    root.lang = language;
    root.dir = language === "ar" ? "rtl" : "ltr";
    document.title = language === "ar" ? "نبض — ساعة ذكية لليوم الحقيقي" : "NABDH — A smartwatch for real life";
    try {
      localStorage.setItem("nabdh-language", language);
    } catch {
      // Language switching still works for this visit if storage is unavailable.
    }
  }, [language]);

  useEffect(() => {
    if (!orderDialogOpen) return;
    dialogCloseRef.current?.focus();
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOrderDialogOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [orderDialogOpen]);

  const toggleLanguage = () => setLanguage((current) => current === "ar" ? "en" : "ar");

  return (
    <div className="site-shell">
      <LandingHeader
        copy={copy}
        language={language}
        theme={theme}
        onToggleLanguage={toggleLanguage}
        onToggleTheme={toggleTheme}
        onOrder={() => setOrderDialogOpen(true)}
      />
      <main>
        <HeroSection copy={copy} language={language} />
        <StatsStrip copy={copy} />
        <HealthSection copy={copy} />
        <DesignSection copy={copy} />
        <ConnectSection copy={copy} />
        <TestimonialsSection copy={copy} />
        <FAQSection copy={copy} />
        <FinalCTA copy={copy} language={language} onOrder={() => setOrderDialogOpen(true)} />
      </main>
      <LandingFooter copy={copy} />

      {orderDialogOpen && (
        <div className="dialog-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setOrderDialogOpen(false); }}>
          <section className="order-dialog" role="dialog" aria-modal="true" aria-labelledby="order-dialog-title">
            <button
              className="icon-button dialog-close"
              type="button"
              ref={dialogCloseRef}
              onClick={() => setOrderDialogOpen(false)}
              aria-label={copy.orderDialog.close}
            >
              <X size={18} aria-hidden="true" />
            </button>
            <span className="dialog-mark" aria-hidden="true"><span /></span>
            <span className="dialog-eyebrow">{copy.orderDialog.label}</span>
            <h2 id="order-dialog-title">{copy.orderDialog.title}</h2>
            <p>{copy.orderDialog.body}</p>
            <button className="button button-primary dialog-confirm" type="button" onClick={() => setOrderDialogOpen(false)}>
              {copy.orderDialog.close}
            </button>
          </section>
        </div>
      )}
    </div>
  );
}
