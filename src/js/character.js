export default class Character {
  constructor(name, type) {
    this.name = name; // имя
    this.type = type; // тип
    this.health = 100; // уровень жизни
    this.level = 1; // уровень персонажа

    const types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie']; // варианты типов (классов персонажей)

    // проверки соответствия требованиям:
    if (typeof (name) !== 'string' || name.length < 2 || name.length > 10) {
      throw new Error('Некорректное имя!');
    }

    if (typeof (type) !== 'string' || types.includes(type) === false) {
      throw new Error('Некорректный класс!');
    }
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
    } else {
      throw new Error('Нельзя повысить левел умершего!');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    } else {
      throw new Error('Лежачего не бьют!');
    }
  }
}