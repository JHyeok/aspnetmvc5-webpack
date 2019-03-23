export default class Author {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    write() {
        console.log(`Hello, I'm ${this.name} and ${this.age} years old`);
    }
}