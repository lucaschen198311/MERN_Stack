class Ninja{
    constructor(name, health, speed=3, strength=3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName(){
        console.log(`${this.name}`)
    }
    showStats(){
        console.log(`Ninja ${this.name}'s stats: health: ${this.health}; speed: ${this.speed}; strength: ${this.strength}`)
    }
    drinkSake(){
        this.health += 10;
    }
}

class Sensei extends Ninja{
    constructor(name, health=200, speed=10, strength=10){
        super(name, health, speed, strength);
    }
    speakWisdom(){
        super.drinkSake();
    }
}

/*
const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
*/

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
