import { useMediaQuery, Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

interface HotelCardProps {
  id: number;
  image: string;
  name: string;
  location: string;
  price: string;
  rating: string;
}

const HotelCard: React.FC<HotelCardProps> = ({
  id,
  image,
  name,
  location,
  price,
  rating,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isNotDesktop = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/hotels/${id}`);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: isMobile
          ? ""
          : isNotDesktop
          ? "space-between"
          : "space-between",

        cursor: "pointer",
        margin: "16px 0px",
        padding: 2,
        borderRadius: 2,
        border: "1px solid #ddd",
        boxShadow: "0px 2px 8px rgba(0,0,0,0.1)",
        transition: "0.3s",
        "&:hover": {
          boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
        },
      }}
      onClick={handleClick}
    >
      <Box display={"flex"} flexDirection={isMobile ? "column" : "row"}>
        <Box
          component="img"
          src={image}
          alt={name}
          sx={{
            width: isMobile ? "100%" : 200,
            height: 150,
            objectFit: "cover",
            borderRadius: 2,
          }}
        />
        <Box padding={2} display={"flex"} flexDirection={"column"} gap={1}>
          <Typography variant={isMobile ? "h6" : isNotDesktop ? "h4" : "h4"}>
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {location}
          </Typography>
          <Box>
            <Typography
              border={"1px solid grey"}
              variant="body2"
              color="textSecondary"
              sx={{
                display: "inline-block",
                padding: "4px 8px",
                borderRadius: 1,
              }}
            >
              Restaurent
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{ padding: 2 }}
        display={"flex"}
        flexDirection={"column"}
        gap={1.4}
      >
        <Typography
          variant="body2"
          color={theme.palette.primary.main}
          fontWeight={"bold"}
        >
          {rating}
        </Typography>
        <Typography
          variant={isMobile ? "h6" : isNotDesktop ? "h4" : "h4"}
          fontWeight={"bold"}
        >
          {price}
        </Typography>

        <Button
          variant="contained"
          sx={{
            textTransform: "capitalize",
            fontSize: "12px",
          }}
        >
          See Availability
        </Button>
      </Box>
    </Box>
  );
};

export default HotelCard;
