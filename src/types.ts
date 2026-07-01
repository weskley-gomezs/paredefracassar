/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Option {
  text: string;
  value: 'casamento' | 'financas' | 'fe' | 'ansiedade' | 'familia';
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export interface QuizAnswers {
  [questionId: number]: 'casamento' | 'financas' | 'fe' | 'ansiedade' | 'familia';
}

export interface DiagnosisResult {
  category: 'casamento' | 'financas' | 'fe' | 'ansiedade' | 'familia';
  title: string;
  description: string;
  turningPoint: string;
  details: string[];
}
