
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User, Edit, Trash2, AlertCircle } from "lucide-react";
import Header from "./Header";

interface Appointment {
  id: string;
  date: string;
  time: string;
  description: string;
  technician: string;
  status: 'solicitado' | 'em_andamento' | 'concluido';
}

interface AppointmentsListProps {
  user: { name: string; email: string };
  appointments: Appointment[];
  onBack: () => void;
  onEditAppointment: (id: string) => void;
  onCancelAppointment: (id: string) => void;
  onLogout: () => void;
}

const AppointmentsList = ({ 
  user, 
  appointments, 
  onBack, 
  onEditAppointment, 
  onCancelAppointment, 
  onLogout 
}: AppointmentsListProps) => {
  const [confirmCancel, setConfirmCancel] = useState<string | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'solicitado':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'em_andamento':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'concluido':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'solicitado':
        return 'Solicitado';
      case 'em_andamento':
        return 'Em Andamento';
      case 'concluido':
        return 'Concluído';
      default:
        return status;
    }
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('pt-BR', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const handleCancelAppointment = (id: string) => {
    if (confirmCancel === id) {
      onCancelAppointment(id);
      setConfirmCancel(null);
    } else {
      setConfirmCancel(id);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={user} onLogout={onLogout} />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-6 text-blue-600 hover:text-blue-700"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar ao Dashboard
        </Button>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Meus Agendamentos</h1>
          <p className="text-xl text-gray-600">
            Acompanhe o status dos seus atendimentos e gerencie seus agendamentos
          </p>
        </div>

        {appointments.length === 0 ? (
          <Card className="p-12 text-center">
            <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Nenhum agendamento encontrado
            </h3>
            <p className="text-gray-600 mb-6">
              Você ainda não possui agendamentos. Crie seu primeiro atendimento agora!
            </p>
            <Button
              onClick={onBack}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
            >
              Agendar Suporte
            </Button>
          </Card>
        ) : (
          <div className="space-y-6">
            {appointments.map((appointment) => (
              <Card key={appointment.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center space-x-4">
                      <Badge className={`px-3 py-1 ${getStatusColor(appointment.status)}`}>
                        {getStatusText(appointment.status)}
                      </Badge>
                      <span className="text-sm text-gray-500">ID: {appointment.id}</span>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="flex items-center space-x-3">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <Calendar className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700">Data</p>
                          <p className="text-gray-900">{formatDate(appointment.date)}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="bg-blue-100 p-2 rounded-full">
                          <Clock className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700">Horário</p>
                          <p className="text-gray-900">{appointment.time}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="bg-green-100 p-2 rounded-full">
                          <User className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700">Técnico</p>
                          <p className="text-green-600 font-semibold">{appointment.technician}</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm font-medium text-gray-700 mb-1">Descrição</p>
                      <p className="text-gray-900">{appointment.description}</p>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2 lg:ml-6">
                    {appointment.status === 'solicitado' && (
                      <>
                        <Button
                          onClick={() => onEditAppointment(appointment.id)}
                          variant="outline"
                          size="sm"
                          className="flex items-center space-x-2"
                        >
                          <Edit className="h-4 w-4" />
                          <span>Editar</span>
                        </Button>
                        <Button
                          onClick={() => handleCancelAppointment(appointment.id)}
                          variant={confirmCancel === appointment.id ? "destructive" : "outline"}
                          size="sm"
                          className="flex items-center space-x-2"
                        >
                          <Trash2 className="h-4 w-4" />
                          <span>
                            {confirmCancel === appointment.id ? "Confirmar" : "Cancelar"}
                          </span>
                        </Button>
                      </>
                    )}
                    {appointment.status === 'em_andamento' && (
                      <Badge className="bg-blue-100 text-blue-800 border-blue-200 text-center">
                        Em atendimento
                      </Badge>
                    )}
                    {appointment.status === 'concluido' && (
                      <Badge className="bg-green-100 text-green-800 border-green-200 text-center">
                        Finalizado
                      </Badge>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        <div className="mt-12">
          <Card className="p-6 bg-gradient-to-r from-slate-50 to-blue-50 border border-blue-200">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Sistema de Notificações TechManaus
            </h4>
            <p className="text-gray-600">
              Você receberá atualizações automáticas por e-mail sobre o status dos seus 
              agendamentos através do nosso pipeline DevOps integrado com Jenkins e Docker.
            </p>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AppointmentsList;
