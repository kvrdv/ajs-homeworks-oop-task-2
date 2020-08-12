import Character from '../character';
import Bowerman from '../bowerman';
import Daemon from '../daemon';
import Magician from '../magician';
import Swordsman from '../swordsman';
import Undead from '../undead';
import Zombie from '../zombie';

test('Создание нового персонажа Petr Bowerman', () => {
  const received = new Bowerman('Petr', 'Bowerman');
  const expected = { name: "Petr", type: "Bowerman", health: 100, level: 1, attack: 55, defence: 25 };
  expect(received).toEqual(expected);
});

test('Создание нового персонажа Natascha Swordsman', () => {
  const received = new Swordsman('Natascha', 'Swordsman');
  const expected = { name: "Natascha", type: "Swordsman", health: 100, level: 1, attack: 40, defence: 10 };
  expect(received).toEqual(expected);
});

test('Создание нового персонажа David Magician', () => {
  const received = new Magician('David', 'Magician');
  const expected = { name: "David", type: "Magician", health: 100, level: 1, attack: 10, defence: 40 };
  expect(received).toEqual(expected);
});

test('Создание нового персонажа Димон Daemon', () => {
  const received = new Daemon('Димон', 'Daemon');
  const expected = { name: "Димон", type: "Daemon", health: 100, level: 1, attack: 10, defence: 40 };
  expect(received).toEqual(expected);
});

test('Создание нового персонажа Владимир Undead', () => {
  const received = new Undead('Владимир', 'Undead');
  const expected = { name: "Владимир", type: "Undead", health: 100, level: 1, attack: 25, defence: 25 };
  expect(received).toEqual(expected);
});

test('Создание нового персонажа Zombie Dog', () => {
  const received = new Zombie('Dog', 'Zombie');
  const expected = { name: "Dog", type: "Zombie", health: 100, level: 1, attack: 10, defence: 40 };
  expect(received).toEqual(expected);
});

test('Имя не string', () => {
  const wrongName = { name: 2, type: 'Bowerman' };
  expect(() => {
    const bowerman = new Bowerman(wrongName);
    return bowerman;
  }).toThrow();
});

test('Короткое имя', () => {
  const wrongName = { name: 'S', type: 'Swordsman' };
  expect(() => {
    const swordsman = new Swordsman(wrongName);
    return swordsman;
  }).toThrow();
});

test('Слишком длинное имя', () => {
  const wrongName = { name: 'ZeroZeroSeven', type: 'Daemon' };
  expect(() => {
    const daemon = new Daemon(wrongName);
    return daemon;
  }).toThrow();
});

test('Класс не string', () => {
  const wrongType = { name: 'Siri', type: 100110101 };
  expect(() => {
    const magician = new Magician(wrongType);
    return magician;
  }).toThrow();
});

test('Такого класса нет', () => {
  const wrongType = { name: 'Luke', type: 'Skywalker' };
  expect(() => {
    const undead = new Undead(wrongType);
    return undead;
  }).toThrow();
});

test('Наследуется от Character', () => {
  expect(new Zombie('John', 'Swordsman')).toBeInstanceOf(Character);
});

test('Наследуется от Character', () => {
  expect(new Zombie('John', 'Swordsman')).toBeInstanceOf(Character);
});

test('Повышение уровня при health > 0', () => {
  const newDaemon = new Daemon('Serg', 'Undead');
  newDaemon.levelUp();
  expect(2).toEqual(newDaemon.level);
});

test('Повышение уровня при health < 0', () => {
  const newZombie = new Zombie('Cat', 'Daemon');
  newZombie.health = -1;
  expect(() => newZombie.levelUp()).toThrow();
});

test('Получение урона при health > 0', () => {
  const newDaemon = new Daemon('Lana', 'Swordsman');
  newDaemon.damage(10);
  expect(94).toEqual(newDaemon.health);
});

test('Получение урона damage при health < 0', () => {
  const newDaemon = new Daemon('Conor', 'Daemon');
  newDaemon.health = -1;
  expect(() => newDaemon.damage(10)).toThrow();
});