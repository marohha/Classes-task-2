import Character from "../js/character";

test('Character is created', () => {
    expect(() => new Character('person', 'Bowerman').toEqual({
        name: 'person',
        type: 'Bowerman',
        health: 100,
        level: 1,
    }));
});

test('Character is not created', () => {
    expect(() => new Character('p', 'Bowerman').toThrowError(new Error('Имя пероснажа должно быть > 2 и < 10 букв')));
    expect(() => new Character('personperson', 'Bowerman').toThrowError(new Error('Имя пероснажа должно быть > 2 и < 10 букв')));
    expect(() => new Character(123, 'Bowerman').toThrowError(new Error('Имя пероснажа должно быть > 2 и < 10 букв')));
});

test('Character is not created no type', () => {
    expect(() => new Character('person', 'Person').toThrowError(new Error('Не верный тип персонажа')));
    expect(() => new Character('person', 123).toThrowError(new Error('Не верный тип персонажа')));
});

test('Character has levelUp', () => {
    const newCharacter = new Character('person', 'Bowerman');
    newCharacter.health = 20;
    newCharacter.attack = 20;
    newCharacter.defence = 20;
    newCharacter.levelUp();
    expect(newCharacter).toEqual({
        name: 'person',
        type: 'Bowerman',
        health: 100,
        level: 2,
        attack: 24,
        defence: 24,
    });
})

test('Character has not levelUp', () => {
    const newCharacter = new Character('person', 'Bowerman');
    newCharacter.health = 0;
    newCharacter.attack = 20;
    newCharacter.defence = 20;
    
    expect(() => newCharacter.levelUp()).toThrowError(new Error('Нельзя повысить левел умершего'));
})

test('Character has damage', () => {
    const newCharacter = new Character('person', 'Bowerman');
    newCharacter.health = 100;
    newCharacter.attack = 20;
    newCharacter.defence = 20;
    newCharacter.damage(20);
    
    expect(newCharacter.health).toBe(84);
})

test('Character has not damage', () => {
    const newCharacter = new Character('person', 'Bowerman');
    newCharacter.health = -1;
    newCharacter.attack = 20;
    newCharacter.defence = 20;
    
    expect(() => newCharacter.damage(3)).toThrowError(new Error('Ошибка'));
})