import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Button } from "../../components";
import Logo from "../../components/Logo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../../reducers/userSlice";
import { UseApi, UseAuth } from "../../hooks";
import { LoginResponseType, UserFormErrors } from "./login.type";
import DexInput from "../../components/Input";

const Login = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const dispatch = useDispatch();

  const { apiCall } = UseApi<LoginResponseType>();
  const { setToken, setKYCStatus } = UseAuth();
  const isNotDesktop = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState<UserFormErrors>({
    username: "",
    password: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleLogin = async () => {
    setIsSubmitted(true);

    const newErrors: UserFormErrors = {};

    if (!formData.username) {
      newErrors.username = "Username is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      await apiCall({
        loaderDuration: 2000,
        loaderMessage: "Please wait we are logging you in...",
        method: "post",
        url: "/agent/auth/login",
        data: {
          loginName: formData.username,
          password: formData.password,
          loginType: "agent",
        },
        onSuccess: (data: LoginResponseType) => {
          setToken(data.accessToken);
          setKYCStatus(data.agentDetails.kycStatus);

          dispatch(
            setUserDetails({
              agentCode: data.agentDetails.agentCode,
              name: data.agentDetails.name,
              kycStatus: data.agentDetails.kycStatus,
              id: data.agentDetails.id,
            }),
          );

          if (data.agentDetails.kycStatus === "PENDING") {
            navigate("/kycDetails");
          } else {
            navigate("/hotels");
          }
        },
        onError: (error) => {
          console.error("Error fetching data:", error);
        },
      });
    }
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
            <DexInput
              label="Username"
              name="username"
              value={formData.username}
              required={true}
              handleChange={handleChange}
              errorMessage={
                isSubmitted && errors.username ? errors.username : ""
              }
            />
          </Box>

          <Box width={"100%"}>
            <DexInput
              label="Password"
              name="password"
              value={formData.password}
              required={true}
              isPassword={true}
              handleChange={handleChange}
              errorMessage={
                isSubmitted && errors.password ? errors.password : ""
              }
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
