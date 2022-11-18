let video_list = [...videoList]



const videoListContainer = document.getElementById("video_list");


videoListContainer.innerHTML = video_list.map(({ src, title, views, ago }, index) => {
    return (
        `<div class="video" onclick="startVideo(${index})">
                <img src="${src}"
                    alt="videosss">
                <h2 class="video_title">${title}</h2>
                <div class="video_stats">
                    <p class="views">${views} views</p>
                    <p class="ago">${ago} ago</p>
                </div>
            </div>`
    )
}).join('')


const startVideo = (videoIndex) => {
    const vidBox = document.getElementById("video_box");
    const srcVid = document.getElementById('source_video');
    let channelName = document.querySelector(".name")
    const selectedVid = video_list[videoIndex];
    let { src, title, views, ago, channel, vidSrc } = selectedVid;
    vidBox.pause()
    srcVid.src = vidSrc;
    vidBox.load()
    vidBox.play()
    channelName.textContent = channel;
}

