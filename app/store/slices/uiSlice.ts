import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UIState {
  isModalOpen: boolean;
  activeTab: "supermarket" | "department" | "both";
  searchQuery: string;
  filters: {
    chainName?: string;
    supermarketAisle?: string;
    brand?: string;
  };
}

const initialState: UIState = {
  isModalOpen: false,
  activeTab: "supermarket",
  searchQuery: "",
  filters: {},
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isModalOpen = action.payload;
    },
    setActiveTab: (
      state,
      action: PayloadAction<"supermarket" | "department" | "both">
    ) => {
      state.activeTab = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setFilters: (
      state,
      action: PayloadAction<{
        chainName?: string;
        supermarketAisle?: string;
        brand?: string;
      }>
    ) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearFilters: (state) => {
      state.filters = {};
    },
  },
});

export const {
  setModalOpen,
  setActiveTab,
  setSearchQuery,
  setFilters,
  clearFilters,
} = uiSlice.actions;
export default uiSlice.reducer;
