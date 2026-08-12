import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2, Server, Layout, Database } from 'lucide-react';

export default function HighlightProjectSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card shadow-sm p-1 lg:p-2 rounded-3xl relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-50" />
          
          <div className="bg-white/95 rounded-[1.5rem] p-8 md:p-12 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Featured Project
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">PrepAI</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                An advanced AI-powered platform for career preparation. It analyzes resumes, generates optimized cover letters, and provides mock interviews with real-time feedback using LLMs.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  'Resume Analysis & ATS Scoring',
                  'Mock Interview with AI Evaluation',
                  'Performance Dashboard & Analytics',
                  'Cover Letter Generator'
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 className="text-accent" size={20} />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3 mb-8">
                {['React', 'FastAPI', 'MongoDB', 'Python', 'AI Integration'].map((tech) => (
                  <span key={tech} className="px-4 py-1.5 glass rounded-full text-sm font-medium text-gray-900 border border-gray-200">
                    {tech}
                  </span>
                ))}
              </div>

              <a href="https://prepal-sandy.vercel.app/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-full hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all">
                View Live Demo <ExternalLink size={18} />
              </a>
            </div>

            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden glass flex flex-col p-6 gap-4">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/30 rounded-full blur-3xl" />
              <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-accent/30 rounded-full blur-3xl" />
              
              <div className="relative z-10 grid grid-cols-2 gap-4 h-full">
                <div className="bg-white/60 rounded-xl border border-gray-200 p-6 flex flex-col justify-center items-center text-center gap-3 hover:bg-white/80 transition-colors">
                  <Layout className="text-primary" size={32} />
                  <h4 className="font-bold">Frontend</h4>
                  <p className="text-xs text-gray-600">React & Modern UI</p>
                </div>
                <div className="bg-white/60 rounded-xl border border-gray-200 p-6 flex flex-col justify-center items-center text-center gap-3 hover:bg-white/80 transition-colors">
                  <Server className="text-accent" size={32} />
                  <h4 className="font-bold">Backend</h4>
                  <p className="text-xs text-gray-600">FastAPI & Python</p>
                </div>
                <div className="bg-white/60 rounded-xl border border-gray-200 p-6 flex flex-col justify-center items-center text-center gap-3 hover:bg-white/80 transition-colors col-span-2">
                  <Database className="text-secondary" size={32} />
                  <h4 className="font-bold">AI & Database</h4>
                  <p className="text-xs text-gray-600">MongoDB & LLM Integration</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
