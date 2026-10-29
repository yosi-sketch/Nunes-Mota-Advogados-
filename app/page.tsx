"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, type Variants, MotionConfig } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  HeartHandshake,
  Mail,
  MapPin,
  Menu,
  Phone,
  Scale,
  Sparkles,
  Star,
  Shield,
  FileText,
  X,
  ChevronDown,
  Users,
  Building2,
  Compass,
  Home as HomeIcon,
  Briefcase,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5537999218631";
const PHONE_DISPLAY = "(37) 99921-8631";
const EMAIL_CONTACT = "contato@angelamaria.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/angelamaria.advocacia/";
const INSTAGRAM_HANDLE = "@angelamaria.advocacia";

const FIRM_NAME = "Dra. Ângela Maria Gonçalves Rabelo — Advocacia, Consultoria & Assessoria Jurídica";
const FIRM_SHORT_NAME = "Ângela Maria Gonçalves Rabelo — Advocacia";
const FIRM_SLOGAN =
  "Comprometimento ético, profundo conhecimento jurídico e atendimento humanizado e combativo";
const LAWYER_NAME = "Dra. Ângela Maria Gonçalves Rabelo";
const LAWYER_TITLE = "Advogada Titular";

const ADDRESS_TEXT =
  "Pça. Levy Vitói de Freitas, n° 28 - Sl 303 - Centro, Cláudio - MG, 35530-000";
const REGION_TEXT =
  "Cláudio · Centro-Oeste Mineiro · Minas Gerais & Atendimento Digital em Todo o Brasil";

const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=%C3%82ngela+Maria+Gon%C3%A7alves+Rabelo+%E2%80%94+Advogada%0ACl%C3%A1udio+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";
const GOOGLE_MAPS_URL =
  "https://www.google.com/search?sca_esv=a225a88ab5a0d3cb&sxsrf=AKL5yDgTXKgWZDWvMZd0SkTFaGDI5fo7uw:1793302265465&q=dra.+%C3%A2ngela+maria+gon%C3%A7alves+rabelo+cl%C3%A1udio+endere%C3%A7o&ludocid=1494783806736158895&sa=X&ved=2ahUKEwiM0YfE-9-XAxWQCLkGHTX_OFEQ6BN6BAg-EAI";

const LOGO_SRC = "/logo.png";
const LOGO_SYMBOL_SRC = "/logo-symbol.png";
const FOTO_HERO_SRC = "/hero-advogada.jpg";
const FOTO_SOBRE_SRC = "/sobre-advogada.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dra. Ângela! Gostaria de conversar sobre o meu caso e agendar uma consulta jurídica.";
  return `https://wa.me/${number}?text=${encodeURIComponent(
    message || defaultText
  )}`;
}

function WhatsAppIcon({
  size = 17,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.39 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.69C7.02 10.9 7.9 12.07 8.02 12.23C8.15 12.39 9.74 14.85 12.19 15.91C12.77 16.16 13.23 16.31 13.58 16.42C14.17 16.61 14.71 16.58 15.13 16.52C15.6 16.45 16.58 15.93 16.78 15.35C16.99 14.77 16.99 14.27 16.93 14.17C16.86 14.07 16.71 14.01 16.47 13.89C16.24 13.77 15.11 13.21 14.9 13.14C14.69 13.06 14.54 13.02 14.39 13.25C14.23 13.47 13.8 13.98 13.67 14.13C13.54 14.27 13.41 14.29 13.18 14.17C12.95 14.06 11.98 13.74 10.84 12.72C9.95 11.92 9.34 10.94 9.17 10.65C9.01 10.36 9.15 10.2 9.27 10.08C9.37 9.98 9.5 9.8 9.62 9.66C9.74 9.52 9.78 9.42 9.86 9.26C9.94 9.1 9.9 8.95 9.84 8.83C9.78 8.71 9.32 7.57 9.13 7.11C8.94 6.66 8.75 6.72 8.6 6.71C8.47 6.71 8.31 6.71 8.15 6.71L8.53 7.33Z" />
    </svg>
  );
}

function InstagramIcon({
  size = 17,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0ZM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8ZM18.406 4.155a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
    </svg>
  );
}

function GoogleIcon({
  size = 17,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        fill="#EA4335"
        d="M12 5c1.54 0 2.93.56 4.02 1.48l3.01-3.01C17.2 1.8 14.77 1 12 1 7.42 1 3.51 3.63 1.64 7.44l3.69 2.86C6.2 7.7 8.87 5 12 5z"
      />
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58l3.69 2.86c2.16-1.99 3.73-4.92 3.73-8.68z"
      />
      <path
        fill="#FBBC05"
        d="M5.33 14.7l-3.69 2.86C3.51 21.37 7.42 24 12 24c3.27 0 6.01-1.09 8.01-2.96l-3.69-2.86c-1.08.73-2.47 1.16-4.32 1.16-3.13 0-5.8-2.7-6.67-5.3l.0-.34z"
      />
      <path
        fill="#34A853"
        d="M12 23c3.27 0 6.01-1.09 8.01-2.96l-3.69-2.86c-1.08.73-2.47 1.16-4.32 1.16-3.13 0-5.8-2.7-6.67-5.3H1.64v.34C3.51 20.37 7.42 23 12 23z"
      />
    </svg>
  );
}

interface PracticeArea {
  id: string;
  title: string;
  icon: typeof Scale;
  tag: string;
  summary: string;
  details: string;
  topics: string[];
  whatsAppText: string;
}

