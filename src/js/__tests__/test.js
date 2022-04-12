import Bowerman from '../Bowerman';
import Character from '../Character';
import Daemon from '../Daemon';
import Magician from '../Magician';
import Swordsman from '../Swordsman';
import Undead from '../Undead';
import Zombie from '../Zombie';

test('корректное введение данных класса Character', () => {
  const player1 = new Character('игрок1', 'Bowman', 25, 25);
  const expected = {
    name: 'игрок1',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(player1).toEqual(expected);
});

test('корректное введение данных класса Bowerman', () => {
  const bowman = new Bowerman('игрок1');
  const expected = {
    name: 'игрок1',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(bowman).toEqual(expected);
});

test('корректное введение данных класса Daemon', () => {
  const daemon = new Daemon('игрок1');
  const expected = {
    name: 'игрок1',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(daemon).toEqual(expected);
});

test('корректное введение данных класса Magician', () => {
  const magician = new Magician('игрок1');
  const expected = {
    name: 'игрок1',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  expect(magician).toEqual(expected);
});

test('корректное введение данных класса Swordsman', () => {
  const swordsman = new Swordsman('игрок1');
  const expected = {
    name: 'игрок1',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(swordsman).toEqual(expected);
});

test('корректное введение данных класса Undead', () => {
  const undead = new Undead('игрок1');
  const expected = {
    name: 'игрок1',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(undead).toEqual(expected);
});

test('корректное введение данных класса Zombie', () => {
  const zombie = new Zombie('игрок1');
  const expected = {
    name: 'игрок1',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(zombie).toEqual(expected);
});

test('ошибка в "name"', () => {
  const player2 = () => new Character('в', 'Bowman', 25, 25);
  expect(player2).toThrow('Некорректное значение имени');
});

test('ошибка в "type"', () => {
  const player3 = () => new Character('игрок3', 'маг', 25, 25);
  expect(player3).toThrow('Некорректное значение типа');
});

test('тест damage', () => {
  const magician = new Magician('игрок1');
  const expected = {
    name: 'игрок1',
    type: 'Magician',
    health: 70,
    level: 1,
    attack: 10,
    defence: 40,
  };

  magician.damage(50);

  expect(magician).toEqual(expected);
});

test('тест levelUp', () => {
  const magician = new Magician('игрок1');
  magician.health = 70;
  const expected = {
    name: 'игрок1',
    type: 'Magician',
    health: 100,
    level: 2,
    attack: 12,
    defence: 48,
  };

  magician.levelUp();

  expect(magician).toEqual(expected);
});

test('ошибка в levelUp', () => {
  const magician = new Magician('игрок1');
  magician.health = 0;
  expect(() => { magician.levelUp(); }).toThrow('Нельзя повысить левел умершего');
});
