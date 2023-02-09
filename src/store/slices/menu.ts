// THIRD-PARTY IMPORTS
import { createSlice } from "@reduxjs/toolkit";

// PROJECT IMPORTS
import { MenuProps } from "~/types/menu";

const initialState: MenuProps = {
  selectedItem: "Dashboard",
  selectedID: "dashboard",
  drawerOpen: true,
};

const menu = createSlice({
  name: "menu",
  initialState,
  reducers: {
    activeItem(state, action) {
      state.selectedItem = action.payload;
    },

    activeID(state, action) {
      state.selectedID = action.payload;
    },

    openDrawer(state, action) {
      state.drawerOpen = true;
    },
  },
});

export default menu.reducer;

export const { activeItem, openDrawer, activeID } = menu.actions;
