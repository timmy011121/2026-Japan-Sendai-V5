
export enum SpotType {
  SIGHTSEEING = '景點',
  RESTAURANT = '餐廳',
  DESSERT = '甜點',
  SHOPPING = '購物',
  TRANSPORT = '交通',
  HOTEL = '住宿',
  OTHER = '其他'
}

export interface Spot {
  id: string;
  time: string;
  name: string;
  type: SpotType;
  description?: string;
  locationUrl?: string; // Google Maps URL
  cost?: string;
  tags?: string[]; // "必吃", "預約代號: XYZ"
  tips?: string; // AI Generated tips
  isPriority?: boolean; // For important gathering times
}

export interface DailyItinerary {
  date: string; // YYYY-MM-DD
  dayOfWeek: string;
  weather: {
    temp: string;
    condition: string;
    icon: string; // Emoji or icon name
  };
  spots: Spot[]; // Default spots (or shared spots if used in mixed mode)
  plans?: { // Optional alternative plans (e.g., Plan A / Plan B)
    [key: string]: {
      label: string;
      spots: Spot[]; // The complete list of spots for this plan
    };
  };
  hotel: {
    name: string;
    address: string;
    mapUrl?: string;
  };
}

export interface FlightInfo {
  type: 'Depart' | 'Return';
  date: string;
  airline: string;
  flightNumber: string;
  from: string;
  to: string;
  time: string;
  terminal: string;
}

export interface ChecklistItem {
  id: string;
  text: string;
  category: string;
  checked: boolean;
}
