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
  Briefcase,
  AlertCircle,
  Gavel,
  Coins,
  BadgeCheck,
  Award,
  Accessibility,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5538999480028";
const PHONE_DISPLAY = "(38) 99948-0028";
const EMAIL_CONTACT = "contato@nunesemotaadv.com.br";
const INSTAGRAM_URL = "https://www.instagram.com/nunesemotaadv/";
const INSTAGRAM_HANDLE = "@nunesemotaadv";

const FIRM_NAME = "Nunes & Mota Advogados Associados";
const FIRM_SHORT_NAME = "Nunes & Mota Advogados";
const FIRM_SLOGAN =
  "Há mais de 7 anos prestando uma advocacia combativa, ética e altamente resolutiva para proteger seus direitos, seu trabalho e seu patrimônio.";
const LAWYERS_NAMES = "Dra. Misley Nunes & Dr. Mota";
const LAWYERS_TITLE =
  "Advogados em Januária - MG | Trabalhista, Cível, Consumidor, Família & Previdenciário";

const ADDRESS_TEXT =
  "Av. Cônego Ramiro Leite, 20B - Centro, Januária - MG, 39480-000";
const REGION_TEXT =
  "Januária · Norte de Minas Gerais & Atendimento Digital em Todo o Brasil";

const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Nunes+%26+Mota+Advogados+Associados%0AJanu%C3%A1ria+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Av.+C%C3%B4nego+Ramiro+Leite%2C+20B+-+Centro%2C+Janu%C3%A1ria+-+MG%2C+39480-000";

