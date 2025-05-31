
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Monitor, Shield, Wrench } from "lucide-react";

interface WelcomeScreenProps {
  onLogin: () => void;
  onRegister: () => void;
}

const WelcomeScreen = ({ onLogin, onRegister }: WelcomeScreenProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-blue-600 p-4 rounded-2xl shadow-lg">
              <Monitor className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Sistema de Suporte em TI
          </h1>
          <h2 className="text-3xl font-semibold text-blue-600 mb-4">TechManaus</h2>
          <p className="text-xl text-gray-600 mb-2">Ano 2025</p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Bem-vindo ao sistema de suporte técnico mais avançado de Manaus. 
            Agende atendimentos, acompanhe técnicos especializados e receba 
            notificações automáticas via nossa plataforma DevOps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Seguro</h3>
            <p className="text-gray-600">Seus dados protegidos com tecnologia de ponta</p>
          </Card>
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <Wrench className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Eficiente</h3>
            <p className="text-gray-600">Atendimento rápido com técnicos especializados</p>
          </Card>
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <Monitor className="h-12 w-12 text-slate-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Automatizado</h3>
            <p className="text-gray-600">Pipeline DevOps com notificações automáticas</p>
          </Card>
        </div>

        <Card className="p-8 bg-white shadow-xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Acesse sua conta ou crie uma nova
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Button
                onClick={onLogin}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-md transition-all"
              >
                Fazer Login
              </Button>
              <Button
                onClick={onRegister}
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold rounded-lg shadow-md transition-all"
              >
                Criar Conta
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default WelcomeScreen;
