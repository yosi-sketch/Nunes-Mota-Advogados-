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
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5538999280572";
const PHONE_DISPLAY = "(38) 99928-0572";
const EMAIL_CONTACT = "contato@dryanmarlon.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/dr.yan.marlon/";
const INSTAGRAM_HANDLE = "@dr.yan.marlon";

const FIRM_NAME = "Dr. Yan Marlon — Advocacia, Assessoria e Consultoria Jurídica";
const FIRM_SHORT_NAME = "Dr. Yan Marlon Advocacia";
const FIRM_SLOGAN =
  "Advocacia de excelência, compromisso inegociável e defesa estratégica dos seus direitos civis, contratuais, empresariais e de família.";
const LAWYER_NAME = "Dr. Yan Marlon";
const LAWYER_TITLE = "Advogado & Consultor Jurídico | OAB/MG 195.229";

const ADDRESS_TEXT =
  "R. Cel. Serrão, n.190 - Centro, Januária - MG, 39480-000";
const REGION_TEXT =
  "Januária · Norte de Minas & Atendimento Digital em Todo o Brasil";

const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Yan+Marlon+%E2%80%94+Advocacia%2C+Assessoria+e+Consultoria+Jur%C3%ADdica&sourceid=chrome&ie=UTF-8#";
const GOOGLE_MAPS_URL =
  "https://www.google.com/search?sca_esv=0499b66e11e21840&sxsrf=AKL5yDiG3JOFgdbViSXjaFCipRp93sSa8w:1793307179226&q=yan+marlon,+advocacia,+assessoria+e+consultoria+jur%C3%ADdica+janu%C3%A1ria+endere%C3%A7o&ludocid=5222744491454223185&sa=X&ved=2ahUKEwij6I_rjeCXAxViqZUCHe9xLFEQ6BN6BAggEAI";

