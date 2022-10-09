// class Person {
//   say() {
//     alert("Hello ...");
//   }
// }

// let abc = new Person();
// abc.say();

// Thuộc tính của Class
// class Person {
//   constructor(name, age, address, ID) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//     this.ID = ID;
//   }
//   say() {
//     alert("T ten la:", this.name);
//   }
// }
// let abc = new Person("nmt", 18, "Ha noi", "02620400...");
// console.log("abc: ", abc);
// abc.say();

// Bốn tính chất của OOP
// 1. Đóng gói
// 2. Đa hình
// 3. Kế thừa
// 4. Trừu tượng

// Tính kế thừa
class Person {
  constructor(_name, _age, _address) {
    this.name = _name;
    this.age = _age;
    this.address = _address;
  }

  say() {
    return `I'am Person and my name is ${this.name}`;
  }
}
// Khai báo class Student kế thừa từ class Person
// class Student extends Person {
//   constructor(_name, _age, _address, _idStudent, _class) {
//     //Sử dụng super để kế thừa các thuộc tính cha có
//     super(_name, _age, _address);
//     this.class = _class;
//     this.idStudent = _idStudent;
//   }
//   // có sẵn say
//   say() {
//     // Kế thừa và ghi đè
//     super.say(); // Kế thừa phương thức
//     return super.say() + ` and I am a learning code from MindX School `;
//   }
// }

// let xyz = new Student("xyz", 10, "HCM", 199, "JSI-14");
// console.log(xyz);
// console.log(xyz.say());

class Circle {
  constructor(bkht) {
    this.bkht = bkht;
  }
  dientich() {
    return this.bkht * this.bkht * 3.14;
  }
  chuvi() {
    return this.bkht * 2 * 3.14;
  }
}
class hcn {
  constructor(cd, cr) {
    this.cd = cd;
    this.cr = cr;
  }
  chuvi() {
    return (this.cd + this.cr) * 2;
  }
  dientich() {
    return this.cd * this.cr;
  }
}

let h1 = new Circle(2);
console.log(h1.dientich());
console.log(h1.chuvi());
