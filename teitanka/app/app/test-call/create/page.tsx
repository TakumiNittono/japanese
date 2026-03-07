'use client';

import { useState } from 'react';
import VideoCall from '../../components/VideoCall';

export default function CreateMeetingPage() {
  const [name, setName] = useState('');
  const [started, setStarted] = useState(false);

  if (!started) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
        <div className="bg-gray-800 rounded-2xl p-8 max-w-md w-full">
          <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white text-center mb-2">Create Meeting</h1>
          <p className="text-gray-400 text-center text-sm mb-6">
            A new room will be created. Share the room URL with others to invite them.
          </p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500 outline-none mb-4"
          />
          <button
            onClick={() => name.trim() && setStarted(true)}
            disabled={!name.trim()}
            className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Create & Join
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-gray-900 flex flex-col">
      <div className="flex items-center justify-between px-6 py-3 bg-gray-800 border-b border-gray-700">
        <h1 className="text-white font-semibold">Meeting (Host)</h1>
        <span className="text-gray-400 text-sm">{name}</span>
      </div>
      <div className="flex-1 flex">
        <VideoCall roomId="test-room" userName={name} />
      </div>
    </div>
  );
}
