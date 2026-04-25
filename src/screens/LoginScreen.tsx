import React, { useState } from 'react';
import { motion } from 'motion/react';
import { GraduationCap, User, Lock, Eye, EyeOff, AlertCircle } from 'lucide-react';

export default function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate error for demo if needed, but here we just login
    onLogin();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-5 bg-surface relative overflow-hidden">
      {/* Background Decor */}
      <div className="fixed top-[-10%] right-[-10%] w-96 h-96 bg-primary-container/20 rounded-full blur-[100px] -z-10"></div>
      <div className="fixed bottom-[-5%] left-[-5%] w-64 h-64 bg-secondary-container/30 rounded-full blur-[80px] -z-10"></div>

      <main className="w-full max-w-[440px] flex flex-col items-center">
        {/* Brand Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary-container rounded-[28px] mb-4 soft-shadow">
            <GraduationCap className="text-on-secondary-container" size={40} />
          </div>
          <h1 className="text-3xl text-primary tracking-tight mb-1">
            โรงเรียนบ้านดู่ใหญ่<br />ยินดีต้อนรับ
          </h1>
          <p className="text-on-surface-variant font-medium">เข้าสู่ระบบเพื่อดูผลการเรียนของคุณ</p>
        </motion.div>

        {/* Login Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="w-full bg-white p-8 rounded-[32px] soft-shadow border border-primary-container/10"
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-1">
              <label className="text-sm font-bold text-on-surface-variant px-1" htmlFor="username">
                ชื่อผู้ใช้
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="text-outline-variant group-focus-within:text-primary transition-colors" size={20} />
                </div>
                <input 
                  className="w-full bg-surface-container-low border-none rounded-2xl py-4 pl-12 pr-4 text-md focus:ring-2 focus:ring-primary-container focus:bg-white transition-all outline-none" 
                  id="username" 
                  name="username" 
                  placeholder="กรอกชื่อผู้ใช้ของคุณ" 
                  type="text" 
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-bold text-on-surface-variant px-1" htmlFor="password">
                รหัสผ่าน
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="text-outline-variant group-focus-within:text-primary transition-colors" size={20} />
                </div>
                <input 
                  className="w-full bg-surface-container-low border-none rounded-2xl py-4 pl-12 pr-12 text-md focus:ring-2 focus:ring-primary-container focus:bg-white transition-all outline-none" 
                  id="password" 
                  name="password" 
                  placeholder="กรอกรหัสผ่านของคุณ" 
                  type={showPassword ? "text" : "password"} 
                  required
                />
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                  <button 
                    className="text-outline-variant hover:text-primary transition-colors" 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 px-1 text-error animate-in fade-in slide-in-from-top-1">
                <AlertCircle size={14} />
                <span className="text-xs font-bold">ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง</span>
              </div>
            )}

            <button 
              className="w-full bg-primary-container text-on-primary-container font-bold text-lg py-4 rounded-2xl soft-shadow hover:brightness-105 transition-all active:scale-95 mt-4" 
              type="submit"
            >
              เข้าสู่ระบบ
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-surface-container text-center">
            <a className="text-sm font-bold text-primary hover:underline underline-offset-4" href="#">
              ลืมรหัสผ่านใช่หรือไม่?
            </a>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-on-surface-variant">
            ยังไม่มีบัญชี? <a className="text-sm font-bold text-primary hover:underline" href="https://www.krumoji.in.th/" target="_blank" rel="noopener noreferrer">ติดต่อ</a>ครูพลสินธุ์
          </p>
        </div>

        {/* Decoration */}
        <div className="mt-8 opacity-20 grayscale pointer-events-none">
           <BookIcon />
        </div>
      </main>
    </div>
  );
}

function BookIcon() {
  return (
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
       <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
