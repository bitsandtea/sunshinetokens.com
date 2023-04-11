function playVideo() {
    var modal = document.getElementById("signup-popup");
    var video = document.getElementById("info-video");
    if (video.style.display === "hidden") {
        video.style.display = "block";
    }
    if (modal.style.display === "block") {
        modal.style.display = "none";
    }
  }