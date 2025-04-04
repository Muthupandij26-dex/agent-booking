import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});


const getTokenFromSessionStorage = () => {
  const token = sessionStorage.getItem("agentBooking-access-token");
  const sanitizedToken = token ? token.replace(/"/g, "") : "";
  return sanitizedToken;
};

// Request interceptor
instance.interceptors.request.use(
  (config) => {
    const token = getTokenFromSessionStorage(); // Or fetch from memory
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle the response properly
instance.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response;
    } else {
      return response.data;
    }
  },
  (error) => {
    if (error.response) {
      return error.response;
    }
    return Promise.reject(error);
  }
);


export default instance;
