import { motion } from 'framer-motion';
import { Cpu, Activity, BarChart3 } from 'lucide-react';

const AdaptiveIntelligenceSection = () => {
  return (
    <section id="intelligence" className="genesis-section bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-genesis-teal/10 via-card to-genesis-gold/10 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-genesis-gold font-medium mb-4 block">Software & Intelligence Layer</span>
          <h2 className="genesis-heading mb-6">
            Adaptive Session
            <span className="block genesis-gradient-text">Engine & Biometric Design</span>
          </h2>
          <p className="genesis-subheading mx-auto">
            Genesis Chamber™ behaves like a biological operating system. Sessions are goal‑based,
            phase‑based and designed to integrate biometric data today and deeper intelligence
            features in the future.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="genesis-card p-6 lg:p-8"
          >
            <div className="w-12 h-12 rounded-xl bg-genesis-gold/10 flex items-center justify-center mb-4">
              <Cpu className="w-6 h-6 text-genesis-gold" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-3 font-serif">Adaptive Session Engine</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Sessions are built around clear outcomes such as recovery, immune support or deep
              reset. Each phase, module and timing window is configured to serve that goal instead
              of running everything at once.
            </p>
            <ul className="space-y-2 text-xs md:text-sm text-foreground/80">
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-genesis-gold" />
                <span>Goal‑based templates for foundation, optimal and advanced protocols</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-genesis-gold" />
                <span>Phase‑aware control so inputs change as the session progresses</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-genesis-gold" />
                <span>Ready for future AI tools without requiring cloud dependence</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="genesis-card p-6 lg:p-8"
          >
            <div className="w-12 h-12 rounded-xl bg-genesis-gold/10 flex items-center justify-center mb-4">
              <Activity className="w-6 h-6 text-genesis-gold" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-3 font-serif">Biometric Layer (Designed)</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              The architecture is built to integrate real‑time biometric inputs so the chamber can
              respond to the person, not just the clock.
            </p>
            <ul className="space-y-2 text-xs md:text-sm text-foreground/80">
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-genesis-gold" />
                <span>Heart rate and HRV trends to understand load vs recovery</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-genesis-gold" />
                <span>Breathing rhythm, respiratory rate and oxygen saturation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-genesis-gold" />
                <span>Session history designed for pattern recognition over time</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="genesis-card p-6 lg:p-8"
          >
            <div className="w-12 h-12 rounded-xl bg-genesis-gold/10 flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-genesis-gold" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-3 font-serif">From Room to Platform</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Genesis is positioned as a platform that can grow. Software updates, new modules and
              data features can be layered on without replacing the core hardware shell.
            </p>
            <ul className="space-y-2 text-xs md:text-sm text-foreground/80">
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-genesis-gold" />
                <span>Modular control layer prepared for additional hardware inputs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-genesis-gold" />
                <span>Clear upgrade path without replacing the whole chamber</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-genesis-gold" />
                <span>Positions Genesis as an intelligent biological system, not a static room</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdaptiveIntelligenceSection;
