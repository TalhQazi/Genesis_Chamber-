import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const comparisons = [
  {
    feature: 'Multi-wavelength PBM',
    genesis: true,
    sauna: false,
    cryotherapy: false,
    floatTank: false,
  },
  {
    feature: 'Deep NIR Penetration',
    genesis: true,
    sauna: false,
    cryotherapy: false,
    floatTank: false,
  },
  {
    feature: 'Thermal Cycling',
    genesis: true,
    sauna: 'Heat only',
    cryotherapy: 'Cold only',
    floatTank: false,
  },
  {
    feature: 'Oxygenation Control',
    genesis: true,
    sauna: false,
    cryotherapy: false,
    floatTank: false,
  },
  {
    feature: 'Frequency Entrainment',
    genesis: true,
    sauna: false,
    cryotherapy: false,
    floatTank: false,
  },
  {
    feature: '360° EMF Shielding',
    genesis: true,
    sauna: false,
    cryotherapy: false,
    floatTank: false,
  },
  {
    feature: 'Real-time Biometrics',
    genesis: true,
    sauna: false,
    cryotherapy: false,
    floatTank: false,
  },
  {
    feature: 'AI-Powered Optimization',
    genesis: true,
    sauna: false,
    cryotherapy: false,
    floatTank: false,
  },
];

const ComparisonSection = () => {
  const renderValue = (value: boolean | string) => {
    if (value === true) {
      return (
        <div className="w-6 h-6 rounded-full bg-genesis-gold/20 flex items-center justify-center mx-auto">
          <Check className="w-4 h-4 text-genesis-gold" />
        </div>
      );
    }
    if (value === false) {
      return (
        <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center mx-auto">
          <X className="w-4 h-4 text-muted-foreground" />
        </div>
      );
    }
    return <span className="text-sm text-muted-foreground">{value}</span>;
  };

  return (
    <section className="genesis-section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-genesis-gold/3 to-background pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-genesis-gold font-medium mb-4 block">Why Genesis Chamber™</span>
          <h2 className="genesis-heading mb-6">
            Stacked Biological
            <span className="block genesis-gradient-text">Platform Comparison</span>
          </h2>
          <p className="genesis-subheading mx-auto">
            See how the Genesis Chamber™ – a stacked, phase-based platform – compares to
            single-modality tools commonly used for recovery and relaxation.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto overflow-x-auto"
        >
          <div className="genesis-card overflow-hidden min-w-[640px]">
            {/* Header */}
            <div className="grid grid-cols-5 bg-genesis-teal text-primary-foreground">
              <div className="p-4 lg:p-6 font-medium">Feature</div>
              <div className="p-4 lg:p-6 text-center font-bold text-genesis-gold">Genesis Chamber™</div>
              <div className="p-4 lg:p-6 text-center font-medium opacity-80">Cryotherapy</div>
              <div className="p-4 lg:p-6 text-center font-medium opacity-80">Infrared Sauna</div>
              <div className="p-4 lg:p-6 text-center font-medium opacity-80">Float Tanks</div>
            </div>

            {/* Body */}
            {comparisons.map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`grid grid-cols-5 border-b border-border last:border-b-0 ${
                  index % 2 === 0 ? 'bg-card' : 'bg-muted/30'
                }`}
              >
                <div className="p-4 lg:p-5 text-foreground font-medium">{row.feature}</div>
                <div className="p-4 lg:p-5 text-center">{renderValue(row.genesis)}</div>
                <div className="p-4 lg:p-5 text-center">{renderValue(row.sauna)}</div>
                <div className="p-4 lg:p-5 text-center">{renderValue(row.cryotherapy)}</div>
                <div className="p-4 lg:p-5 text-center">{renderValue(row.floatTank)}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            The Genesis Chamber™ is the only system that integrates all eleven therapeutic 
            modalities in a single, unified environment for maximum biological impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;
