const submitButton = document.getElementById("quote_submit_btn");

submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("Submit button clicked!");
  // add your custom code here to handle the button click event
});

function playVideo() {
    var modal = document.getElementById("signup-popup");
    var video = document.getElementById("info-video");
    modal.style.display = "none";
    video.style.display = "block"
    console.log('test')
  }


  