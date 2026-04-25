import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import Sidebar from './components/Sidebar';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import GradesScreen from './screens/GradesScreen';

function AppContent() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  if (!isAuthenticated) {
    return <LoginScreen onLogin={() => setIsAuthenticated(true)} />;
  }

  const getTitle = (path: string) => {
    switch (path) {
      case '/': return 'หน้าหลัก';
      case '/grades': return 'คะแนน';
      case '/profile': return 'ข้อมูลส่วนตัว';
      case '/settings': return 'ตั้งค่า';
      default: return 'ผลการเรียน';
    }
  };

  return (
    <div className="min-h-screen bg-surface">
      <Header 
        title={getTitle(location.pathname)} 
        onMenuClick={() => setIsSidebarOpen(true)} 
      />
      
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />

      <main className="pt-20 pb-24">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/grades" element={<GradesScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/settings" element={<SettingsScreen />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <BottomNav />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
