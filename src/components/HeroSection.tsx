import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { TypeAnimation } from 'react-type-animation';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradients */}
      <div className="absolute inset-0 w-full h-full bg-background z-0">
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-float" />
        <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] bg-secondary/20 rounded-full blur-[120px] mix-blend-screen animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/30 w-max">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
            </span>
            <span className="text-sm font-medium text-gray-700">Available for new opportunities</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi 👋 <br /> I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">Bhavya Bhanderi</span>
          </h1>

          <div className="text-2xl md:text-3xl font-semibold text-gray-600 h-16">
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'Python Developer',
                2000,
                'React Native Developer',
                2000,
                'AI Developer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-gray-600 text-lg max-w-lg leading-relaxed">
            I build modern, scalable web and mobile applications with a focus on exceptional user experiences and robust backend architectures.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="group relative px-6 py-3 bg-primary text-white font-medium rounded-full overflow-hidden hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all flex items-center gap-2">
              <span className="relative z-10 flex items-center gap-2">
                View Projects  <ChevronRight size={18} />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            <div className="flex items-center gap-3 ml-auto md:ml-4">
              <a href="https://github.com/bhavyabhanderi" target="_blank" rel="noreferrer" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:text-primary hover:border-primary/50 transition-colors">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/bhavya-bhanderi-8256b129a/" target="_blank" rel="noreferrer" className="w-12 h-12 glass rounded-full flex items-center justify-center hover:text-primary hover:border-primary/50 transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          {/* Background glow */}
          <div className="absolute -inset-8 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl blur-2xl" />
          
          {/* Terminal Card */}
          <div className="relative bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden max-w-lg mx-auto min-h-[420px]">
            {/* Terminal Header */}
            <div className="flex items-center gap-2.5 px-6 py-5 border-b border-gray-100">
              <div className="w-3.5 h-3.5 rounded-full bg-red-400" />
              <div className="w-3.5 h-3.5 rounded-full bg-yellow-400" />
              <div className="w-3.5 h-3.5 rounded-full bg-green-400" />
              <span className="ml-3 text-base text-gray-500 font-mono">developer.sh</span>
            </div>

            {/* Terminal Body */}
            <div className="p-8 font-mono text-base space-y-6">
              <div>
                <p className="text-gray-500">$ whoami</p>
                <p className="font-bold text-gray-900 text-lg">bhavya@engineer</p>
              </div>

              <div>
                <p className="text-gray-500">$ skills --list</p>
                <p className="text-gray-700">→ React, React Native</p>
                <p className="text-gray-700">→ Python, FastAPI</p>
                <p className="text-gray-700">→ AI & Machine Learning</p>
                <p className="text-gray-700">→ Full-Stack Dev</p>
              </div>

              <div className="flex items-center">
                <span className="text-gray-500">$ </span>
                <span className="w-2.5 h-6 bg-primary/70 animate-pulse ml-1" />
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
