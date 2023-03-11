const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const fetch = require("node-fetch");

// inital state
const initalState = {
    loading: false,
    videos: [],
    error: ''
};

//create async Middleware function
const fetchRelaredVideos = createAsyncThunk("realtedVideo/fetchRelaredvideos", async (tags) => {

    const response = await fetch(`http://localhost:9000/videos?${tags.map((tag) => `tags_like=${tag}`).join("&")}`);
    const videos = await response.json();
    // console.log(`sserver output :${videos}`);
    return videos;
})


const relatedVideoslice = createSlice({
    name: "videos",
    initialState: initalState,
    extraReducers: (builder) => {
        builder.addCase(fetchRelaredVideos.pending, (state) => {
            state.loading = true,
                state.error = '';
        })

        builder.addCase(fetchRelaredVideos.fulfilled, (state, action) => {
            state.loading = false,
                state.videos = action.payload,
                state.error = ''
        })

        builder.addCase(fetchRelaredVideos.rejected, (state, action) => {
            state.loading = false,
                state.videos = [],
                state.error = action.error.message
        });


    },

});


module.exports = relatedVideoslice.reducer,
    module.exports.fetchRelaredVideos = fetchRelaredVideos