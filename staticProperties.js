/*class Student {
  constructor(name) {
    this.name = name;
  }
}

class Classroom {
  constructor(students) {
    this.students = students;
  }
  static showAllStudents(students) {
    students.forEach((element, index) => {
      document.write(`Roll no ${index + 1} ${element.name}<br>`);
    });
  }
}

let students = [new Student("student 1"), new Student("student 2")];

let classroom1 = new Classroom(students);

Classroom.showAllStudents(classroom1.students);
*/

/*
class Animal {
  constructor(animalName) {
    this.animalName = animalName;
    this.speed = 0;
  }
  run(speed) {
    this.speed = speed;
  }
  static compare(animal1, animal2) {
    return animal1.speed - animal2.speed;
  }
}

class Rabbit extends Animal {
  hide() {
    document.write(`${this.animalName} hides<br>`);
  }
}

let rabbits = [new Rabbit("white"), new Rabbit("brown"), new Rabbit("black")];

rabbits[0].run(50);
rabbits[1].run(80);
rabbits[2].run(10);

rabbits.forEach((element, index) => {
  document.write(`Animal no ${index + 1} ${element.animalName}<br>`);
});
rabbits.sort(Rabbit.compare);
rabbits.forEach((element, index) => {
  document.write(`Animal no ${index + 1} ${element.animalName}<br>`);
});
*/

class Rabbit extends Object {
  constructor(name) {
    super();
    this.name = name;
  }
}

let rabbit = new Rabbit("Rab");

alert(rabbit.hasOwnProperty("name"));
