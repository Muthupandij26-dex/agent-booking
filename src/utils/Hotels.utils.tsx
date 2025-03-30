type Room = {
  type: string;
  capacity: number;
  price: number;
  extraBedAllowed: number;
  extraBedPrice: number;
  amenities: string[];
};

export type Hotel = {
  id: number;
  name: string;
  rooms: Room[];
};

const mockHotelData: Hotel[] = [
  {
    id: 1,
    name: "Luxury Grand Hotel",
    rooms: [
      {
        type: "AC Room",
        capacity: 2,
        price: 5000,
        extraBedAllowed: 1,
        extraBedPrice: 800,
        amenities: [
          "WiFi",
          "Air Conditioning",
          "TV",
          "Mini Fridge",
          "Room Service",
        ],
      },
      {
        type: "Non-AC Room",
        capacity: 2,
        price: 3500,
        extraBedAllowed: 0,
        extraBedPrice: 0,
        amenities: ["WiFi", "TV", "Ceiling Fan", "24/7 Hot Water"],
      },
      {
        type: "Suite Room",
        capacity: 3,
        price: 3000,
        extraBedAllowed: 1,
        extraBedPrice: 500,
        amenities: ["WiFi", "TV", "Ceiling Fan", "Shared Kitchen Access"],
      },
      {
        type: "Suite Room",
        capacity: 3,
        price: 3000,
        extraBedAllowed: 1,
        extraBedPrice: 500,
        amenities: ["WiFi", "TV", "Ceiling Fan", "Shared Kitchen Access"],
      },
      {
        type: "Suite Room",
        capacity: 3,
        price: 3000,
        extraBedAllowed: 1,
        extraBedPrice: 500,
        amenities: ["WiFi", "TV", "Ceiling Fan", "Shared Kitchen Access"],
      },
    ],
  },
  {
    id: 2,
    name: "Cozy Budget Stay",
    rooms: [
      {
        type: "AC Room",
        capacity: 3,
        price: 4000,
        extraBedAllowed: 2,
        extraBedPrice: 700,
        amenities: [
          "WiFi",
          "Air Conditioning",
          "TV",
          "Complimentary Breakfast",
        ],
      },
      {
        type: "Non-AC Room",
        capacity: 3,
        price: 3000,
        extraBedAllowed: 1,
        extraBedPrice: 500,
        amenities: ["WiFi", "TV", "Ceiling Fan", "Shared Kitchen Access"],
      },
    ],
  },
];

export const fetchHotelById = async (hotelId: number) => {
  const hotel = mockHotelData.find((h) => h.id === hotelId);
  return hotel || null;
};
