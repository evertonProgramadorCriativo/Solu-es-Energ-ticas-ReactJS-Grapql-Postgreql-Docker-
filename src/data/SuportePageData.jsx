import { MessageCircle, Phone, Mail } from 'lucide-react';

export const slas = [
  { tipo: 'Emergencial', prazo: '4 horas', cor: 'text-red-500', bg: 'bg-red-50' },
  { tipo: 'Crítico', prazo: '24 horas', cor: 'text-amber-500', bg: 'bg-amber-50' },
  { tipo: 'Normal', prazo: '48 horas', cor: 'text-blue-500', bg: 'bg-blue-50' },
  { tipo: 'Consulta', prazo: '72 horas', cor: 'text-slate-500', bg: 'bg-slate-50' },
];

export const canais = [
  {
    icon: Phone,
    titulo: 'Telefone',
    desc: 'Atendimento imediato para urgências',
    info: '(21) 99999-9999',
    badge: 'Seg–Sex 8h–18h',
    cor: 'bg-blue-50 text-blue-600',
    destaque: false,
  },
  {
    icon: MessageCircle,
    titulo: 'WhatsApp',
    desc: 'Suporte rápido pelo celular',
    info: '(21) 99999-9999',
    badge: 'Resposta em minutos',
    cor: 'bg-green-50 text-green-600',
    destaque: true,
  },
  {
    icon: Mail,
    titulo: 'E-mail',
    desc: 'Para detalhamento técnico',
    info: 'suporte@calarke.com.br',
    badge: 'Resposta em 24h',
    cor: 'bg-amber-50 text-amber-600',
    destaque: false,
  },
];
