"use strict";
export default class Person {
    constructor() {
        this.Id = 'id_1';
    }
    set name(name) {
        this._name = name;
    }
    get name(name) {
        return this._name;
    }
    sayHello() {
        console.log('Hello, my name is ' + this.name + ', I have ID: ' + this.Id);
    }
}