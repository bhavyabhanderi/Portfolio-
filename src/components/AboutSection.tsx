import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { MapPin, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

// const HIGHLIGHTS = [
//   { icon: Server, title: 'Backend Development', desc: 'FastAPI, Python, Node.js' },
//   { icon: Layout, title: 'Modern UI', desc: 'React, React Native' },
//   { icon: Database, title: 'Databases', desc: 'MongoDB, MySQL, PostgreSQL' },
//   { icon: Sparkles, title: 'AI Integration', desc: 'REST APIs, Workflow Automation' },
// ];

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-primary">Me</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side - Photo + Social */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center lg:col-span-5"
          >
            <div className="relative mb-6">
              <div className="w-full max-w-[320px] sm:max-w-[380px] aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border border-gray-200 mx-auto">
                <img 
                  src="https://drive.google.com/uc?export=view&id=1CmNNmxfLn8DzUcjiMwKbDCBVWpGQLzyB" 
                  alt="Bhavya Bhanderi" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Open to Work badge */}
              {/* <div className="absolute -bottom-3 right-4 bg-white rounded-full shadow-md border border-gray-200 px-4 py-2 flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-gray-800">Open to Work</span>
              </div> */}
            </div>

            {/* Social Icons + Location */}
            <div className="flex items-center gap-4 mt-4">
              <a href="https://github.com/bhavyabhanderi" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/bhavya-bhanderi-8256b129a/" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all">
                <FaLinkedin size={20} />
              </a>
              <button 
                type="button"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all cursor-pointer"
              >
                <Mail size={20} />
              </button>
              <div className="flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-gray-100 text-gray-600 text-sm font-medium">
                <MapPin size={16} className="text-primary" />
                Ahmedabad, India
              </div>
            </div>
          </motion.div>

          {/* Right Side - Journey + Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 15 }}
            className="space-y-6 lg:col-span-7"
          >
            {/* My Journey Card */}
            <div className="glass-card shadow-sm p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">About Me</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed text-base">
                <p>
                  I'm <strong className="text-gray-900">Bhavya Bhanderi</strong>, a passionate{' '}
                  <TypeAnimation
                    sequence={[
                      'Full Stack Developer',
                      2000,
                      'Backend Engineer',
                      2000,
                      'React Developer',
                      2000,
                      'AI Enthusiast',
                      2000
                    ]}
                    wrapper="strong"
                    speed={50}
                    className="text-primary inline-block"
                    repeat={Infinity}
                  />
                  {' '}specializing in <strong className="text-gray-900">Python, FastAPI, React, React Native, Node.js, and AI-powered applications</strong>. I enjoy building scalable, high-performance web and mobile applications that solve real-world problems with clean architecture and intuitive user experiences.
                </p>
                <p>
                  Currently, I work as a <strong className="text-gray-900">Junior Software Developer</strong>, where I develop responsive React applications, integrate REST APIs, and contribute to AI-driven workflow automation. Alongside my professional experience, I've successfully delivered freelance projects involving web and mobile app development, backend APIs, database design, cloud deployment, and third-party integrations.
                </p>
                <p>
                  I have hands-on experience with <strong className="text-gray-900">MongoDB, MySQL, PostgreSQL, Git, GitHub, Firebase, Render, and modern JavaScript technologies</strong>. My strongest interest lies in backend engineering, AI integration, and creating products that are scalable, maintainable, and user-focused.
                </p>
                <p>
                  One of my notable projects is <strong className="text-gray-900">PrepAI</strong>, an AI-powered interview preparation platform featuring resume analysis, ATS resume scoring, AI-generated interview questions, answer evaluation, performance analytics, resume optimization, and cover letter generation using modern AI technologies.
                </p>
                <p>
                  I enjoy learning new technologies, solving challenging problems, and collaborating with teams to build innovative digital products. My goal is to create impactful software that combines exceptional user experience with powerful backend systems.
                </p>
              </div>
            </div>

          </motion.div>
        </div>

        {/* Highlights Grid - Full Width Row */}
        {/* <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HIGHLIGHTS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card shadow-sm p-6"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-4">
                <item.icon size={24} />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
