let main = document.getElementById("main");
let okbtn = document.getElementById("okbtn");
let country = document.getElementById("country");
let namecountry = "";
// function check(name_country) {
//   let ok = false;
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "b7622f91e0msh00bcd0f600f5a36p101184jsnb7ce8b65a143",
//       "X-RapidAPI-Host": "covid-19-coronavirus-statistics.p.rapidapi.com",
//     },
//   };
//   let url =
//     "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=" +
//     name_country;
//   fetch(url, options)
//     .then((response) => response.json())
//     .then((response) => {
//       console.log(response.data.location);
//       if (String(response.data.location) == String(name_country)) {
//         ok = true;
//       }
//     })
//     .catch((err) => console.error(err));
//   return ok;
// }
function run() {
  // if (check(namecountry) == false) {
  //   alert("Lỗi! Vui lòng kiểm tra lại tên nước! Lưu ý: Viết hoa chữ cái đầu.");
  //   namecountry = "";
  //   return;
  // }
  let content = document.createElement("div");
  let h1 = document.createElement("h1");
  h1.innerHTML = "Số liệu thống kê covid-19 của nước " + namecountry;
  content.append(h1);
  //   let deaths = document.createElement("p");
  //   deaths.innerHTML = "Số người chết là:100 ";
  //   content.append(deaths);
  let npd = document.createElement("div");
  let p_d = document.createElement("span");
  p_d.setAttribute("class", "p_infor");
  p_d.innerHTML = "Số người chết là: ";
  let deaths = document.createElement("span");
  deaths.setAttribute("class", "number_people");
  deaths.setAttribute("id", "deaths");
  // deaths.innerHTML = 100;
  npd.append(p_d, deaths);
  content.append(npd);

  let npc = document.createElement("div");
  let p_c = document.createElement("span");
  p_c.setAttribute("class", "p_infor");
  p_c.innerHTML = "Số người mắc là: ";
  let confirmed = document.createElement("span");
  confirmed.setAttribute("class", "number_people");
  confirmed.setAttribute("id", "confirmed");
  // confirmed.innerHTML = 100;
  npc.append(p_c, confirmed);
  content.append(npc);
  function _get(name) {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "b7622f91e0msh00bcd0f600f5a36p101184jsnb7ce8b65a143",
        "X-RapidAPI-Host": "covid-19-coronavirus-statistics.p.rapidapi.com",
      },
    };
    let url =
      "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=" +
      String(name);
    console.log(url);
    fetch(url, options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        // console.log(response.data.confirmed);
        let confirmed = document.getElementById("confirmed");
        confirmed.innerHTML = Number(response.data.confirmed);
        let deaths = document.getElementById("deaths");
        deaths.innerHTML = Number(response.data.deaths);
      })
      .catch((err) => console.error(err));
  }
  setInterval(_get(namecountry), 1000);
  // confirmed.innerHTML = 10;
  // _get(country.value);
  main.innerHTML = content.innerHTML;
}
okbtn.addEventListener("click", () => {
  if (country.value == "" || country.value == null) {
    alert("Vui lÒng nhập tên nước !");
    return;
  }
  namecountry = country.value;
  country.value = "";
});
function process() {
  if (namecountry != "") {
    run();
  }
}
setInterval(process, 3000);
