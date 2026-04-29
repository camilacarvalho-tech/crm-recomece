import { TrendingUp, TrendingDown, Target, Award } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const monthlyData = [
  { month: "Out", conversoes: 45 },
  { month: "Nov", conversoes: 52 },
  { month: "Dez", conversoes: 61 },
  { month: "Jan", conversoes: 48 },
  { month: "Fev", conversoes: 58 },
  { month: "Mar", conversoes: 67 },
];

const funnelData = [
  { name: "Leads", value: 847, color: "#8b5cf6" },
  { name: "Qualificados", value: 450, color: "#a78bfa" },
  { name: "Propostas", value: 230, color: "#c4b5fd" },
  { name: "Fechados", value: 67, color: "#ddd6fe" },
];

export function Conversao() {
  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold">Conversão</h1>
        <p className="text-gray-400 mt-1">Análise de conversão e funil de vendas</p>
      </div>

      {/* Conversion Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-[#0f1535] rounded-xl p-6 border border-gray-800">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
              <TrendingUp className="text-blue-400" size={24} />
            </div>
            <span className="text-green-400 text-sm flex items-center gap-1">
              <TrendingUp size={14} />
              +5.1%
            </span>
          </div>
          <p className="text-gray-400 text-sm mb-2">Taxa de Conversão</p>
          <p className="text-3xl font-bold">42.3%</p>
        </div>

        <div className="bg-[#0f1535] rounded-xl p-6 border border-gray-800">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
              <Target className="text-purple-400" size={24} />
            </div>
            <span className="text-green-400 text-sm flex items-center gap-1">
              <TrendingUp size={14} />
              +8.2%
            </span>
          </div>
          <p className="text-gray-400 text-sm mb-2">Meta do Mês</p>
          <p className="text-3xl font-bold">85%</p>
        </div>

        <div className="bg-[#0f1535] rounded-xl p-6 border border-gray-800">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center">
              <Award className="text-green-400" size={24} />
            </div>
            <span className="text-green-400 text-sm flex items-center gap-1">
              <TrendingUp size={14} />
              +12.5%
            </span>
          </div>
          <p className="text-gray-400 text-sm mb-2">Conversões este Mês</p>
          <p className="text-3xl font-bold">67</p>
        </div>

        <div className="bg-[#0f1535] rounded-xl p-6 border border-gray-800">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center">
              <TrendingDown className="text-red-400" size={24} />
            </div>
            <span className="text-red-400 text-sm flex items-center gap-1">
              <TrendingDown size={14} />
              -3.2%
            </span>
          </div>
          <p className="text-gray-400 text-sm mb-2">Leads Perdidos</p>
          <p className="text-3xl font-bold">143</p>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="bg-[#0f1535] rounded-xl p-6 border border-gray-800">
          <h2 className="text-xl font-bold mb-2">Conversões Mensais</h2>
          <p className="text-gray-400 text-sm mb-6">Últimos 6 meses</p>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1f2937",
                  border: "1px solid #374151",
                  borderRadius: "8px",
                }}
              />
              <Bar dataKey="conversoes" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-[#0f1535] rounded-xl p-6 border border-gray-800">
          <h2 className="text-xl font-bold mb-2">Funil de Vendas</h2>
          <p className="text-gray-400 text-sm mb-6">Distribuição atual</p>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={funnelData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {funnelData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1f2937",
                  border: "1px solid #374151",
                  borderRadius: "8px",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Funnel Details */}
      <div className="bg-[#0f1535] rounded-xl p-6 border border-gray-800">
        <h2 className="text-xl font-bold mb-6">Detalhes do Funil</h2>
        <div className="space-y-4">
          {funnelData.map((stage, index) => {
            const prevValue = index > 0 ? funnelData[index - 1].value : stage.value;
            const conversionRate = ((stage.value / prevValue) * 100).toFixed(1);
            return (
              <div key={stage.name} className="flex items-center gap-4">
                <div className="w-32 text-gray-300">{stage.name}</div>
                <div className="flex-1 h-12 bg-gray-800 rounded-lg overflow-hidden">
                  <div
                    className="h-full flex items-center px-4 font-bold text-white"
                    style={{
                      width: `${(stage.value / funnelData[0].value) * 100}%`,
                      backgroundColor: stage.color,
                    }}
                  >
                    {stage.value}
                  </div>
                </div>
                {index > 0 && (
                  <div className="w-24 text-right">
                    <span className="text-sm text-gray-400">{conversionRate}%</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
