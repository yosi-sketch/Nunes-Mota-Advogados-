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
  Briefcase,
  AlertCircle,
  HelpCircle,
  Coins,
  BadgeCheck,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const WHATSAPP_NUMBER = "5538999308575";
const PHONE_DISPLAY = "(38) 99930-8575";
const EMAIL_CONTACT = "contato@marianacorsi.adv.br";
const INSTAGRAM_URL = "https://www.instagram.com/marianamunizcorsi/";
const INSTAGRAM_HANDLE = "@marianamunizcorsi";

const FIRM_NAME = "Mariana Corsi Advocacia Previdenciária";
const FIRM_SHORT_NAME = "Mariana Corsi Advocacia";
const FIRM_SLOGAN =
  "Direito Previdenciário sem complicação. Cuidado com as pessoas, rigor técnico e agilidade para garantir o seu melhor benefício do INSS.";
const LAWYER_NAME = "Dra. Mariana Corsi";
const LAWYER_TITLE = "Advogada Previdenciarista | Especialista em INSS";

const ADDRESS_TEXT =
  "R. Martinho Campos, 162 - Centro, Pitangui - MG, 35650-000";
const REGION_TEXT =
  "Pitangui · Centro-Oeste Mineiro · Minas Gerais & Atendimento Digital em Todo o Brasil";

const GOOGLE_SEARCH_URL =
  "https://www.google.com/search?q=Mariana+Corsi+Advocacia+Previdenci%C3%A1ria%0APitangui+%C2%B7+MG&sourceid=chrome&ie=UTF-8#";
const GOOGLE_MAPS_URL =
  "https://www.google.com/search?sca_esv=a225a88ab5a0d3cb&sxsrf=AKL5yDixCMldSO4C_0BYsPDK25s8neNwTg:1793304403889&q=mariana+corsi+advocacia+previdenci%C3%A1ria+pitangui+endere%C3%A7o&ludocid=8462263717528583590&sa=X&ved=2ahUKEwj7zN6_g-CXAxV3A7kGHcxALMUQ6BN6BAg1EAI";

const LOGO_SRC = "/logo.png";
const LOGO_SYMBOL_SRC = "/logo-symbol.png";
const FOTO_HERO_SRC = "/hero-advogada.jpg";
const FOTO_SOBRE_SRC = "/sobre-advogada.jpg";

