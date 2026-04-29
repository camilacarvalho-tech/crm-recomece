import { Activity, Users, Database, Shield, Bell, UserCog, UserPlus } from "lucide-react";

export function SistemaInterno() {
  const usuarios = [
    { id: 1, nome: "Camila Cristina", cargo: "Administrador", status: "Online" },
    { id: 2, nome: "João Silva", cargo: "Vendedor", status: "Offline" },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold">Sistema Interno</h1>
          <p className="text-gray-400 mt-1">Gerenciamento e configurações do sistema</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500 to-purple-600 rounded-lg hover:opacity-90">
          <UserPlus size={18} />
          <span>Cadastrar Cliente</span>
        </button>
      </div>

      {/* System Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Uptime */}
        <div className="bg-gradient-to-br from-teal-900/20 to-teal-800/10 rounded-xl p-6 border border-teal-700/30">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center">
              <Activity className="text-teal-400" size={24} />
            </div>
            <div>
              <p className="text-gray-300 text-sm">Uptime do Sistema</p>
              <p className="text-3xl font-bold text-white mt-1">99.9%</p>
            </div>
          </div>
        </div>

        {/* Active Users */}
        <div className="bg-[#0f1535] rounded-xl p-6 border border-gray-800">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
              <Users className="text-purple-400" size={24} />
            </div>
            <div>
              <p className="text-gray-300 text-sm">Usuários Ativos</p>
              <p className="text-3xl font-bold text-white mt-1">2</p>
            </div>
          </div>
        </div>

        {/* Backup */}
        <div className="bg-[#0f1535] rounded-xl p-6 border border-gray-800">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
              <Database className="text-purple-400" size={24} />
            </div>
            <div>
              <p className="text-gray-300 text-sm">Backup Automático</p>
              <p className="text-3xl font-bold text-white mt-1">Ativo</p>
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="bg-[#0f1535] rounded-xl p-6 border border-gray-800">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center">
              <Shield className="text-yellow-500" size={24} />
            </div>
            <div>
              <p className="text-gray-300 text-sm">Segurança</p>
              <p className="text-3xl font-bold text-white mt-1">SSL</p>
            </div>
          </div>
        </div>
      </div>

      {/* System Modules */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Módulos do Sistema</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-[#0f1535] rounded-xl p-6 border border-gray-800 hover:border-purple-500 transition-colors cursor-pointer">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4">
              <UserCog size={28} className="text-white" />
            </div>
            <h3 className="font-bold text-lg mb-2">Gerenciamento de Usuários</h3>
            <p className="text-sm text-gray-400">
              Controle de acesso e permissões dos usuários do sistema
            </p>
          </div>

          <div className="bg-[#0f1535] rounded-xl p-6 border border-gray-800 hover:border-purple-500 transition-colors cursor-pointer">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-4">
              <Bell size={28} className="text-white" />
            </div>
            <h3 className="font-bold text-lg mb-2">Notificações</h3>
            <p className="text-sm text-gray-400">
              Configure tarefas automáticas e agendadas
            </p>
          </div>

          <div className="bg-[#0f1535] rounded-xl p-6 border border-gray-800 hover:border-purple-500 transition-colors cursor-pointer">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-4">
              <Activity size={28} className="text-white" />
            </div>
            <h3 className="font-bold text-lg mb-2">Logs do Sistema</h3>
            <p className="text-sm text-gray-400">
              Visualize todas as atividades do sistema
            </p>
          </div>
        </div>
      </div>

      {/* Users Management */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Usuários do Sistema</h2>
        <div className="bg-[#0f1535] rounded-xl border border-gray-800 overflow-hidden">
          <table className="w-full">
            <thead className="bg-[#0a0e27] border-b border-gray-800">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Usuário</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Cargo</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Status</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Ações</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario) => (
                <tr key={usuario.id} className="border-b border-gray-800 last:border-0">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                        <span className="text-sm font-bold">{usuario.nome.charAt(0)}</span>
                      </div>
                      <span className="font-medium">{usuario.nome}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-300">{usuario.cargo}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        usuario.status === "Online"
                          ? "bg-green-500/10 text-green-400"
                          : "bg-gray-500/10 text-gray-400"
                      }`}
                    >
                      {usuario.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                      Editar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
