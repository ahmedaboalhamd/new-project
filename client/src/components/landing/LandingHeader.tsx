import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import type { LandingCopy, Language } from "@/lib/landing-copy";

interface LandingHeaderProps {
  copy: LandingCopy;
  language: Language;
  theme: "light" | "dark";
  onToggleLanguage: () => void;
  onToggleTheme?: () => void;
  onOrder: () => void;
}

export default function LandingHeader({
  copy,
  language,
  theme,
  onToggleLanguage,
  onToggleTheme,
  onOrder,
}: LandingHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { href: "#health", label: copy.nav.health },
    { href: "#design", label: copy.nav.design },
    { href: "#connect", label: copy.nav.connect },
    { href: "#faq", label: copy.nav.faq },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand-mark" href="#top" aria-label={copy.brand} onClick={closeMenu}>
          <span className="brand-icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="brand-word">{copy.brand}</span>
        </a>

        <nav className={`desktop-nav ${menuOpen ? "is-open" : ""}`} aria-label={language === "ar" ? "التنقل الرئيسي" : "Main navigation"}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="icon-button language-toggle"
            type="button"
            onClick={onToggleLanguage}
            aria-label={copy.nav.switchLanguage}
            title={copy.nav.switchLanguage}
          >
            <span aria-hidden="true">{language === "ar" ? "EN" : "ع"}</span>
          </button>
          <button
            className="icon-button theme-toggle"
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === "dark" ? copy.nav.switchThemeLight : copy.nav.switchThemeDark}
            title={theme === "dark" ? copy.nav.switchThemeLight : copy.nav.switchThemeDark}
          >
            {theme === "dark" ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          </button>
          <button className="button button-small header-order" type="button" onClick={onOrder}>
            {copy.nav.order}
          </button>
          <button
            className="icon-button mobile-menu-toggle"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? copy.nav.closeMenu : copy.nav.openMenu}
          >
            {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="mobile-nav container" aria-label={language === "ar" ? "التنقل الرئيسي" : "Main navigation"}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <button className="button mobile-nav-order" type="button" onClick={() => { closeMenu(); onOrder(); }}>
            {copy.nav.order}
          </button>
        </nav>
      )}
    </header>
  );
}
