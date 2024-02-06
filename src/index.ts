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
