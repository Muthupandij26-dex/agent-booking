import {
  Box,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  useTheme,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { mockData } from "../pages/Hotels";

const HotelCard = (props: any) => {
  const theme = useTheme();
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ width: "100%", maxWidth: "1800px", mx: "auto", p: 2 }}>
        <>
          <Grid container spacing={2}>
            {mockData.map((property) => (
              <Grid item xs={12} sm={6} md={6} lg={4} key={property.id}>
                <Card
                  sx={{
                    boxShadow: 2,
                    cursor: "pointer",
                    height: "100%",
                    width: "100%",
                  }}
                  onClick={() => props.handleCardClick()}
                >
                  <CardMedia
                    component="img"
                    image={property.image}
                    alt={property.name}
                    sx={{
                      width: "100%",
                      height: { xs: 180, sm: 200 },
                      objectFit: "cover",
                    }}
                  />
                  <CardContent>
                    <Typography
                      sx={{
                        fontSize: theme.typography.subtitle2,
                      }}
                      fontWeight="bold"
                    >
                      {property.name} ★★★☆☆
                    </Typography>
                    <Typography
                      sx={{
                        color: theme.palette.primary.main,
                        fontSize: theme.typography.subtitle2.fontSize,
                      }}
                    >
                      {property.location}
                    </Typography>
                    <Typography
                      sx={{
                        color: theme.palette.secondary.main,
                        fontSize: theme.typography.h6,
                        mb: 1,
                      }}
                    >
                      {property.description}
                    </Typography>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography
                        sx={{
                          fontSize: theme.typography.h5,
                          color: theme.palette.secondary.light,
                        }}
                      >
                        Very Good {property.rating} ⭐ ({property.reviews}{" "}
                        Ratings)
                      </Typography>
                      <Box textAlign="right">
                        <Typography
                          variant="body2"
                          sx={{
                            textDecoration: "line-through",
                            fontSize: theme.typography.h6.fontSize,
                            color: theme.palette.secondary.main,
                          }}
                        >
                          {property.oldPrice}
                        </Typography>
                        <Typography
                          sx={{
                            color: theme.typography.subtitle2.color,
                            fontSize: theme.typography.h6.fontSize,
                            fontWeight: "bold",
                          }}
                        >
                          {property.newPrice}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: theme.typography.h6.fontSize,
                            color: theme.palette.secondary.main,
                          }}
                        >
                          {property.taxes} Per Night
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </>
      </Box>
    </LocalizationProvider>
  );
};

export default HotelCard;
