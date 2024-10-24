import React from 'react';
import { Book, PlayCircle, Clock } from 'lucide-react';

export function BookSummaries() {
  const books = [
    {
      id: 1,
      title: 'Elon Musk',
      author: 'Walter Isaacson',
      cover: 'https://images.unsplash.com/photo-1709056842306-7e6b7e4e3c5d',
      duration: '10 min',
      category: 'Biography',
    },
    {
      id: 2,
      title: 'Atomic Habits',
      author: 'James Clear',
      cover: 'https://images.unsplash.com/photo-1709056842307-7e6b7e4e3c5e',
      duration: '8 min',
      category: 'Self-Development',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">10-Minute Book Summaries</h2>
        <div className="flex space-x-2">
          <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-white rounded-full hover:bg-gray-50">
            All Categories
          </button>
          <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-white rounded-full hover:bg-gray-50">
            Recently Added
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <div key={book.id} className="bg-white rounded-lg shadow-sm overflow-hidden group">
            <div className="relative">
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-48 object-cover"
              />
              <button className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                <PlayCircle className="h-12 w-12 text-white" />
              </button>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-indigo-600">{book.category}</span>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  {book.duration}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{book.title}</h3>
              <p className="text-sm text-gray-600">by {book.author}</p>
              <button className="mt-4 w-full px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                Listen to Summary
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}