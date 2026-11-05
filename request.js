document.getElementById('sendRequestBtn').addEventListener('click', function() {
  // 1. Get the user's typed message
  const userInput = document.getElementById('productRequestInput').value.trim();
  
  if (userInput === "") {
    alert("Please type the name or description of the product you need!");
    return;
  }

  // 2. Determine which radio option they selected
  const requestType = document.querySelector('input[name="requestType"]:checked').value;
  
  // 3. Draft the predefined message templates based on the choice
  let message = "";
  if (requestType === "available") {
    message = `Hello KjBuy, I want to check the availability of this product:\n\n${userInput}`;
  } else {
    message = `Hello KjBuy, I would like to place a custom order for this material:\n\n${userInput}`;
  }

  // 4. Your WhatsApp number formatted for wa.me (No plus sign, no spaces)
  const phoneNumber = "2348101509431"; 

  // 5. Encode the text so spaces and symbols work perfectly in a browser URL
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me{phoneNumber}?text=${encodedMessage}`;

  // 6. Open WhatsApp in a new browser tab
  window.open(whatsappUrl, '_blank');
});
