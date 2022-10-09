// 1.D
// 2.C
// 3.B
// 4.B
// 5.A
// 6.D
// 7.A
// 8.D

console.log("Ex 9");
let m = [1, 2, 3, 4, 5, 6, "hh", "9", 80, 100];
let new_m = m.filter((x) => typeof x == "number");
console.log("new_m: ", new_m);
let mSquared = new_m.map((x) => x * x);
console.log("mSquared: ", mSquared);
////// Ex 10
console.log("Ex 10");
let st = "High knowledge, high return";
let n_arr = st.split(" ");
console.log("n_arr: ", n_arr);
let n_arr_lower = n_arr.map((x) => x.toLowerCase());
console.log("n_arr_lower: ", n_arr_lower);

console.log("Ex 11");
class People {
  set() {
    let _name = prompt("Tên bạn là gì ???");
    let _age = Number(prompt("Bạn bao nhiu tủi rùi ????"));
    let _address = prompt("Nhà bạn ở đâu ???");
    let obj = {
      name: _name,
      age: _age,
      address: _address,
    };
    return obj;
  }
  constructor() {
    let in4 = this.set();
    this.name = in4.name;
    this.age = in4.age;
    this.address = in4.address;
  }
  get() {
    return (
      "Bạn " +
      this.name +
      " năm nay " +
      this.age +
      " tuổi " +
      "nhà ở " +
      this.address
    );
  }
}

class Student extends People {
  add() {
    // super.set();
    let _id = prompt("ID của học sinh là ???");
    let math = Number(prompt("Điểm toán"));
    let physical = Number(prompt("Điểm lí"));
    let chemistry = Number(prompt("Điểm hóa"));
    let obj = {};
    obj.id = _id;
    obj.math = math;
    obj.physical = physical;
    obj.chemistry = chemistry;
    return obj;
  }
  constructor() {
    super();
    let in4 = this.add();
    this.id = in4.id;
    this.math = in4.math;
    this.chemistry = in4.chemistry;
    this.physical = in4.physical;
  }
  get() {
    return `Học sinh tên là ${this.name}, có id là ${this.id} năm nay ${this.age} tuổi, nhà ở ${this.address} được ${this.math} điểm toán, ${this.physical} điểm lí và ${this.chemistry} điểm hóa`;
  }
  GPA() {
    return (this.math + this.physical + this.chemistry) / 3;
  }
}
if (confirm("Bạn muốn tạo người mới chứ")) {
  let person1 = new People();
  console.log(person1.get());
}
if (confirm("Bạn có muốn thêm một học sinh không")) {
  let student1 = new Student();
  console.log(student1.get());
  console.log(student1.GPA());
}

///Ex12
console.log("Ex12");
class Hinh {
  set() {
    let query = Number(prompt("Mời bạn chọn , 1 là HCN, 2 là tam giác"));
    let c1, c2;
    if (query == 1) {
      c1 = Number(prompt("Chieu dai: "));
      c2 = Number(prompt("Chieu rong: "));
    } else {
      c1 = Number(prompt("Chieu cao: "));
      c2 = Number(prompt("Đáy: "));
    }
    let obj = {
      query: query,
      c1: c1,
      c2: c2,
    };
    return obj;
  }
  constructor() {
    let in4 = this.set();
    this.query = in4.query;
    this.c1 = in4.c1;
    this.c2 = in4.c2;
  }
  area() {
    if (this.query == 1) return `Dien tich hcn la: ${this.c1 * this.c2}`;
    else return `Dien tich tam giac la: ${(this.c1 * this.c2) / 2}`;
  }
}
let hinh1 = new Hinh();
console.log(hinh1.area());

//Ex13
class enimal {
  set() {
    let name = prompt("Name: ");
    let age = prompt("Age: ");
    let obj = {};
    obj.name = name;
    obj.age = age;
    return obj;
  }
  constructor() {
    let in4 = this.set();
    this.age = in4.age;
    this.name = in4.name;
  }
  get() {
    return `ten la ${this.name} va ${this.age} tuoi`;
  }
}
// Dophin
class Dophin extends enimal {
  constructor() {
    super();
  }
  get() {
    return `Dophin ` + super.get();
  }
}
let Dophin1 = new Dophin();
console.log(Dophin1.get());
//Zebra
class Zebra extends enimal {
  constructor() {
    super();
  }
  get() {
    return `Zebra ` + super.get();
  }
}
let Zebra1 = new Zebra();
console.log(Zebra1.get());
