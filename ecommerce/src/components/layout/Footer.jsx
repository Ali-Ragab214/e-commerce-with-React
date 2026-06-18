import { Link } from "react-router-dom";

const hoverStyle = {
  color: "#64748b", fontSize: "13px", textDecoration: "none",
  display: "block", marginBottom: "10px",
  transition: "color 0.2s",
};

export default function Footer() {
  return (
    <footer style={{
      background: "#0a0f1e",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      padding: "3rem 2rem 1.5rem",
    }}>
      <div style={{
        maxWidth: "1100px", margin: "0 auto",
        display: "grid", gridTemplateColumns: "2fr 1fr 1fr",
        gap: "2rem", marginBottom: "2.5rem",
      }}>

        {/* Brand */}
        <div>
          <div style={{ fontSize: "20px", fontWeight: 600, color: "#fff", marginBottom: "10px" }}>
            Shop<span style={{ color: "#818cf8" }}>Hub</span>
          </div>
          <p style={{ color: "#475569", fontSize: "13px", lineHeight: 1.8, maxWidth: "240px" }}>
            Quality products, great deals, seamless shopping.
          </p>
          <div style={{ display: "flex", gap: "8px", marginTop: "16px" }}>
            {["𝕏", "ig", "in"].map((s) => (
              <a key={s} href="#" style={{
                width: "32px", height: "32px", borderRadius: "8px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#64748b", fontSize: "12px", textDecoration: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(99,102,241,0.2)"; e.currentTarget.style.color = "#818cf8"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "#64748b"; }}
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <div style={{ color: "#fff", fontSize: "13px", fontWeight: 500, marginBottom: "14px" }}>Shop</div>
          {[["Home", "/"], ["Products", "/products"], ["Cart", "/cart"]].map(([label, to]) => (
            <Link key={label} to={to} style={hoverStyle}
              onMouseEnter={e => e.currentTarget.style.color = "#818cf8"}
              onMouseLeave={e => e.currentTarget.style.color = "#64748b"}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div>
          <div style={{ color: "#fff", fontSize: "13px", fontWeight: 500, marginBottom: "14px" }}>Contact</div>
          {["support@shophub.com", "+20 100 000 0000", "Cairo, Egypt"].map((t) => (
            <p key={t} style={{ color: "#475569", fontSize: "13px", marginBottom: "10px" }}>{t}</p>
          ))}
        </div>
      </div>

      <div style={{
        maxWidth: "1100px", margin: "0 auto",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        paddingTop: "1.25rem",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <p style={{ color: "#334155", fontSize: "12px" }}>
          © {new Date().getFullYear()} ShopHub. All rights reserved.
        </p>
        <div style={{ display: "flex", gap: "1rem" }}>
          {["Privacy", "Terms", "Support"].map((l) => (
            <a key={l} href="#" style={{ color: "#334155", fontSize: "12px", textDecoration: "none" }}
              onMouseEnter={e => e.currentTarget.style.color = "#818cf8"}
              onMouseLeave={e => e.currentTarget.style.color = "#334155"}
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}