function getWhatsAppUrl(
  message?: string,
  number: string = WHATSAPP_NUMBER
) {
  const defaultText =
    "Olá, Dra. Mariana! Gostaria de conversar sobre o meu caso previdenciário e solicitar uma análise do meu benefício do INSS.";
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
  const [modalArea, setModalArea] = useState<string>("Planejamento Previdenciário");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openConsultModal = (areaName = "Consulta Geral Previdenciária") => {
    setModalArea(areaName);
    setModalOpen(true);
  };

  const closeMenu = () => setIsMenuOpen(false);

  // Áreas Especializadas Previdenciárias (Pilares de Atuação)
  const areasAtuacao = [
    {
      id: "planejamento",
      icon: Compass,
      title: "Planejamento Previdenciário Estratégico",
      shortDesc:
        "Cálculo rigoroso do tempo de contribuição e simulação da regra mais vantajosa para você se aposentar sem perder dinheiro nem tempo.",
      bullets: [
        "Análise minuciosa de cada vínculo no CNIS e carteira de trabalho",
        "Identificação e correção de pendências e indicadores que travam o benefício",
        "Cálculo do Retorno sobre o Investimento (ROI) de contribuições futuras",
        "Previsão da melhor data de requerimento para receber o teto possível",
      ],
      tag: "Mais Solicitado",
      badge: "Prevenção & Lucro",
      whatsappMsg:
        "Olá, Dra. Mariana! Gostaria de agendar um Planejamento Previdenciário para calcular a melhor data e valor da minha aposentadoria.",
    },
    {
      id: "aposentadorias",
      icon: Scale,
      title: "Aposentadorias do INSS",
      shortDesc:
        "Concessão célere e estratégica de todas as modalidades de aposentadoria pelas regras vigentes e regras de transição da Reforma.",
      bullets: [
        "Aposentadoria por Idade Urbana e Rural",
        "Aposentadoria por Tempo de Contribuição e Transição",
        "Aposentadoria Especial (Insalubridade, Químicos, Ruído e Periculosidade)",
        "Aposentadoria da Pessoa com Deficiência (Idade e Tempo reduzidos)",
      ],
      tag: "Especialidade",
      badge: "Direito Adquirido",
      whatsappMsg:
        "Olá, Dra. Mariana! Preciso de auxílio jurídico para dar entrada na minha aposentadoria pelo INSS.",
    },
    {
      id: "bpc-loas",
      icon: HeartHandshake,
      title: "BPC / LOAS (Benefício Assistencial)",
      shortDesc:
        "Salário mínimo mensal garantido por lei para idosos (65+) ou pessoas com deficiência e doenças graves de baixa renda, mesmo sem nunca ter pago o INSS.",
      bullets: [
        "Orientação completa no CadÚnico e comprovação da vulnerabilidade familiar",
        "Defesa para crianças, jovens e adultos com autismo (TEA), paralisia e deficiências",
        "Amparo para portadores de doenças graves incapacitantes",
        "Reversão rápida de negativas indevidas em perícias sociais e médicas",
      ],
      tag: "Proteção Social",
      badge: "Sem Contribuir",
      whatsappMsg:
        "Olá, Dra. Mariana! Gostaria de saber como conseguir o BPC/LOAS para mim ou para um familiar de baixa renda.",
    },
    {
      id: "incapacidade",
      icon: Shield,
      title: "Benefícios por Incapacidade (Auxílio-Doença & Invalidez)",
      shortDesc:
        "Liberação e restabelecimento imediato de benefícios cortados ou negados injustamente na perícia médica do INSS.",
      bullets: [
        "Auxílio por Incapacidade Temporária (antigo Auxílio-Doença)",
        "Aposentadoria por Incapacidade Permanente (antiga Aposentadoria por Invalidez)",
        "Adicional de 25% para aposentados por invalidez que necessitam de acompanhante",
        "Auxílio-Acidente (indenização mensal para quem ficou com sequelas)",
      ],
      tag: "Urgência",
      badge: "Perícia Médica",
      whatsappMsg:
        "Olá, Dra. Mariana! Tive meu benefício de auxílio-doença negado/cortado pelo INSS e preciso de ajuda jurídica urgente.",
    },
    {
      id: "pensao-maternidade",
      icon: Users,
      title: "Pensão por Morte & Salário-Maternidade",
      shortDesc:
        "Garantia de amparo financeiro rápido e seguro para dependentes e segurados em momentos delicados da vida.",
      bullets: [
        "Comprovação de União Estável e Dependência Econômica para concessão rápida",
        "Pensão por morte para cônjuges, companheiros, filhos e pais",
        "Salário-Maternidade para trabalhadoras urbanas, rurais, desempregadas e MEI",
        "Cobrança integral de retroativos devidos desde a data do falecimento ou parto",
      ],
      tag: "Família",
      badge: "Amparo Imediato",
      whatsappMsg:
        "Olá, Dra. Mariana! Preciso de orientação e entrada em pedido de Pensão por Morte / Salário-Maternidade.",
    },
    {
      id: "revisoes-destrave",
      icon: Coins,
      title: "Revisão de Benefícios & Destrave de Negativas",
      shortDesc:
        "Recursos administrativos e ações judiciais para reverter indeferimentos do INSS e receber todos os atrasados devidos com juros e correção.",
      bullets: [
        "Ação Judicial contra negativa indevida de benefícios no INSS",
        "Revisão da Vida Toda e Revisão das Melhores Contribuições",
        "Inclusão de períodos rurais, serviço militar e tempo especial não computados",
        "Recebimento de parcelas retroativas acumuladas direto na conta corrente",
      ],
      tag: "Atrasados",
      badge: "Recuperação",
      whatsappMsg:
        "Olá, Dra. Mariana! Meu pedido foi negado no INSS ou desconfio que o valor do meu benefício está errado e quero revisar.",
    },
  ];

  // Avaliações Reais do Google (5,0 ★ com 29 avaliações)
  const depoimentosGoogle = [
    {
      author: "Eliziany Gomes Silva",
      detail: "1 avaliação no Google",
      stars: 5,
      date: "Avaliação verificada no Google",
      quote:
        "Além de ser uma excelente profissional, é uma pessoa muito atenciosa e prestativa. Tirou minha dúvida com clareza, paciência e me passou muita confiança. Dá para perceber o cuidado que ela tem com as pessoas. Recomendo de coração!",
      highlight: "Cuidado genuíno com as pessoas e clareza impecável",
    },
    {
      author: "Claudio Kanuto Gonçalves",
      detail: "8 avaliações · 3 fotos no Google",
      stars: 5,
      date: "Avaliação verificada no Google",
      quote:
        "Excelente profissional. Não fica enrolando. Bom atendimento e preço justo.",
      highlight: "Sem enrolação, atendimento direto e preço justo",
    },
    {
      author: "Carol Moreira Chaves",
      detail: "9 avaliações no Google",
      stars: 5,
      date: "Avaliação verificada no Google",
      quote:
        "Excelente profissional, muito atencioso e competente!",
      highlight: "Extrema competência e dedicação",
    },
    {
      author: "deniapit Morato",
      detail: "1 avaliação no Google",
      stars: 5,
      date: "Avaliação verificada no Google",
      quote:
        "A Mariana é extremamente atenciosa e prestativa, resolveu tudo muito rápido!",
      highlight: "Atendimento ágil e resolução rápida",
    },
    {
      author: "Júlia Eduarda Vasconcelos Gontijo",
      detail: "4 avaliações no Google",
      stars: 5,
      date: "Avaliação verificada no Google",
      quote:
        "A Dra. Mariana é uma excelente profissional, extremamente atenciosa, disposta, recomendo demais!!!",
      highlight: "Disposição e atenção total em cada etapa",
    },
    {
      author: "Paty Mendes",
      detail: "1 avaliação no Google",
      stars: 5,
      date: "Avaliação verificada no Google",
      quote:
        "Está de parabéns excelente profissional super indico 👏🏼👏🏼👏🏼",
      highlight: "Super indicada por quem conhece",
    },
    {
      author: "Emylly Santana",
      detail: "2 avaliações · 2 fotos no Google",
      stars: 5,
      date: "Avaliação verificada no Google",
      quote:
        "Atendeu todas as minhas expectativas, adorei!",
      highlight: "Superou todas as expectativas",
    },
    {
      author: "Romulo Morato",
      detail: "1 avaliação no Google",
      stars: 5,
      date: "Avaliação verificada no Google",
      quote:
        "Dra Mariana consigo uma ótima advogada previdência . Indico ótima profissional.",
      highlight: "Referência em advocacia previdenciária",
    },
    {
      author: "Claudio Bessa Nascimento",
      detail: "Local Guide · 65 avaliações no Google",
      stars: 5,
      date: "Avaliação verificada no Google",
      quote:
        "Recomendo com toda certeza. Trabalho impecável e muita seriedade.",
      highlight: "Avaliação de Local Guide nível ouro",
    },
    {
      author: "Cristiane Santos",
      detail: "Local Guide · 8 avaliações no Google",
      stars: 5,
      date: "Avaliação verificada no Google",
      quote:
        "Excelente profissional. Muito esclarecedora e ética.",
      highlight: "Ética e clareza no atendimento",
    },
    {
      author: "Ricardo Amaral",
      detail: "4 avaliações no Google",
      stars: 5,
      date: "Avaliação verificada no Google",
      quote:
        "Excelente e comprometida profissional!!!",
      highlight: "Compromisso real com o cliente",
    },
    {
      author: "Ana Cristina Corsi Pereira",
      detail: "2 avaliações no Google",
      stars: 5,
      date: "Avaliação verificada no Google",
      quote:
        "Excelente profissional, muito dedicada e atenciosa em tudo!",
      highlight: "Dedicação e carinho com cada caso",
    },
  ];

  // Diferenciais Competitivos
  const diferenciais = [
    {
      icon: Sparkles,
      title: "Direito Previdenciário Sem Complicação",
      description:
        "Traduzimos as leis complexas e as regras confusas do INSS em linguagem simples, humana e acessível, para você entender cada detalhe do seu benefício.",
    },
    {
      icon: Clock,
      title: "Sem Enrolação e com Resolução Ágil",
      description:
        "Como nossos próprios clientes afirmam no Google: nosso trabalho é ágil, focado em resultados rápidos e sem perda desnecessária de tempo.",
    },
    {
      icon: HeartHandshake,
      title: "Atendimento Humanizado & Cuidado com as Pessoas",
      description:
        "Você não é apenas um número de processo. Aqui cada história é acolhida com paciência, carinho, empatia e compromisso ético inegociável.",
    },
    {
      icon: BadgeCheck,
      title: "Transparência Total & Preço Justo",
      description:
        "Honorários claros, justos e condizentes com a tabela da OAB. Sem cobranças surpresas e com diagnóstico honesto sobre a viabilidade real do seu caso.",
    },
    {
      icon: MapPin,
      title: "Sede no Centro de Pitangui & Online para Todo o Brasil",
      description:
        "Atendimento com hora marcada em nossa sede na R. Martinho Campos, 162 - Centro de Pitangui - MG, ou 100% digital com a mesma proximidade e segurança.",
    },
    {
      icon: Star,
      title: "Nota Máxima 5,0 ★ no Google",
      description:
        "100% de avaliações 5 estrelas concedidas por clientes reais que tiveram seus benefícios conquistados e dúvidas esclarecidas com excelência.",
    },
  ];

  // Situações comuns (Diagnóstico Rápido)
  const situacoesDiagnostico = [
    {
      pergunta: "Teve seu benefício negado ou suspenso pelo INSS?",
      orientacao:
        "Não desista! Mais de 60% das negativas do INSS ocorrem por falhas de documentação ou erros de análise pericial que revertemos na Justiça com direito a todos os retroativos.",
      cta: "Quero Destravar Meu Benefício",
      area: "Destrave de Benefício Negado",
    },
    {
      pergunta: "Está perto de se aposentar e não sabe a melhor regra?",
      orientacao:
        "A Reforma da Previdência criou 5 regras de transição diferentes. Escolher a errada pode fazer você perder até 40% do valor mensal para o resto da vida.",
      cta: "Quero um Planejamento Seguro",
      area: "Planejamento Previdenciário",
    },
    {
      pergunta: "Trabalhou na roça ou em atividades com insalubridade?",
      orientacao:
        "Períodos rurais a partir dos 12 anos de idade e tempos de trabalho insalubre (ruído, graxa, calor, saúde) podem antecipar sua aposentadoria em vários anos.",
      cta: "Comprovar Meu Tempo Especial / Rural",
      area: "Aposentadorias do INSS",
    },
    {
      pergunta: "Tem familiar idoso ou com deficiência sem renda?",
      orientacao:
        "O BPC/LOAS garante 1 salário mínimo mensal mesmo para quem nunca pagou o INSS, desde que comprovada a condição socioeconômica da família.",
      cta: "Saber Como Pedir o BPC/LOAS",
      area: "BPC / LOAS",
    },
  ];

  // FAQ
  const faqs = [
    {
      question: "O que fazer se o INSS negou o meu pedido de aposentadoria ou auxílio?",
      answer:
        "O primeiro passo é não aceitar a negativa como definitiva. O INSS erra frequentemente na análise de documentos e laudos médicos. Temos um prazo legal para entrar com recurso administrativo ou ingressar com uma Ação Judicial na Justiça Federal, onde um perito judicial neutro avaliará seu caso. Além de buscar a concessão, você tem direito a receber todos os valores atrasados desde o dia do primeiro pedido.",
    },
    {
      question: "O que é o Planejamento Previdenciário e por que ele é fundamental?",
      answer:
        "O Planejamento Previdenciário é um estudo técnico completo do seu histórico profissional (CNIS, carteiras de trabalho e carnês). Ele calcula com precisão matemática em qual das regras de transição você terá a melhor aposentadoria, quanto você deve recolher daqui para frente para aumentar o valor e qual é a data exata para requerer o benefício sem perder dinheiro.",
    },
    {
      question: "Quem nunca pagou o INSS pode receber algum benefício mensal?",
      answer:
        "Sim! O BPC/LOAS (Benefício de Prestação Continuada da Lei Orgânica da Assistência Social) garante um salário mínimo mensal para idosos com 65 anos ou mais e para pessoas com deficiência física, mental ou enfermidades graves de qualquer idade que vivam em situação de vulnerabilidade familiar. Não exige contribuição prévia ao INSS.",
    },
    {
      question: "Como funciona o atendimento se eu morar fora de Pitangui?",
      answer:
        "Nosso atendimento online é completo, humanizado e extremamente seguro. Atendemos clientes de todo o estado de Minas Gerais e de qualquer lugar do Brasil por WhatsApp, ligação ou videochamada. O envio de documentos é feito de forma simples pelo celular e você acompanha cada andamento com total transparência.",
    },
    {
      question: "Quais documentos preciso para que a Dra. Mariana analise o meu caso?",
      answer:
        "Para a consulta inicial, os principais documentos são: documento de identificação com foto (RG ou CNH), CPF, comprovante de endereço atualizado, Carteiras de Trabalho (todas que tiver) e o extrato CNIS (que pode ser baixado facilmente pelo aplicativo Meu INSS). Em casos de auxílio-doença ou BPC, laudos e receitas médicas também são essenciais.",
    },
    {
      question: "Quanto tempo demora para sair a resposta de um processo previdenciário?",
      answer:
        "Na via administrativa (direto no INSS), o prazo costuma variar de 30 a 90 dias após a instrução completa. Quando é necessário recorrer à Justiça Federal, o tempo médio varia de acordo com a vara, mas a grande vantagem é que todo o período de espera é pago retroativamente com juros e correção monetária na hora da vitória.",
    },
  ];

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen bg-white font-sans text-slate-800 antialiased selection:bg-[#c5a059] selection:text-[#060f1e]">
        {/* ========================================================================= */}
        {/* 1. TOP NOTICE / PRE-HEADER                                               */}
        {/* ========================================================================= */}
        <div className="border-b border-[#1c3a63] bg-gradient-to-r from-[#060f1e] via-[#0a1628] to-[#0e1f38] px-4 py-2 text-white">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2 font-medium">
              <span className="flex size-2 rounded-full bg-[#dfb967] animate-pulse" />
              <span className="text-[#f3dfa7]">
                Atendimento Especializado em Direito Previdenciário &bull; INSS
              </span>
              <span className="hidden sm:inline text-slate-400">|</span>
              <span className="hidden sm:inline text-slate-300">
                Pitangui - MG e Online para Todo o Brasil
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
                <span className="text-slate-300">(29 avaliações no Google)</span>
              </a>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-1 font-semibold text-[#dfb967] hover:underline"
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
              aria-label="Mariana Corsi Advocacia Previdenciária - Início"
              onClick={closeMenu}
              className="flex shrink-0 items-center gap-3 sm:gap-3.5 transition-opacity hover:opacity-95 mr-4"
            >
              <div className="relative size-12 sm:size-13 lg:size-14 shrink-0">
                <Image
                  src={LOGO_SYMBOL_SRC}
                  alt="Monograma MC - Mariana Corsi Advocacia Previdenciária"
                  fill
                  priority
                  unoptimized
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-cinzel text-base sm:text-lg lg:text-xl font-extrabold tracking-[0.14em] text-[#0a1628] leading-tight">
                  MARIANA CORSI
                </span>
                <span className="text-[9.5px] sm:text-[10.5px] lg:text-[11.5px] font-bold tracking-[0.2em] text-[#83591c] uppercase mt-0.5">
                  ADVOCACIA PREVIDENCIÁRIA
                </span>
              </div>
            </a>

            {/* Desktop Navigation Menu (Center) */}
            <nav
              aria-label="Navegação principal"
              className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8 whitespace-nowrap text-[11px] xl:text-xs font-semibold tracking-[0.08em] xl:tracking-[0.1em] ml-auto mr-6 xl:mr-10"
            >
              <a className="nav-link" href="#especialidades">
                Especialidades
              </a>
              <a className="nav-link" href="#sobre">
                A Advogada
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
                Contato & Sede
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
                <WhatsAppIcon size={14} className="text-[#060f1e]" />
                <span>Consulta WhatsApp</span>
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
                    className="py-1.5 text-slate-800 hover:text-[#83591c]"
                    href="#inicio"
                    onClick={closeMenu}
                  >
                    Início
                  </a>
                  <a
                    className="py-1.5 text-slate-800 hover:text-[#83591c]"
                    href="#especialidades"
                    onClick={closeMenu}
                  >
                    Especialidades do INSS
                  </a>
                  <a
                    className="py-1.5 text-slate-800 hover:text-[#83591c]"
                    href="#sobre"
                    onClick={closeMenu}
                  >
                    Sobre a Dra. Mariana Corsi
                  </a>
                  <a
                    className="py-1.5 text-slate-800 hover:text-[#83591c]"
                    href="#diferenciais"
                    onClick={closeMenu}
                  >
                    Nossos Diferenciais
                  </a>
                  <a
                    className="py-1.5 text-slate-800 hover:text-[#83591c]"
                    href="#avaliacoes"
                    onClick={closeMenu}
                  >
                    Avaliações no Google (5.0 ★)
                  </a>
                  <a
                    className="py-1.5 text-slate-800 hover:text-[#83591c]"
                    href="#faq"
                    onClick={closeMenu}
                  >
                    Perguntas Frequentes
                  </a>
                  <a
                    className="py-1.5 text-slate-800 hover:text-[#83591c]"
                    href="#contato"
                    onClick={closeMenu}
                  >
                    Sede em Pitangui & Contato
                  </a>

                  <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
                    <GlowingButton
                      variant="gold"
                      size="md"
                      href={getWhatsAppUrl()}
                      target="_blank"
                      className="w-full justify-center"
                    >
                      <WhatsAppIcon size={16} className="text-[#060f1e]" />
                      <span>Falar no WhatsApp</span>
                    </GlowingButton>
                    <a
                      href={`tel:${WHATSAPP_NUMBER}`}
                      className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 py-3 text-xs font-bold text-slate-700 hover:bg-slate-50"
                    >
                      <Phone size={14} className="text-[#83591c]" />
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
          className="relative overflow-hidden bg-gradient-to-b from-[#060f1e] via-[#0a1628] to-[#0e1f38] text-white py-14 sm:py-20 lg:py-24"
        >
          {/* Subtle Ambient Decorative Lights */}
          <div className="pointer-events-none absolute -top-40 -left-40 size-96 rounded-full bg-[#c5a059]/15 blur-3xl" />
          <div className="pointer-events-none absolute top-1/2 -right-40 size-96 rounded-full bg-[#1c3a63]/40 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#dfb967_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

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
                  <div className="inline-flex items-center gap-2.5 rounded-full border border-[#c5a059]/40 bg-[#060f1e]/80 px-4 py-1.5 text-[11px] font-bold tracking-[0.16em] uppercase text-[#dfb967] shadow-sm backdrop-blur-md">
                    <Scale size={14} className="text-[#dfb967]" />
                    <span>Advocacia Previdenciária Especializada &bull; INSS</span>
                  </div>
                </motion.div>

                {/* H1 Headline */}
                <motion.h1
                  variants={fadeInUp}
                  className="font-cinzel text-3xl font-extrabold leading-[1.18] tracking-tight sm:text-4xl md:text-5xl text-white"
                >
                  Garantimos o seu{" "}
                  <span className="text-gradient-gold">melhor benefício</span> do INSS,
                  sem complicação e sem enrolação.
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  variants={fadeInUp}
                  className="mt-6 text-base text-slate-300 sm:text-lg sm:leading-relaxed"
                >
                  Planejamento previdenciário estratégico, concessão de aposentadorias,
                  BPC/LOAS e liberação de auxílios negados. Atendimento humanizado,
                  acolhedor e transparente pela{" "}
                  <strong className="text-white font-semibold">
                    Dra. Mariana Corsi
                  </strong>
                  , presencial em Pitangui - MG e online para todo o Brasil.
                </motion.p>

                {/* Authority Badges Checklist */}
                <motion.div
                  variants={fadeInUp}
                  className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2 text-xs sm:text-sm text-slate-200"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#dfb967] shrink-0" />
                    <span>Nota máxima 5,0 ★ no Google (29 avaliações)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#dfb967] shrink-0" />
                    <span>100% Especialista em Direito Previdenciário</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#dfb967] shrink-0" />
                    <span>Atendimento direto, acolhedor e com preço justo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#dfb967] shrink-0" />
                    <span>Sede física em Pitangui - MG + Atendimento Online</span>
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
                    <WhatsAppIcon size={18} className="text-[#060f1e]" />
                    <span>Analisar Meu Benefício no WhatsApp</span>
                  </GlowingButton>

                  <a
                    href="#especialidades"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-white/5 px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition-all hover:border-[#dfb967] hover:bg-white/10"
                  >
                    <span>Conhecer Especialidades</span>
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
                    className="text-[#dfb967] hover:underline flex items-center gap-1"
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
                  <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#c5a059]/40 via-[#dfb967]/10 to-transparent blur-md" />

                  {/* Main Portrait Card */}
                  <div className="relative overflow-hidden rounded-2xl border-2 border-[#c5a059]/50 bg-[#0a1628] shadow-2xl">
                    <div className="relative aspect-[4/5] w-full overflow-hidden">
                      <Image
                        src={FOTO_HERO_SRC}
                        alt="Dra. Mariana Corsi - Advogada Previdenciária em Pitangui - MG"
                        fill
                        priority
                        className="object-cover object-top filter contrast-[1.03]"
                      />

                      {/* Gradient Overlay for bottom text legibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#060f1e] via-[#060f1e]/20 to-transparent" />

                      {/* Card Lower Badge */}
                      <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-[#c5a059]/40 bg-[#060f1e]/90 p-3.5 backdrop-blur-md">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-cinzel text-sm sm:text-base font-bold text-white tracking-wide">
                              Dra. Mariana Corsi
                            </p>
                            <p className="text-[10px] sm:text-xs font-semibold text-[#dfb967] uppercase tracking-wider mt-0.5">
                              Advocacia Previdenciária &bull; INSS
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
                  <div className="hidden sm:flex absolute -top-5 -right-5 items-center gap-2.5 rounded-xl border border-[#c5a059]/60 bg-[#060f1e]/95 px-4 py-2.5 shadow-xl backdrop-blur-md">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-[#c5a059]/20 text-[#dfb967]">
                      <Scale size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#dfb967]">
                        Compromisso
                      </p>
                      <p className="text-xs font-bold text-white">
                        Sem Enrolação
                      </p>
                    </div>
                  </div>

                  {/* Floating Trust Card Bottom-Left */}
                  <div className="hidden sm:flex absolute -bottom-5 -left-5 items-center gap-2.5 rounded-xl border border-slate-700 bg-[#0a1628]/95 px-4 py-2.5 shadow-xl backdrop-blur-md">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-[#25D366]/20 text-[#25D366]">
                      <WhatsAppIcon size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-300">
                        Atendimento Rápido
                      </p>
                      <p className="text-xs font-bold text-white">
                        Online & Presencial
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
        <section className="border-y border-slate-200 bg-[#faf9f6] py-8 sm:py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1 text-2xl sm:text-3xl font-extrabold text-[#0a1628]">
                  <span>5,0</span>
                  <div className="flex text-amber-500">
                    <Star size={18} className="fill-amber-400 text-amber-400" />
                  </div>
                </div>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#83591c] mt-1">
                  Nota Máxima Google
                </p>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                  29 avaliações 100% 5 estrelas
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0a1628]">
                  100%
                </div>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#83591c] mt-1">
                  Foco Previdenciário
                </p>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                  Especialista exclusiva em INSS
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0a1628]">
                  Agilidade
                </div>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#83591c] mt-1">
                  Sem Enrolação
                </p>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                  Preço justo e clareza total
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#0a1628]">
                  Nacional
                </div>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#83591c] mt-1">
                  Sede MG & Online
                </p>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                  Atendimento em todo o Brasil
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. DIAGNOSTIC INTERACTIVE SECTION ("VOCÊ SE IDENTIFICA?")                */}
        {/* ========================================================================= */}
        <section className="py-14 sm:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <div className="eyebrow-gold justify-center mb-3">
                Diagnóstico Previdenciário Rápido
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a1628]">
                Você se identifica com alguma dessas situações com o INSS?
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Não enfrente o INSS sozinho nem abra mão dos seus direitos conquistados
                com anos de trabalho. Veja como podemos te ajudar:
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
              {situacoesDiagnostico.map((sit, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-[#faf9f6] p-6 sm:p-8 transition-all hover:border-[#c5a059] hover:shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start gap-3.5 mb-3">
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#c5a059]/20 text-[#83591c]">
                        <AlertCircle size={20} />
                      </div>
                      <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#0a1628] leading-snug">
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
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#83591c] hover:text-[#0a1628] transition-colors cursor-pointer"
                    >
                      <span>{sit.cta}</span>
                      <ArrowRight size={14} />
                    </button>

                    <a
                      href={getWhatsAppUrl(`Olá, Dra. Mariana! ${sit.pergunta}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex size-9 items-center justify-center rounded-lg bg-[#25D366] text-white hover:brightness-110 transition-all shadow-xs"
                      aria-label="Falar no WhatsApp sobre esta dúvida"
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
        {/* 6. PILARES DE ATUAÇÃO / ESPECIALIDADES PREVIDENCIÁRIAS                    */}
        {/* ========================================================================= */}
        <section
          id="especialidades"
          className="relative bg-gradient-to-b from-[#060f1e] via-[#0a1628] to-[#0e1f38] text-white py-16 sm:py-24"
        >
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
              <div className="eyebrow-light justify-center mb-3">
                Especialidades Previdenciárias &bull; INSS
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
                Como defendemos os seus direitos junto à Previdência
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300">
                Atuação artesanal e combativa em todas as fases: requerimento
                administrativo no INSS, planejamento prévio e ações judiciais
                com pedido de liminar e retroativos.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {areasAtuacao.map((area) => {
                const IconComponent = area.icon;
                return (
                  <div
                    key={area.id}
                    className="group relative flex flex-col justify-between rounded-2xl border border-slate-700/80 bg-[#0e1f38]/90 p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#c5a059] hover:shadow-2xl hover:shadow-[#c5a059]/10"
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#c5a059]/20 to-[#dfb967]/10 border border-[#c5a059]/30 text-[#dfb967] group-hover:scale-105 transition-transform">
                          <IconComponent size={22} />
                        </div>
                        <span className="rounded-full border border-[#c5a059]/40 bg-[#c5a059]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#dfb967]">
                          {area.badge}
                        </span>
                      </div>

                      {/* Card Title */}
                      <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-[#dfb967] transition-colors">
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
                              className="text-[#dfb967] shrink-0 mt-0.5"
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
                        className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#c5a059]/50 bg-white/5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#dfb967] transition-all hover:bg-[#c5a059] hover:text-[#060f1e] hover:border-[#c5a059]"
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
            <div className="mt-14 rounded-2xl border-2 border-[#c5a059]/60 bg-gradient-to-r from-[#060f1e] via-[#0a1628] to-[#0e1f38] p-8 sm:p-10 shadow-2xl">
              <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
                <div>
                  <div className="eyebrow-light mb-2">
                    Não Sabe Qual o Seu Caso?
                  </div>
                  <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-white">
                    Fale diretamente com a Dra. Mariana Corsi
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-300 max-w-2xl">
                    Envie uma mensagem contando brevemente a sua situação. Faremos uma
                    triagem rápida e gratuita para indicar o caminho mais vantajoso.
                  </p>
                </div>

                <GlowingButton
                  variant="gold"
                  size="lg"
                  href={getWhatsAppUrl(
                    "Olá, Dra. Mariana! Gostaria de uma avaliação para saber qual é o benefício previdenciário correto para o meu caso."
                  )}
                  target="_blank"
                  className="shrink-0"
                >
                  <WhatsAppIcon size={17} className="text-[#060f1e]" />
                  <span>Tirar Dúvida Agora</span>
                </GlowingButton>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. SOBRE A ADVOGADA (DRA. MARIANA CORSI)                                  */}
        {/* ========================================================================= */}
        <section id="sobre" className="py-16 sm:py-24 bg-white overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Photo on Left */}
              <div className="relative lg:col-span-5">
                <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
                  {/* Subtle Accent Glow */}
                  <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-[#c5a059]/30 to-transparent blur-lg" />

                  <div className="relative overflow-hidden rounded-2xl border-2 border-[#c5a059]/60 bg-[#0a1628] shadow-2xl">
                    <div className="relative aspect-[4/5] w-full">
                      <Image
                        src={FOTO_SOBRE_SRC}
                        alt="Dra. Mariana Corsi - Advogada Previdenciária"
                        fill
                        className="object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#060f1e]/80 via-transparent to-transparent" />

                      <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/20 bg-black/60 p-3.5 backdrop-blur-md text-white text-center">
                        <p className="font-cinzel text-base font-bold text-[#dfb967]">
                          Dra. Mariana Corsi
                        </p>
                        <p className="text-[11px] text-slate-200 mt-0.5">
                          Advogada Previdenciarista &bull; OAB/MG
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio & Details on Right */}
              <div className="lg:col-span-7">
                <div className="eyebrow-gold mb-3">Sobre a Titular</div>

                <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0a1628] leading-tight">
                  Direito Previdenciário sem complicação, com cuidado e sem enrolação.
                </h2>

                <div className="mt-6 space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                  <p>
                    A <strong className="text-[#0a1628]">Dra. Mariana Corsi</strong> é
                    advogada especialista em Direito Previdenciário, dedicada
                    exclusivamente à defesa dos direitos dos trabalhadores, segurados do
                    INSS, idosos e pessoas com deficiência.
                  </p>
                  <p>
                    Com atuação sólida e reconhecida em Pitangui - MG e atendimento
                    digital em todo o Brasil, sua advocacia é pautada em quatro pilares
                    fundamentais destacados pelos próprios clientes:{" "}
                    <strong>rigor técnico, acolhimento humano, transparência total e ausência de enrolação</strong>.
                  </p>
                  <p>
                    No escritório Mariana Corsi Advocacia Previdenciária, você não é
                    atendido por robôs ou repassado para intermediários: seu caso é
                    estudado com profundidade para garantir a máxima rentabilidade e
                    segurança na sua aposentadoria ou benefício do INSS.
                  </p>
                </div>

                {/* Quote Box */}
                <div className="mt-6 rounded-xl border-l-4 border-[#c5a059] bg-[#faf9f6] p-4 sm:p-5">
                  <p className="italic text-sm text-slate-800">
                    &ldquo;Dá para perceber o cuidado que ela tem com as pessoas.
                    Excelente profissional, não fica enrolando, bom atendimento e preço
                    justo.&rdquo;
                  </p>
                  <p className="mt-2 text-xs font-bold text-[#83591c] uppercase tracking-wider">
                    — Síntese das avaliações públicas dos clientes no Google (Nota 5,0 ★)
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
                    <WhatsAppIcon size={16} className="text-[#060f1e]" />
                    <span>Falar Diretamente com a Dra. Mariana</span>
                  </GlowingButton>

                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-800 transition-colors hover:border-[#c5a059] hover:text-[#83591c]"
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
        <section id="diferenciais" className="py-16 sm:py-24 bg-[#faf9f6] border-t border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
              <div className="eyebrow-gold justify-center mb-3">
                Por Que Escolher Nosso Escritório
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0a1628]">
                Diferenciais que garantem a segurança do seu benefício
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Uma experiência jurídica acolhedora, transparente e sem burocracias
                desnecessárias.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {diferenciais.map((dif, idx) => {
                const IconComp = dif.icon;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs transition-all hover:border-[#c5a059] hover:shadow-md"
                  >
                    <div className="flex size-12 items-center justify-center rounded-xl bg-[#c5a059]/15 text-[#83591c] mb-5">
                      <IconComp size={22} />
                    </div>
                    <h3 className="font-cinzel text-lg font-bold text-[#0a1628]">
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
                Simples, Transparente e Seguro
              </div>
              <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0a1628]">
                Como funciona o seu atendimento previdenciário
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-600">
                Do primeiro contato ao recebimento do benefício com retroativos na sua
                conta corrente:
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
              <div className="relative rounded-2xl border border-slate-200 bg-[#faf9f6] p-6 text-center">
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#0a1628] text-[#dfb967] font-bold text-lg mb-4">
                  1
                </div>
                <h3 className="font-cinzel text-base font-bold text-[#0a1628]">
                  Contato Inicial
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Você clica no botão de WhatsApp, relata sua situação e envia seus
                  documentos básicos pelo celular ou agenda na sede.
                </p>
              </div>

              <div className="relative rounded-2xl border border-slate-200 bg-[#faf9f6] p-6 text-center">
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#0a1628] text-[#dfb967] font-bold text-lg mb-4">
                  2
                </div>
                <h3 className="font-cinzel text-base font-bold text-[#0a1628]">
                  Análise Técnica
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  A Dra. Mariana analisa seu extrato CNIS, carteiras de trabalho e laudos
                  para diagnosticar seu direito com precisão.
                </p>
              </div>

              <div className="relative rounded-2xl border border-slate-200 bg-[#faf9f6] p-6 text-center">
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#0a1628] text-[#dfb967] font-bold text-lg mb-4">
                  3
                </div>
                <h3 className="font-cinzel text-base font-bold text-[#0a1628]">
                  Estratégia Sob Medida
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Apresentamos a via mais vantajosa (requerimento no INSS ou ação judicial)
                  sempre com clareza sobre valores e prazos.
                </p>
              </div>

              <div className="relative rounded-2xl border border-slate-200 bg-[#faf9f6] p-6 text-center">
                <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-[#0a1628] text-[#dfb967] font-bold text-lg mb-4">
                  4
                </div>
                <h3 className="font-cinzel text-base font-bold text-[#0a1628]">
                  Benefício Conquistado
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Acompanhamento rigoroso até a concessão da aposentadoria/benefício e o
                  pagamento dos retroativos na sua conta.
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
                <WhatsAppIcon size={17} className="text-[#060f1e]" />
                <span>Iniciar Minha Análise no WhatsApp</span>
              </GlowingButton>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 10. AVALIAÇÕES REAIS DO GOOGLE (PROVA SOCIAL)                             */}
        {/* ========================================================================= */}
        <section
          id="avaliacoes"
          className="py-16 sm:py-24 bg-gradient-to-b from-[#060f1e] via-[#0a1628] to-[#0e1f38] text-white"
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
                  (29 avaliações verificadas)
                </span>
              </div>
            </div>

            {/* Grid of Reviews */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {depoimentosGoogle.map((dep, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-700/80 bg-[#0e1f38]/80 p-6 backdrop-blur-sm flex flex-col justify-between hover:border-[#c5a059] transition-all"
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
                    <p className="text-xs font-bold text-[#dfb967] mb-2 uppercase tracking-wider">
                      {dep.highlight}
                    </p>

                    {/* Quote */}
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                      &ldquo;{dep.quote}&rdquo;
                    </p>
                  </div>

                  {/* Author */}
                  <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center gap-3">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#c5a059]/20 text-xs font-bold text-[#dfb967]">
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
                className="inline-flex items-center gap-2 rounded-lg border border-slate-600 bg-white/5 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:border-[#dfb967] hover:bg-white/10 transition-colors"
              >
                <GoogleIcon size={16} />
                <span>Ver Todas as 29 Avaliações no Google Meu Negócio</span>
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
              <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0a1628]">
                Perguntas Frequentes sobre o INSS e Benefícios
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
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-[#faf9f6] transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-[#0a1628] hover:text-[#83591c] transition-colors cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <span className="pr-4">{faq.question}</span>
                      <ChevronDown
                        size={18}
                        className={`shrink-0 text-[#83591c] transition-transform duration-200 ${
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

            <div className="mt-12 rounded-2xl border border-[#c5a059]/40 bg-[#faf9f6] p-6 text-center">
              <p className="font-cinzel text-base font-bold text-[#0a1628]">
                Ainda tem alguma dúvida sobre o seu caso específico?
              </p>
              <p className="mt-1 text-xs sm:text-sm text-slate-600">
                A Dra. Mariana Corsi está à disposição para analisar sua situação.
              </p>
              <div className="mt-4">
                <GlowingButton
                  variant="gold"
                  size="md"
                  href={getWhatsAppUrl("Olá, Dra. Mariana! Tenho uma dúvida sobre meu benefício do INSS e gostaria de orientação.")}
                  target="_blank"
                >
                  <WhatsAppIcon size={15} className="text-[#060f1e]" />
                  <span>Tirar Dúvida no WhatsApp</span>
                </GlowingButton>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 12. CONTATO & SEDE EM PITANGUI - MG                                       */}
        {/* ========================================================================= */}
        <section id="contato" className="py-16 sm:py-24 bg-[#faf9f6] border-t border-slate-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Contact Info Column */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="eyebrow-gold mb-3">Atendimento & Sede</div>
                  <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0a1628]">
                    Entre em contato e agende sua consulta
                  </h2>
                  <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                    Atendimento presencial no Centro de Pitangui - MG ou 100% digital
                    com atendimento em todo o Brasil. Escolha a forma mais conveniente
                    para você.
                  </p>

                  <div className="mt-8 space-y-4">
                    <div className="flex items-start gap-3.5">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#c5a059]/20 text-[#83591c]">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#0a1628] uppercase tracking-wider">
                          Endereço da Sede
                        </p>
                        <p className="text-sm text-slate-700 mt-0.5">
                          {ADDRESS_TEXT}
                        </p>
                        <a
                          href={GOOGLE_MAPS_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 inline-flex items-center gap-1 text-xs font-bold text-[#83591c] hover:underline"
                        >
                          <span>Como chegar no Google Maps</span>
                          <ArrowUpRight size={12} />
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#c5a059]/20 text-[#83591c]">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#0a1628] uppercase tracking-wider">
                          Telefone & WhatsApp
                        </p>
                        <a
                          href={getWhatsAppUrl()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-slate-800 hover:text-[#83591c] mt-0.5 block"
                        >
                          {PHONE_DISPLAY}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#c5a059]/20 text-[#83591c]">
                        <InstagramIcon size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#0a1628] uppercase tracking-wider">
                          Instagram Oficial
                        </p>
                        <a
                          href={INSTAGRAM_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-slate-800 hover:text-[#83591c] mt-0.5 block"
                        >
                          {INSTAGRAM_HANDLE} (+3.170 seguidores)
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#c5a059]/20 text-[#83591c]">
                        <Clock size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#0a1628] uppercase tracking-wider">
                          Horário de Funcionamento
                        </p>
                        <p className="text-sm text-slate-700 mt-0.5">
                          Segunda a Sexta: 09:00 às 18:00
                        </p>
                        <p className="text-xs text-slate-500">
                          Atendimento com horário previamente agendado
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
                    <WhatsAppIcon size={18} className="text-[#060f1e]" />
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
                          alt="Mariana Corsi"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <p className="font-cinzel text-sm font-bold text-[#0a1628]">
                          Mariana Corsi Advocacia Previdenciária
                        </p>
                        <p className="text-[10px] text-slate-500">
                          Pitangui - MG
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 rounded-md bg-amber-50 px-2 py-1 text-xs font-bold text-amber-700 border border-amber-200">
                      <Star size={12} className="fill-amber-400 text-amber-500" />
                      <span>5,0 ★ Google</span>
                    </div>
                  </div>

                  {/* Interactive Map Container */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
                    <iframe
                      title="Localização do Escritório Mariana Corsi Advocacia Previdenciária em Pitangui - MG"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.864985923956!2d-45.2130!3d-19.6800!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa77f5255018671%3A0x75653b62ff919246!2sR.%20Martinho%20Campos%2C%20162%20-%20Centro%2C%20Pitangui%20-%20MG%2C%2035650-000!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
                      className="size-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>

                  <div className="mt-4 flex items-center justify-between text-xs text-slate-600">
                    <span>Rua Martinho Campos, 162 - Centro</span>
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#83591c] hover:underline flex items-center gap-1"
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
        <footer className="border-t border-[#1c3a63] bg-gradient-to-b from-[#060f1e] to-[#040913] text-white py-12 sm:py-16">
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
                      alt="Mariana Corsi Advocacia Previdenciária"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-cinzel text-lg sm:text-xl font-extrabold tracking-[0.14em] text-white leading-tight">
                      MARIANA CORSI
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#dfb967] uppercase mt-0.5">
                      ADVOCACIA PREVIDENCIÁRIA
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
                    className="flex size-9 items-center justify-center rounded-lg border border-slate-700 bg-white/5 text-slate-300 transition-colors hover:border-[#dfb967] hover:text-[#dfb967]"
                    aria-label="Instagram da Dra. Mariana Corsi"
                  >
                    <InstagramIcon size={16} />
                  </a>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-9 items-center justify-center rounded-lg border border-slate-700 bg-white/5 text-slate-300 transition-colors hover:border-[#25D366] hover:text-[#25D366]"
                    aria-label="WhatsApp da Dra. Mariana Corsi"
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
                <p className="font-cinzel text-xs font-bold uppercase tracking-[0.16em] text-[#dfb967] mb-4">
                  Especialidades
                </p>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li>
                    <a className="footer-link" href="#especialidades">
                      Planejamento Previdenciário
                    </a>
                  </li>
                  <li>
                    <a className="footer-link" href="#especialidades">
                      Aposentadorias do INSS
                    </a>
                  </li>
                  <li>
                    <a className="footer-link" href="#especialidades">
                      BPC / LOAS (Idosos & PCD)
                    </a>
                  </li>
                  <li>
                    <a className="footer-link" href="#especialidades">
                      Auxílio-Doença & Invalidez
                    </a>
                  </li>
                  <li>
                    <a className="footer-link" href="#especialidades">
                      Pensão por Morte & Maternidade
                    </a>
                  </li>
                  <li>
                    <a className="footer-link" href="#especialidades">
                      Revisão de Benefícios & Atrasados
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal & Office */}
              <div className="lg:col-span-4">
                <p className="font-cinzel text-xs font-bold uppercase tracking-[0.16em] text-[#dfb967] mb-4">
                  Sede & Contato
                </p>
                <div className="space-y-2.5 text-xs text-slate-300">
                  <p className="flex items-start gap-2">
                    <MapPin size={14} className="text-[#dfb967] shrink-0 mt-0.5" />
                    <span>{ADDRESS_TEXT}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <WhatsAppIcon size={14} className="text-[#25D366] shrink-0" />
                    <span>WhatsApp: {PHONE_DISPLAY}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail size={14} className="text-[#dfb967] shrink-0" />
                    <span>{EMAIL_CONTACT}</span>
                  </p>
                  <p className="text-[11px] text-slate-400 mt-3 pt-3 border-t border-slate-800">
                    Atendimento de Segunda a Sexta, das 09:00 às 18:00.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Copyright & OAB Ethics Notice */}
            <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 text-center md:text-left">
              <p>
                &copy; {new Date().getFullYear()} Mariana Corsi Advocacia Previdenciária.
                Todos os direitos reservados.
              </p>
              <p className="max-w-xl text-[10px] leading-relaxed">
                Este site tem caráter estritamente informativo e não constitui consulta
                jurídica formal, em estrita conformidade com o Código de Ética e
                Disciplina da Ordem dos Advogados do Brasil (OAB).
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
            aria-label="Falar com a Dra. Mariana Corsi no WhatsApp"
          >
            <span className="absolute -top-1 -right-1 flex size-3">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#dfb967] opacity-75" />
              <span className="relative inline-flex size-3 rounded-full bg-[#dfb967]" />
            </span>
            <WhatsAppIcon size={22} className="text-white" />
            <span className="hidden sm:inline text-xs font-bold tracking-wide uppercase">
              Falar no WhatsApp
            </span>
          </a>
        </div>

        {/* ========================================================================= */}
        {/* 15. MODAL DE CONSULTA RÁPIDA PREVIDENCIÁRIA                               */}
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
                className="relative z-10 w-full max-w-lg rounded-2xl border-2 border-[#c5a059]/60 bg-gradient-to-b from-[#060f1e] to-[#0a1628] p-6 sm:p-8 text-white shadow-2xl"
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
                      alt="Mariana Corsi"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-cinzel text-lg font-bold text-white">
                      Análise do Caso Previdenciário
                    </h3>
                    <p className="text-xs text-[#dfb967] font-semibold">
                      {modalArea}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Para analisar seu direito com sigilo e rapidez, você será redirecionado
                  ao WhatsApp oficial da{" "}
                  <strong className="text-white">Dra. Mariana Corsi</strong>.
                </p>

                <div className="mt-5 space-y-2 rounded-xl border border-slate-700 bg-white/5 p-4 text-xs text-slate-300">
                  <p className="font-bold text-white uppercase tracking-wider text-[11px] text-[#dfb967]">
                    O que ter em mãos (se possível):
                  </p>
                  <ul className="space-y-1 pl-1">
                    <li>&bull; Nome completo e cidade de residência</li>
                    <li>&bull; Carteira de Trabalho ou Extrato CNIS (Meu INSS)</li>
                    <li>&bull; Carta de indeferimento (caso o INSS tenha negado)</li>
                  </ul>
                </div>

                <div className="mt-6 flex flex-col gap-2.5">
                  <GlowingButton
                    variant="gold"
                    size="md"
                    href={getWhatsAppUrl(
                      `Olá, Dra. Mariana! Gostaria de uma análise sobre: ${modalArea}.`
                    )}
                    target="_blank"
                    className="w-full justify-center"
                  >
                    <WhatsAppIcon size={16} className="text-[#060f1e]" />
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
