import { useState, useEffect } from "react";
import { Search, Phone, Mail, Calendar, ArrowRight } from "lucide-react";

interface Lead {
  id: string;
  nome: string;
  telefone?: string;
  email?: string;
  banco: string;
  valor: number;
  score: string;
  cpf?: string;
}

export function Leads() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  // 🔥 BUSCAR LEADS DA API
  const carregarLeads = async () => {
    try {
      const res = await fetch("https://backend-recomece-api-1.onrender.com/leads");
      const data = await res.json();

      const leadsFormatados = data.map((item: any) => ({
        id: item.id?.toString(),
        nome: item.nome,
        telefone: item.telefone || "(14) 99999-9999",
        email: item.email || "cliente@email.com",
        banco: item.banco,
        valor: item.valor,
        score: item.score,
        cpf: item.cpf
      }));

      setLeads(leadsFormatados);
    } catch (err) {
      console.error("Erro ao buscar leads:", err);
    }
  };

  useEffect(() => {
    carregarLeads();
  }, []);

  // 🔥 BOTÃO WHATSAPP
  const chamarWhatsApp = (lead: Lead) => {
    const mensagem = `Olá ${lead.nome}, vi sua simulação de R$ ${lead.valor} pelo ${lead.banco}. Vamos finalizar?`;
    window.open(
      `https://wa.me/5514991846966?text=${encodeURIComponent(mensagem)}`,
      "_blank"
    );
  };

  const filteredLeads = leads.filter((lead) =>
    lead.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    if (status === "APROVADO") return "text-green-400";
    if (status === "PRÉ-APROVADO") return "text-yellow-400";
    return "text-gray-400";
  };

  const getStatusBg = (status: string) => {
    if (status === "APROVADO") return "bg-green-500/10";
    if (status === "PRÉ-APROVADO") return "bg-yellow-500/10";
    return "bg-gray-500/10";
  };

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Leads</h1>
        <p className="text-gray-400 mt-1">Leads capturados do site</p>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Buscar lead..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-[#0f1535] border border-gray-800 rounded-lg text-white"
        />
      </div>

      <div className="space-y-3">
        {filteredLeads.map((lead) => (
          <div key={lead.id} className="bg-[#0f1535] rounded-xl p-6 border border-gray-800">
            <div className="flex items-center justify-between flex-wrap gap-4">

              <div className="flex items-center gap-4 flex-1">
                <div className="w-14 h-14 rounded-full bg-purple-500 flex items-center justify-center">
                  <span className="text-xl font-bold">
                    {lead.nome.charAt(0)}
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-lg">{lead.nome}</h3>

                  <div className="flex gap-4 mt-2 text-sm text-gray-300">
                    <div className="flex items-center gap-2">
                      <Phone size={14} />
                      <span>{lead.telefone}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Mail size={14} />
                      <span>{lead.email}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span>Hoje</span>
                    </div>
                  </div>

                  <p className="text-sm mt-2 text-gray-400">
                    Banco: {lead.banco} • Valor: R$ {lead.valor}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className={`px-4 py-2 rounded-lg ${getStatusBg(lead.score)}`}>
                  <p className={`font-bold ${getStatusColor(lead.score)}`}>
                    {lead.score}
                  </p>
                </div>

                <button
                  onClick={() => chamarWhatsApp(lead)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700"
                >
                  <span>WhatsApp</span>
                  <ArrowRight size={16} />
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}