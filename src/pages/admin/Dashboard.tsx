import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { Users, FileText, Eye, Download } from "lucide-react";

// ===== TYPES =====
interface StatCardProps {
  icon: typeof Users;
  label: string;
  value: string;
  change: string;
  color: string;
}

interface ActivityItemProps {
  id: number;
  user: string;
  action: string;
  time: string;
  type: string;
}

interface ActionButtonProps {
  label: string;
  bg: string;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    name: string;
    value: number;
    color: string;
  }>;
  label?: string;
}

// ===== DATA CONSTANTS =====
const STATS: StatCardProps[] = [
  {
    icon: Users,
    label: "Total Pengguna",
    value: "2,543",
    change: "+12.5%",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: FileText,
    label: "Total Konten",
    value: "1,248",
    change: "+8.2%",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Eye,
    label: "Total Views",
    value: "54,829",
    change: "+24.3%",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Download,
    label: "Downloads",
    value: "3,482",
    change: "+5.1%",
    color: "bg-orange-100 text-orange-600",
  },
];

const VISITOR_DATA = [
  { month: "Jan", users: 400, views: 2400 },
  { month: "Feb", users: 520, views: 2210 },
  { month: "Mar", users: 680, views: 2290 },
  { month: "Apr", users: 750, views: 2000 },
  { month: "May", users: 890, views: 2181 },
  { month: "Jun", users: 1050, views: 2500 },
];

const CONTENT_DATA = [
  { name: "Blog", value: 45 },
  { name: "Video", value: 25 },
  { name: "Infografis", value: 18 },
  { name: "Podcast", value: 12 },
];

const TOP_CONTENT = [
  { name: "React Tutorial", views: 4200, engagement: 2400 },
  { name: "Web Design Tips", views: 3800, engagement: 2210 },
  { name: "JavaScript Guide", views: 5200, engagement: 2290 },
  { name: "CSS Mastery", views: 3500, engagement: 2000 },
  { name: "API Integration", views: 4800, engagement: 2181 },
];

const RECENT_ACTIVITY: ActivityItemProps[] = [
  {
    id: 1,
    user: "Ahmad Rasyid",
    action: "Upload Konten Baru",
    time: "2 jam lalu",
    type: "success",
  },
  {
    id: 2,
    user: "Siti Nurhaliza",
    action: "Update Profil",
    time: "4 jam lalu",
    type: "info",
  },
  {
    id: 3,
    user: "Budi Santoso",
    action: "Download Report",
    time: "1 hari lalu",
    type: "warning",
  },
  {
    id: 4,
    user: "Maya Putri",
    action: "Komentar pada Artikel",
    time: "2 hari lalu",
    type: "info",
  },
];

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"];

const QUICK_ACTIONS: ActionButtonProps[] = [
  {
    label: "+ Tambah Pengguna",
    bg: "bg-blue-600 text-white hover:bg-blue-700",
  },
  {
    label: "📊 Lihat Report",
    bg: "bg-blue-100 text-blue-600 hover:bg-blue-200",
  },
  {
    label: "✏️ Edit Konten",
    bg: "bg-green-100 text-green-600 hover:bg-green-200",
  },
  {
    label: "⚙️ Settings",
    bg: "bg-purple-100 text-purple-600 hover:bg-purple-200",
  },
];

// ===== COMPONENTS =====
const StatCard: React.FC<StatCardProps> = ({ icon: Icon, label, value, change, color }) => {
  const [count, setCount] = useState<number>(0);
  const targetValue = parseInt(value.replace(/,/g, ""));

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = targetValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [targetValue]);

  return (
    <div className="stat-card bg-white border border-gray-200 p-4 md:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      <div className="flex items-center justify-between relative z-10">
        <div>
          <p className="text-xs md:text-sm text-gray-600 font-medium">
            {label}
          </p>
          <p className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
            {count.toLocaleString()}
          </p>
          <p className="text-xs text-green-600 font-semibold mt-2 flex items-center gap-1">
            <span>↗</span> {change}
          </p>
        </div>
        <div className={`${color} p-3 md:p-4 rounded-xl transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12`}>
          <Icon className="w-6 h-6 md:w-8 md:h-8" />
        </div>
      </div>
    </div>
  );
};

