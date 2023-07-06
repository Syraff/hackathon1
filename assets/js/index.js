import { anyQuestions } from "./data.js";
import { obj } from "./tmp.js";

function render() {
  // let obj = {
  //   name: "",
  //   dateofBirth: "",
  //   gender: "",
  //   "Your Skin": [],
  // };

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
  let category = document.getElementById("category");
  let number = 0;
  category.textContent = anyQuestions[number].category;
  question.textContent = anyQuestions[number].question;

  //fisrt submit

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
      looping();
    }
    category.textContent = anyQuestions[number].category;
    question.textContent = anyQuestions[number].question;
    console.log(obj);
    // console.log(question.textContent);
  });

  //looping
  function looping() {
    if (number === 3 || number === 7) {
      document.getElementById("form").className = "form";
      let allCard = document.createElement("div");
      for (let i = 0; i < anyQuestions[number].answer.length; i++) {
        let component = document.createElement("div");
        let answer = anyQuestions[number].answer[i];
        let img = document.createElement("img");
        let jawaban = document.createElement("p");
        allCard.className = "all-card";
        allCard.id = "all-card";
        img.src = answer[1];
        component.id = "input";
        component.onclick = () => handleClick(answer[0]);
        component.className = "card";
        jawaban.innerHTML = answer[0];
        allCard.appendChild(component);
        component.appendChild(img);
        component.appendChild(jawaban);
        document.getElementById("form").appendChild(allCard);
      }
    } else {
      let component = document.createElement("div");
      for (let i = 0; i < anyQuestions[number].answer.length; i++) {
        let answer = anyQuestions[number].answer[i];
        let jawaban = document.createElement("input");
        component.id = "input";
        component.className = "flex";
        jawaban.type = "button";
        jawaban.value = answer;
        jawaban.id = answer;
        jawaban.className = "answer";
        jawaban.onclick = () => handleClick(answer);
        component.appendChild(jawaban);
        document.getElementById("form").appendChild(component);
      }
    }
  }

  //handle click

  function handleClick(value) {
    if (number < anyQuestions.length - 1) {
      if (anyQuestions[number].category === "About Yourself") {
        number++;
        obj["gender"] = value;
        let input = document.getElementById("input");
        input.remove();
        looping();
      } else if (anyQuestions[number].category === "Your Skin") {
        if (value === "Tidak ada sama sekali") {
          obj["Your Skin"].push(value);
          number++;
          let input = document.getElementById("input");
          input.remove();
          looping();
        } else if (
          value === "1 - 2 kali" ||
          value === "3 - 4 kali" ||
          value === "Selalu ada jerawat"
        ) {
          obj["Your Skin"].push(value);
          number += 2;
          let input = document.getElementById("input");
          input.remove();
          looping();
        } else if (
          value === "Kemerahan dan ruam" ||
          value === "Gatal" ||
          value === "Kering dan terkelupas" ||
          value === "Kulit bersisik putih"
        ) {
          number += 3;
          let input = document.getElementById("input");
          obj["Your Skin"].push(value);
          input.remove();
          looping();
        } else if (value === "Tidak, kulitku baik-baik saja") {
          obj["Your Skin"].push(value);
          number++;
          let input = document.getElementById("input");
          input.remove();
          looping();
        } else {
          obj["Your Skin"].push(value);
          if (number === 3 || number === 7) {
            let input = document.getElementById("all-card");
            input.remove();
          } else {
            let input = document.getElementById("input");
            input.remove();
          }
          number++;
          looping();
        }
      } else if (anyQuestions[number].category === "Your Lifestyle") {
        document.body.style.backgroundColor = "#ffede0";
        obj["Your Lifestyle"].push(value);
        let input = document.getElementById("input");
        input.remove();
        number++;
        looping();
      }
      if (anyQuestions[number].category === "Your Lifestyle") {
        document.body.style.backgroundColor = "#ffede0";
      }
      category.textContent = anyQuestions[number].category;
      question.textContent = anyQuestions[number].question;
    } else if (number === anyQuestions.length - 1) {
      obj["Your Lifestyle"].push(value);
      let script = document.createElement("script");
      script.src = "../assets/js/output.js";
      script.type = "module";
      document.body.appendChild(script);
      let output = document.getElementById("output");
      let hero = document.getElementById("quiz");
      output.style.display = "block";
      hero.remove();
    }
    console.log(obj);
    console.log(anyQuestions[number].category);
    console.log(number);
  }
}
render();
