const button = document.getElementById("GenerateButton");
const downloadButton = document.getElementById("DownloadButton");

downloadButton.style.display = "none";

button.addEventListener("click", () => {
    button.classList.add("clicked");

    setTimeout(() => {
        button.classList.remove("clicked");
    }, 300); 

    const qrtext = document.querySelector('input').value;
    const qrContainer = document.getElementById('qrCode');

    console.log("clicked");

    qrContainer.innerHTML = '';
    if (qrtext.trim() != "") {
        new QRCode(qrContainer, {
            text: qrtext,
            width: 200,
            height: 200
        });
        downloadButton.style.display = "inline-block";
    }
});

downloadButton.addEventListener("click", () => {
  const qrImage = document.querySelector("#qrCode img");

  if (qrImage) {
    const link = document.createElement("a");
    link.href = qrImage.src;
    link.download = "qr-code.png";
    link.click();
  } else {
    alert("Please generate a QR code first.");
  }
});