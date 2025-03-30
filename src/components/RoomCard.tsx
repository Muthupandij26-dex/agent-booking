import React, { JSX, useState } from "react";
import {
  Typography,
  Button,
  Box,
  Grid,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Bed,
  People,
  MonetizationOn,
  AddCircle,
  RemoveCircle,
  Wifi,
  Tv,
  AcUnit,
  Kitchen,
  FreeBreakfast,
  LocalHotel,
  CheckCircle,
} from "@mui/icons-material";

interface Room {
  type: string;
  capacity: number;
  price: number;
  extraBedAllowed: number;
  extraBedPrice: number;
  amenities: string[];
}

interface RoomBoxProps {
  room: Room;
}

const amenityIcons: { [key: string]: JSX.Element } = {
  WiFi: <Wifi fontSize="small" />,
  TV: <Tv fontSize="small" />,
  "Air Conditioning": <AcUnit fontSize="small" />,
  "Room Service": <LocalHotel fontSize="small" />,
  "Mini Fridge": <Kitchen fontSize="small" />,
  "Complimentary Breakfast": <FreeBreakfast fontSize="small" />,
};

export const RoomCard: React.FC<RoomBoxProps> = ({ room }) => {
  const theme = useTheme();
  const isNotDesktop = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [roomCount, setRoomCount] = useState(0);
  const [extraBedCount, setExtraBedCount] = useState(0);

  const handleIncrement = () => setRoomCount((prev) => prev + 1);
  const handleDecrement = () =>
    roomCount > 0 && setRoomCount((prev) => prev - 1);

  const handleExtraBedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10) || 0;
    setExtraBedCount(
      value > room.extraBedAllowed ? room.extraBedAllowed : value
    );
  };

  return (
    <Box
      sx={{
        p: 3,
        border: "1px solid #ddd",
        borderRadius: "16px",
        width: isMobile ? 400 : isNotDesktop ? "100%" : 400,
        textAlign: "left",
        background: "linear-gradient(to bottom, #ffffff, #f8f9fa)",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <Grid container spacing={3}>
        {/* Left Section - Room Details */}
        <Grid item xs={6}>
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ mb: 1, color: "#2c3e50" }}
          >
            {room.type}
          </Typography>

          <Box
            display="flex"
            alignItems="center"
            gap={1}
            sx={{ color: "#555" }}
          >
            <Bed />
            <Typography>Capacity: {room.capacity} Guests</Typography>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            gap={1}
            sx={{ color: "#0F6CBD", mt: 1 }}
          >
            <MonetizationOn />
            <Typography fontWeight="600">₹ {room.price}</Typography>
          </Box>

          <Box
            display="flex"
            alignItems="center"
            gap={1}
            sx={{ color: "#7f8c8d", mt: 1 }}
          >
            <People />
            <Typography>
              Extra Bed:{" "}
              {room.extraBedAllowed > 0
                ? `${room.extraBedAllowed} (₹${room.extraBedPrice})`
                : "-"}
            </Typography>
          </Box>

          {/* Room Counter */}
          <Box display="flex" alignItems="center" mt={3} gap={2}>
            <Button
              variant="contained"
              sx={{
                color: "white",
                minWidth: "20px",
                background: roomCount === 0 ? "#ccc" : "#0F6CBD",
              }}
              onClick={handleDecrement}
              disabled={roomCount === 0}
            >
              <RemoveCircle fontSize="medium" />
            </Button>

            <Typography
              sx={{ fontSize: "20px", fontWeight: "bold", color: "#2c3e50" }}
            >
              {roomCount}
            </Typography>

            <Button
              variant="contained"
              sx={{ color: "white", minWidth: "20px", background: "#0F6CBD" }}
              onClick={handleIncrement}
            >
              <AddCircle fontSize="medium" />
            </Button>
          </Box>

          {/* Extra Bed Input - Fixed Height to Prevent Shrinking */}
          <Box mt={2} sx={{ visibility: "visible", height: 50 }}>
            {room.extraBedAllowed > 0 && (
              <>
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  sx={{ color: "#34495e", mb: 1 }}
                >
                  Extra Beds
                </Typography>
                <TextField
                  type="number"
                  variant="outlined"
                  size="small"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                      fontSize: "14px",
                    },
                    "& .MuiOutlinedInput-input": {
                      textAlign: "center",
                      fontWeight: "bold",
                    },
                    width: "100px",
                  }}
                  inputProps={{
                    min: 0,
                    max: room.extraBedAllowed,
                  }}
                  value={extraBedCount}
                  onChange={handleExtraBedChange}
                />
              </>
            )}
          </Box>
        </Grid>

        {/* Right Section - Amenities */}
        <Grid item xs={6}>
          <Typography variant="subtitle1" fontWeight="bold" color="#34495e">
            Amenities
          </Typography>
          <Box display="flex" flexDirection="column" gap={1} mt={1}>
            {room.amenities.map((amenity) => (
              <Box key={amenity} display="flex" alignItems="center" gap={1}>
                <CheckCircle fontSize="small" sx={{ color: "#0F6CBD" }} />
                {amenityIcons[amenity] || "•"}{" "}
                <Typography variant="body2">{amenity}</Typography>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
