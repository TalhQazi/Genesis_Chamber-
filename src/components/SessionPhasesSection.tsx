import { motion } from 'framer-motion';

const phases = [
  {
    id: 'phase-1',
    label: 'Phase 1',
    title: 'Pre-Session Priming',
    description:
      'Light, sound and breathing guidance gradually shift the nervous system from alert mode into a calm, receptive state before any strong input begins.',
    bullets: [
      'Ambient light gently dims instead of sudden darkness',
      'Soundscape moves from external noise to controlled calm audio',
      'Guided breathing establishes slower, deeper respiratory rhythm',
    ],
  },
  {
    id: 'phase-2',
    label: 'Phase 2',
    title: 'Active Multisensory Modulation',
    description:
      'Core modules engage in a planned sequence – light, sound, vibration and atmosphere – to deliver targeted biological signaling instead of random stimulation.',
    bullets: [
      'Photobiomodulation and NIR light follow structured dosing windows',
      'Vibroacoustic and frequency patterns guide nervous system state',
      'Temperature and atmosphere adjust in controlled ranges',
    ],
  },
  {
    id: 'phase-3',
    label: 'Phase 3',
    title: 'Immune & Cellular Optimization',
    description:
      'Salt Serenity™, Forest Immersion™ and red / near‑IR light stack together during the peak response window to support immune activity and cellular repair.',
    bullets: [
      'Controlled salt micro‑particles support respiratory defence',
      'Forest compound exposure (phytoncides) supports NK cell activity',
      'Red and near‑IR light focus on mitochondrial and tissue recovery',
    ],
  },
  {
    id: 'phase-4',
    label: 'Phase 4',
    title: 'Post-Session Consolidation',
    description:
      'The session does not end abruptly. Light, sound and aromatic cues are slowly normalised so the nervous system can consolidate the biological work that was done.',
    bullets: [
      'Lighting returns to baseline in soft steps, not a hard switch',
      'Audio curve tapers down instead of cutting out mid‑state',
      'Post‑session essential oil profile supports calm integration',
    ],
  },
];

const SessionPhasesSection = () => {
  return (
    <section id="phases" className="genesis-section bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-genesis-gold/10 via-card to-background pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-genesis-gold font-medium mb-4 block">Phase-Based Architecture</span>
          <h2 className="genesis-heading mb-6">
            Every Session Follows
            <span className="block genesis-gradient-text">Four Structured Phases</span>
          </h2>
          <p className="genesis-subheading mx-auto">
            Genesis Chamber™ is not a single burst of stimulation. It is a planned, phase‑based
            biological optimization sequence where each step prepares the next.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="genesis-card p-6 flex flex-col h-full"
            >
              <div className="text-sm font-semibold text-genesis-gold mb-2">{phase.label}</div>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 font-serif">
                {phase.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {phase.description}
              </p>
              <ul className="space-y-2 mt-auto">
                {phase.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs md:text-sm text-foreground/80">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-genesis-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-sm md:text-base text-muted-foreground text-center max-w-3xl mx-auto"
        >
          Most systems lose impact because they treat sessions as a single on/off event. Genesis
          Chamber™ is designed so each phase builds on the last, reducing shock and increasing
          meaningful biological effect. Every session follows this four-phase sequence. No
          exceptions.
        </motion.p>
      </div>
    </section>
  );
};

export default SessionPhasesSection;
