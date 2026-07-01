/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, X, Shield, ChevronDown, ChevronUp, ArrowRight, Heart, Sparkles, BookOpen, Clock, FileText } from 'lucide-react';

interface SalesContentProps {
  selectedCategory: 'casamento' | 'financas' | 'fe' | 'ansiedade' | 'familia';
}

export default function SalesContent({ selectedCategory }: SalesContentProps) {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  const getCategoryThemeName = () => {
    switch (selectedCategory) {
      case 'casamento': return 'Restauração do Casamento e Lar';
      case 'financas': return 'Sabedoria Financeira e Provisão';
      case 'fe': return 'Renovo da Fé e Hábito de Oração';
      case 'ansiedade': return 'Paz Mental e Alívio da Ansiedade';
      case 'familia': return 'União Familiar e Conexão Espiritual';
      default: return 'Direção e Paz Diária';
    }
  };

  const chapters = [
    {
      num: "01",
      title: "Quando a ansiedade tentar roubar seu fôlego",
      description: "Estudos cirúrgicos com passagens específicas para acalmar o batimento cardíaco acelerado e silenciar os pensamentos de tragédia antes de dormir. Você vai aprender a entregar o amanhã com base em promessas inabaláveis."
    },
    {
      num: "02",
      title: "Quando as contas vencerem e o medo da escassez chegar",
      description: "Para dias em que o saldo está curto e a dúvida financeira aperta. Instruções sobre provisão, fidelidade e como reatar seu posicionamento espiritual sobre o dinheiro, transformando desespero em sabedoria de gestão."
    },
    {
      num: "03",
      title: "Quando houver silêncio pesado ou conflito no casamento",
      description: "Como reagir a palavras duras ou à frieza do cônjuge sem responder na mesma moeda. Chaves bíblicas práticas para desarmar discussões destrutivas e guiar o relacionamento de volta à cumplicidade mútua."
    },
    {
      num: "04",
      title: "Quando você se sentir longe de Deus e incapaz de orar",
      description: "O roteiro prático para quem sente que sua oração bate no teto e que sua fé esfriou. Como falar com Deus com honestidade brutal (assim como os salmistas faziam) e quebrar a barreira do silêncio espiritual."
    },
    {
      num: "05",
      title: "Quando o cansaço físico e mental esgotar suas forças",
      description: "Direcionamento para aqueles dias em que você acorda com vontade de desistir de tudo. Entenda como acessar o verdadeiro descanso que recarrega a alma, distinguindo o cansaço do corpo do esgotamento espiritual."
    },
    {
      num: "06",
      title: "Quando as decisões exigirem uma sabedoria que você não tem",
      description: "Para encruzilhadas profissionais, familiares ou pessoais. Como usar os Provérbios e as cartas paulinas para obter um crivo claro sobre qual caminho escolher, eliminando a paralisia da dúvida."
    },
    {
      num: "07",
      title: "Quando o luto, a perda ou a frustração baterem à porta",
      description: "Como passar por vales de dor profunda sem perder a esperança ou se revoltar contra o Criador. Passagens de consolo ativo que funcionam como um bálsamo para feridas emocionais abertas."
    },
    {
      num: "08",
      title: "Como educar e blindar seus filhos em um mundo hostil",
      description: "Instruções específicas para proteger a mente e o coração dos seus filhos. Saiba como agir no dia a dia para criar referências de integridade espiritual e autoridade com amor sob o seu teto."
    },
    {
      num: "09",
      title: "Quando o desânimo ou a tentação parecerem fortes demais",
      description: "Como fechar brechas emocionais por onde o vício, a murmuração e os pensamentos impuros tentam se instalar. Estratégias bíblicas de autodefesa mental contra ataques espirituais silenciosos."
    },
    {
      num: "10",
      title: "Quando você se perguntar qual é, afinal, o seu propósito na Terra",
      description: "Uma jornada para descobrir que o seu valor não está nas suas conquistas visíveis, mas em quem Deus planejou que você fosse. Como alinhar sua profissão, sua rotina e suas escolhas ao plano soberano de Deus."
    }
  ];

  const faqs = [
    {
      q: "E se eu não conseguir manter o hábito todos os dias?",
      a: "Este material foi desenhado exatamente para quem falha. Cada estudo foi projetado para durar de 7 a 10 minutos no máximo. Se você esquecer ou pular um dia, o formato não cumulativo permite que você simplesmente retome do ponto em que precisar, sem culpa ou sensação de atraso."
    },
    {
      q: "Isso substitui ir à igreja ou ler a Bíblia completa?",
      a: "De forma alguma. Os estudos servem como uma ponte prática para te ajudar a entender a Bíblia e aplicá-la em momentos críticos. Eles complementam sua comunhão na igreja e estimulam que você leia o texto sagrado diretamente, com muito mais clareza e contexto."
    },
    {
      q: "Funciona para quem nunca leu a Bíblia antes?",
      a: "Sim, foi escrito especialmente para você. Nós eliminamos o linguajar acadêmico ou teológico complexo. Cada passagem é explicada com foco absoluto na prática, traduzindo conceitos antigos para as realidades do seu casamento, bolso e rotina de hoje."
    },
    {
      q: "E se eu não tiver tempo de estudar todos os dias?",
      a: "Se você tem tempo de olhar o celular por 10 minutos na cama ou no banheiro, você tem tempo para este material. O ebook é focado na lei do menor esforço com maior resultado: poucas linhas com alto impacto prático para a sua tomada de decisão."
    },
    {
      q: "Os estudos são apenas teoria motivacional?",
      a: "Não. Detestamos frases motivacionais vazias. Cada estudo termina com uma seção chamada 'Ação Prática de Hoje'. É um comando claro do tipo 'faça isso hoje na sua conversa com seu cônjuge' ou 'leia este versículo em voz alta quando o peito apertar'."
    },
    {
      q: "Como recebo o material? É na hora mesmo?",
      a: "Sim, a entrega é 100% digital e automática. Assim que o pagamento (via Pix ou cartão) for aprovado, o sistema envia o link para download do ebook em PDF e do bônus diretamente para o seu e-mail cadastrado."
    },
    {
      q: "Consigo ler em qualquer celular ou computador?",
      a: "Perfeitamente. O ebook está formatado em PDF de alta resolução, otimizado para leitura em smartphones, tablets, Kindles e computadores. A fonte e o espaçamento foram testados para não cansar as vistas mesmo no brilho do celular."
    },
    {
      q: "Eu posso imprimir o material se preferir?",
      a: "Sim! O arquivo do ebook e do Mapa Mental não possuem travas de impressão. Você pode imprimir em casa, encadernar ou até dar de presente físico para alguém que você ama."
    },
    {
      q: "Este material serve para quem já é cristão há muitos anos?",
      a: "Sim, com certeza. Mesmo quem tem anos de caminhada na fé frequentemente se pega agindo de forma puramente racional e esquecendo as ferramentas espirituais básicas nas crises. Este livro serve como um lembrete prático e rápido de ativação espiritual em dias de batalha."
    },
    {
      q: "Tem alguma pegadinha ou letra miúda na garantia?",
      a: "Nenhuma. A garantia é incondicional por 7 dias. Você compra, faz o download, lê e avalia. Se achar que os estudos não te deram um norte ou não serviram para você, basta enviar um e-mail para o suporte e devolvemos 100% do seu dinheiro, sem perguntas desagradáveis."
    },
    {
      q: "Por que o ebook custa tão barato (apenas R$ 37,90)?",
      a: "Nosso propósito é tornar a Palavra acessível ao maior número possível de pessoas que estão passando por crises emocionais ou espirituais severas hoje. O preço cobre nossos custos de hospedagem e anúncios sem criar uma barreira financeira para quem está no sufoco."
    },
    {
      q: "Posso comprar para presentear um amigo ou familiar que está sofrendo?",
      a: "Sim! Na tela de checkout, basta preencher os dados de entrega com o e-mail da pessoa que receberá o presente, ou comprar com o seu e-mail e enviar o PDF diretamente para ela via WhatsApp ou e-mail pessoal."
    }
  ];

  return (
    <div id="sales-content-root" className="w-full bg-[#FDFCF9] text-[#1A1A1A] font-sans pb-24">
      {/* SECTION 1: DIFICULDADES (A CENA REAL) */}
      <section className="py-16 sm:py-24 px-4 max-w-4xl mx-auto border-t border-[#E8E4D9]" id="section-difficulties">
        <div className="text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[#8C7A5B] block mb-2">A Realidade sem Filtro</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight leading-tight max-w-2xl mx-auto">
            A cena clássica que se repete quase todo início de semana...
          </h2>
        </div>

        <div className="space-y-6 text-[#6B665E] text-base sm:text-lg leading-relaxed font-sans max-w-3xl mx-auto" id="difficulties-narrative">
          <p className="first-letter:float-left first-letter:text-5xl first-letter:sm:text-6xl first-letter:font-serif first-letter:font-bold first-letter:mr-3 first-letter:text-[#8C7A5B] first-letter:leading-none">
            Você abre a Bíblia com a melhor das intenções. Talvez porque o peito estivesse apertado antes de dormir, ou porque um conflito no casamento te deixou sem chão durante o jantar. Você folheia os capítulos, lê alguns versículos de forma aleatória em Salmos ou Mateus, mas... <strong className="text-[#1A1A1A] font-semibold">parece que as palavras não conversam com o que você está vivendo.</strong>
          </p>
          <p>
            O texto parece distante. A linguagem soa complexa. Você fecha o livro com uma sutil pontada de frustração e um sentimento silencioso de culpa, pensando: <em>'Eu deveria entender isso melhor. Eu deveria conseguir.'</em>
          </p>
          <p>
            O resultado? Você volta a enfrentar as crises diárias usando apenas as suas próprias forças intelectuais. E, inevitavelmente, o cansaço volta. A paciência com os filhos some. O medo de faltar dinheiro amanhã aperta a garganta. Você continua rezando por milagres, mas vive um cotidiano sem rumo espiritual claro.
          </p>
          
          <div className="bg-[#F5F2EB] border border-[#E8E4D9] p-6 sm:p-8 rounded-xl my-10 italic font-serif text-[#1A1A1A] text-lg text-center shadow-xs">
            "O problema nunca foi a falta de fé ou de vontade de buscar a Deus. O problema é tentar navegar por uma floresta densa de ensinamentos sem um mapa de cabeceira que aponte o norte imediato."
          </div>
        </div>
      </section>

      {/* SECTION 2: IMAGINE SE (A CENA COM A MUDANÇA JÁ ACONTECIDA) */}
      <section className="py-16 sm:py-24 bg-[#F5F2EB] border-y border-[#E8E4D9] px-4" id="section-imagine-if">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-[#8C7A5B] block mb-2">Um Novo Cenário Diário</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight leading-tight max-w-xl mx-auto">
              Imagine viver os seus dias com este nível de clareza...
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[#6B665E] text-sm sm:text-base leading-relaxed" id="imagine-scenes">
            {/* Scene 1: Morning/Anxiety */}
            <div className="bg-white p-6 rounded-xl border border-[#E8E4D9] shadow-xs">
              <div className="w-8 h-8 rounded-full bg-[#F5F2EB] text-[#8C7A5B] flex items-center justify-center font-bold text-sm mb-4">01</div>
              <h4 className="font-serif font-medium text-lg text-[#1A1A1A] mb-3">Manhãs sem Aperto no Peito</h4>
              <p>
                Você acorda e, antes de olhar as notificações do celular que geram ansiedade imediata, abre o PDF do estudo do dia. Em 8 minutos, uma passagem cirúrgica e uma ação prática blindam a sua mente com foco e serenidade para as próximas horas.
              </p>
            </div>

            {/* Scene 2: Marriage Conflit */}
            <div className="bg-white p-6 rounded-xl border border-[#E8E4D9] shadow-xs">
              <div className="w-8 h-8 rounded-full bg-[#F5F2EB] text-[#8C7A5B] flex items-center justify-center font-bold text-sm mb-4">02</div>
              <h4 className="font-serif font-medium text-lg text-[#1A1A1A] mb-3">Conflitos Desarmados</h4>
              <p>
                Diante de uma resposta ríspida no casamento, você não reage no calor do momento. A sua mente acessa instantaneamente a verdade de controle emotional do capítulo 3. Você fala com mansidão, desarma a briga e protege a paz do seu lar.
              </p>
            </div>

            {/* Scene 3: Money Decision */}
            <div className="bg-white p-6 rounded-xl border border-[#E8E4D9] shadow-xs">
              <div className="w-8 h-8 rounded-full bg-[#F5F2EB] text-[#8C7A5B] flex items-center justify-center font-bold text-sm mb-4">03</div>
              <h4 className="font-serif font-medium text-lg text-[#1A1A1A] mb-3">Decisões com Direção</h4>
              <p>
                Quando a preocupação financeira tenta roubar sua atenção e gerar desespero, você respira fundo sabendo que está debaixo de uma instrução espiritual madura. Suas escolhas de dinheiro passam a ser calmas, cirúrgicas e guiadas por princípios de provisão estável.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CONTEÚDO (OS 10 CAPÍTULOS DE RESPOSTAS) */}
      <section className="py-16 sm:py-24 px-4 max-w-4xl mx-auto" id="section-chapters">
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#8C7A5B] block mb-2">Estrutura do Ebook</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight leading-tight">
            10 Capítulos construídos para serem o seu refúgio ativo nas crises
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#6B665E] max-w-lg mx-auto mt-3">
            Cada capítulo contém 10 estudos práticos aplicados. Nenhuma linha de preenchimento, apenas direcionamento real.
          </p>
        </div>

        <div className="space-y-6" id="chapters-list">
          {chapters.map((chap, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-[#E8E4D9] p-6 rounded-xl hover:border-[#8C7A5B] hover:shadow-sm transition-all duration-200 flex flex-col sm:flex-row gap-5 items-start"
              id={`chapter-card-${idx}`}
            >
              <span className="font-serif text-3xl font-extrabold text-[#8C7A5B]/30 shrink-0 leading-none">
                {chap.num}
              </span>
              <div className="space-y-2">
                <h4 className="font-serif font-medium text-lg text-[#1A1A1A] tracking-tight leading-snug">
                  {chap.title}
                </h4>
                <p className="font-sans text-sm sm:text-base text-[#6B665E] leading-relaxed">
                  {chap.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: COMO FUNCIONA CADA ESTUDO (SIMPLICIDADE) */}
      <section className="py-16 sm:py-20 bg-[#F5F2EB] border-y border-[#E8E4D9] px-4 text-center" id="section-how-it-works">
        <div className="max-w-3xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-[#8C7A5B] block mb-2">Simplicidade e Praticidade</span>
          <h2 className="font-serif text-3xl text-[#1A1A1A] tracking-tight leading-tight mb-4">
            Como funciona a metodologia dos 10 minutos
          </h2>
          <p className="font-sans text-base text-[#6B665E] leading-relaxed mb-12 max-w-xl mx-auto">
            Você não precisa ser especialista em teologia ou saber grego e hebraico. Nós estruturamos o material para ser digerido por qualquer pessoa comum sob qualquer rotina esmagadora.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="steps-container">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#8C7A5B] text-white flex items-center justify-center font-serif text-base font-bold mx-auto mb-4">1</div>
              <h4 className="font-serif text-lg text-[#1A1A1A] font-medium">Você lê a Passagem (2 min)</h4>
              <p className="font-sans text-sm text-[#6B665E] leading-relaxed max-w-xs mx-auto">
                Uma passagem bíblica curtíssima e cirúrgica, extraída na tradução mais simples e de fácil compreensão do mercado nacional.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#8C7A5B] text-white flex items-center justify-center font-serif text-base font-bold mx-auto mb-4">2</div>
              <h4 className="font-serif text-lg text-[#1A1A1A] font-medium">Você entende a Aplicação (5 min)</h4>
              <p className="font-sans text-sm text-[#6B665E] leading-relaxed max-w-xs mx-auto">
                Nós explicamos de forma direta o que aquela verdade tem a ver com a sua ansiedade hoje, com a sua conta bancária hoje ou com o seu casamento.
              </p>
            </div>

            <div className="space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#8C7A5B] text-white flex items-center justify-center font-serif text-base font-bold mx-auto mb-4">3</div>
              <h4 className="font-serif text-lg text-[#1A1A1A] font-medium">Você pratica o Norte (3 min)</h4>
              <p className="font-sans text-sm text-[#6B665E] leading-relaxed max-w-xs mx-auto">
                Uma ação prática inegociável para você fazer imediatamente após ler. Uma tomada de posicionamento que coloca a engrenagem espiritual para rodar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: BÔNUS (O ATALHO) */}
      <section className="py-16 sm:py-24 px-4 max-w-4xl mx-auto" id="section-bonus">
        <div className="border border-[#E8E4D9] bg-white rounded-2xl p-6 sm:p-12 flex flex-col md:flex-row gap-8 items-center shadow-xs" id="bonus-box">
          <div className="space-y-4 md:w-2/3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F5F2EB] border border-[#E8E4D9] text-[#8C7A5B] rounded-full text-xs font-mono uppercase tracking-widest">
              <Sparkles size={14} />
              <span>Bônus Exclusivo de Ativação</span>
            </div>
            
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] tracking-tight leading-tight">
              O Mapa Mental Completo da Bíblia Sagrada
            </h3>

            <p className="font-sans text-[#6B665E] text-base leading-relaxed">
              Não encare isso como um mero brinde ou arquivo extra. Este Mapa Mental é o <strong className="text-[#1A1A1A] font-semibold">atalho de inteligência espiritual</strong> definitivo que evita anos de cansaço e desânimo.
            </p>

            <p className="font-sans text-[#6B665E] text-sm sm:text-base leading-relaxed">
              Através de um fluxo visual extremamente intuitivo, você saberá exatamente onde cada livro se conecta, qual é o contexto de cada aliança e como o Velho Testamento se cumpre no Novo. É o fim de abrir a Bíblia e ficar completamente perdido na cronologia histórica.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-[#8C7A5B] uppercase tracking-wider font-semibold">
              <Check size={16} />
              <span>Entrega automática junto com o Ebook principal</span>
            </div>
          </div>

          <div className="md:w-1/3 flex justify-center w-full" id="bonus-graphic">
            <div className="relative group">
              <div className="absolute -bottom-2 left-4 right-4 h-4 bg-black/10 blur-md rounded-full group-hover:scale-105 transition-all duration-300" />
              <img 
                src="https://i.imgur.com/Lo7Xjs0.png" 
                alt="Mapa Mental Completo da Bíblia Sagrada" 
                className="relative w-[180px] h-auto rounded-xl shadow-xl transition-all duration-300 transform group-hover:-translate-y-1.5 group-hover:rotate-1"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: PARA QUEM É / NÃO É (HONESTIDADE) */}
      <section className="py-16 sm:py-24 bg-[#F5F2EB] border-y border-[#E8E4D9] px-4" id="section-audience">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-[#8C7A5B] block mb-2">Filtro de Compromisso</span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight leading-tight max-w-xl mx-auto">
              Seja honesto consigo mesmo: para quem é este material?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="audience-comparison">
            {/* For Whom */}
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-emerald-100 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-emerald-700 font-serif font-medium text-lg">
                <Check className="text-emerald-600" size={20} />
                <span>ISTO É PARA QUEM:</span>
              </div>
              <ul className="space-y-3 font-sans text-sm sm:text-base text-[#6B665E]">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5">•</span>
                  <span>Sente que a rotina e o cansaço engoliram o hábito de ler a Bíblia e buscar a Deus.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5">•</span>
                  <span>Precisa de direcionamento rápido nas crises em vez de teologia acadêmica complexa.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5">•</span>
                  <span>Deseja respostas cirúrgicas sobre finanças, casamento, ansiedade e família.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5">•</span>
                  <span>Quer começar a praticar a fé no seu cotidiano e não apenas aos domingos na igreja.</span>
                </li>
              </ul>
            </div>

            {/* NOT For Whom */}
            <div className="bg-white p-6 sm:p-8 rounded-xl border border-rose-100 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-rose-700 font-serif font-medium text-lg">
                <X className="text-rose-600" size={20} />
                <span>ISTO NÃO É PARA QUEM:</span>
              </div>
              <ul className="space-y-3 font-sans text-sm sm:text-base text-[#6B665E]">
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 mt-0.5">•</span>
                  <span>Procura uma pílula mágica de enriquecimento rápido ou promessas de milagres fáceis.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 mt-0.5">•</span>
                  <span>Busca um compêndio teológico avançado de hebraico ou grego instrumental de nível de doutorado.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 mt-0.5">•</span>
                  <span>Não tem a menor intenção de separar 10 minutos do dia para ler e aplicar o que foi proposto.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-600 mt-0.5">•</span>
                  <span>Acha que já sabe tudo sobre a Bíblia e não precisa ouvir mais nenhuma instrução prática.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: CHECKLIST COMPLETA DO QUE RECEBE */}
      <section className="py-16 sm:py-24 px-4 max-w-4xl mx-auto" id="section-checklist">
        <div className="text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[#8C7A5B] block mb-2">Transparência Total</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight leading-tight">
            Tudo o que você vai receber hoje na sua área de download
          </h2>
        </div>

        <div className="bg-white border border-[#E8E4D9] p-6 sm:p-8 rounded-2xl max-w-2xl mx-auto space-y-4 shadow-sm" id="checklist-box">
          <div className="flex items-start gap-3 border-b border-[#F5F2EB] pb-4">
            <Check size={20} className="text-[#8C7A5B] shrink-0 mt-0.5" />
            <div>
              <h5 className="font-serif text-[#1A1A1A] font-medium text-base sm:text-lg">O Ebook "100 Estudos Bíblicos para Parar de Fracassar"</h5>
              <p className="font-sans text-xs sm:text-sm text-[#6B665E]">100 estudos bíblicos divididos em 10 capítulos funcionais fáceis de aplicar em 10 minutos (Formato PDF).</p>
            </div>
          </div>

          <div className="flex items-start gap-3 border-b border-[#F5F2EB] pb-4">
            <Check size={20} className="text-[#8C7A5B] shrink-0 mt-0.5" />
            <div>
              <h5 className="font-serif text-[#1A1A1A] font-medium text-base sm:text-lg">Bônus: O Mapa Mental Completo da Bíblia</h5>
              <p className="font-sans text-xs sm:text-sm text-[#6B665E]">Acelerador visual de contextualização cronológica histórica que destrava seu raciocínio (Formato PDF).</p>
            </div>
          </div>

          <div className="flex items-start gap-3 border-b border-[#F5F2EB] pb-4">
            <Check size={20} className="text-[#8C7A5B] shrink-0 mt-0.5" />
            <div>
              <h5 className="font-serif text-[#1A1A1A] font-medium text-base sm:text-lg">Acesso Vitalício sem Mensalidades</h5>
              <p className="font-sans text-xs sm:text-sm text-[#6B665E]">Você paga apenas uma vez e salva os arquivos para ler para sempre, onde e quando quiser.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Check size={20} className="text-[#8C7A5B] shrink-0 mt-0.5" />
            <div>
              <h5 className="font-serif text-[#1A1A1A] font-medium text-base sm:text-lg">Garantia Blindada de Satisfação de 7 Dias</h5>
              <p className="font-sans text-xs sm:text-sm text-[#6B665E]">Seu investimento está 100% protegido. Se não gostar, basta solicitar o reembolso integral imediato.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: GARANTIA (SEGURANÇA TOTAL) */}
      <section className="py-16 sm:py-24 bg-[#F5F2EB] border-y border-[#E8E4D9] px-4 text-center" id="section-guarantee">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full bg-[#FDFCF9] border border-[#E8E4D9] flex items-center justify-center text-[#8C7A5B]">
              <Shield size={32} />
            </div>
          </div>

          <h2 className="font-serif text-3xl text-[#1A1A1A] tracking-tight leading-tight">
            Sua Segurança é Absoluta: Garantia de 7 Dias de Risco Zero
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#6B665E] leading-relaxed max-w-xl mx-auto">
            Nós acreditamos tanto no impacto prático desse material que removemos todo o risco das suas costas. Você baixa os estudos, lê, testa no seu dia a dia e se compromete. Se nos próximos 7 dias você sentir que o material não entregou a clareza e a direção que você precisava, basta enviar um único e-mail para o nosso suporte e faremos o reembolso de cada centavo. Sem burocracia, sem ressentimento.
          </p>
        </div>
      </section>

      {/* SECTION 9: FAQ (INTERACTIVE ACCORDION - MINIMUM 12 QUESTIONS) */}
      <section className="py-16 sm:py-24 px-4 max-w-3xl mx-auto" id="section-faq">
        <div className="text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[#8C7A5B] block mb-2">Dúvidas Frequentes</span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight leading-tight">
            Perguntas Frequentes
          </h2>
          <p className="font-sans text-sm text-[#6B665E] mt-2">
            Respondendo a todas as suas dúvidas ocultas de forma transparente.
          </p>
        </div>

        <div className="space-y-4" id="faq-accordion-list">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIdx === idx;
            return (
              <div 
                key={idx} 
                className="bg-white border border-[#E8E4D9] rounded-xl overflow-hidden transition-all duration-200"
                id={`faq-item-${idx}`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-serif text-[#1A1A1A] font-medium text-base sm:text-lg cursor-pointer hover:bg-[#F5F2EB] transition-colors"
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp size={18} className="text-[#8C7A5B] shrink-0" /> : <ChevronDown size={18} className="text-[#8C7A5B] shrink-0" />}
                </button>
                
                {isOpen && (
                  <div className="p-5 pt-0 border-t border-[#FDFCF9] font-sans text-sm sm:text-base text-[#6B665E] leading-relaxed bg-[#F5F2EB]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 10: CTA FINAL (FECHAMENTO CIRCULAR) */}
      <section className="py-16 sm:py-24 bg-[#1A1A1A] text-[#FDFCF9] text-center px-4" id="section-final-cta">
        <div className="max-w-2xl mx-auto space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-[#C5A880]">A Decisão é Sua</span>
          
          <h2 className="font-serif text-3xl sm:text-4xl text-white tracking-tight leading-tight max-w-xl mx-auto">
            Esta noite você vai deitar com o mesmo peso no peito, ou vai escolher ter um norte claro?
          </h2>

          <p className="font-sans text-sm sm:text-base text-stone-300 leading-relaxed max-w-lg mx-auto">
            Daqui a 12 meses, você lembrará desse momento como o dia em que decidiu parar de andar em círculos e colocou ordem espiritual na sua mente, no seu casamento e na sua casa. Ou lembrará como mais uma oportunidade deixada de lado.
          </p>

          <div className="bg-[#262626] border border-stone-800 rounded-xl p-5 max-w-md mx-auto my-8">
            <span className="font-mono text-[10px] text-stone-400 uppercase tracking-widest block mb-1">Diagnóstico Personalizado Ativo</span>
            <div className="font-serif text-sm text-[#C5A880] italic">
              "Você indicou precisar de renovo prático sobre {getCategoryThemeName()}. Esta resposta está a um toque de distância."
            </div>
          </div>

          <a
            href="https://pay.kiwify.com.br/placeholder"
            target="_blank"
            rel="noreferrer"
            id="btn-buy-final"
            className="w-full sm:w-auto px-10 py-5 bg-[#8C7A5B] hover:bg-[#736349] text-white font-sans font-medium rounded-lg text-lg shadow-lg transition-all duration-200 flex items-center justify-center gap-3 group mx-auto cursor-pointer"
          >
            <span>Quero um norte agora por R$ 37,90</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-xs font-mono text-stone-400" id="final-trust-list">
            <span>Acesso Imediato</span>
            <span className="hidden sm:inline">•</span>
            <span>Sem Mensalidade</span>
            <span className="hidden sm:inline">•</span>
            <span>Garantia de 7 Dias Incondicional</span>
          </div>
        </div>
      </section>
    </div>
  );
}
