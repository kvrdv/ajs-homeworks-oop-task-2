import Character from './character';

export default class Bowerman extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 55;
    this.defence = 25;
  }
}