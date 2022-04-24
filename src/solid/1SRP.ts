// SRP - Single Responsibility Principle
module.exports = class SRP {
    public static run() {
        return 'SRP running';
    }
};

class User {
    // Create a new User
    constructor(public name: string, public age: number) {
    }

    /*
    Wrong way:

    public sendNotificationToUser() {
        return 'Send';
    }

    public receiveNotificationFromUser() {
        return 'Receive';
    }
     */
}

class Notifications {
    public send() {
        return 'Send a notification';
    }

    public receive() {
        return 'Receive a notification';
    }
}