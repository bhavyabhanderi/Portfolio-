import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

export default function EducationSection() {
  return (
    <section className="py-16 md:py-24 bg-white/60 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & <span className="text-primary">Achievements</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {/* Class 10th */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            className="glass-card shadow-sm p-6 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-bl-full transition-transform group-hover:scale-110" />
            <GraduationCap className="text-accent mb-4 relative z-10" size={32} />
            <h3 className="text-lg font-bold text-gray-900 mb-1 relative z-10">Class 10th (SSC)</h3>
            <p className="text-gray-600 text-sm font-medium relative z-10">Jawahar Navodaya Vidyalaya, Jamnagar</p>
          </motion.div>

          {/* Class 12th */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.1 }}
            className="glass-card shadow-sm p-6 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/10 rounded-bl-full transition-transform group-hover:scale-110" />
            <GraduationCap className="text-secondary mb-4 relative z-10" size={32} />
            <h3 className="text-lg font-bold text-gray-900 mb-1 relative z-10">Class 12th (HSC)</h3>
            <p className="text-gray-600 text-sm font-medium relative z-10">Modi School, Rajkot</p>
          </motion.div>

          {/* Bachelor's */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.2 }}
            className="glass-card shadow-sm p-6 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full transition-transform group-hover:scale-110" />
            <GraduationCap className="text-primary mb-4 relative z-10" size={32} />
            <h3 className="text-lg font-bold text-gray-900 mb-1 relative z-10">B.E. Computer Engineering</h3>
            <p className="text-gray-600 text-sm font-medium relative z-10">LJ Institute of Engineering and Technology</p>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.3 }}
            className="glass-card shadow-sm p-6 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-bl-full transition-transform group-hover:scale-110" />
            <Award className="text-accent mb-4 relative z-10" size={32} />
            <h3 className="text-lg font-bold text-gray-900 mb-3 relative z-10">Key Achievements</h3>
            <ul className="space-y-2 relative z-10 text-gray-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">•</span>
                Full-stack freelance projects
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">•</span>
                Built PrepAI (AI platform)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-0.5">•</span>
                Active GitHub contributor
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
