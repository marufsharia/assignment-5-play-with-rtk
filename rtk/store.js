const postReducer = require("./feature/post/postSlice");
const { createLogger } = require("redux-logger");
const { configureStore } = require("@reduxjs/toolkit");

const logger = createLogger();

//configure store
const store = configureStore({
    reducer: {
        post: postReducer,
    },
    middleware: (getDefaultMiddlewares) =>
        getDefaultMiddlewares().concat(logger)

})

module.exports = store;

