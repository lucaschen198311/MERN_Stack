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

const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();