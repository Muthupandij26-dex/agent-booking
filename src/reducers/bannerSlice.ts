import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type BannerSliceType = {
  
  showLoader: boolean;
  success: boolean;
  error: boolean;
  successMessage: string;
  errorMessage: string;
  loaderMessage: string;
  
};

const initialState: BannerSliceType = {
  
  showLoader: false,
  
  success: false,
  error: false,
  successMessage: "",
  errorMessage: "",
  loaderMessage: "",
  
};

type SuccessType = {
  success: boolean;
  successMessage: string;
};
type ErrorType = {
  error: boolean;
  errorMessage: string;
};

type LoaderType = {
  show: boolean;
  message: string;
};

export const bannerSlice = createSlice({
  name: "bannerSlice",
  initialState,
  reducers: {
    setShowLoader(state, action: PayloadAction<LoaderType>) {
      state.showLoader = action.payload.show;
      state.loaderMessage = action.payload.message;
    },
    setLoaderMessage(state, action: PayloadAction<string>) {
      state.loaderMessage = action.payload;
    },
    setShowSkeletonLoader(state, action: PayloadAction<LoaderType>) {
      
      state.loaderMessage = action.payload.message;
    },
    setSuccess(state, action: PayloadAction<SuccessType>) {
      state.success = action.payload.success;
      state.successMessage = action.payload.successMessage;
      state.showLoader = false;
    },
    setError(state, action: PayloadAction<ErrorType>) {
      state.error = action.payload.error;
      state.errorMessage = action.payload.errorMessage;
      state.showLoader = false;
    },
    clearBannerState(state) {
      state.showLoader = false;
      state.success = false;
      state.error = false;
      state.successMessage = "";
      state.errorMessage = "";
      state.loaderMessage = "";
    },
  },
});

// Actions
export const {
  setShowLoader,
  
  setShowSkeletonLoader,
  setSuccess,
  setError,
  clearBannerState,
} = bannerSlice.actions;

export default bannerSlice.reducer;
