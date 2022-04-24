// OCP - Open Closed Principle
module.exports = class OCP {
    public static run() {
        return 'OCP running';
    }
};

interface Vehicle {
    description: string;
}

class Car implements Vehicle {
    constructor(public description = 'Car') {
    }
}

class Bus implements Vehicle {
    constructor(public description = 'Bus') {
    }
}

class Motorcycle implements Vehicle {
    constructor(public description = 'Motorcycle') {
    }
}

// Wrong way:
class Vehicles {
    public vehicle: string;

    constructor(type: number) {
        if (type === 0) {
            this.vehicle = this.createCar();
        } else if (type === 1) {
            this.vehicle = this.createBus();
        } else if (type === 2) {
            this.vehicle = this.createMotorcycle();
        } else {
            this.vehicle = this.createCar();
        }
    }

    public createCar(): string {
        return 'Car created';
    }

    public createBus(): string {
        return 'Bus created';
    }

    public createMotorcycle(): string {
        return 'Motorcycle created';
    }
}