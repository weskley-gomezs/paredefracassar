/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Question, DiagnosisResult } from '../types';

export const quizQuestions: Question[] = [
  {
    id: 1,
    text: "Em qual área da sua vida você mais sente que está andando em círculos, sem sair do lugar?",
    options: [
      { text: "No meu casamento ou relacionamento afetivo", value: "casamento" },
      { text: "Nas minhas finanças, sempre no limite ou preocupado com o amanhã", value: "financas" },
      { text: "Na minha vida espiritual, sentindo que Deus está distante e minha fé fria", value: "fe" },
      { text: "Na minha mente, convivendo com uma ansiedade que rouba o meu sono", value: "ansiedade" },
      { text: "Na minha família, lidando com desunião ou falta de paz no lar", value: "familia" }
    ]
  },
  {
    id: 2,
    text: "Quando você tenta mudar ou resolver essa situação, qual é o seu principal obstáculo?",
    options: [
      { text: "Eu simplesmente não sei por onde começar na prática", value: "fe" },
      { text: "Até começo com força, mas logo desisto ou perco a constância", value: "fe" },
      { text: "Não sinto clareza se estou seguindo a direção de Deus ou minha própria cabeça", value: "ansiedade" },
      { text: "Sinto um esgotamento mental e físico que drena minha energia de agir", value: "ansiedade" }
    ]
  },
  {
    id: 3,
    text: "Seja sincero: quando você abre a Bíblia para buscar um conselho ou direção...",
    options: [
      { text: "Não entendo a linguagem e acabo fechando sem absorver nada", value: "fe" },
      { text: "Começo a ler animado, mas me perco entre os capítulos e abandono", value: "fe" },
      { text: "Até leio, mas sinto que o texto é teórico demais e não muda meu dia", value: "casamento" },
      { text: "Quase nunca abro, pois a correria e a falta de hábito me impedem", value: "financas" }
    ]
  },
  {
    id: 4,
    text: "Se você continuar agindo da mesma forma e nada mudar nos próximos 12 meses, como estará?",
    options: [
      { text: "Ainda mais frustrado, estagnado e sentindo que o tempo está passando", value: "ansiedade" },
      { text: "Com a fé fria de vez e desconectado da presença de Deus", value: "fe" },
      { text: "Meus relacionamentos ou minhas finanças estarão ainda mais desgastados", value: "casamento" },
      { text: "O cansaço e o estresse diário terão esgotado completamente minha saúde", value: "ansiedade" }
    ]
  },
  {
    id: 5,
    text: "O que você mais busca e precisa de verdade neste exato momento?",
    options: [
      { text: "Um norte claro, direto e prático sobre o que fazer e como agir diante das crises", value: "fe" },
      { text: "Paz na mente para conseguir deitar a cabeça e descansar sem angústia", value: "ansiedade" },
      { text: "Restauração no meu casamento e sabedoria para superar os conflitos", value: "casamento" },
      { text: "Sabedoria bíblica prática para gerenciar meu dinheiro e vencer a escassez", value: "financas" }
    ]
  }
];

