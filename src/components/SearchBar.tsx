import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { Dayjs } from "dayjs";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isNotDesktop = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [checkInTime, setCheckInTime] = useState<Dayjs | null>(null);
  const [checkOutTime, setCheckOutTime] = useState<Dayjs | null>(null);
  // State for guests & rooms
  const [roomCount, setRoomCount] = useState(1);
  const [adultCount, setAdultCount] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);

  // Open/Close Dialog
  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);

  const handleSearch = () => {
    console.log("Search Parameters:", {
      children: childrenCount,
      adult: adultCount,
      room: roomCount,
      checkIn: checkInTime?.format("YYYY-MM-DD HH:mm") || "Not Selected",
      checkOut: checkOutTime?.format("YYYY-MM-DD HH:mm") || "Not Selected",
    });
    navigate(`/hotels`);
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          padding: isMobile ? 2 : isNotDesktop ? 4 : 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography
          sx={{
            textAlign: isMobile ? "center" : isNotDesktop ? "" : "",
            fontSize: isMobile
              ? theme.typography.subtitle1
              : isNotDesktop
              ? theme.typography.h3
              : theme.typography.h3,
          }}
        >
          Find Available Hotels
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile
              ? "column"
              : isNotDesktop
              ? "column"
              : "row",

            alignItems: "center",
            gap: 2,
          }}
        >
          {/* Check-In Time */}
          <Box width={"100%"}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateTimePicker"]}>
                <DateTimePicker
                  label="Check-In Time"
                  onChange={(newValue) => setCheckInTime(newValue)}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Box>

          {/* Check-Out Time */}
          <Box width={"100%"}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateTimePicker"]}>
                <DateTimePicker
                  label="Check-Out Time"
                  onChange={(newValue) => setCheckOutTime(newValue)}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Box>

          {/* Guests & Rooms Input */}
          <Box width={"100%"} marginTop={isNotDesktop ? "" : "8px"}>
            <TextField
              fullWidth
              label="Guests & Rooms"
              value={`${roomCount} Room(s), ${adultCount} Adult(s), ${childrenCount} Child(ren)`}
              onClick={handleOpenDialog}
            />
          </Box>

          <Box width={"100%"}>
            <Button
              sx={{
                width: "100%",
                padding: isMobile ? "12px" : isNotDesktop ? "12px" : "12px",
                marginTop: isMobile ? "" : isNotDesktop ? "" : "8px",
                background: "linear-gradient(96deg,#53b2fe,#065af3)",
                borderRadius: "16px",
                fontSize: "18px",
              }}
              variant="contained"
              onClick={handleSearch}
            >
              Search
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Dialog (Popup) for Guest & Room Selection */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle>
          Select Guests & Rooms
          <IconButton
            onClick={handleCloseDialog}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography>Rooms</Typography>
            <Button
              onClick={() => setRoomCount(roomCount > 1 ? roomCount - 1 : 1)}
            >
              -
            </Button>
            <Typography>{roomCount}</Typography>
            <Button onClick={() => setRoomCount(roomCount + 1)}>+</Button>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography>Adults</Typography>
            <Button
              onClick={() => setAdultCount(adultCount > 1 ? adultCount - 1 : 1)}
            >
              -
            </Button>
            <Typography>{adultCount}</Typography>
            <Button onClick={() => setAdultCount(adultCount + 1)}>+</Button>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography>Children</Typography>
            <Button
              onClick={() =>
                setChildrenCount(childrenCount > 0 ? childrenCount - 1 : 0)
              }
            >
              -
            </Button>
            <Typography>{childrenCount}</Typography>
            <Button onClick={() => setChildrenCount(childrenCount + 1)}>
              +
            </Button>
          </Box>

          <Button
            variant="contained"
            onClick={handleCloseDialog}
            sx={{ mt: 2 }}
          >
            Done
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SearchBar;
