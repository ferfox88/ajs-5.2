export default class Character {
  constructor(name, type, attack, defence) {
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;

    const player = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (typeof name === 'string' && name.length > 1 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Некорректное значение имени');
    }
    if (player.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Некорректное значение типа');
    }
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack += this.attack * 0.2;
      this.defence += this.defence * 0.2;
      this.health = 100;
    } else {
      throw new Error('Нельзя повысить левел умершего');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
