import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';

export function AIPrompts() {
  const prompts = [
    {
      category: "Health",
      questions: [
        "What are Dr. Huberman's top recommendations for better sleep?",
        "How can I optimize my workout recovery according to experts?",
      ]
    },
    {
      category: "Business",
      questions: [
        "What are the key leadership lessons from successful entrepreneurs?",
        "How do top performers maintain work-life balance?",
      ]
    },
    {
      category: "Personal Growth",
      questions: [
        "What are the most effective habits for personal development?",
        "How can I improve my decision-making process?",
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {prompts.map((section, index) => (
        <div key={index} className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">{section.category}</h3>
          <div className="space-y-3">
            {section.questions.map((question, qIndex) => (
              <button
                key={qIndex}
                className="w-full flex items-center justify-between p-3 text-left bg-gray-50 rounded-lg hover:bg-gray-100 group"
              >
                <div className="flex items-center space-x-3">
                  <MessageCircle className="h-5 w-5 text-indigo-600" />
                  <span className="text-sm text-gray-700">{question}</span>
                </div>
                <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-indigo-600 transition-colors" />
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}