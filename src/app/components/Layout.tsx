import { Outlet, Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Users, UserPlus, Settings, TrendingUp, Menu, X, Calendar } from "lucide-react";
import { useState } from "react";

export function Layout() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { path: "/", icon: LayoutDashboard, label: "Dashboard" },
    { path: "/leads", icon: UserPlus, label: "Leads" },
    { path: "/clientes", icon: Users, label: "Clientes" },
    { path: "/sistema-interno", icon: Settings, label: "Sistema Interno" },
    { path: "/conversao", icon: TrendingUp, label: "Conversão" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0e27] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-[#0f1535] border-b border-gray-800 flex items-center justify-between px-6 z-50">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden text-gray-400 hover:text-white"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-xl font-bold">C</span>
            </div>
            <span className="text-xl font-bold">CRM</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700">
            <Calendar size={18} />
            <span className="text-sm">Março 2026</span>
          </button>
        </div>
      </header>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-16 bottom-0 w-64 bg-[#0f1535] border-r border-gray-800 transition-transform duration-300 z-40 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                    : "text-gray-400 hover:bg-gray-800 hover:text-white"
                }`}
              >
                <Icon size={20} />
                <span>{item.label}</span>
                {isActive && (
                  <div className="ml-auto w-2 h-2 rounded-full bg-white"></div>
                )}
              </Link>
            );
          })}
        </nav>

        {/* User Info at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-sm font-bold">C</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">Camila Cristina</p>
              <p className="text-xs text-gray-400">Administrador</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 pt-16 min-h-screen">
        <Outlet />
      </main>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
}
