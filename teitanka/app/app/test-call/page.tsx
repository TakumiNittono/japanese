'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function TestCallPage() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-white text-center mb-2">Video Call</h1>
        <p className="text-gray-400 text-center text-sm mb-10">Create a new meeting or join an existing one</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Create Meeting */}
          <Link
            href="/test-call/create"
            className="bg-gray-800 border-2 border-gray-700 hover:border-green-500 rounded-2xl p-8 text-center transition group"
          >
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Create Meeting</h2>
            <p className="text-gray-400 text-sm">Start a new room and invite others with a link</p>
          </Link>

          {/* Join Meeting */}
          <Link
            href="/test-call/join"
            className="bg-gray-800 border-2 border-gray-700 hover:border-indigo-500 rounded-2xl p-8 text-center transition group"
          >
            <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white mb-2">Join Meeting</h2>
            <p className="text-gray-400 text-sm">Enter a room URL to join an existing call</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
