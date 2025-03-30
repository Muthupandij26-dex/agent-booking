import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import HotelCard from "../components/HotelCard";
import SearchBar from "../components/SearchBar";

const Hotels = () => {
  const theme = useTheme();
  const isNotDesktop = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  console.log(isNotDesktop, isMobile, "Responsive");

  return (
    <>
      <SearchBar />
      <Box
        sx={{
          width: "100%",
          padding: isMobile ? 2 : isNotDesktop ? 4 : 2,
        }}
      >
        <Typography
          sx={{
            textAlign: isMobile ? "center" : isNotDesktop ? "" : "",
          }}
          variant={isMobile ? "h2" : isNotDesktop ? "h5" : "h2"}
        >
          Most Booked by Travellers
        </Typography>
        <HotelCard
          id={1}
          image="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg"
          name="Hotel Ariana Residency, Mumbai"
          location="New York | USA"
          price={"₹ 6,388"}
          rating={"Good 3.8"}
        />
        <HotelCard
          id={2}
          image="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
          name="Hotel Mid town"
          location="New York | USA"
          price={"₹ 6,388"}
          rating={"Excellant 4.3"}
        />
        <HotelCard
          id={3}
          image="https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg"
          name="Super Townhouse Bombay Exhibition Centre Goregaon"
          location="New York | USA"
          price={"₹8,000"}
          rating={"Very Good 4.0"}
        />
      </Box>

      <Typography variant={isMobile ? "h2" : isNotDesktop ? "h5" : "h4"}>
        {isMobile ? "Mobile view" : isNotDesktop ? "tablet" : "desktop"}
      </Typography>
    </>
  );
};

export default Hotels;
