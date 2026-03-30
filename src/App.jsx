import { useState, useEffect } from "react";

/* ── Data ─────────────────────────────────────────────────────────────────── */
const ANNOUNCEMENTS = [
  {
    id: 1, date: "Mar 28, 2026", tag: "Maintenance",
    title: "Water Interruption — Block C & D",
    body: "Scheduled maintenance on the main line will cause a water service interruption on April 2, 6 AM – 2 PM. Please store water in advance.",
    detail: `Dear Residents of Block C & D,\n\nPlease be advised that the HOA Engineering Committee, in coordination with the barangay water utility, has scheduled essential maintenance work on the main distribution line serving Blocks C and D.\n\nDate: Wednesday, April 2, 2026\nTime: 6:00 AM – 2:00 PM\nAffected Areas: Block C (Lots 1–24) and Block D (Lots 1–18)\n\nWhat to Expect:\n• Complete water service interruption during the maintenance window\n• Possible low water pressure for 1–2 hours after service is restored\n• Temporary sedimentation in water; please let the tap run briefly before use\n\nRecommendations:\n• Store at least 2 days' worth of drinking water prior to April 2\n• Avoid scheduling laundry or major water use activities on that day\n\nFor concerns, contact the HOA Admin Office at (02) 8123-4567 or admin@calendolahoa.ph.\n\nThank you for your patience and understanding.\n\n— HOA Engineering Committee`,
  },
  {
    id: 2, date: "Mar 20, 2026", tag: "Official Notice",
    title: "Annual General Meeting — April 15",
    body: "All homeowners are invited to the AGM at the Clubhouse, 7 PM. Agenda includes 2026 budget approval and officer elections.",
    detail: `NOTICE OF ANNUAL GENERAL MEETING\n\nTo all Homeowners and Registered Members of Calendola Heights HOA:\n\nYou are hereby invited and encouraged to attend the Annual General Meeting (AGM) for the fiscal year 2025–2026.\n\nDate: Wednesday, April 15, 2026\nTime: 7:00 PM (doors open at 6:30 PM)\nVenue: HOA Clubhouse, Ground Floor, Calendola Heights\n\nAGENDA:\n1. Call to Order\n2. Verification of Quorum\n3. Approval of Minutes from the Previous AGM\n4. President's Annual Report\n5. Treasurer's Financial Report — FY 2025\n6. Ratification of the 2026 Annual Budget\n7. Election of Officers (President, Treasurer, Auditor)\n8. Open Forum\n9. Adjournment\n\nVoting members must present a valid HOA ID or official receipt of dues payment to participate in elections. Proxy forms are available at the Admin Office and must be submitted by April 12, 2026.\n\nLight refreshments will be served. Your presence and active participation in community governance is greatly appreciated.\n\n— HOA Board of Directors`,
  },
  {
    id: 3, date: "Mar 10, 2026", tag: "Reminder",
    title: "Association Dues — Q2 Deadline",
    body: "Q2 dues are due on or before April 30. Late payments are subject to a 2% monthly surcharge. Payments accepted at the Admin Office.",
    detail: `QUARTERLY DUES REMINDER — SECOND QUARTER 2026\n\nDear Homeowner,\n\nThis is an official reminder that the Second Quarter (Q2) Association Dues are now due for payment.\n\nDeadline: April 30, 2026\nAmount: ₱1,500.00 per household (standard residential)\nLate Charge: 2% per month on outstanding balance (per Article VII, Section 3 of the HOA By-Laws)\n\nAccepted Payment Methods:\n• Over-the-counter at the HOA Admin Office (Mon–Sat, 9 AM–5 PM)\n• GCash or Maya transfer (send proof to admin@calendolahoa.ph)\n• Post-dated check payable to "Calendola Heights HOA"\n\nOfficial receipts will be issued for all payments. Please retain your receipt as proof of compliance.\n\nHomeowners with outstanding balances from Q1 are advised to settle all arrears immediately to avoid restriction of community facility privileges in accordance with HOA policy.\n\nFor payment inquiries, contact the Treasurer at (02) 8123-4567.\n\nThank you for your continued support of our community.\n\n— HOA Treasury Office`,
  },
  {
    id: 4, date: "Mar 5, 2026", tag: "Event",
    title: "Community Clean-Up Drive — March 22",
    body: "Join us for our quarterly Barangay Clean-Up Drive on March 22, 7 AM. Volunteers are needed for common areas, drainage, and park maintenance.",
    detail: `COMMUNITY CLEAN-UP DRIVE\nQ1 2026 — Quarterly Environmental Initiative\n\nThe HOA Environment & Beautification Committee is organizing the Q1 Community Clean-Up Drive and invites all able-bodied residents to volunteer.\n\nDate: Sunday, March 22, 2026\nAssembly Time: 7:00 AM at the Basketball Court\nEstimated Duration: 3–4 hours\n\nAreas Covered:\n• Main entrance and perimeter fence\n• Basketball court and children's playground\n• Drainage canals along Blocks A–F\n• Landscaping of common garden areas\n\nWhat to Bring:\n• Gloves and face mask\n• Comfortable clothes and closed-toe shoes\n• Personal water bottle\n\nThe HOA will provide: garbage bags, cleaning tools, and merienda for all volunteers.\n\nVolunteer sign-up sheet is posted at the Admin Office bulletin board. Households that participate will receive a Certificate of Participation noted in their HOA record.\n\nLet's keep Calendola Heights clean and beautiful — together!\n\n— Environment & Beautification Committee`,
  },
  {
    id: 5, date: "Feb 28, 2026", tag: "Official Notice",
    title: "Revised Visitor & Gate Pass Policy",
    body: "The Board has approved amendments to the visitor entry policy effective March 1. All guests must be pre-registered via the Admin Office or HOA app.",
    detail: `REVISED VISITOR AND GATE PASS POLICY\nEffective Date: March 1, 2026\n\nThe HOA Board of Directors, in its February 25, 2026 regular meeting, approved amendments to the Visitor and Gate Pass Policy to improve community security.\n\nKEY CHANGES:\n\n1. Pre-Registration Requirement\n   All visitors must be pre-registered by the homeowner at least 2 hours before arrival, either in person at the Admin Office or via the HOA resident portal.\n\n2. One-Time Pass vs. Standing Authorization\n   • One-Time Pass: Valid for a single entry per day\n   • Standing Authorization: For recurring visitors (domestic helpers, drivers, caregivers) — renewable monthly\n\n3. Delivery Personnel\n   All delivery vehicles must stop at the main gate. Guards will contact the homeowner for confirmation before allowing entry. Walk-in delivery to the door is at the homeowner's discretion.\n\n4. Contractor / Renovation Workers\n   Must present a valid HOA Construction Permit and are subject to the existing 7 AM–5 PM work hours policy.\n\nViolations of the gate pass policy may result in a written notice and temporary suspension of visitor privileges.\n\nThe full revised policy is available for download in the Documents section.\n\n— HOA Board of Directors`,
  },
  {
    id: 6, date: "Feb 15, 2026", tag: "Reminder",
    title: "No Burning of Waste Within the Subdivision",
    body: "A reminder that open burning of any waste materials within the subdivision is strictly prohibited under RA 9003 and HOA House Rules Section 4.2.",
    detail: `COMMUNITY REMINDER: ZERO OPEN BURNING POLICY\n\nDear Residents,\n\nThe HOA Board wishes to reiterate that open burning of waste — including leaves, cardboard, household garbage, and construction debris — is strictly prohibited within the subdivision premises.\n\nLegal Basis:\n• Republic Act No. 9003 (Ecological Solid Waste Management Act)\n• DENR Administrative Order on Air Quality\n• HOA House Rules & Regulations, Section 4.2 (Prohibited Acts)\n\nConsequences of Violation:\n• First offense: Written warning issued by the HOA\n• Second offense: ₱500 fine\n• Third offense: ₱1,000 fine and referral to the barangay for appropriate action\n\nProper Waste Disposal Reminders:\n• Segregate waste into biodegradable, non-biodegradable, and hazardous\n• Place bins outside on scheduled collection days (Mon / Wed / Fri)\n• Bulky items and construction debris must be coordinated with the HOA for special pickup\n\nLet us all be responsible stewards of our community environment.\n\nFor reporting violations, contact the HOA Security Office.\n\n— HOA Board of Directors`,
  },
];

