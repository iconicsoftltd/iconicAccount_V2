import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PermissionState {
  list: any[];
  loaded: boolean;
}

const initialState: PermissionState = {
  list: [],
  loaded: false,
};

const permissionSlice = createSlice({
  name: "permissions",
  initialState,
  reducers: {
    setPermissions(state, action: PayloadAction<any[]>) {
      state.list = action.payload;
      state.loaded = true;
    },
    clearPermissions(state) {
      state.list = [];
      state.loaded = false;
    },
  },
});

export const { setPermissions, clearPermissions } = permissionSlice.actions;
export default permissionSlice.reducer;
