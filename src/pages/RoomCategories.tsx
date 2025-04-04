import { Add as AddIcon, Remove as RemoveIcon } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  Chip,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";

// Hotel Rooms Data (Same as previous example)
const hotelRooms = [
  {
    category: "Executive Room",
    description: "Luxury accommodation for business and leisure",
    maxGuests: 4,
    images: [
      "https://r2imghtlak.ibcdn.com/r2-mmt-htl-image/room-imgs/201603291919072417-1518-2f41ea280bb111e68ed40022195573b9.jpg",
      "https://r2imghtlak.ibcdn.com/r2-mmt-htl-image/room-imgs/201603291919072417-1518-50c86cbc0bb111e69d5d0015c5f4277e.jpg",
      "https://r1imghtlak.ibcdn.com/df62ea446f0911e7bec90a4cef95d023.jpg",
      "https://r2imghtlak.ibcdn.com/r2-mmt-htl-image/room-imgs/201603291919072417-1518-2f41ea280bb111e68ed40022195573b9.jpg",
    ],
    rooms: [
      {
        type: "Standard Package",
        features: ["144 sq.ft", "Double Bed", "City View"],
        price: 3762,
        originalPrice: 4560,
        highlights: ["Free Wi-Fi", "Complimentary Breakfast"],
      },
      {
        type: "Deluxe Package",
        features: ["180 sq.ft", "King Size Bed", "City & Mountain View"],
        price: 4500,
        originalPrice: 5400,
        highlights: ["Late Check-out", "Welcome Drink"],
      },
    ],
  },
];

const RoomCategories = () => {
  const navigate = useNavigate();
  // Booking Flow States
  const [bookingStep, setBookingStep] = useState("room-selection");
  const [selectedCategory, setSelectedCategory] = useState(hotelRooms[0]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [roomCounts, setRoomCounts] = useState(
    selectedCategory.rooms.map(() => 0)
  );

  // Room Selection Logic
  const updateRoomCount = (index, change) => {
    const newCounts = [...roomCounts];
    newCounts[index] = Math.max(0, newCounts[index] + change);
    setRoomCounts(newCounts);
  };

  // Reset room counts when category changes
  useEffect(() => {
    setRoomCounts(selectedCategory.rooms.map(() => 0));
    setSelectedImageIndex(0);
  }, [selectedCategory]);

  // Calculation Helpers
  const totalRooms = roomCounts.reduce((a, b) => a + b, 0);
  const totalPrice = selectedCategory.rooms.reduce(
    (total, room, index) => total + room.price * roomCounts[index],
    0
  );

  // Proceed to Payment
  const proceedToPayment = () => {
    navigate("/checkout");
    if (totalRooms > 0) {
      setBookingStep("payment");
    }
  };

  // Render Different Booking Steps
  const renderRoomSelection = () => (
    <Box sx={{ maxWidth: 1400, margin: "auto", p: 2 }}>
      <Card sx={{ p: 3, borderRadius: 2, bgcolor: "background.paper" }}>
        <Grid container spacing={3}>
          {/* Left Side - Room Images */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={selectedCategory.images[selectedImageIndex]}
              alt={`${selectedCategory.category} Main Image`}
              sx={{
                width: "100%",
                height: 400,
                objectFit: "cover",
                borderRadius: 2,
              }}
            />
            Image Thumbnails
            <Box
              sx={{
                display: "flex",
                gap: 1,
                mt: 2,
                overflowX: "auto",
                pb: 1,
              }}
            >
              {selectedCategory.images.map((img, index) => (
                <Box
                  key={index}
                  component="img"
                  src={img}
                  sx={{
                    width: 80,
                    height: 80,
                    objectFit: "cover",
                    borderRadius: 1,
                    cursor: "pointer",
                    opacity: selectedImageIndex === index ? 1 : 0.6,
                    border:
                      selectedImageIndex === index
                        ? "2px solid primary.main"
                        : "1px solid grey",
                  }}
                  onClick={() => setSelectedImageIndex(index)}
                />
              ))}
            </Box>
            {/* Room Description */}
            <Box
              sx={{ mt: 2, p: 2, bgcolor: "background.paper", borderRadius: 2 }}
            >
              <Typography variant="h6">{selectedCategory.category}</Typography>
              <Typography variant="body2" color="text.secondary">
                {selectedCategory.description}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Max Guests: {selectedCategory.maxGuests}
              </Typography>
            </Box>
          </Grid>

          {/* Right Side - Room Options */}
          <Grid item xs={12} md={6}>
            {selectedCategory.rooms.map((room, index) => (
              <Box
                key={index}
                sx={{
                  border: "1px solid",
                  borderColor: "divider",
                  p: 2,
                  mb: 2,
                  borderRadius: 2,
                }}
              >
                <Typography variant="h6">{room.type}</Typography>

                {/* Room Features */}
                <Box sx={{ mt: 1 }}>
                  {room.features.map((feature, idx) => (
                    <Typography
                      key={idx}
                      variant="body2"
                      color="text.secondary"
                    >
                      • {feature}
                    </Typography>
                  ))}
                </Box>

                {/* Room Highlights */}
                <Box sx={{ mt: 1, color: "green" }}>
                  {room.highlights.map((highlight, idx) => (
                    <Typography key={idx} variant="body2">
                      ✓ {highlight}
                    </Typography>
                  ))}
                </Box>

                {/* Pricing and Room Count */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: 2,
                  }}
                >
                  <Box>
                    <Typography
                      variant="body2"
                      sx={{
                        textDecoration: "line-through",
                        color: "text.secondary",
                      }}
                    >
                      ₹{room.originalPrice}
                    </Typography>
                    <Typography variant="h6" color="primary">
                      ₹{room.price}
                    </Typography>
                  </Box>

                  {/* Room Count Selector */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <IconButton
                      size="small"
                      color="primary"
                      onClick={() => updateRoomCount(index, -1)}
                      disabled={roomCounts[index] <= 0}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <Typography variant="body1">{roomCounts[index]}</Typography>
                    <IconButton
                      size="small"
                      color="primary"
                      onClick={() => updateRoomCount(index, 1)}
                    >
                      <AddIcon />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            ))}

            {/* Total Booking Summary */}
            {totalRooms > 0 && (
              <Box
                sx={{
                  mt: 2,
                  p: 2,
                  bgcolor: "background.paper",
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 2,
                }}
              >
                <Typography variant="h6">Booking Summary</Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="body1">
                    Total Rooms: {totalRooms}
                  </Typography>
                  <Typography variant="h6" color="primary">
                    Total Price: ₹{totalPrice.toLocaleString()}
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ mt: 2 }}
                  disabled={totalRooms === 0}
                  onClick={proceedToPayment}
                >
                  Proceed to Book
                </Button>
              </Box>
            )}
          </Grid>
        </Grid>
      </Card>
    </Box>
  );

  return (
    <Box>
      <SearchBar />
      {bookingStep === "room-selection" && renderRoomSelection()}
    </Box>
  );
};

export default RoomCategories;