const practiceAreas: PracticeArea[] = [
  {
    id: "direito-penal-defesa-prisoes",
    title: "Direito Penal, Prisões & Audiências (Plantão 24h)",
    icon: Shield,
    tag: "Flagrantes 24h · Audiências de Custódia · Defesas Prévias · Tribunal do Júri",
    summary:
      "Atuação ágil, combativa e intransigente na preservação da liberdade e dos direitos fundamentais perante delegacias, varas criminais e tribunais.",
    details:
      "Em momentos críticos em que a liberdade e a dignidade estão em jogo, cada minuto é determinante. A Dra. Ângela Maria atua com rapidez e rigor técnico em prisões em flagrante, audiências de custódia, pedidos de revogação de prisão preventiva, habeas corpus perante os Tribunais de Justiça e Superiores, acompanhamento em inquéritos policiais e sustentação perante o Tribunal do Júri.",
    topics: [
      "Plantão e Atendimento Emergencial 24h em Prisões em Flagrante e Delegacias de Polícia",
      "Representação em Audiências de Custódia e formulação imediata de pedidos de liberdade provisória",
      "Impetração de Habeas Corpus, Pedidos de Relaxamento de Prisão Ilegal e Revogação de Preventiva",
      "Defesa Prévia, Resposta à Acusação, memoriais e sustentação oral em Ações Penais",
      "Acompanhamento presencial do investigado em oitivas, depoimentos e perícias",
      "Defesa combativa e estratégica em Sessões de Julgamento perante o Tribunal do Júri",
      "Execução Penal: progressão de regime (fechado/semiaberto/aberto), livramento condicional e indulto",
    ],
    whatsAppText:
      "Olá, Dra. Ângela! Preciso de atendimento urgente em Direito Penal (prisão, flagrante, audiência de custódia ou defesa).",
  },
  {
    id: "direito-familia-divorcios-guarda-pensao",
    title: "Direito de Família, Divórcios, Guarda & Pensão",
    icon: Users,
    tag: "Divórcio em Cartório · Partilha de Bens · Guarda Compartilhada · Alimentos",
    summary:
      "Acolhimento humanizado, sensibilidade e firmeza jurídica para conduzir divórcios, partilhas patrimoniais e proteção dos direitos dos filhos.",
    details:
      "Conflitos familiares requerem escuta atenta, paciência para esclarecer dúvidas e firmeza para proteger seus direitos e o futuro dos seus filhos. A Dra. Ângela Maria conduz divórcios consensuais céleres em Cartório de Notas e divórcios judiciais litigiosos, partilhas justas de patrimônio, ações de fixação, revisão ou execução de pensão alimentícia, além de acordos de guarda e convivência familiar.",
    topics: [
      "Divórcio Consensual Extrajudicial em Cartório de Notas (procedimento ágil, prático e sem desgaste forense)",
      "Divórcio Judicial Litigioso com partilha justa de bens e proteção contra ocultação patrimonial",
      "Ações de Fixação, Revisão, Exoneração e Execução de Alimentos (Pensão Alimentícia)",
      "Regulamentação de Guarda (compartilhada e unilateral) e plano detalhado de convivência familiar",
      "Dissolução de União Estável com apuração do patrimônio comum e direitos sucessórios",
      "Investigação e Reconhecimento de Paternidade, filiação socioafetiva e tutela contra alienação parental",
      "Pactos Antenupciais e Contratos de Convivência com planejamento de regime patrimonial",
    ],
    whatsAppText:
      "Olá, Dra. Ângela! Gostaria de consultar sobre uma questão de Família (divórcio, pensão alimentícia ou guarda).",
  },
  {
    id: "sucessoes-inventarios-partilha",
    title: "Inventários, Heranças & Partilha de Bens",
    icon: Building2,
    tag: "Inventário em Cartório · Inventário Judicial · Herança · Planejamento Sucessório",
    summary:
      "Condução rápida e pacificadora de inventários em cartório e na via judicial, com proteção aos herdeiros e segurança na transmissão de bens.",
    details:
      "A partida de um ente querido não deve se transformar em litígio prolongado ou custos desmedidos. Quando há concordância entre herdeiros, a Dra. Ângela realiza o Inventário Extrajudicial em Cartório de Notas — um procedimento célere, econômico e sem burocracia excessiva —, atuando também em inventários judiciais complexos, alvarás para liberação de saldos e regularização de imóveis herdados.",
    topics: [
      "Inventário Extrajudicial em Cartório de Notas (procedimento rápido, com menor custo e sem fila judicial)",
      "Inventário Judicial e arrolamento comum ou sumário com apuração rigorosa de bens e dívidas",
      "Planejamento Sucessório preventivo com doação com reserva de usufruto e estruturação familiar",
      "Alvarás Judiciais para saque rápido de saldos bancários, FGTS, PIS/PASEP e transferência de veículos",
      "Regularização fundiária e registro das partilhas perante o Cartório de Registro de Imóveis",
      "Mediação e conciliação amigável entre herdeiros para evitar disputas patrimoniais",
      "Defesa contra exclusão indevida de herdeiros necessários e anulação de partilhas fraudulentas",
    ],
    whatsAppText:
      "Olá, Dra. Ângela! Gostaria de orientações para abertura de inventário ou partilha de herança.",
  },
  {
    id: "usucapiao-regularizacao-imoveis",
    title: "Usucapião, Propriedade & Regularização de Imóveis",
    icon: HomeIcon,
    tag: "Usucapião em Cartório · Usucapião Judicial · Regularização de Escrituras · Posse",
    summary:
      "Regularização definitiva de imóveis urbanos e rurais para obtenção de escritura pública, proteção patrimonial e valorização do seu bem.",
    details:
      "Viver ou produzir em um imóvel sem a escritura definitiva expõe sua família a riscos jurídicos e impede a alienação legal ou obtenção de crédito imobiliário. A Dra. Ângela Maria é especialista em processos de Usucapião Extrajudicial perante o Cartório de Registro de Imóveis e Usucapião Judicial, além de defesas possessórias e regularização fundiária.",
    topics: [
      "Usucapião Extrajudicial em Cartório de Registro de Imóveis (via rápida sem necessidade de processo judicial)",
      "Ações Judiciais de Usucapião (ordinária, extraordinária, especial urbana e rural)",
      "Regularização de imóveis de gaveta, contratos antigos de promessa de compra e venda e heranças pendentes",
      "Ações Possessórias: Reintegração de Posse, Manutenção de Posse e Interdito Proibitório",
      "Desmembramento, unificação de lotes e retificação de áreas perante o Registro Imobiliário",
      "Auditoria jurídica imobiliária para compra e venda segura de imóveis urbanos e rurais",
    ],
    whatsAppText:
      "Olá, Dra. Ângela! Preciso de orientação sobre regularização de imóvel ou processo de usucapião.",
  },
  {
    id: "direito-civil-contratos-indenizacoes",
    title: "Direito Civil, Contratos & Reparação de Danos",
    icon: Scale,
    tag: "Elaboração e Revisão de Contratos · Indenizações por Danos Morais · Cobranças",
    summary:
      "Elaboração técnica de instrumentos contratuais seguros, cobrança estratégica de dívidas e ações para reparação de perdas e danos.",
    details:
      "Segurança jurídica nos negócios e na vida pessoal exige contratos bem estruturados que afastem litígios futuros. O escritório da Dra. Ângela elabora e audita contratos com rigor técnico, ajuíza ações indenizatórias por danos morais, materiais e estéticos, além de conduzir execuções e cobranças de créditos inadimplidos.",
    topics: [
      "Ações Indenizatórias por Danos Morais, Danos Materiais, Estéticos e Lucros Cessantes",
      "Elaboração minuciosa e revisão de Contratos Civis, Imobiliários, Comerciais e Prestação de Serviços",
      "Cobrança Judicial e Extrajudicial de Títulos (Cheques, Notas Promissórias, Duplicatas e Contratos)",
      "Cumprimento forçado de obrigações de fazer e rescisões contratuais motivadas com perdas e danos",
      "Resolução pacífica de impasses negociais por meio de notificações e mediação jurídica",
      "Defesa do consumidor em casos de cobranças indevidas e fraudes",
    ],
    whatsAppText:
      "Olá, Dra. Ângela! Gostaria de consultar sobre elaboração de contrato, cobrança ou ação indenizatória.",
  },
  {
    id: "consultoria-assessoria-estrategica",
    title: "Consultoria & Assessoria Jurídica Estratégica",
    icon: Briefcase,
    tag: "Consultoria Preventiva · Audiências · Pareceres · Atendimento Online no Brasil",
    summary:
      "Apoio jurídico consultivo e contencioso sob medida para pessoas físicas e empresas, com atendimento digital em todo o Brasil.",
    details:
      "Decisões fundamentadas evitam desgastes financeiros e processos judiciais onerosos. A Dra. Ângela oferece consultoria preventiva contínua, emissão de pareceres jurídicos, representação em audiências de conciliação e julgamento, e atendimento 100% digital estruturado por videochamada e assinatura eletrônica com plena validade perante os tribunais.",
    topics: [
      "Consultoria jurídica preventiva personalizada para pessoas físicas e negócios locais",
      "Representação em Audiências de Conciliação, Mediação, Instrução e Julgamento",
      "Elaboração de pareceres técnicos e orientações estratégicas pré-contenciosas",
      "Atendimento 100% online estruturado por videoconferência com total confidencialidade",
      "Assinatura eletrônica e digital de contratos e procurações diretamente no celular",
      "Acompanhamento e atualizações frequentes sobre cada andamento do seu processo",
    ],
    whatsAppText:
      "Olá, Dra. Ângela! Gostaria de agendar uma consultoria jurídica estratégica com você.",
  },
];

const clientReviews = [
  {
    name: "Janinho Araújo",
    reviewerTag: "Avaliação no Google · 5,0 ★",
    badge: "Conduta Exemplar e Profundo Conhecimento Jurídico",
    rating: 5,
    content:
      "Gostaria de destacar a excelente conduta profissional da Advogada Dra. Ângela Maria, cuja atuação exemplar se reflete em seu comprometimento ético e profundo conhecimento jurídico. Sua postura íntegra e cordial faz dela uma referência na área do Direito. Sem dúvida um exemplo de profissionalismo e competência.",
    reply: "Obrigada 🙏🏻",
  },
  {
    name: "Thais Mendes",
    reviewerTag: "Avaliação no Google · 5,0 ★",
    badge: "Paciência, Atenção e Cuidado aos Detalhes",
    rating: 5,
    content:
      "Ótima profissional, tem toda paciência pra te explicar sobre tal processo, te ouve e está sempre atenta aos detalhes 😍🙏",
    reply: "Obrigada 🙏🏻",
  },
  {
    name: "Mirelle Diniz",
    reviewerTag: "Avaliação no Google · 5,0 ★",
    badge: "Agilidade no Divórcio e Clareza Total",
    rating: 5,
    content:
      "Advogada excelente. Me ajudou em tudo que precisava sem deixar dúvidas além de agilizar meu processo de divórcio!",
    reply: "Obrigada pela confiança.",
  },
  {
    name: "Célio Missões",
    reviewerTag: "Avaliação no Google · 5,0 ★",
    badge: "Atendimento Acolhedor e Esclarecimento Completo",
    rating: 5,
    content:
      "Fui muito bem recebido, e todas as minhas dúvidas foram esclarecidas durante a consulta. Fiquei muito satisfeito.",
    reply: "Obrigada pela confiança.",
  },
  {
    name: "Laís Oliveira",
    reviewerTag: "Avaliação no Google · 5,0 ★",
    badge: "Agilidade, Presteza e Alta Recomendação",
    rating: 5,
    content:
      "Excelente profissional que atende com agilidade e presteza!! Super indico!",
    reply: "Obrigada",
  },
  {
    name: "Viviane Barros",
    reviewerTag: "Local Guide · 5,0 ★",
    badge: "Atenciosa, Dedicada e Humana",
    rating: 5,
    content:
      "Excelente profissional, atenciosa e dedicada. Obrigada por tudo!",
    reply: "Obrigada",
  },
  {
    name: "Lucas Lima",
    reviewerTag: "Avaliação no Google · 5,0 ★",
    badge: "Muito Humana e Atenciosa",
    rating: 5,
    content:
      "Excelente profissional! Muito humana e atenciosa!",
    reply: "Obrigada",
  },
  {
    name: "Simone Aparecida de Oliveira Sousa",
    reviewerTag: "Avaliação no Google · 5,0 ★",
    badge: "Excelente Profissional, Super Competente",
    rating: 5,
    content:
      "Excelente profissional, super competente.",
    reply: "Obrigada",
  },
  {
    name: "Antonio Gonçalves Xavier",
    reviewerTag: "Avaliação no Google · 5,0 ★",
    badge: "Dedicada e em Busca de Constante Atualização",
    rating: 5,
    content:
      "Excelente Profissional! Dedicada, atenciosa em busca sempre de atualizações.",
    reply: "Obrigada",
  },
  {
    name: "Adriana Clericuzi",
    reviewerTag: "Avaliação no Google · 5,0 ★",
    badge: "Dedicada e Comprometida",
    rating: 5,
    content:
      "Excelente profissional! Dedicada e comprometida!",
    reply: "Obrigada",
  },
];

