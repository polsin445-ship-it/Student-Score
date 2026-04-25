import React from 'react';
import { Menu } from 'lucide-react';

interface HeaderProps {
  title: string;
  onMenuClick?: () => void;
}

export default function Header({ title, onMenuClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-primary-container/20 shadow-sm flex justify-between items-center px-6 py-4">
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick}
          className="text-primary hover:bg-primary-container/20 p-2 rounded-full transition-all active:scale-95"
        >
          <Menu size={24} />
        </button>
        <h1 className="text-xl font-extrabold text-primary tracking-tight font-display">
          {title}
        </h1>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full border-2 border-primary-container overflow-hidden">
          <img 
            alt="Student Profile" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBws4d1IuIATBrQw7mmUoZ5YCeBu617FqPQv7HrfKS2oO8uwwMBJpuyUA83VSDEiNLEs6iolRaExxPRnZwXmO0kmFIutiLYDxbnQr5B1ORz18brxRkWfqbEiCI5qZUBkDY7ct6qtmcF5Vh0nDzZ161Yg0k7oBAPOfESXgF3H_f4dXFsN4XfF4bkLD91wxRqlqCVZyFzk4rwf9v-XFl9nmHZtrGH4GZnbv48xNuOI1lWNFNSxjGE8JW4JwNYPUZssK2rZGmUZprsg4or"
          />
        </div>
      </div>
    </header>
  );
}
