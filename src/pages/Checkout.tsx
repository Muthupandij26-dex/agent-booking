import {
  Box,
  Grid,
  Typography,
  Paper,
  TextField,
  Button,
  Avatar,
  Rating,
  useMediaQuery,
  useTheme,
  IconButton,
  MenuItem,
} from "@mui/material";
import { AddCircle, RemoveCircle } from "@mui/icons-material";
import { useState } from "react";
import SearchBar from "../components/SearchBar";

const CheckoutPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // State to manage number of rooms
  const [roomCount, setRoomCount] = useState(1);

  // State to manage multiple guests per room
  const [guests, setGuests] = useState(
    Array.from({ length: roomCount }, () => [
      { name: "", email: "", phone: "" },
    ])
  );

  // Function to update guest information
  const updateGuestInfo = (
    roomIndex: number,
    guestIndex: number,
    field: string,
    value: string
  ) => {
    const updatedGuests = [...guests];
    updatedGuests[roomIndex][guestIndex][
      field as keyof (typeof updatedGuests)[0][0]
    ] = value;
    setGuests(updatedGuests);
  };

  // Function to update room count and maintain guest data
  const handleRoomChange = (newRoomCount: number) => {
    setRoomCount(newRoomCount);
    setGuests(
      Array.from(
        { length: newRoomCount },
        (_, i) => guests[i] || [{ name: "", email: "", phone: "" }]
      )
    );
  };

  // Function to log all entered details
  const handleProceedToPayment = () => {
    console.log("Booking Information:");
    console.log(`Check-in: Fri 28 Mar 2025 3PM`);
    console.log(`Check-out: Sun 30 Mar 2025 3PM`);
    console.log(`Total Nights: 2 | Adults: 2 | Rooms: ${roomCount}`);

    guests.forEach((room, roomIndex) => {
      console.log(`Room ${roomIndex + 1}:`);
      room.forEach((guest, guestIndex) => {
        console.log(`  Guest ${guestIndex + 1}:`, guest);
      });
    });
  };

  return (
    <Box sx={{ padding: 3 }}>
      <SearchBar />
      <Typography
        sx={{ textAlign: isMobile ? "center" : "" }}
        variant={isMobile ? "h4" : "h2"}
      >
        Review your Booking
      </Typography>

      <Grid container spacing={3}>
        {/* Left Section - 8 Columns */}
        <Grid item xs={12} md={8}>
          {/* Booking Info */}
          <Paper sx={{ padding: 3, marginBottom: 3 }}>
            <Typography variant="h6" fontWeight="bold">
              Booking Information
            </Typography>
            <Grid container spacing={2} mt={1}>
              <Grid item xs={12} md={4}>
                <TextField
                  label="Check-in"
                  value="Fri 28 Mar 2025 3PM"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  label="Check-out"
                  value="Sun 30 Mar 2025 3PM"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  label="Rooms"
                  value={`2 Nights | 2 Adults | ${roomCount} Room${
                    roomCount > 1 ? "s" : ""
                  }`}
                  fullWidth
                />
              </Grid>
            </Grid>
          </Paper>

          {/* Room Selection */}
          <Paper sx={{ padding: 3, marginBottom: 3 }}>
            <Typography variant="h6" fontWeight="bold">
              Select Number of Rooms
            </Typography>
            <TextField
              select
              label="Rooms"
              value={roomCount}
              onChange={(e) => handleRoomChange(Number(e.target.value))}
              fullWidth
              sx={{ mt: 2 }}
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <MenuItem key={num} value={num}>
                  {num} Room{num > 1 ? "s" : ""}
                </MenuItem>
              ))}
            </TextField>
          </Paper>

          {/* Dynamically Generated Room Details */}
          {Array.from({ length: roomCount }).map((_, roomIndex) => (
            <Paper key={roomIndex} sx={{ padding: 3, marginBottom: 3 }}>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <Avatar
                    variant="rounded"
                    src="/room-image.jpg"
                    sx={{ width: 80, height: 80 }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="h6" fontWeight="bold">
                    Deluxe Room {roomIndex + 1}
                  </Typography>
                  <Rating value={4.5} readOnly />
                  <Typography variant="body2">
                    Varca Beach, Varca Village, Salcete - Goa, Goa, India
                  </Typography>
                </Grid>
              </Grid>

              {/* Guest Information for Each Room */}
              <Typography variant="h6" fontWeight="bold" sx={{ mt: 2 }}>
                Guest Information (Room {roomIndex + 1})
              </Typography>

              {guests[roomIndex]?.map((guest, guestIndex) => (
                <Box key={guestIndex} sx={{ mt: 2, position: "relative" }}>
                  <TextField
                    label="Full Name"
                    fullWidth
                    sx={{ mt: 2 }}
                    value={guest.name}
                    onChange={(e) =>
                      updateGuestInfo(
                        roomIndex,
                        guestIndex,
                        "name",
                        e.target.value
                      )
                    }
                  />
                  <TextField
                    label="Email"
                    type="email"
                    fullWidth
                    sx={{ mt: 2 }}
                    value={guest.email}
                    onChange={(e) =>
                      updateGuestInfo(
                        roomIndex,
                        guestIndex,
                        "email",
                        e.target.value
                      )
                    }
                  />
                  <TextField
                    label="Phone"
                    type="tel"
                    fullWidth
                    sx={{ mt: 2 }}
                    value={guest.phone}
                    onChange={(e) =>
                      updateGuestInfo(
                        roomIndex,
                        guestIndex,
                        "phone",
                        e.target.value
                      )
                    }
                  />

                  {/* Remove Guest Button */}
                  {guests[roomIndex].length > 1 && (
                    <IconButton
                      onClick={() => {
                        const updatedGuests = [...guests];
                        updatedGuests[roomIndex] = updatedGuests[
                          roomIndex
                        ].filter((_, i) => i !== guestIndex);
                        setGuests(updatedGuests);
                      }}
                      sx={{ position: "absolute", top: "50%", right: "-30px" }}
                    >
                      <RemoveCircle color="error" />
                    </IconButton>
                  )}
                </Box>
              ))}

              {/* Add Guest Button */}
              <Button
                variant="outlined"
                startIcon={<AddCircle />}
                onClick={() => {
                  const updatedGuests = [...guests];
                  updatedGuests[roomIndex].push({
                    name: "",
                    email: "",
                    phone: "",
                  });
                  setGuests(updatedGuests);
                }}
                sx={{ mt: 3 }}
              >
                Add Guest
              </Button>
            </Paper>
          ))}
        </Grid>

        {/* Right Section - 4 Columns */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ padding: 3 }}>
            <Typography variant="h6" fontWeight="bold">
              Booking Summary
            </Typography>

            {/* Dynamic Pricing Calculation */}
            {Array.from({ length: roomCount }).map((_, index) => (
              <Typography key={index} mt={2}>
                Room {index + 1} Price: ₹5000
              </Typography>
            ))}
            <Typography mt={2}>Taxes & Fees: ₹{roomCount * 500}</Typography>
            <Typography variant="h6" fontWeight="bold" mt={2}>
              Total: ₹{roomCount * 5500}
            </Typography>

            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 3 }}
              onClick={handleProceedToPayment}
            >
              Proceed to Payment
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CheckoutPage;
