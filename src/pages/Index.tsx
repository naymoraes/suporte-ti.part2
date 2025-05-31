
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import WelcomeScreen from "@/components/WelcomeScreen";
import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";
import Dashboard from "@/components/Dashboard";
import ScheduleForm from "@/components/ScheduleForm";
import ConfirmationScreen from "@/components/ConfirmationScreen";
import AppointmentsList from "@/components/AppointmentsList";

type Screen = 'welcome' | 'login' | 'register' | 'dashboard' | 'schedule' | 'confirmation' | 'appointments';

interface User {
  name: string;
  email: string;
}

interface Appointment {
  id: string;
  date: string;
  time: string;
  description: string;
  technician: string;
  status: 'solicitado' | 'em_andamento' | 'concluido';
}

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [user, setUser] = useState<User | null>(null);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [currentAppointment, setCurrentAppointment] = useState<Appointment | null>(null);
  const { toast } = useToast();

  const technicians = ["Josh Moraes", "Camila Santiago", "Enzo Daniel"];

  const generateAppointmentId = () => {
    return 'TM' + Date.now().toString().slice(-6);
  };

  const getRandomTechnician = () => {
    return technicians[Math.floor(Math.random() * technicians.length)];
  };

  const handleLogin = (email: string, password: string) => {
    // Simulated login
    const userData = {
      name: email.split('@')[0].charAt(0).toUpperCase() + email.split('@')[0].slice(1),
      email: email
    };
    setUser(userData);
    setCurrentScreen('dashboard');
    toast({
      title: "Login realizado com sucesso!",
      description: `Bem-vindo de volta, ${userData.name}!`,
    });
  };

  const handleRegister = (name: string, email: string, password: string) => {
    // Simulated registration
    const userData = { name, email };
    setUser(userData);
    setCurrentScreen('dashboard');
    toast({
      title: "Conta criada com sucesso!",
      description: `Bem-vindo ao TechManaus, ${name}!`,
    });
  };

  const handleSchedule = (date: string, time: string, description: string) => {
    const newAppointment: Appointment = {
      id: generateAppointmentId(),
      date,
      time,
      description,
      technician: getRandomTechnician(),
      status: 'solicitado'
    };
    
    setAppointments(prev => [...prev, newAppointment]);
    setCurrentAppointment(newAppointment);
    setCurrentScreen('confirmation');
    
    toast({
      title: "Agendamento confirmado!",
      description: `Técnico ${newAppointment.technician} foi atribuído ao seu atendimento.`,
    });
  };

  const handleEditAppointment = (id: string) => {
    toast({
      title: "Funcionalidade em desenvolvimento",
      description: "A edição de agendamentos estará disponível em breve.",
    });
  };

  const handleCancelAppointment = (id: string) => {
    setAppointments(prev => prev.filter(apt => apt.id !== id));
    toast({
      title: "Agendamento cancelado",
      description: "Seu agendamento foi cancelado com sucesso.",
    });
  };

  const handleLogout = () => {
    setUser(null);
    setAppointments([]);
    setCurrentAppointment(null);
    setCurrentScreen('welcome');
    toast({
      title: "Logout realizado",
      description: "Até logo!",
    });
  };

  switch (currentScreen) {
    case 'welcome':
      return (
        <WelcomeScreen
          onLogin={() => setCurrentScreen('login')}
          onRegister={() => setCurrentScreen('register')}
        />
      );
    case 'login':
      return (
        <LoginForm
          onLogin={handleLogin}
          onGoToRegister={() => setCurrentScreen('register')}
          onBack={() => setCurrentScreen('welcome')}
        />
      );
    case 'register':
      return (
        <RegisterForm
          onRegister={handleRegister}
          onGoToLogin={() => setCurrentScreen('login')}
          onBack={() => setCurrentScreen('welcome')}
        />
      );
    case 'dashboard':
      return user ? (
        <Dashboard
          user={user}
          onScheduleSupport={() => setCurrentScreen('schedule')}
          onViewAppointments={() => setCurrentScreen('appointments')}
          onLogout={handleLogout}
        />
      ) : null;
    case 'schedule':
      return user ? (
        <ScheduleForm
          user={user}
          onSchedule={handleSchedule}
          onBack={() => setCurrentScreen('dashboard')}
          onLogout={handleLogout}
        />
      ) : null;
    case 'confirmation':
      return user && currentAppointment ? (
        <ConfirmationScreen
          user={user}
          appointment={currentAppointment}
          onBackToDashboard={() => setCurrentScreen('dashboard')}
          onViewAppointments={() => setCurrentScreen('appointments')}
          onLogout={handleLogout}
        />
      ) : null;
    case 'appointments':
      return user ? (
        <AppointmentsList
          user={user}
          appointments={appointments}
          onBack={() => setCurrentScreen('dashboard')}
          onEditAppointment={handleEditAppointment}
          onCancelAppointment={handleCancelAppointment}
          onLogout={handleLogout}
        />
      ) : null;
    default:
      return null;
  }
};

export default Index;
