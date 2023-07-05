const anyQuestions = [
  {
    question: "Hi! Kami ara-ara! Kamu...",
    category: "About Yourself",
  },
  {
    question: "Kapan tanggal lahirmu?",
    category: "About Yourself",
  },
  {
    question: "Apa Jenis kelaminmu?",
    answer: ["Pria", "Wanita"],
    category: "About Yourself",
  },
  // jika user memilih gender wanita, maka akan ada pertanyaan selanjutnya
  {
    question: "Apakah kamu sedang hamil atau menyusui?",
    answer: ["Ya", "Tidak"],
    category: "About Yourself",
  },
  {
    question: "Bagaimana kondisi kulitmu saat ini?",
    answer: [
      ["Normal", "https://rb.gy/4yt6g"],
      ["Kering", "https://rb.gy/ors9h"],
      ["Berminyak", "https://rb.gy/gagg4"],
      ["Kombinasi", "https://rb.gy/jxtm9"],
      ["Sensitif", "https://rb.gy/bad1v"],
    ],
    category: "Your Skin",
  },
  {
    question: "Apa kondisi kulit yang kamu inginkan?",
    answer: [
      "Meningkatkan kelembapan kulit",
      "Menangkal tanda-tanda penuaan",
      "Bersih dari jerawat",
      "Warna kulit merata",
      "Memperbaiki pori-pori",
    ],
    category: "Your Skin",
  },
  {
    question: "Berapa sering kamu mengalami masalah jerawat dalam sebulan",
    answer: [
      "Tidak ada sama sekali", // false
      "1 - 2 kali",
      "3 - 4 kali",
      "Selalu ada jerawat",
    ],
    category: "Your Skin",
  },
  {
    status: true,
    question: "Tipe jerawat apa yang biasanya muncul pada kulitmu?",
    answer: [
      ["Kistik", "https://rb.gy/uzrd7"],
      ["Pustula", "https://rb.gy/19h9f"],
      ["Nodula", "https://rb.gy/l8fow"],
      ["Komedo", "https://rb.gy/t824s"],
    ],
    category: "Your Skin",
  },
  {
    status: true,
    question: "Jerawat kamu sering muncul di bagian wajah mana?",
    answer: [
      "Pipi dan bagian atas pipi",
      "Dagu atau bagian bawah pipi",
      "Hidung atau bagian atas bibir",
      "Dahi",
      "Area T atau dahi dan hidung",
      "Di semua titik :(",
    ],
    category: "Your Skin",
  },
  {
    status: false,
    question: "Apakah kamu mengalami kondisi kulit berikut ini dalam 4 minggu?",
    answer: [
      "Kemerahan dan ruam",
      "Gatal",
      "Kering dan terkelupas",
      "Kulit bersisik putih",
      "Tidak, kulitku baik-baik saja", // false
    ],
    category: "Your Skin",
  },
  {
    status: true,
    question: "Apakah kulitmu mengalami kondisi khusus berikut ini?",
    answer: [
      "Eksim",
      "Rosacea",
      "Psoriasis",
      "Melasma",
      "Tidak, kulitku baik-baik saja", // false
    ],
    category: "Your Skin",
  },
  {
    status: false,
    question:
      "Apakah kamu memiliki reaksi alergi terhadap bahan perawatan kulit berikut ini?",
    answer: [
      "Ekstrak rosmarin",
      "Minyak kacang-kacangan",
      "Ekstrak kacang kedelai",
      "Aku punya alergi sebelumnya, tetapi kurang yakin apa penyebabnya",
      "Tidak ada alergi sejauh ini",
    ],
    category: "Your Skin",
  },
];

function render() {
  let obj = {
    name: "",
    dateofBirth: "",
    gender: "",
    "Your Skin": [],
  };

  let iconSubmit = document.getElementById("formSubmit");
  let answers = document.getElementById("answer");
  answers.addEventListener("input", () => {
    if (answers.value !== "") {
      iconSubmit.src = "https://static.base.co.id/scroll-right-coral.svg";
    } else {
      iconSubmit.src = "https://static.base.co.id/scroll-right-silver.svg";
    }
  });
  let submitBtn = document.getElementById("btnSubmit");
  let question = document.getElementById("question");
  let number = 0;
  question.textContent = anyQuestions[number].question;

  function handleClick(value) {
    console.log(value);
  }

  submitBtn.addEventListener("click", () => {
    if (question.textContent === anyQuestions[0].question) {
      if (!answers.value) {
        alert("Please fill out all fields");
      } else {
        number++;
        obj["name"] = answers.value;
        answers.type = "date";
      }
    }
    if (question.textContent === anyQuestions[1].question) {
      number++;
      obj["dateofBirth"] = answers.value;
      answers.style.display = "none";
      iconSubmit.style.display = "none";
    }
    if (number > 1) {
      for (i = 0; i < anyQuestions[number].answer.length; i++) {
        let answer = anyQuestions[number].answer[i];
        document.getElementById("form").className = "flex";
        let jawaban = document.createElement("input");
        jawaban.type = "button";
        jawaban.value = answer;
        jawaban.id = answer;
        jawaban.className = "answer";
        jawaban.onclick = handleClick(answer);
        document.getElementById("form").appendChild(jawaban);
      }
    }
    question.textContent = anyQuestions[number].question;
    console.log(obj);
    console.log(question.textContent);
  });
  console.log(number);
}
render();
