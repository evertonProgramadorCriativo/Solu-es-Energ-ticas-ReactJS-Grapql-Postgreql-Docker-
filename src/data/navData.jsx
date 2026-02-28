// dados menu de navegação, separados em navItems para os links principais e dropdownItems para os links do submenu "Mais". Cada item é um objeto que contém o nome do link, a URL de destino (href) e um texto alternativo (alt) para acessibilidade. Esses dados são usados para renderizar os links de navegação no componente MobileMenu, permitindo uma fácil manutenção e escalabilidade do menu de navegação.
export const navItems = [
  {
    nome: 'Contato',
    href: '/contato',
    alt: 'Ir para a página de contato',
  },
  {
    nome: 'Serviços',
    href: '/servicos',
    alt: 'Ir para a página de serviços',
  },
];

export const dropdownItems = [
  {
    nome: 'Sobre Nós',
    href: '/sobre',
    alt: 'Saiba mais sobre a Calarke Energia',
  },
  {
    nome: 'FAQ',
    href: '/faq',
    alt: 'Perguntas frequentes',
  },
  {
    nome: 'Suporte',
    href: '/suporte',
    alt: 'Entre em contato com o suporte',
  },
  {
    nome: 'Carreira',
    href: '/carreira',
    alt: 'Veja nossas vagas de emprego',
  },
];
