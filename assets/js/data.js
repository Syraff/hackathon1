var anyQuestions = [
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
      "Aku punya alergi sebelumnya",
      "Tidak ada alergi sejauh ini",
    ],
    category: "Your Skin",
  },
  // your lifestyle
  {
    question:
      "Dalam satu bulan terakhir, seberapa sering kamu menggunakan retinol?",
    answer: ["Tidak", "Jarang", "Sering"],
    category: "Your Lifestyle",
  },
  {
    question:
      "Dalam satu bulan terakhir, seberapa sering kamu menggunakan produk yang mengandung AHA/BHA/PHA?",
    answer: ["Tidak", "Jarang", "Sering"],
    category: "Your Lifestyle",
  },
  {
    question:
      "Dalam 3 bulan terakhir, apakah kamu pernah menggunakan resep obat perawatan kulit dari dermatologis atau dokter kulit?",
    answer: ["Tidak", "Jarang", "Sering"],
    category: "Your Lifestyle",
  },
  {
    question:
      "Berapa lama kamu berada di luar ruangan yang terkena cahaya matahari langsung dalam sehari? (rata-rata dalam satu bulan terakhir)",
    answer: [
      "Kurang dari 1 jam",
      "1-3 jam",
      "4-6 jam",
      "7-8 jam",
      "Lebih dari 8 jam",
    ],
    category: "Your Lifestyle",
  },
  {
    question: "Pukul berapa kamu tidur? (rata-rata dalam satu bulan terakhir)",
    answer: [
      "Antara jam 9 dan 11 malam",
      "Antara jam 11 dan 1 pagi",
      "Antara jam 1 dan 3 pagi",
      "Setelah jam 3 pagi",
    ],
    category: "Your Lifestyle",
  },
  {
    question:
      "Bagaimana cara kamu bepergian atau berkendara sehari-hari? (rata-rata dalam satu bulan terakhir)",
    answer: [
      "Sepeda motor",
      "Mobil",
      "Bus umum",
      "Kereta",
      "Jalan kaki",
      "Aku jarang bepergian",
    ],
    category: "Your Lifestyle",
  },
  {
    question: "Apakah kamu punya diet khusus?",
    answer: [
      "Vegetarian",
      "Vegan",
      "Ketorarian",
      "Bebas susu",
      "Bebas gluten",
      "Pescatarian",
      "Aku tidak punya diet khusus",
    ],
    category: "Your Lifestyle",
  },
];

export { anyQuestions };
