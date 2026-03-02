import './App.css';
import { Banner } from './components/Banner/banner.componet';
import { Navigation } from './components/Navigation/navigation.component';
import "bootstrap/dist/css/bootstrap.min.css";
import { Skills } from './components/Skills/skills.component';
import { Projects } from './components/Projects/projects.component';
import { Contact } from './components/Contact/contact.component';
import { Footer } from './components/Footer/footer.component';

/*
  WAVE TRANSITION
  ───────────────
  The wave uses a vertical linearGradient fill so the body of
  the wave blends from the "from" section colour (top) to the
  "to" section colour (bottom).  This makes the boundary look
  like the two backgrounds are flowing into each other rather
  than a hard cut.

  Three SVG layers:
    1. Gradient-filled back wave  (slightly offset, 60% opacity)
    2. Gradient-filled front wave (solid fill using gradient)
    3. Glowing stroke line on the crest
*/
const Wave = ({
  from = '#050913',
  to = '#0d1427',
  flip = false,
  glowColor = '#6c63ff',
  id = 'w',
}) => (
  <div
    className="wave-divider"
    style={{ background: from, transform: flip ? 'scaleX(-1)' : undefined }}
  >
    <svg
      viewBox="0 0 1440 120"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      style={{ display: 'block', width: '100%', height: '120px' }}
    >
      <defs>
        {/* Vertical gradient: from = section above (top of wave),
                               to   = section below (floor of wave)   */}
        <linearGradient id={`vg-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={from} stopOpacity="1" />
          <stop offset="100%" stopColor={to} stopOpacity="1" />
        </linearGradient>

        {/* Horizontal glow gradient that fades at both edges */}
        <linearGradient id={`hg-${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={glowColor} stopOpacity="0" />
          <stop offset="20%" stopColor={glowColor} stopOpacity="1" />
          <stop offset="80%" stopColor={glowColor} stopOpacity="1" />
          <stop offset="100%" stopColor={glowColor} stopOpacity="0" />
        </linearGradient>

        {/* Blur filter for the glowing crest line */}
        <filter id={`blur-${id}`} x="-20%" y="-300%" width="140%" height="700%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
        </filter>
      </defs>

      {/* ── Layer 1: back wave — drifts slowly, gradient fill ── */}
      <path
        className="wave-layer-back"
        d="M0,65 C200,110 400,15 600,65 C800,115 1050,8 1250,58 C1340,80 1400,95 1440,80 L1440,120 L0,120 Z"
        fill={`url(#vg-${id})`}
        fillOpacity="0.55"
      />

      {/* ── Layer 2: front wave — sharp gradient fill ── */}
      <path
        d="M0,70 C240,120 480,10 720,70 C960,120 1200,10 1440,70 L1440,120 L0,120 Z"
        fill={`url(#vg-${id})`}
      />

      {/* ── Layer 3a: blurred glow duplicate ── */}
      <path
        d="M0,70 C240,120 480,10 720,70 C960,120 1200,10 1440,70"
        fill="none"
        stroke={glowColor}
        strokeWidth="4"
        strokeOpacity="0.5"
        filter={`url(#blur-${id})`}
      />

      {/* ── Layer 3b: sharp crest line ── */}
      <path
        d="M0,70 C240,120 480,10 720,70 C960,120 1200,10 1440,70"
        fill="none"
        stroke={`url(#hg-${id})`}
        strokeWidth="2"
      />
    </svg>
  </div>
);

function App() {
  return (
    <div className="App">
      <Navigation />

      <Banner />
      <Wave from="#050913" to="#0d1427" glowColor="#6c63ff" id="w1" />

      <Skills />
      <Wave from="#0d1427" to="#050913" glowColor="#f857a6" id="w2" flip />

      <Projects />
      {/* Projects → Contact: glow in indigo, blends into the purple contact bg */}
      <Wave from="#050913" to="#0f0b35" glowColor="#6c63ff" id="w3" />

      <Contact />
      <Wave from="#0f0b35" to="#0d1427" glowColor="#f857a6" id="w4" />

      <Footer />
    </div>
  );
}

export default App;
