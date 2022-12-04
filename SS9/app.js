// /*
// - Bất đồng bộ trong JS
// - Làm bài kiểm tra checkpoint
// - Lên ý tưởng dự án cuối khóa

// - Vì sao JS được gọi là ngôn ngữ bất đồng bộ?
// + Ngôn ngữ thông dịch (code đến đây chạy đến đó) || JAVA biên dịch code từ đầu đến cuối sau khi viết xong

// - Xử lý bất đồng bộ trong JS như thế nào?
// */

// /// VD sau:

// ///=> giải quyết thế nào?  (Không thay đổi time)
// function task1(task2) {
//   setInterval(() => {
//     console.log("Task 1");
//     task2();
//   }, 3000);
// }

// function task2() {
//   setInterval(() => {
//     console.log("Task 2");
//   }, 2000);
// }

// //// Callback
// task1(task2);

class clock {
  constructor(id) {
    this.status = false;
    this.id = id;
  }
  hash(phut, giay) {
    let s_time = phut.toString() + ":" + giay.toString();
    return s_time;
  }
  f_stop() {
    clearInterval(this.s_start);
    this.status = false;
    let phut = document.getElementById("phut" + this.id.toString());
    let giay = document.getElementById("giay" + this.id.toString());
    phut.innerHTML = 0;
    giay.innerHTML = 0;
    // clearInterval(s_start);
    // let dongho = document.getElementById("dongho" + this.id.toString());
    // dongho.innerHTML = this.hash(phut.innerHTML, giay.innerHTML);
  }
  f_start() {
    if (this.status == true) return;
    this.status = true;
    // if (this.status == true) {
    let phut = document.getElementById("phut" + this.id.toString());
    let giay = document.getElementById("giay" + this.id.toString());
    this.s_start = setInterval(() => {
      // console.log(this.id.toString());
      // phut.innerHTML++;
      giay.innerHTML++;
      if (giay.innerHTML == 60) {
        phut.innerHTML++;
        giay.innerHTML = 0;
      }

      // let dongho = document.getElementById("dongho" + this.id.toString());
      // dongho.innerHTML = this.hash(n_p, n_s);
    }, 1000);
    // let stop_btn = document.getElementById("stop" + this.id.toString());
    // stop_btn.onclick = () => {
    //   clearInterval(this.s_start);
    //   this.status = false;
    //   //   let phut = document.getElementById("phut" + this.id.toString());
    //   //   let giay = document.getElementById("giay" + this.id.toString());
    //   phut.innerHTML = 0;
    //   giay.innerHTML = 0;
    // };
    let pause_btn = document.getElementById("pause" + this.id.toString());
    pause_btn.onclick = () => {
      clearInterval(this.s_start);
      this.status = false;
      //   let phut = document.getElementById("phut" + this.id.toString());
      //   let giay = document.getElementById("giay" + this.id.toString());
      //   phut.innerHTML = 0;
      //   giay.innerHTML = 0;
    };
    // }
  }
  create() {
    let area_clock = document.createElement("div");
    area_clock.setAttribute("id", this.id.toString());
    let dongho = document.createElement("div");
    let classs = "dongho" + this.id.toString();
    dongho.setAttribute("class", classs);
    dongho.setAttribute("id", classs);
    let phut = document.createElement("span");
    phut.setAttribute("class", "phut" + this.id.toString());
    phut.setAttribute("id", "phut" + this.id.toString());
    let giay = document.createElement("span");
    giay.setAttribute("class", "giay" + this.id.toString());
    giay.setAttribute("id", "giay" + this.id.toString());
    phut.innerHTML = 0;
    giay.innerHTML = 0;
    let ngancach = document.createElement("span");
    ngancach.innerHTML = ":";
    dongho.append(phut, ngancach, giay);

    let start_btn = document.createElement("button");
    start_btn.setAttribute("id", this.id.toString());
    start_btn.innerHTML = "Start";
    start_btn.onclick = this.f_start;

    let stop_btn = document.createElement("button");
    stop_btn.setAttribute("id", "stop" + this.id.toString());
    stop_btn.innerHTML = "Stop";
    stop_btn.onclick = this.f_stop;
    let pause_btn = document.createElement("button");
    pause_btn.setAttribute("id", "pause" + this.id.toString());
    pause_btn.innerHTML = "Pause";
    // pause_btn.onclick = this.f_pause;

    area_clock.append(dongho);
    area_clock.append(start_btn);
    area_clock.append(stop_btn);
    area_clock.append(pause_btn);
    document.getElementById("main").append(area_clock);
    // let;
  }
}

let clock1 = new clock(1);
clock1.create();
let clock2 = new clock(2);
clock2.create();
let clock3 = new clock(3);
clock3.create();
let clock4 = new clock(4);
clock4.create();
