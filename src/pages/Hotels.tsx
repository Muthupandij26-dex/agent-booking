import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import HotelCard from "../components/HotelCard";
import SearchBar from "../components/SearchBar";
import { useNavigate } from "react-router-dom";
export const mockData = [
  {
    id: 1,
    name: "SinQ Beach Resort",
    location: "Calangute",
    description:
      "Near Calangute Beach, stunning pool area surrounded by lush greenery, rooms with pool views.",
    rating: 4.0,
    reviews: 5519,
    oldPrice: "₹2,700",
    newPrice: "₹1,808",
    taxes: "₹5510 taxes & fees",
    image:
      "https://r1imghtlak.mmtcdn.com/0f00d12b-9701-420b-b944-7cf35bc4d064.jpg",
  },
  {
    id: 2,
    name: "Taj Exotica Resort",
    location: "Benaulim",
    description:
      "Luxury beach resort with private villas, fine dining, and spa facilities.",
    rating: 4.8,
    reviews: 8231,
    oldPrice: "₹15,000",
    newPrice: "₹12,500",
    taxes: "₹1,500 taxes & fees",
    image:
      "https://promos.makemytrip.com/altacco_luxe/imgs/luxe_villa.jpg?im=Resize=(273.75,210)",
  },
  {
    id: 3,
    name: "The Lalit Golf Resort",
    location: "Palolem",
    description:
      "5-star beach resort with a championship golf course and world-class amenities.",
    rating: 4.5,
    reviews: 4123,
    oldPrice: "₹10,000",
    newPrice: "₹8,499",
    taxes: "₹1,200 taxes & fees",
    image:
      "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202307182100313629-676da184897211ee8b660a58a9feac02.jpg?output-quality=75&downsize=243:162&output-format=jpg",
  },
  {
    id: 4,
    name: "Radisson Blu Resort",
    location: "Cavelossim Beach",
    description:
      "Upscale resort with a private beach, spacious villas, and an infinity pool.",
    rating: 4.7,
    reviews: 6798,
    oldPrice: "₹9,500",
    newPrice: "₹7,999",
    taxes: "₹1,300 taxes & fees",
    image:
      "https://r1imghtlak.mmtcdn.com/e965fd86780c11e7ad04025f77df004f.jpg?output-quality=75&downsize=243:162&output-format=webp",
  },
  {
    id: 5,
    name: "Marriott Resort & Spa",
    location: "Miramar Beach",
    description:
      "Luxury resort with oceanfront dining, spa, and breathtaking sunset views.",
    rating: 4.9,
    reviews: 7521,
    oldPrice: "₹18,000",
    newPrice: "₹14,999",
    taxes: "₹2,000 taxes & fees",
    image:
      "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/202312221020535437-e81855aa-6a1a-4721-8fd5-ec303bf4608b.jpg?output-quality=75&downsize=243:162&output-format=webp",
  },
  {
    id: 6,
    name: "Alila Diwa Goa",
    location: "Majorda",
    description:
      "Boutique resort offering wellness retreats, poolside lounges, and gourmet cuisine.",
    rating: 4.6,
    reviews: 5984,
    oldPrice: "₹13,500",
    newPrice: "₹11,299",
    taxes: "₹1,800 taxes & fees",
    image:
      "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/200705090718362615-1672e5767d6211ee99770a58a9feac02.jpg?output-quality=75&downsize=243:162&output-format=webp",
  },
  {
    id: 7,
    name: "ITC Grand Goa Resort",
    location: "Arossim Beach",
    description:
      "5-star resort with Indo-Portuguese architecture, lush gardens, and lagoon pools.",
    rating: 4.8,
    reviews: 8123,
    oldPrice: "₹20,000",
    newPrice: "₹16,500",
    taxes: "₹2,500 taxes & fees",
    image:
      "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/201302141837083549-2ccb73aa9fd711e9a00d0242ac110002.jpg?output-quality=75&downsize=243:162&output-format=jpg",
  },
  {
    id: 8,
    name: "The Leela Goa",
    location: "Mobor Beach",
    description:
      "Luxury beachfront resort with lavish villas, golf course, and private lagoons.",
    rating: 4.9,
    reviews: 9320,
    oldPrice: "₹25,000",
    newPrice: "₹21,000",
    taxes: "₹3,000 taxes & fees",
    image:
      "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/htl-imgs/200705090718362615-1672e5767d6211ee99770a58a9feac02.jpg?output-quality=75&downsize=243:162&output-format=webp",
  },
];
const Hotels = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isNotDesktop = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleCardClick = () => {
    navigate("/roomCategories");
  };
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
            fontSize: isMobile
              ? theme.typography.subtitle1
              : isNotDesktop
              ? theme.typography.h3
              : theme.typography.h3,
          }}
        >
          Most Booked by Travellers
        </Typography>

        <HotelCard handleCardClick={() => handleCardClick()} />
      </Box>
    </>
  );
};

export default Hotels;
