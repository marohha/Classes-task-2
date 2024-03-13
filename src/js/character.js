export default class Character {
    constructor(name, type) {
        if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('Имя пероснажа должно быть > 2 и < 10 букв');
        } else {
            this.name = name;
        }

        const types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

        if (typeof type !== 'string' || !types.includes(type)) {
            throw new Error('Не верный тип персонажа');
        } else {
            this.type = type;
        }
       
        this.health = 100;
        this.level = 1;
    };

    levelUp() {
        if (this.health === 0) {
            throw new Error('Нельзя повысить левел умершего');
        } else {
            this.level += 1;
            this.attack *= 1.2;
            this.defence *= 1.2;
            this.health = 100;
        }
    }

    damage(points) {
        if (this.health >= 0) {
            this.health -= points * (1 - this.defence / 100)
        } else {
            throw new Error('Ошибка');
        }
    }
}

