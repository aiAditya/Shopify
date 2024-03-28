// Define the array of items
const item = [
  {
    id: 1,
    name: "White Pullovers",
    price: 1400,
    quantity: 1,
    cutPrice: 2000,
    total: 1400,
  },
  {
    id: 2,
    name: "Cashmere Shorts + Bag",
    price: 4000,
    quantity: 1,
    cutPrice: 4600,
    total: 4000,
  },
  {
    id: 3,
    name: "Oversize Tshirt",
    price: 1800,
    quantity: 1,
    cutPrice: 3000,
    total: 1800,
  },
  {
    id: 4,
    name: "Oversize SweatShirt",
    price: 2500,
    quantity: 1,
    cutPrice: 3300,
    total: 2500,
  },
];
let textContent = document.querySelectorAll(".text");

for (let i = 0; i < item.length; i++) {
  var items = `<span class="first">${item[i].name}</span ><span id="cut">${item[i].price}<span >${item[i].cutPrice}</span></span>`;

  textContent[i].innerHTML = items;
}
const cart = [];
let count = 0;
const cartButton = document.querySelectorAll(".cartbtn");
cartButton.forEach((button, index) => {
  button.addEventListener("click", (event) => {
    spanMenu.style.visibility = "visible";
    spanMenu.innerHTML = `${count + 1}`;
    count++;
    addCart(index);
    console.log("click");
  });
});

function addCart(index) {
  let cartId = cart.findIndex((value) => value.id == item[index].id);
  console.log(cartId);
  if (cart.length <= 0) {
    cart.push({
      id: item[index].id,
      quantityNew: item[index].quantity,
    });
  } else if (cartId < 0) {
    cart.push({
      id: item[index].id,
      quantityNew: item[index].quantity,
    });
  } else {
    item[index].quantity = item[index].quantity + 1;
    item[index].total = item[index].price * item[index].quantity;
    cart[cartId].quantityNew = cart[cartId].quantityNew + 1;
  }
  console.log(cart);
  addData();
}

const tableData = document.querySelector("table");
const addData = () => {
  tableData.innerHTML = "";
  if (cart.length > 0) {
    cart.forEach((cart) => {
      let cartId = item.findIndex((value) => value.id == cart.id);
      let info = item[cartId];
      const createData = document.createElement("tr");
      createData.innerHTML = `<td>${info.name}</td><td>${info.price}</td><td><span class="plus" id="increase"
  >-</span>${cart.quantityNew}<span class="plus" id="decrease">+</span></td><td>${info.total}</td>`;
      createData.classList.add("stylerow");
      tableData.appendChild(createData);
      console.log("click me");
    });
  }
};

// Show/hide cart
const shopCartButton = document.getElementById("shopCart");
const sidebar = document.querySelector(".sidebar");
const spanMenu = document.querySelector(".spanRed");
spanMenu.style.visibility = " hidden";
shopCartButton.addEventListener("click", function (event) {
  event.preventDefault();
  sidebar.classList.toggle("show");
});
const showButton = document.getElementById("bottomBtn");
showButton.addEventListener("click", function (event) {
  event.preventDefault();
  sidebar.classList.toggle("show");
});
