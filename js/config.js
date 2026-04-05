function formatCurrency(val) {
  const formatterCurrency = new Intl.NumberFormat("pt-MZ", {
    style: "decimal",
    currency: "MZN",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formatterCurrency.format(val);
}

const courses = [
  {
    id: 1,
    label: "Contabilidade + Primavera",
    icon: '📊',
    month: 3,
    price: 2600,
    colors: ["#ff2276"],
    plan: "contabilidade-primavera.html",
    show: true,
  },
  {
    id: 3,
    label: "Marketing Digital",
    icon: '📢',
    month: 3,
    price: 1200,
    colors: ["#af23c3"],
    plan: 'marketing-digital.html',
    show: true,
  },
  {
    id: 4,
    label: "Excel básico à avançado",
     icon: '📊',
    month: 3,
    price: 2100,
    colors: ["#2DAA73"],
    plan: 'excel-basico-ao-avancado.html',
    show: true,
  },
  {
    id: 6,
    label: "Recrutamento e selecção",
    icon: '🧑‍💼',
    month: 3,
    price: 1750,
    colors: ["#823ba2"],
    plan: 'excel-basico-ao-avancado.html',
    show: true,
  },
  {
    id: 7,
    label: "Atendimento ao cliente",
    icon: '🤝',
    month: 3,
    price: 1550,
    colors: ["#1f0a48"],
    plan: 'atendimento-ao-cliente.html',
    show: true,
  },
  {
    id: 8,
    label: "Técnicas de venda",
    icon: '💰',
    month: 3,
    price: 1100,
    colors: ["#581105"],
    plan: 'tecnicas-de-venda.html',
    show: true,
  },
  {
    id: 10,
    label: "Electricidade instaladora",
    icon: '⚡',
    month: 7,
    price: 2700,
    colors: ["coral"],
    plan: 'electricidade-instaladora.html',
    show: true,
  },
  {
    id: 13,
    label: "Inglês técnico",
    icon: '🌍',
    month: 3,
    price: 1600,
    colors: ["#122030"],
    plan: 'ingles-tecnico.html',
    show: true,
  },
  {
    id: 14,
    label: "Redes de computadores",
    icon: '🌐',
    month: 3,
    price: 1950,
    colors: ["#1ba0d2"],
    plan: 'redes-de-computadores.html',
    show: true,
  },
  {
    id: 16,
    label: "Design",
    icon: '🎨',
    month: 3,
    price: 1200,
    colors: ["#191ae8"],
    plan: 'design.html',
    show: true,
  },
  {
    id: 17,
    label: "Edição de vídeos",
    icon: '🎬',
    month: 3,
    price: 1600,
    colors: ["#502390"],
    plan: 'edicao-de-videos.html',
    show: true,
  },
  {
    id: 18,
    label: "Higiene, Saúde e segurança no trabalho (HSST)",
    icon: '🦺',
    month: 3,
    price: 2350,
    colors: ["#ce3b74"],
    plan: 'hsst.html',
    show: true,
  },
];

const random = (n) => {
  return Math.round(Math.random() * n);
};


document.querySelector('title').innerText = 'Knowledge Center (KC)'