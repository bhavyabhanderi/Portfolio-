import { motion } from 'framer-motion';
import { 
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaGithub, FaFigma, FaGitAlt, FaBootstrap 
} from 'react-icons/fa6';
import { 
  SiJavascript, SiTypescript, SiTailwindcss, SiDjango, SiMongodb, SiMysql, SiPostgresql, SiFirebase, SiVercel, SiPostman, SiAndroidstudio, SiFastapi, SiRender 
} from 'react-icons/si';
import { Brain, Sparkles, Code, Cpu } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: <FaReact className="text-[#61DAFB]" /> },
      { name: 'React Native', icon: <FaReact className="text-[#61DAFB]" /> },
      { name: 'HTML', icon: <FaHtml5 className="text-[#E34F26]" /> },
      { name: 'CSS', icon: <FaCss3Alt className="text-[#1572B6]" /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" /> },
      { name: 'Tailwind', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { name: 'Bootstrap', icon: <FaBootstrap className="text-[#7952B3]" /> }
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Python', icon: <FaPython className="text-[#3776AB]" /> },
      { name: 'FastAPI', icon: <SiFastapi className="text-[#009688]" /> },
      { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" /> },
      { name: 'Django', icon: <SiDjango className="text-[#092E20]" /> }
    ]
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
      { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#4169E1]" /> }
    ]
  },
  {
    title: 'Cloud & AI',
    skills: [
      { name: 'Render', icon: <SiRender className="text-[#46E3B7]" /> },
      { name: 'Firebase', icon: <SiFirebase className="text-[#FFCA28]" /> },
      { name: 'Vercel', icon: <SiVercel className="text-black" /> },
      { name: 'OpenAI API', icon: <Cpu className="text-gray-800" size={16} /> },
      { name: 'Gemini API', icon: <Sparkles className="text-[#8E75FF]" size={16} /> },
      { name: 'Prompt Eng.', icon: <Brain className="text-[#FF6B6B]" size={16} /> }
    ]
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" /> },
      { name: 'GitHub', icon: <FaGithub className="text-black" /> },
      { name: 'VS Code', icon: <Code className="text-[#007ACC]" size={16} /> },
      { name: 'Postman', icon: <SiPostman className="text-[#FF6C37]" /> },
      { name: 'Android Studio', icon: <SiAndroidstudio className="text-[#3DDC84]" /> },
      { name: 'Figma', icon: <FaFigma className="text-[#F24E1E]" /> }
    ]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 relative">
      <div className="absolute top-[20%] right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical <span className="text-primary">Skills</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 15, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 relative overflow-hidden group hover:shadow-md transition-shadow"
            >
              <div className="relative">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-gray-800">
                    {category.title}
                  </h3>
                  <div className="w-8 h-1 bg-indigo-400 rounded-full" />
                </div>
                
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded text-sm text-gray-700 hover:bg-slate-100 transition-colors cursor-default border border-gray-100/50"
                    >
                      <span className="flex items-center justify-center">{skill.icon}</span>
                      <span className="font-medium text-gray-700">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