const faqs = [
  {
    q: "Onde fica localizado o escritório da Dra. Ângela Maria Gonçalves Rabelo?",
    a: "Nosso escritório está estrategicamente localizado no coração de Cláudio - MG, na Praça Levy Vitói de Freitas, n° 28 - Sala 303 - Centro (CEP 35530-000). Dispomos de um ambiente moderno, acolhedor e com total discrição para atendimentos presenciais com hora marcada, além de atendimento digital ágil para clientes de Divinópolis, Itapecerica, Carmo da Mata, Oliveira, Carmópolis de Minas, Belo Horizonte e de todo o Brasil.",
  },
  {
    q: "Como proceder em caso de prisão em flagrante ou emergência criminal?",
    a: "Em situações de prisão em flagrante, cumprimento de mandado ou audiência de custódia, o contato deve ser imediato pelo WhatsApp ou telefone (37) 99921-8631. A Dra. Ângela Maria atua com prontidão para comparecer à delegacia, acompanhar a audiência de custódia e requerer a imediata concessão de liberdade ou revogação de prisão ilegal.",
  },
  {
    q: "Como funciona a abertura de um Inventário em Cartório (Extrajudicial)?",
    a: "Quando os herdeiros são maiores, capazes e há consenso na partilha dos bens (sem testamento com divergência), o inventário pode ser lavrado diretamente em Cartório de Notas por escritura pública. É um procedimento consideravelmente mais rápido e econômico do que a via judicial tradicional. A Dra. Ângela conduz o levantamento documental, cálculo tributário (ITCD) e a elaboração da minuta de partilha com máxima segurança.",
  },
  {
    q: "Como funciona o divórcio e em quanto tempo ele pode ser concluído?",
    a: "Se o casal concordar com a separação e partilha de bens, o divórcio consensual pode ser realizado diretamente em cartório de forma célere e tranquila. Havendo filhos menores ou divergências quanto à partilha ou pensão, a Dra. Ângela ingressa com a ação judicial buscando a solução mais rápida e justa, com foco prioritário no bem-estar dos filhos e na segurança patrimonial.",
  },
  {
    q: "Como saber se tenho direito à usucapião do meu imóvel?",
    a: "A usucapião é a forma legal de transformar a posse prolongada, mansa e pacífica de um imóvel urbano ou rural em propriedade definitiva registrada em seu nome no Cartório de Registro de Imóveis. Na consulta, a Dra. Ângela examina seu tempo de posse, documentos, confrontantes e IPTU/ITR para indicar a via mais rápida (extrajudicial em cartório ou judicial).",
  },
  {
    q: "Como funciona o atendimento online para quem reside fora de Cláudio - MG?",
    a: "O atendimento digital é simples, seguro e muito próximo. Realizamos a consulta por videoconferência ou WhatsApp, analisamos seus documentos digitalizados e você assina a procuração e o contrato diretamente na tela do seu celular com certificado digital criptografado, válido perante todos os juizados e tribunais do país.",
  },
  {
    q: "Como posso agendar uma conversa com a Dra. Ângela Maria?",
    a: "Você pode clicar em qualquer um dos botões desta página para iniciar uma conversa direta pelo WhatsApp no número (37) 99921-8631. Conte-nos brevemente a sua necessidade e agendaremos seu atendimento com agilidade e total sigilo.",
  },
];

const reveal: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

