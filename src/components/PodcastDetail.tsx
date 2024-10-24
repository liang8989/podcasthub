import React, { useState } from 'react';
import { X, Play, Pause, Bookmark, Share2, Clock, Brain, Share } from 'lucide-react';
import type { Podcast } from '../types';

interface PodcastDetailProps {
  podcast: Podcast;
  onClose: () => void;
}

export function PodcastDetail({ podcast, onClose }: PodcastDetailProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState<'transcript'|'summary'|'mindmap'>('transcript');

  return (
    <div className="bg-white rounded-lg shadow-lg">
      <div className="relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white"
        >
          <X className="h-5 w-5 text-gray-600" />
        </button>
        <img
          src={podcast.coverImage}
          alt={podcast.title}
          className="w-full h-64 object-cover rounded-t-lg"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900">{podcast.title}</h2>
          <div className="flex items-center space-x-4">
            <Bookmark className="h-6 w-6 text-gray-400 hover:text-indigo-600 cursor-pointer" />
            <Share2 className="h-6 w-6 text-gray-400 hover:text-indigo-600 cursor-pointer" />
          </div>
        </div>

        <div className="flex items-center space-x-4 mb-6">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600 hover:bg-indigo-700 transition-colors"
          >
            {isPlaying ? (
              <Pause className="h-6 w-6 text-white" />
            ) : (
              <Play className="h-6 w-6 text-white" />
            )}
          </button>
          <div className="flex-1">
            <div className="h-2 bg-gray-200 rounded-full">
              <div className="h-2 bg-indigo-600 rounded-full w-1/3"></div>
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-sm text-gray-500">12:34</span>
              <span className="text-sm text-gray-500">{podcast.duration}</span>
            </div>
          </div>
        </div>

        <div className="flex space-x-4 mb-6">
          {(['transcript', 'summary', 'mindmap'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeTab === tab
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {activeTab === 'transcript' && (
            <div className="space-y-4">
              {podcast.transcript.map((entry, index) => (
                <div key={index} className="flex space-x-4">
                  <button className="text-sm text-indigo-600 hover:text-indigo-700 whitespace-nowrap">
                    {entry.timestamp}
                  </button>
                  <p className="text-gray-600">{entry.text}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'summary' && (
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Key Points</h3>
                <ul className="list-disc list-inside space-y-2">
                  {podcast.summary.keyPoints.map((point, index) => (
                    <li key={index} className="text-gray-600">{point}</li>
                  ))}
                </ul>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Summary</h3>
                <p className="text-gray-600">{podcast.summary.text}</p>
              </div>
            </div>
          )}

          {activeTab === 'mindmap' && (
            <div className="bg-gray-50 rounded-lg p-4">
              <img
                src={podcast.mindmap}
                alt="Episode mindmap"
                className="w-full rounded-lg"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}