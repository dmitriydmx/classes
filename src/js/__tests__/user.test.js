class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя должно содержать от 2 до 10 символов');
    }
    if (!['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type)) {
      throw new Error('Выбран некорректный класс персонажа');
    }
    
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = 0;
    this.defence = 0;
  }   
}

class Bowman extends Character {
  constructor(name) {
    super(name, 'Bowman');
    this.attack = 25;
    this.defence = 25;
  }
}

class Swordsman extends Character {
  constructor(name) {
    super(name, 'Swordsman');
    this.attack = 40;
    this.defence = 10;
  }
}

class Magician extends Character {
  constructor(name) {
    super(name, 'Magician');
    this.attack = 10;
    this.defence = 40;
  }
}

class Daemon extends Character {
  constructor(name) {
    super(name, 'Daemon');
    this.attack = 10;
    this.defence = 40;
  }
}

class Undead extends Character {
  constructor(name) {
    super(name, 'Undead');
    this.attack = 25;
    this.defence = 25;
  }
}

class Zombie extends Character {
  constructor(name) {
    super(name, 'Zombie');
    this.attack = 40;
    this.defence = 10;
  }
}
module.exports = Character;

test('Персонаж создан правильно', () => {
  const character = new Character('Dmitriy', 'Bowman');
  expect(character.name).toBe('Dmitriy');
  expect(character.type).toBe('Bowman');
  expect(character.health).toBe(100);
  expect(character.level).toBe(1);
  expect(character.attack).toBe(0);
  expect(character.defence).toBe(0);
});
