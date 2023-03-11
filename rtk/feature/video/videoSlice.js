const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const fetch = require("node-fetch");

// inital state
const initalState = {
    loading: false,
    video: {},
    error: ''
};

//create async Middleware function
const fetchVideo = createAsyncThunk("video/fetchvideos", async () => {

    const response = await fetch("http://localhost:9000/videos");
    const video = await response.json();
    // console.log(`sserver output :${videos}`);
    return video;
})

const videoSlice = createSlice({
    name: "video",
    initialState: initalState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideo.pending, (state) => {
                state.loading = true;
                state.error = '';
            })
            .addCase(fetchVideo.fulfilled, (state, action) => {
                state.loading = false;
                state.video = action.payload;
                state.error = '';
            })
            .addCase(fetchVideo.rejected, (state, action) => {
                state.loading = false;
                state.video = {};
                state.error = action.error.message;
            });


    },

});


module.exports = videoSlice.reducer;
module.exports.fetchVideo = fetchVideo;