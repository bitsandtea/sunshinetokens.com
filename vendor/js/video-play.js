function playVideo() {
    var modal = document.getElementById("popup");
    var video = document.getElementById("video-player");
    if (video.style.display === "none") {
        video.style.display = "block";
    }
    if (modal.style.display === "block") {
        modal.style.display = "none";
    }
  }