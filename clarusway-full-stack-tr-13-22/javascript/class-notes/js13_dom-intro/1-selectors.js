console.log("***** SELECTORS *****")

document.title = "❤️ DOM"

//*===========================================
//*            GETELEMENTBYID()
//*===========================================

const myHeader = document.getElementById("header")
console.log(myHeader)

myHeader.style.color = "blue"
myHeader.style.backgroundColor = "yellow"

const button = document.getElementById("btn")
const textInput = document.getElementById("input")
button.style.backgroundColor = "black"
button.style.color = "yellow"
button.style.padding = "0.7rem"
button.style.border = "none"
button.style.borderRadius = "10px"
button.style.fontSize = "20px"
textInput.style.padding = "0.7rem"

//*===========================================
//*          GETELEMENTSBYTAGNAME()
//*===========================================
const list = document.getElementsByTagName("li")
console.log(list) //? HTMLCollection(5) [li.list, li.list, li.list, li.list, li.list]

list[0].style.color = "magenta"
list[list.length - 1].style.color = "purple"

const header = document.getElementsByTagName("header")
console.log(header[0])

console.log(list.item(3))
//! getElementsByTagName bize bir HTMLCollection(bir nevi dizi) dondurur.

//! Icerik degistirme (textContent, innerText, innerHTML)
// list[3].textContent = "REACT / VUE"
// list[3].innerText = "REACT / VUE / Swelte"
list[3].innerHTML = "REACT / VUE / Swelte / Angular"

//*===========================================
//*          GETELEMENTSBYCLASSNAME()
//*===========================================

//* ========================================
//*              QUERYSELECTOR()
//* ========================================

//* ========================================
//*              QUERYSELECTORALL()
//* ========================================
