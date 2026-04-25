import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Lock, Bell, Globe, ChevronRight, LogOut } from 'lucide-react';
import { cn } from '../lib/utils';

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="max-w-lg mx-auto px-5 pt-24 pb-32">
      {/* Settings Illustration Placeholder */}
      <div className="flex justify-center mb-12">
        <div className="relative w-48 h-48 flex items-center justify-center">
          <div className="absolute inset-0 bg-primary-container/20 rounded-full blur-3xl"></div>
          <div className="relative z-10 w-40 h-40 bg-surface-container rounded-3xl soft-shadow flex items-center justify-center border border-primary-container/20 overflow-hidden">
             <div className="grid grid-cols-2 gap-2 opacity-40">
                <div className="w-16 h-16 rounded-full bg-secondary rotate-12"></div>
                <div className="w-16 h-16 rounded-full bg-primary -rotate-12 translate-y-4"></div>
             </div>
             <div className="absolute inset-0 flex items-center justify-center">
                <SettingsIcon />
             </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-xs font-bold text-primary ml-4 mb-3 uppercase tracking-wider">บัญชีและความปลอดภัย</h2>
          <div className="bg-white rounded-[24px] p-4 border border-primary-container/10 soft-shadow active:scale-[0.98] transition-all cursor-pointer group">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary-container/30 flex items-center justify-center text-primary">
                  <Lock size={22} />
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface">เปลี่ยนรหัสผ่าน</p>
                  <p className="text-[12px] font-semibold text-outline">อัปเดตรหัสผ่านของคุณสม่ำเสมอ</p>
                </div>
              </div>
              <ChevronRight className="text-outline-variant group-hover:text-primary transition-colors" size={20} />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xs font-bold text-primary ml-4 mb-3 uppercase tracking-wider">การแจ้งเตือน</h2>
          <div className="bg-white rounded-[24px] p-4 border border-primary-container/10 soft-shadow">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-secondary-container/30 flex items-center justify-center text-secondary">
                  <Bell size={22} />
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface">เปิด/ปิดการแจ้งเตือน</p>
                  <p className="text-[12px] font-semibold text-outline">รับข่าวสารเมื่อประกาศผลสอบ</p>
                </div>
              </div>
              <button 
                onClick={() => setNotifications(!notifications)}
                className={cn(
                  "relative w-11 h-6 rounded-full transition-colors duration-300 outline-none",
                  notifications ? "bg-secondary-container" : "bg-primary-container/40"
                )}
              >
                <div className={cn(
                  "absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-300",
                  notifications ? "translate-x-5" : "translate-x-0"
                )} />
              </button>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xs font-bold text-primary ml-4 mb-3 uppercase tracking-wider">อื่น ๆ</h2>
          <div className="bg-white rounded-[24px] p-4 border border-primary-container/10 soft-shadow active:scale-[0.98] transition-all cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-tertiary-container/30 flex items-center justify-center text-tertiary">
                  <Globe size={22} />
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface">ภาษา (Language)</p>
                  <p className="text-[12px] font-semibold text-outline">ภาษาไทย</p>
                </div>
              </div>
              <ChevronRight className="text-outline-variant" size={20} />
            </div>
          </div>
        </section>

        <button className="w-full mt-4 py-4 px-6 rounded-full bg-white border-2 border-primary-container/20 text-primary font-bold text-sm flex items-center justify-center gap-2 hover:bg-pink-50 active:scale-95 transition-all mb-12 duration-200">
          <LogOut size={20} />
          ออกจากระบบ
        </button>
      </div>
    </div>
  );
}

function SettingsIcon() {
  return (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M12.22 2c-.17 0-.34.01-.5.02a1 1 0 0 0-.91.73l-.22 1a1.5 1.5 0 1 1-2.9 0l-.22-1a1 1 0 0 0-.9-.73 8.35 8.35 0 0 0-1.46.28 1 1 0 0 0-.66.86l-.08 1.02a1.5 1.5 0 1 1-2.52 1l-.7-.76a1 1 0 0 0-1.04-.26 8.32 8.32 0 0 0-1.22.84 1 1 0 0 0-.3 1.06l.36.96a1.5 1.5 0 1 1-2.8 1.04l-.36-.96a1 1 0 0 0-.3-1.06 8.32 8.32 0 0 0-.84 1.22 1 1 0 0 0 .26 1.04l.76.7a1.5 1.5 0 1 1-1 2.52l-1.02.08a1 1 0 0 0-.86.66c-.1.48-.2.97-.28 1.46a1 1 0 0 0 .73.9l1 .22a1.5 1.5 0 1 1 0 2.9l-1 .22a1 1 0 0 0-.73.91c0 .16-.01.33-.02.5a1 1 0 0 0 .73.91l1 .22a1.5 1.5 0 1 1 0 2.9l-1 .22a1 1 0 0 0-.73.9c.08.49.18.98.28 1.46a1 1 0 0 0 .86.66l1.02.08a1.5 1.5 0 1 1 1 2.52l-.76.7a1 1 0 0 0-.26 1.04c.24.45.52.86.84 1.22a1 1 0 0 0 1.06.3l.96-.36a1.5 1.5 0 1 1 1.04 2.8l-.96.36a1 1 0 0 0-1.06.3 8.38 8.38 0 0 0 1.22.84 1 1 0 0 0 1.04-.26l.7-.76a1.5 1.5 0 1 1 2.52 1l.08 1.02a1 1 0 0 0 .66.86 8.35 8.35 0 0 0 1.46.28 1 1 0 0 0 .9-.73l.22-1a1.5 1.5 0 1 1 2.9 0l.22 1a1 1 0 0 0 .91.73c.16 0 .33-.01.5-.02a1 1 0 0 0 .91-.73l.22-1a1.5 1.5 0 1 1 2.9 0l.22 1a1 1 0 0 0 .9.73 8.35 8.35 0 0 0 1.46-.28 1 1 0 0 0 .66-.86l.08-1.02a1.5 1.5 0 1 1 2.52-1l.7.76a1 1 0 0 0 1.04.26 8.32 8.32 0 0 0 1.22-.84 1 1 0 0 0 .3-1.06l-.36-.96a1.5 1.5 0 1 1 2.8-1.04l.36.96a1 1 0 0 0 .3 1.06 8.32 8.32 0 0 0 .84-1.22 1 1 0 0 0-.26-1.04l-.76-.7a1.5 1.5 0 1 1 1-2.52l1.02-.08a1 1 0 0 0 .86-.66c.1-.48.2-.97.28-1.46a1 1 0 0 0-.73-.9l-1-.22a1.5 1.5 0 1 1 0-2.9l1-.22a1 1 0 0 0 .73-.91c0-.16.01-.33.02-.5a1 1 0 0 0-.73-.91l-1-.22a1.5 1.5 0 1 1 0-2.9l1-.22a1 1 0 0 0 .73-.9 8.35 8.35 0 0 0-.28-1.46 1 1 0 0 0-.86-.66l-1.02-.08a1.5 1.5 0 1 1-1-2.52l.76-.7a1 1 0 0 0 .26-1.04 8.32 8.32 0 0 0-.84-1.22 1 1 0 0 0-1.06-.3l-.96.36a1.5 1.5 0 1 1-1.04-2.8l.96-.36a1 1 0 0 0 1.06-.3 8.38 8.38 0 0 0-1.22-.84 1 1 0 0 0-1.04.26l-.7.76a1.5 1.5 0 1 1-2.52-1l-.08-1.02a1 1 0 0 0-.66-.86 8.35 8.35 0 0 0-1.46-.28 1 1 0 0 0-.9.73z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
       <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
