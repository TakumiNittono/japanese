'use client';

import { useState } from 'react';
import VideoCall from '../components/VideoCall';

export default function TestCallPage() {
  const [joined, setJoined] = useState(false);
  const [name, setName] = useState('');

  if (!joined) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
        <div className="bg-gray-800 rounded-2xl p-8 max-w-md w-full">
          <h1 className="text-2xl font-bold text-white text-center mb-2">Video Call Test</h1>
          <p className="text-gray-400 text-center text-sm mb-6">Enter your name to join the test room</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 outline-none mb-4"
          />
          <button
            onClick={() => name.trim() && setJoined(true)}
            disabled={!name.trim()}
            className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Enter Test Room
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-gray-900 flex flex-col">
      <div className="flex items-center justify-between px-6 py-3 bg-gray-800 border-b border-gray-700">
        <h1 className="text-white font-semibold">Test Room</h1>
        <span className="text-gray-400 text-sm">Joined as: {name}</span>
      </div>
      <div className="flex-1 flex">
        <VideoCall roomId="test-room" userName={name} />
      </div>
    </div>
  );
}
