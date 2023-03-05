const store = require("./rtk/store");
const { fetchPosts } = require("./rtk/feature/post/postSlice");

// subscribre to state changes
// store.subscribe(() => {
//     const post = store.getState();
//     console.log(JSON.stringify(store.getState()));
// });

console.log(store.getState()); // Check if the store is returning the expected value
store.subscribe(() => {
    const post = store.getState();
    console.log(JSON.stringify(post)); // Check if the state is changing and if the JSON.stringify() method is working as expected
});

store.dispatch(fetchPosts());