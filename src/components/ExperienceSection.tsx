import { motion } from 'framer-motion';

const EXPERIENCES = [
  {
    role: "Junior Software Developer",
    company: "Reasonify Technology Pvt. Ltd.",
    date: "Dec 2025 - Sept 2026",
    initials: "RT",
    responsibilities: [
      "Working as a Software Developer at Reasonify Technology Pvt Ltd, Ahmedabad.",
      "Developing and maintaining web applications and software solutions.",
      "Collaborating with the team on full-stack development tasks."
    ]
  },
  {
    role: "Freelance Developer",
    company: "Self Employed",
    date: "Feb 2026 – Apr 2026",
    initials: "SE",
    responsibilities: [
      "Built custom web and mobile applications for clients using React and React Native.",
      "Developed robust backend APIs with Node.js and FastAPI to support scalable applications.",
      "Managed databases and successfully deployed full-stack solutions to various cloud platforms."
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24 relative overflow-hidden bg-slate-50/50">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-primary">Experience</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-6">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 15, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 hover:shadow-md transition-shadow relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 shrink-0 bg-[#3B82F6] rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-sm">
                    {exp.initials}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-1">{exp.role}</h3>
                    <div className="text-indigo-600 font-medium md:text-lg">
                      {exp.company}
                    </div>
                  </div>
                </div>
                
                <div className="shrink-0 md:pt-1 pl-[84px] md:pl-0">
                  <span className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium border border-indigo-100/50">
                    {exp.date}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 md:pl-2">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 leading-relaxed text-[15px] md:text-base">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-2.5" />
                    {resp}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
