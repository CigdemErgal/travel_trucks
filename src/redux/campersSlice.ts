import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchCampers } from "../services/campersApi";
import type { Camper, CamperFilters } from "../types/camper";

const initialFilters: CamperFilters = {
  location: "",
  form: "",
  engine: "",
  transmission: "",
  AC: false,
  bathroom: false,
  kitchen: false,
  TV: false,
  radio: false,
  refrigerator: false,
  microwave: false,
  gas: false,
  water: false,
};

type CampersState = {
  items: Camper[];
  loading: boolean;
  error: string | null;
  filters: CamperFilters;
  appliedFilters: CamperFilters;
  favorites: string[];
};
const initialState: CampersState = {
  items: [],
  loading: false,
  error: null,
  filters: initialFilters,
  appliedFilters: initialFilters,
  favorites: JSON.parse(localStorage.getItem("favoriteCampers") || "[]"),
};

export const fetchCampersThunk = createAsyncThunk(
  "campers/fetchCampers",
  async (filters: CamperFilters) => {
    return await fetchCampers(filters);
  },
);

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    setFilters(state, action: PayloadAction<CamperFilters>) {
      state.filters = action.payload;
    },

    applyFilters(state) {
      state.appliedFilters = state.filters;
    },

    clearFilters(state) {
      state.filters = initialFilters;
      state.appliedFilters = initialFilters;
    },

    toggleFavorite(state, action: PayloadAction<string>) {
      const camperId = action.payload;
      const isFavorite = state.favorites.includes(camperId);

      if (isFavorite) {
        state.favorites = state.favorites.filter((id) => id !== camperId);
      } else {
        state.favorites.push(camperId);
      }
      localStorage.setItem("favoriteCampers", JSON.stringify(state.favorites));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampersThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.items = [];
      })
      .addCase(
        fetchCampersThunk.fulfilled,
        (state, action: PayloadAction<Camper[]>) => {
          state.loading = false;
          state.items = action.payload;
        },
      )
      .addCase(fetchCampersThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch campers";
        state.items = [];
      });
  },
});

export const { setFilters, applyFilters, clearFilters, toggleFavorite } =
  campersSlice.actions;
export default campersSlice.reducer;
