import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function PopularPodcasts() {
  const podcasts = [
    {
      id: 1,
      name: "Huberman Lab",
      host: "Andrew Huberman",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
      category: "Health & Science"
    },
    {
      id: 2,
      name: "Lex Fridman Podcast",
      host: "Lex Fridman",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      category: "Technology & Science"
    },
    {
      id: 3,
      name: "Impact Theory",
      host: "Tom Bilyeu",
      image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809",
      category: "Personal Growth"
    },
    {
      id: 4,
      name: "School of Greatness",
      host: "Lewis Howes",
      image: "https://images.unsplash.com/photo-1579546929662-711aa81148cf",
      category: "Personal Development"
    },
    {
      id: 5,
      name: "Mark Groves Podcast",
      host: "Mark Groves",
      image: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809",
      category: "Relationships"
    },
    {
      id: 6,
      name: "Dr. Rena Malik",
      host: "Rena Malik",
      image: "https://images.unsplash.com/photo-1579546929662-711aa81148cf",
      category: "Health"
    }
  ];

  return (
    <div className="relative">
      <div className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory gap-6 pb-4">
        {podcasts.map((podcast) => (
          <div
            key={podcast.id}
            className="flex-none w-64 snap-start bg-white rounded-xl shadow-sm overflow-hidden group cursor-pointer hover:shadow-md transition-shadow"
          >
            <div className="relative h-64">
              <img
                src={podcast.image}
                alt={podcast.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">{podcast.name}</h3>
                  <p className="text-sm text-gray-200">{podcast.host}</p>
                  <span className="inline-block mt-2 px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white">
                    {podcast.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}