const LOGO_SRC = "/logo.png";
const LOGO_SYMBOL_SRC = "/logo-symbol.png";
const FOTO_HERO_SRC = "/hero-advogados.jpg";
const FOTO_ESCRITORIO_SRC = "/escritorio-recepcao.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dra. Misley Nunes e Dr. Mota! Gostaria de agendar uma consulta jurídica e conversar sobre o meu caso.";
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
  size = 18,
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
      <path
        fill="#EA4335"
        d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.4 9 5 12 5z"
      />
      <path
        fill="#4285F4"
        d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"
      />
      <path
        fill="#FBBC05"
        d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3s.2-1.5.4-2.3L1.9 7.3C.7 9.7 0 10.8 0 12s.7 2.3 1.9 4.7l3.7-2.9z"
      />
      <path
        fill="#34A853"
        d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.4-6.4-5.2L1.9 16c1.8 3.7 5.6 7 10.1 7z"
      />
    </svg>
  );
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalArea, setModalArea] = useState<string>("Consulta Jurídica Especializada");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openConsultModal = (areaName = "Consulta Jurídica Especializada") => {
    setModalArea(areaName);
    setModalOpen(true);
  };

  const closeMenu = () => setIsMenuOpen(false);

  // Pilares Oficiais de Atuação de Nunes & Mota Advogados Associados
  const areasAtuacao = [
    {
      id: "direito-trabalhista",
      icon: Briefcase,
      title: "Direito Trabalhista",
      shortDesc:
        "Referência em causas trabalhistas no Norte de Minas. Defesa intransigente dos direitos do trabalhador com exatidão em cálculos e máxima agilidade processual.",
      bullets: [
        "Rescisão indireta e reversão de justa causa indevida",
        "Cobrança rigorosa de horas extras, intervalos e adicional noturno",
        "Adicionais de insalubridade, periculosidade e desvio de função",
        "Indenizações por acidente de trabalho, doenças ocupacionais e assédio",
      ],
      tag: "Trabalhista",
      badge: "Destaque Regional",
      whatsappMsg:
        "Olá, Dra. Misley Nunes e Dr. Mota! Preciso de orientação jurídica especializada sobre causa trabalhista e meus direitos.",
    },
    {
      id: "direito-civel",
      icon: Scale,
      title: "Direito Cível & Contratos",
      shortDesc:
        "Solidez jurídica na elaboração e revisão de contratos, reparações de danos materiais e morais, cobranças e resolução estratégica de conflitos patrimoniais.",
      bullets: [
        "Elaboração, análise e blindagem de contratos civis e imobiliários",
        "Ações indenizatórias por danos morais, materiais e descumprimento de acordos",
        "Cobrança judicial e extrajudicial de créditos e execução de títulos",
        "Defesa de propriedade, posse e disputas contratuais complexas",
      ],
      tag: "Cível",
      badge: "Segurança Contratual",
      whatsappMsg:
        "Olá, Dra. Misley Nunes e Dr. Mota! Gostaria de consultoria jurídica sobre Direito Cível / Contratos / Indenização.",
    },
    {
      id: "direito-consumidor",
      icon: Shield,
      title: "Direito do Consumidor",
      shortDesc:
        "Combate firme a abusos de bancos, companhias aéreas, planos de saúde e fornecedores, restabelecendo seu crédito e exigindo indenizações justas.",
      bullets: [
        "Limpeza de nome e indenização por negativação indevida no SPC/Serasa",
        "Golpes do Pix, fraudes bancárias, clonagem de cartão e empréstimos consignados não autorizados",
        "Cancelamento de compras, cobranças indevidas e vícios ocultos em produtos/serviços",
        "Ações contra abusos de empresas de telefonia, concessionárias de energia e planos de saúde",
      ],
      tag: "Consumidor",
      badge: "Defesa dos Seus Direitos",
      whatsappMsg:
        "Olá, Dra. Misley Nunes e Dr. Mota! Preciso de ajuda com um problema de Direito do Consumidor / Abuso Bancário.",
    },
    {
      id: "familia-sucessoes",
      icon: Users,
      title: "Família & Sucessões",
      shortDesc:
        "Condução sensível, técnica e segura em inventários em cartório, partilha de herança, divórcios consensuais e litigiosos e ações de pensão alimentícia.",
      bullets: [
        "Inventário extrajudicial em cartório rápido, sem desgaste e econômico",
        "Inventários judiciais e partilhas amigáveis ou contenciosas de bens",
        "Divórcio consensual e litigioso com proteção patrimonial justa",
        "Fixação, revisão e execução urgente de pensão alimentícia e guarda",
      ],
      tag: "Família",
      badge: "Acolhimento & Sucessões",
      whatsappMsg:
        "Olá, Dra. Misley Nunes e Dr. Mota! Preciso de orientação sobre Inventário / Partilha de Bens / Divórcio.",
    },
    {
      id: "direito-previdenciario",
      icon: FileText,
      title: "Direito Previdenciário (INSS)",
      shortDesc:
        "Planejamento previdenciário e atuação combativa contra indeferimentos do INSS, garantindo a concessão do melhor benefício para sua aposentadoria.",
      bullets: [
        "Concessão de Aposentadoria por Idade, Tempo de Contribuição e Especial",
        "Auxílio-Doença, Aposentadoria por Invalidez e Auxílio-Acidente",
        "Benefício de Prestação Continuada (BPC / LOAS) para idosos e PCDs",
        "Revisão de benefícios e recursos administrativos e judiciais contra o INSS",
      ],
      tag: "Previdenciário",
      badge: "Benefícios do INSS",
      whatsappMsg:
        "Olá, Dra. Misley Nunes e Dr. Mota! Gostaria de consultoria sobre Benefício do INSS / Aposentadoria / BPC LOAS.",
    },
    {
      id: "consultoria-estrategica",
      icon: Gavel,
      title: "Assessoria & Atendimento Estratégico",
      shortDesc:
        "Atendimento personalizado presencial em Januária ou 100% digital em todo o Brasil. Diagnóstico honesto e plano de ação transparente desde o primeiro contato.",
      bullets: [
        "Diagnóstico jurídico realista e transparente sobre chances e prazos",
        "Atendimento acolhedor na sede moderna em Januária ou por videochamada",
        "Negociações qualificadas para acordos extrajudiciais rápidos e vantajosos",
        "Acompanhamento direto e próximo pelos sócios em todas as fases do processo",
      ],
      tag: "Consultoria",
      badge: "Transparência Total",
      whatsappMsg:
        "Olá, Dra. Misley Nunes e Dr. Mota! Gostaria de agendar uma consulta para avaliar minha situação jurídica.",
    },
  ];

  // Avaliações Reais do Google Meu Negócio de Nunes & Mota Advogados Associados (Nota 5,0 ★ em 25 avaliações)
  const depoimentosGoogle = [
    {
      author: "Paloma Feletto",
      detail: "1 avaliação no Google",
      stars: 5,
      date: "Avaliação verificada no Google",
      quote:
        "Uma excelente profissional, resolveu meus problemas trabalhistas com exatidão! Sem contar que tem uma equipe maravilhosa, altamente qualificados... A melhor advogada para causas trabalhistas do Norte de Minas Gerais! Gratidão Dra. Misley♥️",
      highlight: "A melhor advogada para causas trabalhistas do Norte de Minas Gerais",
      ownerReply:
        "Muito Obrigada Paloma. Nós agradecemos pela confiança e pelo feedback! Deus abençoe!!",
    },
    {
      author: "Grazielly Carvalho",
      detail: "5 avaliações no Google",
      stars: 5,
      date: "Avaliação verificada no Google",
      quote:
        "Ótimos profissionais! São super atenciosos e competentes! 👏🏽😍",
      highlight: "Super atenciosos e competentes",
      ownerReply:
        "Gratidão!! Temos uma equipe dedicada com prioridade direcionada aos nossos clientes!!",
    },
    {
      author: "Irene Macieldasilva",
      detail: "1 avaliação no Google",
      stars: 5,
      date: "Avaliação verificada no Google",
      quote:
        "Profissionais excelente, super recomendo, consegui resolver meu problema, muito obrigado, gratidão 🙏👏🙏👏👏",
      highlight: "Consegui resolver meu problema, super recomendo",
      ownerReply:
        "Nós agradecemos pela confiança! Deus abençoe!!",
    },
    {
      author: "Lays Santos",
      detail: "7 avaliações · 9 fotos no Google",
      stars: 5,
      date: "Avaliação verificada no Google",
      quote:
        "Ambiente moderno, sofisticado e aconchegante para atender os clientes. Possui acesso com rampa para pessoas com mobilidade reduzida. Parabéns e muito sucesso pra vcs. Amei desenvolver esse projeto ❤️",
      highlight: "Ambiente moderno, sofisticado, aconchegante e com rampa de acessibilidade",
      ownerReply:
        "Sempre em busca do melhor acolhimento àqueles que dependem do nosso trabalho! Gratidão!!",
    },
    {
      author: "Larissa Lopes Guedes",
      detail: "6 avaliações · 2 fotos no Google",
      stars: 5,
      date: "Avaliação verificada no Google",
      quote:
        "Equipe altamente qualificada. Profissionais que atendem com seriedade e compromisso, sempre a disposição do cliente! Extremamente satisfeita.",
      highlight: "Equipe altamente qualificada, seriedade e compromisso",
      ownerReply:
        "Gratidão!! Sempre à disposição!",
    },
    {
      author: "Érica Oliveira",
      detail: "12 avaliações · 1 foto no Google",
      stars: 5,
      date: "Avaliação verificada no Google",
      quote:
        "Excelente atendimento, conseguiram resolver o meu problema com muita agilidade e rapidez.",
      highlight: "Excelente atendimento, agilidade e rapidez",
      ownerReply:
        "Obrigada pela confiança! Sempre à disposição.",
    },
    {
      author: "Gabrielly Melo",
      detail: "2 avaliações no Google",
      stars: 5,
      date: "Avaliação verificada no Google",
      quote:
        "Advogados excelentes e recepcionistas muito prestativas. Advocacia exemplar 👏🏼👏🏼👏🏼👏🏼",
      highlight: "Advogados excelentes e advocacia exemplar",
      ownerReply:
        "Muito obrigada pelo feedback!",
    },
    {
      author: "Mariane Souza",
      detail: "2 avaliações no Google",
      stars: 5,
      date: "Avaliação verificada no Google",
      quote:
        "Ótimos profissionais, atenciosos e competentes eu recomendo os seus serviços 👏👏👏👏👏👏💯😍",
      highlight: "Profissionais atenciosos, competentes e recomendados",
      ownerReply:
        "Deus abençoe! Sempre à disposição!",
    },
    {
      author: "Amanda Guedes",
      detail: "3 avaliações no Google",
      stars: 5,
      date: "Avaliação verificada no Google",
      quote:
        "Escritório excelente com profissionais renomados. Super indico!",
      highlight: "Escritório excelente com profissionais renomados",
      ownerReply:
        "Gratidão!!!",
    },
    {
      author: "Ana Carolina",
      detail: "1 avaliação no Google",
      stars: 5,
      date: "Avaliação verificada no Google",
      quote:
        "Excelente atendimento, agilidade no processo, informações objetivas.",
      highlight: "Agilidade no processo e informações objetivas",
    },
    {
      author: "Bruno Oliveira Mota",
      detail: "Local Guide · 20 avaliações · 18 fotos no Google",
      stars: 5,
      date: "Avaliação verificada no Google",
      quote:
        "Profissionais capacitados, problema resolvido. Recomendo.",
      highlight: "Profissionais capacitados e problema resolvido",
    },
    {
      author: "Zezinha Guedes",
      detail: "1 avaliação no Google",
      stars: 5,
      date: "Avaliação verificada no Google",
      quote:
        "Advogados super dedicados e atenciosos. Resolveu meu problema!!",
      highlight: "Super dedicados, atenciosos e problema resolvido",
      ownerReply:
        "Muito Obrigada!! Nós agradecemos pela confiança! Deus abençoe!!",
    },
  ];

  // Diferenciais Competitivos de Nunes & Mota Advogados
  const diferenciais = [
    {
      icon: Award,
      title: "Mais de 7 Anos de Tradição e Excelência",
      description:
        "Uma trajetória sólida de mais de 7 anos construída com ética, rigor técnico inegociável e defesa incansável dos direitos de nossos clientes em Januária, MG e em todo o país.",
    },
    {
      icon: Accessibility,
      title: "Sede Moderna, Confortável & Acessível",
      description:
        "Estrutura de ponta na Av. Cônego Ramiro Leite, 20B - Centro, com salas privativas climatizadas e rampa de acesso exclusiva para pessoas com mobilidade reduzida.",
    },
    {
      icon: HeartHandshake,
      title: "Atendimento Humanizado & Ágil",
      description:
        "Comunicação direta, transparente e descomplicada. Nossa equipe trata cada causa com empatia, mantendo você sempre informado sobre cada andamento do seu processo.",
    },
    {
      icon: Shield,
      title: "Exatidão Técnica & Alta Resolutividade",
      description:
        "Especialização comprovada em Direito Trabalhista, Cível, Consumidor e Família. Foco em soluções práticas, cálculos precisos e resultados consistentes.",
    },
    {
      icon: Coins,
      title: "Contratos Transparentes & Honorários Claros",
      description:
        "Honorários éticos, proporcionais e rigorosamente alinhados ao Código de Ética da OAB, sem letras miúdas ou custos inesperados para o cliente.",
    },
    {
      icon: Star,
      title: "Nota Máxima 5,0 ★ Unânime no Google",
      description:
        "Reconhecimento unânime de nossos clientes em 25 avaliações 5 estrelas no Google Meu Negócio, atestando a confiança e o prestígio de nossa advocacia.",
    },
  ];

  // Situações comuns (Diagnóstico Rápido)
  const situacoesDiagnostico = [
    {
      pergunta: "Teve seus direitos desrespeitados no trabalho ou sofreu demissão irregular?",
      orientacao:
        "A Dra. Misley Nunes e equipe atuam com exatidão no cálculo de rescisões, horas extras, adicionais de insalubridade/periculosidade, acidentes de trabalho e reversão de justas causas abusivas.",
      cta: "Analisar Meu Caso Trabalhista",
      area: "Direito Trabalhista",
    },
    {
      pergunta: "Está sendo lesado por bancos, cobranças indevidas ou negativação no SPC?",
      orientacao:
        "Defendemos o consumidor contra fraudes bancárias, juros abusivos, golpes do Pix e negativações ilegais, buscando a exclusão imediata do nome dos cadastros de inadimplentes e indenização por danos morais.",
      cta: "Limpar Nome / Exigir Indenização",
      area: "Direito do Consumidor",
    },
    {
      pergunta: "Precisa realizar o inventário de bens da família ou formalizar um divórcio?",
      orientacao:
        "Atuamos em inventários extrajudiciais em cartório (rápidos e menos onerosos) e judiciais, além de divórcios consensuais e litigiosos, garantindo uma divisão justa e a preservação do patrimônio familiar.",
      cta: "Orientação em Inventário & Família",
      area: "Família & Sucessões",
    },
    {
      pergunta: "Teve benefício previdenciário negado pelo INSS ou planeja sua aposentadoria?",
      orientacao:
        "Analisamos seu tempo de contribuição, laudos médicos e histórico laboral para ingressar com pedidos administrativos e ações judiciais para concessão de aposentadorias, auxílio-doença e BPC/LOAS.",
      cta: "Consultar Benefício do INSS",
      area: "Direito Previdenciário",
    },
  ];

  // FAQ
  const faqs = [
    {
      question: "Como funciona a primeira consulta jurídica com Nunes & Mota Advogados?",
      answer:
        "A consulta inicial é um atendimento privativo, atencioso e detalhado. Pode ser realizado presencialmente em nossa sede no Centro de Januária - MG ou por chamada de vídeo/WhatsApp para qualquer região do Brasil. Analisamos sua documentação e explicamos com clareza a viabilidade e os melhores caminhos para o seu caso.",
    },
    {
      question: "Quais documentos devo separar para uma causa trabalhista?",
      answer:
        "Para uma análise completa, é recomendável reunir: Carteira de Trabalho (física ou digital), holerites/contracheques, extrato analítico do FGTS, termo de rescisão (se já tiver sido desligado), comprovantes de mensagens ou e-mails e eventuais atestados médicos em caso de acidente ou doença do trabalho.",
    },
    {
      question: "O escritório atende apenas em Januária - MG ou em outras regiões?",
      answer:
        "Atendemos presencialmente toda a região de Januária e Norte de Minas Gerais, e de forma 100% digital em todo o Brasil. Através do processo eletrônico (PJe), atuamos perante os Tribunais Regionais do Trabalho, Tribunais de Justiça e Tribunais Superiores com máxima segurança e agilidade.",
    },
    {
      question: "O que fazer em caso de golpe financeiro ou cobrança indevida de bancos?",
      answer:
        "Guarde todos os comprovantes, extratos bancários, prints de conversas e faça imediatamente o Boletim de Ocorrência. Em seguida, acione nosso escritório para ingressarmos com as medidas judiciais urgentes contra a instituição bancária responsável para bloqueio, restituição dos valores e reparação de danos morais.",
    },
    {
      question: "O escritório possui acessibilidade para pessoas com deficiência ou mobilidade reduzida?",
      answer:
        "Sim! Nosso escritório na Av. Cônego Ramiro Leite, 20B foi planejado para acolher a todos com conforto e dignidade, contando com rampa de acesso externa para cadeirantes e pessoas com mobilidade reduzida, corredores amplos e recepção moderna.",
    },
    {
      question: "Como são combinados os honorários advocatícios?",
      answer:
        "Nossos contratos de honorários são 100% transparentes, éticos e pautados pelas diretrizes da Ordem dos Advogados do Brasil (OAB). Em muitas demandas (como causas trabalhistas), trabalhamos com condições facilitadas no êxito da causa, sem surpresas nem custos ocultos.",
    },
  ];

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-white font-sans text-slate-800 antialiased selection:bg-[#16365b] selection:text-white">
        {/* ========================================================================= */}
        {/* 1. TOP NOTICE / PRE-HEADER                                               */}
        {/* ========================================================================= */}
        <div className="border-b border-[#1a3a5c] bg-gradient-to-r from-[#050e18] via-[#081626] to-[#0d2035] px-4 py-2 text-white">
          <div className="mx-auto flex w-full max-w-[1600px] flex-wrap items-center justify-between gap-2 px-4 sm:px-6 lg:px-8 xl:px-12 text-xs">
            <div className="flex items-center gap-2 font-medium">
              <span className="flex size-2 rounded-full bg-[#cbd5e1] animate-pulse" />
              <span className="text-[#f1f5f9] font-semibold">
                Nunes &amp; Mota Advogados Associados &bull; Januária - MG
              </span>
              <span className="hidden sm:inline text-slate-400">|</span>
              <span className="hidden sm:inline text-slate-300">
                ⚖️ Há Mais de 7 Anos &bull; Trabalhista &bull; Cível &bull; Consumidor
              </span>
            </div>

            <div className="flex items-center gap-4 text-[11px] sm:text-xs">
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-amber-300 transition-colors hover:text-white"
              >
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span className="font-bold text-white">5,0 ★</span>
                <span className="text-slate-300">(25 avaliações no Google)</span>
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-1 font-semibold text-[#cbd5e1] hover:text-white transition-colors"
              >
                <WhatsAppIcon size={13} className="text-[#25D366]" />
                <span>{PHONE_DISPLAY}</span>
              </a>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. NAVBAR                                                                 */}
        {/* ========================================================================= */}
        <header
          className={`sticky top-0 z-40 transition-all duration-300 ${
            isScrolled
              ? "border-b border-slate-200 bg-white/95 shadow-md shadow-black/5 backdrop-blur-md"
              : "border-b border-slate-100 bg-white/90 backdrop-blur-sm"
          }`}
        >
          <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-4 py-3 sm:px-6 lg:px-8 xl:px-12">
            {/* Left: Logo (flex-1) */}
            <div className="flex flex-1 items-center justify-start min-w-0">
              <a
                href="#inicio"
                aria-label="Nunes & Mota Advogados Associados - Início"
                onClick={closeMenu}
                className="flex shrink-0 items-center gap-3 transition-opacity hover:opacity-95"
              >
                <div className="relative size-10 sm:size-11 lg:size-12 shrink-0">
                  <Image
                    src={LOGO_SYMBOL_SRC}
                    alt="Nunes & Mota Advogados Associados"
                    fill
                    priority
                    unoptimized
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-cinzel text-sm sm:text-base lg:text-lg font-extrabold tracking-[0.14em] text-[#081626] leading-tight whitespace-nowrap">
                    NUNES &amp; MOTA
                  </span>
                  <span className="text-[8px] sm:text-[9px] lg:text-[10px] font-bold tracking-[0.2em] text-[#1a406c] uppercase mt-0.5 whitespace-nowrap">
                    ADVOGADOS ASSOCIADOS &bull; JANUÁRIA - MG
                  </span>
                </div>
              </a>
            </div>

            {/* Center: Tópicos Rigorosamente Centralizados (flex-none) */}
            <nav
              aria-label="Navegação principal"
              className="hidden lg:flex flex-none items-center justify-center gap-4 xl:gap-6 2xl:gap-8 whitespace-nowrap text-[11px] xl:text-xs font-semibold tracking-[0.08em] px-4"
            >
              <a className="nav-link" href="#atuacao">
                Áreas de Atuação
              </a>
              <a className="nav-link" href="#sobre">
                O Escritório
              </a>
              <a className="nav-link hidden xl:inline-block" href="#diferenciais">
                Diferenciais
              </a>
              <a className="nav-link" href="#avaliacoes">
                Avaliações (5.0 ★)
              </a>
              <a className="nav-link hidden 2xl:inline-block" href="#faq">
                Dúvidas
              </a>
              <a className="nav-link" href="#contato">
                Contato &amp; Sede
              </a>
            </nav>

            {/* Right: Botão CTA & Mobile Toggle (flex-1) */}
            <div className="flex flex-1 items-center justify-end">
              <div className="hidden lg:flex items-center shrink-0">
                <GlowingButton
                  variant="silver"
                  size="sm"
                  href={getWhatsAppUrl()}
                  target="_blank"
                  className="shadow-sm whitespace-nowrap"
                >
                  <WhatsAppIcon size={14} className="text-[#050e18]" />
                  <span>Consulta no WhatsApp</span>
                </GlowingButton>
              </div>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
                aria-label="Abrir menu de navegação"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Drawer */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="border-b border-slate-200 bg-white px-5 py-5 lg:hidden shadow-xl"
              >
                <div className="flex flex-col gap-3.5 text-sm font-semibold tracking-wide">
                  <a
                    className="py-1.5 text-slate-800 hover:text-[#215187]"
                    href="#inicio"
                    onClick={closeMenu}
                  >
                    Início
                  </a>
                  <a
                    className="py-1.5 text-slate-800 hover:text-[#215187]"
                    href="#atuacao"
                    onClick={closeMenu}
                  >
                    Áreas de Atuação
                  </a>
                  <a
                    className="py-1.5 text-slate-800 hover:text-[#215187]"
                    href="#sobre"
                    onClick={closeMenu}
                  >
                    Sobre o Escritório &amp; Sócios
                  </a>
                  <a
                    className="py-1.5 text-slate-800 hover:text-[#215187]"
                    href="#diferenciais"
                    onClick={closeMenu}
                  >
                    Nossos Diferenciais
                  </a>
                  <a
                    className="py-1.5 text-slate-800 hover:text-[#215187]"
                    href="#avaliacoes"
                    onClick={closeMenu}
                  >
                    Avaliações no Google (5.0 ★)
                  </a>
                  <a
                    className="py-1.5 text-slate-800 hover:text-[#215187]"
                    href="#faq"
                    onClick={closeMenu}
                  >
                    Perguntas Frequentes
                  </a>
                  <a
                    className="py-1.5 text-slate-800 hover:text-[#215187]"
                    href="#contato"
                    onClick={closeMenu}
                  >
                    Sede em Januária - MG &amp; Contato
                  </a>

                  <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
                    <GlowingButton
                      variant="silver"
                      size="md"
                      href={getWhatsAppUrl()}
                      target="_blank"
                      className="w-full justify-center"
                    >
                      <WhatsAppIcon size={16} className="text-[#050e18]" />
                      <span>Falar no WhatsApp</span>
                    </GlowingButton>
                    <a
                      href={`tel:${WHATSAPP_NUMBER}`}
                      className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 py-3 text-xs font-bold text-slate-700 hover:bg-slate-50"
                    >
                      <Phone size={14} className="text-[#215187]" />
                      <span>Ligar: {PHONE_DISPLAY}</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* ========================================================================= */}
        {/* 3. HERO SECTION                                                          */}
        {/* ========================================================================= */}
        <section
          id="inicio"
          className="relative overflow-hidden bg-gradient-to-b from-[#07192f] via-[#0c2440] to-[#081a2e] text-white py-14 sm:py-20 lg:py-24"
        >
          {/* Luminous Ambient Glow (Backlight for maximum text clarity) */}
          <div className="pointer-events-none absolute -top-24 left-0 size-[650px] rounded-full bg-[#1b436d]/45 blur-[130px]" />
          <div className="pointer-events-none absolute top-1/3 -left-20 size-[500px] rounded-full bg-[#163a61]/35 blur-[120px]" />
          <div className="pointer-events-none absolute top-1/2 -right-40 size-96 rounded-full bg-[#1a406c]/40 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Left Column: Copy & CTAs */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="lg:col-span-7"
              >
                {/* Eyebrow Badge */}
                <motion.div variants={fadeInUp} className="mb-4">
                  <div className="inline-flex items-center gap-2.5 rounded-full border border-white/40 bg-white/10 px-4 py-2 text-xs font-bold tracking-[0.16em] uppercase text-white shadow-lg backdrop-blur-md">
                    <Scale size={14} className="text-[#38bdf8]" />
                    <span>Nunes &amp; Mota Advogados &bull; Há mais de 7 Anos</span>
                  </div>
                </motion.div>

                {/* H1 Headline */}
                <motion.h1
                  variants={fadeInUp}
                  className="font-cinzel text-3xl font-extrabold leading-[1.18] tracking-tight sm:text-4xl md:text-5xl lg:text-[3.25rem] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]"
                >
                  Defesa jurídica estratégica, ética e{" "}
                  <span className="text-gradient-silver font-black drop-shadow-[0_2px_16px_rgba(255,255,255,0.4)]">
                    altamente resolutiva
                  </span>{" "}
                  para seus direitos.
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  variants={fadeInUp}
                  className="mt-6 text-base text-slate-100 sm:text-lg sm:leading-relaxed font-normal drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]"
                >
                  Atuação especializada e combativa em{" "}
                  <strong className="text-white font-bold underline decoration-[#38bdf8]/50 underline-offset-4">
                    Direito Trabalhista, Cível, Consumidor e Família
                  </strong>
                  . Conduzido pela{" "}
                  <strong className="text-white font-bold">
                    Dra. Misley Nunes &amp; Dr. Mota
                  </strong>
                  , com escritório moderno e acessível no Centro de Januária - MG e atendimento digital de excelência em todo o Brasil.
                </motion.p>

                {/* Authority Badges Checklist */}
                <motion.div
                  variants={fadeInUp}
                  className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 text-xs sm:text-sm text-white"
                >
                  <div className="flex items-center gap-2.5 rounded-lg bg-white/5 border border-white/10 px-3 py-2 backdrop-blur-xs">
                    <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-[#25D366] border border-emerald-500/30">
                      <CheckCircle2 size={13} />
                    </div>
                    <span className="font-semibold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                      Nota máxima 5,0 ★ no Google (25 avaliações)
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-lg bg-white/5 border border-white/10 px-3 py-2 backdrop-blur-xs">
                    <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-[#25D366] border border-emerald-500/30">
                      <CheckCircle2 size={13} />
                    </div>
                    <span className="font-semibold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                      Referência regional em causas trabalhistas
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-lg bg-white/5 border border-white/10 px-3 py-2 backdrop-blur-xs">
                    <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-[#25D366] border border-emerald-500/30">
                      <CheckCircle2 size={13} />
                    </div>
                    <span className="font-semibold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                      Ambiente moderno com rampa de acessibilidade
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-lg bg-white/5 border border-white/10 px-3 py-2 backdrop-blur-xs">
                    <div className="flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-[#25D366] border border-emerald-500/30">
                      <CheckCircle2 size={13} />
                    </div>
                    <span className="font-semibold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
                      Sede na Av. Cônego Ramiro Leite, 20B - Centro
                    </span>
                  </div>
                </motion.div>

                {/* CTAs */}
                <motion.div
                  variants={fadeInUp}
                  className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center"
                >
                  <GlowingButton
                    variant="silver"
                    size="lg"
                    href={getWhatsAppUrl()}
                    target="_blank"
                    className="shadow-2xl shadow-black/50"
                  >
                    <WhatsAppIcon size={18} className="text-[#050e18]" />
                    <span>Falar no WhatsApp com o Escritório</span>
                  </GlowingButton>

                  <a
                    href="#atuacao"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/40 bg-white/10 px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md transition-all hover:border-white hover:bg-white hover:text-[#081626] shadow-lg"
                  >
                    <span>Conhecer Áreas de Atuação</span>
                    <ArrowRight size={14} />
                  </a>
                </motion.div>

                {/* Micro Proof Footer */}
                <motion.div
                  variants={fadeInUp}
                  className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center gap-4 text-xs text-slate-100"
                >
                  <div className="flex items-center gap-2 rounded-lg bg-white/10 border border-white/20 px-3 py-1.5 backdrop-blur-xs">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <span className="font-bold text-white text-sm">5,0 de 5,0</span>
                  </div>
                  <span className="text-white/40">&bull;</span>
                  <span className="font-medium text-white">25 avaliações no Google Meu Negócio</span>
                  <span className="text-white/40">&bull;</span>
                  <a
                    href={GOOGLE_SEARCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#38bdf8] hover:text-white underline flex items-center gap-1 transition-colors"
                  >
                    <span>Ver no Google</span>
                    <ArrowUpRight size={13} />
                  </a>
                </motion.div>
              </motion.div>

              {/* Right Column: Partners Portrait Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative lg:col-span-5"
              >
                <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
                  {/* Decorative Glowing Frame */}
                  <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-white/30 via-[#cbd5e1]/15 to-transparent blur-md" />

                  {/* Main Portrait Card */}
                  <div className="relative overflow-hidden rounded-2xl border-2 border-white/60 bg-[#081626] shadow-2xl">
                    <div className="relative aspect-[4/5] w-full overflow-hidden">
                      <Image
                        src={FOTO_HERO_SRC}
                        alt="Dra. Misley Nunes e Dr. Mota - Nunes & Mota Advogados Associados"
                        fill
                        priority
                        className="object-cover object-top filter contrast-[1.02]"
                      />

                      {/* Gradient Overlay for bottom text legibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050e18] via-[#050e18]/20 to-transparent" />

                      {/* Card Lower Badge */}
                      <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/30 bg-[#050e18]/90 p-3.5 backdrop-blur-md">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-cinzel text-sm sm:text-base font-bold text-white tracking-wide">
                              Dra. Misley Nunes &amp; Dr. Mota
                            </p>
                            <p className="text-[10px] sm:text-xs font-semibold text-[#cbd5e1] uppercase tracking-wider mt-0.5">
                              Nunes &amp; Mota Advogados Associados
                            </p>
                          </div>
                          <div className="flex flex-col items-end">
                            <div className="flex gap-0.5">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  size={11}
                                  className="fill-amber-400 text-amber-400"
                                />
                              ))}
                            </div>
                            <span className="text-[10px] font-bold text-white mt-0.5">
                              5,0 ★ no Google (25)
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Trust Card Top-Right */}
                  <div className="hidden sm:flex absolute -top-5 -right-5 items-center gap-2.5 rounded-xl border border-white/60 bg-[#050e18]/95 px-4 py-2.5 shadow-xl backdrop-blur-md">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-white/10 text-white">
                      <Scale size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#cbd5e1]">
                        Tradição
                      </p>
                      <p className="text-xs font-bold text-white">
                        Há Mais de 7 Anos
                      </p>
                    </div>
                  </div>

                  {/* Floating Trust Card Bottom-Left */}
                  <div className="hidden sm:flex absolute -bottom-5 -left-5 items-center gap-2.5 rounded-xl border border-slate-700 bg-[#081626]/95 px-4 py-2.5 shadow-xl backdrop-blur-md">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-[#25D366]/20 text-[#25D366]">
                      <WhatsAppIcon size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-300">
                        Atendimento Ágil
                      </p>
                      <p className="text-xs font-bold text-white">
                        Presencial &amp; Digital
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. TRUST & AUTHORITY NUMBERS BAR                                         */}
        {/* ========================================================================= */}
        <section className="border-y border-slate-200 bg-[#f8fafc] py-8 sm:py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1 text-2xl sm:text-3xl font-extrabold text-[#081626]">
                  <span>5,0</span>
                  <div className="flex text-amber-500">
                    <Star size={18} className="fill-amber-400 text-amber-400" />
                  </div>
                </div>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#215187] mt-1">
                  Nota Máxima Google
                </p>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                  25 avaliações 100% 5 estrelas
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#081626]">
                  +07 Anos
                </div>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#215187] mt-1">
                  Atuação Consolidada
                </p>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                  Solidez e tradição jurídica
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#081626]">
                  Januária - MG
                </div>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#215187] mt-1">
                  Sede com Acessibilidade
                </p>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                  Av. Cônego Ramiro Leite, 20B
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#081626]">
                  Brasil
                </div>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#215187] mt-1">
                  Atendimento Digital
                </p>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                  Alcance em todo o território nacional
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. DIAGNÓSTICO JURÍDICO RÁPIDO ("VOCÊ SE IDENTIFICA?")                    */}
        {/* ========================================================================= */}
        <section className="py-14 sm:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <div className="eyebrow-navy justify-center mb-3">
                Diagnóstico Jurídico Estratégico
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold text-[#081626]">
                Você se identifica com alguma dessas situações jurídicas?
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Não deixe seus direitos desprotegidos nem adie a solução de questões
                que envolvem seu trabalho, sua família, seu nome ou seu patrimônio:
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
              {situacoesDiagnostico.map((sit, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-6 sm:p-8 transition-all hover:border-[#1a406c] hover:shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start gap-3.5 mb-3">
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#1a406c]/10 text-[#1a406c]">
                        <AlertCircle size={20} />
                      </div>
                      <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#081626] leading-snug">
                        {sit.pergunta}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed pl-12">
                      {sit.orientacao}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-slate-200/80 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => openConsultModal(sit.area)}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#215187] hover:text-[#081626] transition-colors cursor-pointer"
                    >
                      <span>{sit.cta}</span>
                      <ArrowRight size={14} />
                    </button>

                    <a
                      href={getWhatsAppUrl(`Olá, Dra. Misley Nunes e Dr. Mota! ${sit.pergunta}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex size-9 items-center justify-center rounded-lg bg-[#25D366] text-white hover:brightness-110 transition-all shadow-xs"
                      aria-label="Falar no WhatsApp sobre esta dúvida jurídica"
                    >
                      <WhatsAppIcon size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. PILARES DE ATUAÇÃO / ÁREAS ESPECIALIZADAS                             */}
        {/* ========================================================================= */}
        <section
          id="atuacao"
          className="relative bg-gradient-to-b from-[#050e18] via-[#081626] to-[#0d2035] text-white py-16 sm:py-24"
        >
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
              <div className="eyebrow-light justify-center mb-3">
                Pilares de Atuação &bull; Advocacia de Excelência
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
                Como atuamos na defesa dos seus direitos
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300">
                Atuação consultiva preventiva e contenciosa combativa em instâncias
                judiciais e extrajudiciais, com técnica refinada, clareza e dedicação.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {areasAtuacao.map((area) => {
                const IconComponent = area.icon;
                return (
                  <div
                    key={area.id}
                    className="group relative flex flex-col justify-between rounded-2xl border border-slate-700/80 bg-[#0d2035]/90 p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white hover:shadow-2xl hover:shadow-white/10"
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-white/20 to-white/5 border border-white/30 text-white group-hover:scale-105 transition-transform">
                          <IconComponent size={22} />
                        </div>
                        <span className="rounded-full border border-white/40 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#f1f5f9]">
                          {area.badge}
                        </span>
                      </div>

                      {/* Card Title */}
                      <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-[#cbd5e1] transition-colors">
                        {area.title}
                      </h3>

                      {/* Short Description */}
                      <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {area.shortDesc}
                      </p>

                      {/* Bullets */}
                      <div className="mt-5 space-y-2 border-t border-slate-700/60 pt-5">
                        {area.bullets.map((bullet, bIdx) => (
                          <div
                            key={bIdx}
                            className="flex items-start gap-2 text-xs text-slate-300"
                          >
                            <CheckCircle2
                              size={14}
                              className="text-[#cbd5e1] shrink-0 mt-0.5"
                            />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom CTA Button */}
                    <div className="mt-8 pt-5 border-t border-slate-700/60">
                      <a
                        href={getWhatsAppUrl(area.whatsappMsg)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/40 bg-white/5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#f1f5f9] transition-all hover:bg-white hover:text-[#050e18] hover:border-white"
                      >
                        <WhatsAppIcon size={14} />
                        <span>Consultar no WhatsApp</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Central Consultation Banner */}
            <div className="mt-14 rounded-2xl border-2 border-white/40 bg-gradient-to-r from-[#050e18] via-[#081626] to-[#0d2035] p-8 sm:p-10 shadow-2xl">
              <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
                <div>
                  <div className="eyebrow-light mb-2">
                    Precisa de Orientação Imediata?
                  </div>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
                    Fale diretamente com Nunes &amp; Mota Advogados
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-300 max-w-2xl">
                    Envie uma mensagem resumindo sua necessidade. Analisamos seu caso com total sigilo
                    e atenção para indicar o caminho jurídico mais seguro e eficaz.
                  </p>
                </div>

                <GlowingButton
                  variant="silver"
                  size="lg"
                  href={getWhatsAppUrl(
                    "Olá, Dra. Misley Nunes e Dr. Mota! Gostaria de uma avaliação jurídica para entender o caminho mais adequado para o meu caso."
                  )}
                  target="_blank"
                  className="shrink-0"
                >
                  <WhatsAppIcon size={17} className="text-[#050e18]" />
                  <span>Tirar Dúvida Agora</span>
                </GlowingButton>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. SOBRE O ESCRITÓRIO & ESTRUTURA MODERNA                                */}
        {/* ========================================================================= */}
        <section id="sobre" className="py-16 sm:py-24 bg-white overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Photo of Modern Reception on Left */}
              <div className="relative lg:col-span-5">
                <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
                  {/* Subtle Accent Glow */}
                  <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-[#1a406c]/20 to-transparent blur-lg" />

                  <div className="relative overflow-hidden rounded-2xl border-2 border-slate-200 bg-[#081626] shadow-2xl">
                    <div className="relative aspect-[4/5] w-full">
                      <Image
                        src={FOTO_ESCRITORIO_SRC}
                        alt="Recepção moderna de Nunes & Mota Advogados Associados em Januária - MG"
                        fill
                        className="object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050e18]/80 via-transparent to-transparent" />

                      <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/20 bg-black/60 p-3.5 backdrop-blur-md text-white text-center">
                        <p className="font-cinzel text-base font-bold text-white">
                          Nossa Sede em Januária - MG
                        </p>
                        <p className="text-[11px] text-slate-200 mt-0.5">
                          Av. Cônego Ramiro Leite, 20B &bull; Estrutura Moderna &amp; Acessibilidade
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio & Details on Right */}
              <div className="lg:col-span-7">
                <div className="eyebrow-navy mb-3">Sobre o Escritório &amp; Sócios</div>

                <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#081626] leading-tight">
                  Mais de 7 anos de atuação séria, ambiente moderno e dedicação absoluta a cada cliente.
                </h2>

                <div className="mt-6 space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    O escritório <strong className="text-[#081626]">Nunes &amp; Mota Advogados Associados</strong> nasceu
                    com o propósito de oferecer uma advocacia moderna, técnica, combativa e profundamente comprometida
                    com os anseios de quem busca justiça.
                  </p>
                  <p>
                    Com sede própria localizada estrategicamente na <strong className="text-[#081626]">Av. Cônego Ramiro Leite, 20B - Centro, em Januária - MG</strong>,
                    nosso espaço foi projetado para oferecer o máximo de conforto, sofisticação e discrição, contando inclusive com{" "}
                    <strong className="text-[#081626]">rampa de acesso para pessoas com mobilidade reduzida</strong>, conforme elogiado por nossos clientes.
                  </p>
                  <p>
                    Liderado pela <strong className="text-[#081626]">Dra. Misley Nunes</strong> (reconhecida por clientes como uma das mais expressivas referências em causas trabalhistas do Norte de Minas)
                    e pelo <strong className="text-[#081626]">Dr. Mota</strong>, o escritório alia mais de 7 anos de experiência forense a um atendimento acolhedor, transparente e com nota máxima 5,0 ★ no Google.
                  </p>
                </div>

                {/* Quote Box */}
                <div className="mt-6 rounded-xl border-l-4 border-[#1a406c] bg-[#f8fafc] p-4 sm:p-5">
                  <p className="italic text-sm text-slate-800">
                    &ldquo;Ambiente moderno, sofisticado e aconchegante para atender os clientes. Possui acesso com rampa para pessoas com mobilidade reduzida... Uma excelente profissional, resolveu meus problemas trabalhistas com exatidão! Equipe maravilhosa, altamente qualificados.&rdquo;
                  </p>
                  <p className="mt-2 text-xs font-bold text-[#215187] uppercase tracking-wider">
                    — Síntese dos depoimentos reais de clientes no Google Meu Negócio (Nota 5,0 ★ em 25 avaliações)
                  </p>
                </div>

                {/* Social & Contact Strip */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <GlowingButton
                    variant="silver"
                    size="md"
                    href={getWhatsAppUrl()}
                    target="_blank"
                  >
                    <WhatsAppIcon size={16} className="text-[#050e18]" />
                    <span>Falar Diretamente com os Sócios</span>
                  </GlowingButton>

                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-800 transition-colors hover:border-[#1a406c] hover:text-[#1a406c]"
                  >
                    <InstagramIcon size={16} className="text-[#E1306C]" />
                    <span>Instagram {INSTAGRAM_HANDLE}</span>
                  </a>

                  <a
                    href={GOOGLE_SEARCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-800 transition-colors hover:border-[#1a406c] hover:text-[#1a406c]"
                  >
                    <GoogleIcon size={16} />
                    <span>Google Meu Negócio</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 8. DIFERENCIAIS                                                           */}
        {/* ========================================================================= */}
        <section id="diferenciais" className="py-16 sm:py-24 bg-[#f8fafc] border-t border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
              <div className="eyebrow-navy justify-center mb-3">
                Por Que Escolher Nunes &amp; Mota
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#081626]">
                Diferenciais que asseguram a satisfação absoluta dos nossos clientes
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Uma experiência jurídica com seriedade, clareza didática e dedicação autêntica.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {diferenciais.map((dif, idx) => {
                const IconComp = dif.icon;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs transition-all hover:border-[#1a406c] hover:shadow-md"
                  >
                    <div className="flex size-12 items-center justify-center rounded-xl bg-[#1a406c]/10 text-[#1a406c] mb-5">
                      <IconComp size={22} />
                    </div>
                    <h3 className="font-cinzel text-lg font-bold text-[#081626]">
                      {dif.title}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {dif.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 9. PASSO A PASSO (COMO FUNCIONA O ATENDIMENTO)                           */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
              <div className="eyebrow-navy justify-center mb-3">
                Processo Transparente e Seguro
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#081626]">
                Como funciona o seu atendimento jurídico
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Do primeiro contato até a resolução satisfatória da sua demanda:
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
              <div className="relative rounded-2xl border border-slate-200 bg-[#f8fafc] p-6 text-center">
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#081626] text-white font-bold text-lg mb-4">
                  1
                </div>
                <h3 className="font-cinzel text-base font-bold text-[#081626]">
                  Primeiro Contato
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Você nos envia uma mensagem no WhatsApp ou nos liga, resume sua situação e agendamos
                  sua consulta presencial em Januária ou online.
                </p>
              </div>

              <div className="relative rounded-2xl border border-slate-200 bg-[#f8fafc] p-6 text-center">
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#081626] text-white font-bold text-lg mb-4">
                  2
                </div>
                <h3 className="font-cinzel text-base font-bold text-[#081626]">
                  Análise Técnica
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  A equipe de advogados avalia minuciosamente contratos, rescisões, holerites ou documentos
                  para estruturar a melhor estratégia.
                </p>
              </div>

              <div className="relative rounded-2xl border border-slate-200 bg-[#f8fafc] p-6 text-center">
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#081626] text-white font-bold text-lg mb-4">
                  3
                </div>
                <h3 className="font-cinzel text-base font-bold text-[#081626]">
                  Definição Estratégica
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Apresentamos o plano com total clareza quanto a prazos, honorários justos e os passos
                  necessários para defender seus direitos.
                </p>
              </div>

              <div className="relative rounded-2xl border border-slate-200 bg-[#f8fafc] p-6 text-center">
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#081626] text-white font-bold text-lg mb-4">
                  4
                </div>
                <h3 className="font-cinzel text-base font-bold text-[#081626]">
                  Atuação &amp; Acompanhamento
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Execução diligente e combativa na Justiça do Trabalho, Fórum ou cartório, com atualizações periódicas
                  diretamente com você.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <GlowingButton
                variant="silver"
                size="lg"
                href={getWhatsAppUrl()}
                target="_blank"
              >
                <WhatsAppIcon size={17} className="text-[#050e18]" />
                <span>Iniciar Minha Consulta no WhatsApp</span>
              </GlowingButton>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 10. AVALIAÇÕES REAIS DO GOOGLE (PROVA SOCIAL)                             */}
        {/* ========================================================================= */}
        <section
          id="avaliacoes"
          className="py-16 sm:py-24 bg-gradient-to-b from-[#050e18] via-[#081626] to-[#0d2035] text-white"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
              <div className="eyebrow-light justify-center mb-3">
                Prova Social &bull; Google Meu Negócio
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
                O que dizem os clientes no Google
              </h2>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span className="text-xl font-bold text-white">5,0 de 5,0 estrelas</span>
                <span className="text-sm text-slate-300">
                  (25 avaliações verificadas no Google)
                </span>
              </div>
            </div>

            {/* Grid of Reviews */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {depoimentosGoogle.map((dep, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-700/80 bg-[#0d2035]/80 p-6 backdrop-blur-sm flex flex-col justify-between hover:border-white transition-all"
                >
                  <div>
                    {/* Stars and Google Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex gap-0.5">
                        {[...Array(dep.stars)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>
                      <div className="flex items-center gap-1 text-[11px] text-slate-400">
                        <GoogleIcon size={14} />
                        <span>Google Review</span>
                      </div>
                    </div>

                    {/* Highlight */}
                    <p className="text-xs font-bold text-[#cbd5e1] mb-2 uppercase tracking-wider">
                      {dep.highlight}
                    </p>

                    {/* Quote */}
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                      &ldquo;{dep.quote}&rdquo;
                    </p>

                    {/* Owner reply snippet if available */}
                    {dep.ownerReply && (
                      <div className="mt-3.5 pt-3 border-t border-slate-800 text-[11px] text-slate-400 italic">
                        <span className="font-semibold text-white not-italic">Resposta Nunes &amp; Mota: </span>
                        &ldquo;{dep.ownerReply}&rdquo;
                      </div>
                    )}
                  </div>

                  {/* Author */}
                  <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center gap-3">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white">
                      {dep.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-xs sm:text-sm text-white">
                        {dep.author}
                      </p>
                      <p className="text-[11px] text-slate-400">
                        {dep.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Link to view on Google */}
            <div className="mt-12 text-center">
              <a
                href={GOOGLE_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-600 bg-white/5 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:border-white hover:bg-white/10 transition-colors"
              >
                <GoogleIcon size={16} />
                <span>Ver Todas as 25 Avaliações no Google Meu Negócio</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 11. FAQ                                                                   */}
        {/* ========================================================================= */}
        <section id="faq" className="py-16 sm:py-24 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <div className="eyebrow-navy justify-center mb-3">
                Dúvidas Frequentes
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#081626]">
                Perguntas Frequentes sobre Atuação &amp; Serviços
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600">
                Respostas diretas e orientações claras sobre como conduzimos as causas de nossos clientes.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-[#f8fafc] transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-[#081626] hover:text-[#215187] transition-colors cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="pr-4">{faq.question}</span>
                      <ChevronDown
                        size={18}
                        className={`shrink-0 text-[#215187] transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="border-t border-slate-200/80 px-5 pb-5 pt-3"
                        >
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 rounded-2xl border border-slate-200 bg-[#f8fafc] p-6 text-center">
              <p className="font-cinzel text-base font-bold text-[#081626]">
                Ainda tem alguma dúvida sobre a sua situação específica?
              </p>
              <p className="mt-1 text-xs sm:text-sm text-slate-600">
                A equipe de Nunes &amp; Mota Advogados está à disposição para esclarecer seu caso com ética, sigilo e rapidez.
              </p>
              <div className="mt-4">
                <GlowingButton
                  variant="silver"
                  size="md"
                  href={getWhatsAppUrl("Olá, Dra. Misley Nunes e Dr. Mota! Tenho uma dúvida sobre o meu caso e gostaria de orientação jurídica.")}
                  target="_blank"
                >
                  <WhatsAppIcon size={15} className="text-[#050e18]" />
                  <span>Tirar Dúvida no WhatsApp</span>
                </GlowingButton>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 12. CONTATO & SEDE EM JANUÁRIA - MG                                       */}
        {/* ========================================================================= */}
        <section id="contato" className="py-16 sm:py-24 bg-[#f8fafc] border-t border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Contact Info Column */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="eyebrow-navy mb-3">Atendimento &amp; Sede</div>
                  <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#081626]">
                    Entre em contato e agende sua consulta
                  </h2>
                  <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                    Atendimento presencial no Centro de Januária - MG ou 100% digital
                    com atendimento ágil para clientes em todo o Brasil. Escolha o canal de sua preferência.
                  </p>

                  <div className="mt-8 space-y-4">
                    <div className="flex items-start gap-3.5">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#1a406c]/10 text-[#1a406c]">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#081626] uppercase tracking-wider">
                          Endereço da Sede
                        </p>
                        <p className="text-sm text-slate-700 mt-0.5">
                          {ADDRESS_TEXT}
                        </p>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Com acesso e rampa para pessoas com mobilidade reduzida
                        </p>
                        <a
                          href={GOOGLE_MAPS_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 inline-flex items-center gap-1 text-xs font-bold text-[#215187] hover:underline"
                        >
                          <span>Como chegar no Google Maps</span>
                          <ArrowUpRight size={12} />
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#1a406c]/10 text-[#1a406c]">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#081626] uppercase tracking-wider">
                          Telefone &amp; WhatsApp
                        </p>
                        <a
                          href={getWhatsAppUrl()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-slate-800 hover:text-[#215187] mt-0.5 block"
                        >
                          {PHONE_DISPLAY}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#1a406c]/10 text-[#1a406c]">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#081626] uppercase tracking-wider">
                          E-mail de Contato
                        </p>
                        <a
                          href={`mailto:${EMAIL_CONTACT}`}
                          className="text-sm font-semibold text-slate-800 hover:text-[#215187] mt-0.5 block"
                        >
                          {EMAIL_CONTACT}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#1a406c]/10 text-[#1a406c]">
                        <InstagramIcon size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#081626] uppercase tracking-wider">
                          Instagram Oficial
                        </p>
                        <a
                          href={INSTAGRAM_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-slate-800 hover:text-[#215187] mt-0.5 block"
                        >
                          {INSTAGRAM_HANDLE}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#1a406c]/10 text-[#1a406c]">
                        <Clock size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#081626] uppercase tracking-wider">
                          Horário de Funcionamento
                        </p>
                        <p className="text-sm text-slate-700 mt-0.5">
                          Segunda a Sexta das 08:00 às 17:30
                        </p>
                        <p className="text-xs text-slate-500">
                          Atendimento presencial e digital com agendamento prévio
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200">
                  <GlowingButton
                    variant="silver"
                    size="lg"
                    href={getWhatsAppUrl()}
                    target="_blank"
                    className="w-full justify-center"
                  >
                    <WhatsAppIcon size={18} className="text-[#050e18]" />
                    <span>Falar no WhatsApp Agora</span>
                  </GlowingButton>
                </div>
              </div>

              {/* Map & Google Office Card Column */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="relative size-8 shrink-0">
                        <Image
                          src={LOGO_SYMBOL_SRC}
                          alt="Nunes & Mota Advogados Associados"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <p className="font-cinzel text-sm font-bold text-[#081626]">
                          Nunes &amp; Mota Advogados Associados
                        </p>
                        <p className="text-[10px] text-slate-500">
                          Januária - MG
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 rounded-md bg-amber-50 px-2 py-1 text-xs font-bold text-amber-700 border border-amber-200">
                      <Star size={12} className="fill-amber-400 text-amber-500" />
                      <span>5,0 ★ Google (25)</span>
                    </div>
                  </div>

                  {/* Interactive Map Container */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                    <iframe
                      title="Localização do Escritório Nunes & Mota Advogados Associados em Januária - MG"
                      src="https://maps.google.com/maps?q=Av.+C%C3%B4nego+Ramiro+Leite,+20B+-+Centro,+Janu%C3%A1ria+-+MG,+39480-000&t=&z=16&ie=UTF8&iwloc=&output=embed"
                      className="size-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>

                  <div className="mt-4 flex items-center justify-between text-xs text-slate-600">
                    <span>Av. Cônego Ramiro Leite, 20B - Centro, Januária - MG</span>
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#215187] hover:underline flex items-center gap-1"
                    >
                      <span>Abrir Rotas no GPS</span>
                      <ArrowUpRight size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 13. FOOTER                                                                */}
        {/* ========================================================================= */}
        <footer className="border-t border-[#1a3a5c] bg-gradient-to-b from-[#050e18] to-[#02070e] text-white py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-12 pb-12 border-b border-slate-800">
              {/* Brand Column */}
              <div className="lg:col-span-5">
                <a
                  href="#inicio"
                  className="flex items-center gap-3.5 transition-opacity hover:opacity-95"
                >
                  <div className="relative size-13 sm:size-14 shrink-0">
                    <Image
                      src={LOGO_SYMBOL_SRC}
                      alt="Nunes & Mota Advogados Associados"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-cinzel text-lg sm:text-xl font-extrabold tracking-[0.14em] text-white leading-tight">
                      NUNES &amp; MOTA
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.22em] text-[#cbd5e1] uppercase mt-0.5">
                      ADVOGADOS ASSOCIADOS &bull; JANUÁRIA - MG
                    </span>
                  </div>
                </a>

                <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md">
                  {FIRM_SLOGAN}
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-9 items-center justify-center rounded-lg border border-slate-700 bg-white/5 text-slate-300 transition-colors hover:border-white hover:text-white"
                    aria-label="Instagram de Nunes & Mota Advogados Associados"
                  >
                    <InstagramIcon size={16} />
                  </a>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-9 items-center justify-center rounded-lg border border-slate-700 bg-white/5 text-slate-300 transition-colors hover:border-[#25D366] hover:text-[#25D366]"
                    aria-label="WhatsApp de Nunes & Mota Advogados Associados"
                  >
                    <WhatsAppIcon size={16} />
                  </a>
                  <a
                    href={GOOGLE_SEARCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-9 items-center justify-center rounded-lg border border-slate-700 bg-white/5 text-slate-300 transition-colors hover:border-amber-400 hover:text-amber-400"
                    aria-label="Perfil no Google Meu Negócio"
                  >
                    <GoogleIcon size={16} />
                  </a>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="lg:col-span-3">
                <p className="font-cinzel text-xs font-bold uppercase tracking-[0.16em] text-[#cbd5e1] mb-4">
                  Áreas de Atuação
                </p>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li>
                    <a className="footer-link" href="#atuacao">
                      Direito Trabalhista
                    </a>
                  </li>
                  <li>
                    <a className="footer-link" href="#atuacao">
                      Direito Cível &amp; Contratos
                    </a>
                  </li>
                  <li>
                    <a className="footer-link" href="#atuacao">
                      Direito do Consumidor
                    </a>
                  </li>
                  <li>
                    <a className="footer-link" href="#atuacao">
                      Família &amp; Sucessões (Inventários)
                    </a>
                  </li>
                  <li>
                    <a className="footer-link" href="#atuacao">
                      Direito Previdenciário (INSS)
                    </a>
                  </li>
                  <li>
                    <a className="footer-link" href="#atuacao">
                      Consultoria Jurídica Estratégica
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal & Office */}
              <div className="lg:col-span-4">
                <p className="font-cinzel text-xs font-bold uppercase tracking-[0.16em] text-[#cbd5e1] mb-4">
                  Sede &amp; Contato
                </p>
                <div className="space-y-2.5 text-xs text-slate-300">
                  <p className="flex items-start gap-2">
                    <MapPin size={14} className="text-[#cbd5e1] shrink-0 mt-0.5" />
                    <span>{ADDRESS_TEXT}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <WhatsAppIcon size={14} className="text-[#25D366] shrink-0" />
                    <span>WhatsApp: {PHONE_DISPLAY}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail size={14} className="text-[#cbd5e1] shrink-0" />
                    <span>{EMAIL_CONTACT}</span>
                  </p>
                  <p className="text-[11px] text-slate-400 mt-3 pt-3 border-t border-slate-800">
                    Atendimento de Segunda a Sexta das 08:00 às 17:30.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Copyright & OAB Ethics Notice */}
            <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 text-center md:text-left">
              <p>
                &copy; {new Date().getFullYear()} Nunes &amp; Mota Advogados Associados.
                Todos os direitos reservados.
              </p>
              <p className="max-w-xl text-[10px] leading-relaxed">
                Este site possui finalidade informativa e institucional, em estrita observância
                às normas do Código de Ética e Disciplina da Ordem dos Advogados do Brasil (OAB).
              </p>
            </div>
          </div>
        </footer>

        {/* ========================================================================= */}
        {/* 14. FLOATING WHATSAPP BUTTON                                              */}
        {/* ========================================================================= */}
        <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-2.5 rounded-full border-2 border-white/80 bg-[#25D366] px-4 py-3 text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-[#1ebe5d]"
            aria-label="Falar com Nunes & Mota Advogados no WhatsApp"
          >
            <span className="absolute -top-1 -right-1 flex size-3">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-white opacity-75" />
              <span className="relative inline-flex size-3 rounded-full bg-white" />
            </span>
            <WhatsAppIcon size={22} className="text-white" />
            <span className="hidden sm:inline text-xs font-bold tracking-wide uppercase">
              Falar no WhatsApp
            </span>
          </a>
        </div>

        {/* ========================================================================= */}
        {/* 15. MODAL DE CONSULTA RÁPIDA                                              */}
        {/* ========================================================================= */}
        <AnimatePresence>
          {modalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setModalOpen(false)}
                className="fixed inset-0 bg-black/70 backdrop-blur-xs"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 16 }}
                className="relative z-10 w-full max-w-lg rounded-2xl border-2 border-white/60 bg-gradient-to-b from-[#050e18] to-[#081626] p-6 sm:p-8 text-white shadow-2xl"
              >
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="absolute top-4 right-4 rounded-lg p-1.5 text-slate-400 hover:bg-white/10 hover:text-white"
                  aria-label="Fechar janela"
                >
                  <X size={20} />
                </button>

                <div className="flex items-center gap-3 mb-4">
                  <div className="relative size-10 shrink-0">
                    <Image
                      src={LOGO_SYMBOL_SRC}
                      alt="Nunes & Mota Advogados Associados"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-cinzel text-lg font-bold text-white">
                      Análise Jurídica Especializada
                    </h3>
                    <p className="text-xs text-[#cbd5e1] font-semibold">
                      {modalArea}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Para analisar sua demanda com sigilo, agilidade e rigor técnico, você será
                  redirecionado ao atendimento oficial de{" "}
                  <strong className="text-white">Nunes &amp; Mota Advogados Associados</strong>.
                </p>

                <div className="mt-5 space-y-2 rounded-xl border border-slate-700 bg-white/5 p-4 text-xs text-slate-300">
                  <p className="font-bold text-white uppercase tracking-wider text-[11px] text-[#cbd5e1]">
                    O que ter em mãos (se aplicável):
                  </p>
                  <ul className="space-y-1 pl-1">
                    <li>&bull; Nome completo e cidade onde reside</li>
                    <li>&bull; Breve resumo da situação ou litígio</li>
                    <li>&bull; Documentos, comprovantes ou contratos relativos ao caso</li>
                  </ul>
                </div>

                <div className="mt-6 flex flex-col gap-2.5">
                  <GlowingButton
                    variant="silver"
                    size="md"
                    href={getWhatsAppUrl(
                      `Olá, Dra. Misley Nunes e Dr. Mota! Gostaria de uma avaliação jurídica sobre: ${modalArea}.`
                    )}
                    target="_blank"
                    className="w-full justify-center"
                  >
                    <WhatsAppIcon size={16} className="text-[#050e18]" />
                    <span>Prosseguir para o WhatsApp</span>
                  </GlowingButton>

                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="rounded-lg py-2 text-xs font-semibold text-slate-400 hover:text-white"
                  >
                    Voltar ao site
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}
