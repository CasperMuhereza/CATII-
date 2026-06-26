const video = document.getElementById("wildlifeVideo");
const actionButton = document.getElementById("videoActionBtn");
const btnText = document.getElementById("btnText");
const btnIcon = document.getElementById("btnIcon");

function updateButtonLabel() {
  const isHidden = video.hidden;
  
  // Update text
  btnText.textContent = isHidden ? "Show and Play Video" : "Hide Video";
  
  // Swap Bootstrap Icons based on state
  if (isHidden) {
    btnIcon.className = "bi bi-play-circle-fill fs-5";
  } else {
    btnIcon.className = "bi bi-eye-slash-fill fs-5";
  }
  
  actionButton.setAttribute("aria-pressed", String(isHidden));
}

actionButton.addEventListener("click", () => {
  if (video.hidden) {
    video.hidden = false;
    video.play().catch(() => {
      // Browser autoplay rules may block playback until direct user interaction.
    });
    updateButtonLabel();
    return;
  }

  if (video.paused || video.ended) {
    video.play().catch(() => {
      // Playback can fail when media policies prevent it.
    });
    return;
  }

  video.pause();
  video.hidden = true;
  updateButtonLabel();
});

// Initialize button state on load
updateButtonLabel();