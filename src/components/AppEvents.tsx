import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { clearBannerState } from "../reducers/bannerSlice";
import { RootState } from "../store/store";
import { LoaderModal } from "./loaders";
import { Box } from "@mui/material";

const ToastMessage: React.FC = () => {
  const {
    successMessage,
    errorMessage,
    error,
    success,
    showLoader,
    loaderMessage,
  } = useSelector((state: RootState) => state.bannerReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(errorMessage);
      dispatch(clearBannerState());
    }
    if (success) {
      dispatch(clearBannerState());
    }
  }, [successMessage, errorMessage, success, error, dispatch]);

  return (
    <Box>
      {showLoader && <LoaderModal open={showLoader} message={loaderMessage} />}
      <ToastContainer
        position="top-right"
        autoClose={error ? 2000 : 500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
      />
    </Box>
  );
};

export default ToastMessage;
