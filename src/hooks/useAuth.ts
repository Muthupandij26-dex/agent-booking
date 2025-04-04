const useAuth = () => {
  const setToken = (token: string) => {
    sessionStorage.setItem("agentBooking-access-token", token);
  };

  const setKYCStatus = (status: string) => {
    sessionStorage.setItem("kycStatus", status);
  };
  
  const getKYCStatus = () => {
    if (sessionStorage.getItem("kycStatus") === "COMPLETED") {
      return true
    }
    else {
      return false;
    }
  };

  const getToken = () => {
    return sessionStorage.getItem("agentBooking-access-token");
  };

  const removeToken = () => {
    sessionStorage.removeItem("agentBooking-access-token");
  };

  const isAuthenticated = () => {
    return !!getToken();
  };

  const isKycCompleted = () => {
    return !!getKYCStatus();
  }

  return { isAuthenticated, setToken, getToken, removeToken, setKYCStatus, isKycCompleted };
};

export default useAuth;
