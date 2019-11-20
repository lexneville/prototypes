// //-------------------- Convert the CLASS method code below to PROTOTYPE method ------------------------
// class Animal{
//     constructor(name){
//         this._name = name;
//         this._hunger = 100;
//         this._thirst = 100;
//     }
//     get name(){
//         return this._name;
//     }
//     get hunger(){
//         return this._hunger;
//     }
//     get thirst(){
//         return this._thirst;
//     }
//     eat(){
//         this._hunger--;
//     }
//     drink(){
//         this.thirst--;
//     }
// }

// class Bunny extends Animal {
//     constructor(name, lovesCarrot, favFood){
//         super(name);
//         this._lovesCarrot = lovesCarrot;
//         this._favFood = favFood;
//     }
//     get lovesCarrots(){
//         return this._lovesCarrot;
//     }
//     get favFood(){
//         return this._favFood;
//     }
// }

// const rosie = new Bunny("Rosie", true, ["basil", "rockets", "broccoli"]);

//------------------------- PROTOTYPE METHOD -----------------------------

let AnimalP = function(name){
    this.animalName = name;
    this.animalHunger = 100;
    this.animalThirst = 100;

}
AnimalP.prototype.getName = function(){
    return `Name: ${this.animalName}`;
}
AnimalP.prototype.getHunger = function(){
    return `Hunger: ${this.animalHunger}`;
}
AnimalP.prototype.getThirst = function(){
    return `Thirst: ${this.animalThirst}`;
}
AnimalP.prototype.eat = function(){
    this.animalHunger--
}
AnimalP.prototype.drink = function(){
    this.animalThirst--
}
let BunnyP = function(name, lovesCarrots, favFood) {
    AnimalP.call(this, name);
    this.bunnyLovesCarrots = lovesCarrots;
    this.bunnyFavFood = favFood;
}
BunnyP.prototype.lovesCarrot = function(){
    return this.lovesCarrots;
}
BunnyP.prototype.favFood = function(){
    return this.favFood;
}
BunnyP.prototype = Object.create(AnimalP.prototype);

let fiver = new BunnyP("Fiver", true, ["Basil", "Rocket", "Broccoli"]);

console.log(fiver.getHunger());
fiver.eat();
console.log(fiver.getHunger());
fiver.eat();
console.log(fiver.getHunger());
fiver.eat();
