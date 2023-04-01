const num = Math.round(Math.random() * 101);
console.log(num); //kontrol amaclı gösteriliyor
let deneme = 0;

let input = document.getElementsByClassName("input")[0];
let sonuc = document.getElementsByClassName("sonuc")[0];
let numh2 = document.getElementById("num1")[0];
let buton = document.getElementsByClassName("buton")[0];
let body = document.getElementsByTagName("body")[0];
let span = document.getElementsByClassName("sp")[0];
let span1 = document.getElementsByClassName("sp1")[0];
let giris = document.getElementsByClassName("giris")[0];

let number = 0;
let skor;
let sayı = [];
input.focus();
buton.addEventListener("click", () => {
  input.focus();
  if (input.value == "") {
    alert("Please enter a number");
  } else {
    skor = 4 - deneme;
    span.innerText = Number(`${deneme}`) + 1;
    span1.innerText = Number(`${skor}`);
    let img = `url(./img/${deneme}.jpg)`;
    body.style.backgroundImage = img;
    number = Number(input.value);
    sayı.push(number);
    giris.value = `The number you entered: ${sayı}`;
    input.value = "";

    if (num !== number) {
      deneme++;

      if (deneme === 5 && num !== number) {
        sonuc.value = `Sorry, you didn't know.😥`;
        input.setAttribute("disabled", "true");
        buton.setAttribute("disabled", "true");
        alert("YOU HAVE NO RIGHT TO TRY. GAME OVER !");
        deneme -= 2;
        input.value = `The number you are looking for: ${num}`;
        input.style.color = "white";
        input.style.fontSize = "1.1rem";
        sonuc.style.fontSize = "1.1rem";
        giris.style.fontSize = "1.1rem";
      } else if (num < number) {
        sonuc.value = `Reduce your estimate.`;
      } else if (num > number) {
        sonuc.value = `Increase your estimate.`;
      }
    } else {
      deneme++;
      sonuc.value = `Congratulations! you did know.`;
      input.setAttribute("disabled", "true");
      buton.setAttribute("disabled", "true");
      alert("Congratulations! you did know.");
      input.value = `The number you are looking for: ${num}`;
      sonuc.style.fontSize = "1.1rem";
      input.style.color = "white";
      input.style.fontSize = "1.1rem";
      giris.style.fontSize = "1.1rem";
    }
  }
});
input.addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    buton.click();
  }
});
