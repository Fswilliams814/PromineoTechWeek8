
//this function will confirm the information entered by the customer with a pop up on the screan of what the user input
function confirmInfo() {
    var input = document.getElementById("name").value + "\n" + document.getElementById("number").value + "\n" + document.getElementById("product").value + "\n" + document.getElementById("date").value;
    alert(input);
}
// create a class of customers to create a new customer order each time user input
// class Customers {
//     constructor(name, number, product, date) {
//         this.name = name;
//         this.number = number;
//         this.product = product;
//         this.date = date;
//     }
// }
// // this class of orders will control the user input and push it an array 
// class Orders {
//     constructor(){
//         this.orders = []
//     }

// createOrder (name, number, product, date){
//         name = document.getElementById("name").value;
//         number = document.getElementById("number").value;
//         product = document.getElementById("product").value;
//         date = document.getElementById("date").value;
//         new Array(4);
    
// } 
// }

// console.log(orders)

