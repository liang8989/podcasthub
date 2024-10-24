import React from 'react';
import { Play, Bookmark } from 'lucide-react';
import type { Podcast } from '../../types';

interface FeaturedEpisodesProps {
  episodes: Podcast[];
}

export function FeaturedEpisodes({ episodes }: FeaturedEpisodesProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {episodes.map((episode) => (
        <div
          key={episode.id}
          className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow group"
        >
          <div className="relative">
            <img
              src={episode.coverImage}
              alt={episode.title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <button className="p-3 bg-white rounded-full">
                <Play className="h-6 w-6 text-indigo-600" />
              </button>
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-indigo-600">{episode.category}</span>
              <span className="text-sm text-gray-500">{episode.duration}</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{episode.title}</h3>
            <p className="text-sm text-gray-500 mb-3">{episode.podcastName}</p>
            <p className="text-sm text-gray-600 line-clamp-2">{episode.preview}</p>
            <div className="mt-4 flex items-center justify-between">
              <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                Listen Now
              </button>
              <Bookmark className="h-5 w-5 text-gray-400 hover:text-indigo-600 cursor-pointer" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}