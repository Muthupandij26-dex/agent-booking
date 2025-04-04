import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserDetailsType = {
  agentCode: string;
  name: string;
  kycStatus: string;
};

const initialState: {
  agentCode: string;
  name: string;
  kycStatus: string;
} = {
  agentCode: "",
  name: "",
  kycStatus: "",
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserDetails(state, action: PayloadAction<UserDetailsType>) {
      state.agentCode = action.payload.agentCode;
      state.name = action.payload.name;
      state.kycStatus = action.payload.kycStatus;
    },
    clearUserDetails(state) {
      state.agentCode = "";
      state.kycStatus = "";
      state.name = "";
    },
  },
});

// Actions
export const { setUserDetails, clearUserDetails } = userSlice.actions;

export default userSlice.reducer;
