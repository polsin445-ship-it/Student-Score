import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sigma, ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { GRADE_DATA as gradeData } from '../constants';

export default function GradesScreen() {
  const [selectedId, setSelectedId] = useState(gradeData[0].id);

  const selectedSubject = gradeData.find(item => item.id === selectedId) || gradeData[0];

  return (
    <div className="max-w-[1140px] mx-auto px-5 pt-8 pb-32">
      <header className="mb-8">
        <h2 className="text-3xl text-on-surface mb-2">สรุปผลการเรียน</h2>
        <p className="text-outline font-medium">ภาคเรียนที่ 2 ปีการศึกษา 2568</p>
      </header>

      {/* Subject Selector */}
      <div className="mb-6">
        <label htmlFor="subject-select" className="text-xs font-bold text-primary uppercase tracking-wider ml-2 mb-2 block">
          เลือกรายวิชา
        </label>
        <div className="relative group">
          <select
            id="subject-select"
            value={selectedId}
            onChange={(e) => setSelectedId(e.target.value)}
            className="w-full bg-white border border-primary-container/20 rounded-2xl py-4 pl-6 pr-12 text-md font-bold text-on-surface shadow-sm focus:ring-2 focus:ring-primary-container outline-none appearance-none cursor-pointer group-hover:border-primary/30 transition-all"
          >
            {gradeData.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name} ({item.id})
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 pr-6 flex items-center pointer-events-none text-primary">
            <ChevronDown size={20} />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedSubject.id}
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-[28px] p-6 soft-shadow border border-primary-container/10 group"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              {/* Subject Info */}
              <div className="flex items-center gap-5">
                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center transition-colors", selectedSubject.bg, selectedSubject.color)}>
                  <selectedSubject.icon size={32} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-on-surface thai-line-height leading-tight">
                    {selectedSubject.name}
                  </h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-surface-container text-outline">
                      {selectedSubject.id}
                    </span>
                    <span className="text-sm font-bold text-secondary">
                      คะแนนดิบ: {selectedSubject.rawScore}/{selectedSubject.totalFull}
                    </span>
                  </div>
                </div>
              </div>

              {/* Progress & Grades */}
              <div className="flex items-center gap-8 justify-between md:justify-end">
                <div className="hidden sm:block w-40 h-2.5 bg-surface-container rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(selectedSubject.rawScore / selectedSubject.totalFull) * 100}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={cn("h-full rounded-full", selectedSubject.rawScore >= 80 ? "bg-primary" : "bg-secondary")}
                  />
                </div>
                
                <div className="text-right">
                  <p className="text-[10px] font-bold text-outline uppercase tracking-wider mb-0.5">Grade</p>
                  <p className="text-4xl font-extrabold text-primary font-display">{selectedSubject.grade}</p>
                </div>

                <div className="w-12 h-12 rounded-full border border-pink-50 flex items-center justify-center text-outline group-hover:bg-primary-container/20 transition-colors">
                  <ChevronRight size={20} />
                </div>
              </div>
            </div>

            {/* Raw Score Highlight */}
            <div className="mt-8 pt-6 border-t border-surface-container">
              <div className="bg-surface-container-low rounded-[24px] p-6 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-outline-variant uppercase tracking-widest mb-1">สรุปคะแนนรวมทั้งหมด</p>
                  <p className="text-sm font-medium text-on-surface-variant flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    ผลรวมคะแนนจากทุกส่วน (100 คะแนน)
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-4xl font-extrabold text-on-surface leading-none">
                    {selectedSubject.rawScore}
                    <span className="text-xl text-outline font-bold ml-1">/ {selectedSubject.totalFull}</span>
                  </p>
                  <p className="text-[10px] font-bold text-secondary uppercase mt-2">Total Raw Score</p>
                </div>
              </div>
            </div>

            {/* Encouragement message */}
            <div className="mt-6 p-4 bg-tertiary-container/10 rounded-2xl border border-tertiary-container/20 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-tertiary-container/30 flex items-center justify-center text-tertiary">
                <Sigma size={16} />
              </div>
              <p className="text-xs font-bold text-on-tertiary-container">
                {selectedSubject.rawScore >= 80 
                  ? "ยอดเยี่ยมมาก! คะแนนรวมของคุณอยู่ในเกณฑ์ดีเยี่ยม" 
                  : "พยายามอีกนิด! คะแนนรวมของคุณอยู่ในเกณฑ์ดีและกำลังพัฒนาขึ้น"}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

// Remove ScoreBadge component as it's no longer used
