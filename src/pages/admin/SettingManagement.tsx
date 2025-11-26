import React, { useState } from 'react';
import {
  Settings,
  Globe,
  Bell,
  Lock,
  Mail,
  Database,
  Palette,
  Shield,
  Users,
  CreditCard,
  Zap,
  Code,
  Eye,
  EyeOff,
  Save,
  RefreshCw,
  AlertCircle,
  CheckCircle,
  Moon,
  Sun,
  Languages,
  FileText,
  Image,
  Video,
  Server,
  Key,
  Activity
} from 'lucide-react';

// ===== TYPES =====
interface SettingCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  badge?: string;
  onClick: () => void;
}

interface ToggleSetting {
  id: string;
  label: string;
  description: string;
  enabled: boolean;
}

// ===== DATA =====
const SETTING_CATEGORIES = [
  {
    icon: Globe,
    title: 'General Settings',
    description: 'Pengaturan umum platform, nama, logo, dan informasi dasar',
    badge: 'Penting',
    color: 'blue'
  },
  {
    icon: Users,
    title: 'User Management',
    description: 'Kelola hak akses, roles, dan permission pengguna',
    badge: 'Active',
    color: 'purple'
  },
  {
    icon: Bell,
    title: 'Notifications',
    description: 'Atur notifikasi email, push, dan sistem alert',
    badge: '12 Active',
    color: 'orange'
  },
  {
    icon: Lock,
    title: 'Security & Privacy',
    description: 'Keamanan akun, 2FA, dan kebijakan privasi',
    badge: 'Critical',
    color: 'red'
  },
  {
    icon: Mail,
    title: 'Email Settings',
    description: 'Konfigurasi SMTP, template email, dan automated emails',
    badge: '',
    color: 'green'
  },
  {
    icon: Database,
    title: 'Database & Backup',
    description: 'Backup otomatis, restore, dan maintenance database',
    badge: 'Auto',
    color: 'indigo'
  },
  {
    icon: Palette,
    title: 'Appearance',
    description: 'Theme, colors, typography, dan branding platform',
    badge: '',
    color: 'pink'
  },
  {
    icon: CreditCard,
    title: 'Billing & Payment',
    description: 'Payment gateway, subscription, dan invoice management',
    badge: '',
    color: 'emerald'
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Cache, CDN, optimization, dan monitoring performa',
    badge: '98%',
    color: 'yellow'
  },
  {
    icon: Code,
    title: 'API & Integration',
    description: 'API keys, webhooks, dan third-party integrations',
    badge: '8 Active',
    color: 'cyan'
  },
  {
    icon: FileText,
    title: 'Content Settings',
    description: 'SEO, meta tags, sitemap, dan content policies',
    badge: '',
    color: 'violet'
  },
  {
    icon: Server,
    title: 'System Settings',
    description: 'Server config, logs, cron jobs, dan system maintenance',
    badge: 'Advanced',
    color: 'slate'
  }
];

