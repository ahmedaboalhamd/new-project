import { ArrowUp } from "lucide-react";
import type { LandingCopy } from "@/lib/landing-copy";

export default function LandingFooter({ copy }: { copy: LandingCopy }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand-block">
            <a className="brand-mark footer-brand" href="#top" aria-label={copy.brand}>
              <span className="brand-icon" aria-hidden="true"><span /><span /><span /></span>
              <span className="brand-word">{copy.brand}</span>
            </a>
            <p>{copy.footer.description}</p>
          </div>
          <div className="footer-links-block">
            <strong>{copy.footer.explore}</strong>
            <a href="#health">{copy.nav.health}</a>
            <a href="#design">{copy.nav.design}</a>
            <a href="#connect">{copy.nav.connect}</a>
          </div>
          <div className="footer-links-block">
            <strong>{copy.footer.support}</strong>
            <a href="#faq">{copy.nav.faq}</a>
            <a href="#contact-note">{copy.footer.contact}</a>
            <a href="#privacy-note">{copy.footer.privacy}</a>
            <a className="footer-top-link" href="#top">{copy.footer.backToTop}<ArrowUp size={14} aria-hidden="true" /></a>
          </div>
        </div>
        <div className="footer-bottom" id="privacy-note">
          <span>{copy.footer.copyright}</span>
          <div className="footer-bottom-note"><span id="contact-note">{copy.footer.contactNote}</span><span>{copy.footer.privacyNote}</span><span>{copy.footer.disclaimer}</span></div>
        </div>
      </div>
    </footer>
  );
}
