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
  Car,
  Compass,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5537984142250";
const PHONE_DISPLAY = "(37) 98414-2250";
const EMAIL_CONTACT = "romulomarini1@hotmail.com";
const INSTAGRAM_URL = "https://www.instagram.com/romulo.marini/";
const INSTAGRAM_HANDLE = "@romulo.marini";
const BENTO_URL = "https://bento.me/romulomarini";

const FIRM_NAME = "Rômulo Marini Advocacia";
const FIRM_SHORT_NAME = "Rômulo Marini Advocacia";
const FIRM_SLOGAN =
  "Excelência jurídica, ética inegociável e dedicação exclusiva para proteger você, sua família e seu patrimônio.";
const LAWYER_NAME = "Dr. Rômulo Marini";
const LAWYER_TITLE = "Advogado em Cláudio - MG | Inventários, Divórcio, Pensão e Trânsito";

const ADDRESS_TEXT =
  "Av. Pres. Tancredo Neves, 409 - Centro, Cláudio - MG, 35530-000";
const REGION_TEXT =
  "Cláudio · Centro-Oeste Mineiro & Atendimento Digital em Todo o Brasil";

const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=R%C3%B4mulo+Marini+Advocacia%0ACl%C3%A1udio+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Av.+Pres.+Tancredo+Neves%2C+409+-+Cl%C3%A1udio%2C+MG%2C+35530-000";

