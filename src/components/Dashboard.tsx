
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, List, LogOut, Clock, Users, Wrench } from "lucide-react";
import Header from "./Header";

interface DashboardProps {
  user: { name: string; email: string };
  onScheduleSupport: () => void;
  onViewAppointments: () => void;
  onLogout: () => void;
}

const Dashboard = ({ user, onScheduleSupport, onViewAppointments, onLogout }: DashboardProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={user} onLogout={onLogout} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Bem-vindo, {user.name}!
          </h1>
          <p className="text-xl text-gray-600">
            Gerencie seus atendimentos e agendamentos de suporte técnico
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 bg-gradient-to-br from-blue-500 to-blue-600 text-white hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">Suporte Rápido</h3>
                <p className="text-blue-100">Atendimento em 24h</p>
              </div>
              <Clock className="h-10 w-10 text-blue-200" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-green-500 to-green-600 text-white hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">Técnicos Especialistas</h3>
                <p className="text-green-100">3 profissionais disponíveis</p>
              </div>
              <Users className="h-10 w-10 text-green-200" />
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-purple-500 to-purple-600 text-white hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2">Automação DevOps</h3>
                <p className="text-purple-100">Notificações automáticas</p>
              </div>
              <Wrench className="h-10 w-10 text-purple-200" />
            </div>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 hover:shadow-xl transition-shadow">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Agendar Suporte</h3>
              <p className="text-gray-600 mb-6">
                Solicite atendimento técnico especializado. Nosso sistema atribuirá 
                automaticamente um técnico qualificado para seu problema.
              </p>
              <Button
                onClick={onScheduleSupport}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-md transition-all"
              >
                Agendar Atendimento
              </Button>
            </div>
          </Card>

          <Card className="p-8 hover:shadow-xl transition-shadow">
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <List className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Meus Agendamentos</h3>
              <p className="text-gray-600 mb-6">
                Visualize, edite ou cancele seus agendamentos. Acompanhe o status 
                e o técnico responsável por cada atendimento.
              </p>
              <Button
                onClick={onViewAppointments}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-md transition-all"
              >
                Ver Agendamentos
              </Button>
            </div>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Card className="p-6 bg-gradient-to-r from-slate-50 to-blue-50 border border-blue-200">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Sistema Automatizado TechManaus 2025
            </h4>
            <p className="text-gray-600">
              Receba notificações automáticas por e-mail sobre seus agendamentos através 
              de nossa plataforma DevOps integrada com Jenkins e Docker.
            </p>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
