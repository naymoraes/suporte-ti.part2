
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Calendar, Clock, User, ArrowRight } from "lucide-react";
import Header from "./Header";

interface ConfirmationScreenProps {
  user: { name: string; email: string };
  appointment: {
    date: string;
    time: string;
    description: string;
    technician: string;
    id: string;
  };
  onBackToDashboard: () => void;
  onViewAppointments: () => void;
  onLogout: () => void;
}

const ConfirmationScreen = ({ 
  user, 
  appointment, 
  onBackToDashboard, 
  onViewAppointments, 
  onLogout 
}: ConfirmationScreenProps) => {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('pt-BR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (timeStr: string) => {
    return timeStr;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={user} onLogout={onLogout} />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <div className="bg-green-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Agendamento Registrado com Sucesso!
          </h1>
          <p className="text-xl text-gray-600">
            Seu atendimento foi confirmado e você receberá notificações por e-mail
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Detalhes do Agendamento</h2>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Calendar className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Data</p>
                  <p className="text-lg text-gray-900">{formatDate(appointment.date)}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Horário</p>
                  <p className="text-lg text-gray-900">{formatTime(appointment.time)}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-2 rounded-full mt-1">
                  <User className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700">Técnico Responsável</p>
                  <p className="text-lg font-bold text-green-600">{appointment.technician}</p>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm font-medium text-gray-700 mb-2">Descrição do Problema</p>
                <p className="text-gray-900">{appointment.description}</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pipeline DevOps Ativado</h2>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Clone do repositório ✓</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Build Docker ✓</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-700">Teste de conexão SMTP ✓</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                <span className="text-gray-700">Executando container...</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                <span className="text-gray-500">Envio de e-mail de confirmação</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white rounded-lg border border-blue-200">
              <h4 className="font-bold text-blue-900 mb-2">Notificações Automáticas</h4>
              <p className="text-blue-700 text-sm">
                ✅ E-mail de confirmação do agendamento solicitado<br />
                ✅ E-mail de confirmação do agendamento atendido
              </p>
            </div>
          </Card>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={onBackToDashboard}
            variant="outline"
            className="px-8 py-3 text-lg font-semibold rounded-lg shadow-md transition-all"
          >
            Voltar ao Dashboard
          </Button>
          <Button
            onClick={onViewAppointments}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-md transition-all"
          >
            Ver Meus Agendamentos
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </main>
    </div>
  );
};

export default ConfirmationScreen;
