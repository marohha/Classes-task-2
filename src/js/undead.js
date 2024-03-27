import Character from './character';

export default class Undead extends Character {
  constructor(name, type = 'Undead') {
    super(name, type);
    this.name = name;
    this.type = type;
    this.attack = 25;
    this.defence = 25;
  }
}
