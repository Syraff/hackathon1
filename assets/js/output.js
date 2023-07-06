import { obj } from "./tmp.js";

let made = document.getElementById("made");
let name = document.getElementById("name");
let age = document.getElementById("age");
let gender = document.getElementById("gender");
made.innerText = `Made for ${obj.name}`;
name.innerText = `Hi ${obj.name}`;

let umur = "";
for (let i of obj.dateofBirth) {
  if (i === "-") {
    break;
  } else {
    umur += i;
  }
}
let convert = Number(umur);
age.innerText = `${2022 - convert} tahun`;
gender.innerText = obj.gender;

for (let i of obj["Your Skin"]) {
  let kondisi = document.getElementById("kondisi");
  let hope = document.getElementById("hope");
  let acne = document.getElementById("acne");
  let kulit = document.getElementById("kulit");
  switch (i) {
    case "Normal":
    case "Kering":
    case "Berminyak":
    case "Kombinasi":
    case "Sensitif":
      kondisi.innerText = `kondisi kulitmu saat ini ${i}`;
      break;
    case "Meningkatkan kelembapan kulit":
    case "Menangkal tanda-tanda penuaan":
    case "Bersih dari jerawat":
    case "Warna kulit merata":
    case "Memperbaiki pori-pori":
      hope.innerText = `Kamu ingin ${i}`;
      break;
    case "Tidak ada sama sekali":
      acne.innerText = "Kamu tidak memiliki jerawat ";
      break;
    case "1 - 2 kali":
    case "3 - 4 kali":
      acne.innerText = `${i} berjerawat dalam sebulan`;
      break;
    case "Selalu ada jerawat":
      acne.innerText = `${i} dalam sebulan`;
      break;
    case "Kemerahan dan ruam":
    case "Gatal":
    case "Kering dan terkelupas":
    case "Kulit bersisik putih":
      kulit.innerText = `${i} di sekitar wajah`;
      break;
    case "Tidak, kulitku baik-baik saja":
      kulit.innerText = "Tidak ada kemerahan atau kekeringan di sekitar wajah";
  }
}

for (let i = 0; i < obj["Your Lifestyle"].length; i++) {
  let key = obj["Your Lifestyle"];
  let result = key[i].toLowerCase();
  let retinol = document.getElementById("retinol");
  let pha = document.getElementById("pha");
  let dermatologi = document.getElementById("dermatologi");
  let sun = document.getElementById("sun");
  let sleep = document.getElementById("sleep");
  let vehicle = document.getElementById("vehicle");
  let diet = document.getElementById("diet");
  if (i === 0) {
    retinol.innerText = `kamu ${result} menggunakan retinol`;
  } else if (i === 1) {
    pha.innerText = `kamu ${result} menggunakan AHA/BHA/PHA`;
  } else if (i === 2) {
    dermatologi.innerText = `kamu ${result} menggunakan resep dokter kulit`;
  }
  switch (key[i]) {
    case "Kurang dari 1 jam":
    case "1-3 jam":
    case "4-6 jam":
    case "7-8 jam":
    case "Lebih dari 8 jam":
      sun.innerText = `Kamu berada di bawah sinar matahari langsung selama ${result} dalam sehari`;
      break;
    case "Antara jam 9 dan 11 malam":
    case "Antara jam 11 dan 1 pagi":
    case "Antara jam 1 dan 3 pagi":
    case "Setelah jam 3 pagi":
      sleep.innerText = `Kamu tidur ${result}`;
      break;
    case "Sepeda motor":
    case "Mobil":
    case "Bus umum":
    case "Kereta":
    case "Jalan kaki":
      vehicle.innerText = `Kamu bepergian dengan ${result}`;
      break;
    case "Aku jarang bepergian":
      vehicle.innerText = "Kamu jarang bepergian";
      break;
    case "Vegetarian":
    case "Vegan":
    case "Ketorarian":
    case "Bebas susu":
    case "Bebas gluten":
    case "Pescatarian":
      diet.innerText = `Kamu sedang diet`;
      break;
    case "Aku tidak punya diet khusus":
      diet.innerText = "Kamu tidak punya diet khusus";
      break;
  }
}
