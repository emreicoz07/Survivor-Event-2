export interface Course {
  id: string;
  name: string;
  type: 'long' | 'short' | 'kids' | 'adaptive';
  description: string;
  distance: number;
  elevation: number;
  difficulty: 'easy' | 'medium' | 'hard';
  gpsTrack: string;
  image: string;
}

export interface Race {
  id: string;
  name: string;
  date: string;
  courseType: Course['type'];
  status: 'upcoming' | 'ongoing' | 'completed';
  registrationDeadline: string;
  maxParticipants: number;
  currentParticipants: number;
}

export interface News {
  id: string;
  title: string;
  content: string;
  date: string;
  image?: string;
  category: 'news' | 'announcement';
}

export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  website: string;
  tier: 'platinum' | 'gold' | 'silver';
}

export interface WeatherInfo {
  date: string;
  temperature: number;
  condition: string;
  icon: string;
}

export interface MenuItem {
  id: string;
  label: string;
  path: string;
  icon?: string;
  children?: MenuItem[];
}