import React from 'react';
import { Play, Bookmark, ChevronRight, ChevronLeft } from 'lucide-react';
import { PodcastDetail } from './PodcastDetail';
import { FeaturedEpisodes } from './podcast/FeaturedEpisodes';
import { PopularPodcasts } from './podcast/PopularPodcasts';
import { AIPrompts } from './podcast/AIPrompts';
import type { Podcast } from '../types';

interface PodcastFeedProps {
  podcasts: Podcast[];
}

export function PodcastFeed({ podcasts }: PodcastFeedProps) {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Unlock Expert Knowledge, Instantly
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Ask anything and get answers directly from trusted experts
        </p>
        <button className="mt-8 px-8 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-colors">
          Join KnowledgeHub
        </button>
      </div>

      {/* Featured Episodes */}
      <section className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Featured Episodes</h2>
          <div className="flex space-x-2">
            <button className="p-2 rounded-full bg-white shadow-sm hover:bg-gray-50">
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 rounded-full bg-white shadow-sm hover:bg-gray-50">
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
        <FeaturedEpisodes episodes={podcasts} />
      </section>

      {/* Popular Podcasts */}
      <section className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Popular Expert Podcasts</h2>
          <div className="flex space-x-2">
            <button className="p-2 rounded-full bg-white shadow-sm hover:bg-gray-50">
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 rounded-full bg-white shadow-sm hover:bg-gray-50">
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
        <PopularPodcasts />
      </section>

      {/* AI-Powered Questions */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Explore Topics</h2>
        <AIPrompts />
      </section>
    </div>
  );
}