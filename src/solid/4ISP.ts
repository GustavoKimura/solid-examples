// ISP - Interface Segregation Principle
module.exports = class ISP {
    public static run() {
        return 'ISP running';
    }
};

interface Pokemon {
    walk(): string;

    jump(): string;
}

interface FlyingType {
    fly(): string;
}

interface GrassType {

}

class Pidgey implements Pokemon, FlyingType {
    jump(): string {
        return 'Pidgey jumped';
    }

    walk(): string {
        return 'Pidgey walked';
    }

    fly(): string {
        return 'Pidgey flew';
    }

}

class Bulbasaur implements Pokemon, GrassType {
    jump(): string {
        return 'Bulbasaur jumped';
    }

    walk(): string {
        return 'Bulbasaur walked';
    }
}