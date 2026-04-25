import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, BellRing, ChevronRight, ChevronDown } from 'lucide-react';
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip, Cell } from 'recharts';
import { GRADE_DATA } from '../constants';
import { cn } from '../lib/utils';

const chartData = GRADE_DATA.map(item => ({
  name: item.shortName,
  score: item.rawScore
}));

export default function HomeScreen() {
  const [selectedId, setSelectedId] = useState(GRADE_DATA[0].id);
  
  const selectedSubject = GRADE_DATA.find(item => item.id === selectedId) || GRADE_DATA[0];

  const totalCredits = GRADE_DATA.reduce((acc, item) => acc + item.credits, 0);
  const weightedGrades = GRADE_DATA.reduce((acc, item) => acc + (parseFloat(item.grade) * item.credits), 0);
  const gpax = (weightedGrades / totalCredits).toFixed(2);

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
            <span className="text-4xl font-bold text-primary font-display">{gpax}</span>
            <div className="absolute inset-0 rounded-full border-[8px] border-primary border-t-transparent -rotate-45"></div>
          </div>
          <div className="bg-tertiary-container/30 px-4 py-1 rounded-full">
            <span className="text-xs font-bold text-on-tertiary-container">สรุปผลการเรียนเทอมนี้</span>
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
              <BarChart data={chartData}>
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#837375', fontSize: 10, fontWeight: 600 }}
                />
                <Tooltip 
                  cursor={{ fill: '#ffc0cb33' }}
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}
                />
                <Bar dataKey="score" radius={[12, 12, 0, 0]}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill="#ffb6c1" />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Subject Detail & Selector */}
        <div className="md:col-span-12">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-on-surface">วิชาที่ลงทะเบียน</h3>
            <div className="relative group min-w-[200px]">
              <select
                value={selectedId}
                onChange={(e) => setSelectedId(e.target.value)}
                className="w-full bg-white border border-primary-container/20 rounded-xl py-2 pl-4 pr-10 text-sm font-bold text-on-surface shadow-sm focus:ring-2 focus:ring-primary-container outline-none appearance-none cursor-pointer group-hover:border-primary/30 transition-all"
              >
                {GRADE_DATA.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-primary">
                <ChevronDown size={16} />
              </div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSubject.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-3xl p-6 soft-shadow border border-primary-container/10 flex items-center gap-6 group transition-all"
            >
              <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center transition-colors", selectedSubject.bg, selectedSubject.color)}>
                <selectedSubject.icon size={32} />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-xl font-bold text-on-surface tracking-tight thai-line-height">
                  {selectedSubject.name}
                </h4>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-surface-container text-outline">
                    {selectedSubject.id}
                  </span>
                  <span className="text-sm font-bold text-secondary">
                    คะแนน: {selectedSubject.rawScore}/100
                  </span>
                </div>
              </div>
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold font-display shadow-lg shadow-primary/20">
                {selectedSubject.grade}
              </div>
            </motion.div>
          </AnimatePresence>
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
