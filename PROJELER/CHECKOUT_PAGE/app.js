const container = document.querySelector(".container");
let subt = document.querySelector(".subt");
let info = document.getElementsByClassName("info");
let newinfo = [...info];
let resultProduct = JSON.parse(localStorage.getItem("resultProduct")) || [];
let totalProducts = JSON.parse(localStorage.getItem("totalProducts")) || [];

// window.addEventListener("load", () => {
//   // totalAll();
//   getResultProductFormLS();

// });
// const getResultProductFormLS=()=>{
//   resultProduct.forEach((to)=>{
//     createNewRes(to)
//   })
// }