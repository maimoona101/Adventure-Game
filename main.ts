
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Player {
  private name: string;
  private health: number;
  private energy: number;

constructor(name: string) {

  this.name = name;
  this.health = 100;
  this.energy = 100;
}

getName(): string {
  return this.name;
}

getHealth(): number {
  return this.health;
}




getEnergy(): number {
  return this.energy;
}


decreaseHealth(amount: number): void {
  this.health -= amount;
  if (this.health <= 0) {
     console.log(`${this.name} has been defeated! Game over.`);
     rl.close();
} else {
   console.log(`${this.name} has ${this.health} health
remaining.`);
   }
}

decreaseEnergy(amount: number): void {
  this.energy -= amount;
  if (this.energy <= 0) {
     console.log(`${this.name} has run out of energy! Game over.`);
     rl.close();
} else {
  console.log(`${this.name} has ${this.energy} energy 
remaining.`);  
    }
  }
}
 
class Monster {
  private name: string;
  private health: number;
  
  constructor(name: string) {
    this.name = name;
    this.health = 50;
}


getName(): string {
   return this.name;
}

getHealth(): number {
   return this.health;
}



attack(player: Player): void {
   const damage = Math.floor(Math.random() *
10) + 1;
   console.log(
     `${this.name} attacks
${player.getName()} for ${damage} damage.`,
   );
   player.decreaseHealth(damage);
 }
}

const player = new Player("Hero");
const monster = new Monster("Dragon");

console.log(`A wild ${monster.getName()}appears!`);

function battle() {
  rl.question("Press enter to attack: ", ()
=> {
    const playerAttack =
Math.floor(Math.random() * 20) + 1;
   
    const energyConsumption =
Math.floor(Math.random() * 10) + 1;
     player.decreaseEnergy(energyConsumption);
     console.log(
       `${player.getName()} attacks
${monster.getName()} for ${playerAttack}
damage.`,
    );
    monster.attack(player);
    if (player.getHealth() > 0 &&
player.getEnergy() > 0) 
     console.log(`=====================`);
     console.log(`Next round:`);
     console.log(`Player`, 'Health');

  ) 
}

