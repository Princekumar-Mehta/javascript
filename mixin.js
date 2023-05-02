let mixin1 = {
  sayHello() {
    document.write("hi");
  },
};

class User {}

Object.assign(User.prototype, mixin1);

new User().sayHello();