// ===== COMPONENTS =====
const SettingCard: React.FC<SettingCardProps & { color: string }> = ({ 
  icon: Icon, 
  title, 
  description, 
  badge, 
  onClick,
  color 
}) => {
  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; iconBg: string; iconText: string; badge: string }> = {
      blue: { bg: 'hover:bg-blue-50', text: 'text-blue-600', iconBg: 'bg-blue-100', iconText: 'text-blue-600', badge: 'bg-blue-500' },
      purple: { bg: 'hover:bg-purple-50', text: 'text-purple-600', iconBg: 'bg-purple-100', iconText: 'text-purple-600', badge: 'bg-purple-500' },
      orange: { bg: 'hover:bg-orange-50', text: 'text-orange-600', iconBg: 'bg-orange-100', iconText: 'text-orange-600', badge: 'bg-orange-500' },
      red: { bg: 'hover:bg-red-50', text: 'text-red-600', iconBg: 'bg-red-100', iconText: 'text-red-600', badge: 'bg-red-500' },
      green: { bg: 'hover:bg-green-50', text: 'text-green-600', iconBg: 'bg-green-100', iconText: 'text-green-600', badge: 'bg-green-500' },
      indigo: { bg: 'hover:bg-indigo-50', text: 'text-indigo-600', iconBg: 'bg-indigo-100', iconText: 'text-indigo-600', badge: 'bg-indigo-500' },
      pink: { bg: 'hover:bg-pink-50', text: 'text-pink-600', iconBg: 'bg-pink-100', iconText: 'text-pink-600', badge: 'bg-pink-500' },
      emerald: { bg: 'hover:bg-emerald-50', text: 'text-emerald-600', iconBg: 'bg-emerald-100', iconText: 'text-emerald-600', badge: 'bg-emerald-500' },
      yellow: { bg: 'hover:bg-yellow-50', text: 'text-yellow-600', iconBg: 'bg-yellow-100', iconText: 'text-yellow-600', badge: 'bg-yellow-500' },
      cyan: { bg: 'hover:bg-cyan-50', text: 'text-cyan-600', iconBg: 'bg-cyan-100', iconText: 'text-cyan-600', badge: 'bg-cyan-500' },
      violet: { bg: 'hover:bg-violet-50', text: 'text-violet-600', iconBg: 'bg-violet-100', iconText: 'text-violet-600', badge: 'bg-violet-500' },
      slate: { bg: 'hover:bg-slate-50', text: 'text-slate-600', iconBg: 'bg-slate-100', iconText: 'text-slate-600', badge: 'bg-slate-500' }
    };
    return colors[color] || colors.blue;
  };

  const colorClasses = getColorClasses(color);

  return (
    <button
      onClick={onClick}
      className={`w-full bg-white border border-gray-200 p-4 md:p-6 rounded-xl shadow-lg ${colorClasses.bg} transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl group relative overflow-hidden text-left`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      
      <div className="relative z-10 flex items-start gap-3 md:gap-4">
        <div className={`${colorClasses.iconBg} ${colorClasses.iconText} p-2 md:p-3 rounded-xl transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 flex-shrink-0`}>
          <Icon className="w-5 h-5 md:w-6 md:h-6" />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <h3 className="font-bold text-gray-900 text-base md:text-lg">{title}</h3>
            {badge && (
              <span className={`px-2 py-1 ${colorClasses.badge} text-white text-xs font-semibold rounded-full whitespace-nowrap`}>
                {badge}
              </span>
            )}
          </div>
          <p className="text-xs md:text-sm text-gray-600 line-clamp-2">{description}</p>
        </div>
      </div>
    </button>
  );
};

