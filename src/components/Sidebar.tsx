import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Home, Star, User, Settings, Info, HelpCircle, LogOut } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { cn } from '../lib/utils';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const menuItems = [
    { icon: Home, label: 'หน้าหลัก', path: '/' },
    { icon: Star, label: 'คะแนนสอบ', path: '/grades' },
    { icon: User, label: 'ข้อมูลส่วนตัว', path: '/profile' },
    { icon: Settings, label: 'ตั้งค่าระบบ', path: '/settings' },
  ];

  const secondaryItems = [
    { icon: Info, label: 'เกี่ยวกับแอป', path: '/about' },
    { icon: HelpCircle, label: 'ช่วยเหลือ', path: '/help' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60]"
          />

          {/* Sidebar Panel */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 h-full w-4/5 max-w-xs bg-white z-[70] shadow-2xl rounded-r-3xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="p-6 bg-primary-container/20 border-b border-primary-container/10">
              <div className="flex justify-between items-center mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white soft-shadow flex items-center justify-center text-primary">
                  <Star fill="currentColor" size={24} />
                </div>
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-white/50 rounded-full text-outline transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              <h3 className="text-xl font-bold text-primary font-display">Sweet Scholar</h3>
              <p className="text-xs font-semibold text-outline tracking-wider uppercase mt-1">ระบบติดตามผลการเรียน</p>
            </div>

            {/* Navigation */}
            <div className="flex-1 py-6 px-4 space-y-2 overflow-y-auto">
              <div>
                <p className="text-[10px] font-bold text-outline-variant px-4 mb-2 uppercase tracking-widest">General</p>
                {menuItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={onClose}
                    className={({ isActive }) => cn(
                      "flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-200",
                      isActive 
                        ? "bg-primary-container/40 text-primary font-bold" 
                        : "text-on-surface-variant hover:bg-surface-container-low"
                    )}
                  >
                    <item.icon size={20} />
                    <span className="thai-line-height">{item.label}</span>
                  </NavLink>
                ))}
              </div>

              <div className="pt-4 mt-4 border-t border-surface-container">
                <p className="text-[10px] font-bold text-outline-variant px-4 mb-2 uppercase tracking-widest">Support</p>
                {secondaryItems.map((item) => (
                   <button
                    key={item.label}
                    className="flex items-center gap-4 px-4 py-3.5 w-full rounded-2xl text-on-surface-variant hover:bg-surface-container-low transition-all duration-200 font-medium"
                  >
                    <item.icon size={20} />
                    <span className="thai-line-height">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 bg-surface-container-low">
              <button className="flex items-center gap-4 px-4 py-3.5 w-full rounded-2xl text-error hover:bg-error-container/30 transition-all duration-200 font-bold">
                <LogOut size={20} />
                <span>ออกจากระบบ</span>
              </button>
              <p className="text-center text-[10px] text-outline mt-4 font-medium">Version 1.0.4 (Beta)</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
