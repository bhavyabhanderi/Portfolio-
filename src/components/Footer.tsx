import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-200 bg-white/80 backdrop-blur-lg">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-2xl font-bold tracking-tighter">
          <span className="text-primary">B</span>
          <span className="text-accent">B</span>
        </div>
        
        <p className="text-gray-600 text-sm">
          Made with ❤️ by <span className="text-gray-900 font-medium">Bhavya Bhanderi</span> © {new Date().getFullYear()}
        </p>

        <div className="flex items-center gap-4">
          <a href="https://github.com/bhavyabhanderi" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-primary transition-colors">
            <FaGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/bhavya-bhanderi-8256b129a/" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-primary transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href="mailto:bhavyabhanderi07@gmail.com" className="text-gray-600 hover:text-primary transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
