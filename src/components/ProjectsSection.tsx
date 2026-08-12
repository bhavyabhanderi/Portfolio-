import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

export default function ProjectsSection() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');
  const [categories, setCategories] = useState<string[]>(['All']);

  useEffect(() => {
    fetch('https://api.github.com/users/bhavyabhanderi/repos?sort=updated&per_page=100')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const repos = data.filter(repo => !repo.fork && repo.description && repo.description.trim() !== '');
          setProjects(repos);
          
          const langs = new Set<string>();
          langs.add('All');
          repos.forEach(repo => {
            if (repo.language) langs.add(repo.language);
          });
          setCategories(Array.from(langs));
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching github repos:', err);
        setLoading(false);
      });
  }, []);

  const filteredProjects = projects.filter(
    (project) => filter === 'All' || project.language === filter
  );

  return (
    <section id="projects" className="py-24 bg-white/60 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Featured <span className="text-primary">Projects</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-primary text-gray-900 shadow-[0_0_15px_rgba(37,99,235,0.5)]'
                  : 'glass text-gray-600 hover:text-gray-900 hover:bg-white/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
          </div>
        ) : (
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project: any, index: number) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: -30 }}
                  transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full overflow-hidden group hover:shadow-md transition-shadow"
                >
                  {/* Top Section */}
                  <div className="relative p-6 bg-slate-50 border-b border-gray-100 overflow-hidden flex flex-col items-start min-h-[220px]">
                    {/* Grid Pattern */}
                    <div 
                      className="absolute inset-0 opacity-[0.04] pointer-events-none" 
                      style={{ 
                        backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
                        backgroundSize: '20px 20px' 
                      }} 
                    />
                    
                    {/* Colored tint based on index */}
                    <div className={`absolute inset-0 opacity-10 ${
                      index % 3 === 0 ? 'bg-blue-300' : index % 3 === 1 ? 'bg-slate-300' : 'bg-amber-200'
                    } pointer-events-none mix-blend-multiply`} />

                    {/* Top Bar */}
                    <div className="w-full flex justify-between items-center mb-6 relative z-10">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                      {project.language && (
                        <span className="px-3 py-1 bg-white rounded-full text-xs font-semibold text-blue-500 shadow-sm border border-gray-100">
                          {project.language}
                        </span>
                      )}
                    </div>

                    {/* Icon & Title */}
                    <div className="flex items-center gap-4 mb-5 relative z-10">
                      <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center shrink-0">
                        <Code className="text-blue-500" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-800 leading-tight">
                          {project.name.replace(/-/g, ' ')}
                        </h3>
                        <p className="text-xs text-slate-500 mt-1 flex items-center gap-1 font-mono">
                          {`>_`} github.com/bhavyabhanderi
                        </p>
                      </div>
                    </div>

                    {/* Tags & Featured pill at bottom of header */}
                    <div className="mt-auto relative z-10 w-full flex flex-col items-start gap-3">
                      {project.topics && project.topics.length > 0 ? (
                        <div className="flex flex-wrap gap-2">
                          {project.topics.slice(0, 3).map((topic: string) => (
                            <span key={topic} className="px-2.5 py-1 bg-white border border-gray-100 rounded text-[10px] font-semibold text-slate-600 shadow-sm">
                              {topic}
                            </span>
                          ))}
                          {project.topics.length > 3 && (
                            <span className="px-2 py-1 bg-white border border-gray-100 rounded text-[10px] font-semibold text-slate-600 shadow-sm">
                              +{project.topics.length - 3}
                            </span>
                          )}
                        </div>
                      ) : (
                        <div className="h-6"></div> // spacer if no topics
                      )}
                      
                      <span className="px-3 py-1 bg-indigo-600 text-white rounded-full text-[10px] font-bold tracking-wider uppercase shadow-sm">
                        Featured
                      </span>
                    </div>
                  </div>

                  {/* Bottom Section */}
                  <div className="p-6 flex flex-col flex-grow bg-white">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      {project.name.replace(/-/g, ' ')}
                    </h3>
                    <p className="text-slate-500 text-sm mb-6 flex-grow line-clamp-3">
                      {project.description}
                    </p>

                    {project.topics && project.topics.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.topics.slice(0, 4).map((topic: string) => (
                          <span key={topic} className="px-2.5 py-1 bg-slate-50 border border-slate-100 rounded text-[11px] font-medium text-slate-600">
                            {topic}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex justify-between items-center pt-4 border-t border-gray-100 mt-auto">
                      <a href={project.html_url} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-indigo-600 transition-colors">
                        <FaGithub size={18} /> Code
                      </a>
                      {project.homepage && (
                        <a href={project.homepage} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors">
                          Demo <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
}
