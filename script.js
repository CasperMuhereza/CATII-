const video = document.getElementById("wildlifeVideo");
const actionButton = document.getElementById("videoActionBtn");

function updateButtonLabel() {
  const isHidden = video.hidden;
  actionButton.textContent = isHidden ? "Show and Play Video" : "Hide Video";
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

updateButtonLabel();