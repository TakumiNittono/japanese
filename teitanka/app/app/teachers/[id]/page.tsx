'use client';

import { use, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';
import StarRating from '../../components/StarRating';
import { mockTeachers } from '../../data/mock';

export default function TeacherProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const teacher = mockTeachers.find((t) => t.user_id === id);
  const [showBooking, setShowBooking] = useState(false);
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [booked, setBooked] = useState(false);

  if (!teacher) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="text-center py-20 text-gray-500">Teacher not found.</div>
      </div>
    );
  }

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    setBooked(true);
    setTimeout(() => router.push('/dashboard'), 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => router.back()}
          className="text-sm text-gray-500 hover:text-gray-700 mb-6 flex items-center gap-1"
        >
          ← Back
        </button>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 h-32" />
          <div className="px-8 pb-8">
            <div className="flex items-end gap-4 -mt-10">
              <div className="w-20 h-20 rounded-full bg-white border-4 border-white shadow flex items-center justify-center text-indigo-600 font-bold text-2xl">
                {teacher.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="pb-1">
                <h1 className="text-2xl font-bold text-gray-900">{teacher.name}</h1>
                <p className="text-indigo-600 font-medium">{teacher.subject}</p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="text-sm text-gray-500 mb-1">Rating</div>
                <StarRating rating={teacher.rating} size="lg" />
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="text-sm text-gray-500 mb-1">Price</div>
                <div className="text-xl font-bold text-gray-900">
                  ¥{teacher.price_per_hour.toLocaleString()}<span className="text-sm text-gray-500 font-normal">/hr</span>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="text-sm text-gray-500 mb-1">Language</div>
                <div className="text-lg font-semibold text-gray-900">{teacher.language}</div>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="font-semibold text-gray-900 mb-2">About</h2>
              <p className="text-gray-600 leading-relaxed">{teacher.bio}</p>
            </div>

            <div className="mt-6">
              <h2 className="font-semibold text-gray-900 mb-2">Availability</h2>
              <div className="flex flex-wrap gap-2">
                {teacher.availability.map((slot, i) => (
                  <span key={i} className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm">
                    {slot}
                  </span>
                ))}
              </div>
            </div>

            {!showBooking ? (
              <button
                onClick={() => setShowBooking(true)}
                className="mt-8 w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
              >
                Book Lesson
              </button>
            ) : booked ? (
              <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                <div className="text-green-600 text-lg font-semibold">Booking Requested!</div>
                <p className="text-green-600 text-sm mt-1">Redirecting to dashboard...</p>
              </div>
            ) : (
              <form onSubmit={handleBook} className="mt-8 bg-gray-50 rounded-xl p-6 space-y-4">
                <h3 className="font-semibold text-gray-900">Book a Lesson</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <input
                    type="date"
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                  <input
                    type="time"
                    value={bookingTime}
                    onChange={(e) => setBookingTime(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                    required
                  />
                </div>
                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="flex-1 bg-indigo-600 text-white py-2.5 rounded-lg font-medium hover:bg-indigo-700 transition"
                  >
                    Confirm Booking
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowBooking(false)}
                    className="px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
