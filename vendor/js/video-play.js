function playVideo() {
    var modal = document.getElementById("signup-popup");
    var video = document.getElementById("info-video");
    if (video.style.display === "none" && modal.style.display === "none") {
        video.style.display = "block";
        modal.style.display = "none"
    }
    console.log('test')
  }

  