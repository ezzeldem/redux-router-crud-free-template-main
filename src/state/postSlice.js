import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = { records: [], loading: false, error: null };

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("https://api.publicapis.org/entries");
      const data = await res.json();
      return data.entries;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deletePost = createAsyncThunk("", async (data, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  const apiLink = "https://api.publicapis.org/entries";

  try {
    await fetch(apiLink.entries, {
      method: "DELETE",
    });
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    // fetch posts
    [fetchPosts.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.records = action.payload;
    },
    [fetchPosts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // delete posts
    [deletePost.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [deletePost.fulfilled]: (state, action) => {
      state.loading = false;
      state.records = state.records.filter((el) => el.id !== action.payload.id);
    },
    [deletePost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default postSlice.reducer;
