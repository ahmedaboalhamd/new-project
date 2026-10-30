import { ArrowUpLeft, ArrowUpRight, ChevronDown, Star } from "lucide-react";
import type { LandingCopy, Language } from "@/lib/landing-copy";

export function TestimonialsSection({ copy }: { copy: LandingCopy }) {
  return (
    <section className="content-section testimonials-section" id="stories">
      <div className="container">
        <div className="section-heading-row">
          <div className="section-copy compact-copy">
            <span className="eyebrow"><span className="eyebrow-dot" />{copy.testimonials.eyebrow}</span>
            <h2>{copy.testimonials.title}</h2>
          </div>
          <p className="sample-note">{copy.testimonials.note}</p>
        </div>
        <div className="testimonial-grid">
          {copy.testimonials.items.map((item, index) => (
            <article className="testimonial-card" key={item.name}>
              <div className="testimonial-stars" aria-hidden="true">
                {Array.from({ length: 5 }, (_, star) => <Star key={star} size={14} fill="currentColor" aria-hidden="true" />)}
              </div>
              <span className="testimonial-index">0{index + 1}</span>
              <blockquote>“{item.quote}”</blockquote>
              <div className="testimonial-author"><span className="author-avatar">{item.name.slice(0, 1)}</span><span><strong>{item.name}</strong><small>{item.role}</small></span></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQSection({ copy }: { copy: LandingCopy }) {
  return (
    <section className="content-section faq-section" id="faq">
      <div className="container faq-layout">
        <div className="section-copy faq-intro">
          <span className="eyebrow"><span className="eyebrow-dot" />{copy.faq.eyebrow}</span>
          <h2>{copy.faq.title}</h2>
        </div>
        <div className="faq-list">
          {copy.faq.items.map((item, index) => (
            <details className="faq-item" key={item.question} open={index === 0}>
              <summary><span>{item.question}</span><span className="faq-chevron"><ChevronDown size={17} aria-hidden="true" /></span></summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA({ copy, language, onOrder }: { copy: LandingCopy; language: Language; onOrder: () => void }) {
  const Arrow = language === "ar" ? ArrowUpLeft : ArrowUpRight;
  return (
    <section className="final-cta-section" id="order">
      <div className="container">
        <div className="final-cta-card">
          <div className="cta-orb cta-orb-one" aria-hidden="true" />
          <div className="cta-orb cta-orb-two" aria-hidden="true" />
          <div className="final-cta-copy">
            <span className="eyebrow"><span className="eyebrow-dot" />{copy.finalCta.eyebrow}</span>
            <h2>{copy.finalCta.title}</h2>
            <p>{copy.finalCta.body}</p>
          </div>
          <div className="final-cta-actions">
            <button className="button button-primary" type="button" onClick={onOrder}>
              {copy.finalCta.primary}<Arrow size={17} aria-hidden="true" />
            </button>
            <a className="cta-text-link" href="#design">{copy.finalCta.secondary}</a>
          </div>
          <span className="cta-decoration" aria-hidden="true">N.</span>
        </div>
      </div>
    </section>
  );
}
