document.getElementById("sendRequestBtn").addEventListener("click", () => {
  const customerInput = document.getElementById("customRequestDetails").value.trim();
  const selectedIntent = document.querySelector('input[name="msgIntent"]:checked').value;

  // Validation: Check if the textarea has text
  if (!customerInput) {
    alert("Please enter the product name or details before sending.");
    return;
  }

  let finalMessage = "";

  // Structure the custom message templates cleanly based on choice selections
  if (selectedIntent === "check") {
    finalMessage = `Hello kjBuy,\n\nI want to check if this product is available or if you can source it for me:\n\n📝 DETAILS: ${customerInput}\n\nPlease let me know the availability and current price status. Thanks!`;
  } else {
    finalMessage = `Hello kjBuy,\n\nI want to buy this product and would like to request a custom order order placement:\n\n📝 DETAILS: ${customerInput}\n\nPlease verify details and provide payment terms. Thank you!`;
  }

  // Your verified WhatsApp target link endpoint format
  const whatsappNumber = "2348101509431";
  
  // Wrap the final content string using safe URI converters to keep new lines clean on GitHub
  const formattedRedirectUrl = "https://wa.me" + whatsappNumber + "?text=" + encodeURIComponent(finalMessage);

  // Send client smoothly to WhatsApp app interface
  window.location.href = formattedRedirectUrl;
});
