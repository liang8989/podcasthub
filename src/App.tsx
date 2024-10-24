import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { PodcastFeed } from './components/PodcastFeed';
import { AskAI } from './components/AskAI';
import { Documents } from './components/Documents';
import { BookSummaries } from './components/BookSummaries';
import { mockPodcasts } from './data/mockData';

function App() {
  const [activeTab, setActiveTab] = useState('podcasts');

  const renderContent = () => {
    switch (activeTab) {
      case 'podcasts':
        return <PodcastFeed podcasts={mockPodcasts} />;
      case 'askAI':
        return <AskAI />;
      case 'documents':
        return <Documents />;
      case 'books':
        return <BookSummaries />;
      default:
        return <PodcastFeed podcasts={mockPodcasts} />;
    }
  };

  return <Layout activeTab={activeTab} setActiveTab={setActiveTab}>{renderContent()}</Layout>;
}

export default App;