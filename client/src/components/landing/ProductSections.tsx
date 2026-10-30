import { BatteryCharging, Check, HeartPulse, MapPin, Waves } from "lucide-react";
import { useState } from "react";
import type { CSSProperties } from "react";
import type { LandingCopy } from "@/lib/landing-copy";

const statIcons = [BatteryCharging, Waves, HeartPulse, MapPin];
const strapColors = ["#587563", "#c7b99f", "#363a37"];

export function StatsStrip({ copy }: { copy: LandingCopy }) {
  return (
    <section className="stats-section" id="features" aria-label={copy.nav.features}>
      <div className="container">
        <div className="stats-grid">
          {copy.stats.map((stat, index) => {
            const Icon = statIcons[index];
            return (
              <div className="stat-item" key={stat.label}>
                <span className="stat-icon"><Icon size={18} aria-hidden="true" /></span>
                <div>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              </div>
            );
          })}
        </div>
        <p className="stats-note">{copy.statsNote}</p>
      </div>
    </section>
  );
}

export function HealthSection({ copy }: { copy: LandingCopy }) {
  const highlights = [
    { title: copy.health.itemOne, text: copy.health.itemOneText },
    { title: copy.health.itemTwo, text: copy.health.itemTwoText },
    { title: copy.health.itemThree, text: copy.health.itemThreeText },
  ];

  return (
    <section className="content-section health-section" id="health">
      <div className="container feature-layout">
        <div className="section-copy">
          <span className="eyebrow"><span className="eyebrow-dot" />{copy.health.eyebrow}</span>
          <h2>{copy.health.title}</h2>
          <p className="section-description">{copy.health.body}</p>
          <div className="feature-list">
            {highlights.map((item) => (
              <div className="feature-list-item" key={item.title}>
                <span className="feature-check"><Check size={15} aria-hidden="true" /></span>
                <span><strong>{item.title}</strong><small>{item.text}</small></span>
              </div>
            ))}
          </div>
        </div>

        <div className="health-dashboard" aria-label={copy.health.visualTitle}>
          <div className="dashboard-topline">
            <div><span className="dashboard-overline">{copy.brand} / {copy.health.visualTitle}</span><h3>{copy.health.visualTitle}</h3></div>
            <span className="dashboard-live"><i />{copy.health.readinessValue}</span>
          </div>
          <div className="health-main-card">
            <div className="activity-ring-wrap">
              <div className="activity-ring"><div className="activity-ring-inner"><span>78%</span><small>{copy.health.readiness}</small></div></div>
            </div>
            <div className="health-main-copy">
              <span className="metric-label">{copy.health.readiness}</span>
              <strong>{copy.health.readinessValue}</strong>
              <p>{copy.health.itemThreeText}</p>
            </div>
          </div>
          <div className="health-metrics-grid">
            <div className="mini-metric"><span className="mini-metric-icon heart-icon"><HeartPulse size={17} aria-hidden="true" /></span><span className="metric-label">{copy.health.heartLabel}</span><strong>{copy.health.heartValue}<small> {copy.health.heartUnit}</small></strong></div>
            <div className="mini-metric"><span className="mini-metric-icon sleep-icon"><span className="moon-shape" aria-hidden="true">◔</span></span><span className="metric-label">{copy.health.sleepLabel}</span><strong>{copy.health.sleepValue}</strong></div>
            <div className="mini-metric mini-metric-wide"><span className="mini-metric-icon steps-icon"><MapPin size={17} aria-hidden="true" /></span><span className="metric-label">{copy.health.stepsLabel}</span><strong>{copy.health.stepsValue}</strong><span className="progress-track"><i /></span></div>
          </div>
          <div className="dashboard-footnote"><span className="footnote-dot" />{copy.health.dashboardNote}</div>
        </div>
      </div>
    </section>
  );
}

