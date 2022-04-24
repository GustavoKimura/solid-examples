// LSP - Liskov Substitution Principle
module.exports = class LSP {
    public static run() {
        return 'LSP running';
    }
};

class Bird {
    public peck() {
        return 'The bird is pecking';
    }
}

interface AbilityToDive {
    dive(meters: number): string;
}

class Woodpecker extends Bird {

}

class Penguin extends Bird implements AbilityToDive {
    dive(meters: number): string {
        return `The penguin is diving ${meters} meters`;
    }
}

const woodpecker = new Woodpecker();
const penguin = new Penguin();

function dive10Meters(penguin: Penguin) {
    return penguin.dive(10);
}

dive10Meters(penguin);
// dive10Meters(woodpecker); // Error

/*
Wrong way:
class Bird {
    public peck() {
        return 'The bird is pecking';
    }
}

class Woodpecker extends Bird {

}

class Penguin extends Bird {
    public dive(meters: number) {
        return `The penguin is diving ${meters} meters`;
    }
}

const woodpecker = new Woodpecker();
const penguin = new Penguin();

function dive10Meters(animal: Bird) {
    if (animal instanceof Penguin) {
        return animal.dive(10);
    } else {
        return 'Exception';
    }
}

dive10Meters(woodpecker);
dive10Meters(penguin);
*/