const QuickSettingsPanel: React.FC = () => {
  const [settings, setSettings] = useState<ToggleSetting[]>([
    { id: 'maintenance', label: 'Maintenance Mode', description: 'Aktifkan mode maintenance untuk sistem', enabled: false },
    { id: 'registration', label: 'User Registration', description: 'Izinkan pendaftaran user baru', enabled: true },
    { id: 'comments', label: 'Comments', description: 'Enable komentar di konten', enabled: true },
    { id: 'api', label: 'Public API', description: 'Aktifkan akses API public', enabled: false },
    { id: 'analytics', label: 'Analytics Tracking', description: 'Track user behavior dan statistik', enabled: true },
    { id: 'cache', label: 'Cache System', description: 'Enable caching untuk performa', enabled: true }
  ]);

  const toggleSetting = (id: string) => {
    setSettings(prev => 
      prev.map(setting => 
        setting.id === id ? { ...setting, enabled: !setting.enabled } : setting
      )
    );
  };

  return (
    <div className="bg-white border border-gray-200 p-4 md:p-6 rounded-xl shadow-lg">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 md:mb-6 gap-3">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">Quick Settings</h2>
          <p className="text-xs md:text-sm text-gray-600 mt-1">Pengaturan cepat yang sering digunakan</p>
        </div>
        <button className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
          <Save className="w-4 h-4" />
          <span className="text-sm font-medium">Save All</span>
        </button>
      </div>

      <div className="space-y-3 md:space-y-4">
        {settings.map((setting) => (
          <div key={setting.id} className="flex items-center justify-between p-3 md:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors gap-3">
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-900 text-sm md:text-base">{setting.label}</p>
              <p className="text-xs md:text-sm text-gray-600 truncate">{setting.description}</p>
            </div>
            <button
              onClick={() => toggleSetting(setting.id)}
              className={`relative w-12 h-7 md:w-14 md:h-8 rounded-full transition-colors duration-300 flex-shrink-0 ${
                setting.enabled ? 'bg-green-500' : 'bg-gray-300'
              }`}
            >
              <div
                className={`absolute top-1 w-5 h-5 md:w-6 md:h-6 bg-white rounded-full transition-transform duration-300 ${
                  setting.enabled ? 'translate-x-6 md:translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const SystemStatus: React.FC = () => {
  const statusItems = [
    { label: 'System Status', value: 'Operational', status: 'success', icon: CheckCircle },
    { label: 'Database', value: 'Connected', status: 'success', icon: Database },
    { label: 'API Services', value: 'Running', status: 'success', icon: Zap },
    { label: 'Storage Usage', value: '45.2 GB / 100 GB', status: 'warning', icon: Server },
    { label: 'Last Backup', value: '2 hours ago', status: 'success', icon: RefreshCw },
    { label: 'Active Users', value: '1,234 online', status: 'info', icon: Activity }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'text-green-600 bg-green-100';
      case 'warning': return 'text-orange-600 bg-orange-100';
      case 'error': return 'text-red-600 bg-red-100';
      default: return 'text-blue-600 bg-blue-100';
    }
  };

  return (
    <div className="bg-white border border-gray-200 p-4 md:p-6 rounded-xl shadow-lg">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 md:mb-6 gap-3">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">System Status</h2>
        <div className="flex items-center gap-2 px-3 py-2 bg-green-100 text-green-700 rounded-full">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs md:text-sm font-semibold">All Systems Operational</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
        {statusItems.map((item, idx) => (
          <div key={idx} className="p-3 md:p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
            <div className="flex items-center gap-2 md:gap-3">
              <div className={`p-2 rounded-lg ${getStatusColor(item.status)} flex-shrink-0`}>
                <item.icon className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-gray-600 font-medium truncate">{item.label}</p>
                <p className="text-xs md:text-sm font-bold text-gray-900 truncate">{item.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const RecentActivity: React.FC = () => {
  const activities = [
    { action: 'Email settings updated', user: 'Admin', time: '5 minutes ago', icon: Mail, color: 'blue' },
    { action: 'Security policy changed', user: 'Super Admin', time: '1 hour ago', icon: Shield, color: 'red' },
    { action: 'Database backup completed', user: 'System', time: '2 hours ago', icon: Database, color: 'green' },
    { action: 'API key regenerated', user: 'Developer', time: '3 hours ago', icon: Key, color: 'purple' },
    { action: 'Theme updated', user: 'Admin', time: '5 hours ago', icon: Palette, color: 'pink' }
  ];

  return (
    <div className="bg-white border border-gray-200 p-4 md:p-6 rounded-xl shadow-lg">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Recent Activity</h2>
      
      <div className="space-y-2 md:space-y-3">
        {activities.map((activity, idx) => (
          <div key={idx} className="flex items-center gap-3 md:gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <div className={`p-2 rounded-lg bg-${activity.color}-100 text-${activity.color}-600 flex-shrink-0`}>
              <activity.icon className="w-3 h-3 md:w-4 md:h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-900 text-sm md:text-base truncate">{activity.action}</p>
              <p className="text-xs md:text-sm text-gray-600 truncate">{activity.user} • {activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ===== MAIN COMPONENT =====
const SettingManagement: React.FC = () => {
  const [selectedSetting, setSelectedSetting] = useState<string | null>(null);

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

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      <div className="max-w-7xl mx-auto space-y-6 md:space-y-8">
        {/* Header */}
        <div className="animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Settings Management
          </h1>
          <p className="text-gray-600 mt-2 text-base md:text-lg">
            Kelola seluruh pengaturan dan konfigurasi platform Teknomedia
          </p>
        </div>

        {/* Quick Alert */}
        <div className="bg-blue-50 border border-blue-200 p-3 md:p-4 rounded-xl flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="flex-1 min-w-0">
            <p className="text-xs md:text-sm font-semibold text-blue-900">
              Backup otomatis telah berhasil dilakukan 2 jam yang lalu
            </p>
            <p className="text-xs text-blue-700 mt-1">
              Next backup scheduled in 22 hours
            </p>
          </div>
        </div>

        {/* System Status */}
        <SystemStatus />

        {/* Quick Settings */}
        <QuickSettingsPanel />

        {/* Setting Categories */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">All Settings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {SETTING_CATEGORIES.map((category, idx) => (
              <SettingCard
                key={idx}
                {...category}
                onClick={() => setSelectedSetting(category.title)}
              />
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <RecentActivity />

        {/* Actions Bar */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 md:p-6 rounded-xl shadow-lg">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="text-white font-bold text-lg md:text-xl">Need Help?</h3>
              <p className="text-blue-100 text-xs md:text-sm mt-1">Hubungi tim support atau baca dokumentasi lengkap</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button className="px-4 md:px-6 py-2 md:py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-sm md:text-base whitespace-nowrap">
                Documentation
              </button>
              <button className="px-4 md:px-6 py-2 md:py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition-colors font-semibold text-sm md:text-base whitespace-nowrap">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingManagement;