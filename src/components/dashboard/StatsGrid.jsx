// src/components/dashboard/StatsGrid.jsx
import React from 'react';

const StatsGrid = ({ stats }) => {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    yellow: 'from-yellow-500 to-yellow-600',
    red: 'from-red-500 to-red-600',
    indigo: 'from-indigo-500 to-indigo-600',
    purple: 'from-purple-500 to-purple-600',
  };

  const trendIcons = {
    up: '📈',
    down: '📉',
    neutral: '➡️',
    alert: '🚨'
  };

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat, index) => (
        <div key={index} className="relative p-6 bg-gradient-to-br rounded-2xl shadow-xs overflow-hidden group transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
          {/* Background gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[stat.color]} opacity-90`}></div>
          
          {/* Animated circles decoration */}
          <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-white/10"></div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-white/10"></div>
          
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <span className="text-2xl">{stat.icon}</span>
              </div>
              <span className="text-lg">{trendIcons[stat.trend]}</span>
            </div>
            
            <p className="text-sm font-medium text-white/90 mb-1">
              {stat.title}
            </p>
            <p className="text-2xl font-bold text-white mb-2">
              {stat.value.toLocaleString()}
            </p>
            <p className="text-xs font-medium text-white/70">
              {stat.change}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;