import { ArrowDown, ArrowUpLeft, ArrowUpRight, Activity } from "lucide-react";
import type { LandingCopy, Language } from "@/lib/landing-copy";

interface HeroSectionProps {
  copy: LandingCopy;
  language: Language;
}

export default function HeroSection({ copy, language }: HeroSectionProps) {
  const Arrow = language === "ar" ? ArrowUpLeft : ArrowUpRight;

  return (
    <section className="hero-section" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow"><span className="eyebrow-dot" />{copy.hero.eyebrow}</span>
          <h1>{copy.hero.title}</h1>
          <p className="hero-description">{copy.hero.body}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#design">
              {copy.hero.primary}
              <Arrow size={17} aria-hidden="true" />
            </a>
            <a className="button button-secondary" href="#health">
              {copy.hero.secondary}
              <ArrowDown size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="hero-note">
            <Activity size={17} aria-hidden="true" />
            <span>{copy.hero.note}</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-frame">
            <img
              src={`${import.meta.env.BASE_URL}images/watch-hero.webp`}
              alt={copy.hero.visualAlt}
              fetchPriority="high"
            />
            <div className="hero-image-shade" aria-hidden="true" />
            <div className="hero-product-label">
              <span className="product-label-mark" aria-hidden="true"><span /></span>
              <span>{copy.brand}</span>
            </div>
            <div className="floating-health-card">
              <span className="floating-icon"><Activity size={16} aria-hidden="true" /></span>
              <span className="floating-copy">
                <span>{copy.hero.floatingLabel}</span>
                <strong>{copy.hero.floatingValue}</strong>
              </span>
              <span className="floating-sparkline" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /></span>
            </div>
          </div>
          <div className="hero-visual-caption">
            <span>01 / 04</span>
            <span className="caption-line" aria-hidden="true" />
            <span>{language === "ar" ? "صُممت لتواكبك" : "Designed to keep up"}</span>
          </div>
        </div>
      </div>
      <a className="scroll-cue" href="#features" aria-label={copy.nav.features}>
        <span>{copy.nav.features}</span>
        <ArrowDown size={15} aria-hidden="true" />
      </a>
    </section>
  );
}
