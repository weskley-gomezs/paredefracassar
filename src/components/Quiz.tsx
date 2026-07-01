/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ArrowRight, ShieldCheck, Sparkles, Clock, RefreshCw, BookOpen, AlertCircle } from 'lucide-react';
import { quizQuestions, diagnosisResults } from '../data/quizData';
import { QuizAnswers, DiagnosisResult } from '../types';

interface QuizProps {
  onComplete: (category: 'casamento' | 'financas' | 'fe' | 'ansiedade' | 'familia') => void;
}

export default function Quiz({ onComplete }: QuizProps) {
  const [step, setStep] = useState<'intro' | 'questions' | 'loading' | 'result'>('intro');
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [loadingText, setLoadingText] = useState('Analisando suas respostas...');
  const [calculatedCategory, setCalculatedCategory] = useState<'casamento' | 'financas' | 'fe' | 'ansiedade' | 'familia'>('fe');

  // Loading animation phases
  useEffect(() => {
    if (step === 'loading') {
      const timers = [
        setTimeout(() => setLoadingText('Mapeando padrões de comportamento diário...'), 600),
        setTimeout(() => setLoadingText('Consultando direcionamentos práticos nas Escrituras...'), 1200),
        setTimeout(() => {
          // Calculate result
          const counts: Record<string, number> = { casamento: 0, financas: 0, fe: 0, ansiedade: 0, familia: 0 };
          (Object.values(answers) as ('casamento' | 'financas' | 'fe' | 'ansiedade' | 'familia')[]).forEach((val) => {
            counts[val] = (counts[val] || 0) + 1;
          });
          
          let maxCat: 'casamento' | 'financas' | 'fe' | 'ansiedade' | 'familia' = 'fe';
          let maxCount = -1;
          
          // Determine dominant category, favoring "fe" on ties
          const categories: ('casamento' | 'financas' | 'fe' | 'ansiedade' | 'familia')[] = [
            'ansiedade', 'casamento', 'financas', 'familia', 'fe'
          ];
          
          categories.forEach((cat) => {
            if (counts[cat] > maxCount) {
              maxCount = counts[cat];
              maxCat = cat;
            }
          });

          setCalculatedCategory(maxCat);
          setStep('result');
          onComplete(maxCat);
        }, 2000)
      ];

      return () => timers.forEach(clearTimeout);
    }
  }, [step, answers, onComplete]);

  const handleStart = () => {
    setStep('questions');
    setCurrentQuestionIdx(0);
    setAnswers({});
  };

  const handleAnswerSelect = (value: 'casamento' | 'financas' | 'fe' | 'ansiedade' | 'familia') => {
    const updatedAnswers = { ...answers, [quizQuestions[currentQuestionIdx].id]: value };
    setAnswers(updatedAnswers);

    if (currentQuestionIdx < quizQuestions.length - 1) {
      setCurrentQuestionIdx((prev) => prev + 1);
    } else {
      setStep('loading');
    }
  };

  const resultData = useMemo(() => {
    return diagnosisResults[calculatedCategory];
  }, [calculatedCategory]);

  return (
    <div id="quiz-root" className="w-full max-w-3xl mx-auto px-4 py-8 sm:py-12">
      <AnimatePresence mode="wait">
        {/* STEP 1: INTRO (REPLACES HERO) */}
        {step === 'intro' && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-center"
            id="quiz-intro-section"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#1C1814] border border-[#54432E] text-[#C5A880] rounded-full text-xs font-mono uppercase tracking-widest mb-8 shadow-sm" id="badge-warning">
              <AlertCircle size={14} className="shrink-0 text-[#C5A880]" />
              <span>Confronto Direto • Diagnóstico Sem Anestesia</span>
            </div>
            
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-[1.15] mb-6 max-w-2xl mx-auto">
              Se você está cansado de <span className="underline decoration-[#8C7A5B] underline-offset-4">andar em círculos</span> e fracassar nas mesmas tentativas...
            </h1>

            <p className="font-sans text-base sm:text-lg text-stone-300 leading-relaxed max-w-xl mx-auto mb-10">
              No casamento, nas finanças ou na sua própria mente. Isso não é falta de esforço ou de força de vontade. É simplesmente a falta de um <strong className="text-white font-semibold">direcionamento prático</strong>.
            </p>

            <button
              onClick={handleStart}
              id="btn-start-quiz"
              className="w-full sm:w-auto px-8 py-4 bg-[#8C7A5B] hover:bg-[#A3906F] text-white font-sans font-medium rounded-lg text-base shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-3 group mx-auto cursor-pointer"
            >
              <span>Vamos descobrir o que está travando você</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="mt-8 flex items-center justify-center gap-4 text-xs font-mono text-stone-500" id="intro-disclaimers">
              <span className="flex items-center gap-1">
                <ShieldCheck size={14} className="text-[#8C7A5B]" />
                Totalmente Privado
              </span>
              <span>•</span>
              <span>Respostas Não Salvas</span>
              <span>•</span>
              <span>Leva 1 Minuto</span>
            </div>
          </motion.div>
        )}

        {/* STEP 2: QUESTIONS */}
        {step === 'questions' && (
          <motion.div
            key={`question-${currentQuestionIdx}`}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-2xl mx-auto bg-[#121212] border border-stone-800 p-6 sm:p-10 rounded-2xl shadow-2xl"
            id={`quiz-question-box-${currentQuestionIdx}`}
          >
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-white leading-snug tracking-tight mb-8">
              {quizQuestions[currentQuestionIdx].text}
            </h2>

            <div className="space-y-4" id="quiz-options-list">
              {quizQuestions[currentQuestionIdx].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswerSelect(option.value)}
                  className="w-full text-left p-4 sm:p-5 border border-stone-800 hover:border-[#8C7A5B] bg-[#161616] hover:bg-[#1E1E1E] rounded-xl transition-all duration-200 flex items-start gap-4 group cursor-pointer"
                  id={`btn-option-${currentQuestionIdx}-${idx}`}
                >
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-stone-800 text-stone-400 group-hover:bg-[#8C7A5B] group-hover:text-white text-xs font-mono font-bold shrink-0 transition-colors">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="font-sans text-sm sm:text-base text-stone-300 group-hover:text-white leading-relaxed transition-colors pt-0.5">
                    {option.text}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* STEP 3: LOADING TRANSITION */}
        {step === 'loading' && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-12"
            id="quiz-loading-section"
          >
            <div className="flex justify-center mb-6">
              <RefreshCw className="animate-spin text-[#8C7A5B]" size={40} />
            </div>
            <h3 className="font-serif text-2xl text-white tracking-tight mb-3">
              Processando seu perfil...
            </h3>
            <p className="font-sans text-stone-400 italic text-sm animate-pulse max-w-sm mx-auto">
              {loadingText}
            </p>
          </motion.div>
        )}

        {/* STEP 4: DIAGNOSTIC RESULT & PRODUCT HERO */}
        {step === 'result' && resultData && (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-full text-[#1A1A1A]"
            id="quiz-result-section"
          >
            {/* Elegant Integrated Editorial Header */}
            <div className="w-full text-center mb-10 pt-4" id="result-editorial-header">
              <div className="inline-block border-b border-stone-300 pb-3 px-6">
                <span className="font-serif text-[#8C7A5B] font-bold text-lg tracking-[0.25em] uppercase">✝ EDIÇÕES PROVERBIAL</span>
              </div>
            </div>

            {/* DIAGNOSTIC PANEL */}
            <div className="border border-[#E8E4D9] bg-[#FDFCF9] rounded-2xl p-6 sm:p-10 mb-12 shadow-sm relative overflow-hidden" id="diagnosis-card">
              {/* Elegant header stamp */}
              <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-[#A8A29E]/50 uppercase tracking-widest hidden sm:block">
                Ref. {calculatedCategory.toUpperCase()}-2026
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F5F2EB] border border-[#C5A880]/30 text-[#8C7A5B] rounded-full text-xs font-mono uppercase tracking-widest mb-6 shadow-xs">
                <Sparkles size={14} className="text-[#8C7A5B]" />
                <span>Diagnóstico Concluído</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] leading-snug tracking-tight mb-4">
                {resultData.title}
              </h2>

              <p className="font-sans text-base text-[#6B665E] leading-relaxed mb-6">
                {resultData.description}
              </p>

              {/* Turning Point (A Virada) */}
              <div className="relative border-l-4 border-[#8C7A5B] pl-6 my-8 italic text-[#1A1A1A] font-serif text-lg sm:text-xl leading-relaxed bg-[#F5F2EB] py-4 pr-6 rounded-r-xl shadow-xs">
                <span className="absolute -top-4 left-1 text-6xl text-[#8C7A5B]/15 font-serif select-none pointer-events-none">“</span>
                "{resultData.turningPoint}"
              </div>

              <div className="mt-6">
                <h4 className="font-sans font-semibold text-sm text-[#1A1A1A] uppercase tracking-wider mb-4">
                  O que você vai descobrir e destravar hoje:
                </h4>
                <ul className="space-y-3 text-[#44403C] text-sm sm:text-base">
                  {resultData.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-[#E8E4D9]/40 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={14} className="text-[#8C7A5B] font-bold" />
                      </div>
                      <span className="text-stone-700 leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* PRODUCT HERO WRAPPER */}
            <div className="text-center max-w-2xl mx-auto pt-4" id="product-hero-container">
              <div className="font-mono text-xs uppercase tracking-widest text-[#8C7A5B] mb-2 font-semibold">A Resposta Prática para o seu Diagnóstico</div>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight leading-tight mb-6">
                100 Estudos Bíblicos para Parar de Fracassar
              </h3>
              <p className="font-sans text-base sm:text-lg text-[#6B665E] leading-relaxed mb-10">
                Um mapa de navegação espiritual contendo <strong className="font-semibold text-[#1A1A1A]">100 estudos bíblicos altamente práticos</strong> desenhados especificamente para te dar um norte rápido quando o peito apertar, as finanças preocuparem ou a alma cansar.
              </p>

              {/* Enhanced 3D Book Presentation */}
              <div className="flex justify-center mb-12" id="book-graphic-container">
                <div className="relative group">
                  {/* Book shadow on ground */}
                  <div className="absolute -bottom-4 left-4 right-4 h-5 bg-black/30 blur-md rounded-full group-hover:scale-105 transition-all duration-300" />
                  
                  {/* Book cover image */}
                  <img 
                    src="https://i.imgur.com/X8pL60b.png" 
                    alt="100 Estudos Bíblicos para Parar de Fracassar" 
                    className="relative w-[210px] sm:w-[240px] h-auto rounded-r-2xl rounded-l-md shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2 group-hover:rotate-1"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Absolute bonus badge overlapping book */}
                  <div className="absolute -top-4 -right-4 bg-[#8C7A5B] hover:bg-[#736349] text-white px-3.5 py-2 rounded-full text-[10px] font-mono tracking-widest uppercase shadow-lg flex items-center gap-1 z-20 transform hover:scale-105 transition-transform cursor-pointer">
                    <BookOpen size={11} className="animate-pulse" />
                    <span>+ MAPA MENTAL</span>
                  </div>
                </div>
              </div>

              {/* HONEST ANCHOR PRICING */}
              <div className="bg-[#FAF8F2] border border-[#E8E4D9] rounded-2xl py-6 px-6 max-w-sm mx-auto mb-8 text-center shadow-sm relative overflow-hidden" id="pricing-box">
                {/* Decorative tag */}
                <div className="absolute top-0 right-0 bg-[#8C7A5B] text-white text-[9px] font-mono tracking-wider px-3 py-1 rounded-bl-lg uppercase">
                  Melhor Oferta
                </div>
                
                <span className="text-[10px] font-mono text-[#8C7A5B] uppercase tracking-widest block mb-1 font-semibold">Acesso Imediato • Ebook PDF</span>
                
                <div className="flex items-center justify-center gap-3 my-2">
                  <span className="font-sans text-sm text-[#8C7A5B]/60 line-through">R$ 97,00</span>
                  <span className="font-serif text-4xl font-extrabold text-[#1A1A1A]">R$ 37,90</span>
                </div>
                
                <p className="text-[11px] font-sans text-[#8C7A5B] mt-1 italic">
                  *Pagamento único. Menos do que o valor de um café por semana.
                </p>
                
                <div className="h-[1px] bg-[#E8E4D9] w-full my-3" />
                
                <p className="text-[10px] font-mono text-emerald-700 font-medium flex items-center justify-center gap-1">
                  ✓ Incluso Bônus do Mapa Mental da Bíblia
                </p>
              </div>

              {/* DIRECT REDIRECT BUTTON WITH DEEP MICROCOPY */}
              <a
                href="https://pay.kiwify.com.br/placeholder"
                target="_blank"
                rel="noreferrer"
                id="btn-buy-result"
                className="w-full sm:w-auto px-10 py-5 bg-[#8C7A5B] hover:bg-[#736349] text-white font-sans font-semibold rounded-lg text-lg shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group mx-auto cursor-pointer"
              >
                <span>Quero parar de andar sem rumo</span>
                <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform duration-200" />
              </a>

              {/* Secure Checkout Trust details */}
              <div className="mt-5 flex items-center justify-center gap-5 text-[11px] font-mono text-[#8C7A5B]/80" id="trust-details">
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  Entrega Imediata no Email
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <ShieldCheck size={12} />
                  Compra 100% Segura
                </span>
              </div>

              {/* Visual Guarantee Stamp Badge Row */}
              <div className="max-w-md mx-auto mt-12 bg-white border border-[#E8E4D9] rounded-2xl p-5 flex items-center gap-4 text-left shadow-xs">
                <div className="w-12 h-12 bg-[#F5F2EB] rounded-full flex items-center justify-center shrink-0 text-[#8C7A5B]">
                  <ShieldCheck size={26} />
                </div>
                <div>
                  <h5 className="font-serif text-sm font-semibold text-[#1A1A1A]">Risco Zero • Garantia de 7 Dias</h5>
                  <p className="text-xs text-[#6B665E] leading-relaxed">Se você não amar os estudos e sentir o impacto nos primeiros 7 dias, devolvemos seu dinheiro integralmente.</p>
                </div>
              </div>

              {/* Prompt message to continue reading */}
              <div className="mt-16 flex flex-col items-center text-[#8C7A5B] animate-bounce" id="scroll-prompt">
                <span className="text-xs font-mono uppercase tracking-widest mb-1.5 font-semibold">Conheça toda a estrutura abaixo</span>
                <span className="text-lg">↓</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
