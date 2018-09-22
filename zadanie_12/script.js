// QUIZ na rozgrzewkę!!

let person = {
    name: "John",
    surname: "Doe",
    getFullName: function () {
        return this.name + ' ' + this.surname;
    }
};
let doctor = Object.create(person);
let journalist = Object.create(person);
let surgeon = Object.create(doctor);
let remodelingSurgeon = Object.create(surgeon);
remodelingSurgeon.getFullName = function () {
    return "Unknown"
};
let petSurgeon = Object.create(surgeon);
surgeon.name = "Dana";
remodelingSurgeon.name = "Scully";
Object.getPrototypeOf(doctor).surname = "Fox";
Object.getPrototypeOf(journalist).surname = "Parker";
Object.getPrototypeOf(Object.getPrototypeOf(petSurgeon)).surname = "Hide";
// Try to guess results
console.log('person', person.getFullName(), "John Parker");
console.log('doctor', doctor.getFullName(), "John Fox");
console.log('journalist', journalist.getFullName(), "John Parker");
console.log('surgeon', surgeon.getFullName(), "Dana Fox");
console.log('remodelingSurgeon', remodelingSurgeon.getFullName(), "Unknown");
console.log('petSurgeon', petSurgeon.getFullName(), "Dana Hide");


// let's code!

let PLASTIC_BAG_CAPACITY = 3500;

// AD 1 - zaimplementuj function constructor dla produktów
function Fruit(price, weight) {
    this.price = price;
    this.weight = weight;
}

function Dairy(price, weight) {
    this.price = price;
    this.weight = weight;
}

function Fish(price, weight) {
    this.price = price;
    this.weight = weight;
}

let watermelon = new Fruit(12.90, 1500);
let apple = new Fruit(1.90, 200);
let cheese = new Dairy(2.39, 100);
let milk = new Dairy(3.19, 1000);
let balticCod = new Fish(2.28, 100);
let salmon = new Fish(3.28, 100);

// AD 2 - zaimplementuj function constructor dla shoppingCart
function ShoppingCart() {
    this.elements = [];
    let price = 0;
    let weight = 0;
    this.addProduct = function (element, quantity) {
        this.elements.push({element, quantity});
    };
    this.isEnoughMoney = function (amount) {
        this.elements.forEach(product => {
            amount = amount - product.element.price * product.quantity
        });
        return amount > 0;
    };
    this.getTotalPrice = function () {
        this.elements.forEach(product => {
            price = price + product.element.price * product.quantity
        });
        return price.toFixed(2);
    };
    this.getTotalWeight = function () {
        this.elements.forEach(product => {
            weight = weight + product.element.weight * product.quantity
        });
        return weight.toFixed(0);
    };
    this.getNumberOfNeededPlasticBags = function () {
        return Math.ceil(weight / PLASTIC_BAG_CAPACITY)
    }
}

let shoppingCart = new ShoppingCart();

// AD 3
shoppingCart.addProduct(watermelon, 2);
shoppingCart.addProduct(apple, 10);
shoppingCart.addProduct(cheese, 2);
shoppingCart.addProduct(milk, 1);
shoppingCart.addProduct(balticCod, 7);
shoppingCart.addProduct(salmon, 8);

// AD 4
console.log('Is 60PLN enough?', shoppingCart.isEnoughMoney(60)); // false
console.log('Is 80PLN enough?', shoppingCart.isEnoughMoney(80)); // false
console.log('Is 100PLN enough?', shoppingCart.isEnoughMoney(100)); // true
console.log('Total price of added products:', shoppingCart.getTotalPrice()); // 94.97
console.log('Total weight of added products:', shoppingCart.getTotalWeight()); // 7700

// // AD 5
// console.log('Do I have a fish?', shoppingCart.containFish()); // true

// AD 6
console.log('How many plastic bags I need:', shoppingCart.getNumberOfNeededPlasticBags()); // 3
