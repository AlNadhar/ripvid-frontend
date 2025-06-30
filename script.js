
document.getElementById("download-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const url = document.getElementById("video-url").value;

  try {
    const response = await fetch(`https://yt-api-fxi2.onrender.com/api/info?url=${encodeURIComponent(url)}`);
    const data = await response.json();

    if (data && data.formats) {
      let output = '';
      data.formats.forEach(format => {
        if (format.url && format.qualityLabel) {
          output += `<a href="${format.url}" target="_blank">${format.qualityLabel}</a><br>`;
        }
      });
      document.getElementById("result").innerHTML = output || "No downloadable formats found.";
    } else {
      document.getElementById("result").textContent = "Invalid response or no formats.";
    }
  } catch (err) {
    document.getElementById("result").textContent = "Error fetching video info.";
  }
});
