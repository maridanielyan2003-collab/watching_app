//
// var videoCard= document.getElementById("myvideo");
// var myVideo = document.querySelectorAll(".my-video");

// function formatTime(seconds) {
//     var minutes = Math.floor(seconds / 60);
//     var sec = Math.floor(seconds % 60);
//     return minutes + ":" + (sec < 10 ? "0" : "") + sec;
//     event.stopPropagation();

// }
// for (let i = 0; i < videoCards.length; i++) {
//     var rng = videoCards[i].querySelector(".timeline-range");
//     var span = videoCards[i].querySelector(".current-time");
//     var span1 = videoCards[i].querySelector(".duration-time");

//     event.stopPropagation();
//     myVideo[i].onloadeddata = function () {
//         rng.max = myVideo[i].duration;
//         span1.textContent = formatTime(myVideo[i].duration);
//     }
//     myVideo[i].ontimeupdate = function () {
//         rng.value = myVideo[i].currentTime;
//         span.textContent = formatTime(myVideo[i].currentTime);
//     }
//     rng.oninput = function () {
//         myVideo[i].currentTime = rng.value;
//     };
// }

// function testt() {
//     videoCard.onclick = function () {

//         var playBtn = videoCard.querySelector(".play-icon");
//         var pauseBtn = videoCard.querySelector(".pause-icon");

//         if (myVideo.paused) {
//             myVideo.play();
//             if (playBtn) playBtn.style.display = "none";
//             if (pauseBtn) pauseBtn.style.display = "inline-block";
//         } else {
//             myVideo.pause();
//             if (pauseBtn) pauseBtn.style.display = "none";
//             if (playBtn) playBtn.style.display = "inline-block";
//         }
//     }
// }

// function pluse() {
//     if (video.volume < 1) {
//         video.volume = Math.min(1, video.volume + 0.1);
//     }
// }
// function minus() {
//     if (video.volume > 0) {
//         video.volume = Math.max(0, video.volume - 0.1);
//     }
//     event.stopPropagation();
// }
// video.onvolumechange = function () {
//     console.log("Ընթացիկ ձայնի մակարդակը:", video.volume.toFixed(1));

// };




// kpnel myvideo-in

// grel function vory play kam pause kani videon



// var videoCards = document.querySelectorAll(".video-card");
// var videoGallery = document.querySelector(".video-gallery");
// var mainView = document.querySelector(".main-watch-view");
// var bigPlayer = document.querySelector(".big-player");
// var bigSource = bigPlayer.querySelector("source");
// var bigTitle = document.querySelector(".big-title");
// var bigViews = document.querySelector(".big-views");
// var backBtn = document.querySelector(".back-to-gallery-btn");

// function toggleVideo(i) {
//     var card = videoCards[i];
//     var video = card.querySelector(".my-video");
//     var playBtn = card.querySelector(".play-icon");
//     var pauseBtn = card.querySelector(".pause-icon");

//     if (video.paused) {
//         video.play();
//         if (playBtn) { playBtn.style.display = "none"; }
//         if (pauseBtn) { pauseBtn.style.display = "inline-block"; }
//     } else {
//         video.pause();
//         if (playBtn) { playBtn.style.display = "inline-block"; }
//         if (pauseBtn) { pauseBtn.style.display = "none"; }
//     }
// }


// function openBigVideo(i){
//     var card = videoCards[i];
//     console.log("Սեղմվեց ինդեքսը՝", i);
//     var video = card.querySelector(".my-video");
//     var videoSrc = video.querySelector("source").getAttribute("src"); 
//     var title = card.querySelector(".video-info h3").textContent;    
//     var views = card.querySelector(".video-info p").textContent;

//     videoGallery.style.display = "none";
//     mainView.style.display = "block";

//     bigSource.src = videoSrc;
//     bigPlayer.load();
//     bigPlayer.play();
//     bigTitle.textContent = title;
//     bigViews.textContent = views;

//     bigPlayer.onloadeddata = function () {
//         bigTimeline.max = bigPlayer.duration;
//         bigDurationTime.textContent = formatTime(bigPlayer.duration);
//     };

//     bigPlayer.ontimeupdate = function () {
//         bigTimeline.value = bigPlayer.currentTime;
//         bigCurrentTime.textContent = formatTime(bigPlayer.currentTime);
//     };

//     bigTimeline.oninput = function () {
//         bigPlayer.currentTime = bigTimeline.value;
//     };
// }
                   



var videoCards = document.querySelectorAll(".video-card");
var videoGallery = document.querySelector(".video-gallery");
var mainView = document.querySelector(".main-watch-view");
var bigPlayer = document.querySelector(".big-player");
var bigSource = bigPlayer.querySelector("source");
var bigTitle = document.querySelector(".big-title");
var bigViews = document.querySelector(".big-views");
var backBtn = document.querySelector(".back-to-gallery-btn");



function openBigVideo(i) {
    var card = videoCards[i];
    var video = card.querySelector(".my-video");
    var videoSrc = video.querySelector("source").getAttribute("src"); 
    var title = card.querySelector(".video-info h3").textContent;    
    var views = card.querySelector(".video-info p").textContent;

    videoGallery.style.display = "none";
    mainView.style.display = "block";

    bigSource.src = videoSrc;
    bigPlayer.load();
    bigPlayer.play();
    bigTitle.textContent = title;
    bigViews.textContent = views;

    bigPlayer.onloadeddata = function () {
        bigTimeline.max = bigPlayer.duration;
        bigDurationTime.textContent = formatTime(bigPlayer.duration);
    };

    bigPlayer.ontimeupdate = function () {
        bigTimeline.value = bigPlayer.currentTime;
        bigCurrentTime.textContent = formatTime(bigPlayer.currentTime);
    };

    bigTimeline.oninput = function () {
        bigPlayer.currentTime = bigTimeline.value;
    };
}
function BigVideo() {
    var bigPlayIcon = document.getElementById("bigPlayIcon");
    var bigPauseIcon = document.getElementById("bigPauseIcon");

    if (bigPlayer.paused) {
       bigPlayer.play();
        if (bigPlayIcon) { bigPlayIcon.style.display = "none"; }
        if (bigPauseIcon) { bigPauseIcon.style.display = "inline-block"; }
    } else {
        bigPlayer.pause();
        if (bigPlayIcon) { bigPlayIcon.style.display = "inline-block"; }
        if (bigPauseIcon) { bigPauseIcon.style.display = "none"; }
    }
}
bigPlayer.onclick = function() {
    BigVideo();
};


function formatTime(seconds) {
    var minutes = Math.floor(seconds / 60);
    var secs = Math.floor(seconds % 60);
    if (secs < 10) {
        secs = "0" + secs;
    }
    return minutes + ":" + secs;
}

backBtn.onclick = function () {
    mainView.style.display = "none";
    videoGallery.style.display = "grid";
        
    bigPlayer.pause();
}


var bigCurrentTime = document.getElementById("bigCurrentTime");
var bigVolumeRange = document.getElementById("bigVolumeRange");
var bigDurationTime=document.getElementById("bigDurationTime")
var volume=document.getElementById("volume")

if(bigCurrentTime){
bigCurrentTime.onclick = function() {
    event.stopPropagation();
};
}
if(bigVolumeRange){
bigVolumeRange.onclick = function() {
    bigPlayer.volume = bigVolumeRange.value;
    event.stopPropagation();
};
}
if(bigDurationTime){
bigDurationTime.onclick = function() {
    event.stopPropagation();
};
}
if(volume){
    volume.onclick=function(){
    event.stopPropagation();

    }
}