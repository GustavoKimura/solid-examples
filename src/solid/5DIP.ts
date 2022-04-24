// DIP - Dependency Inversion Principle
module.exports = class DIP {
    public static run() {
        return 'DIP running';
    }
};

interface Character {
    walk(): string;

    jump(): string;
}

class Mario implements Character {
    jump(): string {
        return 'Jumped';
    }

    walk(): string {
        return 'Walked';
    }
}

class Luigi implements Character {
    jump(): string {
        return 'Jumped';
    }

    walk(): string {
        return 'Walked';
    }
}

const player1: Character = new Mario();
const player2: Character = new Luigi();