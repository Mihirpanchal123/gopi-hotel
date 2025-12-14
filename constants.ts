import { MenuItem, RoomType, Review, EventService } from './types';

export const HOTEL_DETAILS = {
  name: "Gopi Hotel and Restaurant",
  established: 2004,
  location: "Dungarpur Road, Krishna Nagar, Sagwara, Rajasthan 314025",
  contact: "077909 19160",
  checkIn: "11:30 AM (24-hour check-in available)",
  checkOut: "12:00 PM",
  description: "Established in 2004, Gopi Hotel operates as a casual dining spot and lodge emphasizing warm hospitality, wholesome comfort food, and simple, reasonably priced stays.",
  amenities: [
    "Free Wi-Fi", "Complimentary Breakfast", "Free Parking", "Air-conditioned Rooms",
    "Business Center", "24-hour Front Desk", "Elevator", "Power Backup", 
    "Laundry Service", "Banquet Hall"
  ]
};

export const MENU_ITEMS: MenuItem[] = [
  { id: '1', name: 'Veg Biryani', price: '₹160', description: 'Aromatic basmati rice cooked with fresh vegetables and exotic spices.', category: 'Vegetarian', isSignature: true },
  { id: '2', name: 'Dal Makhani', price: '₹180', description: 'Whole black lentils cooked with butter and cream.', category: 'Vegetarian', isSignature: true },
  { id: '3', name: 'Stuffed Tomato/Capsicum', price: '₹170', description: 'Vegetables stuffed with a spicy paneer and potato mixture.', category: 'Vegetarian' },
  { id: '4', name: 'Baby Corn Butter Masala', price: '₹190', description: 'Tender baby corn in a rich tomato gravy.', category: 'Vegetarian' },
  { id: '5', name: 'Dam Aloo Kashmiri', price: '₹180', description: 'Potatoes cooked in a rich, yogurt-based gravy.', category: 'Vegetarian' },
];

export const ROOMS: RoomType[] = [
  {
    id: 'std',
    name: 'Standard AC Room',
    priceRange: '₹1,549 - ₹1,800',
    features: ['Queen Bed', 'Free Wi-Fi', 'Flat-screen TV', 'Room Service'],
    imageUrl: 'https://picsum.photos/800/600?random=10'
  },
  {
    id: 'dlx',
    name: 'Deluxe Family Suite',
    priceRange: '₹2,000 - ₹2,496',
    features: ['King Bed + Twin Bed', 'City View', 'Electric Kettle', 'Blackout Curtains', 'Work Desk'],
    imageUrl: 'https://picsum.photos/800/600?random=11'
  }
];

export const EVENTS: EventService[] = [
  {
    title: "Corporate Conferences",
    description: "A professional setting for your business meetings and seminars. Equipped with modern audio-visual technology.",
    capacity: "Up to 50 Guests",
    features: ["Projector & Screen", "High-speed Wi-Fi", "Whiteboard", "Tea/Coffee Service"],
    imageUrl: "https://picsum.photos/800/600?random=20"
  },
  {
    title: "Social Banquets",
    description: "Ideally suited for engagement parties, birthday celebrations, and family gatherings with exquisite catering.",
    capacity: "Up to 150 Guests",
    features: ["Customizable Menu", "Decoration Services", "Music System", "Dedicated Staff"],
    imageUrl: "https://picsum.photos/800/600?random=21"
  },
  {
    title: "Private Dining",
    description: "Exclusive dining areas for intimate family dinners or business lunches, ensuring privacy and comfort.",
    capacity: "10-20 Guests",
    features: ["Private Waitstaff", "A la carte Menu", "Soundproofing", "Air Conditioning"],
    imageUrl: "https://picsum.photos/800/600?random=22"
  }
];

export const REVIEWS: Review[] = [
  { id: '1', author: 'Rahul S.', rating: 5, text: 'Excellent food taste and neat rooms. The staff was very supportive.', source: 'TripAdvisor' },
  { id: '2', author: 'Priya M.', rating: 4, text: 'Good value for money. Veg Biryani is a must-try. Near the bus stand which is convenient.', source: 'JustDial' },
  { id: '3', author: 'Amit K.', rating: 5, text: 'Best hotel in Sagwara for families. Clean interiors and fast room service.', source: 'Goibibo' },
];

export const SYSTEM_INSTRUCTION = `You are the AI Concierge for Gopi Hotel and Restaurant in Sagwara, Rajasthan. 
Your goal is to assist guests with information about the hotel, restaurant, and events.
Use the following knowledge base to answer questions:
- Name: Gopi Hotel and Restaurant (Est. 2004).
- Location: Dungarpur Road, Krishna Nagar, Sagwara, 314025 (Near bus stand).
- Contact: 077909 19160.
- Check-in: 11:30 AM (24h available), Check-out: 12:00 PM.
- Pricing: Rooms range from ₹1,549 to ₹2,496 per night.
- Amenities: Free Wi-Fi, Breakfast, Parking, AC, Elevator, Laundry, 24h Front Desk, Power Backup.
- Dining: Multicuisine, separate veg/non-veg kitchens. Specialties: Veg Biryani (₹160), Dal Makhani, Baby Corn Butter Masala.
- Events: Banquet hall, conference rooms available for weddings and meetings.
- Vibe: Casual, warm hospitality, midscale, family-friendly.
- Policies: Staff speaks English and Hindi. 
Always be polite, professional, and helpful. If asked about booking, encourage them to call the front desk at 077909 19160 or visit the Contact page.`;
