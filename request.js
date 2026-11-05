document.getElementById("submitRequestBtn").addEventListener("click", () => {
  const requestInput = document.getElementById("productRequestInput").value.trim();
  const requestType = document.querySelector('input[name="requestType"]:checked').value;

  // Validation: Ensure the textarea isn't sent empty
  if (!requestInput) {
    alert("Please type the details of the product you are looking for.");
    return;
  }

  let baseIntro = "";
  
  // Adapt message intro structure depending on selected toggle choice
  if (requestType === "available") {
    baseIntro = "Hello kjBuy,\n\nI want to check if this product is currently available in your shop:\n";
  } else {
    baseIntro = "Hello kjBuy,\n\nI would like to place a custom sourcing order for the following material:\n";
  }

  // Construct complete clean message body
  const finalMessage = `${baseIntro}"${requestInput}"\n\nPlease let me know if you have it or can source it for me. Thank you!`;

  // Process data safely using encodeURIComponent so line breaks map correctly in WhatsApp
  const targetUrl = "https://wa.me" + encodeURIComponent(finalMessage);
  
  // Forward customer smoothly to chat layout
  window.location.href = targetUrl;
});
