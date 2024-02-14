console.log('It worked');


function logObject(user: {name: string, damage: number, health: number, ability_haste: number, description: string}) {
    console.log(user);
}
class item {
    name: string='';
    damage:number =0;
    health:number=0;
    ability_haste=0;
    description: string='';

    constructor(name: string, damage: number, health: number, ability_haste:number, description: string){
        this.name =name;
        this.damage=damage;
        this.health=health;
        this.ability_haste=ability_haste;
        this.description=description;
    }
}
let user1 =new item('Trinity Force', 55, 400, 15,'bruiser item')
logObject(user1);


class Character {
    private name: string;
    private type: string;
    private health: number;
  
    constructor(name: string, type: string, health: number = 100) {
      this.name = name;
      this.type = type;
      this.health = health;
    }
  
    getName(): string {
      return this.name;
    }
  
    getType(): string {
      return this.type;
    }
  
    getHealth(): number {
      return this.health;
    }
  
    attack(opponent: Character) {
      const damage = Math.floor(Math.random() * 10);
      opponent.takeDamage(damage);
      console.log(`${this.name} attacks ${opponent.name} for ${damage} damage!`);
    }
  
    takeDamage(damage: number): void {
      this.health -= damage;
      if (this.health <= 0) {
        console.log(`${this.name} is defeated!`);
      }
    }
  
    describe(): void {
      console.log(`Name: ${this.name}`);
      console.log(`Type: ${this.type}`);
      console.log(`Health: ${this.health}`);
    }
  }
  
  const warrior1 = new Character("Lux", "Mage");
  const warrior2 = new Character("Malphite", "Tank");
  
  warrior1.describe(); 
  warrior2.describe();
  
  warrior1.attack(warrior2); 
  warrior2.attack(warrior1);
  
  warrior1.describe(); // Updated health after attack
  warrior2.describe();