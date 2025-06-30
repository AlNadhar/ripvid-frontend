// FILE: script.js (Frontend)
// Replace the entire content with this:

document.getElementById("download-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const url = document.getElementById("video-url").value;

  const response = await fetch("https://ripvid-backend.onrender.com/api/download-info", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ url })
  });

  const data = await response.json();
  document.getElementById("result").textContent = JSON.stringify(data, null, 2);
});
