var productList = [
    ["Q Dailly Detox Tea", "Herbal Tea", 32.50],
    ["Q Greens", "Apple Cinnamon", 52.50],
    ["Q Armor", "Chai Spice", 45],
    ["Q Core", "Daily Nutrition Vitamins", 150],
    ["Q Twist Crave", "Berry Smoothie", 52.50],
    ["Q Twist Hydate", "Juicy Grape", 52.50],
    ["Q Twist Calm", "Peach Lemonade NON-HEMP", 52.50],
    ["Q Twist Calm", "Peach Lemonade", 52.50],
    ["Q Twist Variety Pack", "Berry Smoothie, Juicy Grape, Peach Lemonade", 52.50],
    ["Q REV Pre-Workout", "Fresh Strawberry", 55]
];

let orderList = document.getElementById("orderList");
console.log(orderList);

orderList.innerHTML = "Use order form link to purchase a product from the list below!";

// let list = document.getElementById("productList")
// console.log(list);

// for(let i = 0; i< productList.length; i++){
//     var info = productList[i];
//     var product = info[0];
//     var flavor = info[1];
//     var price = info[2];
//     var index = i
//     console.log()
  
//     var newList = document.createElement("li");
//     newList.innerHTML = `${i + 1}.  ${product} ${flavor} - $${price}`
//     list.appendChild(newList);
// }