export const diagnosisResults: Record<'casamento' | 'financas' | 'fe' | 'ansiedade' | 'familia', DiagnosisResult> = {
  casamento: {
    category: "casamento",
    title: "Seu diagnóstico: Você quer construir um lar de paz, mas o desgaste diário está minando suas forças.",
    description: "Você tenta manter a calma, relevar falhas e dialogar, mas parece que as mesmas discussões voltam a acontecer por motivos pequenos. O cansaço acumulado se transforma em silêncio ou em discussões ácidas que deixam um vazio no final do dia.",
    turningPoint: "Isso tem solução, e ela é prática: você não precisa de longos discursos teóricos. Precisa de um mapa diário simples para restaurar a união, aprender a calar na hora certa, falar com sabedoria e proteger sua aliança através da verdade bíblica de forma aplicada.",
    details: [
      "Como agir em momentos de silêncio hostil ou palavras duras no casamento.",
      "O segredo bíblico para desarmar discussões antes que elas virem mágoas profundas.",
      "Passos práticos para restabelecer a intimidade e a cumplicidade que o tempo desgastou."
    ]
  },
  financas: {
    category: "financas",
    title: "Seu diagnóstico: Você trabalha duro, mas a preocupação financeira e a incerteza do amanhã roubam sua paz.",
    description: "Parece que você está sempre correndo atrás do prejuízo. O dinheiro chega e some com facilidade, ou as contas estão tão justas que qualquer imprevisto gera um aperto no peito. Essa tensão constante afeta seu sono, seu humor e até seus relacionamentos.",
    turningPoint: "Isso tem solução, e ela é prática: a Bíblia não ensina apenas teorias de dízimo; ela contém um manual completo de sobrevivência e prosperidade honesta. Você precisa de clareza espiritual e regras de sabedoria para estancar o desperdício, agir sob provisão e tomar decisões financeiras guiadas pela Palavra.",
    details: [
      "A verdade libertadora sobre como vencer o medo crônico da escassez e da falta.",
      "Princípios bíblicos práticos de gestão, poupança e eliminação de dívidas emocionais.",
      "Como blindar sua mente contra a ansiedade financeira e abrir caminhos para a provisão."
    ]
  },
  fe: {
    category: "fe",
    title: "Seu diagnóstico: Sua fé esfriou e você se sente vivendo no piloto automático, sem direção clara.",
    description: "Você sabe o que é certo, sabe que deveria orar mais e ler a Bíblia, mas a rotina engoliu sua espiritualidade. Quando tenta orar, sente que suas palavras batem no teto. Existe uma vergonha oculta em se sentir tão morno diante de Deus, enquanto finge que está tudo bem.",
    turningPoint: "Isso tem solução, e ela é prática: o erro não é falta de fé, é tentar carregar fardos pesados que Deus nunca te deu. Você não precisa ler capítulos inteiros sem entender nada ou estudar teologia avançada. Você precisa de um hábito de 10 minutos focado em escutar e aplicar o que é essencial para o seu dia.",
    details: [
      "Como criar um hábito inquebrável de leitura bíblica diária mesmo sem tempo.",
      "O segredo para orar com foco e sinceridade, quebrando o silêncio espiritual.",
      "Como reatar sua conexão com Deus e voltar a sentir paz na sua rotina diária."
    ]
  },
  ansiedade: {
    category: "ansiedade",
    title: "Seu diagnóstico: Seu peito aperta com a ansiedade do futuro e seus pensamentos aceleram à noite.",
    description: "Você deita na cama cansado, mas sua mente se recusa a desligar. Fica repassando conversas, antecipando problemas e criando cenários terríveis. Essa agitação mental constante drena sua energia vital e faz com que você se sinta esgotado antes mesmo do dia começar.",
    turningPoint: "Isso tem solução, e ela é prática: a ansiedade não é falta de esforço ou falha de caráter. É o sinal de alerta de uma mente que perdeu o seu porto seguro. A resposta está em acessar passagens específicas da Palavra que agem como um calmante para a alma, trazendo clareza e paz que excedem o entendimento.",
    details: [
      "O método bíblico para esvaziar a mente antes de dormir e reaver o sono restaurador.",
      "Como diferenciar a preocupação saudável do fardo destrutivo da ansiedade diária.",
      "Passagens exatas para ler e memorizar no momento em que o aperto no peito surgir."
    ]
  },
  familia: {
    category: "familia",
    title: "Seu diagnóstico: Você ama sua família, mas sente distanciamento e falta de harmonia nos relacionamentos do lar.",
    description: "Você se esforça para dar o melhor para quem ama, mas sente que cada um vive no seu próprio mundo ou que há uma barreira invisível de comunicação. A falta de paciência e a irritabilidade frequente criam um ambiente tenso onde deveria haver um refúgio.",
    turningPoint: "Isso tem solução, e ela é prática: liderar e edificar um lar exige sabedoria de condução, não imposição ou brigas. Você precisa de um norte bíblico específico para guiar as conversas, perdoar feridas antigas, restabelecer limites saudáveis com os filhos e trazer a paz de volta para debaixo do seu teto.",
    details: [
      "Como curar relacionamentos familiares rompidos sem precisar forçar conversas artificiais.",
      "A postura bíblica correta para guiar seus filhos no caminho certo mesmo sob influência do mundo.",
      "Como transformar sua casa de um local de passagem para um verdadeiro santuário de paz."
    ]
  }
};
