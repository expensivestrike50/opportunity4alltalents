export type Position = "Forward" | "Midfielder" | "Defender" | "Goalkeeper";

export interface Person {
  id: number;
  name: string;
  location: string;
  position: Position;
  image: string;
}

export const people: Person[] = [
  {
    id: 1,
    name: "Emeka Chukwu",
    location: "Enugu, Nigeria",
    position: "Forward",
    image: "https://images.unsplash.com/photo-1782136642869-41a2c3a2d4f5?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Kwame Boateng",
    location: "Kumasi, Ghana",
    position: "Midfielder",
    image: "https://images.unsplash.com/photo-1783434420883-3ad9d6b52207?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Sekou Diallo",
    location: "Conakry, Guinea",
    position: "Defender",
    image: "https://images.unsplash.com/photo-1779304552339-99dca9db8c46?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Tendai Moyo",
    location: "Bulawayo, Zimbabwe",
    position: "Goalkeeper",
    image: "https://images.unsplash.com/photo-1779304552001-cf343a76f909?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Ibrahim Sow",
    location: "Dakar, Senegal",
    position: "Forward",
    image: "https://images.unsplash.com/photo-1607079713347-a8657dc88871?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Ochieng Otieno",
    location: "Kisumu, Kenya",
    position: "Midfielder",
    image: "https://images.unsplash.com/photo-1690543364186-973ade5dd0c1?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Junior Mensah",
    location: "Accra, Ghana",
    position: "Midfielder",
    image: "https://images.unsplash.com/photo-1695147033484-b764c97baa97?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Abdoulaye Traoré",
    location: "Bamako, Mali",
    position: "Defender",
    image: "https://images.unsplash.com/photo-1519032284022-0fdfbdb3c42e?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 9,
    name: "Farai Chirwa",
    location: "Lusaka, Zambia",
    position: "Midfielder",
    image: "https://images.unsplash.com/photo-1673091825430-ad6cede475b1?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 10,
    name: "Yusuf Kone",
    location: "Abidjan, Ivory Coast",
    position: "Forward",
    image: "https://images.unsplash.com/photo-1607079714592-f5b3bbbcba6f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 11,
    name: "Daniel Adeyemi",
    location: "Lagos, Nigeria",
    position: "Midfielder",
    image: "https://images.unsplash.com/photo-1635594819373-0137673e3059?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 12,
    name: "Patrick Nkurunziza",
    location: "Kigali, Rwanda",
    position: "Midfielder",
    image: "https://images.unsplash.com/photo-1697289477174-6795a13d448a?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 13,
    name: "Samuel Okonkwo",
    location: "Port Harcourt, Nigeria",
    position: "Forward",
    image: "https://images.unsplash.com/photo-1641280173256-0ac1b2f4cd78?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 14,
    name: "Amara Nwosu",
    location: "Owerri, Nigeria",
    position: "Forward",
    image: "https://images.unsplash.com/photo-1693314526554-69677104bca1?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 15,
    name: "Fatou Ndiaye",
    location: "Thiès, Senegal",
    position: "Midfielder",
    image: "https://images.unsplash.com/photo-1780336672540-597db9fdb5a2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 16,
    name: "Grace Achieng",
    location: "Nairobi, Kenya",
    position: "Defender",
    image: "https://images.unsplash.com/photo-1748112200749-2383a55bae73?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 17,
    name: "Zanele Dube",
    location: "Durban, South Africa",
    position: "Goalkeeper",
    image: "https://images.unsplash.com/photo-1604887010036-19d7b0c338f7?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 18,
    name: "Chidinma Eze",
    location: "Enugu, Nigeria",
    position: "Forward",
    image: "https://images.unsplash.com/photo-1646743933539-3359aa13d373?q=80&w=800&auto=format&fit=crop",
  },
];

export const positions: Position[] = ["Forward", "Midfielder", "Defender", "Goalkeeper"];
