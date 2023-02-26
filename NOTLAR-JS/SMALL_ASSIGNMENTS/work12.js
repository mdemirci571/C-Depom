// SORU2: kareAl, küpAl, üsAl şeklinde üç adet farklı arrow fonksiyonu
// tanımlayın. Bu fonksiyonların ana programdan gereken parametreleri alarak
// sonuçları ana programa döndürmeli gerekmektedir.

// let a=+prompt("1. kenarı giriniz");
// let b=+prompt("2. kenarı giriniz");
// let kareAl=(a,b)=> a*b
// console.log(kareAl(a,b));


// let a=+prompt("bir sayi giriniz");
// let kupAl=(a)=> a*a*a
// console.log(kupAl(a));


// let a=+prompt("bir sayi giriniz");
// let b=+prompt("ussu giriniz");
// let usAl=(a,b)=>a**b
// console.log(usAl(a,b));




// SORU3: Yıl değerini parametre olarak alan ve bu yılın artık yıl olup olmadığını
// hesaplayarak sonucu ana programa döndüren fonksiyonu function-expression
// yöntemi ile yazınız. NOT: Yıl 4'e tam bölünüyorsa VE (100'e tam bölünmüyorsa
// VEYA 400'e tam bölünüyorsa) artık yıldır aksi takdirde değildir.

//1. yöntem
// let yıl = +prompt("bir yıl giriniz");

// let artıkYıl = function (yıl) {
    
//     let result="";
//     if ((yıl % 4 === 0) && ((yıl % 100 !== 0) || (yıl % 400 === 0))) { result = `${yıl} yılı artık yıldır.` }

//     else {
//         result = `${yıl} yılı artık yıl degildir.`
//     }

// return result
// }
// console.log(artıkYıl(yıl) );

// 2. yöntem
// let yıl = +prompt("bir yıl giriniz");

// let artıkYıl = function (yıl) {
//     return ((yıl % 4 === 0) && ((yıl % 100 !== 0) || (yıl % 400 === 0))) ? `${yıl} yılı artık yıldır.` : `${yıl} yılı artık yıl degildir.`
    
// }
// console.log(artıkYıl(yıl));

