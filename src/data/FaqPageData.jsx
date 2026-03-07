import { HelpCircle, DollarSign, Wrench, Building2, Leaf, ShieldCheck } from 'lucide-react';
export const categorias = [
  { label: 'Todas', icon: HelpCircle },
  { label: 'Financeiro', icon: DollarSign },
  { label: 'Técnico', icon: Wrench },
  { label: 'Instalação', icon: Building2 },
  { label: 'Sustentabilidade', icon: Leaf },
  { label: 'Garantias', icon: ShieldCheck },
];

export const faqs = [
  {
    categoria: 'Financeiro',
    q: 'Qual o retorno do investimento (payback)?',
    a: 'O payback médio para sistemas residenciais é de 4 a 6 anos. Em sistemas comerciais e industriais, pode ser de 3 a 5 anos, dependendo do consumo e tarifa local. Após esse período, a energia gerada é praticamente gratuita.',
  },
  {
    categoria: 'Financeiro',
    q: 'Existe financiamento disponível?',
    a: 'Sim! Trabalhamos com diversas linhas de crédito, incluindo o programa ProGeren do BNDES, financiamentos bancários via Caixa Econômica Federal, Banco do Brasil e parceiros privados, com taxas a partir de 0,79% ao mês.',
  },
  {
    categoria: 'Financeiro',
    q: 'Há incentivos fiscais para energia solar?',
    a: 'Sim. Há isenção de ICMS na maioria dos estados, redução de IPI em equipamentos e, para pessoas jurídicas, possibilidade de depreciação acelerada dos equipamentos no Imposto de Renda.',
  },
  {
    categoria: 'Técnico',
    q: 'O sistema funciona em dias nublados e chuvosos?',
    a: 'Sim! Os painéis modernos geram energia mesmo com luz difusa. Em dias nublados, a geração é reduzida entre 20% e 40%, mas o sistema continua produzindo energia. O acúmulo ao longo do mês ainda garante economia expressiva na conta de luz.',
  },
  {
    categoria: 'Técnico',
    q: 'Quanto de espaço eu preciso para instalar painéis solares?',
    a: 'Cada kWp instalado requer aproximadamente 6 m² de área útil. Para uma residência com consumo médio de 300 kWh/mês, são necessários em torno de 18 m² de telhado com boa incidência solar.',
  },
  {
    categoria: 'Técnico',
    q: 'O sistema pode funcionar se acabar a energia da distribuidora?',
    a: 'Sistemas padrão (on-grid) são desligados por segurança durante falta de energia. Para funcionar independentemente, é necessário adicionar baterias (sistema off-grid ou híbrido), o que aumenta o custo, mas garante autonomia total.',
  },
  {
    categoria: 'Instalação',
    q: 'Quanto tempo leva a instalação?',
    a: 'Sistemas residenciais levam de 1 a 3 dias úteis. Projetos comerciais variam de 1 a 2 semanas. Industriais podem levar de 2 a 6 semanas conforme o porte. Todo o processo burocrático junto à concessionária leva entre 30 e 90 dias.',
  },
  {
    categoria: 'Instalação',
    q: 'Preciso fazer obras ou reformas no telhado?',
    a: 'Na maioria dos casos, não. Nossos engenheiros avaliam a estrutura previamente. Se necessário, indicamos reforços pontuais. A instalação é feita com fixações que não danificam a cobertura.',
  },
  {
    categoria: 'Instalação',
    q: 'Eu precisar de aprovação da distribuidora de energia?',
    a: 'Sim, todo sistema de micro ou minigeração deve ser aprovado pela distribuidora local. Cuidamos de todo o processo burocrático: projeto, AVCB, solicitação de vistoria e conexão à rede.',
  },
  {
    categoria: 'Sustentabilidade',
    q: 'Qual o impacto ambiental de um sistema solar?',
    a: 'Um sistema residencial de 5 kWp evita em média 3 a 4 toneladas de CO₂ por ano — equivalente a plantar mais de 150 árvores anualmente. Ao longo de 25 anos, isso representa mais de 75 toneladas de carbono não emitido.',
  },
  {
    categoria: 'Sustentabilidade',
    q: 'Os painéis solares são recicláveis?',
    a: 'Sim. Os painéis têm vida útil superior a 30 anos e, ao final, podem ser reciclados. No Brasil, a reciclagem de painéis fotovoltaicos ainda está em desenvolvimento, mas a indústria já trabalha em soluções de descarte responsável.',
  },
  {
    categoria: 'Garantias',
    q: 'Qual é a garantia dos equipamentos?',
    a: 'Os painéis solares têm garantia de desempenho de 25 anos (mínimo de 80% de eficiência) e garantia de produto de 10 a 12 anos. Inversores têm garantia de 5 a 10 anos, com extensão opcional. Oferecemos também garantia de 5 anos na instalação.',
  },
  {
    categoria: 'Garantias',
    q: 'O que acontece se um painel parar de funcionar?',
    a: 'Nosso sistema de monitoramento identifica falhas em tempo real. Em caso de defeito dentro da garantia, a troca é realizada sem custo. Para clientes com plano de manutenção, o atendimento emergencial é garantido em até 24 horas.',
  },
];
