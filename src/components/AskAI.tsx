import React, { useState } from 'react';
import { Send, Bot } from 'lucide-react';

export function AskAI() {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState([
    {
      type: 'system',
      content: 'Ask me anything about the podcast content. I\'ll help you find relevant information and insights.',
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setMessages([
      ...messages,
      { type: 'user', content: query },
      { type: 'system', content: 'This is a mock response. In the actual implementation, this would be replaced with an LLM response based on the podcast content.' },
    ]);
    setQuery('');
  };

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col bg-white rounded-lg shadow-sm">
      <div className="flex-1 overflow-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-4 rounded-lg ${
                message.type === 'user'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {message.type === 'system' && (
                <Bot className="h-5 w-5 mb-2 text-indigo-600" />
              )}
              <p className="text-sm">{message.content}</p>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex space-x-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask anything about the podcasts..."
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </form>
    </div>
  );
}