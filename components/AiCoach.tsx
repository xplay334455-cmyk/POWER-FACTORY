import React, { useState } from 'react';
import { askAiCoach } from '../services/geminiService';
import { LoadingState } from '../types';

export const AiCoach: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setStatus(LoadingState.LOADING);
    setAnswer('');
    
    const response = await askAiCoach(question);
    setAnswer(response);
    setStatus(LoadingState.SUCCESS);
  };

  return (
    <div className="bg-pf-dark-gray border-2 border-pf-red p-8 rounded-xl shadow-[0_0_20px_rgba(139,0,0,0.3)] max-w-3xl mx-auto mt-10">
      <div className="text-center mb-6">
        <h3 className="text-3xl font-cairo font-bold text-white mb-2">مدرب الذكاء الاصطناعي</h3>
        <p className="text-gray-400">اسأل الكوتش "باور" عن أي تمرين أو نصيحة</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="مثال: كيف أبدأ تمرين العقلة؟"
            className="w-full bg-black border border-gray-700 rounded-lg px-4 py-4 text-white focus:border-pf-red focus:outline-none transition-colors font-cairo text-right"
            disabled={status === LoadingState.LOADING}
          />
        </div>
        <button
          type="submit"
          disabled={status === LoadingState.LOADING}
          className={`w-full bg-pf-red hover:bg-red-700 text-white font-bold py-4 rounded-lg transition-all uppercase tracking-wider font-cairo flex justify-center items-center gap-2 ${status === LoadingState.LOADING ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {status === LoadingState.LOADING ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              جاري التحليل...
            </>
          ) : (
            'احصل على الإجابة'
          )}
        </button>
      </form>

      {answer && (
        <div className="mt-6 bg-black/50 border-r-4 border-pf-red p-4 rounded animate-fade-in">
          <p className="text-lg text-gray-200 font-cairo leading-relaxed">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
};