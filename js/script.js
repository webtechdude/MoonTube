let video_list = [...videoList]
let user_List = [...users]



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

const subscription_box = document.querySelector(".sub_container");

subscription_box.innerHTML = user_List.map(({ name, image, subscribers }) => {
    return (
        `
        <li class="subs"><a href=""><img src="${image}" alt="person"> ${name}</a></li>
        `
    )


}).join("")

const startVideo = (videoIndex) => {
    const vidBox = document.getElementById("video_box");
    const srcVid = document.getElementById('source_video');
    let channelName = document.querySelector(".name");
    let channelImg = document.querySelector(".channelPic");
    let subscriberCount = document.querySelector(".subscriber_count");
    const selectedVid = video_list[videoIndex];
    let { channel, src, userImg, subscribers, title, views, ago, vidSrc } = selectedVid;
    console.log(userImg)
    vidBox.pause()
    srcVid.src = vidSrc;
    vidBox.load()
    vidBox.play()
    channelName.textContent = channel;
    channelImg.src = userImg;
    subscriberCount.textContent = subscribers;
}

