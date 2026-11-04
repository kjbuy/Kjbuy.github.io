let all_orders=[];
let my_objects={};
let id=1;
const products=document.querySelector(".content");

products.style.display="grid";
const gapSize = 20;
products.style.gridTemplateColumns = "repeat(auto-fit,minmax(220px,1fr))";
products.style.width="95%";
products.style.maxWidth="1200px";
products.style.margin="0 auto";
products.style.backgroundColor="#dddddd";
products.style.gap="14px";




allProducts.forEach((item)=>{

const product_card=document.createElement("div");
product_card.style.display="flex";
product_card.style.flexGrow="1";
product_card.style.justify_content="center";
product_card.classList.add("my-products");
product_card.style.alignItems="center";
product_card.style.flexDirection="column";
product_card.style.width="100%";
const product_image=document.createElement("img");
product_image.style.objectFit="cover";
product_image.src="/IMAGES/" + item.image;
product_image.style.maxWidth="5000px";
product_image.alt=item.name;
product_image.style.height="100%";
product_image.style.width="100%";
product_image.style.borderRadius="10px";
product_image.style.margin="10px";


product_card.appendChild(product_image);




const container2=document.createElement("div");
container2.style.alignItems="center";

const image=item.image;

const names=document.createElement("div");
names.textContent=item.name;
const price=document.createElement("div");
price.textContent=item.prices;
const rating=document.createElement("div");
rating.textContent=item.rating;

const describe=document.createElement("div");
const add_cart=document.createElement("div");
const add_cart_button = document.createElement("button");
add_cart_button.textContent="Add to cart";
add_cart_button.style.backgroundColor="#ffd814";

add_cart_button.addEventListener("click",()=>{addToCart(item.name,item.price,item.image,add_cart_button,add_cart);});


add_cart_button.style.borderRadius="3px";
add_cart.appendChild(add_cart_button);



product_card.appendChild(container2);

container2.appendChild(names);
container2.appendChild(price);
container2.appendChild(rating);
container2.appendChild(describe);
container2.appendChild(add_cart);

products.appendChild(product_card);

});

const item_class = document.getElementsByClassName("my-products");

const searchBox=document.querySelector("#searchbox");
const searchButton=document.querySelector("#search-button");



searchButton.addEventListener("click",searchFunction);

const goto_checkout=document.querySelector("#checkout");
goto_checkout.addEventListener("click",()=>{
window.location.href="checkout.html";

const stringified_items=JSON.stringify(all_orders)
localStorage.setItem("orders",stringified_items);

});

const item_length=item_class.length;


function searchFunction(){
try{

for(let counter=0;counter < item_class.length; counter++){

const searchee=item_class[counter].querySelector("div").children[0].textContent;
alert(searchee);
if(searchee.includes(searchBox.value)){
item_class[counter].style.backgroundColor="#f1ffcc";
item_class[counter].style.display="";

}
else{
item_class[counter].style.display="none";}

}}

catch (err) {
alert("error"+ err);
}}



function addToCart(names,price,images,add_cart_button,add_cart){

try{
let current_order_id=id;

alert(`${names} added to cart`);

all_orders.push(my_objects[`my_orders${current_order_id}`]={name: names, prices: price,image: images});

add_cart_button.style.backgroundColor="#ffcc00";
add_cart.textContent="";
add_cart.display="flex";
add_cart.style.justifyContent="space-between";


const increase_quantity=document.createElement("button");
increase_quantity.textContent="+";
const edit_quantity=document.createElement("input");
edit_quantity.type="number";
edit_quantity.placeholder="1";
edit_quantity.value=edit_quantity.placeholder;


my_objects[`my_orders${current_order_id}`].quantity=edit_quantity.value;

id+=1;

edit_quantity.style.width="30%";
edit_quantity.style.margin="2px";
edit_quantity.style.minWidth="0px";

edit_quantity.addEventListener("input",()=>{
my_objects[`my_orders${current_order_id}`].quantity=edit_quantity.value;
localStorage.setItem("my_cart", JSON.stringify(all_orders));


});
const decrease_quantity=document.createElement("button");
decrease_quantity.textContent="-";

decrease_quantity.addEventListener("click",()=>{
edit_quantity.value--;

my_objects[`my_orders${current_order_id}`].quantity=edit_quantity.value;
localStorage.setItem("my_cart", JSON.stringify(all_orders));
});


increase_quantity.addEventListener("click",()=>{
edit_quantity.value++;

my_objects[`my_orders${current_order_id}`].quantity=edit_quantity.value;

localStorage.setItem("my_cart", JSON.stringify(all_orders));

});

add_cart.appendChild(decrease_quantity);

add_cart.appendChild(edit_quantity);
add_cart.appendChild(increase_quantity);


localStorage.setItem("my_cart",JSON.stringify(all_orders));



}

catch (error){
alert(""+error);}

}
