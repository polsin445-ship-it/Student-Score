import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Sigma, Beaker, Globe, BellRing, ChevronRight } from 'lucide-react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, Cell } from 'recharts';

const data = [
  { name: 'คณิต', score: 90 },
  { name: 'วิทย์', score: 75 },
  { name: 'ไทย', score: 95 },
  { name: 'อังกฤษ', score: 80 },
  { name: 'สังคม', score: 88 },
];

const subjects = [
  { id: 'ค32101', name: 'คณิตศาสตร์เพิ่มเติม', score: '4', icon: Sigma },
  { id: 'ว32201', name: 'ฟิสิกส์พื้นฐาน', score: '3.5', icon: Beaker },
  { id: 'อ32101', name: 'ภาษาอังกฤษ', score: '4', icon: Globe },
];

export default function HomeScreen() {
  return (
    <div className="max-w-[1140px] mx-auto px-5 pt-8 pb-32">
      {/* Welcome Hero */}
      <section className="mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-primary mb-1">ยินดีต้อนรับกลับมา</p>
            <h2 className="text-3xl text-on-surface">สวัสดี, ชลดา</h2>
          </div>
          <div className="bg-primary-container/20 px-6 py-2 rounded-xl flex items-center gap-2">
            <Sparkles className="text-primary" size={20} />
            <span className="text-sm font-semibold text-on-primary-container">
              เทอมนี้คุณทำได้เยี่ยมมาก!
            </span>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* GPA Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-4 bg-white rounded-[32px] p-8 soft-shadow border border-primary-container/10 flex flex-col items-center justify-center text-center relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/10 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
          <p className="text-sm font-medium text-secondary mb-4">เกรดเฉลี่ยรวม (GPAX)</p>
          <div className="w-32 h-32 rounded-full border-[8px] border-primary-container flex items-center justify-center mb-4 relative">
            <span className="text-4xl font-bold text-primary font-display">3.85</span>
            <div className="absolute inset-0 rounded-full border-[8px] border-primary border-t-transparent -rotate-45"></div>
          </div>
          <div className="bg-tertiary-container/30 px-4 py-1 rounded-full">
            <span className="text-xs font-bold text-on-tertiary-container">+0.15 จากเทอมที่แล้ว</span>
          </div>
        </motion.div>

        {/* Score Chart */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="md:col-span-8 bg-white rounded-[32px] p-8 soft-shadow border border-primary-container/10"
        >
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold text-on-surface">สรุปคะแนนรายวิชา</h3>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-primary"></span>
              <span className="text-xs font-semibold text-outline">คะแนนปัจจุบัน</span>
            </div>
          </div>
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#837375', fontSize: 12, fontWeight: 600 }}
                />
                <Tooltip 
                  cursor={{ fill: '#ffc0cb33' }}
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}
                />
                <Bar dataKey="score" radius={[12, 12, 0, 0]}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill="#ffb6c1" />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Subject List */}
        <div className="md:col-span-12">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-on-surface">วิชาที่ลงทะเบียน</h3>
            <button className="text-primary font-bold text-sm flex items-center gap-1 hover:underline">
              ดูทั้งหมด
              <ChevronRight size={16} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {subjects.map((sub, idx) => (
              <motion.div
                key={sub.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + idx * 0.05 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-3xl p-4 soft-shadow border border-primary-container/10 flex items-center gap-4 group cursor-pointer transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary-container/20 flex items-center justify-center text-primary group-hover:bg-primary-container/30 transition-colors">
                  <sub.icon size={28} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-lg font-semibold text-on-surface truncate thai-line-height">
                    {sub.name}
                  </h4>
                  <p className="text-xs font-semibold text-outline">รหัสวิชา {sub.id}</p>
                </div>
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold font-display">
                  {sub.score}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Notification Banner */}
        <div className="md:col-span-12 mt-6">
          <div className="bg-secondary-container/10 border border-secondary-container/30 rounded-3xl p-6 flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-primary shadow-sm">
              <BellRing size={32} className="fill-primary/20" />
            </div>
            <div className="text-center md:text-left flex-1">
              <h4 className="text-sm font-bold text-on-secondary-container">อัปเดตล่าสุด: วิชาสังคมศึกษา</h4>
              <p className="text-sm thai-line-height text-on-secondary-container/80">อาจารย์สมศรีได้บันทึกคะแนนสอบกลางภาคของคุณแล้ว</p>
            </div>
            <button className="bg-primary text-white px-8 py-3 rounded-2xl font-bold text-sm hover:brightness-110 active:scale-95 transition-all w-full md:w-auto">
              ดูรายละเอียด
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
