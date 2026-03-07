'use client';

import { useState } from 'react';
import VideoCall from '../../components/VideoCall';

export default function JoinMeetingPage() {
  const [name, setName] = useState('');
  const [roomUrl, setRoomUrl] = useState('');
  const [joined, setJoined] = useState(false);

  if (!joined) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
        <div className="bg-gray-800 rounded-2xl p-8 max-w-md w-full">
          <div className="w-14 h-14 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-white text-center mb-2">Join Meeting</h1>
          <p className="text-gray-400 text-center text-sm mb-6">
            Enter the room URL shared by the host
          </p>
          <input
            type="text"
            value={roomUrl}
            onChange={(e) => setRoomUrl(e.target.value)}
            placeholder="Room URL (e.g. https://xxx.daily.co/room-name)"
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 outline-none mb-4"
          />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 outline-none mb-4"
          />
          <button
            onClick={() => name.trim() && roomUrl.trim() && setJoined(true)}
            disabled={!name.trim() || !roomUrl.trim()}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Join Call
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-gray-900 flex flex-col">
      <div className="flex items-center justify-between px-6 py-3 bg-gray-800 border-b border-gray-700">
        <h1 className="text-white font-semibold">Meeting</h1>
        <span className="text-gray-400 text-sm">{name}</span>
      </div>
      <div className="flex-1 flex">
        <VideoCall roomId="join" userName={name} initialRoomUrl={roomUrl} />
      </div>
    </div>
  );
}
