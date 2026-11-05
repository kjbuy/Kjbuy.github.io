let total=0;
let selected_items="";

const naira_format=new Intl.NumberFormat("en-NG",{
  style: "currency",
  currency: "NGN",
  maximumFractionDigits: 0,
  minimumFractionDigits: 0
});
alert(naira_format.format("2000000"));
let name=document.querySelector("#name");


let address=document.querySelector("#address");
let phone=document.querySelector("#phone");

const cart_page=document.querySelector("#cart");
const pay_button=document.querySelector(".pay_button");
let order=JSON.parse(localStorage.getItem("my_cart"));


order.forEach((item)=>{

const card=document.createElement("div");
card.style.margin="10px";
card.style.backgroundColor="#fafafa";
const image_div=document.createElement("div");
const imag=document.createElement("img");
imag.src="/IMAGES/" + item.image;
imag.alt=item.name;
imag.style.height="100px";
imag.style.width="100px";
image_div.appendChild(imag);
card.appendChild(image_div);

const name_div=document.createElement("div");
name_div.textContent="NAME: " + item.name;
card.appendChild(name_div);

const price_div=document.createElement("div");

price_div.innerHTML=`UNIT PRICE: &#8358;${item.prices}`;

//price_div.textContent="UNIT PRICE: " + item.prices;


card.appendChild(price_div);
const quantity_div=document.createElement("div");
quantity_div.textContent="QUANTITY: " + item.quantity;


card.appendChild(quantity_div);

cart_page.appendChild(card);

total += (item.prices * item.quantity);

selected_items += `🛒NAME: ${item.name}
PRICE: ${item.prices}
QUANTITY: ${item.quantity}`;

});






const total_div=document.createElement("div");
total_div.innerHTML=`TOTAL: &#8358;${total}`;
cart_page.appendChild(total_div);

pay_button.addEventListener("click",()=>{
  alert("whatsapp");

let message = `Hello kjBuy,

I would like to place an order for the following items:

${selected_items}

TOTAL: ₦${total}

DELIVERY DETAILS:
CUSTOMER NAME: ${name.value}
PHONE NUMBER: ${phone.value}
DELIVERY ADDRESS: ${address.value}

Please confirm my order and send me your bank account details so I can make payment.

Thank you for choosing kjBuy.`;


localStorage.clear();
window.location.href="https://wa.me/2348101509431?text=" + encodeURIComponent(message);
});
