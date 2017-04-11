class Foo {
    constructor(name = 'World') {
        this.name = name;
    }

    greet() {
      return `Hello, ${this.name}!`;
    }
}

export default Foo;