export function DesignSection({ copy }: { copy: LandingCopy }) {
  const [selectedColor, setSelectedColor] = useState(1);
  const colorStyle = { "--strap-color": strapColors[selectedColor] } as CSSProperties;

  return (
    <section className="content-section design-section" id="design">
      <div className="container design-layout">
        <div className="design-visual" style={colorStyle}>
          <img
            src={`${import.meta.env.BASE_URL}images/watch-detail.webp`}
            alt={copy.design.visualAlt}
            loading="lazy"
          />
          <span className="strap-color-mask strap-color-mask-top" style={{ backgroundColor: strapColors[selectedColor] }} aria-hidden="true" />
          <span className="strap-color-mask strap-color-mask-bottom" style={{ backgroundColor: strapColors[selectedColor] }} aria-hidden="true" />
          <div className="design-image-tint" aria-hidden="true" />
          <div className="design-image-label"><span className="label-ring" aria-hidden="true" />{copy.design.detailThree}</div>
          <div className="strap-selector">
            <span className="strap-selector-label">{copy.design.colorLabel}</span>
            <div className="strap-options" role="group" aria-label={copy.design.colorLabel}>
              {copy.design.colors.map((color, index) => (
                <button
                  key={color}
                  className={`strap-swatch ${selectedColor === index ? "is-selected" : ""}`}
                  type="button"
                  style={{ "--swatch-color": strapColors[index] } as CSSProperties}
                  onClick={() => setSelectedColor(index)}
                  aria-label={color}
                  aria-pressed={selectedColor === index}
                  title={color}
                />
              ))}
            </div>
            <strong aria-live="polite">{copy.design.colors[selectedColor]}</strong>
          </div>
        </div>

        <div className="section-copy design-copy">
          <span className="eyebrow"><span className="eyebrow-dot" />{copy.design.eyebrow}</span>
          <h2>{copy.design.title}</h2>
          <p className="section-description">{copy.design.body}</p>
          <div className="design-perks">
            <span><i />{copy.design.detailOne}</span>
            <span><i />{copy.design.detailTwo}</span>
            <span><i />{copy.design.detailThree}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ConnectSection({ copy }: { copy: LandingCopy }) {
  return (
    <section className="content-section connect-section" id="connect">
      <div className="container connect-layout">
        <div className="section-copy">
          <span className="eyebrow"><span className="eyebrow-dot" />{copy.connect.eyebrow}</span>
          <h2>{copy.connect.title}</h2>
          <p className="section-description">{copy.connect.body}</p>
          <div className="connect-benefits">
            {[copy.connect.benefitOne, copy.connect.benefitTwo, copy.connect.benefitThree].map((benefit) => (
              <div className="connect-benefit" key={benefit}><span className="benefit-mark"><Check size={14} aria-hidden="true" /></span>{benefit}</div>
            ))}
          </div>
          <span className="app-caption"><span className="app-caption-dot" />{copy.connect.appLabel}</span>
        </div>

        <div className="phone-stage" aria-label={copy.connect.appLabel}>
          <div className="phone-glow" aria-hidden="true" />
          <div className="phone-device">
            <div className="phone-notch" aria-hidden="true" />
            <div className="phone-screen">
              <div className="phone-status"><span>9:41</span><span>●●● ▰</span></div>
              <div className="phone-greeting"><span>{copy.connect.phoneTitle}</span><small>{copy.connect.phoneSub}</small></div>
              <div className="phone-balance-card">
                <span>{copy.health.readiness}</span>
                <strong>78<span>%</span></strong>
                <div className="phone-ring-line"><i /><i /><i /><i /><i /><i /><i /><i /></div>
              </div>
              <div className="phone-data-row">
                <div><span className="phone-data-icon heart-icon"><HeartPulse size={15} aria-hidden="true" /></span><small>{copy.health.heartLabel}</small><strong>72 <em>{copy.connect.phoneHeart}</em></strong></div>
                <div><span className="phone-data-icon steps-icon"><MapPin size={15} aria-hidden="true" /></span><small>{copy.health.stepsLabel}</small><strong>8,240 <em>{copy.connect.phoneSteps}</em></strong></div>
              </div>
              <div className="phone-notification"><span className="notification-symbol"><BatteryCharging size={16} aria-hidden="true" /></span><span>{copy.connect.notification}</span></div>
              <div className="phone-tab-bar"><i /><i /><i /><i /></div>
            </div>
          </div>
          <div className="phone-orbit orbit-one" aria-hidden="true" />
          <div className="phone-orbit orbit-two" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
