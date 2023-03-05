const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const fetch = require("node-fetch");

// inital state
const initalState = {
    loading: false,
    posts: [],
    error: ''
};

//create async Middleware function
const fetchPosts = createAsyncThunk("post/fetchPosts", async () => {

    const response = await fetch("http://localhost:9000/videos");
    const posts = await response.json();
    HTMLFormControlsCollection.log(`sserver output :${posts}`);
    return posts;
})


//get related posts by tag
const fetchRelatedPost = (tags) => {
    console.log();
};

const postSlice = createSlice({
    name: "post",
    initialState: initalState,
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state, action) => {
            state.loading = true,
                state.error = '';
        })

        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false,
                state.posts = action.payload,
                state.error = ''
        })

        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.loading = false,
                state.posts = [],
                state.error = action.error.message
        });


    },

});


module.exports = postSlice,
    module.exports.fetchPosts = fetchPosts