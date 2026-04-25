import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Star, User, Settings } from 'lucide-react';
import { cn } from '../lib/utils';

export default function BottomNav() {
  const navItems = [
    { icon: Home, label: 'หน้าหลัก', path: '/' },
    { icon: Star, label: 'คะแนน', path: '/grades' },
    { icon: User, label: 'ข้อมูลส่วนตัว', path: '/profile' },
    { icon: Settings, label: 'ตั้งค่า', path: '/settings' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pt-3 pb-8 bg-white/95 backdrop-blur-lg shadow-[0_-4px_20px_rgba(255,192,203,0.15)] rounded-t-[32px]">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            cn(
              "flex flex-col items-center justify-center px-5 py-1.5 transition-all active:scale-90 duration-300 ease-out rounded-2xl",
              isActive 
                ? "bg-primary-container/30 text-primary" 
                : "text-outline hover:bg-primary-container/10"
            )
          }
        >
          {({ isActive }) => (
            <>
              <item.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              <span className={cn(
                "font-display text-[12px] mt-0.5",
                isActive ? "font-bold" : "font-medium"
              )}>
                {item.label}
              </span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
}
