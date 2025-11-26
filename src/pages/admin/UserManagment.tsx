import React, { useState } from 'react';
import { 
  Search, 
  Plus, 
  MoreVertical, 
  Edit, 
  Trash2, 
  Mail, 
  Phone, 
  Calendar,
  UserCheck,
  UserX,
  Shield,
  Crown
} from 'lucide-react';

// ===== TYPES =====
interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  role: 'Admin' | 'Editor' | 'User';
  status: 'Active' | 'Inactive' | 'Pending';
  joinDate: string;
  avatar: string;
  lastActive: string;
}

interface StatsCardProps {
  icon: React.ElementType;
  label: string;
  value: string;
  change: string;
  color: string;
  iconBg: string;
}

// ===== DATA =====
const STATS = [
  {
    icon: UserCheck,
    label: 'Total Users',
    value: '2,543',
    change: '+12.5%',
    color: 'text-blue-600',
    iconBg: 'bg-blue-100'
  },
  {
    icon: Crown,
    label: 'Admin',
    value: '12',
    change: '+2',
    color: 'text-purple-600',
    iconBg: 'bg-purple-100'
  },
  {
    icon: Shield,
    label: 'Active Users',
    value: '2,431',
    change: '+8.2%',
    color: 'text-green-600',
    iconBg: 'bg-green-100'
  },
  {
    icon: UserX,
    label: 'Pending',
    value: '45',
    change: '-5',
    color: 'text-orange-600',
    iconBg: 'bg-orange-100'
  }
];

const USERS: User[] = [
  {
    id: 1,
    name: 'Ahmad Rasyid',
    email: 'ahmad.rasyid@teknomedia.com',
    phone: '+62 812-3456-7890',
    role: 'Admin',
    status: 'Active',
    joinDate: '2024-01-15',
    avatar: 'AR',
    lastActive: '2 menit lalu'
  },
  {
    id: 2,
    name: 'Siti Nurhaliza',
    email: 'siti.nurhaliza@teknomedia.com',
    phone: '+62 813-9876-5432',
    role: 'Editor',
    status: 'Active',
    joinDate: '2024-02-20',
    avatar: 'SN',
    lastActive: '1 jam lalu'
  },
  {
    id: 3,
    name: 'Budi Santoso',
    email: 'budi.santoso@teknomedia.com',
    phone: '+62 821-5555-4444',
    role: 'User',
    status: 'Active',
    joinDate: '2024-03-10',
    avatar: 'BS',
    lastActive: '3 jam lalu'
  },
  {
    id: 4,
    name: 'Maya Putri',
    email: 'maya.putri@teknomedia.com',
    phone: '+62 856-7777-8888',
    role: 'Editor',
    status: 'Pending',
    joinDate: '2024-11-20',
    avatar: 'MP',
    lastActive: '1 hari lalu'
  },
  {
    id: 5,
    name: 'Dedi Prasetyo',
    email: 'dedi.prasetyo@teknomedia.com',
    phone: '+62 878-3333-2222',
    role: 'User',
    status: 'Inactive',
    joinDate: '2024-05-05',
    avatar: 'DP',
    lastActive: '1 minggu lalu'
  }
];

// ===== COMPONENTS =====
const StatsCard: React.FC<StatsCardProps> = ({ icon: Icon, label, value, change, color, iconBg }) => {
  return (
    <div className="stat-card bg-white border border-gray-200 p-4 md:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      <div className="flex items-center justify-between relative z-10">
        <div>
          <p className="text-xs md:text-sm text-gray-600 font-medium">{label}</p>
          <p className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">{value}</p>
          <p className="text-xs text-green-600 font-semibold mt-2">↗ {change}</p>
        </div>
        <div className={`${iconBg} ${color} p-3 md:p-4 rounded-xl transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 flex-shrink-0`}>
          <Icon className="w-6 h-6 md:w-7 md:h-7" />
        </div>
      </div>
    </div>
  );
};

