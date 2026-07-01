/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Quiz from './components/Quiz';
import SalesContent from './components/SalesContent';
import { Heart } from 'lucide-react';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<'casamento' | 'financas' | 'fe' | 'ansiedade' | 'familia' | null>(null);

  const handleQuizComplete = (category: 'casamento' | 'financas' | 'fe' | 'ansiedade' | 'familia') => {
    setSelectedCategory(category);
    
    // Smooth scroll down slightly to results if needed
    setTimeout(() => {
      const el = document.getElementById('quiz-root');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const isQuizActive = !selectedCategory;

  return (
    <div 
      className={`min-h-screen flex flex-col transition-colors duration-500 ${
        isQuizActive 
          ? 'bg-[#090909] text-[#F5F5F5] selection:bg-[#333333] selection:text-[#FFFFFF]' 
          : 'bg-[#FDFCF9] text-[#1A1A1A] selection:bg-[#F5F2EB] selection:text-[#1A1A1A]'
      }`} 
      id="app-container"
    >
      {/* Main Content Area */}
      <main className="flex-grow flex flex-col justify-center items-center" id="main-content">
        <Quiz onComplete={handleQuizComplete} />
        
        {selectedCategory && (
          <SalesContent selectedCategory={selectedCategory} />
        )}
      </main>
    </div>
  );
}
