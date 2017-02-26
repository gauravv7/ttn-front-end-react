var vid = document.getElementsByTagName("video")[0];

vid.addEventListener('loadeddata', function() {
  // state of loading
  if(vid.readyState >= 2) {
    vid.play();
  }
});

vid.addEventListener('canplay', function() {
  console.log("playbackrate: "+ vid.playbackRate);
  console.log("isMuted: "+vid.muted);
  console.log("isPaused: "+vid.paused);
  console.log("isNetworkState: "+vid.networkState);
});

vid.addEventListener('timeupdate', function() {
    console.log("currentTime: "+vid.currentTime);
    console.log("duration: "+vid.duration);
});
