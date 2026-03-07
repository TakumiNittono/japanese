export type Role = 'learner' | 'teacher';

export type BookingStatus = 'pending' | 'accepted' | 'rejected' | 'completed' | 'cancelled';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  created_at: string;
}

export interface TeacherProfile {
  user_id: string;
  name: string;
  bio: string;
  subject: string;
  price_per_hour: number;
  language: string;
  rating: number;
  availability: string[];
  avatar: string;
}

export interface Booking {
  id: string;
  learner_id: string;
  teacher_id: string;
  teacher_name: string;
  learner_name: string;
  subject: string;
  scheduled_time: string;
  status: BookingStatus;
}

export interface Lesson {
  id: string;
  booking_id: string;
  zoom_meeting_id: string;
  zoom_join_url: string;
  start_time: string;
  end_time: string;
}

export interface Message {
  id: string;
  chat_room_id: string;
  sender_id: string;
  sender_name: string;
  message: string;
  created_at: string;
}

export interface Review {
  id: string;
  booking_id: string;
  reviewer_id: string;
  reviewer_name: string;
  rating: number;
  comment: string;
}