const BOARD = [
  {
    name: "Maria C. Santos", role: "President", initial: "MS",
    avatarBg: "#1C1C1A", avatarAccent: "#C8A96A",
    email: "president@calendolahoa.ph", phone: "(02) 8123-4567 loc. 101",
    terms: ["2023–2024 · Vice President", "2024–2025 · President", "2025–2026 · President (re-elected)"],
    committees: ["Executive Committee (Chair)", "Finance & Budget Committee", "Security & Safety Committee"],
    bio: "Maria has been a resident of Calendola Heights since 2011 and served the community in various capacities before being elected President in 2024. A retired school principal, she brings strong organizational leadership and a deep commitment to transparent governance. Under her term, the HOA launched its digital bulletin system and revised the House Rules & Regulations.",
  },
  {
    name: "Jose B. Reyes", role: "Vice President", initial: "JR",
    avatarBg: "#2D5F8A", avatarAccent: "#fff",
    email: "vp@calendolahoa.ph", phone: "(02) 8123-4567 loc. 102",
    terms: ["2024–2025 · Secretary", "2025–2026 · Vice President"],
    committees: ["Executive Committee", "Infrastructure & Maintenance Committee (Chair)", "Engineering Sub-Committee"],
    bio: "Jose is a licensed civil engineer with over 20 years of experience in construction project management. A resident since 2015, he championed the subdivision's drainage improvement project in 2025 and oversees all infrastructure-related concerns. He is also the primary liaison between the HOA and the barangay engineering office.",
  },
  {
    name: "Ana P. Cruz", role: "Treasurer", initial: "AC",
    avatarBg: "#3D6B4F", avatarAccent: "#fff",
    email: "treasurer@calendolahoa.ph", phone: "(02) 8123-4567 loc. 103",
    terms: ["2023–2024 · Auditor", "2024–2025 · Treasurer", "2025–2026 · Treasurer (re-elected)"],
    committees: ["Finance & Budget Committee (Chair)", "Procurement Committee", "Executive Committee"],
    bio: "Ana is a certified public accountant who modernized the HOA's financial records management. A resident since 2013, she introduced the online dues payment system and ensures full financial transparency through quarterly reports posted at the Admin Office and the community bulletin.",
  },
  {
    name: "Carlo M. Bautista", role: "Secretary", initial: "CB",
    avatarBg: "#6B4C3D", avatarAccent: "#fff",
    email: "secretary@calendolahoa.ph", phone: "(02) 8123-4567 loc. 104",
    terms: ["2025–2026 · Secretary (first term)"],
    committees: ["Records & Documentation Committee (Chair)", "Communications Committee", "Executive Committee"],
    bio: "Carlo is a practicing lawyer specializing in property and community law. He joined the board in 2025 and applied his legal expertise to reviewing key HOA documents including the by-laws and visitor gate pass policy. He manages all official correspondence and minutes of meetings.",
  },
  {
    name: "Liza V. Mendoza", role: "Auditor", initial: "LM",
    avatarBg: "#5A3E6B", avatarAccent: "#fff",
    email: "auditor@calendolahoa.ph", phone: "(02) 8123-4567 loc. 105",
    terms: ["2024–2025 · Board Member-at-Large", "2025–2026 · Auditor"],
    committees: ["Audit & Compliance Committee (Chair)", "Finance & Budget Committee", "Election Committee"],
    bio: "Liza is an internal auditor at a multinational firm who brings institutional audit experience to the HOA. She conducts quarterly audits of association funds and ensures all financial activities are within the approved budget. She also leads the annual general meeting and officer elections.",
  },
  {
    name: "Ramon G. dela Torre", role: "Public Relations Officer", initial: "RT",
    avatarBg: "#7A4A1E", avatarAccent: "#fff",
    email: "pro@calendolahoa.ph", phone: "(02) 8123-4567 loc. 106",
    terms: ["2025–2026 · PRO (first term)"],
    committees: ["Communications Committee (Chair)", "Environment & Beautification Committee", "Events & Community Relations Committee"],
    bio: "Ramon is a marketing professional and long-time resident since 2010. As PRO, he manages HOA announcements, community engagement programs, and spearheaded the quarterly clean-up drives. He is known for his approachable personality and quick response to resident concerns.",
  },
];

