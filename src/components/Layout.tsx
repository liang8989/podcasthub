import React from 'react';
import { Mic2, Brain, FileText, Book, UserCircle2, Sparkles } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Layout({ children, activeTab, setActiveTab }: LayoutProps) {
  const tabs = [
    { id: 'podcasts', icon: Mic2, label: 'Podcasts' },
    { id: 'askAI', icon: Brain, label: 'Ask AI' },
    { id: 'documents', icon: FileText, label: 'Documents' },
    { id: 'books', icon: Book, label: '10-Min Books' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Sparkles className="h-8 w-8 text-indigo-600" />
                <span className="ml-2 text-xl font-bold gradient-text">KnowledgeHub</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors">
                Sign In
              </button>
              <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors">
                Join KnowledgeHub
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex h-[calc(100vh-4rem)]">
        <div className="w-64 bg-white shadow-sm">
          <div className="space-y-1 py-4">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center px-6 py-3 text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'text-indigo-600 bg-indigo-50'
                      : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <main className="flex-1 overflow-auto bg-gray-50">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}