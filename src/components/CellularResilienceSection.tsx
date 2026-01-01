import { motion } from 'framer-motion';
import { Activity, Wind, Shield } from 'lucide-react';

const CellularResilienceSection = () => {
  return (
    <section id="cellular-resilience" className="genesis-section bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-genesis-teal/10 via-card to-background pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-genesis-gold font-medium mb-4 block">Cellular Resilience Conditioning</span>
          <h2 className="genesis-heading mb-6">
            Intermittent Hypoxia–Hyperoxia
            <span className="block genesis-gradient-text">for Cellular Efficiency</span>
          </h2>
          <p className="genesis-subheading mx-auto">
            The Genesis Chamber® now integrates Intermittent Hypoxia–Hyperoxia Conditioning (IHHT) as a
            premium performance module to train cellular efficiency, immune responsiveness and
            mitochondrial output.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {/* How It Works */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="genesis-card p-6 lg:p-8 h-full flex flex-col"
          >
            <div className="w-12 h-12 rounded-xl bg-genesis-gold/10 flex items-center justify-center mb-4">
              <Wind className="w-6 h-6 text-genesis-gold" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 font-serif">How It Works</h3>
            <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
              IHHT exposes the body to carefully controlled cycles of reduced and elevated oxygen
              levels. These cycles activate internal adaptation pathways that enhance cellular energy
              efficiency and immune system readiness — without drugs, injections or invasive
              procedures.
            </p>
          </motion.article>

          {/* Why Oxygen Cycling Matters */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="genesis-card p-6 lg:p-8 h-full flex flex-col"
          >
            <div className="w-12 h-12 rounded-xl bg-genesis-gold/10 flex items-center justify-center mb-4">
              <Activity className="w-6 h-6 text-genesis-gold" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 font-serif">Why Oxygen Cycling Matters</h3>
            <ul className="space-y-2 text-xs md:text-sm text-foreground/80">
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-genesis-gold" />
                <span>Stimulates mitochondrial biogenesis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-genesis-gold" />
                <span>Enhances cellular oxygen utilization</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-genesis-gold" />
                <span>Improves immune cell functional readiness</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-genesis-gold" />
                <span>Triggers adaptive resilience pathways naturally</span>
              </li>
            </ul>
          </motion.article>

          {/* Safety & Positioning */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="genesis-card p-6 lg:p-8 h-full flex flex-col"
          >
            <div className="w-12 h-12 rounded-xl bg-genesis-gold/10 flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-genesis-gold" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 font-serif">Designed for Safety & Precision</h3>
            <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
              Unlike hyperbaric systems, the Genesis Chamber® operates entirely under normal
              atmospheric pressure. Oxygen levels are continuously monitored and adjusted in real time
              using closed-loop safety controls.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This is not a medical treatment. It is biological conditioning — designed to help the
              body operate more efficiently, recover more effectively and adapt more intelligently
              over time.
            </p>
          </motion.article>
        </div>
      </div>
    </section>
  );
};

export default CellularResilienceSection;