const DOCUMENTS = [
  { label: "HOA By-Laws & Articles of Incorporation", size: "PDF · 348 KB", icon: "📄" },
  { label: "House Rules & Regulations",               size: "PDF · 210 KB", icon: "📋" },
  { label: "Renovation / Construction Permit Form",   size: "DOCX · 58 KB", icon: "🏗️" },
  { label: "Vehicle Sticker Application Form",        size: "PDF · 42 KB",  icon: "🚗" },
  { label: "Move-in / Move-out Clearance",            size: "PDF · 65 KB",  icon: "📦" },
  { label: "2026 Annual Budget Summary",              size: "PDF · 127 KB", icon: "📊" },
];

const TAG = {
  "Maintenance":     "bg:#FEF3C7;color:#92400E",
  "Official Notice": "bg:#DBEAFE;color:#1E40AF",
  "Reminder":        "bg:#FCE7F3;color:#9D174D",
};

const NAV = ["Announcements", "Board", "Documents", "Contact"];

/* ── Global styles injected once ─────────────────────────────────────────── */
const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  html { scroll-behavior: smooth; }

  body { font-family: 'DM Sans', sans-serif; background: #FAFAF8; color: #1C1C1A; -webkit-font-smoothing: antialiased; }

  .hoa-nav-links { display: flex; gap: 4px; }
  .hoa-hamburger { display: none; }
  .hoa-mobile-menu { display: none; }
  .hoa-mobile-menu.open { display: flex; flex-direction: column; gap: 0; }

  .hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center; }
  .hero-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }

  .announce-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
  .board-grid    { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
  .docs-grid     { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; }
  .contact-grid  { display: grid; grid-template-columns: 1fr 1.4fr; gap: 40px; align-items: start; }
  .form-row      { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }

  @media (max-width: 900px) {
    .hero-grid    { grid-template-columns: 1fr; gap: 40px; }
    .hero-stats   { grid-template-columns: repeat(4, 1fr); gap: 8px; }
    .announce-grid { grid-template-columns: 1fr; }
    .board-grid   { grid-template-columns: repeat(2, 1fr); }
    .contact-grid { grid-template-columns: 1fr; }
  }

  @media (max-width: 600px) {
    .hoa-nav-links { display: none; }
    .hoa-hamburger { display: flex; }
    .hero-stats    { grid-template-columns: repeat(2, 1fr); }
    .board-grid    { grid-template-columns: repeat(2, 1fr); }
    .docs-grid     { grid-template-columns: 1fr; }
    .form-row      { grid-template-columns: 1fr; }
  }

  .tag { display: inline-block; font-size: 11px; font-weight: 600; padding: 3px 10px; border-radius: 999px; white-space: nowrap; }
  .tag-Maintenance     { background: #FEF3C7; color: #92400E; }
  .tag-OfficialNotice  { background: #DBEAFE; color: #1E40AF; }
  .tag-Reminder        { background: #FCE7F3; color: #9D174D; }
  .tag-Event           { background: #D1FAE5; color: #065F46; }

  .announce-card {
    border: 1px solid #E8E5DF; border-radius: 16px; padding: 24px;
    background: #fff; transition: box-shadow 0.2s, transform 0.2s; cursor: pointer;
  }
  .announce-card:hover { box-shadow: 0 8px 24px rgba(0,0,0,0.09); transform: translateY(-2px); }

  /* Modal */
  .modal-backdrop {
    position: fixed; inset: 0; background: rgba(0,0,0,0.45);
    z-index: 200; display: flex; align-items: center; justify-content: center;
    padding: 20px; backdrop-filter: blur(3px);
  }
  .modal-box {
    background: #fff; border-radius: 20px; max-width: 620px; width: 100%;
    max-height: 88vh; overflow-y: auto; box-shadow: 0 24px 60px rgba(0,0,0,0.18);
    animation: modalIn 0.2s ease;
  }
  @keyframes modalIn {
    from { opacity: 0; transform: translateY(16px) scale(0.98); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }

  .board-card {
    border: 1px solid #E8E5DF; border-radius: 16px; padding: 24px;
    background: #fff; text-align: center; transition: box-shadow 0.2s, transform 0.2s;
    cursor: pointer;
  }
  .board-card:hover { box-shadow: 0 8px 24px rgba(0,0,0,0.09); transform: translateY(-2px); }

  .profile-chip {
    display: flex; align-items: center; gap: 8px;
    background: #F4F2EC; border-radius: 8px; padding: 8px 12px;
    font-size: 13px; color: #3A3A36; line-height: 1.4;
  }

  .doc-btn {
    display: flex; align-items: center; gap: 14px;
    border: 1px solid #E8E5DF; border-radius: 12px; padding: 16px 18px;
    background: #fff; cursor: pointer; text-align: left;
    transition: background 0.15s, border-color 0.15s, transform 0.15s; width: 100%;
  }
  .doc-btn:hover { background: #F4F2EC; border-color: #C8C4BB; transform: translateX(2px); }

  .nav-link {
    background: none; border: none; cursor: pointer;
    font-size: 13px; font-weight: 500; padding: 7px 14px;
    border-radius: 999px; transition: background 0.15s, color 0.15s;
    font-family: 'DM Sans', sans-serif; letter-spacing: 0.01em;
  }
  .nav-link:hover { background: #F0EDE7; color: #1C1C1A; }
  .nav-link.active { background: #1C1C1A; color: #fff; }

  .primary-btn {
    background: #1C1C1A; color: #fff; border: none; border-radius: 999px;
    padding: 13px 28px; font-size: 14px; font-weight: 600; cursor: pointer;
    font-family: 'DM Sans', sans-serif; transition: background 0.15s;
  }
  .primary-btn:hover { background: #3A3A36; }

  .outline-btn {
    background: transparent; color: #4A4A44; border: 1px solid #C8C4BB;
    border-radius: 999px; padding: 13px 28px; font-size: 14px; font-weight: 500;
    cursor: pointer; font-family: 'DM Sans', sans-serif; transition: background 0.15s;
  }
  .outline-btn:hover { background: #F0EDE7; }

  .input-field {
    width: 100%; border: 1px solid #D8D4CC; border-radius: 10px;
    padding: 11px 14px; font-size: 14px; color: #1C1C1A; background: #fff;
    font-family: 'DM Sans', sans-serif; outline: none; transition: border-color 0.15s;
  }
  .input-field:focus { border-color: #8A8478; }
  .input-field::placeholder { color: #B0ACA4; }

  .submit-btn {
    width: 100%; background: #1C1C1A; color: #fff; border: none;
    border-radius: 10px; padding: 14px; font-size: 14px; font-weight: 600;
    cursor: pointer; font-family: 'DM Sans', sans-serif; transition: background 0.15s;
  }
  .submit-btn:hover { background: #3A3A36; }

  .section-label {
    font-size: 11px; font-weight: 700; letter-spacing: 0.18em;
    text-transform: uppercase; color: #8A8478; display: flex; align-items: center; gap: 10px;
  }
  .section-label::before { content: ''; display: block; width: 28px; height: 2px; background: #8A8478; border-radius: 1px; }

  .serif { font-family: 'Lora', Georgia, serif; }
`;

function GlobalStyle() {
  useEffect(() => {
    const el = document.createElement("style");
    el.textContent = CSS;
    document.head.appendChild(el);
    return () => document.head.removeChild(el);
  }, []);
  return null;
}

/* ── NavBar ───────────────────────────────────────────────────────────────── */
function NavBar({ active, setActive }) {
  const [open, setOpen] = useState(false);

  const go = (link) => {
    setActive(link);
    setOpen(false);
    document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(250,250,248,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid #E8E5DF" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 34, height: 34, borderRadius: "50%", background: "#1C1C1A", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#fff", fontSize: 8, fontWeight: 800, letterSpacing: "0.06em", textAlign: "center", lineHeight: 1.3 }}>HOA</span>
          </div>
          <span className="serif" style={{ fontSize: 14, fontWeight: 700, color: "#1C1C1A", letterSpacing: "-0.01em" }}>
            Calendola Heights
          </span>
        </div>

        {/* Desktop links */}
        <nav className="hoa-nav-links">
          {NAV.map(link => (
            <button key={link} className={`nav-link ${active === link ? "active" : ""}`} onClick={() => go(link)}>
              {link}
            </button>
          ))}
        </nav>

        {/* Hamburger */}
        <button className="hoa-hamburger" onClick={() => setOpen(!open)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 8, color: "#1C1C1A" }}>
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`hoa-mobile-menu ${open ? "open" : ""}`}
        style={{ background: "#FAFAF8", borderTop: "1px solid #E8E5DF", padding: open ? "12px 20px 16px" : 0 }}>
        {NAV.map(link => (
          <button key={link} onClick={() => go(link)}
            style={{ background: "none", border: "none", textAlign: "left", padding: "12px 0", fontSize: 15, fontWeight: 500, color: "#4A4A44", cursor: "pointer", borderBottom: "1px solid #F0EDE7", fontFamily: "'DM Sans', sans-serif", width: "100%" }}>
            {link}
          </button>
        ))}
      </div>
    </header>
  );
}

/* ── Hero ─────────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section style={{ background: "#F4F2EC", paddingTop: 60, minHeight: "92vh", display: "flex", alignItems: "center" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 20px" }}>
        <div className="hero-grid">

          {/* Left */}
          <div>
            <p className="section-label" style={{ marginBottom: 20 }}>Barangay Calendola · Est. 2008</p>
            <h1 className="serif" style={{ fontSize: "clamp(2rem, 5vw, 3.4rem)", fontWeight: 700, lineHeight: 1.18, color: "#1C1C1A", marginBottom: 20, letterSpacing: "-0.02em" }}>
              A community<br />built on trust<br />
              <em style={{ color: "#8A8478", fontWeight: 400 }}>& good governance.</em>
            </h1>
            <p style={{ fontSize: 15, color: "#6A6860", lineHeight: 1.75, maxWidth: 460, marginBottom: 32 }}>
              Calendola Heights HOA serves every homeowner — maintaining common areas, upholding fair rules, and keeping our neighbors informed and connected.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button className="primary-btn" onClick={() => document.getElementById("announcements")?.scrollIntoView({ behavior: "smooth" })}>
                See Announcements
              </button>
              <button className="outline-btn" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                Contact Us
              </button>
            </div>
          </div>

          {/* Right — stats */}
          <div className="hero-stats">
            {[
              { label: "Households",    value: "248" },
              { label: "Years Active",  value: "17+" },
              { label: "Board Members", value: "6"   },
              { label: "Committees",    value: "4"   },
            ].map((s, i) => (
              <div key={s.label} style={{ background: "#fff", border: "1px solid #E8E5DF", borderRadius: 16, padding: "28px 20px" }}>
                <p className="serif" style={{ fontSize: 40, fontWeight: 700, color: "#1C1C1A", lineHeight: 1 }}>{s.value}</p>
                <p style={{ fontSize: 11, color: "#8A8478", textTransform: "uppercase", letterSpacing: "0.14em", marginTop: 8 }}>{s.label}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

/* ── Shared section wrapper ───────────────────────────────────────────────── */
function Sec({ id, bg, children }) {
  return (
    <section id={id} style={{ background: bg || "#fff", padding: "72px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 20px" }}>{children}</div>
    </section>
  );
}

function SecHead({ label, title, sub }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <p className="section-label" style={{ marginBottom: 14 }}>{label}</p>
      <h2 className="serif" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, color: "#1C1C1A", marginBottom: 10, letterSpacing: "-0.02em" }}>{title}</h2>
      {sub && <p style={{ fontSize: 14, color: "#6A6860", lineHeight: 1.65, maxWidth: 480 }}>{sub}</p>}
    </div>
  );
}

/* ── Announcement Detail Modal ───────────────────────────────────────────── */
function AnnouncementModal({ item, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  const tagKey = item.tag.replace(/\s/g, "");
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div style={{ padding: "24px 28px 20px", borderBottom: "1px solid #E8E5DF" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 14 }}>
            <span className={`tag tag-${tagKey}`}>{item.tag}</span>
            <button onClick={onClose} style={{ background: "#F4F2EC", border: "none", borderRadius: "50%", width: 32, height: 32, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="14" height="14" fill="none" stroke="#6A6860" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <h2 className="serif" style={{ fontSize: "clamp(1.1rem, 3vw, 1.4rem)", fontWeight: 700, color: "#1C1C1A", lineHeight: 1.3, marginBottom: 6 }}>{item.title}</h2>
          <p style={{ fontSize: 12, color: "#8A8478" }}>Posted: {item.date}</p>
        </div>

        {/* Body */}
        <div style={{ padding: "24px 28px 32px" }}>
          <div style={{ fontSize: 14, color: "#3A3A36", lineHeight: 1.85, whiteSpace: "pre-line", fontFamily: "'DM Sans', sans-serif" }}>
            {item.detail}
          </div>
          <div style={{ marginTop: 28, paddingTop: 20, borderTop: "1px solid #E8E5DF", display: "flex", justifyContent: "flex-end" }}>
            <button onClick={onClose} className="outline-btn" style={{ padding: "10px 24px", fontSize: 13 }}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Announcements ───────────────────────────────────────────────────────── */
function Announcements() {
  const [selected, setSelected] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? ANNOUNCEMENTS : ANNOUNCEMENTS.slice(0, 3);

  return (
    <Sec id="announcements">
      <SecHead label="Latest Updates" title="Announcements & News" sub="Stay informed on everything happening in the community." />

      <div className="announce-grid">
        {visible.map(a => {
          const tagKey = a.tag.replace(/\s/g, "");
          return (
            <article key={a.id} className="announce-card" onClick={() => setSelected(a)} role="button" tabIndex={0}
              onKeyDown={e => e.key === "Enter" && setSelected(a)}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16, flexWrap: "wrap", gap: 8 }}>
                <span className={`tag tag-${tagKey}`}>{a.tag}</span>
                <span style={{ fontSize: 12, color: "#8A8478" }}>{a.date}</span>
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 600, color: "#1C1C1A", marginBottom: 10, lineHeight: 1.4 }}>{a.title}</h3>
              <p style={{ fontSize: 13, color: "#6A6860", lineHeight: 1.7 }}>{a.body}</p>
              <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 4, color: "#8A8478", fontSize: 12, fontWeight: 600 }}>
                Read full notice
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </article>
          );
        })}
      </div>

      <div style={{ marginTop: 28, textAlign: "center" }}>
        <button onClick={() => setShowAll(v => !v)}
          style={{ background: "none", border: "1px solid #C8C4BB", borderRadius: 999, color: "#4A4A44", fontSize: 13, fontWeight: 500, padding: "9px 24px", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", transition: "background 0.15s" }}
          onMouseEnter={e => e.currentTarget.style.background = "#F0EDE7"}
          onMouseLeave={e => e.currentTarget.style.background = "none"}
        >
          {showAll ? "← Show fewer announcements" : `View all ${ANNOUNCEMENTS.length} announcements →`}
        </button>
      </div>

      {selected && <AnnouncementModal item={selected} onClose={() => setSelected(null)} />}
    </Sec>
  );
}

/* ── Board Member Profile Modal ──────────────────────────────────────────── */
function BoardModal({ member: m, onClose }) {
  useEffect(() => {
    const h = e => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose]);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()} style={{ maxWidth: 640 }}>

        {/* Header strip */}
        <div style={{ background: m.avatarBg, padding: "28px 28px 24px", borderRadius: "20px 20px 0 0", position: "relative" }}>
          {/* Close btn */}
          <button onClick={onClose} style={{ position: "absolute", top: 16, right: 16, background: "rgba(255,255,255,0.15)", border: "none", borderRadius: "50%", width: 32, height: 32, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="14" height="14" fill="none" stroke="#fff" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Avatar + name */}
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div style={{ width: 72, height: 72, borderRadius: "50%", background: "rgba(255,255,255,0.12)", border: `3px solid ${m.avatarAccent}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontSize: 22, fontWeight: 800, color: m.avatarAccent, fontFamily: "'Lora', serif" }}>{m.initial}</span>
            </div>
            <div>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 4 }}>Board of Directors · 2025–2026</p>
              <h2 className="serif" style={{ color: "#fff", fontSize: "clamp(1.1rem, 3vw, 1.35rem)", fontWeight: 700, margin: "0 0 4px", lineHeight: 1.2 }}>{m.name}</h2>
              <p style={{ color: m.avatarAccent, fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>{m.role}</p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: "24px 28px 28px", display: "flex", flexDirection: "column", gap: 22 }}>

          {/* Bio */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8A8478", marginBottom: 10 }}>About</p>
            <p style={{ fontSize: 14, color: "#3A3A36", lineHeight: 1.8 }}>{m.bio}</p>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8A8478", marginBottom: 10 }}>Contact Information</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div className="profile-chip">
                <svg width="14" height="14" fill="none" stroke="#8A8478" strokeWidth={2} viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{m.email}</span>
              </div>
              <div className="profile-chip">
                <svg width="14" height="14" fill="none" stroke="#8A8478" strokeWidth={2} viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{m.phone}</span>
              </div>
            </div>
          </div>

          {/* Committees */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8A8478", marginBottom: 10 }}>Committee Assignments</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {m.committees.map((c, i) => (
                <div key={i} className="profile-chip">
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: m.avatarBg, flexShrink: 0 }} />
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Term history */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8A8478", marginBottom: 10 }}>Term History</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 0, borderLeft: "2px solid #E8E5DF", paddingLeft: 16 }}>
              {m.terms.map((t, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, paddingBottom: i < m.terms.length - 1 ? 12 : 0, position: "relative" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: i === m.terms.length - 1 ? m.avatarBg : "#C8C4BB", position: "absolute", left: -21, flexShrink: 0 }} />
                  <span style={{ fontSize: 13, color: i === m.terms.length - 1 ? "#1C1C1A" : "#6A6860", fontWeight: i === m.terms.length - 1 ? 600 : 400 }}>{t}</span>
                  {i === m.terms.length - 1 && <span style={{ fontSize: 10, background: "#F4F2EC", color: "#8A8478", padding: "2px 8px", borderRadius: 999, fontWeight: 600 }}>Current</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div style={{ paddingTop: 4, display: "flex", justifyContent: "flex-end" }}>
            <button onClick={onClose} className="outline-btn" style={{ padding: "10px 24px", fontSize: 13 }}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Board ───────────────────────────────────────────────────────────────── */
function Board() {
  const [selected, setSelected] = useState(null);

  return (
    <Sec id="board" bg="#F4F2EC">
      <SecHead label="Leadership" title="Board of Directors" sub="Your elected officers serving the 2025–2026 term. Click any member to view their full profile." />
      <div className="board-grid">
        {BOARD.map((m, i) => (
          <div key={m.name} className="board-card" onClick={() => setSelected(m)}
            role="button" tabIndex={0} onKeyDown={e => e.key === "Enter" && setSelected(m)}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: m.avatarBg, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px", border: `2px solid ${m.avatarAccent === "#fff" ? "transparent" : m.avatarAccent}`, boxShadow: "0 4px 12px rgba(0,0,0,0.12)" }}>
              <span style={{ fontSize: 15, fontWeight: 700, color: m.avatarAccent, fontFamily: "'Lora', serif" }}>{m.initial}</span>
            </div>
            <p style={{ fontSize: 14, fontWeight: 600, color: "#1C1C1A", marginBottom: 4 }}>{m.name}</p>
            <p style={{ fontSize: 11, color: "#8A8478", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 12 }}>{m.role}</p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 4, color: "#8A8478", fontSize: 12, fontWeight: 600 }}>
              View profile
              <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        ))}
      </div>
      {selected && <BoardModal member={selected} onClose={() => setSelected(null)} />}
    </Sec>
  );
}

/* ── Documents ───────────────────────────────────────────────────────────── */
function Documents() {
  return (
    <Sec id="documents">
      <SecHead label="Resources" title="Documents & Forms" sub="Download official HOA documents and submit required forms." />
      <div className="docs-grid">
        {DOCUMENTS.map(doc => (
          <button key={doc.label} className="doc-btn">
            <span style={{ fontSize: 22, lineHeight: 1, flexShrink: 0 }}>{doc.icon}</span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontSize: 13, fontWeight: 600, color: "#1C1C1A", marginBottom: 3, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{doc.label}</p>
              <p style={{ fontSize: 12, color: "#8A8478" }}>{doc.size}</p>
            </div>
            <svg width="15" height="15" fill="none" stroke="#C8C4BB" strokeWidth={2} viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
            </svg>
          </button>
        ))}
      </div>
    </Sec>
  );
}

/* ── Contact ─────────────────────────────────────────────────────────────── */
function Contact() {
  const [form, setForm] = useState({ name: "", block: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }));

  return (
    <Sec id="contact" bg="#F4F2EC">
      <SecHead label="Get in Touch" title="Contact & Support" sub="Reach the HOA office for concerns, requests, or inquiries." />
      <div className="contact-grid">

        {/* Info */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {[
            { icon: "📍", label: "Office Address", value: "HOA Clubhouse, Calendola Heights\nBarangay Calendola" },
            { icon: "🕐", label: "Office Hours",   value: "Mon – Fri: 9:00 AM – 5:00 PM\nSat: 9:00 AM – 12:00 NN" },
            { icon: "📞", label: "Telephone",      value: "(02) 8123-4567" },
            { icon: "✉️", label: "Email",          value: "admin@calendolahoa.ph" },
          ].map(info => (
            <div key={info.label} style={{ display: "flex", gap: 14 }}>
              <span style={{ fontSize: 20, lineHeight: 1, marginTop: 2, flexShrink: 0 }}>{info.icon}</span>
              <div>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8A8478", marginBottom: 4 }}>{info.label}</p>
                <p style={{ fontSize: 14, color: "#3A3A36", lineHeight: 1.65, whiteSpace: "pre-line" }}>{info.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        {sent ? (
          <div style={{ background: "#fff", border: "1px solid #E8E5DF", borderRadius: 20, padding: 40, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 12 }}>
            <div style={{ fontSize: 40 }}>✅</div>
            <p className="serif" style={{ fontSize: 20, fontWeight: 700, color: "#1C1C1A" }}>Message Sent!</p>
            <p style={{ fontSize: 14, color: "#6A6860", lineHeight: 1.65 }}>We'll get back to you within 1–2 business days.</p>
            <button onClick={() => { setSent(false); setForm({ name: "", block: "", email: "", subject: "", message: "" }); }}
              style={{ background: "none", border: "none", color: "#8A8478", fontSize: 13, cursor: "pointer", textDecoration: "underline", textUnderlineOffset: 3, fontFamily: "'DM Sans', sans-serif", marginTop: 8 }}>
              Send another message
            </button>
          </div>
        ) : (
          <div style={{ background: "#fff", border: "1px solid #E8E5DF", borderRadius: 20, padding: "28px 24px", display: "flex", flexDirection: "column", gap: 16 }}>
            <div className="form-row">
              <div>
                <label style={{ display: "block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6A6860", marginBottom: 6 }}>Full Name *</label>
                <input className="input-field" placeholder="Juan dela Cruz" value={form.name} onChange={set("name")} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6A6860", marginBottom: 6 }}>Block / Lot No.</label>
                <input className="input-field" placeholder="Block 3 Lot 12" value={form.block} onChange={set("block")} />
              </div>
            </div>
            <div>
              <label style={{ display: "block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6A6860", marginBottom: 6 }}>Email Address *</label>
              <input className="input-field" type="email" placeholder="juan@email.com" value={form.email} onChange={set("email")} />
            </div>
            <div>
              <label style={{ display: "block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6A6860", marginBottom: 6 }}>Subject</label>
              <input className="input-field" placeholder="e.g. Gate pass, noise concern, dues inquiry" value={form.subject} onChange={set("subject")} />
            </div>
            <div>
              <label style={{ display: "block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#6A6860", marginBottom: 6 }}>Message *</label>
              <textarea className="input-field" rows={4} style={{ resize: "vertical" }} placeholder="Describe your concern or request..." value={form.message} onChange={set("message")} />
            </div>
            <button className="submit-btn" onClick={() => { if (form.name && form.email && form.message) setSent(true); }}>
              Send Message
            </button>
            <p style={{ fontSize: 11, color: "#B0ACA4", textAlign: "center" }}>* Required fields. All messages are confidential.</p>
          </div>
        )}
      </div>
    </Sec>
  );
}

/* ── Footer ──────────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer style={{ background: "#1C1C1A", padding: "28px 20px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 30, height: 30, borderRadius: "50%", background: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#fff", fontSize: 7, fontWeight: 800 }}>HOA</span>
          </div>
          <span style={{ color: "#FAFAF8", fontSize: 13, fontFamily: "'Lora', serif", fontWeight: 600 }}>Calendola Heights HOA</span>
        </div>
        <p style={{ color: "#6A6860", fontSize: 12 }}>© 2026 Calendola Heights Homeowners Association. All rights reserved.</p>
      </div>
    </footer>
  );
}

/* ── App ─────────────────────────────────────────────────────────────────── */
export default function App() {
  const [active, setActive] = useState("");
  return (
    <>
      <GlobalStyle />
      <NavBar active={active} setActive={setActive} />
      <div style={{ paddingTop: 60 }}>
        <Hero />
        <Announcements />
        <Board />
        <Documents />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
