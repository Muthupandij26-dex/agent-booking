import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserDetailsType = {
  agentCode: string;
  name: string;
  kycStatus: string;
  id: string;
};

const initialState: {
  agentCode: string;
  name: string;
  kycStatus: string;
  id: string;
} = {
  agentCode: "",
  name: "",
  kycStatus: "",
  id: "",
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserDetails(state, action: PayloadAction<UserDetailsType>) {
      state.agentCode = action.payload.agentCode;
      state.name = action.payload.name;
      state.kycStatus = action.payload.kycStatus;
      state.id = action.payload.id;
    },
    clearUserDetails(state) {
      state.agentCode = "";
      state.kycStatus = "";
      state.name = "";
      state.id = "";
    },
  },
});

// Actions
export const { setUserDetails, clearUserDetails } = userSlice.actions;

export default userSlice.reducer;
