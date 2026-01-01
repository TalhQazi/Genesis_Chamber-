import { motion } from 'framer-motion';
import { Waves, Trees, Droplets, Activity, Shield, Wind } from 'lucide-react';

const modules = [
  {
    id: 'salt-serenity',
    icon: Droplets,
    title: 'Salt Serenity™ (Targeted Halotherapy)',
    description:
      'Controlled salt micro‑particles support respiratory defence rather than a generic “salt room” effect.',
    bullets: [
      'Precisely metered dry salt concentration inside the chamber envelope',
      'Particle size tuned for upper airway contact without heavy fogging',
      'Designed to support mucosal immunity and airway hygiene',
    ],
  },
  {
    id: 'forest-immersion',
    icon: Trees,
    title: 'Forest Immersion™ (Phytoncide Environment)',
    description:
      'Forest‑derived volatile compounds create an immune‑supportive atmosphere similar to deep forest exposure.',
    bullets: [
      'Curated phytoncide profile inspired by natural forest chemistry',
      'Positioned to support natural killer (NK) cell activity',
      'Works together with breathing guidance and light input',
    ],
  },
  {
    id: 'aromatic-modulation',
    icon: Waves,
    title: 'Aromatic Modulation System',
    description:
      'Essential oils are delivered as a three‑stage protocol instead of a single scent in the air.',
    bullets: [
      'In‑session profile matched to desired nervous system state',
      'Post‑session profile supports consolidation and calm landing',
      'Custom blends for sleep, stress load and immune support',
    ],
  },
  {
    id: 'vibration-system',
    icon: Activity,
    title: 'Vibroacoustic & Vibration System',
    description:
      'Integrated vibration plates and vibroacoustic patterns provide whole‑body mechanical signalling.',
    bullets: [
      'Low‑frequency patterns to influence nervous system regulation',
      'Waveforms aimed at lymphatic and microcirculatory support',
      'Timed to phases rather than running constantly in the background',
    ],
  },
  {
    id: 'immune-optimization',
    icon: Shield,
    title: 'Immune Optimization Stack',
    description:
      'Salt Serenity™, Forest Immersion™, light and temperature modules are scheduled together as one immune‑focused layer.',
    bullets: [
      'Combines multiple inputs into one coherent immune‑support window',
      'Avoids over‑stimulation by spreading load across coordinated modules',
      'Designed as a repeatable protocol rather than a one‑off experience',
    ],
  },
  {
    id: 'cellular-resilience',
    icon: Wind,
    title: 'Cellular Resilience Conditioning (IHHT)',
    description:
      'Intermittent hypoxia–hyperoxia conditioning trains how cells use oxygen, adapt to stress and support immune readiness.',
    bullets: [
      'Controlled low and high oxygen cycles without hyperbaric pressure',
      'Supports mitochondrial efficiency and adaptive resilience',
      'Positioned as biological conditioning, not medical treatment',
    ],
  },
];

const ModulesSection = () => {
  return (
    <section id="modules" className="genesis-section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-genesis-gold/5 to-background pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-genesis-gold font-medium mb-4 block">Named Biological Modules</span>
          <h2 className="genesis-heading mb-6">
            Beyond Single Therapy
            <span className="block genesis-gradient-text">A 16+ Module Platform</span>
          </h2>
          <p className="genesis-subheading mx-auto">
            Genesis Chamber™ is built as a modular biological system. If a module matters to the
            outcome, it is defined, named and scheduled – not hidden as background ambience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <motion.article
                key={module.id}
                id={module.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="genesis-card p-6 lg:p-8 flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-genesis-gold/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-genesis-gold" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 font-serif">
                  {module.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {module.description}
                </p>
                <ul className="space-y-2 mt-auto">
                  {module.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs md:text-sm text-foreground/80">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-genesis-gold" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;
