export interface MenuItem {
  id: string;
  name: string;
  price: string;
  description: string;
  category: 'Vegetarian' | 'Non-Vegetarian' | 'Beverage';
  isSignature?: boolean;
}

export interface RoomType {
  id: string;
  name: string;
  priceRange: string;
  features: string[];
  imageUrl: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  source: 'JustDial' | 'TripAdvisor' | 'Goibibo';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface EventService {
  title: string;
  description: string;
  capacity: string;
  features: string[];
  imageUrl: string;
}
