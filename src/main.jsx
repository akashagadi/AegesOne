import React, { useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import "../styles.css";
import "./clean.css";
import "./panels.css";
import "./motion.css";
import "./banner.css";

const modules = [
  {
    name: "SOC",
    icon: "shield",
    description: "Security Operations Center",
    accent: "blue",
    featured: true,
  },
  {
    name: "NOC",
    icon: "network",
    description: "Network Operations Center",
    accent: "cyan",
    featured: true,
  },
  {
    name: "Patch Management",
    icon: "patch",
    description: "Keep every endpoint up to date",
    accent: "blue",
  },
  {
    name: "Asset Management",
    icon: "assets",
    description: "Know your entire environment",
    accent: "cyan",
  },
  {
    name: "Unified PAM",
    icon: "access",
    description: "Control every privileged interaction",
    accent: "blue",
  },
  {
    name: "Email Gateway Security",
    icon: "mail",
    description: "Keep threats out of your inbox",
    accent: "cyan",
  },
  {
    name: "EDR / XDR",
    icon: "endpoint",
    description: "See further. Respond smarter.",
    accent: "violet",
  },
  {
    name: "Credential Vault",
    icon: "vault",
    description: "Your secrets, safely secured",
    accent: "blue",
  },
];
function Icon({ name, ...props }) {
  return (
    <svg aria-hidden="true" {...props}>
      <use href={`#${name}`} />
    </svg>
  );
}
function App() {
  const [selected, setSelected] = useState(modules[0]);
  const dialog = useRef(null);
  function openModule(module) {
    setSelected(module);
    dialog.current.showModal();
  }
  return (
    <>
      <header className="topbar">
        <a className="brand" href="/" aria-label="AegisOne home">
          <img
            className="brand-logo"
            src="/assets/aegisone-logo.jpg"
            alt="Aegis One — Secure Smartly"
            width="663"
            height="711"
          />
          <span className="brand-name">
            Aegis<span>One</span>
            <span className="brand-caption">SECURITY & NETWORK OPERATIONS</span>
          </span>
        </a>
        <div className="header-right">
          <span className="workspace-label">Your workspace</span>
          <span className="header-divider" />
          <span className="avatar" aria-label="AegisOne workspace">
            AO
          </span>
        </div>
      </header>
      <main>
        <section className="intro" aria-labelledby="page-title">
          <div className="hero-content">
            <div className="eyebrow">
              <span className="welcome-line" /> Your operations, simplified
            </div>
            <h1 id="page-title">
              Better Clarity...!!!
              <br />
              <span>Greater Control..!!</span>
            </h1>
            <p>
              All your security and network tools,
              <br className="banner-break" /> together in one place.
            </p>
            <div className="banner-tags">
              <span>Security</span>
              <span>Network</span>
              <span>One workspace</span>
            </div>
          </div>
          <div className="banner-art" aria-hidden="true">
            <div className="banner-disc" />
            <div className="art-sheet sheet-back" />
            <div className="art-sheet sheet-front">
              <div className="sheet-header">
                <span />
                <span />
                <span />
              </div>
              <div className="sheet-body">
                <span className="sheet-shield">
                  <Icon name="shield" />
                </span>
                <div className="sheet-text">
                  <i />
                  <i />
                </div>
              </div>
              <div className="sheet-tiles">
                <span>
                  <Icon name="assets" />
                </span>
                <span>
                  <Icon name="network" />
                </span>
                <span>
                  <Icon name="vault" />
                </span>
              </div>
            </div>
            <div className="art-caption">
              <span /> A clearer view. A calmer workspace.
            </div>
          </div>
        </section>
        <section className="modules-section" aria-labelledby="modules-heading">
          <div className="section-heading">
            <div className="module-heading-group">
              <h2 id="modules-heading">Your modules</h2>
              <span className="module-count">{modules.length} modules</span>
            </div>
            <div className="monitoring">
              <span className="status-dot" /> Monitoring{" "}
              <span className="preview-label">Preview</span>
            </div>
          </div>
          <div className="module-grid">
            {modules.map((module, index) => {
              const featured = module.featured;
              return (
                <button
                  key={module.icon}
                  className={`module-card ${module.accent} ${featured ? "featured-card" : ""}`}
                  style={{ "--entrance-delay": `${index * 65}ms` }}
                  type="button"
                  aria-haspopup="dialog"
                  onClick={() => openModule(module)}
                >
                  <div className="card-content">
                    <div className="card-top">
                      <span className="module-icon">
                        <Icon name={module.icon} />
                      </span>
                      {featured && (
                        <span className="featured-label">
                          {module.name === "SOC"
                            ? "Your security, in focus"
                            : "Your network, connected"}
                        </span>
                      )}
                    </div>
                    <h3>{module.name}</h3>
                    <p>{module.description}</p>
                    <div className="card-bottom">
                      <span>
                        {featured ? `Explore ${module.name}` : "Explore module"}
                      </span>
                      <Icon name="arrow" />
                    </div>
                  </div>
                  {featured && (
                    <div className="network-art" aria-hidden="true">
                      <svg className="network-lines" viewBox="0 0 260 180">
                        <path d="M130 90 43 40M130 90 217 40M130 90 43 140M130 90 217 140" />
                        <circle cx="130" cy="90" r="66" />
                        <circle cx="130" cy="90" r="88" />
                      </svg>
                      <span className="network-hub">
                        <Icon name={module.icon} />
                      </span>
                      <span className="network-node node-a">
                        <Icon name="assets" />
                      </span>
                      <span className="network-node node-b">
                        <Icon name="endpoint" />
                      </span>
                      <span className="network-node node-c">
                        <Icon name="vault" />
                      </span>
                      <span className="network-node node-d">
                        <Icon name="access" />
                      </span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </section>
        <footer>
          <span className="footer-brand">
            <Icon name="shield" /> AegisOne{" "}
            <span className="footer-divider">/</span>
            <span>Built for clarity. Designed for control.</span>
          </span>
          <span>
            <span className="footer-dot" /> Dashboard preview{" "}
            <span className="footer-divider">/</span> {new Date().getFullYear()}
          </span>
        </footer>
      </main>
      <dialog
        ref={dialog}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        onClick={(event) => {
          if (event.target === dialog.current) {
            const r = dialog.current.getBoundingClientRect();
            if (
              event.clientX < r.left ||
              event.clientX > r.right ||
              event.clientY < r.top ||
              event.clientY > r.bottom
            )
              dialog.current.close();
          }
        }}
      >
        <button
          className="close-dialog"
          aria-label="Close module details"
          onClick={() => dialog.current.close()}
        >
          ×
        </button>
        <div className="dialog-icon">
          <Icon name={selected.icon} />
        </div>
        <span className="dialog-eyebrow">AEGISONE MODULE</span>
        <h2 id="dialog-title">{selected.name}</h2>
        <p id="dialog-description">{selected.description}</p>
        <div className="coming-soon">
          <span /> Coming soon
        </div>
        <p className="dialog-note">
          This workspace is taking shape. Module features will be added as the
          platform evolves.
        </p>
        <button className="back-button" onClick={() => dialog.current.close()}>
          Back to dashboard <Icon name="arrow" />
        </button>
      </dialog>
    </>
  );
}
createRoot(document.getElementById("root")).render(<App />);
