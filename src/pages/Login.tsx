import { Box, TextField, useMediaQuery, useTheme } from "@mui/material";
import { Button } from "../components";
import Logo from "../components/Logo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isNotDesktop = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [formData, setFormData] = useState({
    agentCode: "",
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    console.log("Login Data:", formData);
    navigate("/hotels");
    // if (formData.agentCode && formData.username && formData.password) {
    //   console.log("Login Data:", formData);
    // } else {
    //   alert("Please fill in all fields!"); // Validation message
    // }
  };

  return (
    <Box
      sx={{
        backgroundImage:
          "url('https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/bg3.jpg')",
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
          width: isMobile ? "90%" : isNotDesktop ? "70%" : "40%",
          backgroundColor: "#fff",
          padding: isMobile ? 2 : isNotDesktop ? 4 : 6,
          borderRadius: "12px",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Logo />

          <Box width={"100%"}>
            <TextField
              fullWidth
              label="Username"
              name="loginName"
              value={formData.username}
              onChange={handleChange}
              sx={{
                "& .MuiInputBase-input": {
                  fontSize: theme.typography.subtitle2,
                },
              }}
            />
          </Box>

          <Box width={"100%"}>
            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              sx={{
                "& .MuiInputBase-input": {
                  fontSize: theme.typography.subtitle2,
                },
              }}
            />
          </Box>
          <Box width={"100%"}>
            <TextField
              fullWidth
              label="LoginType"
              name="loginType"
              value={formData.agentCode}
              onChange={handleChange}
              sx={{
                "& .MuiInputBase-input": {
                  fontSize: theme.typography.subtitle2,
                },
              }}
            />
          </Box>
          <Box width={"100%"} mt={2}>
            <Button variant="primary" label="LOGIN" onClick={handleLogin} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
