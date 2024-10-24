import React, { useState } from 'react';
import { File, Plus, FolderOpen } from 'lucide-react';

export function Documents() {
  const [documents, setDocuments] = useState([
    { id: 1, title: 'Meeting Notes', content: 'Sample content...', date: '2024-03-15' },
    { id: 2, title: 'Podcast Highlights', content: 'Key points...', date: '2024-03-14' },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">My Documents</h2>
        <div className="flex space-x-4">
          <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            <FolderOpen className="h-5 w-5 mr-2 text-gray-500" />
            Import
          </button>
          <button className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            <Plus className="h-5 w-5 mr-2" />
            New Document
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {documents.map((doc) => (
          <div key={doc.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <File className="h-8 w-8 text-indigo-600" />
              <span className="text-sm text-gray-500">{doc.date}</span>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">{doc.title}</h3>
            <p className="mt-2 text-sm text-gray-600 line-clamp-3">{doc.content}</p>
            <button className="mt-4 text-sm text-indigo-600 hover:text-indigo-700 font-medium">
              Open Document
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}