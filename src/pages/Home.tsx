import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const Home = () => {
  const theme = useTheme();
  const isNotDesktop = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  console.log(isNotDesktop, isMobile, "Responsive");
  return (
    <Box
      sx={{
        backgroundImage:
          "url('https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/bg4.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textAlign: "center",
        px: 2,
      }}
    >
      <Box
        sx={{
          width: isMobile ? "90%" : isNotDesktop ? "70%" : "100%",
          backgroundColor: "#fff",
          padding: isMobile ? 2 : isNotDesktop ? 4 : 6,
          borderRadius: "12px",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography variant={isMobile ? "h6" : isNotDesktop ? "h5" : "h4"}>
          Hotel Available search
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: isNotDesktop ? "column" : "row",
            gap: 2,
          }}
        >
          <Box width={"100%"}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateTimePicker"]}>
                <DateTimePicker label="Check-In Time" />
              </DemoContainer>
            </LocalizationProvider>
          </Box>

          <Box width={"100%"}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateTimePicker"]}>
                <DateTimePicker label="Check-Out Time" />
              </DemoContainer>
            </LocalizationProvider>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
