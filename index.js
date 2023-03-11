const store = require("./rtk/store");
const { fetchVideo } = require("./rtk/feature/video/videoSlice");
const { fetchRelaredVideos } = require("./rtk/feature/relatedVideo/relatedVideo");


store.dispatch(fetchVideo()).then(() => {

    const video = store.getState().video.video;
    const tags = video.tags;

    //get related video
    store.dispatch(fetchRelaredVideos(tags)).then(() => {
        const realtedVideos = store.getState().relatedVideos.videos;
        const sortedVideosList = [...realtedVideos].sort((a, b) => {
            // Extract the numerical value from the string and convert to a number
            const aViews = parseFloat(a.views);
            const bViews = parseFloat(b.views);

            if (aViews < bViews) {
                return 1;
            } else if (aViews > bViews) {
                return -1;
            } else {
                return 0;
            }
        });
        console.log(JSON.stringify(sortedVideosList));
    });

});

