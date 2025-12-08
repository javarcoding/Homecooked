import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchFeaturedMeals } from "../../services/menuService";

// ============================
// Async Thunk
// ============================
export const getFeaturedMeals = createAsyncThunk(
  "menu/getFeaturedMeals",
  async (_, thunkAPI) => {
    try {
      return await fetchFeaturedMeals();
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to load meals"
      );
    }
  }
);

// ============================
// Initial State
// ============================
const initialState = {
  meals: [],
  isLoading: false,
  isError: false,
  message: null,
};

// ============================
// Slice
// ============================
const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // PENDING
      .addCase(getFeaturedMeals.pending, (state) => {
        state.isLoading = true;
      })

      // SUCCESS
      .addCase(getFeaturedMeals.fulfilled, (state, action) => {
        state.isLoading = false;
        state.meals = action.payload;
      })

      // ERROR
      .addCase(getFeaturedMeals.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default menuSlice.reducer;
