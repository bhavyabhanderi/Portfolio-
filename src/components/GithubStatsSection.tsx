import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, GitFork, BookOpen, Users } from 'lucide-react';

interface GithubUser {
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
}

interface RepoLang {
  [key: string]: number;
}

export default function GithubStatsSection() {
  const [user, setUser] = useState<GithubUser | null>(null);
  const [totalStars, setTotalStars] = useState(0);
  const [totalForks, setTotalForks] = useState(0);
  const [languages, setLanguages] = useState<{ name: string; percentage: number; color: string }[]>([]);

  const LANG_COLORS: Record<string, string> = {
    JavaScript: '#F7DF1E',
    TypeScript: '#3178C6',
    Python: '#3776AB',
    HTML: '#E34F26',
    CSS: '#1572B6',
    Java: '#B07219',
    'C++': '#00599C',
    C: '#A8B9CC',
    Dart: '#0175C2',
    Kotlin: '#A97BFF',
    Swift: '#FA7343',
    Go: '#00ADD8',
    Rust: '#DEA584',
    Ruby: '#CC342D',
    PHP: '#777BB4',
    Shell: '#89E051',
    Jupyter: '#F37626',
    'Jupyter Notebook': '#F37626',
  };

  useEffect(() => {
    // Fetch user info
    fetch('https://api.github.com/users/bhavyabhanderi')
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(() => {});

    // Fetch repos for stars, forks, and languages
    fetch('https://api.github.com/users/bhavyabhanderi/repos?per_page=100&sort=updated')
      .then(res => res.json())
      .then((repos: any[]) => {
        let stars = 0;
        let forks = 0;
        const langBytes: RepoLang = {};

        repos.forEach((repo: any) => {
          if (!repo.fork) {
            stars += repo.stargazers_count || 0;
            forks += repo.forks_count || 0;
            if (repo.language) {
              langBytes[repo.language] = (langBytes[repo.language] || 0) + (repo.size || 1);
            }
          }
        });

        setTotalStars(stars);
        setTotalForks(forks);

        // Calculate language percentages
        const totalBytes = Object.values(langBytes).reduce((a, b) => a + b, 0);
        const sorted = Object.entries(langBytes)
          .sort(([, a], [, b]) => b - a)
          .slice(0, 6)
          .map(([name, bytes]) => ({
            name,
            percentage: Math.round((bytes / totalBytes) * 100),
            color: LANG_COLORS[name] || '#6E7681',
          }));

        setLanguages(sorted);
      })
      .catch(() => {});
  }, []);

  const stats = [
    { label: 'Repositories', value: user?.public_repos ?? '—', icon: BookOpen, color: 'text-primary' },
    { label: 'Total Stars', value: totalStars, icon: Star, color: 'text-yellow-500' },
    { label: 'Total Forks', value: totalForks, icon: GitFork, color: 'text-accent' },
    { label: 'Followers', value: user?.followers ?? '—', icon: Users, color: 'text-secondary' },
  ];

  return (
    <section className="py-12 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">GitHub <span className="text-primary">Stats</span></h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card shadow-sm p-6 text-center hover:shadow-[0_0_20px_rgba(37,99,235,0.15)] transition-shadow"
            >
              <stat.icon className={`mx-auto mb-3 ${stat.color}`} size={28} />
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Top Languages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card shadow-sm p-8 max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Top Languages</h3>
          
          {languages.length > 0 ? (
            <>
              {/* Language bar */}
              <div className="h-4 rounded-full overflow-hidden flex mb-6">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                    className="transition-all duration-500 first:rounded-l-full last:rounded-r-full"
                    title={`${lang.name}: ${lang.percentage}%`}
                  />
                ))}
              </div>

              {/* Language legend */}
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full inline-block"
                      style={{ backgroundColor: lang.color }}
                    />
                    <span className="text-sm text-gray-700 font-medium">{lang.name}</span>
                    <span className="text-sm text-gray-500">{lang.percentage}%</span>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="flex justify-center py-4">
              <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
