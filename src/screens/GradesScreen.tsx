import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sigma, ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { GRADE_DATA as gradeData } from '../constants';

export default function GradesScreen() {
  const totalCredits = gradeData.reduce((acc, item) => acc + item.credits, 0);
  const weightedGrades = gradeData.reduce((acc, item) => acc + (parseFloat(item.grade) * item.credits), 0);
  const gpax = (weightedGrades / totalCredits).toFixed(2);

  return (
    <div className="max-w-[1140px] mx-auto px-5 pt-8 pb-32">
      <header className="mb-8">
        <h2 className="text-3xl text-on-surface mb-2">สมุดพกพาออนไลน์</h2>
        <p className="text-outline font-medium">ภาคเรียนที่ 2 ปีการศึกษา 2568</p>
      </header>

      {/* Grade Table */}
      <div className="bg-white rounded-[32px] soft-shadow border border-primary-container/10 overflow-hidden mb-8">
        {/* Table Header */}
        <div className="grid grid-cols-12 bg-primary-container/20 px-6 py-4 border-b border-primary-container/10">
          <div className="col-span-6 md:col-span-7">
            <span className="text-[10px] font-bold text-primary uppercase tracking-widest leading-none">ชื่อวิชา</span>
          </div>
          <div className="col-span-2 text-center">
            <span className="text-[10px] font-bold text-primary uppercase tracking-widest leading-none">นก.</span>
          </div>
          <div className="col-span-2 text-center">
            <span className="text-[10px] font-bold text-primary uppercase tracking-widest leading-none">คะแนน</span>
          </div>
          <div className="col-span-2 text-center">
            <span className="text-[10px] font-bold text-primary uppercase tracking-widest leading-none">เกรด</span>
          </div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-surface-container">
          {gradeData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.03 }}
              className="grid grid-cols-12 items-center px-6 py-4 hover:bg-surface-container-low transition-colors"
            >
              <div className="col-span-6 md:col-span-7 flex items-center gap-3">
                <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center shrink-0", item.bg, item.color)}>
                  <item.icon size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-on-surface truncate thai-line-height leading-tight">{item.name}</p>
                  <p className="text-[10px] font-medium text-outline uppercase">{item.id}</p>
                </div>
              </div>
              <div className="col-span-2 text-center">
                <span className="text-sm font-bold text-on-surface-variant font-display">{item.credits.toFixed(1)}</span>
              </div>
              <div className="col-span-2 text-center">
                <span className="text-sm font-bold text-on-surface-variant font-display">{item.rawScore}</span>
              </div>
              <div className="col-span-2 text-center">
                <span className={cn(
                  "text-lg font-black font-display",
                  parseFloat(item.grade) >= 3.5 ? "text-primary" : "text-secondary"
                )}>{item.grade}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Cumulative GPA Summary */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-primary-container/20 rounded-[32px] p-8 border border-primary-container/30 flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 rounded-3xl bg-white soft-shadow flex items-center justify-center text-primary">
            <Sigma size={32} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-on-primary-container leading-tight">เกรดเฉลี่ยสะสม (GPAX)</h3>
            <p className="text-sm font-medium text-on-primary-container/70">สรุปผลการเรียนภาคเรียนปัจจุบัน</p>
          </div>
        </div>
        
        <div className="flex items-center gap-10">
          <div className="text-center">
            <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">หน่วยกิตรวม</p>
            <p className="text-2xl font-bold text-on-surface font-display">{totalCredits.toFixed(1)}</p>
          </div>
          <div className="w-px h-10 bg-primary-container"></div>
          <div className="text-center">
            <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">เกรดเฉลี่ย</p>
            <p className="text-5xl font-black text-primary font-display leading-none">{gpax}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Remove ScoreBadge component as it's no longer used