function Heading({
  eyebrow,
  children,
  description,
  theme = "light",
  className = "",
}: {
  eyebrow: string;
  children: React.ReactNode;
  description?: string;
  theme?: "dark" | "light";
  className?: string;
}) {
  const isDark = theme === "dark";
  return (
    <div className={`max-w-2xl ${className}`}>
      <p className={isDark ? "eyebrow-light" : "eyebrow-ruby"}>{eyebrow}</p>
      <h2
        className={`mt-3 font-serif text-3xl leading-[1.15] tracking-[-0.02em] sm:text-4xl lg:text-[2.85rem] ${
          isDark ? "text-white" : "text-[#0a0d12]"
        }`}
      >
        {children}
      </h2>
      {description && (
        <p
          className={`mt-4 text-[15px] leading-7 sm:text-base sm:leading-8 ${
            isDark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const [activeArea, setActiveArea] = useState<PracticeArea | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <MotionConfig reducedMotion="user">
      <main className="relative min-h-screen selection:bg-[#b81424] selection:text-white">
        {/* DOBRA 0: Top Announcement Bar (Obsidian Charcoal - Alto Contraste com Ruby) */}
        <div className="border-b border-slate-800 bg-[#0a0d12] px-4 py-2.5 text-center text-xs text-slate-300">
          <div className="mx-auto flex max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1460px] items-center justify-between gap-3 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 font-medium text-white">
              <MapPin size={13} className="text-[#f43f5e]" />
              <strong>Sede em Cláudio - MG</strong>
              <span className="hidden md:inline text-slate-400">
                · Praça Levy Vitói de Freitas, 28 - Sl 303 - Centro · Atendimento Presencial & Online em Todo o Brasil
              </span>
            </span>

            <a
              href={GOOGLE_SEARCH_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-[#fda4af] transition-colors"
            >
              <span className="flex text-[#fda4af]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} className="fill-[#fda4af]" />
                ))}
              </span>
              <span>5,0 ★ no Google (35 avaliações)</span>
            </a>
          </div>
        </div>

        {/* Global Floating Header (Clean Silk White, Carbon & Carmine Ruby) */}
        <header
          className={`sticky top-0 z-40 transition-all duration-300 ${
            isScrolled
              ? "border-b border-slate-200 bg-white/95 shadow-md shadow-black/5 backdrop-blur-md"
              : "border-b border-slate-100 bg-white/90 backdrop-blur-sm"
          }`}
        >
          <div className="mx-auto flex max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1460px] items-center justify-between px-5 py-2.5 sm:px-8 lg:px-12">
            {/* Logo on Left */}
            <a
              href="#inicio"
              aria-label="Dra. Ângela Maria Gonçalves Rabelo - Início"
              onClick={closeMenu}
              className="flex shrink-0 items-center gap-2.5 sm:gap-3 transition-opacity hover:opacity-95 mr-4 lg:mr-6 xl:mr-8"
            >
              <div className="relative size-[34px] sm:size-[38px] lg:size-[40px] shrink-0">
                <Image
                  src={LOGO_SYMBOL_SRC}
                  alt="Monograma AM - Dra. Ângela Maria Gonçalves Rabelo"
                  fill
                  priority
                  unoptimized
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-cinzel text-[12px] sm:text-[13px] lg:text-[14px] font-bold tracking-[0.12em] text-[#0a0d12] leading-tight">
                  ÂNGELA MARIA GONÇALVES RABELO
                </span>
                <span className="text-[7.5px] sm:text-[8px] lg:text-[8.5px] font-bold tracking-[0.18em] text-[#b81424] uppercase mt-0.5">
                  ADVOCACIA &bull; CONSULTORIA &bull; ASSESSORIA JURÍDICA
                </span>
              </div>
            </a>

            {/* Desktop Navigation Menu (Center) */}
            <nav
              aria-label="Navegação principal"
              className="hidden lg:flex items-center gap-5 xl:gap-7 2xl:gap-8 whitespace-nowrap text-[11px] xl:text-[12px] font-medium tracking-[0.1em] xl:tracking-[0.12em]"
            >
              <a className="nav-link" href="#sobre">
                A Advogada
              </a>
              <a className="nav-link" href="#atuacao">
                Áreas de Atuação
              </a>
              <a className="nav-link hidden xl:inline-block" href="#diferenciais">
                Diferenciais
              </a>
              <a className="nav-link" href="#avaliacoes">
                Avaliações (35)
              </a>
              <a className="nav-link hidden 2xl:inline-block" href="#faq">
                Dúvidas
              </a>
              <a className="nav-link" href="#contato">
                Contato & Sede
              </a>
            </nav>

            {/* Right Action: Header Consultation Button */}
            <div className="hidden lg:flex items-center gap-3 shrink-0 ml-auto lg:ml-6 xl:ml-8">
              <GlowingButton
                href={getWhatsAppUrl(
                  "Olá, Dra. Ângela! Gostaria de agendar uma consulta jurídica com você."
                )}
                target="_blank"
                size="sm"
                variant="ruby"
                className="rounded-lg shadow-sm text-[11px] px-4 py-2.5 xl:px-5 xl:py-3 whitespace-nowrap"
              >
                <span>Agendar Consulta</span>
                <ArrowUpRight size={13} />
              </GlowingButton>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="grid size-10 sm:size-11 place-items-center rounded-lg border border-slate-200 bg-white text-slate-900 lg:hidden shadow-xs ml-auto cursor-pointer"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                id="mobile-navigation"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="border-b border-slate-200 bg-white px-6 pb-6 pt-2 lg:hidden"
              >
                <div className="flex flex-col gap-3 py-3">
                  <a
                    className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-800 hover:text-[#b81424]"
                    href="#sobre"
                    onClick={closeMenu}
                  >
                    A Advogada & Escritório
                  </a>
                  <a
                    className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-800 hover:text-[#b81424]"
                    href="#atuacao"
                    onClick={closeMenu}
                  >
                    Áreas de Atuação
                  </a>
                  <a
                    className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-800 hover:text-[#b81424]"
                    href="#diferenciais"
                    onClick={closeMenu}
                  >
                    Diferenciais
                  </a>
                  <a
                    className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-800 hover:text-[#b81424]"
                    href="#avaliacoes"
                    onClick={closeMenu}
                  >
                    Avaliações no Google (35)
                  </a>
                  <a
                    className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-800 hover:text-[#b81424]"
                    href="#faq"
                    onClick={closeMenu}
                  >
                    Perguntas Frequentes
                  </a>
                  <a
                    className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-800 hover:text-[#b81424]"
                    href="#contato"
                    onClick={closeMenu}
                  >
                    Contato & Sede em Cláudio - MG
                  </a>

                  <div className="pt-3">
                    <GlowingButton
                      href={getWhatsAppUrl(
                        "Olá, Dra. Ângela! Gostaria de agendar uma consulta jurídica com você."
                      )}
                      target="_blank"
                      size="sm"
                      variant="ruby"
                      className="w-full justify-center"
                    >
                      <span>Agendar Consulta Jurídica</span>
                      <ArrowRight size={14} />
                    </GlowingButton>
                  </div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        {/* DOBRA 1: HERO SECTION (Silk White & Ruby Light Aura) */}
        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-slate-200 bg-white py-14 sm:py-16 lg:py-20 overflow-hidden"
        >
          {/* Subtle warm luxury background aura */}
          <div className="pointer-events-none absolute right-0 top-0 -z-10 size-[48rem] rounded-full bg-[radial-gradient(circle,rgba(220,38,38,0.08),transparent_65%)]" />
          <div className="pointer-events-none absolute left-0 bottom-0 -z-10 size-[38rem] rounded-full bg-[radial-gradient(circle,rgba(10,13,18,0.04),transparent_65%)]" />

          <div className="mx-auto grid min-h-[620px] max-w-7xl xl:max-w-[1380px] 2xl:max-w-[1460px] items-center gap-10 px-5 sm:px-8 lg:min-h-[700px] lg:grid-cols-[1.08fr_0.92fr] xl:grid-cols-[1.12fr_0.88fr] lg:gap-12 xl:gap-16 lg:px-12">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:max-w-xl xl:max-w-2xl"
            >
              {/* Secondary Ruby Accent Eyebrow Pill */}
              <motion.div
                variants={reveal}
                className="mb-5 inline-flex items-center gap-2 rounded-lg border border-[#b81424]/30 bg-[#fff1f2] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#b81424] shadow-xs"
              >
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f43f5e] opacity-75"></span>
                  <span className="relative inline-flex size-2 rounded-full bg-[#b81424]"></span>
                </span>
                <span>DRA. ÂNGELA MARIA GONÇALVES RABELO &bull; ADVOGADA</span>
              </motion.div>

              <motion.h1
                variants={reveal}
                className="font-serif text-3xl leading-[1.14] tracking-[-0.02em] text-[#0a0d12] sm:text-[2.65rem] sm:leading-[1.14] lg:text-[3.25rem] xl:text-[3.45rem]"
              >
                Defesa combativa dos seus direitos, acolhimento humano e{" "}
                <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#7a0812] via-[#b81424] to-[#e11d48]">
                  soluções jurídicas com rigor técnico e excelência.
                </span>
              </motion.h1>

              <motion.p
                variants={reveal}
                className="mt-5 max-w-xl text-[15px] leading-7 text-slate-600 sm:text-base sm:leading-8"
              >
                Sob a liderança da advogada <strong className="font-semibold text-slate-900">Dra. Ângela Maria Gonçalves Rabelo</strong>, nosso escritório alia rigor jurídico, ética inabalável e atendimento atencioso aos detalhes em <strong className="font-semibold text-slate-900">Defesas Penais & Prisões 24h, Direito de Família (Divórcios, Guarda e Pensão), Inventários, Usucapião e Contratos</strong>. Avaliado com nota máxima 5,0 ★ no Google (35 avaliações). Sede no Centro de Cláudio - MG e assessoria digital em todo o Brasil.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                variants={reveal}
                className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Ângela! Gostaria de conversar com você para analisar o meu caso."
                  )}
                  target="_blank"
                  size="lg"
                  variant="ruby"
                  className="rounded-lg shadow-lg"
                >
                  <Scale size={16} />
                  <span>Analisar Meu Caso</span>
                  <ArrowRight size={14} />
                </GlowingButton>

                <GlowingButton
                  href="#atuacao"
                  size="lg"
                  variant="outline-dark"
                  className="rounded-lg"
                >
                  Conhecer Áreas de Atuação <ArrowRight size={14} />
                </GlowingButton>
              </motion.div>

              {/* Verified Trust Strip */}
              <motion.div
                variants={reveal}
                className="mt-10 grid grid-cols-2 gap-3 pt-6 border-t border-slate-200 sm:grid-cols-3 text-xs text-slate-600"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#b81424] shrink-0" />
                  <span>5,0 ★ no Google (35 avaliações)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#b81424] shrink-0" />
                  <span>Plantão Penal & Prisões 24h</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <CheckCircle2 size={16} className="text-[#b81424] shrink-0" />
                  <span>Família, Inventários & Usucapião</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Visual presentation - Dra. Ângela Official Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative mx-auto w-full max-w-[480px] lg:max-w-[460px] xl:max-w-[500px]"
            >
              {/* Luxury ambient warm glow */}
              <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-[#b81424]/25 via-[#fda4af]/20 to-[#0a0d12]/15 blur-2xl opacity-75" />

              <div className="relative aspect-[3.6/5] sm:aspect-[3.8/5] overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 bg-slate-50 shadow-[0_25px_60px_-15px_rgba(10,13,18,0.25)] ring-1 ring-black/5">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Dra. Ângela Maria Gonçalves Rabelo — Advogada Titular em seu escritório"
                  fill
                  priority
                  unoptimized
                  className="object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
                />

                {/* Floating identity bar on photo */}
                <div className="absolute inset-x-3 bottom-3 sm:inset-x-5 sm:bottom-5 lg:inset-x-5 lg:bottom-5 rounded-xl sm:rounded-2xl border border-slate-200/90 bg-white/95 p-3.5 sm:p-4 lg:p-4.5 shadow-xl backdrop-blur-md">
                  <div className="flex items-center justify-between gap-3 sm:gap-4">
                    <div>
                      <p className="text-[10px] sm:text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#b81424]">
                        Advogada Titular &bull; Consultoria Jurídica
                      </p>
                      <p className="font-serif text-sm font-bold text-slate-900 sm:text-base lg:text-lg">
                        Dra. Ângela Maria Gonçalves Rabelo
                      </p>
                      <p className="text-[10.5px] sm:text-[11.5px] text-slate-600 line-clamp-1 mt-0.5">
                        Defesas &bull; Prisões &bull; Família &bull; Inventário &bull; Usucapião
                      </p>
                    </div>
                    <span className="shrink-0 rounded-lg border border-[#b81424]/30 bg-[#fff1f2] px-2.5 py-1.5 sm:px-3 sm:py-1.5 text-[10px] sm:text-[11px] font-bold text-[#b81424] shadow-xs">
                      5,0 ★ Google
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* DOBRA 2: SOBRE A ADVOGADA & O ESCRITÓRIO (Silk Surface) */}
        <section
          id="sobre"
          className="scroll-mt-24 border-b border-slate-200 bg-[#f9fafb] py-20 text-slate-900 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-12">
            {/* Visual presentation - Dra. Ângela Portrait & Authority Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[440px] lg:max-w-[420px]"
            >
              <div className="relative aspect-[3.7/5] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
                <Image
                  src={FOTO_SOBRE_SRC}
                  alt="Dra. Ângela Maria Gonçalves Rabelo — Atendimento em Cláudio - MG e todo o Brasil"
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
              </div>

              {/* Authority badge card */}
              <div className="absolute -bottom-8 right-2 max-w-[340px] rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-xl sm:-right-4 sm:px-6">
                <div className="flex items-center gap-2 text-[#b81424]">
                  <Sparkles size={16} />
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#b81424]">
                    Excelência Jurídica Reconhecida
                  </p>
                </div>
                <p className="mt-1 font-serif text-lg leading-snug text-slate-900">
                  Dra. Ângela Maria Gonçalves Rabelo
                </p>
                <p className="mt-0.5 text-[11px] font-medium text-[#b81424]">
                  Advocacia, Consultoria & Assessoria Jurídica
                </p>
                <p className="mt-1 text-[11px] leading-4 text-slate-500">
                  Praça Levy Vitói de Freitas, 28 - Sala 303 - Centro · Cláudio - MG
                </p>
              </div>

              <span className="absolute -left-4 -top-4 -z-10 size-24 border-l-2 border-t-2 border-[#b81424]/40 sm:-left-7 sm:-top-7 sm:size-32" />
            </motion.div>

            {/* Story & Biography */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.div
                variants={reveal}
                className="mb-4 inline-flex items-center gap-2.5 rounded-md border border-[#b81424]/25 bg-[#fff1f2] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#b81424] shadow-xs"
              >
                <span className="size-2 shrink-0 rounded-full bg-[#b81424]" />
                <span>COMPROMETIMENTO ÉTICO, RIGOR TÉCNICO E ATENDIMENTO HUMANIZADO</span>
              </motion.div>

              <motion.h2
                variants={reveal}
                className="font-serif text-3xl leading-[1.14] tracking-[-0.02em] text-[#0a0d12] sm:text-4xl lg:text-[3.25rem]"
              >
                Uma advocacia combativa, estratégica e dedicada à{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#7a0812] via-[#b81424] to-[#e11d48]">
                  defesa intransigente dos seus direitos.
                </span>
              </motion.h2>

              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-slate-600"
              >
                A <strong className="font-bold text-slate-900">Dra. Ângela Maria Gonçalves Rabelo</strong> consolidou uma trajetória pautada pela postura ética, atendimento atencioso aos detalhes e profundo conhecimento das normas jurídicas. Reconhecida por seus constituintes pela paciência para esclarecer cada fase processual e pela dedicação incansável em busca dos melhores resultados, ela oferece suporte jurídico combativo e de alto padrão.
              </motion.p>

              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-slate-600"
              >
                Seja atuando em defesas criminais de urgência e audiências de custódia, conduzindo divórcios e partilhas com sensibilidade e rapidez, viabilizando inventários em cartório, regularizando imóveis via usucapião ou elaborando contratos seguros, cada causa é tratada de forma única, com discrição irrestrita e transparência absoluta.
              </motion.p>

              {/* Client Quote Card (Real Google Review) */}
              <motion.div
                variants={reveal}
                className="mt-6 rounded-xl border border-slate-200 bg-white p-5 shadow-xs"
              >
                <blockquote className="font-serif text-sm italic leading-relaxed text-slate-800">
                  &ldquo;Gostaria de destacar a excelente conduta profissional da Advogada Dra. Ângela Maria, cuja atuação exemplar se reflete em seu comprometimento ético e profundo conhecimento jurídico. Sua postura íntegra e cordial faz dela uma referência na área do Direito. Sem dúvida um exemplo de profissionalismo e competência.&rdquo;
                </blockquote>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-[#b81424]">
                  — Janinho Araújo (Avaliação verificada 5,0 ★ no Google Meu Negócio)
                </p>
              </motion.div>

              {/* Authority Metrics */}
              <motion.div
                variants={reveal}
                className="mt-6 grid grid-cols-2 gap-3 text-xs sm:grid-cols-3"
              >
                <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-xs">
                  <p className="font-bold text-slate-900">5,0 ★ no Google</p>
                  <p className="mt-0.5 text-[11px] text-slate-500">
                    35 avaliações 5 estrelas
                  </p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-xs">
                  <p className="font-bold text-slate-900">Atendimento 24h</p>
                  <p className="mt-0.5 text-[11px] text-slate-500">
                    Flagrantes e Prisões
                  </p>
                </div>
                <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-xs col-span-2 sm:col-span-1">
                  <p className="font-bold text-slate-900">Atuação Nacional</p>
                  <p className="mt-0.5 text-[11px] text-slate-500">
                    Sede em Cláudio & Online
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={reveal}
                className="mt-8 flex flex-col gap-3 text-xs text-slate-800"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#b81424] shrink-0" />
                  <span>Sede na Pça. Levy Vitói de Freitas, 28 - Sl 303 - Centro, Cláudio - MG</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#b81424] shrink-0" />
                  <span>Atendimento online seguro e consultoria estratégica em todo o Brasil</span>
                </div>
              </motion.div>

              <motion.div variants={reveal} className="mt-8">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Ângela! Gostaria de conversar com você sobre a minha causa."
                  )}
                  target="_blank"
                  size="md"
                  variant="ruby"
                >
                  <span>Agendar Atendimento Jurídico</span>
                  <ArrowRight size={14} />
                </GlowingButton>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* DOBRA 3: ÁREAS DE ATUAÇÃO (Obsidian Charcoal - Alto Impacto com Destaques Ruby) */}
        <section
          id="atuacao"
          className="scroll-mt-24 border-b border-slate-800 bg-[#0a0d12] py-20 text-white sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Heading
                theme="dark"
                eyebrow="PILARES DE ATUAÇÃO ESPECIALIZADA"
                description="Conheça nossas áreas de atuação jurídica. Clique em qualquer área para ver os detalhes, procedimentos e direcionamento imediato para a sua necessidade."
              >
                Soluções jurídicas com rigor técnico em{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#fff1f2] to-[#fda4af]">
                  Cláudio, Minas Gerais e em todo o Brasil.
                </span>
              </Heading>

              <div className="shrink-0">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Ângela! Gostaria de tirar uma dúvida sobre uma área de atuação."
                  )}
                  target="_blank"
                  size="md"
                  variant="outline"
                  className="rounded-lg"
                >
                  <WhatsAppIcon size={16} /> Consultar Outra Demanda
                </GlowingButton>
              </div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
              className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
            >
              {practiceAreas.map((area) => {
                const Icon = area.icon;
                return (
                  <motion.article
                    key={area.id}
                    variants={reveal}
                    className="group relative flex flex-col justify-between rounded-xl border border-slate-800 bg-[#0e1218] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#b81424] hover:bg-[#141923] hover:shadow-[0_12px_36px_rgba(184,20,36,0.22)]"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="grid size-12 place-items-center rounded-lg border border-slate-700 bg-[#1a2230] text-[#fda4af] transition-colors group-hover:border-[#b81424] group-hover:bg-[#b81424] group-hover:text-white">
                          <Icon size={22} />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#fda4af]">
                          Especialidade
                        </span>
                      </div>

                      <h3 className="mt-5 font-serif text-xl font-bold text-white transition-colors group-hover:text-[#fff1f2]">
                        {area.title}
                      </h3>

                      <p className="mt-1.5 text-[11px] font-semibold text-[#fecdd3]">
                        {area.tag}
                      </p>

                      <p className="mt-3 text-xs leading-6 text-slate-300">
                        {area.summary}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center justify-between border-t border-slate-800/80 pt-4">
                      <button
                        type="button"
                        onClick={() => setActiveArea(area)}
                        className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-300 transition-colors hover:text-[#fda4af] cursor-pointer"
                      >
                        Ver Detalhes & Tópicos <ArrowRight size={13} />
                      </button>

                      <a
                        href={getWhatsAppUrl(area.whatsAppText)}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Falar no WhatsApp sobre ${area.title}`}
                        className="grid size-8 place-items-center rounded-md border border-slate-700 bg-slate-900 text-slate-300 transition-all hover:bg-[#25D366] hover:text-white hover:border-[#25D366]"
                      >
                        <WhatsAppIcon size={14} />
                      </a>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* DOBRA 4: DIFERENCIAIS (Silk Surface) */}
        <section
          id="diferenciais"
          className="scroll-mt-24 border-b border-slate-200 bg-white py-20 text-slate-900 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <Heading
              theme="light"
              eyebrow="POR QUE NOS ESCOLHER"
              description="A união de combatividade jurídica, postura ética, atenção meticulosa a cada detalhe e dedicação humanizada."
            >
              O que diferencia a advocacia da{" "}
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#7a0812] via-[#b81424] to-[#e11d48]">
                Dra. Ângela Maria Gonçalves Rabelo?
              </span>
            </Heading>

            <div className="mt-14 grid gap-8 md:grid-cols-2">
              {/* Card 1 */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65 }}
                className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-[#f9fafb] p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#b81424] hover:shadow-md sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#b81424]/30 bg-[#fff1f2] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#b81424]">
                      <Compass size={14} /> Rigor Técnico & Ética Exemplar
                    </span>
                    <span className="text-xs font-semibold text-[#b81424]">
                      5,0 ★ Google (35)
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-slate-900 sm:text-[1.75rem]">
                    Atuação Combina Firmeza Jurídica e Respeito
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-slate-600">
                    O trabalho da Dra. Ângela se destaca pela combatividade técnica e pelo respeito absoluto à dignidade do constituinte. Seja defendendo a liberdade em matéria penal ou resguardando patrimônio em questões civis e sucessórias, cada processo conta com estratégia sólida e dedicação máxima.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#b81424]" />
                      <span>Comunicação direta, acessível e sem termos jurídicos indecifráveis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#b81424]" />
                      <span>Acompanhamento constante com atualizações claras sobre o processo</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#b81424]" />
                      <span>Transparência total em contratos de honorários e etapas do serviço</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-slate-200 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Ângela! Gostaria de conversar com você sobre a minha situação jurídica."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-slate-300 bg-white px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-900 transition-all hover:border-[#b81424] hover:bg-[#b81424] hover:text-white"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Conversar no WhatsApp
                    </span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>

              {/* Card 2 */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: 0.1 }}
                className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-[#f9fafb] p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#b81424] hover:shadow-md sm:p-9"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-[#b81424]/30 bg-[#fff1f2] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#b81424]">
                      <HeartHandshake size={14} /> Atendimento Humanizado & Atenção aos Detalhes
                    </span>
                    <span className="text-xs font-semibold text-[#b81424]">
                      Paciência & Discrição
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-2xl leading-tight text-slate-900 sm:text-[1.75rem]">
                    Escuta Atenta e Cuidado Pessoal em Cada Demanda
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-slate-600">
                    O seu processo não é apenas um número de protocolo. Em momentos de fragilidade — como um divórcio, partilha de herança após a perda de um familiar ou uma situação criminal delicada —, você encontra acolhimento empático, paciência para esclarecer todas as dúvidas e firmeza profissional.
                  </p>
                  <ul className="mt-5 space-y-2 text-xs font-medium text-slate-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#b81424]" />
                      <span>Avaliação minuciosa de cada documento e circunstância do caso</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#b81424]" />
                      <span>Sede estruturada na Praça Levy Vitói de Freitas, 28 - Centro de Cláudio</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={15} className="shrink-0 text-[#b81424]" />
                      <span>Atuação perante varas cíveis, criminais, cartórios e instâncias recursais</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-7 border-t border-slate-200 pt-4">
                  <a
                    href={getWhatsAppUrl(
                      "Olá, Dra. Ângela! Gostaria de agendar um atendimento para o meu caso."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-between rounded-lg border border-slate-300 bg-white px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-900 transition-all hover:border-[#b81424] hover:bg-[#b81424] hover:text-white"
                  >
                    <span className="inline-flex items-center gap-2">
                      <WhatsAppIcon size={15} /> Agendar Atendimento
                    </span>
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        {/* DOBRA 5: MÉTODO EM 3 ETAPAS (Obsidian Charcoal) */}
        <section className="relative overflow-hidden border-b border-slate-800 bg-[#0a0d12] py-20 text-white sm:py-24 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                theme="dark"
                eyebrow="COMO ATUAMOS NO SEU CASO"
                description="Um método transparente, estratégico e focado na proteção dos seus direitos e do seu patrimônio."
              >
                Três etapas claras para{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#fff1f2] to-[#fda4af]">
                  conduzir sua causa com segurança e tranquilidade.
                </span>
              </Heading>

              <blockquote className="mt-8 rounded-xl border border-slate-800 bg-[#0e1218] p-6 font-serif text-base italic leading-7 text-slate-200 shadow-md">
                &ldquo;Nosso compromisso é ouvir você com atenção, analisar minuciosamente os fatos e entregar uma advocacia combativa, pautada na ética, na verdade e no rigor técnico.&rdquo;
                <footer className="mt-3 font-sans text-[11px] font-semibold not-italic uppercase tracking-wider text-[#fda4af]">
                  — Dra. Ângela Maria Gonçalves Rabelo &bull; Advogada
                </footer>
              </blockquote>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="divide-y divide-slate-800"
            >
              {[
                [
                  "01",
                  "Acolhimento Inicial & Diagnóstico Jurídico",
                  "Contato direto pelo WhatsApp ou presencialmente em nossa sede na Praça Levy Vitói de Freitas, 28 em Cláudio. Examinamos detalhadamente seus documentos e fatos com sigilo profissional rigoroso.",
                ],
                [
                  "02",
                  "Estratégia Jurídica & Ação Resolutiva",
                  "Definimos o plano de ação mais seguro e célere (seja inventário em cartório, divórcio, defesa criminal urgente, usucapião ou cobrança civil), agindo com precisão perante as autoridades competentes.",
                ],
                [
                  "03",
                  "Acompanhamento Próximo & Atualização Contínua",
                  "Você não fica com dúvidas. A Dra. Ângela mantém você informado sobre cada passo e andamento processual diretamente no seu celular, com explicações claras e acessíveis.",
                ],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-6 sm:py-7"
                >
                  <span className="font-serif text-2xl font-semibold text-[#fda4af]">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-white">{title}</h3>
                    <p className="mt-2 max-w-lg text-[13px] leading-6 text-slate-300">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* DOBRA 6: AVALIAÇÕES GOOGLE 5.0 (Silk Surface - Depoimentos Reais dos Clientes) */}
        <section
          id="avaliacoes"
          className="scroll-mt-24 border-b border-slate-200 bg-[#f9fafb] py-20 text-slate-900 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <Heading
                theme="light"
                eyebrow="PROVA SOCIAL VERIFICADA · GOOGLE MEU NEGÓCIO"
                description="Veja relatos reais e espontâneos de clientes atendidos pela Dra. Ângela Maria Gonçalves Rabelo em Cláudio, Minas Gerais e em todo o Brasil."
              >
                Avaliada com nota máxima 5,0 ★ em{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#7a0812] via-[#b81424] to-[#e11d48]">
                  35 avaliações no Google.
                </span>
              </Heading>

              {/* Google Verified Card */}
              <div className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center md:min-w-[340px]">
                <div className="grid size-12 place-items-center rounded-lg bg-slate-50 border border-slate-200 shrink-0">
                  <GoogleIcon size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-serif text-2xl font-bold text-slate-900">
                      5,0
                    </span>
                    <div className="flex text-[#b81424]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={15} className="fill-[#b81424]" />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs font-semibold text-slate-900">
                    Dra. Ângela Maria Gonçalves Rabelo
                  </p>
                  <p className="text-[11px] text-slate-500">
                    35 avaliações 5 estrelas no Google Meu Negócio
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
              className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {clientReviews.map((review) => (
                <motion.article
                  key={review.name}
                  variants={reveal}
                  className="flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#b81424] hover:shadow-md"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex text-[#b81424]">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} size={14} className="fill-[#b81424]" />
                        ))}
                      </div>
                      <span className="rounded-md border border-[#b81424]/20 bg-[#fff1f2] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#b81424]">
                        Google Verificado
                      </span>
                    </div>

                    <p className="mt-3 font-serif text-sm font-bold text-slate-900">
                      {review.badge}
                    </p>

                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      &ldquo;{review.content}&rdquo;
                    </p>

                    {review.reply && (
                      <div className="mt-3 rounded-lg border-l-2 border-[#b81424] bg-[#fff1f2]/60 p-2.5 text-[11px] leading-5 text-slate-700">
                        <p className="font-semibold text-[#b81424]">Resposta da Dra. Ângela:</p>
                        <p className="italic">{review.reply}</p>
                      </div>
                    )}
                  </div>

                  <div className="mt-5 border-t border-slate-100 pt-3">
                    <p className="font-serif text-sm font-semibold text-slate-900">
                      {review.name}
                    </p>
                    <p className="text-[10px] text-slate-500">
                      {review.reviewerTag}
                    </p>
                  </div>
                </motion.article>
              ))}
            </motion.div>

            {/* Google Link Action */}
            <div className="mt-12 text-center">
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-900 shadow-sm transition-all hover:border-[#b81424] hover:text-[#b81424]"
              >
                <GoogleIcon size={16} /> Ver avaliações no Google <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* DOBRA 7: PERGUNTAS FREQUENTES / FAQ (Obsidian Charcoal) */}
        <section
          id="faq"
          className="scroll-mt-24 border-b border-slate-800 bg-[#0a0d12] py-20 text-white sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <div className="text-center">
              <p className="eyebrow-light justify-center">DÚVIDAS FREQUENTES</p>
              <h2 className="mt-4 font-serif text-3xl leading-[1.14] tracking-[-0.02em] text-white sm:text-4xl lg:text-[3.15rem]">
                Respostas diretas e esclarecedoras sobre os{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white via-[#fff1f2] to-[#fda4af]">
                  seus direitos e nosso atendimento.
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400">
                Transparência total desde o primeiro contato. Se você tiver outra dúvida sobre seu caso, fale agora mesmo com a Dra. Ângela no WhatsApp.
              </p>
            </div>

            <div className="mt-12 space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={faq.q}
                    className="overflow-hidden rounded-xl border border-slate-800 bg-[#0e1218] transition-colors hover:border-slate-700"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left text-sm font-semibold text-white sm:text-base cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        size={18}
                        className={`shrink-0 text-[#fda4af] transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="border-t border-slate-800 px-6 pb-6 pt-4 text-sm leading-7 text-slate-300">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-10 text-center">
              <p className="text-sm text-slate-400">
                Quer tirar uma dúvida específica sobre seu caso?
              </p>
              <div className="mt-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Ângela! Gostaria de tirar uma dúvida jurídica com você."
                  )}
                  target="_blank"
                  size="md"
                  variant="ruby"
                >
                  <WhatsAppIcon size={16} /> Enviar Mensagem no WhatsApp
                </GlowingButton>
              </div>
            </div>
          </div>
        </section>

        {/* DOBRA 8: CONTATO & SEDE (Silk Surface) */}
        <section
          id="contato"
          className="scroll-mt-24 border-b border-slate-200 bg-white py-20 text-slate-900 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                theme="light"
                eyebrow="CONTATO & SEDE EM CLÁUDIO - MG"
                description="Converse diretamente com a Dra. Ângela Maria Gonçalves Rabelo pelo WhatsApp para acolhimento imediato, sigilo e rigor técnico."
              >
                Prontidão total para{" "}
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#7a0812] via-[#b81424] to-[#e11d48]">
                  orientar você e defender seus interesses com responsabilidade.
                </span>
              </Heading>

              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Ângela! Gostaria de agendar um atendimento com você."
                  )}
                  target="_blank"
                  size="lg"
                  variant="ruby"
                  className="rounded-lg shadow-md"
                >
                  <WhatsAppIcon size={17} /> Falar no WhatsApp Agora
                </GlowingButton>
                <p className="text-[11px] leading-5 text-slate-600">
                  WhatsApp e telefone direto:{" "}
                  <strong className="text-slate-900">{PHONE_DISPLAY}</strong>
                </p>
              </div>

              <div className="mt-10 space-y-4 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <Clock
                    size={16}
                    className="mt-0.5 shrink-0 text-[#b81424]"
                  />
                  <div>
                    <p className="font-semibold text-slate-900">
                      Horário de Funcionamento
                    </p>
                    <p className="mt-0.5 text-[#b81424] font-bold">
                      Aberto &bull; Segunda a Sexta: 08:30 às 18:00
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Plantão 24h para prisões em flagrante e urgências criminais
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Phone size={16} className="shrink-0 text-[#b81424]" />
                  <a
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="font-medium text-slate-900 transition-colors hover:text-[#b81424]"
                  >
                    {PHONE_DISPLAY} (Ligações e WhatsApp)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <InstagramIcon size={16} className="shrink-0 text-[#b81424]" />
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-[#b81424] text-slate-900 font-medium"
                  >
                    {INSTAGRAM_HANDLE} (Instagram Oficial &bull; 1.450 seguidores)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={16} className="shrink-0 text-[#b81424]" />
                  <a
                    href={`mailto:${EMAIL_CONTACT}`}
                    className="transition-colors hover:text-[#b81424] text-slate-900 font-medium"
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-[#b81424]"
                  />
                  <div>
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-900 font-medium hover:text-[#b81424] transition-colors"
                    >
                      {ADDRESS_TEXT}
                    </a>
                    <br />
                    <span className="text-[11px] text-slate-500">
                      Sede no Centro de Cláudio - MG e assessoria jurídica digital em todo o Brasil
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Brand Presentation Card */}
            <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-[#f9fafb] p-7 shadow-lg sm:p-10">
              <div className="absolute right-0 top-0 h-1.5 w-32 bg-gradient-to-r from-[#7a0812] via-[#b81424] to-[#0a0d12]" />

              <div className="flex items-center gap-3">
                <div className="relative size-11 sm:size-12 shrink-0">
                  <Image
                    src={LOGO_SYMBOL_SRC}
                    alt="Monograma AM - Dra. Ângela Maria Gonçalves Rabelo"
                    fill
                    unoptimized
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="font-cinzel text-[12.5px] sm:text-[13px] font-bold uppercase tracking-[0.13em] text-[#0a0d12]">
                    DRA. ÂNGELA MARIA GONÇALVES RABELO
                  </p>
                  <p className="text-[8.5px] sm:text-[9px] font-bold tracking-[0.18em] text-[#b81424] uppercase mt-0.5">
                    ADVOCACIA &bull; CONSULTORIA &bull; ASSESSORIA JURÍDICA
                  </p>
                </div>
              </div>

              {/* Photo Presentation - Dra. Ângela */}
              <div className="relative mt-5 aspect-[16/10] w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-xs">
                <Image
                  src={FOTO_HERO_SRC}
                  alt="Dra. Ângela Maria Gonçalves Rabelo em seu escritório em Cláudio - MG"
                  fill
                  unoptimized
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 text-white">
                  <p className="text-xs font-semibold">Defesa intransigente dos seus direitos</p>
                  <p className="text-[10px] text-slate-200">Cláudio · Centro-Oeste Mineiro & Atendimento Nacional</p>
                </div>
              </div>

              <address className="mt-6 max-w-md text-[14px] not-italic leading-7 text-slate-700">
                <strong className="font-semibold text-slate-900">
                  {FIRM_NAME}
                </strong>
                <br />
                {LAWYER_NAME} &bull; {LAWYER_TITLE}
                <br />
                {ADDRESS_TEXT}
              </address>

              {/* Weekly schedule table */}
              <div className="mt-6 rounded-lg border border-slate-200 bg-white p-4 text-xs">
                <p className="mb-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#b81424]">
                  Atendimento & Horários
                </p>
                <div className="grid grid-cols-2 gap-y-1.5 text-slate-700">
                  <span>Segunda a Sexta</span>
                  <span className="text-right font-medium text-slate-900 font-semibold">
                    08:30 às 18:00
                  </span>
                  <span>Plantão Penal / Prisões</span>
                  <span className="text-right font-medium text-[#b81424] font-bold">
                    Plantão Urgente 24h
                  </span>
                  <span>Atendimento Presencial</span>
                  <span className="text-right font-medium text-slate-600">
                    Sede no Centro de Cláudio
                  </span>
                  <span>Atendimento Online</span>
                  <span className="text-right text-[#b81424] font-bold">Todo o Brasil</span>
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-3">
                <GlowingButton
                  href={getWhatsAppUrl(
                    "Olá, Dra. Ângela! Gostaria de agendar um atendimento com você."
                  )}
                  target="_blank"
                  size="md"
                  variant="ruby"
                  className="w-full justify-center"
                >
                  <WhatsAppIcon size={16} /> Iniciar Conversa no WhatsApp
                </GlowingButton>
              </div>
            </div>
          </div>
        </section>

        {/* DOBRA 9: PRÉ-FOOTER BANNER (Obsidian Charcoal com Destaque Ruby) */}
        <section className="border-t border-slate-800 bg-[#0e1218] px-5 py-14 text-white shadow-xl sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
            <div>
              <p className="eyebrow-light">
                <Sparkles size={13} className="text-[#fda4af]" /> DRA. ÂNGELA MARIA GONÇALVES RABELO — ADVOCACIA
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl">
                Pronta para analisar o seu caso e defender seus direitos com técnica impecável e clareza.
              </h2>
            </div>
            <GlowingButton
              href={getWhatsAppUrl(
                "Olá, Dra. Ângela! Preciso de orientação jurídica para o meu caso."
              )}
              target="_blank"
              size="lg"
              variant="ruby"
              className="rounded-lg shadow-lg whitespace-nowrap"
            >
              <WhatsAppIcon size={17} /> Falar no WhatsApp Agora
            </GlowingButton>
          </div>
        </section>

        {/* DOBRA 10: RODAPÉ INSTITUCIONAL (Obsidian Charcoal) */}
        <footer className="border-t border-slate-800 bg-[#0a0d12] px-5 py-14 text-slate-400 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
            {/* Col 1: Brand */}
            <div className="md:col-span-2">
              <a
                href="#inicio"
                aria-label="Dra. Ângela Maria Gonçalves Rabelo — Advocacia"
                className="flex items-center gap-3"
              >
                <div className="relative size-10 sm:size-11 shrink-0">
                  <Image
                    src={LOGO_SYMBOL_SRC}
                    alt="Monograma AM - Dra. Ângela Maria Gonçalves Rabelo"
                    fill
                    unoptimized
                    className="object-contain"
                  />
                </div>
                <div>
                  <p className="font-cinzel text-[14px] sm:text-[15px] font-bold tracking-[0.13em] text-white">
                    DRA. ÂNGELA MARIA GONÇALVES RABELO
                  </p>
                  <p className="text-[8.5px] sm:text-[9px] font-semibold tracking-[0.18em] text-[#fda4af] uppercase mt-0.5">
                    ADVOCACIA &bull; CONSULTORIA &bull; ASSESSORIA JURÍDICA
                  </p>
                </div>
              </a>

              <p className="mt-4 max-w-md text-xs leading-6 text-slate-400">
                Advocacia de excelência com atuação estratégica em Direito Penal (Defesas & Prisões 24h), Família (Divórcios, Guarda e Pensão), Inventários, Usucapião, Contratos e Reparação de Danos. Sede em Cláudio - MG e atendimento digital em todo o território nacional.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3 text-xs">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-slate-800 bg-[#0e1218] px-3 py-1.5 text-slate-300 transition-colors hover:border-[#fda4af] hover:text-white"
                >
                  <InstagramIcon size={14} className="text-[#fda4af]" /> Instagram {INSTAGRAM_HANDLE}
                </a>
                <a
                  href={GOOGLE_SEARCH_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-slate-800 bg-[#0e1218] px-3 py-1.5 text-slate-300 transition-colors hover:border-[#fda4af] hover:text-white"
                >
                  <GoogleIcon size={14} /> Google 5,0 ★ (35 avaliações)
                </a>
              </div>
            </div>

            {/* Col 2: Navigation */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                Navegação Rápida
              </p>
              <ul className="mt-4 space-y-2.5 text-xs">
                <li>
                  <a className="footer-link" href="#inicio">
                    Início
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#sobre">
                    A Advogada
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#atuacao">
                    Áreas de Atuação
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#diferenciais">
                    Diferenciais da Banca
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#avaliacoes">
                    Avaliações no Google (35)
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#faq">
                    Perguntas Frequentes
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="#contato">
                    Contato & Sede
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Contact & Info */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                Atendimento & Sede
              </p>
              <ul className="mt-4 space-y-2.5 text-xs text-slate-400">
                <li>
                  <strong className="text-white">Telefone / WhatsApp:</strong>
                  <br />
                  <a
                    href={getWhatsAppUrl("Olá, Dra. Ângela! Gostaria de falar com você.")}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#fda4af] hover:underline"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li>
                  <strong className="text-white">Endereço:</strong>
                  <br />
                  {ADDRESS_TEXT}
                </li>
                <li>
                  <strong className="text-white">Horário de Funcionamento:</strong>
                  <br />
                  Segunda a Sexta: 08:30 às 18:00
                </li>
                <li>
                  <strong className="text-white">E-mail:</strong>
                  <br />
                  <a href={`mailto:${EMAIL_CONTACT}`} className="hover:text-white">
                    {EMAIL_CONTACT}
                  </a>
                </li>
                <li>
                  <strong className="text-white">Plantão Emergencial:</strong>
                  <br />
                  24h para prisões e flagrantes
                </li>
              </ul>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-7xl border-t border-slate-800/80 pt-6 text-center text-[11px] text-slate-500">
            <p>
              © {new Date().getFullYear()} {FIRM_NAME}. Todos os direitos reservados.
            </p>
            <p className="mt-1 text-[10px]">
              Praça Levy Vitói de Freitas, n° 28 - Sl 303 - Centro, Cláudio - MG, 35530-000 · Advocacia em estrita conformidade com o Código de Ética e Disciplina da OAB.
            </p>
          </div>
        </footer>

        {/* Floating Quick WhatsApp CTA Button (Bottom Right) */}
        <aside
          aria-label="Atendimento no WhatsApp"
          className="fixed bottom-5 right-5 z-40 sm:bottom-6 sm:right-6"
        >
          <a
            href={getWhatsAppUrl(
              "Olá, Dra. Ângela! Gostaria de um atendimento jurídico pelo WhatsApp."
            )}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar agora pelo WhatsApp com a Dra. Ângela Maria Gonçalves Rabelo"
            className="group flex items-center gap-2.5 rounded-full border border-[#25D366]/80 bg-gradient-to-r from-[#0d331a] via-[#128C7E] to-[#075E54] px-4 py-3 text-xs font-bold text-white shadow-[0_8px_30px_rgba(37,211,102,0.45)] transition-all hover:scale-105 hover:brightness-110 active:scale-95"
          >
            <span className="relative flex size-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-[#25D366]"></span>
            </span>
            <WhatsAppIcon size={18} className="text-white" />
            <span className="hidden sm:inline">
              <span className="text-white font-bold">Plantão & Atendimento</span> &bull; Dra. Ângela
            </span>
            <span className="sm:hidden font-bold">WhatsApp</span>
          </a>
        </aside>

        {/* Modal Dialog for Practice Area Detailed Topics */}
        <AnimatePresence>
          {activeArea && (
            <motion.div
              className="fixed inset-0 z-50 flex items-end justify-center bg-black/75 p-0 backdrop-blur-md sm:items-center sm:p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArea(null)}
            >
              <motion.section
                role="dialog"
                aria-modal="true"
                aria-labelledby="area-dialog-title"
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.99 }}
                transition={{ duration: 0.24 }}
                onClick={(event) => event.stopPropagation()}
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-xl border border-slate-700 bg-[#0e1218] p-7 shadow-2xl sm:max-w-xl sm:rounded-xl sm:p-10 text-white"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da especialidade"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-lg border border-slate-700 bg-slate-800 text-white transition-colors hover:border-[#fda4af] cursor-pointer"
                >
                  <X size={18} />
                </button>

                <div className="flex items-center gap-3 pr-12">
                  <div className="relative size-12 shrink-0 overflow-hidden rounded-lg border border-slate-700 bg-[#0a0d12] p-1 shadow-xs">
                    <Image
                      src={LOGO_SYMBOL_SRC}
                      alt="Monograma AM - Dra. Ângela Maria Gonçalves Rabelo"
                      fill
                      sizes="48px"
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="eyebrow-light">DRA. ÂNGELA MARIA GONÇALVES RABELO</p>
                    <p className="text-[10px] font-semibold tracking-wider text-[#fda4af] uppercase">
                      ADVOCACIA &bull; CONSULTORIA &bull; ASSESSORIA JURÍDICA
                    </p>
                  </div>
                </div>

                <h2
                  id="area-dialog-title"
                  className="mt-4 max-w-sm pr-10 font-serif text-3xl leading-tight text-white sm:text-4xl"
                >
                  {activeArea.title}
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-300">
                  {activeArea.details}
                </p>

                <div className="mt-6 border-t border-slate-800 pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#fda4af]">
                    Atuação e Procedimentos Adotados pelo Escritório:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {activeArea.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-center gap-3 text-sm text-slate-300"
                      >
                        <span className="size-2 shrink-0 rounded-full bg-[#b81424]" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <GlowingButton
                    href={getWhatsAppUrl(activeArea.whatsAppText)}
                    target="_blank"
                    size="md"
                    variant="ruby"
                    className="rounded-lg shadow-md"
                  >
                    <WhatsAppIcon size={16} /> Consultar sobre esta demanda
                  </GlowingButton>
                  <button
                    type="button"
                    onClick={() => setActiveArea(null)}
                    className="px-5 py-3 text-xs font-semibold text-slate-400 transition-colors hover:text-white cursor-pointer"
                  >
                    Fechar
                  </button>
                </div>
              </motion.section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </MotionConfig>
  );
}
