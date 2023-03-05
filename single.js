// Import necessary modules
const { createSlice, configureStore, createAsyncThunk } = require("@reduxjs/toolkit");
const { createLogger } = require("redux-logger");

const logger = createLogger();

// Define the API URL
const API_URL = "http://localhost:9000/videos";

// Define the initial state
const initialState = {
    videos: [],
    loading: false,
    error: null,
};

// Define the async thunk function to fetch videos from the API
const fetchVideos = createAsyncThunk("videos/fetch", async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
});

// Define the async thunk function to fetch related videos based on the tags
const fetchRelatedVideos = createAsyncThunk(
    "videos/related",
    async (tags) => {
        const url = `${API_URL}?${tags.map((tag) => `tags_like=${tag}`).join("&")}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
);

// Define the slice
const videosSlice = createSlice({
    name: "videos",
    initialState,
    extraReducers: (builder) => {
        builder
            // Handle the fetchVideos.pending action
            .addCase(fetchVideos.pending, (state) => {
                state.loading = true;
            })
            // Handle the fetchVideos.fulfilled action
            .addCase(fetchVideos.fulfilled, (state, action) => {
                state.loading = false;
                state.videos = action.payload;
            })
            // Handle the fetchVideos.rejected action
            .addCase(fetchVideos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            // Handle the fetchRelatedVideos.pending action
            .addCase(fetchRelatedVideos.pending, (state) => {
                state.loading = true;
            })
            // Handle the fetchRelatedVideos.fulfilled action
            .addCase(fetchRelatedVideos.fulfilled, (state, action) => {
                state.loading = false;
                state.videos = action.payload;
            })
            // Handle the fetchRelatedVideos.rejected action
            .addCase(fetchRelatedVideos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

// Create the store
const store = configureStore({
    reducer: {
        videos: videosSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// Dispatch the fetchVideos async thunk
store.dispatch(fetchVideos()).then(() => {
    // Get the tags from the first video
    const video = store.getState().videos.videos;
    const tags = video.tags;
    // Dispatch the fetchRelatedVideos async thunk with the tags
    store.dispatch(fetchRelatedVideos(tags)).then(() => {
        // Sort the videos by views in descending order
        const sortedVideos = store
            .getState()
            .videos.videos.slice().sort((a, b) => b.views - a.views);
        //Log the sorted videos in the console
        console.log(JSON.stringify(sortedVideos));

    });
});