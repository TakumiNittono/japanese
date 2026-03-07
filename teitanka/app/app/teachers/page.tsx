'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import StarRating from '../components/StarRating';
import { mockTeachers } from '../data/mock';

export default function TeacherListPage() {
  const [subjectFilter, setSubjectFilter] = useState('');
  const [languageFilter, setLanguageFilter] = useState('');

  const subjects = [...new Set(mockTeachers.map((t) => t.subject))];
  const languages = [...new Set(mockTeachers.flatMap((t) => t.language.split(' / ')))];

  const filtered = mockTeachers.filter((t) => {
    if (subjectFilter && t.subject !== subjectFilter) return false;
    if (languageFilter && !t.language.includes(languageFilter)) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Find a Teacher</h1>
          <p className="text-gray-500 mt-1">Browse and book lessons with expert teachers</p>
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          <select
            value={subjectFilter}
            onChange={(e) => setSubjectFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
          >
            <option value="">All Subjects</option>
            {subjects.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <select
            value={languageFilter}
            onChange={(e) => setLanguageFilter(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
          >
            <option value="">All Languages</option>
            {languages.map((l) => (
              <option key={l} value={l}>{l}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((teacher) => (
            <Link
              key={teacher.user_id}
              href={`/teachers/${teacher.user_id}`}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-lg flex-shrink-0">
                  {teacher.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600 transition">
                    {teacher.name}
                  </h3>
                  <p className="text-sm text-indigo-600 font-medium">{teacher.subject}</p>
                  <StarRating rating={teacher.rating} />
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-3 line-clamp-2">{teacher.bio}</p>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                <span className="text-sm text-gray-500">{teacher.language}</span>
                <span className="text-lg font-bold text-gray-900">
                  ¥{teacher.price_per_hour.toLocaleString()}<span className="text-sm text-gray-500 font-normal">/hr</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-500">
            No teachers found matching your filters.
          </div>
        )}
      </main>
    </div>
  );
}
