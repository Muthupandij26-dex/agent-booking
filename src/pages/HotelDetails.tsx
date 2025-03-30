import { useNavigate, useParams } from "react-router-dom";
import {
  Typography,
  Box,
  useMediaQuery,
  useTheme,
  Button,
} from "@mui/material";
import SearchBar from "../components/SearchBar";
import { useEffect, useState } from "react";
import { fetchHotelById, Hotel } from "../utils/Hotels.utils";
import { RoomCard } from "../components/RoomCard";

const HotelDetails = () => {
  const { id } = useParams();
  const theme = useTheme();
  const navigate = useNavigate();
  const isNotDesktop = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [hotel, setHotel] = useState<Hotel>({
    id: 0,
    name: "",
    rooms: [],
  });

  const getRoomCategories = async () => {
    if (!id) return;
    const hotelDetails = await fetchHotelById(parseInt(id, 10));
    console.log(hotelDetails, "hotelDetails");
    if (hotelDetails) {
      setHotel(hotelDetails);
    }
  };

  useEffect(() => {
    getRoomCategories();
  }, []);

  const handleCheckout = () => {
    navigate("/checkout");
  };

  console.log(hotel, "heySinleHotel");

  return (
    <Box>
      <SearchBar />

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
          }}
          variant={isMobile ? "h2" : isNotDesktop ? "h5" : "h2"}
        >
          {hotel.name}
        </Typography>

        <Box
          display={"flex"}
          flexDirection={isMobile ? "column" : isNotDesktop ? "column" : "row"}
          flexWrap={"wrap"}
          gap={2}
        >
          {hotel.rooms.length > 0 && (
            <>
              {hotel.rooms.map((data) => (
                <RoomCard room={data} />
              ))}
            </>
          )}
        </Box>

        <Box onClick={handleCheckout}>
          <Button variant="contained">Check-out</Button>
        </Box>
        <Typography variant={isMobile ? "h2" : isNotDesktop ? "h5" : "h4"}>
          {isMobile ? "Mobile view" : isNotDesktop ? "tablet" : "desktop"}
        </Typography>
      </Box>
    </Box>
  );
};

export default HotelDetails;
