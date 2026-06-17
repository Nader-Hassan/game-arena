document.querySelectorAll(".logo-track").forEach((track) => {
  const items = track.innerHTML;
  track.innerHTML = items + items;
});