// Mobile User Card Component
const UserCard: React.FC<{ user: User; onEdit: () => void; onDelete: () => void }> = ({ user, onEdit, onDelete }) => {
  const [showMenu, setShowMenu] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-700';
      case 'Inactive': return 'bg-gray-100 text-gray-700';
      case 'Pending': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Admin': return 'bg-purple-100 text-purple-700';
      case 'Editor': return 'bg-blue-100 text-blue-700';
      case 'User': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getAvatarColor = (role: string) => {
    switch (role) {
      case 'Admin': return 'bg-purple-500';
      case 'Editor': return 'bg-blue-500';
      case 'User': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 ${getAvatarColor(user.role)} rounded-full flex items-center justify-center text-white font-bold flex-shrink-0`}>
            {user.avatar}
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-gray-900 truncate">{user.name}</p>
            <p className="text-xs text-gray-600 truncate">{user.email}</p>
          </div>
        </div>
        <button 
          onClick={() => setShowMenu(!showMenu)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
        >
          <MoreVertical className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="space-y-2 mb-3">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Phone className="w-3 h-3 flex-shrink-0" />
          <span className="truncate">{user.phone}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Calendar className="w-3 h-3 flex-shrink-0" />
          <span>{user.joinDate}</span>
          <span className="text-xs text-gray-500">• {user.lastActive}</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getRoleColor(user.role)}`}>
          {user.role}
        </span>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(user.status)}`}>
          {user.status}
        </span>
      </div>

      {showMenu && (
        <div className="mt-3 pt-3 border-t border-gray-200 flex gap-2">
          <button 
            onClick={onEdit}
            className="flex-1 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium flex items-center justify-center gap-2"
          >
            <Edit className="w-4 h-4" />
            Edit
          </button>
          <button 
            onClick={onDelete}
            className="flex-1 px-3 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors text-sm font-medium flex items-center justify-center gap-2"
          >
            <Trash2 className="w-4 h-4" />
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

// Desktop User Row Component
const UserRow: React.FC<{ user: User; onEdit: () => void; onDelete: () => void }> = ({ user, onEdit, onDelete }) => {
  const [showMenu, setShowMenu] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-700';
      case 'Inactive': return 'bg-gray-100 text-gray-700';
      case 'Pending': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Admin': return 'bg-purple-100 text-purple-700';
      case 'Editor': return 'bg-blue-100 text-blue-700';
      case 'User': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getAvatarColor = (role: string) => {
    switch (role) {
      case 'Admin': return 'bg-purple-500';
      case 'Editor': return 'bg-blue-500';
      case 'User': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200">
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 ${getAvatarColor(user.role)} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
            {user.avatar}
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-gray-900">{user.name}</p>
            <p className="text-sm text-gray-600 flex items-center gap-1 truncate">
              <Mail className="w-3 h-3 flex-shrink-0" /> 
              <span className="truncate">{user.email}</span>
            </p>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <p className="text-sm text-gray-700 flex items-center gap-1">
          <Phone className="w-3 h-3 flex-shrink-0" /> {user.phone}
        </p>
      </td>
      <td className="px-6 py-4">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getRoleColor(user.role)}`}>
          {user.role}
        </span>
      </td>
      <td className="px-6 py-4">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(user.status)}`}>
          {user.status}
        </span>
      </td>
      <td className="px-6 py-4">
        <p className="text-sm text-gray-700 flex items-center gap-1">
          <Calendar className="w-3 h-3 flex-shrink-0" /> {user.joinDate}
        </p>
        <p className="text-xs text-gray-500">{user.lastActive}</p>
      </td>
      <td className="px-6 py-4 relative">
        <button 
          onClick={() => setShowMenu(!showMenu)}
          className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
        >
          <MoreVertical className="w-5 h-5 text-gray-600" />
        </button>
        
        {showMenu && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-xl z-10 overflow-hidden animate-fade-in">
            <button 
              onClick={onEdit}
              className="w-full px-4 py-3 text-left hover:bg-blue-50 flex items-center gap-2 text-gray-700 transition-colors"
            >
              <Edit className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium">Edit User</span>
            </button>
            <button 
              onClick={onDelete}
              className="w-full px-4 py-3 text-left hover:bg-red-50 flex items-center gap-2 text-gray-700 transition-colors"
            >
              <Trash2 className="w-4 h-4 text-red-600" />
              <span className="text-sm font-medium">Delete User</span>
            </button>
          </div>
        )}
      </td>
    </tr>
  );
};

// ===== MAIN COMPONENT =====
const UserManagement: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filteredUsers = USERS.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === 'All' || user.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

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

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
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
            User Management
          </h1>
          <p className="text-gray-600 mt-2 text-base md:text-lg">
            Kelola seluruh pengguna platform Teknomedia dengan mudah
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {STATS.map((stat, idx) => (
            <StatsCard key={idx} {...stat} />
          ))}
        </div>

        {/* Action Bar */}
        <div className="bg-white border border-gray-200 p-4 md:p-6 rounded-xl shadow-lg">
          <div className="flex flex-col gap-4">
            {/* Search */}
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Cari user berdasarkan nama atau email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm md:text-base"
              />
            </div>

            {/* Filters & Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="flex-1 sm:flex-none px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all cursor-pointer text-sm md:text-base"
              >
                <option value="All">All Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Pending">Pending</option>
              </select>

              <button className="flex items-center justify-center gap-2 px-4 md:px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm md:text-base font-semibold">
                <Plus className="w-5 h-5" />
                <span>Add User</span>
              </button>
            </div>
          </div>
        </div>

        {/* Users - Mobile Card View */}
        <div className="lg:hidden space-y-4">
          {filteredUsers.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              onEdit={() => console.log('Edit', user.id)}
              onDelete={() => console.log('Delete', user.id)}
            />
          ))}
          
          {filteredUsers.length === 0 && (
            <div className="text-center py-12 bg-white border border-gray-200 rounded-xl">
              <p className="text-gray-500 text-base md:text-lg">Tidak ada user yang ditemukan</p>
              <p className="text-gray-400 text-sm mt-2">Coba ubah filter atau kata kunci pencarian</p>
            </div>
          )}
        </div>

        {/* Users Table - Desktop View */}
        <div className="hidden lg:block bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                    Join Date
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <UserRow
                    key={user.id}
                    user={user}
                    onEdit={() => console.log('Edit', user.id)}
                    onDelete={() => console.log('Delete', user.id)}
                  />
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty State */}
          {filteredUsers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Tidak ada user yang ditemukan</p>
              <p className="text-gray-400 text-sm mt-2">Coba ubah filter atau kata kunci pencarian</p>
            </div>
          )}

          {/* Pagination */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">
              Menampilkan <span className="font-semibold">{filteredUsers.length}</span> dari <span className="font-semibold">{USERS.length}</span> users
            </p>
            <div className="flex gap-2">
              <button className="px-3 md:px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors text-xs md:text-sm font-medium text-gray-700">
                Previous
              </button>
              <button className="px-3 md:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-xs md:text-sm font-medium">
                1
              </button>
              <button className="px-3 md:px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors text-xs md:text-sm font-medium text-gray-700">
                2
              </button>
              <button className="px-3 md:px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors text-xs md:text-sm font-medium text-gray-700">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;