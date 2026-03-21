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
    month: 3,
    price: 2997,
    show: true,
  },
  { id: 3, label: "Marketing Digital", month: 3, price: 2997, show: true },
  {
    id: 4,
    label: "Excel básico à avançado",
    month: 3,
    price: 2997,
    show: true,
  },
  {
    id: 6,
    label: "Recrutamento e selecção",
    month: 3,
    price: 2997,
    show: true,
  },
  { id: 7, label: "Atendimento ao cliente", month: 3, price: 2997, show: true },
  { id: 8, label: "Técnicas de venda", month: 3, price: 2997, show: true },
  {
    id: 10,
    label: "Electricidade instaladora",
    month: 7,
    price: 3497,
    show: true,
  },
  { id: 13, label: "Inglês técnico", month: 3, price: 2997, show: true },
  { id: 14, label: "Redes de computadores", month: 3, price: 2997, show: true },
  { id: 16, label: "Design", month: 3, price: 2997, show: true },
  { id: 17, label: "Edição de vídeos", month: 3, price: 2997, show: true },
  {
    id: 18,
    label: "Higiene, Saúde e segurança no trabalho (HSST)",
    month: 3,
    price: 2997,
    show: true,
  },
];
