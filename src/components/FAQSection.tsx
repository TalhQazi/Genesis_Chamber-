import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What makes the Genesis Chamber™ different from other wellness devices?',
    answer: 'The Genesis Chamber™ is a phase-based, modular biological optimization system built from 14+ named modules. Instead of offering one modality at a time, it coordinates light, temperature, atmosphere, vibration, Salt Serenity™, Forest Immersion™, frequency and EMF shielding across four defined phases. This platform approach creates biological signalling patterns that are difficult to achieve with separate devices.',
  },
  {
    question: 'How long is a typical Genesis Chamber™ session?',
    answer: 'Genesis sessions are designed for meaningful biological impact, not quick appointments. Standard session windows are 45, 60, 75 and 90 minutes. Sessions start at 45 minutes and shorter sessions are not offered, because the four phases need time for priming, active modulation, the immune & cellular window and consolidation.',
  },
  {
    question: 'Is the Genesis Chamber™ a spa?',
    answer: 'No. The Genesis Chamber™ is not a spa, relaxation room or massage environment. It is a phase-based biological system built from coordinated modules that signal the nervous, immune and cellular systems in a planned sequence. Comfort is important, but the primary design goal is biological optimization, not entertainment.',
  },
  {
    question: 'Is this just aromatherapy?',
    answer: 'No. Aromatherapy is mainly about fragrance and mood. In Genesis, the Aromatic Modulation System and Forest Immersion™ are treated as biological signalling layers. Forest compounds (phytoncides) and essential oil profiles are selected and timed for specific phases and goals, not simply used as a room scent.',
  },
  {
    question: 'Why do sessions start at 45 minutes?',
    answer: 'The four-phase design of Genesis requires time. The body needs a priming phase, an active modulation phase, an immune & cellular optimization window and a consolidation phase. Sessions shorter than 45 minutes do not allow these stages to complete properly, so we do not offer quick sessions.',
  },
  {
    question: 'Are all modules active in every session?',
    answer: 'No. Genesis is a modular, phase-aware platform. Not every module runs at full intensity in every session. Modules are activated, sequenced and scaled based on the chosen protocol and session goal, so the system behaves like a coordinated platform rather than turning everything on at once.',
  },
  {
    question: 'Is the Genesis Chamber™ safe for everyone?',
    answer: 'The Genesis Chamber™ is designed with safety as a priority, featuring hardwired emergency override controls and software kill-switch protocols. It meets FDA general wellness standards, IEC electrical safety compliance, and EMF exposure limits. However, we recommend consulting with a healthcare provider before use, especially for individuals with pacemakers, photosensitivity conditions, or during pregnancy.',
  },
  {
    question: 'What are the installation requirements?',
    answer: 'The Genesis Chamber™ requires a dedicated space of approximately 8x8 feet with standard 220V electrical connection. Our installation team handles complete setup, calibration, and user training. The chamber includes integrated grounding systems and EMF shielding that work with standard residential and commercial electrical systems.',
  },
  {
    question: 'How does the biometric feedback system work?',
    answer: 'The biometric sensor system continuously monitors heart rate, HRV, respiratory rate, peripheral temperature, galvanic skin response, and SpO₂. This data is processed in real-time by the CCU, which adjusts therapy parameters to optimize your session. All session data is logged for trend analysis and can be reviewed through the user dashboard.',
  },
  {
    question: 'What maintenance is required?',
    answer: 'The Genesis Chamber™ features self-diagnostic systems that monitor all subsystems continuously. Routine maintenance includes filter replacement (HEPA/H13) every 6-12 months and periodic calibration checks. Our support team provides remote diagnostics and can schedule preventive maintenance visits as needed.',
  },
  {
    question: 'What is the warranty coverage?',
    answer: 'The Genesis Chamber™ comes with a comprehensive 3-year warranty covering all electronic components, sensors, and therapeutic subsystems. Extended warranty options are available. Our support team provides lifetime technical assistance and software updates.',
  },
  {
    question: 'Can the Genesis Chamber™ be customized for specific therapeutic needs?',
    answer: 'Yes, the modular architecture allows for customization of therapy protocols, wavelength combinations, frequency patterns, and thermal cycles. Healthcare practitioners can program specific protocols, and the AI-powered CCU can create personalized therapy sequences based on individual biometric data and therapeutic goals.',
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="genesis-section bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-genesis-gold font-medium mb-4 block">Common Questions</span>
          <h2 className="genesis-heading mb-6">
            Frequently Asked
            <span className="block genesis-gradient-text">Questions</span>
          </h2>
          <p className="genesis-subheading mx-auto">
            Find answers to common questions about the Genesis Chamber™ technology,
            safety, and implementation.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="genesis-card px-6 border-none"
              >
                <AccordionTrigger className="text-left font-serif text-lg hover:text-genesis-gold transition-colors py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