const LOGO_SRC = "/logo.png";
const LOGO_SYMBOL_SRC = "/logo-symbol.png";
const FOTO_HERO_SRC = "/hero-advogado.jpg";
const FOTO_SOBRE_SRC = "/sobre-advogado.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dr. Yan Marlon! Gostaria de agendar uma consulta jurídica e conversar sobre o meu caso.";
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

  // Áreas Especializadas de Atuação Jurídica (Pilares Oficiais)
  const areasAtuacao = [
    {
      id: "civil-contratos",
      icon: FileText,
      title: "Direito Civil & Contratos Estratégicos",
      shortDesc:
        "Elaboração, análise criteriosa e execução de contratos com máxima blindagem jurídica, cobranças e ações indenizatórias.",
      bullets: [
        "Elaboração e revisão minuciosa de contratos cíveis e comerciais",
        "Ações indenizatórias por descumprimento contratual e danos morais",
        "Cobrança judicial e extrajudicial de créditos e títulos executivos",
        "Proteção patrimonial e resolução célere de litígios imobiliários",
      ],
      tag: "Estratégico",
      badge: "Segurança Jurídica",
      whatsappMsg:
        "Olá, Dr. Yan Marlon! Preciso de assessoria jurídica especializada em Direito Civil / Contratos.",
    },
    {
      id: "trabalhista-patronal",
      icon: Briefcase,
      title: "Direito do Trabalho Patronal & Gestão de Pessoal",
      shortDesc:
        "Assessoria jurídica consultiva e contenciosa para empresas e empregadores, blindando negócios e solucionando questões com funcionários.",
      bullets: [
        "Resolução de questões contratuais com colaboradores e equipe",
        "Defesa combativa de empresas e empregadores em Reclamatórias Trabalhistas",
        "Prevenção e redução consistente de passivo trabalhista",
        "Acordos judiciais e extrajudiciais com segurança e homologação",
      ],
      tag: "Empresarial",
      badge: "Prevenção & Defesa",
      whatsappMsg:
        "Olá, Dr. Yan Marlon! Gostaria de consultoria jurídica sobre questões contratuais com funcionários e defesa trabalhista.",
    },
    {
      id: "familia-sucessoes",
      icon: Users,
      title: "Direito de Família & Sucessões",
      shortDesc:
        "Acolhimento humanizado e condução técnica firme em inventários, divórcios, guarda, pensão alimentícia e partilha de bens.",
      bullets: [
        "Inventários judiciais e extrajudiciais em cartório com rapidez",
        "Divórcios consensuais e litigiosos com divisão justa de patrimônio",
        "Fixação, revisão e execução de pensão alimentícia e guarda de filhos",
        "Planejamento sucessório familiar para proteção de bens e herança",
      ],
      tag: "Familiar",
      badge: "Acolhimento & Resolução",
      whatsappMsg:
        "Olá, Dr. Yan Marlon! Preciso de orientação jurídica em Direito de Família / Inventário / Partilha de bens.",
    },
    {
      id: "assessoria-empresarial",
      icon: Building2,
      title: "Assessoria & Consultoria Jurídica Empresarial",
      shortDesc:
        "Acompanhamento jurídico contínuo para empresários, comerciantes e profissionais autônomos tomarem decisões seguras.",
      bullets: [
        "Consultoria preventiva mensal com atendimento prioritário e direto",
        "Auditoria de rotinas contratuais, riscos operacionais e adequação legal",
        "Pareceres jurídicos fundamentados e negociações comerciais estratégicas",
        "Blindagem jurídica completa para você focar no crescimento da sua empresa",
      ],
      tag: "Contínuo",
      badge: "Suporte Total",
      whatsappMsg:
        "Olá, Dr. Yan Marlon! Gostaria de conhecer os planos de assessoria e consultoria jurídica contínua para minha empresa.",
    },
    {
      id: "previdenciario",
      icon: Scale,
      title: "Direito Previdenciário & Benefícios do INSS",
      shortDesc:
        "Defesa intransigente para concessão, planejamento e restabelecimento de aposentadorias, auxílios e BPC/LOAS no INSS.",
      bullets: [
        "Planejamento previdenciário para obter o maior valor de aposentadoria",
        "Reversão rápida de negativas indevidas em perícias médicas do INSS",
        "BPC/LOAS para idosos e pessoas com deficiência ou baixa renda",
        "Cobrança integral de retroativos e atrasados devidos com juros e correção",
      ],
      tag: "Previdência",
      badge: "Direito Adquirido",
      whatsappMsg:
        "Olá, Dr. Yan Marlon! Preciso de auxílio jurídico com pedido de aposentadoria ou benefício negado no INSS.",
    },
    {
      id: "consumidor-indenizacoes",
      icon: Shield,
      title: "Direito do Consumidor & Defesa de Direitos",
      shortDesc:
        "Atuação enérgica contra abusos de instituições bancárias, negativações indevidas, fraudes e negativas de planos de saúde.",
      bullets: [
        "Ações contra juros abusivos, golpes financeiros e fraudes bancárias",
        "Retirada de negativação indevida do SPC/Serasa com pedido de indenização",
        "Liminares contra negativas injustas de tratamentos por planos de saúde",
        "Reparação integral de prejuízos materiais e danos morais sofridos",
      ],
      tag: "Defesa Ativa",
      badge: "Reparação Justa",
      whatsappMsg:
        "Olá, Dr. Yan Marlon! Fui lesado como consumidor / tive meu nome negativado indevidamente e preciso de ação jurídica.",
    },
  ];

  // Avaliações Reais do Google Meu Negócio (Nota 5,0 ★ em 28 avaliações)
  const depoimentosGoogle = [
    {
      author: "Vinny Lisboa",
      detail: "2 avaliações no Google",
      stars: 5,
      date: "3 anos atrás · Avaliação verificada no Google",
      quote:
        "Excelente profissional, demonstra total comprometimento e assistência ao cliente.",
      highlight: "Comprometimento total e assistência dedicada ao cliente",
    },
    {
      author: "Kellen Raiane",
      detail: "5 avaliações no Google",
      stars: 5,
      date: "2 anos atrás · Avaliação verificada no Google",
      quote:
        "Advogado excelente um profissional notável, que não mede esforços para ajudar, foi o único que pegou a causa e fez a diferença, agradeço por tudo e indico de olhos fechado podem confiar !!",
      highlight: "Profissional notável que fez a diferença onde outros não pegaram a causa",
    },
    {
      author: "Helder Mota ENG",
      detail: "7 avaliações · 5 fotos no Google",
      stars: 5,
      date: "5 anos atrás · Avaliação verificada no Google",
      quote:
        "Advogado resolveu minhas questões contratuais com meus funcionários e pessoais de família, indico.",
      highlight: "Solucionou com excelência questões contratuais com funcionários e família",
    },
    {
      author: "Luiz Felipe Caldeira",
      detail: "Local Guide · 31 avaliações · 15 fotos no Google",
      stars: 5,
      date: "5 anos atrás · Avaliação verificada no Google",
      quote:
        "Empresa séria e com profissionais altamente qualificados. Recomendo.",
      highlight: "Empresa séria com profissionais de alta qualificação",
    },
    {
      author: "Elizane Couto Santos",
      detail: "2 avaliações no Google",
      stars: 5,
      date: "5 anos atrás · Avaliação verificada no Google",
      quote:
        "Excelente advogado, comprometido e competente, atendimento ímpar. Indico muito.",
      highlight: "Atendimento ímpar, comprometido e competente",
    },
    {
      author: "Ágatha Couto",
      detail: "3 avaliações no Google",
      stars: 5,
      date: "5 anos atrás · Avaliação verificada no Google",
      quote:
        "Excelente profissional, super indico! Aspectos positivos: Receptividade, Qualidade, Profissionalismo.",
      highlight: "Receptividade, qualidade impecável e profissionalismo",
    },
    {
      author: "Karine Alencar",
      detail: "4 avaliações no Google",
      stars: 5,
      date: "5 anos atrás · Avaliação verificada no Google",
      quote:
        "Um ótimo profissional, indico👏👏",
      highlight: "Super recomendado com máxima satisfação",
    },
    {
      author: "Lucas Alencar Lacerda",
      detail: "3 avaliações no Google",
      stars: 5,
      date: "3 anos atrás · Avaliação verificada no Google",
      quote:
        "Excelente profissional!",
      highlight: "Presteza, seriedade e dedicação em cada detalhe",
    },
    {
      author: "ISAAC REIS",
      detail: "1 avaliação no Google",
      stars: 5,
      date: "3 anos atrás · Avaliação verificada no Google",
      quote:
        "Profissional qualificado, excelente atendimento!",
      highlight: "Qualificação técnica e atendimento de primeiro nível",
    },
    {
      author: "Polyana couto Couto",
      detail: "4 avaliações · 1 foto no Google",
      stars: 5,
      date: "5 anos atrás · Avaliação verificada no Google",
      quote:
        "Ótimo profissional. Aspectos positivos: Profissionalismo.",
      highlight: "Rigor ético e conduta profissional exemplar",
    },
    {
      author: "nayara Silveira",
      detail: "9 avaliações · 2 fotos no Google",
      stars: 5,
      date: "5 anos atrás · Avaliação verificada no Google",
      quote:
        "Excelente profissional. Aspectos positivos: Qualidade, Profissionalismo, Valor.",
      highlight: "Qualidade, profissionalismo e alto valor gerado",
    },
    {
      author: "Filipe Alkmim",
      detail: "3 avaliações no Google",
      stars: 5,
      date: "5 anos atrás · Avaliação verificada no Google",
      quote:
        "Profissional excelente! Aspectos positivos: Profissionalismo.",
      highlight: "Profissionalismo e segurança jurídica comprovada",
    },
  ];

  // Diferenciais Competitivos
  const diferenciais = [
    {
      icon: Shield,
      title: "Comprometimento Total com o Cliente",
      description:
        "Como atestam os clientes no Google: dedicação sem limites à sua causa, com assistência contínua e acompanhamento pessoal em cada fase do processo.",
    },
    {
      icon: Gavel,
      title: "Rigor Técnico & Soluções Contratuais",
      description:
        "Atuação especializada na resolução de questões contratuais com funcionários, empresas e demandas civis complexas, com estratégias sólidas e fundamentadas.",
    },
    {
      icon: HeartHandshake,
      title: "Atendimento Ímpar & Humanizado",
      description:
        "Você é acolhido com atenção, empatia e clareza. Traduzimos termos jurídicos para uma linguagem transparente, sem complicação ou rodeios.",
    },
    {
      icon: BadgeCheck,
      title: "Transparência & Conduta Ética",
      description:
        "Honorários claros e justos de acordo com as normas da OAB. Diagnóstico honesto e realista sobre as chances e os caminhos mais viáveis para o seu caso.",
    },
    {
      icon: MapPin,
      title: "Sede no Centro de Januária & Online",
      description:
        "Escritório de fácil acesso na R. Cel. Serrão, 190, no Centro de Januária - MG, e estrutura digital de ponta para atender clientes em todo o Brasil.",
    },
    {
      icon: Star,
      title: "Nota Máxima 5,0 ★ no Google",
      description:
        "Avaliações 100% 5 estrelas concedidas por clientes reais que tiveram seus problemas solucionados com rapidez, competência e seriedade.",
    },
  ];

  // Situações comuns (Diagnóstico Rápido)
  const situacoesDiagnostico = [
    {
      pergunta: "Precisa resolver questões contratuais com funcionários ou empresas?",
      orientacao:
        "Contratos mal elaborados geram prejuízos evitáveis. O Dr. Yan Marlon atua na revisão, elaboração de instrumentos seguros e na prevenção e defesa contra passivos trabalhistas.",
      cta: "Quero Blindar Meus Contratos",
      area: "Contratos & Direito do Trabalho Patronal",
    },
    {
      pergunta: "Está passando por inventário, partilha de bens ou divórcio?",
      orientacao:
        "Questões familiares exigem acolhimento, discrição e firmeza técnica para evitar litígios desgastantes e assegurar uma partilha justa e desimpedida do patrimônio.",
      cta: "Orientação em Direito de Família",
      area: "Direito de Família & Sucessões",
    },
    {
      pergunta: "Sofreu prejuízos materiais, cobranças indevidas ou danos morais?",
      orientacao:
        "Ações indenizatórias exigem provas robustas e teses jurídicas assertivas para garantir que você seja integralmente ressarcido pelos prejuízos causados por terceiros.",
      cta: "Buscar Reparação de Danos",
      area: "Direito Civil & Indenizações",
    },
    {
      pergunta: "Teve benefício previdenciário negado ou precisa se aposentar?",
      orientacao:
        "Muitas decisões do INSS são injustas ou calculadas com valor inferior ao devido. Atuamos com rigor para conceder, planejar e revisar o seu melhor benefício com retroativos.",
      cta: "Analisar Meu Benefício do INSS",
      area: "Direito Previdenciário",
    },
  ];

  // FAQ
  const faqs = [
    {
      question: "Como funciona a consulta jurídica inicial com o Dr. Yan Marlon?",
      answer:
        "A consulta inicial é o momento em que ouvimos com calma a sua história, analisamos os documentos disponíveis e realizamos um diagnóstico jurídico claro sobre as possibilidades, prazos e a estratégia mais adequada para o seu caso. O atendimento pode ser presencial no escritório em Januária/MG ou online por WhatsApp e videochamada.",
    },
    {
      question: "Como o Dr. Yan Marlon pode ajudar minha empresa com funcionários e contratos?",
      answer:
        "Auxiliamos empresários e empregadores tanto na fase preventiva (elaboração e revisão de contratos de trabalho e prestação de serviços, adequação a normas e rotinas) quanto na defesa contenciosa contra reclamações trabalhistas indevidas, sempre buscando a redução de custos, acordos vantajosos e segurança jurídica.",
    },
    {
      question: "Posso ser atendido mesmo morando fora de Januária ou em outro estado?",
      answer:
        "Sim, perfeitamente! Hoje o Poder Judiciário funciona de forma 100% eletrônica em todo o Brasil. Nosso escritório conta com infraestrutura digital segura para envio de documentos, reuniões por chamada de vídeo e acompanhamento passo a passo via WhatsApp, garantindo a mesma proximidade e excelência de um atendimento presencial.",
    },
    {
      question: "Quanto tempo demora um processo de inventário ou divórcio?",
      answer:
        "Quando há consenso entre os herdeiros ou o casal e não há menores envolvidos, o procedimento pode ser realizado em cartório (extrajudicial) em questão de semanas. Caso seja necessário o processo judicial, o tempo varia conforme a complexidade do patrimônio, mas conduzimos com máxima diligência para destravar cada etapa.",
    },
    {
      question: "Quais documentos preciso apresentar na primeira conversa?",
      answer:
        "Geralmente recomendamos ter em mãos: documento de identidade com foto (RG ou CNH), CPF, comprovante de residência atualizado e os documentos específicos da sua dúvida (por exemplo: contratos, extratos, certidões de casamento/nascimento, CTPS, laudos médicos ou notificações recebidas).",
    },
    {
      question: "Como são definidos os honorários advocatícios?",
      answer:
        "Nossos honorários são estabelecidos de forma transparente, ética e de acordo com a tabela da OAB/MG. O valor é detalhado no contrato de prestação de serviços jurídicos após a avaliação da complexidade da demanda, sem nenhuma cobrança oculta ou surpresa para o cliente.",
    },
  ];

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-white font-sans text-slate-800 antialiased selection:bg-[#d4af37] selection:text-[#050a14]">
        {/* ========================================================================= */}
        {/* 1. TOP NOTICE / PRE-HEADER                                               */}
        {/* ========================================================================= */}
        <div className="border-b border-[#1b3964] bg-gradient-to-r from-[#050a14] via-[#081020] to-[#0e182e] px-4 py-2 text-white">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2 font-medium">
              <span className="flex size-2 rounded-full bg-[#eed68b] animate-pulse" />
              <span className="text-[#eed68b]">
                Advocacia, Assessoria &amp; Consultoria Jurídica &bull; OAB/MG 195.229
              </span>
              <span className="hidden sm:inline text-slate-400">|</span>
              <span className="hidden sm:inline text-slate-300">
                Januária - MG &amp; Atendimento Digital em Todo o Brasil
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
                <span className="text-slate-300">(28 avaliações no Google)</span>
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-1 font-semibold text-[#eed68b] hover:underline"
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
              aria-label="Dr. Yan Marlon — Advocacia e Consultoria Jurídica - Início"
              onClick={closeMenu}
              className="flex shrink-0 items-center gap-3 sm:gap-3.5 transition-opacity hover:opacity-95 mr-4"
            >
              <div className="relative size-12 sm:size-13 lg:size-14 shrink-0">
                <Image
                  src={LOGO_SYMBOL_SRC}
                  alt="Dr. Yan Marlon — Advocacia, Assessoria e Consultoria Jurídica"
                  fill
                  priority
                  unoptimized
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-cinzel text-base sm:text-lg lg:text-xl font-extrabold tracking-[0.14em] text-[#081020] leading-tight">
                  Dr. YAN MARLON
                </span>
                <span className="text-[9px] sm:text-[10px] lg:text-[11px] font-bold tracking-[0.18em] text-[#7a520e] uppercase mt-0.5">
                  ADVOCACIA &amp; CONSULTORIA JURÍDICA
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
                Avaliações
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
                <WhatsAppIcon size={14} className="text-[#050a14]" />
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
                    className="py-1.5 text-slate-800 hover:text-[#7a520e]"
                    href="#inicio"
                    onClick={closeMenu}
                  >
                    Início
                  </a>
                  <a
                    className="py-1.5 text-slate-800 hover:text-[#7a520e]"
                    href="#atuacao"
                    onClick={closeMenu}
                  >
                    Áreas de Atuação
                  </a>
                  <a
                    className="py-1.5 text-slate-800 hover:text-[#7a520e]"
                    href="#sobre"
                    onClick={closeMenu}
                  >
                    Sobre o Dr. Yan Marlon
                  </a>
                  <a
                    className="py-1.5 text-slate-800 hover:text-[#7a520e]"
                    href="#diferenciais"
                    onClick={closeMenu}
                  >
                    Nossos Diferenciais
                  </a>
                  <a
                    className="py-1.5 text-slate-800 hover:text-[#7a520e]"
                    href="#avaliacoes"
                    onClick={closeMenu}
                  >
                    Avaliações no Google (5.0 ★)
                  </a>
                  <a
                    className="py-1.5 text-slate-800 hover:text-[#7a520e]"
                    href="#faq"
                    onClick={closeMenu}
                  >
                    Perguntas Frequentes
                  </a>
                  <a
                    className="py-1.5 text-slate-800 hover:text-[#7a520e]"
                    href="#contato"
                    onClick={closeMenu}
                  >
                    Sede em Januária &amp; Contato
                  </a>

                  <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
                    <GlowingButton
                      variant="gold"
                      size="md"
                      href={getWhatsAppUrl()}
                      target="_blank"
                      className="w-full justify-center"
                    >
                      <WhatsAppIcon size={16} className="text-[#050a14]" />
                      <span>Falar no WhatsApp</span>
                    </GlowingButton>
                    <a
                      href={`tel:${WHATSAPP_NUMBER}`}
                      className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 py-3 text-xs font-bold text-slate-700 hover:bg-slate-50"
                    >
                      <Phone size={14} className="text-[#7a520e]" />
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
          className="relative overflow-hidden bg-gradient-to-b from-[#050a14] via-[#081020] to-[#0e182e] text-white py-14 sm:py-20 lg:py-24"
        >
          {/* Subtle Ambient Decorative Lights */}
          <div className="pointer-events-none absolute -top-40 -left-40 size-96 rounded-full bg-[#d4af37]/15 blur-3xl" />
          <div className="pointer-events-none absolute top-1/2 -right-40 size-96 rounded-full bg-[#1b3964]/40 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#eed68b_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

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
                  <div className="inline-flex items-center gap-2.5 rounded-full border border-[#d4af37]/40 bg-[#050a14]/80 px-4 py-1.5 text-[11px] font-bold tracking-[0.16em] uppercase text-[#eed68b] shadow-sm backdrop-blur-md">
                    <Scale size={14} className="text-[#eed68b]" />
                    <span>Advocacia, Assessoria &amp; Consultoria Jurídica</span>
                  </div>
                </motion.div>

                {/* H1 Headline */}
                <motion.h1
                  variants={fadeInUp}
                  className="font-cinzel text-3xl font-extrabold leading-[1.18] tracking-tight sm:text-4xl md:text-5xl text-white"
                >
                  Defesa jurídica estratégica, rigor técnico e{" "}
                  <span className="text-gradient-gold">compromisso real</span> com o seu caso.
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  variants={fadeInUp}
                  className="mt-6 text-base text-slate-300 sm:text-lg sm:leading-relaxed"
                >
                  Soluções jurídicas preventivas e combativas em Direito Civil,
                  Contratos, Direito de Família, Sucessões, Trabalhista Patronal e
                  Previdenciário. Atendimento humanizado, dedicado e transparente pelo{" "}
                  <strong className="text-white font-semibold">
                    Dr. Yan Marlon (OAB/MG 195.229)
                  </strong>
                  , com sede física em Januária - MG e atendimento digital em todo o Brasil.
                </motion.p>

                {/* Authority Badges Checklist */}
                <motion.div
                  variants={fadeInUp}
                  className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2 text-xs sm:text-sm text-slate-200"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#eed68b] shrink-0" />
                    <span>Nota máxima 5,0 ★ no Google (28 avaliações)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#eed68b] shrink-0" />
                    <span>Total comprometimento e assistência dedicada</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#eed68b] shrink-0" />
                    <span>Soluções contratuais com funcionários e empresas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#eed68b] shrink-0" />
                    <span>Sede no Centro de Januária - MG + Atuação Nacional</span>
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
                    <WhatsAppIcon size={18} className="text-[#050a14]" />
                    <span>Falar no WhatsApp com Dr. Yan Marlon</span>
                  </GlowingButton>

                  <a
                    href="#atuacao"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-white/5 px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition-all hover:border-[#eed68b] hover:bg-white/10"
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
                  <span>Avaliações reais no Google Meu Negócio</span>
                  <span>&bull;</span>
                  <a
                    href={GOOGLE_SEARCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#eed68b] hover:underline flex items-center gap-1"
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
                  <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#d4af37]/40 via-[#eed68b]/15 to-transparent blur-md" />

                  {/* Main Portrait Card */}
                  <div className="relative overflow-hidden rounded-2xl border-2 border-[#d4af37]/50 bg-[#081020] shadow-2xl">
                    <div className="relative aspect-[4/5] w-full overflow-hidden">
                      <Image
                        src={FOTO_HERO_SRC}
                        alt="Dr. Yan Marlon - Advogado e Consultor Jurídico em Januária - MG"
                        fill
                        priority
                        className="object-cover object-top filter contrast-[1.03]"
                      />

                      {/* Gradient Overlay for bottom text legibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050a14] via-[#050a14]/20 to-transparent" />

                      {/* Card Lower Badge */}
                      <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-[#d4af37]/40 bg-[#050a14]/90 p-3.5 backdrop-blur-md">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-cinzel text-sm sm:text-base font-bold text-white tracking-wide">
                              Dr. Yan Marlon
                            </p>
                            <p className="text-[10px] sm:text-xs font-semibold text-[#eed68b] uppercase tracking-wider mt-0.5">
                              Advogado &bull; OAB/MG 195.229
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
                              5,0 ★ no Google
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Trust Card Top-Right */}
                  <div className="hidden sm:flex absolute -top-5 -right-5 items-center gap-2.5 rounded-xl border border-[#d4af37]/60 bg-[#050a14]/95 px-4 py-2.5 shadow-xl backdrop-blur-md">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-[#d4af37]/20 text-[#eed68b]">
                      <Scale size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#eed68b]">
                        Compromisso
                      </p>
                      <p className="text-xs font-bold text-white">
                        Assistência Total
                      </p>
                    </div>
                  </div>

                  {/* Floating Trust Card Bottom-Left */}
                  <div className="hidden sm:flex absolute -bottom-5 -left-5 items-center gap-2.5 rounded-xl border border-slate-700 bg-[#081020]/95 px-4 py-2.5 shadow-xl backdrop-blur-md">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-[#25D366]/20 text-[#25D366]">
                      <WhatsAppIcon size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-300">
                        Atendimento Rápido
                      </p>
                      <p className="text-xs font-bold text-white">
                        Online &amp; Presencial
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
        <section className="border-y border-slate-200 bg-[#fbfaf6] py-8 sm:py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1 text-2xl sm:text-3xl font-extrabold text-[#081020]">
                  <span>5,0</span>
                  <div className="flex text-amber-500">
                    <Star size={18} className="fill-amber-400 text-amber-400" />
                  </div>
                </div>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#7a520e] mt-1">
                  Nota Máxima Google
                </p>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                  28 avaliações 100% 5 estrelas
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#081020]">
                  195.229
                </div>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#7a520e] mt-1">
                  OAB/MG Titular
                </p>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                  Atuação sólida e regular
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#081020]">
                  Dedicado
                </div>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#7a520e] mt-1">
                  Comprometimento
                </p>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                  Assistência próxima ao cliente
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#081020]">
                  Nacional
                </div>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#7a520e] mt-1">
                  Sede Januária &amp; Online
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
              <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold text-[#081020]">
                Você se identifica com alguma dessas situações jurídicas?
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Não deixe seus direitos desprotegidos nem adie a solução de pendências
                que podem comprometer seu patrimônio, sua família ou sua empresa:
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
              {situacoesDiagnostico.map((sit, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-[#fbfaf6] p-6 sm:p-8 transition-all hover:border-[#d4af37] hover:shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start gap-3.5 mb-3">
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#d4af37]/20 text-[#7a520e]">
                        <AlertCircle size={20} />
                      </div>
                      <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#081020] leading-snug">
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
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#7a520e] hover:text-[#081020] transition-colors cursor-pointer"
                    >
                      <span>{sit.cta}</span>
                      <ArrowRight size={14} />
                    </button>

                    <a
                      href={getWhatsAppUrl(`Olá, Dr. Yan Marlon! ${sit.pergunta}`)}
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
          className="relative bg-gradient-to-b from-[#050a14] via-[#081020] to-[#0e182e] text-white py-16 sm:py-24"
        >
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
              <div className="eyebrow-light justify-center mb-3">
                Pilares de Atuação &bull; Advocacia &amp; Consultoria
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
                Como atuamos na defesa dos seus direitos
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300">
                Atuação consultiva preventiva e contenciosa combativa em instâncias
                judiciais e extrajudiciais, com técnica refinada e foco intransigente
                em resultados.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {areasAtuacao.map((area) => {
                const IconComponent = area.icon;
                return (
                  <div
                    key={area.id}
                    className="group relative flex flex-col justify-between rounded-2xl border border-slate-700/80 bg-[#0e182e]/90 p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#d4af37] hover:shadow-2xl hover:shadow-[#d4af37]/10"
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-[#eed68b]/10 border border-[#d4af37]/30 text-[#eed68b] group-hover:scale-105 transition-transform">
                          <IconComponent size={22} />
                        </div>
                        <span className="rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#eed68b]">
                          {area.badge}
                        </span>
                      </div>

                      {/* Card Title */}
                      <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-[#eed68b] transition-colors">
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
                              className="text-[#eed68b] shrink-0 mt-0.5"
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
                        className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#d4af37]/50 bg-white/5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#eed68b] transition-all hover:bg-[#d4af37] hover:text-[#050a14] hover:border-[#d4af37]"
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
            <div className="mt-14 rounded-2xl border-2 border-[#d4af37]/60 bg-gradient-to-r from-[#050a14] via-[#081020] to-[#0e182e] p-8 sm:p-10 shadow-2xl">
              <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
                <div>
                  <div className="eyebrow-light mb-2">
                    Precisa de Orientação Imediata?
                  </div>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
                    Fale diretamente com o Dr. Yan Marlon
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-300 max-w-2xl">
                    Envie uma mensagem resumindo sua questão. Realizaremos uma triagem rápida
                    para indicar a conduta mais segura e eficaz para o seu caso.
                  </p>
                </div>

                <GlowingButton
                  variant="gold"
                  size="lg"
                  href={getWhatsAppUrl(
                    "Olá, Dr. Yan Marlon! Gostaria de uma avaliação jurídica para entender o caminho adequado para o meu caso."
                  )}
                  target="_blank"
                  className="shrink-0"
                >
                  <WhatsAppIcon size={17} className="text-[#050a14]" />
                  <span>Tirar Dúvida Agora</span>
                </GlowingButton>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. SOBRE O ADVOGADO (DR. YAN MARLON)                                      */}
        {/* ========================================================================= */}
        <section id="sobre" className="py-16 sm:py-24 bg-white overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Photo on Left */}
              <div className="relative lg:col-span-5">
                <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
                  {/* Subtle Accent Glow */}
                  <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-[#d4af37]/30 to-transparent blur-lg" />

                  <div className="relative overflow-hidden rounded-2xl border-2 border-[#d4af37]/60 bg-[#081020] shadow-2xl">
                    <div className="relative aspect-[4/5] w-full">
                      <Image
                        src={FOTO_SOBRE_SRC}
                        alt="Dr. Yan Marlon - Advogado e Consultor Jurídico"
                        fill
                        className="object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050a14]/80 via-transparent to-transparent" />

                      <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/20 bg-black/60 p-3.5 backdrop-blur-md text-white text-center">
                        <p className="font-cinzel text-base font-bold text-[#eed68b]">
                          Dr. Yan Marlon
                        </p>
                        <p className="text-[11px] text-slate-200 mt-0.5">
                          Advogado &bull; OAB/MG 195.229
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio & Details on Right */}
              <div className="lg:col-span-7">
                <div className="eyebrow-gold mb-3">Sobre o Profissional</div>

                <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#081020] leading-tight">
                  Advocacia de excelência, total assistência e foco em soluções reais.
                </h2>

                <div className="mt-6 space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    O <strong className="text-[#081020]">Dr. Yan Marlon (OAB/MG 195.229)</strong> é
                    advogado e consultor jurídico dedicado a prestar uma advocacia estratégica,
                    combativa e atenta às particularidades de cada cliente, seja ele pessoa
                    física ou empresário.
                  </p>
                  <p>
                    Com escritório sediado no Centro de Januária - MG e atendimento digital
                    de alto padrão que abrange clientes em diversas cidades e estados, sua atuação
                    é pautada nos valores que os próprios clientes reiteram publicamente:{" "}
                    <strong>total comprometimento, assistência contínua, rigor técnico e capacidade notável de resolução</strong>.
                  </p>
                  <p>
                    No escritório Dr. Yan Marlon — Advocacia, Assessoria e Consultoria Jurídica,
                    cada causa recebe atenção individualizada e artesanal, buscando não apenas defender
                    direitos em juízo, mas também prevenir litígios e preservar o patrimônio
                    e a tranquilidade de quem confia em nosso trabalho.
                  </p>
                </div>

                {/* Quote Box */}
                <div className="mt-6 rounded-xl border-l-4 border-[#d4af37] bg-[#fbfaf6] p-4 sm:p-5">
                  <p className="italic text-sm text-slate-800">
                    &ldquo;Advogado excelente, um profissional notável que não mede esforços
                    para ajudar, demonstra total comprometimento e assistência ao cliente.
                    Resolveu minhas questões contratuais com funcionários e família.&rdquo;
                  </p>
                  <p className="mt-2 text-xs font-bold text-[#7a520e] uppercase tracking-wider">
                    — Síntese das avaliações públicas dos clientes no Google (Nota 5,0 ★ em 28 avaliações)
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
                    <WhatsAppIcon size={16} className="text-[#050a14]" />
                    <span>Falar Diretamente com Dr. Yan Marlon</span>
                  </GlowingButton>

                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-800 transition-colors hover:border-[#d4af37] hover:text-[#7a520e]"
                  >
                    <InstagramIcon size={16} className="text-[#E1306C]" />
                    <span>Instagram {INSTAGRAM_HANDLE}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 8. DIFERENCIAIS                                                           */}
        {/* ========================================================================= */}
        <section id="diferenciais" className="py-16 sm:py-24 bg-[#fbfaf6] border-t border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
              <div className="eyebrow-gold justify-center mb-3">
                Por Que Escolher Nosso Escritório
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#081020]">
                Diferenciais que asseguram a confiança dos nossos clientes
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Uma experiência jurídica com seriedade, comunicação transparente e
                acompanhamento próximo de verdade.
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
                    <div className="flex size-12 items-center justify-center rounded-xl bg-[#d4af37]/15 text-[#7a520e] mb-5">
                      <IconComp size={22} />
                    </div>
                    <h3 className="font-cinzel text-lg font-bold text-[#081020]">
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
              <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#081020]">
                Como funciona o seu atendimento jurídico
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Do primeiro contato até a conclusão exitosa da sua causa:
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
              <div className="relative rounded-2xl border border-slate-200 bg-[#fbfaf6] p-6 text-center">
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#081020] text-[#eed68b] font-bold text-lg mb-4">
                  1
                </div>
                <h3 className="font-cinzel text-base font-bold text-[#081020]">
                  Primeiro Contato
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Você clica no botão de WhatsApp ou nos liga, relata o seu caso e
                  agendamos um horário presencial na sede ou digital.
                </p>
              </div>

              <div className="relative rounded-2xl border border-slate-200 bg-[#fbfaf6] p-6 text-center">
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#081020] text-[#eed68b] font-bold text-lg mb-4">
                  2
                </div>
                <h3 className="font-cinzel text-base font-bold text-[#081020]">
                  Análise Técnica
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  O Dr. Yan Marlon examina detalhadamente seus documentos, contratos
                  e histórico para traçar a melhor tese jurídica.
                </p>
              </div>

              <div className="relative rounded-2xl border border-slate-200 bg-[#fbfaf6] p-6 text-center">
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#081020] text-[#eed68b] font-bold text-lg mb-4">
                  3
                </div>
                <h3 className="font-cinzel text-base font-bold text-[#081020]">
                  Estratégia Sob Medida
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Definimos o plano de ação (preventivo, negocial ou contencioso judicial)
                  com transparência sobre prazos e custos.
                </p>
              </div>

              <div className="relative rounded-2xl border border-slate-200 bg-[#fbfaf6] p-6 text-center">
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#081020] text-[#eed68b] font-bold text-lg mb-4">
                  4
                </div>
                <h3 className="font-cinzel text-base font-bold text-[#081020]">
                  Atuação &amp; Suporte
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Condução combativa do processo, com atualizações periódicas até a
                  efetiva defesa e consagração do seu direito.
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
                <WhatsAppIcon size={17} className="text-[#050a14]" />
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
          className="py-16 sm:py-24 bg-gradient-to-b from-[#050a14] via-[#081020] to-[#0e182e] text-white"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
              <div className="eyebrow-light justify-center mb-3">
                Prova Social &bull; Google Meu Negócio
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
                O que dizem os nossos clientes no Google
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
                  (28 avaliações verificadas no Google)
                </span>
              </div>
            </div>

            {/* Grid of Reviews */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {depoimentosGoogle.map((dep, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-700/80 bg-[#0e182e]/80 p-6 backdrop-blur-sm flex flex-col justify-between hover:border-[#d4af37] transition-all"
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
                    <p className="text-xs font-bold text-[#eed68b] mb-2 uppercase tracking-wider">
                      {dep.highlight}
                    </p>

                    {/* Quote */}
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                      &ldquo;{dep.quote}&rdquo;
                    </p>
                  </div>

                  {/* Author */}
                  <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center gap-3">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#d4af37]/20 text-xs font-bold text-[#eed68b]">
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
                className="inline-flex items-center gap-2 rounded-lg border border-slate-600 bg-white/5 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:border-[#eed68b] hover:bg-white/10 transition-colors"
              >
                <GoogleIcon size={16} />
                <span>Ver Todas as 28 Avaliações no Google Meu Negócio</span>
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
              <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#081020]">
                Perguntas Frequentes sobre Atuação &amp; Consultoria
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600">
                Respostas diretas e esclarecedoras para as dúvidas mais comuns de nossos
                clientes.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-[#fbfaf6] transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-[#081020] hover:text-[#7a520e] transition-colors cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="pr-4">{faq.question}</span>
                      <ChevronDown
                        size={18}
                        className={`shrink-0 text-[#7a520e] transition-transform duration-200 ${
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

            <div className="mt-12 rounded-2xl border border-[#d4af37]/40 bg-[#fbfaf6] p-6 text-center">
              <p className="font-cinzel text-base font-bold text-[#081020]">
                Ainda tem alguma dúvida sobre o seu caso específico?
              </p>
              <p className="mt-1 text-xs sm:text-sm text-slate-600">
                O Dr. Yan Marlon está à disposição para analisar sua situação com sigilo e atenção.
              </p>
              <div className="mt-4">
                <GlowingButton
                  variant="gold"
                  size="md"
                  href={getWhatsAppUrl("Olá, Dr. Yan Marlon! Tenho uma dúvida sobre o meu caso e gostaria de orientação jurídica.")}
                  target="_blank"
                >
                  <WhatsAppIcon size={15} className="text-[#050a14]" />
                  <span>Tirar Dúvida no WhatsApp</span>
                </GlowingButton>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 12. CONTATO & SEDE EM JANUÁRIA - MG                                       */}
        {/* ========================================================================= */}
        <section id="contato" className="py-16 sm:py-24 bg-[#fbfaf6] border-t border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Contact Info Column */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="eyebrow-gold mb-3">Atendimento &amp; Sede</div>
                  <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#081020]">
                    Entre em contato e agende sua consulta
                  </h2>
                  <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                    Atendimento presencial no Centro de Januária - MG ou 100% digital
                    com atendimento para todo o Brasil. Escolha o canal mais conveniente
                    para você.
                  </p>

                  <div className="mt-8 space-y-4">
                    <div className="flex items-start gap-3.5">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#d4af37]/20 text-[#7a520e]">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#081020] uppercase tracking-wider">
                          Endereço da Sede
                        </p>
                        <p className="text-sm text-slate-700 mt-0.5">
                          {ADDRESS_TEXT}
                        </p>
                        <a
                          href={GOOGLE_MAPS_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 inline-flex items-center gap-1 text-xs font-bold text-[#7a520e] hover:underline"
                        >
                          <span>Como chegar no Google Maps</span>
                          <ArrowUpRight size={12} />
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#d4af37]/20 text-[#7a520e]">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#081020] uppercase tracking-wider">
                          Telefone &amp; WhatsApp
                        </p>
                        <a
                          href={getWhatsAppUrl()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-slate-800 hover:text-[#7a520e] mt-0.5 block"
                        >
                          {PHONE_DISPLAY}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#d4af37]/20 text-[#7a520e]">
                        <InstagramIcon size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#081020] uppercase tracking-wider">
                          Instagram Oficial
                        </p>
                        <a
                          href={INSTAGRAM_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-slate-800 hover:text-[#7a520e] mt-0.5 block"
                        >
                          {INSTAGRAM_HANDLE} (1.272 seguidores)
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#d4af37]/20 text-[#7a520e]">
                        <Clock size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#081020] uppercase tracking-wider">
                          Horário de Funcionamento
                        </p>
                        <p className="text-sm text-slate-700 mt-0.5">
                          Segunda a Sexta: 08:00 às 18:00
                        </p>
                        <p className="text-xs text-slate-500">
                          Atendimento com agendamento prévio
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
                    <WhatsAppIcon size={18} className="text-[#050a14]" />
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
                          alt="Dr. Yan Marlon"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <p className="font-cinzel text-sm font-bold text-[#081020]">
                          Dr. Yan Marlon — Advocacia
                        </p>
                        <p className="text-[10px] text-slate-500">
                          Januária - MG
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 rounded-md bg-amber-50 px-2 py-1 text-xs font-bold text-amber-700 border border-amber-200">
                      <Star size={12} className="fill-amber-400 text-amber-500" />
                      <span>5,0 ★ Google (28)</span>
                    </div>
                  </div>

                  {/* Interactive Map Container */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                    <iframe
                      title="Localização do Escritório Dr. Yan Marlon — Advocacia, Assessoria e Consultoria Jurídica em Januária - MG"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.541285227845!2d-44.3685!3d-15.4833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7520e54148bcfeb%3A0x4879c98bc05fe431!2sR.%20Cel.%20Serr%C3%A3o%2C%20190%20-%20Centro%2C%20Janu%C3%A1ria%20-%20MG%2C%2039480-000!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
                      className="size-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>

                  <div className="mt-4 flex items-center justify-between text-xs text-slate-600">
                    <span>R. Cel. Serrão, n.190 - Centro</span>
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#7a520e] hover:underline flex items-center gap-1"
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
        <footer className="border-t border-[#1b3964] bg-gradient-to-b from-[#050a14] to-[#03060d] text-white py-12 sm:py-16">
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
                      alt="Dr. Yan Marlon — Advocacia, Assessoria e Consultoria Jurídica"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-cinzel text-lg sm:text-xl font-extrabold tracking-[0.14em] text-white leading-tight">
                      Dr. YAN MARLON
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.18em] text-[#eed68b] uppercase mt-0.5">
                      ADVOCACIA &amp; CONSULTORIA JURÍDICA
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
                    className="flex size-9 items-center justify-center rounded-lg border border-slate-700 bg-white/5 text-slate-300 transition-colors hover:border-[#eed68b] hover:text-[#eed68b]"
                    aria-label="Instagram do Dr. Yan Marlon"
                  >
                    <InstagramIcon size={16} />
                  </a>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-9 items-center justify-center rounded-lg border border-slate-700 bg-white/5 text-slate-300 transition-colors hover:border-[#25D366] hover:text-[#25D366]"
                    aria-label="WhatsApp do Dr. Yan Marlon"
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
                <p className="font-cinzel text-xs font-bold uppercase tracking-[0.16em] text-[#eed68b] mb-4">
                  Áreas de Atuação
                </p>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li>
                    <a className="footer-link" href="#atuacao">
                      Direito Civil &amp; Contratos
                    </a>
                  </li>
                  <li>
                    <a className="footer-link" href="#atuacao">
                      Direito do Trabalho Patronal
                    </a>
                  </li>
                  <li>
                    <a className="footer-link" href="#atuacao">
                      Direito de Família &amp; Sucessões
                    </a>
                  </li>
                  <li>
                    <a className="footer-link" href="#atuacao">
                      Assessoria Jurídica Empresarial
                    </a>
                  </li>
                  <li>
                    <a className="footer-link" href="#atuacao">
                      Direito Previdenciário (INSS)
                    </a>
                  </li>
                  <li>
                    <a className="footer-link" href="#atuacao">
                      Direito do Consumidor &amp; Danos
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal & Office */}
              <div className="lg:col-span-4">
                <p className="font-cinzel text-xs font-bold uppercase tracking-[0.16em] text-[#eed68b] mb-4">
                  Sede &amp; Contato
                </p>
                <div className="space-y-2.5 text-xs text-slate-300">
                  <p className="flex items-start gap-2">
                    <MapPin size={14} className="text-[#eed68b] shrink-0 mt-0.5" />
                    <span>{ADDRESS_TEXT}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <WhatsAppIcon size={14} className="text-[#25D366] shrink-0" />
                    <span>WhatsApp: {PHONE_DISPLAY}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail size={14} className="text-[#eed68b] shrink-0" />
                    <span>{EMAIL_CONTACT}</span>
                  </p>
                  <p className="text-[11px] text-slate-400 mt-3 pt-3 border-t border-slate-800">
                    Atendimento de Segunda a Sexta, das 08:00 às 18:00.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Copyright & OAB Ethics Notice */}
            <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 text-center md:text-left">
              <p>
                &copy; {new Date().getFullYear()} Dr. Yan Marlon — Advocacia, Assessoria e Consultoria Jurídica.
                Todos os direitos reservados.
              </p>
              <p className="max-w-xl text-[10px] leading-relaxed">
                Este site possui finalidade meramente informativa e não configura consulta
                jurídica formal, em total conformidade com as diretrizes do Código de Ética e
                Disciplina da Ordem dos Advogados do Brasil (OAB/MG 195.229).
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
            aria-label="Falar com o Dr. Yan Marlon no WhatsApp"
          >
            <span className="absolute -top-1 -right-1 flex size-3">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#eed68b] opacity-75" />
              <span className="relative inline-flex size-3 rounded-full bg-[#eed68b]" />
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
                className="relative z-10 w-full max-w-lg rounded-2xl border-2 border-[#d4af37]/60 bg-gradient-to-b from-[#050a14] to-[#081020] p-6 sm:p-8 text-white shadow-2xl"
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
                      alt="Dr. Yan Marlon"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-cinzel text-lg font-bold text-white">
                      Análise Jurídica Especializada
                    </h3>
                    <p className="text-xs text-[#eed68b] font-semibold">
                      {modalArea}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Para analisar sua demanda com sigilo, agilidade e rigor técnico, você será
                  redirecionado ao atendimento oficial do{" "}
                  <strong className="text-white">Dr. Yan Marlon (OAB/MG 195.229)</strong>.
                </p>

                <div className="mt-5 space-y-2 rounded-xl border border-slate-700 bg-white/5 p-4 text-xs text-slate-300">
                  <p className="font-bold text-white uppercase tracking-wider text-[11px] text-[#eed68b]">
                    O que ter em mãos (se aplicável):
                  </p>
                  <ul className="space-y-1 pl-1">
                    <li>&bull; Nome completo e cidade onde reside</li>
                    <li>&bull; Breve resumo da situação ou litígio</li>
                    <li>&bull; Contratos, notificações ou documentos relativos ao caso</li>
                  </ul>
                </div>

                <div className="mt-6 flex flex-col gap-2.5">
                  <GlowingButton
                    variant="gold"
                    size="md"
                    href={getWhatsAppUrl(
                      `Olá, Dr. Yan Marlon! Gostaria de uma avaliação jurídica sobre: ${modalArea}.`
                    )}
                    target="_blank"
                    className="w-full justify-center"
                  >
                    <WhatsAppIcon size={16} className="text-[#050a14]" />
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
