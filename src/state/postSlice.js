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

export const deletePost = createAsyncThunk("", async (name, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;
  const apiLink = `https://api.publicapis.org/entries/${name}`;

  try {
    const res = await fetch(apiLink.entries, {
      method: "DELETE",
    });
    const data = await res.json();
    return data.entries;
    // return data;
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
      // state.records = state.records.filter((x, index) => index !== action.index);
      state.records = state.records.filter(
        (el) => action.payload.API !== el.API
      );
    },
    [deletePost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default postSlice.reducer;