const ActivityItem: React.FC<ActivityItemProps> = ({ user, action, time, type }) => {
  const getTypeColor = (type: string): string => {
    switch (type) {
      case "success":
        return "bg-green-500";
      case "warning":
        return "bg-yellow-500";
      default:
        return "bg-blue-500";
    }
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 md:p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all duration-300 gap-2 sm:gap-0">
      <div className="flex items-center space-x-3 md:space-x-4">
        <div className={`w-2 h-2 rounded-full ${getTypeColor(type)} animate-pulse flex-shrink-0`}></div>
        <div>
          <p className="font-medium text-gray-900 text-sm md:text-base">{user}</p>
          <p className="text-xs md:text-sm text-gray-600">{action}</p>
        </div>
      </div>
      <p className="text-xs text-gray-500 sm:text-right">{time}</p>
    </div>
  );
};

const ActionButton: React.FC<ActionButtonProps> = ({ label, bg }) => (
  <button className={`w-full py-2.5 md:py-3 px-4 ${bg} font-medium rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 text-sm md:text-base`}>
    {label}
  </button>
);

// Custom Tooltip
const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 md:p-4 rounded-xl shadow-2xl border border-gray-200">
        <p className="text-gray-900 font-semibold mb-2 text-sm md:text-base">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-xs md:text-sm font-medium" style={{ color: entry.color }}>
            {entry.name}: {entry.value.toLocaleString()}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

