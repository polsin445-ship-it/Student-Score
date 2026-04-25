import React from 'react';
import { motion } from 'motion/react';
import { Edit2, Sparkles, FileText, Calendar, Star, Mail, LogOut } from 'lucide-react';

const infoItems = [
  { label: 'ชื่อ-นามสกุล', value: 'นภัสสร รัตนจินดา' },
  { label: 'รหัสนักเรียน', value: '543210987' },
  { label: 'ห้อง/ชั้นเรียน', value: 'มัธยมศึกษาปีที่ 6/2 (วิทย์-คณิต)' },
  { label: 'อาจารย์ที่ปรึกษา', value: 'อ.วิไลวรรณ มีสุข' },
];

const quickActions = [
  { icon: FileText, label: 'ใบรับรองผล' },
  { icon: Calendar, label: 'ตารางเรียน' },
  { icon: Star, label: 'ความสำเร็จ' },
  { icon: Mail, label: 'แจ้งเตือน' },
];

export default function ProfileScreen() {
  return (
    <div className="max-w-[1140px] mx-auto px-5 pt-24 pb-32">
      {/* Profile Hero */}
      <div className="flex flex-col items-center mb-10">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="relative mb-4"
        >
          <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-primary-container to-secondary-container shadow-lg">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-white">
              <img 
                alt="Avatar" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6syhw-maGfa2Kg5oAPhjO6CGaxuDlHGCN-E5-Hre2LW1brSlo9Xm1YBl9r_Oih6tVz7CPXvga7Bj4_lR0-UcbG2JuGUz-aYlT1SsbtSwjQqQud3rjKrNMWJf7vjyEFb3QH3TFR9zuV67yY2xZCrifj4zkZqMvRGZFihK4QqYDuVWFUjwt-ouk7EHHdWa9iaBNQYGAl0WZklKMTiRJwpqf3Yyx3wYWMGhRk2-th9Wugi3SjMFYGO1veo5bwwhIG1cwHviLXLBfbXQI"
              />
            </div>
          </div>
          <button className="absolute bottom-1 right-1 bg-white p-2 rounded-full shadow-lg border border-pink-100 text-pink-500 active:scale-90 transition-transform hover:bg-pink-50">
            <Edit2 size={18} />
          </button>
        </motion.div>
        <h2 className="text-2xl font-bold text-on-surface mb-1">นภัสสร รัตนจินดา</h2>
        <p className="text-sm font-semibold text-secondary">เลขประจำตัว: 54321</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Basic Info Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-8 bg-white rounded-[24px] p-6 soft-shadow border border-primary-container/10"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xs font-bold text-primary uppercase tracking-wider">ข้อมูลพื้นฐาน</h3>
            <button className="text-pink-400 text-xs font-bold hover:underline">แก้ไขข้อมูล</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {infoItems.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <span className="text-outline text-[12px] font-semibold">{item.label}</span>
                <span className="text-md text-on-surface font-medium thai-line-height">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="md:col-span-4 bg-primary-container/20 rounded-[24px] p-6 flex flex-col justify-between border border-primary-container/30"
        >
          <div>
            <Sparkles className="text-pink-500 mb-2" size={24} />
            <h3 className="text-sm font-bold text-on-primary-container">เกรดเฉลี่ยสะสม</h3>
          </div>
          <div className="mt-4">
            <span className="text-5xl font-bold text-pink-600 leading-none font-display">3.85</span>
            <div className="mt-4 flex items-center">
              <span className="bg-white/60 px-3 py-1 rounded-full text-[12px] text-pink-700 font-bold shadow-sm">
                +0.12 จากเทอมที่แล้ว
              </span>
            </div>
          </div>
        </motion.div>

        {/* Quick Actions Grid */}
        <div className="md:col-span-12 grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
          {quickActions.map((action, idx) => (
            <motion.button
              key={idx}
              whileTap={{ scale: 0.95 }}
              className="bg-white p-5 rounded-3xl border border-primary-container/10 soft-shadow flex flex-col items-center gap-3 text-center group transition-all hover:bg-primary-container/5"
            >
              <div className="w-12 h-12 rounded-2xl bg-pink-50 flex items-center justify-center text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300">
                <action.icon size={24} />
              </div>
              <span className="text-xs font-semibold text-slate-600 tracking-tight">
                {action.label}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Logout */}
      <div className="mt-12 mb-8 flex justify-center">
        <button className="flex items-center gap-2 px-8 py-3 rounded-full border border-pink-100 text-pink-400 font-bold text-sm hover:bg-pink-50 transition-colors active:scale-95 duration-200">
          <LogOut size={20} />
          ออกจากระบบ
        </button>
      </div>
    </div>
  );
}
