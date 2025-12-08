import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllChefs } from "../../services/chefService";

// ============================
// Async thunk
// ============================
export const getAllChefs = createAsyncThunk(
  "chef/getAllChefs",
  async (_, thunkAPI) => {
    try {
      return await fetchAllChefs();
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to load chefs"
      );
    }
  }
);

// ============================
// Initial State
// ============================
const initialState = {
  chefs: [],
  isLoading: false,
  isError: false,
};

// ============================
// Slice
// ============================
const chefSlice = createSlice({
  name: "chef",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllChefs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllChefs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.chefs = action.payload;
      })
      .addCase(getAllChefs.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default chefSlice.reducer;
