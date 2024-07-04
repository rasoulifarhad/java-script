class UserManager {

    registerUser(userData) {
        // registration logic
    }

    authenticateUser(username, password) {
        // authentication logic
    }
}

var fs = require('fs'); 
const { todo } = require('node:test');
class TodoList {

    constructor() {
        this.items = [];
    }

    addItem(text) {
        this.items.push(text);
    }

    removeItem(index) {
        this.items = items.splice(index, 1);
    }

    toString() {
        return this.items.toString();
    }

    save(fileName) {
        fs.writeFileSync(fileName, this.toString());
    }

    load(fileName) {

    }

}

var todoList = new TodoList();
todoList.addItem("foo");
todoList.addItem("bar");
console.log(todoList.toString());
todoList.save("./todoList.txt");