// =====================================================================
// REFINERY QUEST - Chapter Diagrams (SVG illustrations)
// Theme-aware using CSS variables, responsive via viewBox
// =====================================================================

const chapterDiagrams = {

// ==================== CH I: Introduction ====================
1: `<svg viewBox="0 0 500 220" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <!-- Book icon -->
  <rect x="30" y="40" width="120" height="150" rx="6" stroke="var(--accent)" stroke-width="2" fill="var(--code-bg)"/>
  <line x1="90" y1="40" x2="90" y2="190" stroke="var(--accent)" stroke-width="2"/>
  <text x="60" y="110" font-size="11" font-weight="700" text-anchor="middle">Ch II</text>
  <text x="60" y="128" font-size="9" fill="var(--dim)">Foundation</text>
  <text x="120" y="110" font-size="11" font-weight="700" text-anchor="middle">Ch XIX</text>
  <text x="120" y="128" font-size="9" fill="var(--dim)">Capstone</text>
  <!-- Arrow path -->
  <path d="M170 115 L200 115" stroke="var(--accent)" stroke-width="2" marker-end="url(#arrowI)"/>
  <defs><marker id="arrowI" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="var(--accent)"/></marker></defs>
  <!-- Learning path boxes -->
  <rect x="210" y="30" width="100" height="44" rx="8" fill="var(--accent)" opacity="0.15" stroke="var(--accent)" stroke-width="1.5"/>
  <text x="260" y="50" font-size="11" font-weight="700" text-anchor="middle" fill="var(--accent)">Crude Oil</text>
  <text x="260" y="65" font-size="9" text-anchor="middle" fill="var(--dim)">Ch II-IV</text>
  <path d="M260 74 L260 88" stroke="var(--accent)" stroke-width="1.5" marker-end="url(#arrowI)"/>
  <rect x="210" y="90" width="100" height="44" rx="8" fill="var(--cyan)" opacity="0.15" stroke="var(--cyan)" stroke-width="1.5"/>
  <text x="260" y="110" font-size="11" font-weight="700" text-anchor="middle" fill="var(--cyan)">Conversion</text>
  <text x="260" y="125" font-size="9" text-anchor="middle" fill="var(--dim)">Ch V-XI</text>
  <path d="M260 134 L260 148" stroke="var(--cyan)" stroke-width="1.5" marker-end="url(#arrowI)"/>
  <rect x="210" y="150" width="100" height="44" rx="8" fill="var(--green)" opacity="0.15" stroke="var(--green)" stroke-width="1.5"/>
  <text x="260" y="170" font-size="11" font-weight="700" text-anchor="middle" fill="var(--green)">Products</text>
  <text x="260" y="185" font-size="9" text-anchor="middle" fill="var(--dim)">Ch XII-XXI</text>
  <!-- Side labels -->
  <rect x="340" y="60" width="140" height="36" rx="8" fill="var(--gold)" opacity="0.1" stroke="var(--gold)" stroke-width="1"/>
  <text x="410" y="78" font-size="10" font-weight="600" text-anchor="middle" fill="var(--gold)">Essential Chapters</text>
  <text x="410" y="92" font-size="9" text-anchor="middle" fill="var(--dim)">II, III, VI, VIII, IX, XIX</text>
  <rect x="340" y="120" width="140" height="36" rx="8" fill="var(--dim)" opacity="0.1" stroke="var(--dim)" stroke-width="1"/>
  <text x="410" y="138" font-size="10" font-weight="600" text-anchor="middle">"Lagniappe"</text>
  <text x="410" y="152" font-size="9" text-anchor="middle" fill="var(--dim)">XIII-XVIII, XX, XXI</text>
</svg>`,

// ==================== CH II: Crude Oil Characteristics ====================
2: `<svg viewBox="0 0 500 280" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="20" font-size="12" font-weight="700" text-anchor="middle">Distillation Curve &amp; Crude Oil Fractions</text>
  <!-- Axes -->
  <line x1="70" y1="240" x2="300" y2="240" stroke="var(--dim)" stroke-width="1.5"/>
  <line x1="70" y1="240" x2="70" y2="40" stroke="var(--dim)" stroke-width="1.5"/>
  <text x="185" y="265" font-size="10" text-anchor="middle" fill="var(--dim)">% Volume Evaporated</text>
  <text x="25" y="140" font-size="10" text-anchor="middle" fill="var(--dim)" transform="rotate(-90 25 140)">Temperature (°F)</text>
  <!-- Temp labels -->
  <text x="65" y="230" font-size="8" text-anchor="end" fill="var(--dim)">90</text>
  <text x="65" y="205" font-size="8" text-anchor="end" fill="var(--dim)">220</text>
  <text x="65" y="180" font-size="8" text-anchor="end" fill="var(--dim)">315</text>
  <text x="65" y="148" font-size="8" text-anchor="end" fill="var(--dim)">450</text>
  <text x="65" y="95" font-size="8" text-anchor="end" fill="var(--dim)">800</text>
  <!-- Horizontal guides -->
  <line x1="70" y1="228" x2="300" y2="228" stroke="var(--border)" stroke-width="0.5" stroke-dasharray="3,3"/>
  <line x1="70" y1="203" x2="300" y2="203" stroke="var(--border)" stroke-width="0.5" stroke-dasharray="3,3"/>
  <line x1="70" y1="178" x2="300" y2="178" stroke="var(--border)" stroke-width="0.5" stroke-dasharray="3,3"/>
  <line x1="70" y1="146" x2="300" y2="146" stroke="var(--border)" stroke-width="0.5" stroke-dasharray="3,3"/>
  <line x1="70" y1="93" x2="300" y2="93" stroke="var(--border)" stroke-width="0.5" stroke-dasharray="3,3"/>
  <!-- S-curve (light crude) -->
  <path d="M72 235 C100 230, 120 210, 140 190 C160 170, 180 150, 200 125 C220 100, 250 80, 290 60" stroke="var(--cyan)" stroke-width="2.5" stroke-linecap="round"/>
  <text x="292" y="56" font-size="9" font-weight="600" fill="var(--cyan)">Light</text>
  <!-- S-curve (heavy crude) -->
  <path d="M72 238 C110 236, 140 228, 170 210 C200 192, 220 170, 240 145 C260 120, 275 100, 290 90" stroke="var(--gold)" stroke-width="2.5" stroke-linecap="round"/>
  <text x="292" y="94" font-size="9" font-weight="600" fill="var(--gold)">Heavy</text>
  <!-- Fraction labels (right side) -->
  <rect x="330" y="220" width="150" height="22" rx="4" fill="var(--green)" opacity="0.15"/>
  <text x="405" y="235" font-size="10" font-weight="600" text-anchor="middle" fill="var(--green)">Butanes &amp; Lighter &lt;90°F</text>
  <rect x="330" y="195" width="150" height="22" rx="4" fill="#a855f7" opacity="0.15"/>
  <text x="405" y="210" font-size="10" font-weight="600" text-anchor="middle" fill="#a855f7">Gasoline 90-220°F</text>
  <rect x="330" y="170" width="150" height="22" rx="4" fill="var(--cyan)" opacity="0.15"/>
  <text x="405" y="185" font-size="10" font-weight="600" text-anchor="middle" fill="var(--cyan)">Naphtha 220-315°F</text>
  <rect x="330" y="140" width="150" height="22" rx="4" fill="var(--gold)" opacity="0.15"/>
  <text x="405" y="155" font-size="10" font-weight="600" text-anchor="middle" fill="var(--gold)">Kerosene 315-450°F</text>
  <rect x="330" y="100" width="150" height="32" rx="4" fill="var(--pink)" opacity="0.15"/>
  <text x="405" y="120" font-size="10" font-weight="600" text-anchor="middle" fill="var(--pink)">Gas Oil 450-800°F</text>
  <rect x="330" y="65" width="150" height="32" rx="4" fill="var(--red)" opacity="0.12"/>
  <text x="405" y="85" font-size="10" font-weight="600" text-anchor="middle" fill="var(--red)">Residue 800°F+</text>
  <!-- API scale -->
  <text x="250" y="278" font-size="9" fill="var(--dim)">API: Heavy ~18° | Medium ~30° | Light ~36° | Condensate ~50°+</text>
</svg>`,

// ==================== CH III: Distilling ====================
3: `<svg viewBox="0 0 500 340" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="18" font-size="12" font-weight="700" text-anchor="middle">Crude Distilling Column</text>
  <!-- Column body -->
  <rect x="160" y="30" width="100" height="280" rx="12" stroke="var(--accent)" stroke-width="2" fill="var(--code-bg)"/>
  <!-- Trays -->
  <line x1="170" y1="70" x2="250" y2="70" stroke="var(--dim)" stroke-width="1" stroke-dasharray="4,2"/>
  <line x1="170" y1="105" x2="250" y2="105" stroke="var(--dim)" stroke-width="1" stroke-dasharray="4,2"/>
  <line x1="170" y1="140" x2="250" y2="140" stroke="var(--dim)" stroke-width="1" stroke-dasharray="4,2"/>
  <line x1="170" y1="175" x2="250" y2="175" stroke="var(--dim)" stroke-width="1" stroke-dasharray="4,2"/>
  <line x1="170" y1="210" x2="250" y2="210" stroke="var(--dim)" stroke-width="1" stroke-dasharray="4,2"/>
  <line x1="170" y1="245" x2="250" y2="245" stroke="var(--dim)" stroke-width="1" stroke-dasharray="4,2"/>
  <!-- Vapor arrows (up) -->
  <path d="M200 290 L200 50" stroke="var(--red)" stroke-width="1" stroke-dasharray="6,3" opacity="0.5"/>
  <text x="190" y="295" font-size="7" fill="var(--red)">vapor</text>
  <!-- Liquid arrows (down) -->
  <path d="M230 50 L230 290" stroke="var(--cyan)" stroke-width="1" stroke-dasharray="6,3" opacity="0.5"/>
  <text x="236" y="295" font-size="7" fill="var(--cyan)">liquid</text>
  <!-- Feed entry (flash zone) -->
  <line x1="100" y1="230" x2="160" y2="230" stroke="var(--gold)" stroke-width="2.5"/>
  <circle cx="100" cy="230" r="4" fill="var(--gold)"/>
  <text x="60" y="224" font-size="9" font-weight="600" fill="var(--gold)">Crude</text>
  <text x="54" y="236" font-size="8" fill="var(--dim)">~750°F</text>
  <!-- Furnace -->
  <rect x="45" y="250" width="50" height="30" rx="4" fill="var(--red)" opacity="0.15" stroke="var(--red)" stroke-width="1"/>
  <text x="70" y="269" font-size="8" font-weight="600" text-anchor="middle" fill="var(--red)">Furnace</text>
  <!-- Side draws -->
  <line x1="260" y1="50" x2="310" y2="50" stroke="var(--green)" stroke-width="2"/>
  <text x="315" y="46" font-size="9" font-weight="600" fill="var(--green)">Gases</text>
  <text x="315" y="56" font-size="7" fill="var(--dim)">C4 &amp; lighter</text>
  <line x1="260" y1="85" x2="310" y2="85" stroke="#a855f7" stroke-width="2"/>
  <text x="315" y="82" font-size="9" font-weight="600" fill="#a855f7">Gasoline</text>
  <text x="315" y="92" font-size="7" fill="var(--dim)">90-220°F</text>
  <line x1="260" y1="120" x2="310" y2="120" stroke="var(--cyan)" stroke-width="2"/>
  <text x="315" y="117" font-size="9" font-weight="600" fill="var(--cyan)">Naphtha</text>
  <text x="315" y="127" font-size="7" fill="var(--dim)">→ Reformer</text>
  <line x1="260" y1="155" x2="310" y2="155" stroke="var(--gold)" stroke-width="2"/>
  <text x="315" y="152" font-size="9" font-weight="600" fill="var(--gold)">Kerosene</text>
  <text x="315" y="162" font-size="7" fill="var(--dim)">→ Jet Fuel</text>
  <line x1="260" y1="190" x2="310" y2="190" stroke="var(--pink)" stroke-width="2"/>
  <text x="315" y="187" font-size="9" font-weight="600" fill="var(--pink)">Light Gas Oil</text>
  <text x="315" y="197" font-size="7" fill="var(--dim)">→ Diesel</text>
  <line x1="260" y1="225" x2="310" y2="225" stroke="var(--red)" stroke-width="2"/>
  <text x="315" y="222" font-size="9" font-weight="600" fill="var(--red)">Heavy Gas Oil</text>
  <text x="315" y="232" font-size="7" fill="var(--dim)">→ Cat Cracker</text>
  <!-- Residue out bottom -->
  <line x1="210" y1="310" x2="210" y2="330" stroke="var(--dim)" stroke-width="2"/>
  <text x="210" y="340" font-size="9" font-weight="600" text-anchor="middle" fill="var(--dim)">Residue → Flasher</text>
  <!-- Temperature gradient -->
  <text x="155" y="50" font-size="8" text-anchor="end" fill="var(--dim)">Cool</text>
  <text x="155" y="270" font-size="8" text-anchor="end" fill="var(--dim)">Hot</text>
  <!-- Reflux -->
  <path d="M280 40 C280 25, 200 25, 200 40" stroke="var(--cyan)" stroke-width="1.5" stroke-dasharray="4,2"/>
  <text x="240" y="22" font-size="7" fill="var(--cyan)" text-anchor="middle">Reflux</text>
</svg>`,

// ==================== CH IV: Vacuum Flashing ====================
4: `<svg viewBox="0 0 500 240" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="18" font-size="12" font-weight="700" text-anchor="middle">Vacuum Flashing: Lower Pressure = Lower Boiling Point</text>
  <!-- Atmospheric column (tall, narrow) -->
  <rect x="40" y="50" width="50" height="150" rx="8" stroke="var(--accent)" stroke-width="2" fill="var(--code-bg)"/>
  <text x="65" y="130" font-size="9" font-weight="700" text-anchor="middle">CDU</text>
  <text x="65" y="145" font-size="7" text-anchor="middle" fill="var(--dim)">760 mmHg</text>
  <text x="65" y="157" font-size="7" text-anchor="middle" fill="var(--dim)">~750°F</text>
  <!-- Arrow to flasher -->
  <path d="M90 185 L140 185" stroke="var(--gold)" stroke-width="2" marker-end="url(#arr4)"/>
  <text x="115" y="180" font-size="7" fill="var(--dim)" text-anchor="middle">Residue</text>
  <defs><marker id="arr4" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="var(--gold)"/></marker></defs>
  <!-- Vacuum flasher (short, wide) -->
  <rect x="145" y="90" width="90" height="120" rx="12" stroke="var(--cyan)" stroke-width="2" fill="var(--code-bg)"/>
  <text x="190" y="145" font-size="9" font-weight="700" text-anchor="middle" fill="var(--cyan)">Vacuum</text>
  <text x="190" y="158" font-size="9" font-weight="700" text-anchor="middle" fill="var(--cyan)">Flasher</text>
  <text x="190" y="175" font-size="7" text-anchor="middle" fill="var(--dim)">25-40 mmHg</text>
  <text x="190" y="187" font-size="7" text-anchor="middle" fill="var(--dim)">~750°F</text>
  <!-- Vacuum pump -->
  <circle cx="190" cy="70" r="15" stroke="var(--dim)" stroke-width="1.5" fill="var(--code-bg)"/>
  <text x="190" y="74" font-size="7" font-weight="600" text-anchor="middle" fill="var(--dim)">VAC</text>
  <line x1="190" y1="85" x2="190" y2="90" stroke="var(--dim)" stroke-width="1.5"/>
  <!-- Products out -->
  <line x1="235" y1="110" x2="280" y2="110" stroke="var(--accent)" stroke-width="2"/>
  <text x="285" y="107" font-size="8" font-weight="600" fill="var(--accent)">Light Flashed Dist.</text>
  <text x="285" y="117" font-size="7" fill="var(--dim)">→ Cat Cracker / Lube Oil</text>
  <line x1="235" y1="140" x2="280" y2="140" stroke="var(--gold)" stroke-width="2"/>
  <text x="285" y="137" font-size="8" font-weight="600" fill="var(--gold)">Heavy Flashed Dist.</text>
  <text x="285" y="147" font-size="7" fill="var(--dim)">→ Cat Cracker</text>
  <line x1="190" y1="210" x2="190" y2="230" stroke="var(--red)" stroke-width="2"/>
  <text x="190" y="240" font-size="8" font-weight="600" text-anchor="middle" fill="var(--red)">Flasher Bottoms → Asphalt / Coker</text>
  <!-- Comparison bar chart -->
  <rect x="360" y="55" width="25" height="160" rx="4" fill="var(--red)" opacity="0.2" stroke="var(--red)" stroke-width="1"/>
  <text x="372" y="50" font-size="8" font-weight="600" text-anchor="middle" fill="var(--red)">1100°F</text>
  <text x="372" y="228" font-size="7" text-anchor="middle" fill="var(--dim)">at 760 mmHg</text>
  <rect x="410" y="120" width="25" height="95" rx="4" fill="var(--green)" opacity="0.2" stroke="var(--green)" stroke-width="1"/>
  <text x="422" y="115" font-size="8" font-weight="600" text-anchor="middle" fill="var(--green)">750°F</text>
  <text x="422" y="228" font-size="7" text-anchor="middle" fill="var(--dim)">at 30 mmHg</text>
  <text x="395" y="40" font-size="9" font-weight="600" text-anchor="middle">Same separation!</text>
</svg>`,

// ==================== CH V: Chemistry of Petroleum ====================
5: `<svg viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="18" font-size="12" font-weight="700" text-anchor="middle">PONA: The Four Hydrocarbon Families</text>
  <!-- Paraffin (straight chain) -->
  <rect x="10" y="35" width="110" height="100" rx="8" fill="var(--accent)" opacity="0.08" stroke="var(--accent)" stroke-width="1.5"/>
  <text x="65" y="52" font-size="10" font-weight="800" text-anchor="middle" fill="var(--accent)">PARAFFIN</text>
  <text x="65" y="64" font-size="8" text-anchor="middle" fill="var(--dim)">CnH(2n+2) Saturated</text>
  <!-- Chain: C-C-C-C -->
  <circle cx="30" cy="88" r="6" fill="var(--accent)" opacity="0.3"/><text x="30" y="91" font-size="7" font-weight="700" text-anchor="middle">C</text>
  <line x1="36" y1="88" x2="48" y2="88" stroke="var(--accent)" stroke-width="2"/>
  <circle cx="54" cy="88" r="6" fill="var(--accent)" opacity="0.3"/><text x="54" y="91" font-size="7" font-weight="700" text-anchor="middle">C</text>
  <line x1="60" y1="88" x2="72" y2="88" stroke="var(--accent)" stroke-width="2"/>
  <circle cx="78" cy="88" r="6" fill="var(--accent)" opacity="0.3"/><text x="78" y="91" font-size="7" font-weight="700" text-anchor="middle">C</text>
  <line x1="84" y1="88" x2="96" y2="88" stroke="var(--accent)" stroke-width="2"/>
  <circle cx="102" cy="88" r="6" fill="var(--accent)" opacity="0.3"/><text x="102" y="91" font-size="7" font-weight="700" text-anchor="middle">C</text>
  <text x="65" y="114" font-size="7" text-anchor="middle" fill="var(--dim)">n-butane: single bonds</text>
  <text x="65" y="125" font-size="7" text-anchor="middle" fill="var(--dim)">Good diesel, bad gasoline</text>

  <!-- Olefin (double bond) -->
  <rect x="130" y="35" width="110" height="100" rx="8" fill="var(--green)" opacity="0.08" stroke="var(--green)" stroke-width="1.5"/>
  <text x="185" y="52" font-size="10" font-weight="800" text-anchor="middle" fill="var(--green)">OLEFIN</text>
  <text x="185" y="64" font-size="8" text-anchor="middle" fill="var(--dim)">CnH(2n) Unsaturated</text>
  <circle cx="150" cy="88" r="6" fill="var(--green)" opacity="0.3"/><text x="150" y="91" font-size="7" font-weight="700" text-anchor="middle">C</text>
  <line x1="156" y1="85" x2="168" y2="85" stroke="var(--green)" stroke-width="2"/>
  <line x1="156" y1="91" x2="168" y2="91" stroke="var(--green)" stroke-width="2"/>
  <circle cx="174" cy="88" r="6" fill="var(--green)" opacity="0.3"/><text x="174" y="91" font-size="7" font-weight="700" text-anchor="middle">C</text>
  <line x1="180" y1="88" x2="192" y2="88" stroke="var(--green)" stroke-width="2"/>
  <circle cx="198" cy="88" r="6" fill="var(--green)" opacity="0.3"/><text x="198" y="91" font-size="7" font-weight="700" text-anchor="middle">C</text>
  <line x1="204" y1="88" x2="216" y2="88" stroke="var(--green)" stroke-width="2"/>
  <circle cx="222" cy="88" r="6" fill="var(--green)" opacity="0.3"/><text x="222" y="91" font-size="7" font-weight="700" text-anchor="middle">C</text>
  <text x="185" y="114" font-size="7" text-anchor="middle" fill="var(--dim)">C=C double bond</text>
  <text x="185" y="125" font-size="7" text-anchor="middle" fill="var(--dim)">Reactive! From cracking</text>

  <!-- Naphthene (ring, saturated) -->
  <rect x="250" y="35" width="110" height="100" rx="8" fill="var(--gold)" opacity="0.08" stroke="var(--gold)" stroke-width="1.5"/>
  <text x="305" y="52" font-size="10" font-weight="800" text-anchor="middle" fill="var(--gold)">NAPHTHENE</text>
  <text x="305" y="64" font-size="8" text-anchor="middle" fill="var(--dim)">CnH(2n) Ring</text>
  <!-- Hexagon ring -->
  <polygon points="305,74 322,83 322,101 305,110 288,101 288,83" fill="none" stroke="var(--gold)" stroke-width="2"/>
  <text x="305" y="96" font-size="7" font-weight="600" text-anchor="middle" fill="var(--gold)">C6</text>
  <text x="305" y="125" font-size="7" text-anchor="middle" fill="var(--dim)">Cyclohexane: sat. ring</text>

  <!-- Aromatic (benzene ring) -->
  <rect x="370" y="35" width="120" height="100" rx="8" fill="var(--pink)" opacity="0.08" stroke="var(--pink)" stroke-width="1.5"/>
  <text x="430" y="52" font-size="10" font-weight="800" text-anchor="middle" fill="var(--pink)">AROMATIC</text>
  <text x="430" y="64" font-size="8" text-anchor="middle" fill="var(--dim)">Benzene Ring</text>
  <!-- Benzene ring with alternating bonds -->
  <polygon points="430,74 447,83 447,101 430,110 413,101 413,83" fill="none" stroke="var(--pink)" stroke-width="2"/>
  <circle cx="430" cy="92" r="10" fill="none" stroke="var(--pink)" stroke-width="1" stroke-dasharray="3,2"/>
  <text x="430" y="125" font-size="7" text-anchor="middle" fill="var(--dim)">High octane, BTX chemicals</text>

  <!-- Isomer comparison -->
  <rect x="30" y="150" width="440" height="100" rx="10" fill="var(--code-bg)" stroke="var(--border)" stroke-width="1"/>
  <text x="250" y="170" font-size="10" font-weight="700" text-anchor="middle">Isomers: Same Formula, Different Performance</text>
  <!-- n-heptane -->
  <rect x="55" y="185" width="170" height="50" rx="6" fill="var(--red)" opacity="0.08" stroke="var(--red)" stroke-width="1"/>
  <text x="140" y="202" font-size="10" font-weight="700" text-anchor="middle" fill="var(--red)">n-Heptane (straight)</text>
  <text x="140" y="218" font-size="18" font-weight="900" text-anchor="middle" fill="var(--red)">0 Octane</text>
  <!-- iso-octane -->
  <rect x="275" y="185" width="170" height="50" rx="6" fill="var(--green)" opacity="0.08" stroke="var(--green)" stroke-width="1"/>
  <text x="360" y="202" font-size="10" font-weight="700" text-anchor="middle" fill="var(--green)">Iso-Octane (branched)</text>
  <text x="360" y="218" font-size="18" font-weight="900" text-anchor="middle" fill="var(--green)">100 Octane</text>
  <text x="250" y="205" font-size="14" font-weight="900" text-anchor="middle" fill="var(--dim)">vs</text>
</svg>`,

// ==================== CH VI: Cat Cracking ====================
6: `<svg viewBox="0 0 500 260" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="18" font-size="12" font-weight="700" text-anchor="middle">Fluid Catalytic Cracking (FCC) - Three-Part System</text>
  <defs><marker id="arr6" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10" fill="var(--accent)"/></marker></defs>
  <!-- Riser/Reactor -->
  <rect x="40" y="50" width="100" height="120" rx="10" fill="var(--accent)" opacity="0.1" stroke="var(--accent)" stroke-width="2"/>
  <text x="90" y="75" font-size="11" font-weight="800" text-anchor="middle" fill="var(--accent)">REACTOR</text>
  <text x="90" y="90" font-size="8" text-anchor="middle" fill="var(--dim)">(Riser)</text>
  <text x="90" y="108" font-size="8" text-anchor="middle" fill="var(--dim)">Feed + hot catalyst</text>
  <text x="90" y="120" font-size="8" text-anchor="middle" fill="var(--dim)">Cracking in seconds</text>
  <text x="90" y="140" font-size="8" text-anchor="middle" fill="var(--dim)">~950-1000°F</text>
  <text x="90" y="158" font-size="7" text-anchor="middle" fill="var(--red)">Coke deposits on catalyst</text>
  <!-- Feed arrow in -->
  <path d="M20 155 L40 155" stroke="var(--gold)" stroke-width="2" marker-end="url(#arr6)"/>
  <text x="14" y="148" font-size="7" fill="var(--gold)">Feed</text>
  <text x="8" y="160" font-size="7" fill="var(--dim)">HGO</text>

  <!-- Regenerator -->
  <rect x="200" y="50" width="100" height="120" rx="10" fill="var(--red)" opacity="0.1" stroke="var(--red)" stroke-width="2"/>
  <text x="250" y="75" font-size="11" font-weight="800" text-anchor="middle" fill="var(--red)">REGEN</text>
  <text x="250" y="93" font-size="8" text-anchor="middle" fill="var(--dim)">Burn off coke</text>
  <text x="250" y="105" font-size="8" text-anchor="middle" fill="var(--dim)">C + O2 → CO2</text>
  <text x="250" y="120" font-size="8" text-anchor="middle" fill="var(--dim)">~1,100°F</text>
  <text x="250" y="138" font-size="8" text-anchor="middle" fill="var(--dim)">Clean catalyst exits</text>
  <text x="250" y="158" font-size="7" text-anchor="middle" fill="var(--green)">Enormous heat generated</text>
  <!-- Air in -->
  <path d="M200 155 L180 155" stroke="var(--dim)" stroke-width="1.5"/>
  <text x="170" y="160" font-size="7" text-anchor="end" fill="var(--dim)">Air</text>

  <!-- Catalyst loop arrows -->
  <path d="M140 70 L200 70" stroke="var(--accent)" stroke-width="2" marker-end="url(#arr6)"/>
  <text x="170" y="64" font-size="7" font-weight="600" text-anchor="middle" fill="var(--accent)">Spent catalyst</text>
  <path d="M200 150 L140 150" stroke="var(--green)" stroke-width="2" marker-end="url(#arr6)"/>
  <text x="170" y="146" font-size="7" font-weight="600" text-anchor="middle" fill="var(--green)">Hot clean catalyst</text>

  <!-- Fractionator -->
  <rect x="360" y="40" width="90" height="180" rx="10" fill="var(--cyan)" opacity="0.1" stroke="var(--cyan)" stroke-width="2"/>
  <text x="405" y="62" font-size="10" font-weight="800" text-anchor="middle" fill="var(--cyan)">FRAC</text>
  <!-- Products -->
  <line x1="450" y1="65" x2="490" y2="65" stroke="var(--green)" stroke-width="1.5"/>
  <text x="492" y="68" font-size="7" fill="var(--green)">Gas</text>
  <line x1="450" y1="95" x2="490" y2="95" stroke="#a855f7" stroke-width="1.5"/>
  <text x="492" y="98" font-size="7" fill="#a855f7">Gasoline 55%</text>
  <line x1="450" y1="125" x2="490" y2="125" stroke="var(--gold)" stroke-width="1.5"/>
  <text x="492" y="128" font-size="7" fill="var(--gold)">LGO 12%</text>
  <line x1="450" y1="155" x2="490" y2="155" stroke="var(--red)" stroke-width="1.5"/>
  <text x="492" y="158" font-size="7" fill="var(--red)">HGO 8%</text>
  <!-- Vapor from reactor to frac -->
  <path d="M140 50 C170 30, 330 30, 360 55" stroke="var(--cyan)" stroke-width="2" stroke-dasharray="5,3"/>
  <text x="250" y="28" font-size="7" fill="var(--cyan)" text-anchor="middle">Cracked vapors</text>

  <!-- Volume gain box -->
  <rect x="100" y="195" width="300" height="55" rx="8" fill="var(--code-bg)" stroke="var(--border)" stroke-width="1"/>
  <text x="250" y="215" font-size="10" font-weight="700" text-anchor="middle">Volume Gain: 100% in → 118% out</text>
  <text x="250" y="233" font-size="9" text-anchor="middle" fill="var(--dim)">Same weight, but cracked molecules are less dense = more volume!</text>
  <text x="250" y="245" font-size="8" text-anchor="middle" fill="var(--green)">Products sold by volume → refiners love this "gain"</text>
</svg>`,

// ==================== CH VII: Gas Plants ====================
7: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="18" font-size="12" font-weight="700" text-anchor="middle">Gas Plant: Separating C1-C4</text>
  <defs><marker id="arr7" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10" fill="var(--accent)"/></marker></defs>
  <!-- Process flow boxes -->
  <rect x="10" y="55" width="65" height="40" rx="6" fill="var(--accent)" opacity="0.12" stroke="var(--accent)" stroke-width="1.5"/>
  <text x="42" y="72" font-size="8" font-weight="700" text-anchor="middle" fill="var(--accent)">Compress</text>
  <text x="42" y="83" font-size="7" text-anchor="middle" fill="var(--dim)">~200 psi</text>
  <path d="M75 75 L88 75" stroke="var(--accent)" stroke-width="1.5" marker-end="url(#arr7)"/>

  <rect x="92" y="55" width="65" height="40" rx="6" fill="var(--cyan)" opacity="0.12" stroke="var(--cyan)" stroke-width="1.5"/>
  <text x="124" y="72" font-size="8" font-weight="700" text-anchor="middle" fill="var(--cyan)">Absorber</text>
  <text x="124" y="83" font-size="7" text-anchor="middle" fill="var(--dim)">Lean → Fat oil</text>
  <path d="M157 75 L170 75" stroke="var(--accent)" stroke-width="1.5" marker-end="url(#arr7)"/>

  <rect x="174" y="55" width="70" height="40" rx="6" fill="var(--gold)" opacity="0.12" stroke="var(--gold)" stroke-width="1.5"/>
  <text x="209" y="72" font-size="8" font-weight="700" text-anchor="middle" fill="var(--gold)">Debutanizer</text>
  <text x="209" y="83" font-size="7" text-anchor="middle" fill="var(--dim)">C3/C4 off top</text>
  <path d="M244 75 L257 75" stroke="var(--accent)" stroke-width="1.5" marker-end="url(#arr7)"/>

  <rect x="261" y="55" width="75" height="40" rx="6" fill="var(--green)" opacity="0.12" stroke="var(--green)" stroke-width="1.5"/>
  <text x="298" y="72" font-size="8" font-weight="700" text-anchor="middle" fill="var(--green)">Depropanizer</text>
  <text x="298" y="83" font-size="7" text-anchor="middle" fill="var(--dim)">C3 vs C4</text>
  <path d="M336 75 L349 75" stroke="var(--accent)" stroke-width="1.5" marker-end="url(#arr7)"/>

  <rect x="353" y="55" width="80" height="40" rx="6" fill="var(--pink)" opacity="0.12" stroke="var(--pink)" stroke-width="1.5"/>
  <text x="393" y="72" font-size="7" font-weight="700" text-anchor="middle" fill="var(--pink)">Deisobutanizer</text>
  <text x="393" y="83" font-size="7" text-anchor="middle" fill="var(--dim)">iC4 vs nC4</text>

  <!-- Products -->
  <rect x="10" y="120" width="90" height="30" rx="6" fill="var(--dim)" opacity="0.1" stroke="var(--dim)" stroke-width="1"/>
  <text x="55" y="137" font-size="8" font-weight="600" text-anchor="middle">Methane/Ethane</text>
  <text x="55" y="160" font-size="7" text-anchor="middle" fill="var(--dim)">→ Refinery fuel</text>

  <rect x="120" y="120" width="80" height="30" rx="6" fill="var(--green)" opacity="0.1" stroke="var(--green)" stroke-width="1"/>
  <text x="160" y="137" font-size="8" font-weight="600" text-anchor="middle" fill="var(--green)">Propane</text>
  <text x="160" y="160" font-size="7" text-anchor="middle" fill="var(--dim)">→ LPG sales</text>

  <rect x="220" y="120" width="80" height="30" rx="6" fill="var(--cyan)" opacity="0.1" stroke="var(--cyan)" stroke-width="1"/>
  <text x="260" y="137" font-size="8" font-weight="600" text-anchor="middle" fill="var(--cyan)">Isobutane</text>
  <text x="260" y="160" font-size="7" text-anchor="middle" fill="var(--dim)">→ Alkylation!</text>

  <rect x="320" y="120" width="80" height="30" rx="6" fill="var(--gold)" opacity="0.1" stroke="var(--gold)" stroke-width="1"/>
  <text x="360" y="137" font-size="8" font-weight="600" text-anchor="middle" fill="var(--gold)">n-Butane</text>
  <text x="360" y="160" font-size="7" text-anchor="middle" fill="var(--dim)">→ Gas blending</text>

  <rect x="415" y="120" width="75" height="30" rx="6" fill="var(--pink)" opacity="0.1" stroke="var(--pink)" stroke-width="1"/>
  <text x="452" y="137" font-size="8" font-weight="600" text-anchor="middle" fill="var(--pink)">Olefins</text>
  <text x="452" y="160" font-size="7" text-anchor="middle" fill="var(--dim)">→ Alkylation!</text>

  <!-- Note -->
  <text x="250" y="190" font-size="8" text-anchor="middle" fill="var(--dim)">The deisobutanizer is the tallest column: iC4 (11°F) and nC4 (31°F) boil only 20°F apart!</text>
</svg>`,

// ==================== CH VIII: Alkylation ====================
8: `<svg viewBox="0 0 500 220" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="18" font-size="12" font-weight="700" text-anchor="middle">Alkylation: Small + Small = Premium Gasoline</text>
  <!-- Reactants -->
  <rect x="20" y="50" width="120" height="55" rx="8" fill="var(--green)" opacity="0.1" stroke="var(--green)" stroke-width="1.5"/>
  <text x="80" y="70" font-size="10" font-weight="700" text-anchor="middle" fill="var(--green)">Isobutane</text>
  <text x="80" y="84" font-size="8" text-anchor="middle" fill="var(--dim)">C4H10 (branched)</text>
  <text x="80" y="96" font-size="8" text-anchor="middle" fill="var(--dim)">From gas plant</text>

  <text x="80" y="125" font-size="18" font-weight="900" fill="var(--accent)" text-anchor="middle">+</text>

  <rect x="20" y="135" width="120" height="55" rx="8" fill="var(--cyan)" opacity="0.1" stroke="var(--cyan)" stroke-width="1.5"/>
  <text x="80" y="155" font-size="10" font-weight="700" text-anchor="middle" fill="var(--cyan)">Butylene</text>
  <text x="80" y="169" font-size="8" text-anchor="middle" fill="var(--dim)">C4H8 (olefin, C=C)</text>
  <text x="80" y="181" font-size="8" text-anchor="middle" fill="var(--dim)">From cat cracker</text>

  <!-- Arrow -->
  <path d="M150 120 L220 120" stroke="var(--accent)" stroke-width="3" marker-end="url(#arr8)"/>
  <defs><marker id="arr8" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="10" markerHeight="10" orient="auto"><path d="M0,0 L10,5 L0,10" fill="var(--accent)"/></marker></defs>
  <!-- Acid catalyst label -->
  <rect x="160" y="96" width="60" height="20" rx="4" fill="var(--red)" opacity="0.12" stroke="var(--red)" stroke-width="1"/>
  <text x="190" y="110" font-size="8" font-weight="600" text-anchor="middle" fill="var(--red)">HF or H2SO4</text>

  <!-- Product -->
  <rect x="235" y="75" width="150" height="90" rx="10" fill="var(--gold)" opacity="0.1" stroke="var(--gold)" stroke-width="2"/>
  <text x="310" y="100" font-size="13" font-weight="800" text-anchor="middle" fill="var(--gold)">ALKYLATE</text>
  <text x="310" y="118" font-size="9" text-anchor="middle" fill="var(--dim)">C8H18 (iso-octane type)</text>
  <text x="310" y="135" font-size="9" text-anchor="middle" fill="var(--dim)">Branched iso-paraffin</text>
  <text x="310" y="152" font-size="10" font-weight="700" text-anchor="middle" fill="var(--green)">95-97 RON!</text>

  <!-- Properties -->
  <rect x="400" y="50" width="90" height="140" rx="8" fill="var(--code-bg)" stroke="var(--border)" stroke-width="1"/>
  <text x="445" y="70" font-size="9" font-weight="700" text-anchor="middle">Properties</text>
  <text x="445" y="88" font-size="8" text-anchor="middle" fill="var(--green)">Zero sulfur</text>
  <text x="445" y="103" font-size="8" text-anchor="middle" fill="var(--green)">Zero olefins</text>
  <text x="445" y="118" font-size="8" text-anchor="middle" fill="var(--green)">Zero aromatics</text>
  <text x="445" y="133" font-size="8" text-anchor="middle" fill="var(--green)">Clean burning</text>
  <text x="445" y="155" font-size="8" text-anchor="middle" fill="var(--red)">Volume shrinks!</text>
  <text x="445" y="168" font-size="7" text-anchor="middle" fill="var(--dim)">2.2 bbl in → 1.8 out</text>

  <text x="250" y="215" font-size="9" text-anchor="middle" fill="var(--dim)">Alkylation is the REVERSE of cracking: combining small molecules into large, premium ones</text>
</svg>`,

// ==================== CH IX: Catalytic Reforming ====================
9: `<svg viewBox="0 0 500 220" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="18" font-size="12" font-weight="700" text-anchor="middle">Catalytic Reforming: Reshaping Molecules for Octane</text>
  <!-- Feed -->
  <rect x="20" y="50" width="110" height="80" rx="8" fill="var(--gold)" opacity="0.1" stroke="var(--gold)" stroke-width="1.5"/>
  <text x="75" y="70" font-size="10" font-weight="700" text-anchor="middle" fill="var(--gold)">Naphtha Feed</text>
  <text x="75" y="86" font-size="8" text-anchor="middle" fill="var(--dim)">Low octane (~50 RON)</text>
  <text x="75" y="100" font-size="8" text-anchor="middle" fill="var(--dim)">Naphthenes</text>
  <text x="75" y="112" font-size="8" text-anchor="middle" fill="var(--dim)">+ n-Paraffins</text>
  <text x="75" y="124" font-size="8" text-anchor="middle" fill="var(--dim)">(must hydro-treat first!)</text>
  <!-- Arrow through reactor -->
  <path d="M135 90 L200 90" stroke="var(--accent)" stroke-width="2.5" marker-end="url(#arr9)"/>
  <defs><marker id="arr9" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="var(--accent)"/></marker></defs>
  <text x="167" y="82" font-size="8" font-weight="600" text-anchor="middle" fill="var(--accent)">Pt catalyst</text>
  <text x="167" y="104" font-size="7" text-anchor="middle" fill="var(--dim)">900-950°F</text>
  <!-- Products -->
  <rect x="210" y="40" width="130" height="100" rx="8" fill="var(--pink)" opacity="0.1" stroke="var(--pink)" stroke-width="1.5"/>
  <text x="275" y="60" font-size="10" font-weight="700" text-anchor="middle" fill="var(--pink)">Reformate</text>
  <text x="275" y="78" font-size="9" text-anchor="middle" fill="var(--green)">94-100 RON!</text>
  <text x="275" y="96" font-size="8" text-anchor="middle" fill="var(--dim)">Rich in aromatics</text>
  <text x="275" y="110" font-size="8" text-anchor="middle" fill="var(--dim)">(Benzene, Toluene, Xylene)</text>
  <text x="275" y="128" font-size="8" text-anchor="middle" fill="var(--cyan)">+ Hydrogen byproduct!</text>
  <!-- Reaction examples -->
  <rect x="360" y="40" width="130" height="130" rx="8" fill="var(--code-bg)" stroke="var(--border)" stroke-width="1"/>
  <text x="425" y="58" font-size="9" font-weight="700" text-anchor="middle">Key Reactions</text>
  <text x="425" y="78" font-size="8" text-anchor="middle" fill="var(--pink)">Naphthene → Aromatic</text>
  <text x="425" y="90" font-size="7" text-anchor="middle" fill="var(--dim)">C6H12 → C6H6 + 3H2</text>
  <text x="425" y="110" font-size="8" text-anchor="middle" fill="var(--accent)">n-Paraffin → Aromatic</text>
  <text x="425" y="122" font-size="7" text-anchor="middle" fill="var(--dim)">C6H14 → C6H6 + 4H2</text>
  <text x="425" y="142" font-size="8" text-anchor="middle" fill="var(--gold)">n-Paraffin → iso-Paraffin</text>
  <text x="425" y="154" font-size="7" text-anchor="middle" fill="var(--dim)">Isomerization side rxn</text>
  <!-- H2 importance -->
  <rect x="100" y="155" width="250" height="50" rx="8" fill="var(--cyan)" opacity="0.08" stroke="var(--cyan)" stroke-width="1"/>
  <text x="225" y="175" font-size="9" font-weight="700" text-anchor="middle" fill="var(--cyan)">H2 Byproduct is Critical</text>
  <text x="225" y="192" font-size="8" text-anchor="middle" fill="var(--dim)">Supplies hydrogen to hydrotreaters &amp; hydrocrackers across the refinery</text>
</svg>`,

// ==================== CH X: Residue Reduction ====================
10: `<svg viewBox="0 0 500 220" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="18" font-size="12" font-weight="700" text-anchor="middle">Residue Reduction: Visbreaking &amp; Coking</text>
  <!-- Visbreaker -->
  <rect x="20" y="45" width="200" height="80" rx="10" fill="var(--gold)" opacity="0.1" stroke="var(--gold)" stroke-width="1.5"/>
  <text x="120" y="65" font-size="11" font-weight="800" text-anchor="middle" fill="var(--gold)">VISBREAKER</text>
  <text x="120" y="82" font-size="8" text-anchor="middle" fill="var(--dim)">Mild cracking: just enough to reduce</text>
  <text x="120" y="94" font-size="8" text-anchor="middle" fill="var(--dim)">viscosity. Less cutter stock needed.</text>
  <text x="120" y="110" font-size="8" text-anchor="middle" fill="var(--dim)">~850°F, short residence time</text>
  <text x="120" y="122" font-size="8" text-anchor="middle" fill="var(--green)">Small capital, moderate improvement</text>

  <!-- Coker -->
  <rect x="260" y="45" width="220" height="80" rx="10" fill="var(--red)" opacity="0.1" stroke="var(--red)" stroke-width="1.5"/>
  <text x="370" y="65" font-size="11" font-weight="800" text-anchor="middle" fill="var(--red)">DELAYED COKER</text>
  <text x="370" y="82" font-size="8" text-anchor="middle" fill="var(--dim)">Severe cracking: converts EVERYTHING</text>
  <text x="370" y="94" font-size="8" text-anchor="middle" fill="var(--dim)">except solid coke (petroleum coal).</text>
  <text x="370" y="110" font-size="8" text-anchor="middle" fill="var(--dim)">~900°F, long residence in drums</text>
  <text x="370" y="122" font-size="8" text-anchor="middle" fill="var(--green)">Big capital, maximum conversion</text>

  <!-- Feed -->
  <rect x="170" y="145" width="160" height="30" rx="6" fill="var(--dim)" opacity="0.12" stroke="var(--dim)" stroke-width="1"/>
  <text x="250" y="165" font-size="9" font-weight="600" text-anchor="middle">Feed: Vacuum Flasher Bottoms</text>

  <!-- Arrows up -->
  <path d="M200 145 L120 127" stroke="var(--gold)" stroke-width="1.5"/>
  <path d="M300 145 L370 127" stroke="var(--red)" stroke-width="1.5"/>

  <!-- Yield comparison -->
  <rect x="20" y="185" width="200" height="30" rx="6" fill="var(--code-bg)" stroke="var(--border)" stroke-width="1"/>
  <text x="120" y="204" font-size="8" text-anchor="middle" fill="var(--dim)">Yield: ~5% naphtha, 15% gas oil, 80% resid</text>
  <rect x="260" y="185" width="220" height="30" rx="6" fill="var(--code-bg)" stroke="var(--border)" stroke-width="1"/>
  <text x="370" y="204" font-size="8" text-anchor="middle" fill="var(--dim)">Yield: 30% naphtha+gas, 35% gas oil, 35% coke</text>
</svg>`,

// ==================== CH XI: Hydrocracking ====================
11: `<svg viewBox="0 0 500 220" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="18" font-size="12" font-weight="700" text-anchor="middle">Hydrocracking: Cracking + Hydrogen = Premium Products</text>
  <!-- Feed -->
  <rect x="20" y="55" width="105" height="70" rx="8" fill="var(--dim)" opacity="0.12" stroke="var(--dim)" stroke-width="1.5"/>
  <text x="72" y="78" font-size="9" font-weight="700" text-anchor="middle">Heavy Feed</text>
  <text x="72" y="93" font-size="8" text-anchor="middle" fill="var(--dim)">Gas oil, coker GO</text>
  <text x="72" y="105" font-size="8" text-anchor="middle" fill="var(--dim)">cycle oil, VGO</text>
  <!-- H2 input -->
  <rect x="20" y="140" width="105" height="35" rx="8" fill="var(--cyan)" opacity="0.12" stroke="var(--cyan)" stroke-width="1.5"/>
  <text x="72" y="162" font-size="9" font-weight="700" text-anchor="middle" fill="var(--cyan)">Hydrogen (H2)</text>
  <!-- Arrow -->
  <path d="M130 100 L195 100" stroke="var(--accent)" stroke-width="2.5" marker-end="url(#arr11)"/>
  <path d="M130 155 L195 125" stroke="var(--cyan)" stroke-width="1.5" stroke-dasharray="4,2"/>
  <defs><marker id="arr11" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="var(--accent)"/></marker></defs>
  <!-- Reactor -->
  <rect x="200" y="60" width="90" height="90" rx="12" fill="var(--accent)" opacity="0.12" stroke="var(--accent)" stroke-width="2"/>
  <text x="245" y="85" font-size="9" font-weight="800" text-anchor="middle" fill="var(--accent)">REACTOR</text>
  <text x="245" y="100" font-size="7" text-anchor="middle" fill="var(--dim)">Catalyst + H2</text>
  <text x="245" y="112" font-size="7" text-anchor="middle" fill="var(--dim)">1,000-2,000 psi</text>
  <text x="245" y="124" font-size="7" text-anchor="middle" fill="var(--dim)">600-800°F</text>
  <text x="245" y="140" font-size="7" text-anchor="middle" fill="var(--dim)">Crack + saturate</text>
  <!-- Products -->
  <path d="M295 85 L340 70" stroke="var(--green)" stroke-width="1.5"/>
  <path d="M295 100 L340 100" stroke="var(--gold)" stroke-width="1.5"/>
  <path d="M295 115 L340 130" stroke="var(--cyan)" stroke-width="1.5"/>
  <rect x="345" y="45" width="140" height="40" rx="6" fill="var(--green)" opacity="0.1" stroke="var(--green)" stroke-width="1"/>
  <text x="415" y="63" font-size="9" font-weight="700" text-anchor="middle" fill="var(--green)">Hydrocrackate</text>
  <text x="415" y="78" font-size="8" text-anchor="middle" fill="var(--dim)">84 RON gasoline comp.</text>
  <rect x="345" y="90" width="140" height="30" rx="6" fill="var(--gold)" opacity="0.1" stroke="var(--gold)" stroke-width="1"/>
  <text x="415" y="109" font-size="9" font-weight="700" text-anchor="middle" fill="var(--gold)">Jet Fuel / Diesel</text>
  <rect x="345" y="125" width="140" height="30" rx="6" fill="var(--cyan)" opacity="0.1" stroke="var(--cyan)" stroke-width="1"/>
  <text x="415" y="144" font-size="9" font-weight="700" text-anchor="middle" fill="var(--cyan)">LPG + Light Gases</text>
  <!-- Key difference -->
  <rect x="60" y="180" width="380" height="35" rx="8" fill="var(--code-bg)" stroke="var(--border)" stroke-width="1"/>
  <text x="250" y="196" font-size="9" font-weight="700" text-anchor="middle">Cat Cracking vs Hydrocracking</text>
  <text x="250" y="209" font-size="8" text-anchor="middle" fill="var(--dim)">No coke! H2 saturates fragments → clean products, zero sulfur, zero olefins</text>
</svg>`,

// ==================== CH XII: Gasoline Blending ====================
12: `<svg viewBox="0 0 500 250" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="18" font-size="12" font-weight="700" text-anchor="middle">Gasoline: Blending Components &amp; Octane Scale</text>
  <!-- Octane scale bar -->
  <rect x="30" y="40" width="440" height="30" rx="6" fill="var(--code-bg)" stroke="var(--border)" stroke-width="1"/>
  <!-- Gradient fill -->
  <rect x="30" y="40" width="110" height="30" rx="6" fill="var(--red)" opacity="0.15"/>
  <rect x="140" y="40" width="110" height="30" fill="var(--gold)" opacity="0.15"/>
  <rect x="250" y="40" width="110" height="30" fill="var(--green)" opacity="0.15"/>
  <rect x="360" y="40" width="110" height="30" rx="6" fill="var(--cyan)" opacity="0.15"/>
  <!-- Scale labels -->
  <text x="30" y="36" font-size="8" fill="var(--dim)">0</text>
  <text x="140" y="36" font-size="8" fill="var(--dim)">40</text>
  <text x="250" y="36" font-size="8" fill="var(--dim)">70</text>
  <text x="360" y="36" font-size="8" fill="var(--dim)">87</text>
  <text x="470" y="36" font-size="8" fill="var(--dim)">100</text>
  <!-- Key fuels on scale -->
  <line x1="30" y1="70" x2="30" y2="82" stroke="var(--red)" stroke-width="1.5"/>
  <text x="30" y="92" font-size="7" text-anchor="middle" fill="var(--red)">n-Heptane</text>
  <text x="30" y="100" font-size="7" text-anchor="middle" fill="var(--dim)">0 RON</text>
  <line x1="145" y1="70" x2="145" y2="82" stroke="var(--gold)" stroke-width="1.5"/>
  <text x="145" y="92" font-size="7" text-anchor="middle" fill="var(--gold)">Straight-run</text>
  <text x="145" y="100" font-size="7" text-anchor="middle" fill="var(--dim)">66 RON</text>
  <line x1="317" y1="70" x2="317" y2="82" stroke="#a855f7" stroke-width="1.5"/>
  <text x="317" y="92" font-size="7" text-anchor="middle" fill="#a855f7">Cat Gasoline</text>
  <text x="317" y="100" font-size="7" text-anchor="middle" fill="var(--dim)">93 RON</text>
  <line x1="410" y1="70" x2="410" y2="82" stroke="var(--green)" stroke-width="1.5"/>
  <text x="410" y="92" font-size="7" text-anchor="middle" fill="var(--green)">Alkylate</text>
  <text x="410" y="100" font-size="7" text-anchor="middle" fill="var(--dim)">97 RON</text>
  <line x1="460" y1="70" x2="460" y2="82" stroke="var(--cyan)" stroke-width="1.5"/>
  <text x="460" y="92" font-size="7" text-anchor="middle" fill="var(--cyan)">Reformate</text>
  <text x="460" y="100" font-size="7" text-anchor="middle" fill="var(--dim)">100 RON</text>

  <!-- Blending diagram -->
  <text x="250" y="125" font-size="10" font-weight="700" text-anchor="middle">Gasoline Blending Pool</text>
  <!-- Component bars (stacked) -->
  <rect x="60" y="135" width="160" height="20" rx="4" fill="#a855f7" opacity="0.3" stroke="#a855f7" stroke-width="1"/>
  <text x="140" y="149" font-size="8" font-weight="600" text-anchor="middle">Cat Cracked Gasoline ~40%</text>
  <rect x="60" y="158" width="100" height="20" rx="4" fill="var(--pink)" opacity="0.3" stroke="var(--pink)" stroke-width="1"/>
  <text x="110" y="172" font-size="8" font-weight="600" text-anchor="middle">Reformate ~25%</text>
  <rect x="60" y="181" width="70" height="20" rx="4" fill="var(--green)" opacity="0.3" stroke="var(--green)" stroke-width="1"/>
  <text x="95" y="195" font-size="8" font-weight="600" text-anchor="middle">Alkylate ~15%</text>
  <rect x="60" y="204" width="50" height="20" rx="4" fill="var(--gold)" opacity="0.3" stroke="var(--gold)" stroke-width="1"/>
  <text x="85" y="218" font-size="8" font-weight="600" text-anchor="middle">Butane + Other</text>

  <!-- Pump number explanation -->
  <rect x="270" y="135" width="200" height="100" rx="10" fill="var(--code-bg)" stroke="var(--border)" stroke-width="1"/>
  <text x="370" y="155" font-size="10" font-weight="800" text-anchor="middle">Pump Number</text>
  <text x="370" y="175" font-size="14" font-weight="900" text-anchor="middle" fill="var(--accent)">(RON + MON) / 2</text>
  <text x="370" y="195" font-size="8" text-anchor="middle" fill="var(--dim)">Regular: 87 | Mid: 89 | Premium: 93</text>
  <text x="370" y="210" font-size="8" text-anchor="middle" fill="var(--dim)">FTC compromise - not technically meaningful!</text>
  <text x="370" y="225" font-size="7" text-anchor="middle" fill="var(--dim)">RON = Research Octane, MON = Motor Octane</text>
</svg>`,

// ==================== CH XIII: Distillate Fuels ====================
13: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="18" font-size="12" font-weight="700" text-anchor="middle">Distillate Fuels: Diesel, Jet, Heating Oil</text>
  <!-- The irony diagram -->
  <rect x="30" y="40" width="200" height="60" rx="8" fill="var(--accent)" opacity="0.1" stroke="var(--accent)" stroke-width="1.5"/>
  <text x="130" y="58" font-size="10" font-weight="700" text-anchor="middle" fill="var(--accent)">Straight-chain Paraffins</text>
  <text x="130" y="75" font-size="9" text-anchor="middle" fill="var(--green)">HIGH Cetane → Great Diesel</text>
  <text x="130" y="90" font-size="9" text-anchor="middle" fill="var(--red)">LOW Octane → Bad Gasoline</text>

  <rect x="270" y="40" width="200" height="60" rx="8" fill="var(--pink)" opacity="0.1" stroke="var(--pink)" stroke-width="1.5"/>
  <text x="370" y="58" font-size="10" font-weight="700" text-anchor="middle" fill="var(--pink)">Aromatics</text>
  <text x="370" y="75" font-size="9" text-anchor="middle" fill="var(--green)">HIGH Octane → Great Gasoline</text>
  <text x="370" y="90" font-size="9" text-anchor="middle" fill="var(--red)">LOW Cetane → Bad Diesel</text>

  <text x="250" y="65" font-size="18" font-weight="900" fill="var(--dim)">vs</text>

  <!-- Fuel comparison -->
  <rect x="30" y="115" width="130" height="70" rx="8" fill="var(--gold)" opacity="0.1" stroke="var(--gold)" stroke-width="1"/>
  <text x="95" y="133" font-size="9" font-weight="700" text-anchor="middle" fill="var(--gold)">Diesel</text>
  <text x="95" y="148" font-size="8" text-anchor="middle" fill="var(--dim)">No spark plugs!</text>
  <text x="95" y="160" font-size="8" text-anchor="middle" fill="var(--dim)">Air compressed → hot</text>
  <text x="95" y="172" font-size="8" text-anchor="middle" fill="var(--dim)">Fuel self-ignites</text>

  <rect x="185" y="115" width="130" height="70" rx="8" fill="var(--cyan)" opacity="0.1" stroke="var(--cyan)" stroke-width="1"/>
  <text x="250" y="133" font-size="9" font-weight="700" text-anchor="middle" fill="var(--cyan)">Jet Fuel (Jet-A)</text>
  <text x="250" y="148" font-size="8" text-anchor="middle" fill="var(--dim)">Kerosene range</text>
  <text x="250" y="160" font-size="8" text-anchor="middle" fill="var(--dim)">Freeze pt &lt; -40°F</text>
  <text x="250" y="172" font-size="8" text-anchor="middle" fill="var(--red)">Critical at 35,000 ft!</text>

  <rect x="340" y="115" width="130" height="70" rx="8" fill="var(--dim)" opacity="0.1" stroke="var(--dim)" stroke-width="1"/>
  <text x="405" y="133" font-size="9" font-weight="700" text-anchor="middle">Heating Oil</text>
  <text x="405" y="148" font-size="8" text-anchor="middle" fill="var(--dim)">Same as diesel,</text>
  <text x="405" y="160" font-size="8" text-anchor="middle" fill="var(--dim)">but looser specs</text>
  <text x="405" y="172" font-size="8" text-anchor="middle" fill="var(--dim)">+ different tax</text>
</svg>`,

// ==================== CH XIV: Asphalt & Residual Fuel ====================
14: `<svg viewBox="0 0 500 190" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="18" font-size="12" font-weight="700" text-anchor="middle">Bottom of the Barrel: Residual Fuel &amp; Asphalt</text>
  <!-- Barrel diagram -->
  <rect x="30" y="35" width="80" height="140" rx="8" stroke="var(--dim)" stroke-width="2" fill="var(--code-bg)"/>
  <!-- Layers -->
  <rect x="32" y="37" width="76" height="25" rx="6" fill="var(--green)" opacity="0.2"/>
  <text x="70" y="53" font-size="7" font-weight="600" text-anchor="middle">Light products</text>
  <rect x="32" y="62" width="76" height="25" fill="var(--gold)" opacity="0.2"/>
  <text x="70" y="78" font-size="7" font-weight="600" text-anchor="middle">Middle distillates</text>
  <rect x="32" y="87" width="76" height="35" fill="var(--red)" opacity="0.2"/>
  <text x="70" y="108" font-size="7" font-weight="600" text-anchor="middle">Gas oil</text>
  <rect x="32" y="122" width="76" height="51" rx="6" fill="var(--dim)" opacity="0.3"/>
  <text x="70" y="145" font-size="8" font-weight="700" text-anchor="middle">RESIDUE</text>
  <text x="70" y="158" font-size="7" text-anchor="middle" fill="var(--dim)">800°F+</text>
  <!-- Arrows to products -->
  <path d="M114 140 L160 110" stroke="var(--dim)" stroke-width="1.5"/>
  <path d="M114 155 L160 165" stroke="var(--dim)" stroke-width="1.5"/>
  <!-- Residual fuel -->
  <rect x="165" y="85" width="150" height="55" rx="8" fill="var(--red)" opacity="0.1" stroke="var(--red)" stroke-width="1.5"/>
  <text x="240" y="103" font-size="10" font-weight="700" text-anchor="middle" fill="var(--red)">Residual Fuel Oil</text>
  <text x="240" y="118" font-size="8" text-anchor="middle" fill="var(--dim)">Ships, power plants, boilers</text>
  <text x="240" y="130" font-size="8" text-anchor="middle" fill="var(--dim)">+ Cutter stock to reduce viscosity</text>
  <!-- Asphalt -->
  <rect x="165" y="150" width="150" height="40" rx="8" fill="var(--dim)" opacity="0.15" stroke="var(--dim)" stroke-width="1.5"/>
  <text x="240" y="168" font-size="10" font-weight="700" text-anchor="middle">Asphalt</text>
  <text x="240" y="182" font-size="8" text-anchor="middle" fill="var(--dim)">Only from naphthenic crudes!</text>
  <!-- Viscosity note -->
  <rect x="340" y="85" width="145" height="100" rx="8" fill="var(--code-bg)" stroke="var(--border)" stroke-width="1"/>
  <text x="412" y="103" font-size="9" font-weight="700" text-anchor="middle">Viscosity is King</text>
  <text x="412" y="120" font-size="8" text-anchor="middle" fill="var(--dim)">Too thick → can't pump</text>
  <text x="412" y="133" font-size="8" text-anchor="middle" fill="var(--dim)">Too thick → can't spray</text>
  <text x="412" y="148" font-size="8" text-anchor="middle" fill="var(--gold)">Solution: blend in</text>
  <text x="412" y="160" font-size="8" text-anchor="middle" fill="var(--gold)">"cutter stock" (LCO)</text>
  <text x="412" y="175" font-size="7" text-anchor="middle" fill="var(--dim)">But LCO has better uses...</text>
</svg>`,

// ==================== CH XV: Hydrotreating & Sulfur ====================
15: `<svg viewBox="0 0 500 210" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="18" font-size="12" font-weight="700" text-anchor="middle">Hydrotreating &amp; Sulfur Recovery</text>
  <!-- Feed -->
  <rect x="20" y="50" width="90" height="50" rx="8" fill="var(--gold)" opacity="0.1" stroke="var(--gold)" stroke-width="1.5"/>
  <text x="65" y="72" font-size="9" font-weight="700" text-anchor="middle" fill="var(--gold)">Dirty Feed</text>
  <text x="65" y="88" font-size="7" text-anchor="middle" fill="var(--dim)">S, N, metals</text>
  <!-- H2 -->
  <rect x="20" y="110" width="90" height="30" rx="6" fill="var(--cyan)" opacity="0.12" stroke="var(--cyan)" stroke-width="1"/>
  <text x="65" y="129" font-size="8" font-weight="600" text-anchor="middle" fill="var(--cyan)">+ Hydrogen</text>
  <!-- Arrow -->
  <path d="M115 80 L165 80" stroke="var(--accent)" stroke-width="2" marker-end="url(#arr15)"/>
  <path d="M115 125 L165 100" stroke="var(--cyan)" stroke-width="1.5" stroke-dasharray="3,2"/>
  <defs><marker id="arr15" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="var(--accent)"/></marker></defs>
  <!-- Hydrotreater -->
  <rect x="170" y="55" width="100" height="70" rx="10" fill="var(--accent)" opacity="0.12" stroke="var(--accent)" stroke-width="2"/>
  <text x="220" y="78" font-size="10" font-weight="800" text-anchor="middle" fill="var(--accent)">HYDRO</text>
  <text x="220" y="92" font-size="10" font-weight="800" text-anchor="middle" fill="var(--accent)">TREATER</text>
  <text x="220" y="110" font-size="7" text-anchor="middle" fill="var(--dim)">Catalyst + H2</text>
  <!-- Clean product -->
  <path d="M275 75 L320 60" stroke="var(--green)" stroke-width="2"/>
  <rect x="325" y="40" width="100" height="40" rx="6" fill="var(--green)" opacity="0.1" stroke="var(--green)" stroke-width="1.5"/>
  <text x="375" y="58" font-size="9" font-weight="700" text-anchor="middle" fill="var(--green)">Clean Product</text>
  <text x="375" y="72" font-size="7" text-anchor="middle" fill="var(--dim)">S: 5000 → 15 ppm!</text>
  <!-- H2S out -->
  <path d="M275 100 L320 115" stroke="var(--red)" stroke-width="2"/>
  <rect x="325" y="95" width="100" height="40" rx="6" fill="var(--red)" opacity="0.1" stroke="var(--red)" stroke-width="1"/>
  <text x="375" y="113" font-size="9" font-weight="700" text-anchor="middle" fill="var(--red)">H2S Gas</text>
  <text x="375" y="127" font-size="7" text-anchor="middle" fill="var(--dim)">S joined with H</text>
  <!-- Arrow to Claus -->
  <path d="M430 115 L460 115" stroke="var(--red)" stroke-width="1.5" marker-end="url(#arr15)"/>
  <!-- Claus plant -->
  <rect x="170" y="150" width="280" height="50" rx="8" fill="var(--gold)" opacity="0.1" stroke="var(--gold)" stroke-width="1.5"/>
  <text x="310" y="170" font-size="10" font-weight="700" text-anchor="middle" fill="var(--gold)">Claus Plant: 2H2S + SO2 → 3S + 2H2O</text>
  <text x="310" y="188" font-size="8" text-anchor="middle" fill="var(--dim)">Pollution → solid yellow sulfur → sold as commodity (100+ tons/day)</text>
  <path d="M375 135 L310 150" stroke="var(--gold)" stroke-width="1.5"/>
</svg>`,

// ==================== CH XVI: Isomerization ====================
16: `<svg viewBox="0 0 500 180" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="18" font-size="12" font-weight="700" text-anchor="middle">Isomerization: Same Atoms, New Shape, Better Octane</text>
  <!-- n-pentane (straight) -->
  <rect x="20" y="45" width="170" height="55" rx="8" fill="var(--red)" opacity="0.1" stroke="var(--red)" stroke-width="1.5"/>
  <text x="105" y="62" font-size="10" font-weight="700" text-anchor="middle" fill="var(--red)">n-Pentane (straight chain)</text>
  <!-- Chain: C-C-C-C-C -->
  <circle cx="40" cy="82" r="5" fill="var(--red)" opacity="0.3"/><text x="40" y="85" font-size="6" font-weight="700" text-anchor="middle">C</text>
  <line x1="45" y1="82" x2="60" y2="82" stroke="var(--red)" stroke-width="1.5"/>
  <circle cx="65" cy="82" r="5" fill="var(--red)" opacity="0.3"/><text x="65" y="85" font-size="6" font-weight="700" text-anchor="middle">C</text>
  <line x1="70" y1="82" x2="85" y2="82" stroke="var(--red)" stroke-width="1.5"/>
  <circle cx="90" cy="82" r="5" fill="var(--red)" opacity="0.3"/><text x="90" y="85" font-size="6" font-weight="700" text-anchor="middle">C</text>
  <line x1="95" y1="82" x2="110" y2="82" stroke="var(--red)" stroke-width="1.5"/>
  <circle cx="115" cy="82" r="5" fill="var(--red)" opacity="0.3"/><text x="115" y="85" font-size="6" font-weight="700" text-anchor="middle">C</text>
  <line x1="120" y1="82" x2="135" y2="82" stroke="var(--red)" stroke-width="1.5"/>
  <circle cx="140" cy="82" r="5" fill="var(--red)" opacity="0.3"/><text x="140" y="85" font-size="6" font-weight="700" text-anchor="middle">C</text>
  <text x="165" y="85" font-size="10" font-weight="900" fill="var(--red)">62 RON</text>
  <!-- Arrow -->
  <path d="M195 75 L240 75" stroke="var(--accent)" stroke-width="3" marker-end="url(#arr16)"/>
  <defs><marker id="arr16" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="var(--accent)"/></marker></defs>
  <text x="218" y="68" font-size="7" font-weight="600" text-anchor="middle" fill="var(--accent)">Pt catalyst</text>
  <text x="218" y="90" font-size="7" text-anchor="middle" fill="var(--dim)">200-400°F</text>
  <!-- Isopentane (branched) -->
  <rect x="250" y="45" width="230" height="55" rx="8" fill="var(--green)" opacity="0.1" stroke="var(--green)" stroke-width="1.5"/>
  <text x="365" y="62" font-size="10" font-weight="700" text-anchor="middle" fill="var(--green)">Isopentane (branched)</text>
  <!-- Branched chain -->
  <circle cx="280" cy="82" r="5" fill="var(--green)" opacity="0.3"/><text x="280" y="85" font-size="6" font-weight="700" text-anchor="middle">C</text>
  <line x1="285" y1="82" x2="300" y2="82" stroke="var(--green)" stroke-width="1.5"/>
  <circle cx="305" cy="82" r="5" fill="var(--green)" opacity="0.3"/><text x="305" y="85" font-size="6" font-weight="700" text-anchor="middle">C</text>
  <line x1="310" y1="82" x2="325" y2="82" stroke="var(--green)" stroke-width="1.5"/>
  <circle cx="330" cy="82" r="5" fill="var(--green)" opacity="0.3"/><text x="330" y="85" font-size="6" font-weight="700" text-anchor="middle">C</text>
  <line x1="335" y1="82" x2="350" y2="82" stroke="var(--green)" stroke-width="1.5"/>
  <circle cx="355" cy="82" r="5" fill="var(--green)" opacity="0.3"/><text x="355" y="85" font-size="6" font-weight="700" text-anchor="middle">C</text>
  <!-- Branch -->
  <line x1="305" y1="77" x2="305" y2="65" stroke="var(--green)" stroke-width="1.5"/>
  <circle cx="305" cy="60" r="5" fill="var(--green)" opacity="0.3"/><text x="305" y="63" font-size="6" font-weight="700" text-anchor="middle">C</text>
  <text x="380" y="85" font-size="12" font-weight="900" fill="var(--green)">93 RON!</text>
  <!-- Both C5H12 -->
  <rect x="100" y="115" width="300" height="50" rx="8" fill="var(--code-bg)" stroke="var(--border)" stroke-width="1"/>
  <text x="250" y="135" font-size="10" font-weight="700" text-anchor="middle">Both are C5H12 — same formula!</text>
  <text x="250" y="152" font-size="9" text-anchor="middle" fill="var(--dim)">~60% conversion per pass. Unconverted n-pentane is separated and recycled.</text>
</svg>`,

// ==================== CH XVII: Aromatics Recovery ====================
17: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="18" font-size="12" font-weight="700" text-anchor="middle">BTX Aromatics: More Valuable as Chemicals</text>
  <!-- Reformate input -->
  <rect x="20" y="50" width="100" height="50" rx="8" fill="var(--accent)" opacity="0.1" stroke="var(--accent)" stroke-width="1.5"/>
  <text x="70" y="72" font-size="9" font-weight="700" text-anchor="middle" fill="var(--accent)">Reformate</text>
  <text x="70" y="86" font-size="7" text-anchor="middle" fill="var(--dim)">Rich in aromatics</text>
  <!-- Arrow -->
  <path d="M125 75 L165 75" stroke="var(--accent)" stroke-width="2" marker-end="url(#arr17)"/>
  <defs><marker id="arr17" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="var(--accent)"/></marker></defs>
  <text x="145" y="68" font-size="7" fill="var(--dim)" text-anchor="middle">Solvent</text>
  <!-- Three aromatic boxes -->
  <rect x="172" y="35" width="100" height="40" rx="6" fill="var(--pink)" opacity="0.12" stroke="var(--pink)" stroke-width="1.5"/>
  <polygon points="222,42 232,48 232,58 222,64 212,58 212,48" fill="none" stroke="var(--pink)" stroke-width="1.5"/>
  <text x="193" y="56" font-size="9" font-weight="700" fill="var(--pink)">B</text>
  <text x="222" y="72" font-size="7" text-anchor="middle" fill="var(--dim)">Benzene</text>

  <rect x="172" y="80" width="100" height="40" rx="6" fill="var(--cyan)" opacity="0.12" stroke="var(--cyan)" stroke-width="1.5"/>
  <polygon points="222,87 232,93 232,103 222,109 212,103 212,93" fill="none" stroke="var(--cyan)" stroke-width="1.5"/>
  <text x="193" y="101" font-size="9" font-weight="700" fill="var(--cyan)">T</text>
  <text x="222" y="117" font-size="7" text-anchor="middle" fill="var(--dim)">Toluene</text>

  <rect x="172" y="125" width="100" height="40" rx="6" fill="var(--gold)" opacity="0.12" stroke="var(--gold)" stroke-width="1.5"/>
  <polygon points="222,132 232,138 232,148 222,154 212,148 212,138" fill="none" stroke="var(--gold)" stroke-width="1.5"/>
  <text x="193" y="146" font-size="9" font-weight="700" fill="var(--gold)">X</text>
  <text x="222" y="162" font-size="7" text-anchor="middle" fill="var(--dim)">Xylene</text>

  <!-- Applications -->
  <path d="M277 55 L310 55" stroke="var(--pink)" stroke-width="1.5"/>
  <text x="315" y="50" font-size="8" fill="var(--pink)">→ Styrene, polystyrene</text>
  <text x="315" y="62" font-size="8" fill="var(--dim)">→ Nylon, phenol/epoxy</text>

  <path d="M277 100 L310 100" stroke="var(--cyan)" stroke-width="1.5"/>
  <text x="315" y="95" font-size="8" fill="var(--cyan)">→ Polyurethane</text>
  <text x="315" y="107" font-size="8" fill="var(--dim)">→ Solvents, TNT</text>

  <path d="M277 145 L310 145" stroke="var(--gold)" stroke-width="1.5"/>
  <text x="315" y="140" font-size="8" fill="var(--gold)">→ PET bottles, packaging</text>
  <text x="315" y="152" font-size="8" fill="var(--dim)">→ Polyester clothing</text>

  <!-- Economics note -->
  <rect x="70" y="175" width="360" height="22" rx="6" fill="var(--code-bg)" stroke="var(--border)" stroke-width="1"/>
  <text x="250" y="190" font-size="9" font-weight="600" text-anchor="middle" fill="var(--dim)">Chemical value often exceeds fuel value — extract when petrochemical margins are strong</text>
</svg>`,

// ==================== CH XVIII: Ethylene Plants ====================
18: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="18" font-size="12" font-weight="700" text-anchor="middle">Steam Cracking: Making Ethylene (C2H4)</text>
  <!-- Feed -->
  <rect x="20" y="55" width="90" height="55" rx="8" fill="var(--dim)" opacity="0.12" stroke="var(--dim)" stroke-width="1.5"/>
  <text x="65" y="75" font-size="9" font-weight="700" text-anchor="middle">Feed</text>
  <text x="65" y="88" font-size="7" text-anchor="middle" fill="var(--dim)">Ethane, naphtha,</text>
  <text x="65" y="98" font-size="7" text-anchor="middle" fill="var(--dim)">or gas oil</text>
  <!-- Steam -->
  <text x="65" y="120" font-size="8" text-anchor="middle" fill="var(--cyan)">+ Steam</text>
  <!-- Arrow to furnace -->
  <path d="M115 80 L155 80" stroke="var(--accent)" stroke-width="2" marker-end="url(#arr18)"/>
  <defs><marker id="arr18" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0,0 L10,5 L0,10" fill="var(--accent)"/></marker></defs>
  <!-- Furnace -->
  <rect x="160" y="45" width="90" height="75" rx="8" fill="var(--red)" opacity="0.15" stroke="var(--red)" stroke-width="2"/>
  <text x="205" y="68" font-size="10" font-weight="800" text-anchor="middle" fill="var(--red)">FURNACE</text>
  <text x="205" y="85" font-size="9" font-weight="700" text-anchor="middle" fill="var(--red)">1,500°F</text>
  <text x="205" y="100" font-size="8" text-anchor="middle" fill="var(--dim)">0.1-0.5 sec!</text>
  <text x="205" y="112" font-size="7" text-anchor="middle" fill="var(--dim)">Residence time</text>
  <!-- Quench -->
  <path d="M255 80 L290 80" stroke="var(--cyan)" stroke-width="3" marker-end="url(#arr18)"/>
  <text x="273" y="72" font-size="8" font-weight="700" text-anchor="middle" fill="var(--cyan)">QUENCH</text>
  <text x="273" y="95" font-size="7" text-anchor="middle" fill="var(--dim)">Instant cooling!</text>
  <!-- Products -->
  <rect x="300" y="35" width="180" height="115" rx="8" fill="var(--code-bg)" stroke="var(--border)" stroke-width="1"/>
  <text x="390" y="55" font-size="10" font-weight="700" text-anchor="middle">Products</text>
  <rect x="310" y="62" width="160" height="22" rx="4" fill="var(--green)" opacity="0.15"/>
  <text x="390" y="77" font-size="9" font-weight="700" text-anchor="middle" fill="var(--green)">Ethylene (C2H4) — #1 organic chemical</text>
  <text x="390" y="100" font-size="8" text-anchor="middle" fill="var(--dim)">+ Propylene, Butadiene</text>
  <text x="390" y="113" font-size="8" text-anchor="middle" fill="var(--dim)">+ Benzene, Toluene</text>
  <text x="390" y="128" font-size="7" text-anchor="middle" fill="var(--dim)">More co-products from heavier feeds</text>
  <text x="390" y="143" font-size="7" text-anchor="middle" fill="var(--dim)">US: mostly ethane feed (shale gas)</text>
  <!-- Bread analogy -->
  <rect x="80" y="155" width="340" height="35" rx="8" fill="var(--gold)" opacity="0.08" stroke="var(--gold)" stroke-width="1"/>
  <text x="250" y="170" font-size="9" font-weight="600" text-anchor="middle" fill="var(--gold)">Like pulling bread from the oven at exactly the right moment</text>
  <text x="250" y="183" font-size="8" text-anchor="middle" fill="var(--dim)">Too long → products keep reacting into heavy molecules and coke</text>
</svg>`,

// ==================== CH XIX: Simple & Complex Refineries ====================
19: `<svg viewBox="0 0 500 280" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="18" font-size="12" font-weight="700" text-anchor="middle">Simple vs. Complex Refinery</text>
  <!-- Simple refinery -->
  <rect x="15" y="30" width="220" height="180" rx="10" fill="var(--red)" opacity="0.05" stroke="var(--red)" stroke-width="1.5"/>
  <text x="125" y="48" font-size="10" font-weight="800" text-anchor="middle" fill="var(--red)">HYDROSKIMMING (Simple)</text>
  <text x="125" y="60" font-size="8" text-anchor="middle" fill="var(--dim)">Complexity ~2.5</text>
  <!-- Simple units -->
  <rect x="25" y="70" width="80" height="24" rx="4" fill="var(--accent)" opacity="0.1" stroke="var(--accent)" stroke-width="1"/>
  <text x="65" y="85" font-size="8" font-weight="600" text-anchor="middle">Crude Unit</text>
  <rect x="25" y="98" width="80" height="24" rx="4" fill="var(--green)" opacity="0.1" stroke="var(--green)" stroke-width="1"/>
  <text x="65" y="113" font-size="8" font-weight="600" text-anchor="middle">Gas Plant</text>
  <rect x="25" y="126" width="80" height="24" rx="4" fill="var(--pink)" opacity="0.1" stroke="var(--pink)" stroke-width="1"/>
  <text x="65" y="141" font-size="8" font-weight="600" text-anchor="middle">Reformer</text>
  <rect x="25" y="154" width="80" height="24" rx="4" fill="var(--cyan)" opacity="0.1" stroke="var(--cyan)" stroke-width="1"/>
  <text x="65" y="169" font-size="8" font-weight="600" text-anchor="middle">Hydrotreaters</text>
  <!-- Products (simple) -->
  <rect x="120" y="85" width="105" height="95" rx="6" fill="var(--code-bg)" stroke="var(--border)" stroke-width="1"/>
  <text x="172" y="100" font-size="8" font-weight="600" text-anchor="middle">Products</text>
  <text x="172" y="115" font-size="7" text-anchor="middle" fill="var(--green)">Gas, Naphtha</text>
  <text x="172" y="128" font-size="7" text-anchor="middle" fill="var(--gold)">Kerosene, Diesel</text>
  <text x="172" y="145" font-size="10" font-weight="700" text-anchor="middle" fill="var(--red)">40-50% Resid!</text>
  <text x="172" y="158" font-size="7" text-anchor="middle" fill="var(--dim)">(low value)</text>
  <text x="125" y="200" font-size="8" text-anchor="middle" fill="var(--red)">Can't convert heavy → light</text>

  <!-- Complex refinery -->
  <rect x="260" y="30" width="230" height="180" rx="10" fill="var(--green)" opacity="0.05" stroke="var(--green)" stroke-width="1.5"/>
  <text x="375" y="48" font-size="10" font-weight="800" text-anchor="middle" fill="var(--green)">CONVERSION (Complex)</text>
  <text x="375" y="60" font-size="8" text-anchor="middle" fill="var(--dim)">Complexity 8-14+</text>
  <!-- Complex units -->
  <rect x="270" y="70" width="70" height="20" rx="3" fill="var(--accent)" opacity="0.1" stroke="var(--accent)" stroke-width="1"/>
  <text x="305" y="83" font-size="7" font-weight="600" text-anchor="middle">CDU</text>
  <rect x="345" y="70" width="70" height="20" rx="3" fill="var(--gold)" opacity="0.1" stroke="var(--gold)" stroke-width="1"/>
  <text x="380" y="83" font-size="7" font-weight="600" text-anchor="middle">Flasher</text>
  <rect x="420" y="70" width="65" height="20" rx="3" fill="var(--red)" opacity="0.1" stroke="var(--red)" stroke-width="1"/>
  <text x="452" y="83" font-size="7" font-weight="600" text-anchor="middle">FCC</text>
  <rect x="270" y="95" width="70" height="20" rx="3" fill="var(--cyan)" opacity="0.1" stroke="var(--cyan)" stroke-width="1"/>
  <text x="305" y="108" font-size="7" font-weight="600" text-anchor="middle">Hydrocracker</text>
  <rect x="345" y="95" width="70" height="20" rx="3" fill="var(--green)" opacity="0.1" stroke="var(--green)" stroke-width="1"/>
  <text x="380" y="108" font-size="7" font-weight="600" text-anchor="middle">Alky Unit</text>
  <rect x="420" y="95" width="65" height="20" rx="3" fill="var(--dim)" opacity="0.15" stroke="var(--dim)" stroke-width="1"/>
  <text x="452" y="108" font-size="7" font-weight="600" text-anchor="middle">Coker</text>
  <rect x="270" y="120" width="70" height="20" rx="3" fill="var(--pink)" opacity="0.1" stroke="var(--pink)" stroke-width="1"/>
  <text x="305" y="133" font-size="7" font-weight="600" text-anchor="middle">Reformer</text>
  <rect x="345" y="120" width="140" height="20" rx="3" fill="var(--cyan)" opacity="0.08" stroke="var(--cyan)" stroke-width="1"/>
  <text x="415" y="133" font-size="7" font-weight="600" text-anchor="middle">Hydrotreaters</text>
  <!-- Products (complex) -->
  <rect x="280" y="148" width="195" height="55" rx="6" fill="var(--code-bg)" stroke="var(--border)" stroke-width="1"/>
  <text x="377" y="163" font-size="8" font-weight="600" text-anchor="middle">Products</text>
  <text x="377" y="178" font-size="8" text-anchor="middle" fill="var(--green)">80-90% Gasoline + Diesel + Jet</text>
  <text x="377" y="193" font-size="8" text-anchor="middle" fill="var(--dim)">Only 5-10% Resid!</text>

  <!-- Economics -->
  <rect x="45" y="225" width="410" height="48" rx="8" fill="var(--gold)" opacity="0.08" stroke="var(--gold)" stroke-width="1.5"/>
  <text x="250" y="243" font-size="10" font-weight="700" text-anchor="middle" fill="var(--gold)">Why Complexity = Profitability</text>
  <text x="250" y="260" font-size="8" text-anchor="middle" fill="var(--dim)">Buy heavy sour crude at $5-15/bbl discount → produce same premium products. On 200k bbl/day = $1-3M/day savings!</text>
</svg>`,

// ==================== CH XX: Crude Oil, Condensate & NGL ====================
20: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="18" font-size="12" font-weight="700" text-anchor="middle">Crude Oil, Condensate &amp; NGL: Three Different Liquids</text>
  <!-- Crude oil -->
  <rect x="15" y="40" width="145" height="90" rx="10" fill="var(--accent)" opacity="0.1" stroke="var(--accent)" stroke-width="1.5"/>
  <text x="87" y="58" font-size="10" font-weight="800" text-anchor="middle" fill="var(--accent)">Crude Oil</text>
  <text x="87" y="74" font-size="8" text-anchor="middle" fill="var(--dim)">From oil wells</text>
  <text x="87" y="88" font-size="8" text-anchor="middle" fill="var(--dim)">18-45°API range</text>
  <text x="87" y="102" font-size="8" text-anchor="middle" fill="var(--dim)">Full barrel of products</text>
  <text x="87" y="116" font-size="8" text-anchor="middle" fill="var(--dim)">Light, medium, heavy</text>
  <!-- Condensate -->
  <rect x="175" y="40" width="145" height="90" rx="10" fill="var(--cyan)" opacity="0.1" stroke="var(--cyan)" stroke-width="1.5"/>
  <text x="247" y="58" font-size="10" font-weight="800" text-anchor="middle" fill="var(--cyan)">Condensate</text>
  <text x="247" y="74" font-size="8" text-anchor="middle" fill="var(--dim)">From gas wells</text>
  <text x="247" y="88" font-size="8" text-anchor="middle" fill="var(--dim)">50-60°+ API (very light)</text>
  <text x="247" y="102" font-size="8" text-anchor="middle" fill="var(--dim)">Mostly gasoline/naphtha</text>
  <text x="247" y="116" font-size="8" text-anchor="middle" fill="var(--dim)">Condensed from nat. gas</text>
  <!-- NGL -->
  <rect x="335" y="40" width="150" height="90" rx="10" fill="var(--gold)" opacity="0.1" stroke="var(--gold)" stroke-width="1.5"/>
  <text x="410" y="58" font-size="10" font-weight="800" text-anchor="middle" fill="var(--gold)">NGL</text>
  <text x="410" y="74" font-size="8" text-anchor="middle" fill="var(--dim)">From gas plants</text>
  <text x="410" y="88" font-size="8" text-anchor="middle" fill="var(--dim)">Ethane, propane, butanes</text>
  <text x="410" y="102" font-size="8" text-anchor="middle" fill="var(--dim)">+ natural gasoline</text>
  <text x="410" y="116" font-size="8" text-anchor="middle" fill="var(--dim)">Extracted from gas stream</text>
  <!-- Pricing section -->
  <rect x="30" y="145" width="440" height="48" rx="8" fill="var(--code-bg)" stroke="var(--border)" stroke-width="1"/>
  <text x="250" y="163" font-size="9" font-weight="700" text-anchor="middle">Crude Pricing: Quality = Value</text>
  <text x="100" y="180" font-size="8" text-anchor="middle" fill="var(--green)">Light Sweet</text>
  <text x="100" y="190" font-size="7" text-anchor="middle" fill="var(--dim)">Premium ($$$)</text>
  <text x="250" y="180" font-size="8" text-anchor="middle" fill="var(--gold)">Benchmarks: WTI, Brent, Dubai</text>
  <text x="400" y="180" font-size="8" text-anchor="middle" fill="var(--red)">Heavy Sour</text>
  <text x="400" y="190" font-size="7" text-anchor="middle" fill="var(--dim)">Discount ($5-15 less)</text>
  <path d="M140 180 L360 180" stroke="var(--dim)" stroke-width="1" stroke-dasharray="3,3"/>
</svg>`,

// ==================== CH XXI: Fuel Values & Heating Values ====================
21: `<svg viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" fill="none">
  <style>text{font-family:Inter,sans-serif;fill:var(--text)}</style>
  <text x="250" y="18" font-size="12" font-weight="700" text-anchor="middle">Energy Content: BTU per Gallon</text>
  <text x="250" y="32" font-size="8" fill="var(--dim)" text-anchor="middle">1 BTU = energy to heat 1 lb of water by 1°F</text>
  <!-- Bar chart -->
  <text x="105" y="55" font-size="8" text-anchor="end" fill="var(--dim)">Natural Gas</text>
  <rect x="110" y="44" width="40" height="16" rx="3" fill="var(--dim)" opacity="0.3"/>
  <text x="155" y="55" font-size="7" fill="var(--dim)">~1,000 BTU/cf</text>

  <text x="105" y="80" font-size="8" text-anchor="end" fill="var(--green)">Gasoline</text>
  <rect x="110" y="69" width="250" height="16" rx="3" fill="var(--green)" opacity="0.3"/>
  <text x="365" y="80" font-size="8" font-weight="600" fill="var(--green)">~125,000 BTU/gal</text>

  <text x="105" y="105" font-size="8" text-anchor="end" fill="var(--gold)">Diesel</text>
  <rect x="110" y="94" width="280" height="16" rx="3" fill="var(--gold)" opacity="0.3"/>
  <text x="395" y="105" font-size="8" font-weight="600" fill="var(--gold)">~140,000 BTU/gal</text>

  <text x="105" y="130" font-size="8" text-anchor="end" fill="var(--red)">Resid Fuel</text>
  <rect x="110" y="119" width="300" height="16" rx="3" fill="var(--red)" opacity="0.3"/>
  <text x="415" y="130" font-size="8" font-weight="600" fill="var(--red)">~150,000 BTU/gal</text>

  <!-- Key insight -->
  <rect x="60" y="150" width="380" height="45" rx="8" fill="var(--code-bg)" stroke="var(--border)" stroke-width="1"/>
  <text x="250" y="168" font-size="9" font-weight="700" text-anchor="middle">Heavier fuels = more BTU/gallon (denser = more mass)</text>
  <text x="250" y="183" font-size="8" text-anchor="middle" fill="var(--dim)">Diesel is ~12% more energy per gallon than gasoline → partly explains better fuel economy</text>
  <text x="250" y="195" font-size="8" text-anchor="middle" fill="var(--gold)">True cost comparison: $/million BTU (not $/gallon)</text>
</svg>`

};
