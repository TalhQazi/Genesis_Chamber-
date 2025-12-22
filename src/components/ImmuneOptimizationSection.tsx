import { motion } from 'framer-motion';
import { Shield, Droplets, Trees, SunMedium } from 'lucide-react';

const ImmuneOptimizationSection = () => {
  return (
    <section id="immune" className="genesis-section bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-genesis-gold/10 via-card to-background pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-genesis-gold font-medium mb-4 block">Immune Optimization Layer</span>
          <h2 className="genesis-heading mb-6">
            How Genesis Builds
            <span className="block genesis-gradient-text">an Immune-Focused Environment</span>
          </h2>
          <p className="genesis-subheading mx-auto">
            Immune optimization is not a side-effect of a relaxing room. It is a deliberate stack of
            modules that run together inside a controlled, phase-based session.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {/* Salt Serenity */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="genesis-card p-6 lg:p-8 h-full flex flex-col"
          >
            <div className="w-12 h-12 rounded-xl bg-genesis-gold/10 flex items-center justify-center mb-4">
              <Droplets className="w-6 h-6 text-genesis-gold" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 font-serif">
              Salt Serenity™ vs. Generic Salt Rooms
            </h3>
            <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
              Salt Serenity™ is targeted halotherapy inside the Genesis environment. Dry salt
              concentration, particle size and exposure window are tuned for respiratory defence,
              not just ambience.
            </p>
            <ul className="space-y-2 text-xs md:text-sm text-foreground/80 mt-auto">
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-genesis-gold" />
                <span>Runs in a specific phase rather than all session long</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-genesis-gold" />
                <span>Designed for biological signalling, not a simple “salt room” experience</span>
              </li>
            </ul>
          </motion.article>

          {/* Forest Immersion */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="genesis-card p-6 lg:p-8 h-full flex flex-col"
          >
            <div className="w-12 h-12 rounded-xl bg-genesis-gold/10 flex items-center justify-center mb-4">
              <Trees className="w-6 h-6 text-genesis-gold" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 font-serif">
              Forest Immersion™ vs. Aromatherapy
            </h3>
            <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
              Aromatherapy is mainly about pleasant scent. Forest Immersion™ focuses on forest
              compounds (phytoncides) linked to immune and nervous system effects in research on
              forest bathing.
            </p>
            <ul className="space-y-2 text-xs md:text-sm text-foreground/80 mt-auto">
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-genesis-gold" />
                <span>Formulated as an immune-supportive environment, not just fragrance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-genesis-gold" />
                <span>Timed with breathing guidance and light to create coherent signalling</span>
              </li>
            </ul>
          </motion.article>

          {/* Red / Near-IR Light */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="genesis-card p-6 lg:p-8 h-full flex flex-col"
          >
            <div className="w-12 h-12 rounded-xl bg-genesis-gold/10 flex items-center justify-center mb-4">
              <SunMedium className="w-6 h-6 text-genesis-gold" />
            </div>
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 font-serif">
              Red & Near-IR Photobiomodulation
            </h3>
            <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
              Multi-wavelength red and near-infrared light are used in a defined window of each
              session to support mitochondrial function and cellular repair.
            </p>
            <ul className="space-y-2 text-xs md:text-sm text-foreground/80 mt-auto">
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-genesis-gold" />
                <span>Delivered as part of the immune & cellular optimization phase</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-genesis-gold" />
                <span>Integrated with environment controls instead of acting alone</span>
              </li>
            </ul>
          </motion.article>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto text-center text-sm md:text-base text-muted-foreground"
        >
          <p>
            Immune Optimization in Genesis is a visible, named layer of the system. It is not a
            side-effect of relaxing music or a generic room. Salt Serenity™, Forest Immersion™ and
            photobiomodulation are scheduled to work together as one coordinated immune window.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ImmuneOptimizationSection;
