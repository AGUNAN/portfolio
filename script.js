const downloadBtn = document.getElementById("download-btn");

downloadBtn.addEventListener("click", function() {
  const fileName = "resume.pdf"; // file name
  const fileSource = "./images/resume.pdf"; // file source URL

  // Create a link element
  const link = document.createElement("a");
  link.href = fileSource;
  link.download = fileName;

  // Create a click event to trigger the download
  link.click();
});

//image slider
let counter = 1;
setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 4000);
