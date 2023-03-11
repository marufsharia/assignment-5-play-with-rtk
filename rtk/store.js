const videoReducer = require("./feature/video/videoSlice");
const relatedVideosReducer = require("./feature/relatedVideo/relatedVideo");
const { createLogger } = require("redux-logger");
const { configureStore } = require("@reduxjs/toolkit");

const logger = createLogger();

//configure store
const store = configureStore({
    reducer: {
        video: videoReducer,
        relatedVideos: relatedVideosReducer,
    },
    middleware: (getDefaultMiddlewares) =>
        getDefaultMiddlewares().concat(logger)

})

module.exports = store;