// ===== MAIN COMPONENT =====
const AdminDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-white p-4 md:p-6 lg:p-8">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-fade-in-left {
          animation: fadeInLeft 0.6s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fadeInRight 0.6s ease-out forwards;
        }

        .chart-container {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 0.3s forwards;
        }

        .stat-card {
          opacity: 0;
        }

        .stat-card:nth-child(1) { animation: fadeInUp 0.5s ease-out 0.1s forwards; }
        .stat-card:nth-child(2) { animation: fadeInUp 0.5s ease-out 0.2s forwards; }
        .stat-card:nth-child(3) { animation: fadeInUp 0.5s ease-out 0.3s forwards; }
        .stat-card:nth-child(4) { animation: fadeInUp 0.5s ease-out 0.4s forwards; }
      `}</style>
      
      <div className="max-w-7xl mx-auto space-y-6 md:space-y-8">
        {/* Header */}
        <div className="animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Dashboard
          </h1>
          <p className="text-gray-600 mt-2 text-base md:text-lg">
            Selamat datang kembali! Kelola platform Teknomedia dari sini.
          </p>
        </div>

        {/* Statistik Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {STATS.map((stat, idx) => (
            <StatCard key={idx} {...stat} />
          ))}
        </div>

        {/* Charts Section - 3 Types */}
        <div className="grid grid-cols-1 gap-6">
          {/* 1. LINE CHART - Diagram Ombak */}
          <div className="bg-white border border-gray-200 p-4 md:p-6 rounded-xl shadow-lg chart-container hover:shadow-2xl transition-shadow duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
              <h2 className="text-lg md:text-xl font-bold text-gray-900 flex items-center gap-2">
                <span className="text-xl md:text-2xl">📈</span>
                <span className="text-sm sm:text-base md:text-xl">Statistik Pengunjung & Views</span>
              </h2>
              <div className="flex gap-2">
                <span className="px-2 md:px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-semibold">
                  Users
                </span>
                <span className="px-2 md:px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-semibold">
                  Views
                </span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={250} className="md:!h-[300px]">
              <LineChart data={VISITOR_DATA}>
                <defs>
                  <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.5} />
                <XAxis 
                  dataKey="month" 
                  stroke="#6b7280"
                  style={{ fontSize: '11px', fontWeight: '600' }}
                />
                <YAxis 
                  stroke="#6b7280"
                  style={{ fontSize: '11px', fontWeight: '600' }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend 
                  wrapperStyle={{ paddingTop: '10px', fontSize: '12px' }}
                  iconType="circle"
                />
                <Line
                  type="monotone"
                  dataKey="users"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={{ r: 4, fill: '#3b82f6', strokeWidth: 2 }}
                  activeDot={{ r: 6, fill: '#3b82f6' }}
                  animationDuration={2000}
                />
                <Line
                  type="monotone"
                  dataKey="views"
                  stroke="#10b981"
                  strokeWidth={2}
                  dot={{ r: 4, fill: '#10b981', strokeWidth: 2 }}
                  activeDot={{ r: 6, fill: '#10b981' }}
                  animationDuration={2000}
                  animationBegin={500}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* 2. PIE CHART - Diagram Grafik Lingkaran */}
          <div className="bg-white border border-gray-200 p-4 md:p-6 rounded-xl shadow-lg chart-container hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-xl md:text-2xl">🎯</span>
              <span className="text-sm sm:text-base md:text-xl">Jenis Konten</span>
            </h2>
            <ResponsiveContainer width="100%" height={250} className="md:!h-[300px]">
              <PieChart>
                <Pie
                  data={CONTENT_DATA}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={70}
                  fill="#8884d8"
                  dataKey="value"
                  animationBegin={0}
                  animationDuration={1500}
                  style={{ fontSize: '11px' }}
                >
                  {CONTENT_DATA.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                      className="hover:opacity-80 transition-opacity cursor-pointer"
                    />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
              {CONTENT_DATA.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                  <div 
                    className="w-3 h-3 rounded-full flex-shrink-0" 
                    style={{ backgroundColor: COLORS[idx] }}
                  ></div>
                  <span className="text-xs font-medium text-gray-700">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3. BAR CHART - Diagram Tabung */}
        <div className="bg-white border border-gray-200 p-4 md:p-6 rounded-xl shadow-lg chart-container hover:shadow-2xl transition-shadow duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3">
            <h2 className="text-lg md:text-xl font-bold text-gray-900 flex items-center gap-2">
              <span className="text-xl md:text-2xl">🏆</span>
              <span className="text-sm sm:text-base md:text-xl">Konten Terpopuler</span>
            </h2>
            <div className="flex gap-2">
              <span className="px-2 md:px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-semibold">
                Views
              </span>
              <span className="px-2 md:px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-semibold">
                Engagement
              </span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={280} className="md:!h-[350px]">
            <BarChart data={TOP_CONTENT}>
              <defs>
                <linearGradient id="colorBar1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity={1}/>
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.6}/>
                </linearGradient>
                <linearGradient id="colorBar2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10b981" stopOpacity={1}/>
                  <stop offset="100%" stopColor="#10b981" stopOpacity={0.6}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" opacity={0.5} />
              <XAxis 
                dataKey="name" 
                stroke="#6b7280"
                style={{ fontSize: '10px', fontWeight: '600' }}
                angle={-15}
                textAnchor="end"
                height={70}
              />
              <YAxis 
                stroke="#6b7280"
                style={{ fontSize: '11px', fontWeight: '600' }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                wrapperStyle={{ paddingTop: '10px', fontSize: '12px' }}
                iconType="rect"
              />
              <Bar 
                dataKey="views" 
                fill="url(#colorBar1)" 
                radius={[8, 8, 0, 0]}
                animationDuration={1500}
              />
              <Bar 
                dataKey="engagement" 
                fill="url(#colorBar2)" 
                radius={[8, 8, 0, 0]}
                animationDuration={1500}
                animationBegin={500}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Activity & Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Aktivitas Terbaru */}
          <div className="lg:col-span-2 bg-white border border-gray-200 p-4 md:p-6 rounded-xl shadow-lg animate-fade-in-left hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-xl md:text-2xl">⚡</span>
              <span className="text-sm sm:text-base md:text-xl">Aktivitas Terbaru</span>
            </h2>
            <div className="space-y-3">
              {RECENT_ACTIVITY.map((activity) => (
                <ActivityItem key={activity.id} {...activity} />
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white border border-gray-200 p-4 md:p-6 rounded-xl shadow-lg animate-fade-in-right hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-xl md:text-2xl">🚀</span>
              <span className="text-sm sm:text-base md:text-xl">Quick Actions</span>
            </h2>
            <div className="space-y-3">
              {QUICK_ACTIONS.map((action, idx) => (
                <ActionButton key={idx} {...action} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;