const LOGO_SRC = "/logo.png";
const LOGO_SYMBOL_SRC = "/logo-symbol.png";
const FOTO_HERO_SRC = "/hero-advogado.jpg";
const FOTO_SOBRE_SRC = "/sobre-advogado.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dr. Rômulo Marini! Gostaria de agendar uma consulta jurídica e conversar sobre o meu caso.";
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

  // Pilares Oficiais de Atuação de Rômulo Marini Advocacia
  const areasAtuacao = [
    {
      id: "inventarios-sucessoes",
      icon: Scale,
      title: "Inventários & Sucessões",
      shortDesc:
        "Partilha célere de herança, inventário extrajudicial em cartório e processos judiciais com segurança, discrição e preservação do patrimônio familiar.",
      bullets: [
        "Inventário extrajudicial em cartório rápido, sem litígio desnecessário",
        "Inventários judiciais contenciosos e consensuais com rigor técnico",
        "Partilha amigável de imóveis, contas bancárias e cotas empresariais",
        "Planejamento sucessório preventivo para proteção e redução de custos",
      ],
      tag: "Sucessões",
      badge: "Agilidade & Partilha",
      whatsappMsg:
        "Olá, Dr. Rômulo Marini! Preciso de orientação jurídica especializada sobre Inventário e Partilha de Bens.",
    },
    {
      id: "divorcio-familia",
      icon: Users,
      title: "Divórcio & Direito de Família",
      shortDesc:
        "Acolhimento humanizado, mediação e condução firme em divórcios consensuais e litigiosos, garantindo a divisão justa e a tranquilidade das partes.",
      bullets: [
        "Divórcio consensual em cartório homologado com máxima brevidade",
        "Divórcio litigioso com defesa vigorosa dos seus direitos e bens",
        "Dissolução de união estável e reconhecimento de direitos matrimoniais",
        "Partilha criteriosa do patrimônio construído durante a convivência",
      ],
      tag: "Família",
      badge: "Acolhimento & Resolução",
      whatsappMsg:
        "Olá, Dr. Rômulo Marini! Gostaria de consultoria sobre Divórcio e Partilha de Patrimônio.",
    },
    {
      id: "pensao-guarda",
      icon: HeartHandshake,
      title: "Pensão Alimentícia & Guarda",
      shortDesc:
        "Defesa intransigente dos direitos e do bem-estar dos filhos e familiares, fixando valores justos e exigindo o cumprimento integral da lei.",
      bullets: [
        "Ação de fixação, revisão e exoneração justa de pensão alimentícia",
        "Execução urgente de alimentos em atraso sob pena de prisão e penhora",
        "Guarda compartilhada e unilateral visando o melhor interesse dos filhos",
        "Regulamentação de regime de convivência e proteção do vínculo afetivo",
      ],
      tag: "Alimentos",
      badge: "Segurança Familiar",
      whatsappMsg:
        "Olá, Dr. Rômulo Marini! Preciso de orientação jurídica sobre Pensão Alimentícia e Guarda.",
    },
    {
      id: "direito-transito",
      icon: Car,
      title: "Direito de Trânsito & Defesa de CNH",
      shortDesc:
        "Atuação especializada contra suspensão e cassação da CNH, multas indevidas, Lei Seca e processos administrativos no DETRAN, JARI e Justiça.",
      bullets: [
        "Defesa técnica e recursos contra processo de Suspensão do Direito de Dirigir",
        "Recursos contra Cassação da CNH e desbloqueio de prontuário",
        "Defesa administrativa e judicial contra autos de infração da Lei Seca / Bafômetro",
        "Ações judiciais anulatórias de multas abusivas e irregularidades de órgãos de trânsito",
      ],
      tag: "Trânsito",
      badge: "Proteção da CNH",
      whatsappMsg:
        "Olá, Dr. Rômulo Marini! Recebi uma autuação / processo de suspensão da minha CNH e preciso de defesa especializada.",
    },
    {
      id: "direito-civil-contratos",
      icon: FileText,
      title: "Direito Civil & Contratos",
      shortDesc:
        "Segurança jurídica em negócios civis, elaboração minuciosa de contratos, cobranças e ações indenizatórias por danos morais e materiais.",
      bullets: [
        "Elaboração, análise e revisão criteriosa de contratos civis e imobiliários",
        "Cobrança judicial e extrajudicial de títulos, dívidas e créditos em aberto",
        "Ações de reparação civil por danos morais, materiais e descumprimento de acordos",
        "Resolução de conflitos patrimoniais, posse e propriedade com solidez",
      ],
      tag: "Contratual",
      badge: "Blindagem Legal",
      whatsappMsg:
        "Olá, Dr. Rômulo Marini! Preciso de assessoria em Direito Civil / Elaboração de Contratos / Ação Indenizatória.",
    },
    {
      id: "consultoria-estrategica",
      icon: Gavel,
      title: "Consultoria & Atendimento Estratégico",
      shortDesc:
        "Atendimento consultivo e contencioso claro, objetivo e honesto, avaliando caminhos preventivos e soluções jurídicas eficazes.",
      bullets: [
        "Diagnóstico jurídico honesto e realista sobre as chances e riscos do seu caso",
        "Atendimento acolhedor presencial em Cláudio - MG ou digital para todo o país",
        "Negociação extrajudicial qualificada para conciliações rápidas e vantajosas",
        "Acompanhamento pessoal e direto pelo Dr. Rômulo Marini em cada fase",
      ],
      tag: "Consultoria",
      badge: "Transparência Total",
      whatsappMsg:
        "Olá, Dr. Rômulo Marini! Gostaria de agendar uma consulta para avaliar minha situação jurídica.",
    },
  ];

  // Avaliações Reais do Google Meu Negócio (Nota 5,0 ★ em 26 avaliações reais)
  const depoimentosGoogle = [
    {
      author: "Gilsimar Vaz",
      detail: "1 avaliação no Google",
      stars: 5,
      date: "2 anos atrás · Avaliação verificada no Google",
      quote:
        "Excelente Profissional, um ambiente aconchegante, atendimento bom e eficiente, de fácil localização.",
      highlight: "Ambiente aconchegante, atendimento eficiente e de fácil localização",
      ownerReply:
        "É ótimo saber que você teve uma experiência positiva com nosso escritório de advocacia. Estamos aqui para oferecer a melhor orientação legal possível!",
    },
    {
      author: "Silvinho Camargo",
      detail: "11 avaliações no Google",
      stars: 5,
      date: "2 anos atrás · Avaliação verificada no Google",
      quote:
        "Um dos melhores profissionais que conheço, nos atendeu com profissionalismo e total ética além de seu excelente conhecimento sobre direito. Eu recomendo.",
      highlight: "Profissionalismo, total ética e excelente conhecimento sobre direito",
      ownerReply:
        "Obrigado por compartilhar sua experiência! Estamos aqui para oferecer segurança jurídica e soluções legais eficientes. Conte sempre conosco!",
    },
    {
      author: "Verena Pereira",
      detail: "5 avaliações no Google",
      stars: 5,
      date: "2 anos atrás · Avaliação verificada no Google",
      quote:
        "Profissional excelente, altamente capacitado e dedicado, oferecendo soluções jurídicas eficazes e personalizadas. Recomendo fortemente para quem busca competência e compromisso.",
      highlight: "Altamente capacitado, dedicado e com soluções jurídicas eficazes",
      ownerReply:
        "Obrigado pela avaliação positiva! Estamos felizes em saber que nossa consultoria jurídica atendeu às suas expectativas. Estamos à disposição para futuras consultas!",
    },
    {
      author: "Anderson Lopes Morais",
      detail: "4 avaliações no Google",
      stars: 5,
      date: "2 anos atrás · Avaliação verificada no Google",
      quote:
        "Escritório de excelência no atendimento. Um profissional claro nas posições consultivas e contenciosas. Super recomendo. Abraços Dr. Rômulo e obrigado pelo serviços prestados.",
      highlight: "Profissional claro nas posições consultivas e contenciosas",
      ownerReply:
        "Agradecemos por compartilhar sua experiência positiva com nosso escritório. Estamos aqui para ajudar com qualquer questão jurídica que você tenha!",
    },
    {
      author: "Renato Filizzola",
      detail: "4 avaliações no Google",
      stars: 5,
      date: "2 anos atrás · Avaliação verificada no Google",
      quote:
        "O melhor de Minas e uns dos melhores do Brasil!!!",
      highlight: "Reconhecimento de excelência e máxima confiança do cliente",
      ownerReply:
        "Obrigado pela avaliação positiva! Ficamos felizes em saber que você ficou satisfeito com nossa consultoria jurídica. Estamos à disposição!",
    },
    {
      author: "Bernadete Sousa",
      detail: "1 avaliação no Google",
      stars: 5,
      date: "1 ano atrás · Avaliação verificada no Google",
      quote:
        "Profissional super atencioso, honesto, competente, diferenciado. Valor justo. Super recomendo.",
      highlight: "Super atencioso, honesto, competente, diferenciado e valor justo",
    },
    {
      author: "Augusto Santos",
      detail: "4 avaliações no Google",
      stars: 5,
      date: "2 anos atrás · Avaliação verificada no Google",
      quote:
        "Bom profissional atento a detalhes e ágil na execução das atividades relacionadas aos processos.",
      highlight: "Atento a detalhes e ágil na execução dos processos",
      ownerReply:
        "Obrigado pela avaliação! Sua satisfação com nossos serviços de direito de família é nossa maior recompensa. Conte conosco sempre!",
    },
    {
      author: "Ivan Colares",
      detail: "2 avaliações no Google",
      stars: 5,
      date: "2 anos atrás · Avaliação verificada no Google",
      quote:
        "Excelente advogado, competente total.",
      highlight: "Competência total e segurança em direito de trânsito",
      ownerReply:
        "Agradecemos sua confiança em nossos serviços de direito de trânsito. Estamos aqui para garantir seus direitos!",
    },
    {
      author: "Di coco Silva",
      detail: "1 avaliação no Google",
      stars: 5,
      date: "2 anos atrás · Avaliação verificada no Google",
      quote:
        "Grande profissional. Sempre tratando seus clientes com carinho e responsabilidade.",
      highlight: "Tratamento aos clientes com carinho e responsabilidade",
      ownerReply:
        "Muito obrigado por sua avaliação! Nossa equipe está comprometida em oferecer soluções jurídicas eficazes.",
    },
    {
      author: "Robson Ferreira Gonçalves",
      detail: "2 avaliações · 1 foto no Google",
      stars: 5,
      date: "2 anos atrás · Avaliação verificada no Google",
      quote:
        "Profissional experiente e competente !",
      highlight: "Profissional experiente, competente e atencioso",
      ownerReply:
        "Obrigado pela avaliação positiva! Ficamos felizes em saber que você ficou satisfeito com nossa consultoria jurídica.",
    },
    {
      author: "Romeu Mori",
      detail: "Local Guide · 9 avaliações · 118 fotos no Google",
      stars: 5,
      date: "2 anos atrás · Avaliação verificada no Google",
      quote:
        "Profissional exemplar.",
      highlight: "Reconhecimento por Local Guide como profissional exemplar",
      ownerReply:
        "Obrigado pelo feedback positivo Romeu. Ficamos felizes em saber que nosso trabalho de consultoria atendeu suas expectativas.",
    },
    {
      author: "Adelia Colares",
      detail: "Local Guide · 12 avaliações · 26 fotos no Google",
      stars: 5,
      date: "2 anos atrás · Avaliação verificada no Google",
      quote:
        "O melhor!!!!! Super recomendo Dr. Rômulo Marini.",
      highlight: "Satisfação absoluta e recomendação entusiasmada",
    },
  ];

  // Diferenciais Competitivos
  const diferenciais = [
    {
      icon: HeartHandshake,
      title: "Ambiente Aconchegante & Acolhedor",
      description:
        "Como destacam nossos clientes: você é recebido em um espaço confortável, de fácil localização no Centro de Cláudio, com atendimento humanizado, atencioso e individualizado.",
    },
    {
      icon: Shield,
      title: "Clareza Consultiva & Contenciosa",
      description:
        "Comunicação direta, transparente e descomplicada. Esclarecemos cada etapa com rigor técnico, honestidade sobre os caminhos viáveis e sem falsas promessas.",
    },
    {
      icon: Clock,
      title: "Agilidade & Atenção Minuciosa",
      description:
        "Atuação ágil e atenta aos mínimos detalhes processuais, evitando entraves burocráticos e acelerando inventários, partilhas, defesas de CNH e divórcios.",
    },
    {
      icon: Coins,
      title: "Valores Justos & Conduta Ética",
      description:
        "Honorários proporcionais, éticos e alinhados às diretrizes da OAB. Contratos de honorários transparentes, sem qualquer custo oculto ou cobrança inesperada.",
    },
    {
      icon: Gavel,
      title: "Atuação Especializada e Focada",
      description:
        "Foco consolidado nas demandas que mais impactam sua vida: Inventários, Divórcios, Pensão Alimentícia, Direito de Família e Direito de Trânsito.",
    },
    {
      icon: Star,
      title: "Nota Máxima 5,0 ★ no Google",
      description:
        "Unanimidade de satisfação em 26 avaliações de clientes reais, consolidando o escritório como referência máxima de advocacia em Cláudio e região.",
    },
  ];

  // Situações comuns (Diagnóstico Rápido)
  const situacoesDiagnostico = [
    {
      pergunta: "Precisa realizar o inventário e destravar a partilha de bens da família?",
      orientacao:
        "A perda de um ente querido não deve virar um conflito infindável. O Dr. Rômulo Marini atua com inventários em cartório (rápidos e econômicos) e judiciais, assegurando uma divisão justa e desimpedida do patrimônio.",
      cta: "Quero Orientação em Inventário",
      area: "Inventários & Sucessões",
    },
    {
      pergunta: "Está passando por um divórcio ou precisa formalizar a separação?",
      orientacao:
        "Seja consensual ou litigioso, conduzimos o divórcio com discrição, serenidade e firmeza técnica para proteger seus interesses e os direitos patrimoniais construídos ao longo da vida.",
      cta: "Consultar sobre Divórcio",
      area: "Divórcio & Direito de Família",
    },
    {
      pergunta: "Precisa definir, revisar ou cobrar pensão alimentícia e guarda?",
      orientacao:
        "O bem-estar e o sustento digno dos filhos são prioridades absolutas. Atuamos na fixação do valor devido, na revisão de valores desproporcionais e na execução imediata de pensões em atraso.",
      cta: "Resolver Questão de Pensão",
      area: "Pensão Alimentícia & Guarda",
    },
    {
      pergunta: "Sua CNH está em risco de suspensão, cassação ou recebeu multa indevida?",
      orientacao:
        "Processos administrativos do DETRAN possuem prazos rígidos e falhas técnicas que podem anular penalidades. Defendemos seu direito de dirigir com teses jurídicas sólidas e fundamentadas.",
      cta: "Proteger Minha CNH / Recorrer",
      area: "Direito de Trânsito & CNH",
    },
  ];

  // FAQ
  const faqs = [
    {
      question: "Como funciona a primeira consulta jurídica com o Dr. Rômulo Marini?",
      answer:
        "A consulta inicial é um atendimento atencioso e privativo, realizado em nosso escritório no Centro de Cláudio - MG ou por videochamada/WhatsApp. Analisamos detalhadamente seus documentos e a história do seu caso para fornecer um diagnóstico jurídico claro, honesto e indicar a estratégia mais vantajosa.",
    },
    {
      question: "Qual a diferença entre inventário em cartório e inventário judicial?",
      answer:
        "Quando todos os herdeiros são maiores de idade, capazes e estão de acordo com a partilha dos bens, o inventário pode ser realizado de forma extrajudicial diretamente no cartório de notas, concluindo-se em poucas semanas. Caso haja divergência ou herdeiros menores, o processo é conduzido pela via judicial com o mesmo rigor e zelo.",
    },
    {
      question: "O que fazer se a pensão alimentícia estiver atrasada?",
      answer:
        "A lei prevê mecanismos enérgicos para a cobrança de pensão alimentícia. É possível ingressar com a Ação de Execução de Alimentos pelo rito da prisão civil (para as últimas 3 parcelas em atraso) ou pelo rito da penhora de bens, veículos e contas bancárias, garantindo o recebimento rápido do valor devido.",
    },
    {
      question: "Como recorrer de um processo de suspensão ou cassação da CNH?",
      answer:
        "Após receber a notificação do DETRAN, apresentamos uma defesa prévia e, se necessário, recursos junto à JARI e ao CETRAN. Analisamos possíveis vícios no auto de infração, falhas de aferição ou nulidades procedimentais para buscar o cancelamento da penalidade e preservar sua habilitação.",
    },
    {
      question: "Posso ser atendido mesmo não morando em Cláudio - MG?",
      answer:
        "Sim! Graças aos processos eletrônicos e às ferramentas digitais modernas, atendemos clientes de municípios vizinhos (Divinópolis, Itapecerica, Carmo do Cajuru, Oliveira) e de todo o Brasil com total agilidade, segurança documental e acompanhamento próximo via WhatsApp.",
    },
    {
      question: "Como são definidos os honorários advocatícios?",
      answer:
        "Nossos valores são pautados pela ética, moderação e conformidade com a tabela da OAB/MG. O contrato de prestação de serviços estabelece de forma límpida as condições de pagamento e as fases de atuação, garantindo que você tenha plena previsibilidade e justiça em cada investimento.",
    },
  ];

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-white font-sans text-slate-800 antialiased selection:bg-[#d4af37] selection:text-[#040812]">
        {/* ========================================================================= */}
        {/* 1. TOP NOTICE / PRE-HEADER                                               */}
        {/* ========================================================================= */}
        <div className="border-b border-[#1b2945] bg-gradient-to-r from-[#040812] via-[#070d1a] to-[#0c1527] px-4 py-2 text-white">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2 font-medium">
              <span className="flex size-2 rounded-full bg-[#f5d77f] animate-pulse" />
              <span className="text-[#f5d77f] font-semibold">
                Rômulo Marini Advocacia &bull; Cláudio - MG
              </span>
              <span className="hidden sm:inline text-slate-400">|</span>
              <span className="hidden sm:inline text-slate-300">
                Inventários &bull; Divórcio &bull; Pensão Alimentícia &bull; Direito de Trânsito
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
                <span className="text-slate-300">(26 avaliações no Google)</span>
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-1 font-semibold text-[#f5d77f] hover:underline"
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
          <div className="mx-auto flex max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1500px] items-center justify-between px-4 py-3 sm:px-6 lg:px-8 xl:px-10">
            {/* Logo Left */}
            <a
              href="#inicio"
              aria-label="Rômulo Marini Advocacia - Início"
              onClick={closeMenu}
              className="flex shrink-0 items-center gap-3 sm:gap-3.5 transition-opacity hover:opacity-95 mr-4"
            >
              <div className="relative size-12 sm:size-13 lg:size-14 shrink-0">
                <Image
                  src={LOGO_SYMBOL_SRC}
                  alt="Rômulo Marini Advocacia"
                  fill
                  priority
                  unoptimized
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-cinzel text-base sm:text-lg lg:text-xl font-extrabold tracking-[0.14em] text-[#070d1a] leading-tight">
                  RÔMULO MARINI
                </span>
                <span className="text-[9px] sm:text-[10px] lg:text-[11px] font-bold tracking-[0.22em] text-[#a37517] uppercase mt-0.5">
                  ADVOCACIA &bull; CLÁUDIO - MG
                </span>
              </div>
            </a>

            {/* Desktop Navigation Menu (Center) */}
            <nav
              aria-label="Navegação principal"
              className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8 whitespace-nowrap text-[11px] xl:text-xs font-semibold tracking-[0.08em] xl:tracking-[0.1em] ml-auto mr-6 xl:mr-10"
            >
              <a className="nav-link" href="#atuacao">
                Áreas de Atuação
              </a>
              <a className="nav-link" href="#sobre">
                O Advogado
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

            {/* Right Action: Header Button */}
            <div className="hidden lg:flex items-center shrink-0">
              <GlowingButton
                variant="gold"
                size="sm"
                href={getWhatsAppUrl()}
                target="_blank"
                className="shadow-sm whitespace-nowrap"
              >
                <WhatsAppIcon size={14} className="text-[#040812]" />
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
                    className="py-1.5 text-slate-800 hover:text-[#a37517]"
                    href="#inicio"
                    onClick={closeMenu}
                  >
                    Início
                  </a>
                  <a
                    className="py-1.5 text-slate-800 hover:text-[#a37517]"
                    href="#atuacao"
                    onClick={closeMenu}
                  >
                    Áreas de Atuação
                  </a>
                  <a
                    className="py-1.5 text-slate-800 hover:text-[#a37517]"
                    href="#sobre"
                    onClick={closeMenu}
                  >
                    Sobre o Dr. Rômulo Marini
                  </a>
                  <a
                    className="py-1.5 text-slate-800 hover:text-[#a37517]"
                    href="#diferenciais"
                    onClick={closeMenu}
                  >
                    Nossos Diferenciais
                  </a>
                  <a
                    className="py-1.5 text-slate-800 hover:text-[#a37517]"
                    href="#avaliacoes"
                    onClick={closeMenu}
                  >
                    Avaliações no Google (5.0 ★)
                  </a>
                  <a
                    className="py-1.5 text-slate-800 hover:text-[#a37517]"
                    href="#faq"
                    onClick={closeMenu}
                  >
                    Perguntas Frequentes
                  </a>
                  <a
                    className="py-1.5 text-slate-800 hover:text-[#a37517]"
                    href="#contato"
                    onClick={closeMenu}
                  >
                    Sede em Cláudio - MG &amp; Contato
                  </a>

                  <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
                    <GlowingButton
                      variant="gold"
                      size="md"
                      href={getWhatsAppUrl()}
                      target="_blank"
                      className="w-full justify-center"
                    >
                      <WhatsAppIcon size={16} className="text-[#040812]" />
                      <span>Falar no WhatsApp</span>
                    </GlowingButton>
                    <a
                      href={`tel:${WHATSAPP_NUMBER}`}
                      className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 py-3 text-xs font-bold text-slate-700 hover:bg-slate-50"
                    >
                      <Phone size={14} className="text-[#a37517]" />
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
          className="relative overflow-hidden bg-gradient-to-b from-[#040812] via-[#070d1a] to-[#0c1527] text-white py-14 sm:py-20 lg:py-24"
        >
          {/* Subtle Ambient Decorative Lights */}
          <div className="pointer-events-none absolute -top-40 -left-40 size-96 rounded-full bg-[#d4af37]/15 blur-3xl" />
          <div className="pointer-events-none absolute top-1/2 -right-40 size-96 rounded-full bg-[#1b3964]/40 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#f5d77f_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

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
                  <div className="inline-flex items-center gap-2.5 rounded-full border border-[#d4af37]/40 bg-[#040812]/80 px-4 py-1.5 text-[11px] font-bold tracking-[0.16em] uppercase text-[#f5d77f] shadow-sm backdrop-blur-md">
                    <Scale size={14} className="text-[#f5d77f]" />
                    <span>Rômulo Marini Advocacia &bull; Cláudio - MG</span>
                  </div>
                </motion.div>

                {/* H1 Headline */}
                <motion.h1
                  variants={fadeInUp}
                  className="font-cinzel text-3xl font-extrabold leading-[1.18] tracking-tight sm:text-4xl md:text-5xl text-white"
                >
                  Segurança jurídica, excelência técnica e{" "}
                  <span className="text-gradient-gold">dedicação exclusiva</span> para proteger seus direitos.
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  variants={fadeInUp}
                  className="mt-6 text-base text-slate-300 sm:text-lg sm:leading-relaxed"
                >
                  Atuação especializada e combativa em{" "}
                  <strong className="text-white font-semibold">
                    Inventários, Divórcio, Pensão Alimentícia e Direito de Trânsito
                  </strong>
                  . Atendimento humanizado, ético e resolutivo pelo{" "}
                  <strong className="text-white font-semibold">
                    Dr. Rômulo Marini
                  </strong>
                  , com escritório acolhedor no Centro de Cláudio - MG e atendimento digital para clientes em todo o Brasil.
                </motion.p>

                {/* Authority Badges Checklist */}
                <motion.div
                  variants={fadeInUp}
                  className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2 text-xs sm:text-sm text-slate-200"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#f5d77f] shrink-0" />
                    <span>Nota máxima 5,0 ★ no Google (26 avaliações reais)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#f5d77f] shrink-0" />
                    <span>Ambiente aconchegante e atendimento ágil</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#f5d77f] shrink-0" />
                    <span>Clareza nas posições consultivas e contenciosas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#f5d77f] shrink-0" />
                    <span>Sede na Av. Pres. Tancredo Neves, 409 - Centro</span>
                  </div>
                </motion.div>

                {/* CTAs */}
                <motion.div
                  variants={fadeInUp}
                  className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center"
                >
                  <GlowingButton
                    variant="gold"
                    size="lg"
                    href={getWhatsAppUrl()}
                    target="_blank"
                    className="shadow-xl"
                  >
                    <WhatsAppIcon size={18} className="text-[#040812]" />
                    <span>Falar no WhatsApp com Dr. Rômulo</span>
                  </GlowingButton>

                  <a
                    href="#atuacao"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-white/5 px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition-all hover:border-[#f5d77f] hover:bg-white/10"
                  >
                    <span>Conhecer Áreas de Atuação</span>
                    <ArrowRight size={14} />
                  </a>
                </motion.div>

                {/* Micro Proof Footer */}
                <motion.div
                  variants={fadeInUp}
                  className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-4 text-xs text-slate-400"
                >
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={13}
                          className="fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <span className="font-semibold text-white">5,0 de 5,0</span>
                  </div>
                  <span>&bull;</span>
                  <span>26 avaliações no Google Meu Negócio</span>
                  <span>&bull;</span>
                  <a
                    href={GOOGLE_SEARCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#f5d77f] hover:underline flex items-center gap-1"
                  >
                    <span>Ver no Google</span>
                    <ArrowUpRight size={12} />
                  </a>
                </motion.div>
              </motion.div>

              {/* Right Column: Lawyer Portrait with Luxury Accent */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative lg:col-span-5"
              >
                <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
                  {/* Decorative Glowing Frame */}
                  <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#d4af37]/40 via-[#f5d77f]/15 to-transparent blur-md" />

                  {/* Main Portrait Card */}
                  <div className="relative overflow-hidden rounded-2xl border-2 border-[#d4af37]/50 bg-[#070d1a] shadow-2xl">
                    <div className="relative aspect-[4/5] w-full overflow-hidden">
                      <Image
                        src={FOTO_HERO_SRC}
                        alt="Dr. Rômulo Marini - Advogado em Cláudio - MG"
                        fill
                        priority
                        className="object-cover object-top filter contrast-[1.03]"
                      />

                      {/* Gradient Overlay for bottom text legibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#040812] via-[#040812]/20 to-transparent" />

                      {/* Card Lower Badge */}
                      <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-[#d4af37]/40 bg-[#040812]/90 p-3.5 backdrop-blur-md">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-cinzel text-sm sm:text-base font-bold text-white tracking-wide">
                              Dr. Rômulo Marini
                            </p>
                            <p className="text-[10px] sm:text-xs font-semibold text-[#f5d77f] uppercase tracking-wider mt-0.5">
                              Advocacia em Cláudio - MG
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
                              5,0 ★ no Google (26)
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Trust Card Top-Right */}
                  <div className="hidden sm:flex absolute -top-5 -right-5 items-center gap-2.5 rounded-xl border border-[#d4af37]/60 bg-[#040812]/95 px-4 py-2.5 shadow-xl backdrop-blur-md">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-[#d4af37]/20 text-[#f5d77f]">
                      <Scale size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#f5d77f]">
                        Compromisso
                      </p>
                      <p className="text-xs font-bold text-white">
                        Ética &amp; Dedicação
                      </p>
                    </div>
                  </div>

                  {/* Floating Trust Card Bottom-Left */}
                  <div className="hidden sm:flex absolute -bottom-5 -left-5 items-center gap-2.5 rounded-xl border border-slate-700 bg-[#070d1a]/95 px-4 py-2.5 shadow-xl backdrop-blur-md">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-[#25D366]/20 text-[#25D366]">
                      <WhatsAppIcon size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-300">
                        Atendimento Ágil
                      </p>
                      <p className="text-xs font-bold text-white">
                        Presencial &amp; Online
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
        <section className="border-y border-slate-200 bg-[#faf8f2] py-8 sm:py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1 text-2xl sm:text-3xl font-extrabold text-[#070d1a]">
                  <span>5,0</span>
                  <div className="flex text-amber-500">
                    <Star size={18} className="fill-amber-400 text-amber-400" />
                  </div>
                </div>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#a37517] mt-1">
                  Nota Máxima Google
                </p>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                  26 avaliações 100% 5 estrelas
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#070d1a]">
                  Cláudio - MG
                </div>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#a37517] mt-1">
                  Sede Própria no Centro
                </p>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                  Av. Tancredo Neves, 409
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#070d1a]">
                  Eficiente
                </div>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#a37517] mt-1">
                  Atenção aos Detalhes
                </p>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                  Agilidade e rigor nos processos
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#070d1a]">
                  Nacional
                </div>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#a37517] mt-1">
                  Presencial &amp; Digital
                </p>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                  Atendimento em todo o Brasil
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
              <div className="eyebrow-gold justify-center mb-3">
                Diagnóstico Jurídico Estratégico
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold text-[#070d1a]">
                Você se identifica com alguma dessas situações jurídicas?
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Não deixe seus direitos desprotegidos nem adie a solução de questões
                que envolvem seu patrimônio, sua família ou sua habilitação:
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
              {situacoesDiagnostico.map((sit, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-[#faf8f2] p-6 sm:p-8 transition-all hover:border-[#d4af37] hover:shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start gap-3.5 mb-3">
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#d4af37]/20 text-[#a37517]">
                        <AlertCircle size={20} />
                      </div>
                      <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#070d1a] leading-snug">
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
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#a37517] hover:text-[#070d1a] transition-colors cursor-pointer"
                    >
                      <span>{sit.cta}</span>
                      <ArrowRight size={14} />
                    </button>

                    <a
                      href={getWhatsAppUrl(`Olá, Dr. Rômulo Marini! ${sit.pergunta}`)}
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
          className="relative bg-gradient-to-b from-[#040812] via-[#070d1a] to-[#0c1527] text-white py-16 sm:py-24"
        >
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
              <div className="eyebrow-light justify-center mb-3">
                Pilares de Atuação &bull; Advocacia Especializada
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
                    className="group relative flex flex-col justify-between rounded-2xl border border-slate-700/80 bg-[#0c1527]/90 p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#d4af37] hover:shadow-2xl hover:shadow-[#d4af37]/10"
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-[#f5d77f]/10 border border-[#d4af37]/30 text-[#f5d77f] group-hover:scale-105 transition-transform">
                          <IconComponent size={22} />
                        </div>
                        <span className="rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#f5d77f]">
                          {area.badge}
                        </span>
                      </div>

                      {/* Card Title */}
                      <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-[#f5d77f] transition-colors">
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
                              className="text-[#f5d77f] shrink-0 mt-0.5"
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
                        className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#d4af37]/50 bg-white/5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#f5d77f] transition-all hover:bg-[#d4af37] hover:text-[#040812] hover:border-[#d4af37]"
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
            <div className="mt-14 rounded-2xl border-2 border-[#d4af37]/60 bg-gradient-to-r from-[#040812] via-[#070d1a] to-[#0c1527] p-8 sm:p-10 shadow-2xl">
              <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
                <div>
                  <div className="eyebrow-light mb-2">
                    Precisa de Orientação Imediata?
                  </div>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
                    Fale diretamente com o Dr. Rômulo Marini
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-300 max-w-2xl">
                    Envie uma mensagem resumindo sua necessidade. Analisamos seu caso com total sigilo
                    e atenção para indicar o caminho jurídico mais seguro e eficaz.
                  </p>
                </div>

                <GlowingButton
                  variant="gold"
                  size="lg"
                  href={getWhatsAppUrl(
                    "Olá, Dr. Rômulo Marini! Gostaria de uma avaliação jurídica para entender o caminho mais adequado para o meu caso."
                  )}
                  target="_blank"
                  className="shrink-0"
                >
                  <WhatsAppIcon size={17} className="text-[#040812]" />
                  <span>Tirar Dúvida Agora</span>
                </GlowingButton>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. SOBRE O ADVOGADO (DR. RÔMULO MARINI)                                    */}
        {/* ========================================================================= */}
        <section id="sobre" className="py-16 sm:py-24 bg-white overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Photo on Left */}
              <div className="relative lg:col-span-5">
                <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
                  {/* Subtle Accent Glow */}
                  <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-[#d4af37]/30 to-transparent blur-lg" />

                  <div className="relative overflow-hidden rounded-2xl border-2 border-[#d4af37]/60 bg-[#070d1a] shadow-2xl">
                    <div className="relative aspect-[4/5] w-full">
                      <Image
                        src={FOTO_SOBRE_SRC}
                        alt="Dr. Rômulo Marini - Advogado em Cláudio - MG"
                        fill
                        className="object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#040812]/80 via-transparent to-transparent" />

                      <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/20 bg-black/60 p-3.5 backdrop-blur-md text-white text-center">
                        <p className="font-cinzel text-base font-bold text-[#f5d77f]">
                          Dr. Rômulo Marini
                        </p>
                        <p className="text-[11px] text-slate-200 mt-0.5">
                          Advocacia em Cláudio - MG &bull; Inventários, Divórcio, Pensão e Trânsito
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio & Details on Right */}
              <div className="lg:col-span-7">
                <div className="eyebrow-gold mb-3">Sobre o Profissional</div>

                <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#070d1a] leading-tight">
                  Atendimento aconchegante, ética rigorosa e foco intransigente em soluções eficazes.
                </h2>

                <div className="mt-6 space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    O <strong className="text-[#070d1a]">Dr. Rômulo Marini</strong> é advogado dedicado
                    a prestar uma advocacia clara, estratégica e personalizada, oferecendo aos seus clientes
                    segurança jurídica e tranquilidade em momentos cruciais.
                  </p>
                  <p>
                    Com escritório próprio estabelecido na <strong className="text-[#070d1a]">Av. Pres. Tancredo Neves, 409, no Centro de Cláudio - MG</strong>,
                    sua atuação destaca-se pela facilidade de localização, ambiente aconchegante e atendimento
                    de excelência, reconhecido com <strong className="text-[#070d1a]">nota máxima 5,0 ★ no Google</strong>.
                  </p>
                  <p>
                    Seja em demandas de família (inventários, divórcios e pensão alimentícia), infrações e
                    processos de trânsito ou litígios cíveis, o escritório conduz cada processo com atenção
                    minuciosa aos detalhes, agilidade na execução das etapas e comunicação transparente.
                  </p>
                </div>

                {/* Quote Box */}
                <div className="mt-6 rounded-xl border-l-4 border-[#d4af37] bg-[#faf8f2] p-4 sm:p-5">
                  <p className="italic text-sm text-slate-800">
                    &ldquo;Excelente Profissional, um ambiente aconchegante, atendimento bom e eficiente,
                    de fácil localização. Um profissional claro nas posições consultivas e contenciosas,
                    atento a detalhes e ágil na execução dos processos.&rdquo;
                  </p>
                  <p className="mt-2 text-xs font-bold text-[#a37517] uppercase tracking-wider">
                    — Síntese das avaliações públicas dos clientes no Google Meu Negócio (Nota 5,0 ★ em 26 avaliações)
                  </p>
                </div>

                {/* Social & Contact Strip */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <GlowingButton
                    variant="gold"
                    size="md"
                    href={getWhatsAppUrl()}
                    target="_blank"
                  >
                    <WhatsAppIcon size={16} className="text-[#040812]" />
                    <span>Falar Diretamente com Dr. Rômulo</span>
                  </GlowingButton>

                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-800 transition-colors hover:border-[#d4af37] hover:text-[#a37517]"
                  >
                    <InstagramIcon size={16} className="text-[#E1306C]" />
                    <span>Instagram {INSTAGRAM_HANDLE}</span>
                  </a>

                  <a
                    href={BENTO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-800 transition-colors hover:border-[#d4af37] hover:text-[#a37517]"
                  >
                    <Compass size={16} className="text-[#a37517]" />
                    <span>Bento Link</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 8. DIFERENCIAIS                                                           */}
        {/* ========================================================================= */}
        <section id="diferenciais" className="py-16 sm:py-24 bg-[#faf8f2] border-t border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
              <div className="eyebrow-gold justify-center mb-3">
                Por Que Escolher Nosso Escritório
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#070d1a]">
                Diferenciais que asseguram a satisfação dos nossos clientes
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
                    className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs transition-all hover:border-[#d4af37] hover:shadow-md"
                  >
                    <div className="flex size-12 items-center justify-center rounded-xl bg-[#d4af37]/15 text-[#a37517] mb-5">
                      <IconComp size={22} />
                    </div>
                    <h3 className="font-cinzel text-lg font-bold text-[#070d1a]">
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
              <div className="eyebrow-gold justify-center mb-3">
                Processo Transparente e Seguro
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#070d1a]">
                Como funciona o seu atendimento jurídico
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Do primeiro contato até a resolução satisfatória da sua demanda:
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
              <div className="relative rounded-2xl border border-slate-200 bg-[#faf8f2] p-6 text-center">
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#070d1a] text-[#f5d77f] font-bold text-lg mb-4">
                  1
                </div>
                <h3 className="font-cinzel text-base font-bold text-[#070d1a]">
                  Primeiro Contato
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Você nos envia uma mensagem no WhatsApp ou nos liga, resume sua situação e agendamos
                  sua consulta presencial ou online.
                </p>
              </div>

              <div className="relative rounded-2xl border border-slate-200 bg-[#faf8f2] p-6 text-center">
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#070d1a] text-[#f5d77f] font-bold text-lg mb-4">
                  2
                </div>
                <h3 className="font-cinzel text-base font-bold text-[#070d1a]">
                  Análise Técnica
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  O Dr. Rômulo Marini avalia minuciosamente documentos, certidões ou autuações para
                  estruturar a estratégia mais eficaz.
                </p>
              </div>

              <div className="relative rounded-2xl border border-slate-200 bg-[#faf8f2] p-6 text-center">
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#070d1a] text-[#f5d77f] font-bold text-lg mb-4">
                  3
                </div>
                <h3 className="font-cinzel text-base font-bold text-[#070d1a]">
                  Definição Estratégica
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Apresentamos o plano com total clareza quanto a prazos, custos justos e os passos
                  necessários para proteger seus direitos.
                </p>
              </div>

              <div className="relative rounded-2xl border border-slate-200 bg-[#faf8f2] p-6 text-center">
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#070d1a] text-[#f5d77f] font-bold text-lg mb-4">
                  4
                </div>
                <h3 className="font-cinzel text-base font-bold text-[#070d1a]">
                  Atuação &amp; Acompanhamento
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Execução diligente e ágil no cartório, DETRAN ou fórum, com atualizações periódicas
                  diretamente com você.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <GlowingButton
                variant="gold"
                size="lg"
                href={getWhatsAppUrl()}
                target="_blank"
              >
                <WhatsAppIcon size={17} className="text-[#040812]" />
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
          className="py-16 sm:py-24 bg-gradient-to-b from-[#040812] via-[#070d1a] to-[#0c1527] text-white"
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
                  (26 avaliações verificadas no Google)
                </span>
              </div>
            </div>

            {/* Grid of Reviews */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {depoimentosGoogle.map((dep, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-700/80 bg-[#0c1527]/80 p-6 backdrop-blur-sm flex flex-col justify-between hover:border-[#d4af37] transition-all"
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
                    <p className="text-xs font-bold text-[#f5d77f] mb-2 uppercase tracking-wider">
                      {dep.highlight}
                    </p>

                    {/* Quote */}
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                      &ldquo;{dep.quote}&rdquo;
                    </p>

                    {/* Owner reply snippet if available */}
                    {dep.ownerReply && (
                      <div className="mt-3.5 pt-3 border-t border-slate-800 text-[11px] text-slate-400 italic">
                        <span className="font-semibold text-[#f5d77f] not-italic">Resposta Dr. Rômulo: </span>
                        &ldquo;{dep.ownerReply}&rdquo;
                      </div>
                    )}
                  </div>

                  {/* Author */}
                  <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center gap-3">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#d4af37]/20 text-xs font-bold text-[#f5d77f]">
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
                className="inline-flex items-center gap-2 rounded-lg border border-slate-600 bg-white/5 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:border-[#f5d77f] hover:bg-white/10 transition-colors"
              >
                <GoogleIcon size={16} />
                <span>Ver Todas as 26 Avaliações no Google Meu Negócio</span>
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
              <div className="eyebrow-gold justify-center mb-3">
                Dúvidas Frequentes
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#070d1a]">
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
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-[#faf8f2] transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-[#070d1a] hover:text-[#a37517] transition-colors cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="pr-4">{faq.question}</span>
                      <ChevronDown
                        size={18}
                        className={`shrink-0 text-[#a37517] transition-transform duration-200 ${
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

            <div className="mt-12 rounded-2xl border border-[#d4af37]/40 bg-[#faf8f2] p-6 text-center">
              <p className="font-cinzel text-base font-bold text-[#070d1a]">
                Ainda tem alguma dúvida sobre a sua situação específica?
              </p>
              <p className="mt-1 text-xs sm:text-sm text-slate-600">
                O Dr. Rômulo Marini está à disposição para esclarecer seu caso com ética, sigilo e rapidez.
              </p>
              <div className="mt-4">
                <GlowingButton
                  variant="gold"
                  size="md"
                  href={getWhatsAppUrl("Olá, Dr. Rômulo Marini! Tenho uma dúvida sobre o meu caso e gostaria de orientação jurídica.")}
                  target="_blank"
                >
                  <WhatsAppIcon size={15} className="text-[#040812]" />
                  <span>Tirar Dúvida no WhatsApp</span>
                </GlowingButton>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 12. CONTATO & SEDE EM CLÁUDIO - MG                                        */}
        {/* ========================================================================= */}
        <section id="contato" className="py-16 sm:py-24 bg-[#faf8f2] border-t border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Contact Info Column */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="eyebrow-gold mb-3">Atendimento &amp; Sede</div>
                  <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#070d1a]">
                    Entre em contato e agende sua consulta
                  </h2>
                  <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                    Atendimento presencial no Centro de Cláudio - MG ou 100% digital
                    com atendimento para clientes em todo o Brasil. Escolha o canal de sua preferência.
                  </p>

                  <div className="mt-8 space-y-4">
                    <div className="flex items-start gap-3.5">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#d4af37]/20 text-[#a37517]">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#070d1a] uppercase tracking-wider">
                          Endereço da Sede
                        </p>
                        <p className="text-sm text-slate-700 mt-0.5">
                          {ADDRESS_TEXT}
                        </p>
                        <a
                          href={GOOGLE_MAPS_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 inline-flex items-center gap-1 text-xs font-bold text-[#a37517] hover:underline"
                        >
                          <span>Como chegar no Google Maps</span>
                          <ArrowUpRight size={12} />
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#d4af37]/20 text-[#a37517]">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#070d1a] uppercase tracking-wider">
                          Telefone &amp; WhatsApp
                        </p>
                        <a
                          href={getWhatsAppUrl()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-slate-800 hover:text-[#a37517] mt-0.5 block"
                        >
                          {PHONE_DISPLAY}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#d4af37]/20 text-[#a37517]">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#070d1a] uppercase tracking-wider">
                          E-mail de Contato
                        </p>
                        <a
                          href={`mailto:${EMAIL_CONTACT}`}
                          className="text-sm font-semibold text-slate-800 hover:text-[#a37517] mt-0.5 block"
                        >
                          {EMAIL_CONTACT}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#d4af37]/20 text-[#a37517]">
                        <InstagramIcon size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#070d1a] uppercase tracking-wider">
                          Instagram Oficial
                        </p>
                        <a
                          href={INSTAGRAM_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-slate-800 hover:text-[#a37517] mt-0.5 block"
                        >
                          {INSTAGRAM_HANDLE} (1.020 seguidores)
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#d4af37]/20 text-[#a37517]">
                        <Clock size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#070d1a] uppercase tracking-wider">
                          Horário de Funcionamento
                        </p>
                        <p className="text-sm text-slate-700 mt-0.5">
                          Segunda a Sexta a partir das 09:00
                        </p>
                        <p className="text-xs text-slate-500">
                          Atendimento com agendamento prévio para seu conforto
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200">
                  <GlowingButton
                    variant="gold"
                    size="lg"
                    href={getWhatsAppUrl()}
                    target="_blank"
                    className="w-full justify-center"
                  >
                    <WhatsAppIcon size={18} className="text-[#040812]" />
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
                          alt="Rômulo Marini Advocacia"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <p className="font-cinzel text-sm font-bold text-[#070d1a]">
                          Rômulo Marini Advocacia
                        </p>
                        <p className="text-[10px] text-slate-500">
                          Cláudio - MG
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 rounded-md bg-amber-50 px-2 py-1 text-xs font-bold text-amber-700 border border-amber-200">
                      <Star size={12} className="fill-amber-400 text-amber-500" />
                      <span>5,0 ★ Google (26)</span>
                    </div>
                  </div>

                  {/* Interactive Map Container */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                    <iframe
                      title="Localização do Escritório Rômulo Marini Advocacia em Cláudio - MG"
                      src="https://maps.google.com/maps?q=Av.+Pres.+Tancredo+Neves,+409+-+Cl%C3%A1udio,+MG,+35530-000&t=&z=16&ie=UTF8&iwloc=&output=embed"
                      className="size-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>

                  <div className="mt-4 flex items-center justify-between text-xs text-slate-600">
                    <span>Av. Pres. Tancredo Neves, 409 - Centro</span>
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#a37517] hover:underline flex items-center gap-1"
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
        <footer className="border-t border-[#1b2945] bg-gradient-to-b from-[#040812] to-[#02050b] text-white py-12 sm:py-16">
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
                      alt="Rômulo Marini Advocacia"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-cinzel text-lg sm:text-xl font-extrabold tracking-[0.14em] text-white leading-tight">
                      RÔMULO MARINI
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.22em] text-[#f5d77f] uppercase mt-0.5">
                      ADVOCACIA &bull; CLÁUDIO - MG
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
                    className="flex size-9 items-center justify-center rounded-lg border border-slate-700 bg-white/5 text-slate-300 transition-colors hover:border-[#f5d77f] hover:text-[#f5d77f]"
                    aria-label="Instagram de Rômulo Marini Advocacia"
                  >
                    <InstagramIcon size={16} />
                  </a>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-9 items-center justify-center rounded-lg border border-slate-700 bg-white/5 text-slate-300 transition-colors hover:border-[#25D366] hover:text-[#25D366]"
                    aria-label="WhatsApp de Rômulo Marini Advocacia"
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
                  <a
                    href={BENTO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-9 items-center justify-center rounded-lg border border-slate-700 bg-white/5 text-slate-300 transition-colors hover:border-[#f5d77f] hover:text-[#f5d77f]"
                    aria-label="Bento de Rômulo Marini"
                  >
                    <Compass size={16} />
                  </a>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="lg:col-span-3">
                <p className="font-cinzel text-xs font-bold uppercase tracking-[0.16em] text-[#f5d77f] mb-4">
                  Áreas de Atuação
                </p>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li>
                    <a className="footer-link" href="#atuacao">
                      Inventários &amp; Sucessões
                    </a>
                  </li>
                  <li>
                    <a className="footer-link" href="#atuacao">
                      Divórcio &amp; Partilha de Bens
                    </a>
                  </li>
                  <li>
                    <a className="footer-link" href="#atuacao">
                      Pensão Alimentícia &amp; Guarda
                    </a>
                  </li>
                  <li>
                    <a className="footer-link" href="#atuacao">
                      Direito de Trânsito &amp; CNH
                    </a>
                  </li>
                  <li>
                    <a className="footer-link" href="#atuacao">
                      Direito Civil &amp; Contratos
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
                <p className="font-cinzel text-xs font-bold uppercase tracking-[0.16em] text-[#f5d77f] mb-4">
                  Sede &amp; Contato
                </p>
                <div className="space-y-2.5 text-xs text-slate-300">
                  <p className="flex items-start gap-2">
                    <MapPin size={14} className="text-[#f5d77f] shrink-0 mt-0.5" />
                    <span>{ADDRESS_TEXT}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <WhatsAppIcon size={14} className="text-[#25D366] shrink-0" />
                    <span>WhatsApp: {PHONE_DISPLAY}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail size={14} className="text-[#f5d77f] shrink-0" />
                    <span>{EMAIL_CONTACT}</span>
                  </p>
                  <p className="text-[11px] text-slate-400 mt-3 pt-3 border-t border-slate-800">
                    Atendimento de Segunda a Sexta a partir das 09:00.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Copyright & OAB Ethics Notice */}
            <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 text-center md:text-left">
              <p>
                &copy; {new Date().getFullYear()} Rômulo Marini Advocacia.
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
            aria-label="Falar com o Dr. Rômulo Marini no WhatsApp"
          >
            <span className="absolute -top-1 -right-1 flex size-3">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#f5d77f] opacity-75" />
              <span className="relative inline-flex size-3 rounded-full bg-[#f5d77f]" />
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
                className="relative z-10 w-full max-w-lg rounded-2xl border-2 border-[#d4af37]/60 bg-gradient-to-b from-[#040812] to-[#070d1a] p-6 sm:p-8 text-white shadow-2xl"
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
                      alt="Rômulo Marini Advocacia"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-cinzel text-lg font-bold text-white">
                      Análise Jurídica Especializada
                    </h3>
                    <p className="text-xs text-[#f5d77f] font-semibold">
                      {modalArea}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Para analisar sua demanda com sigilo, agilidade e rigor técnico, você será
                  redirecionado ao atendimento oficial do{" "}
                  <strong className="text-white">Dr. Rômulo Marini</strong>.
                </p>

                <div className="mt-5 space-y-2 rounded-xl border border-slate-700 bg-white/5 p-4 text-xs text-slate-300">
                  <p className="font-bold text-white uppercase tracking-wider text-[11px] text-[#f5d77f]">
                    O que ter em mãos (se aplicável):
                  </p>
                  <ul className="space-y-1 pl-1">
                    <li>&bull; Nome completo e cidade onde reside</li>
                    <li>&bull; Breve resumo da situação ou litígio</li>
                    <li>&bull; Notificações, certidões ou documentos relativos ao caso</li>
                  </ul>
                </div>

                <div className="mt-6 flex flex-col gap-2.5">
                  <GlowingButton
                    variant="gold"
                    size="md"
                    href={getWhatsAppUrl(
                      `Olá, Dr. Rômulo Marini! Gostaria de uma avaliação jurídica sobre: ${modalArea}.`
                    )}
                    target="_blank"
                    className="w-full justify-center"
                  >
                    <WhatsAppIcon size={16} className="text-[#040812]" />
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
