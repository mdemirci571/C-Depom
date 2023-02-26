// ************** Javascript Conditional Statements ***************/

// *********  Sorular  *********** //

// 1- Bir sayının tek mi çift mi olduğunu consol'a yazdıran koşulu yazınız. (10 P)

// const sayi = -31

// if (sayi % 2 === 0) {
//   console.log(` ${sayi} bir çift sayısıdır`)
// } else if (sayi % 2 === 1 || -1) {
//   console.log(` ${sayi} bir tek sayısıdır`)
// }

// 2- Bir sayının 0 ile 100 arasında olup olmadığını konsola yazdıran ternary yapıyı yazınız. (10 P)

// const sayi = +promt(enter a number.)

// 0 < sayi && sayi < 100 ? console.log('sağlar') : console.log('sağlamaz')

// 3- 18 yaşından büyüklerin oy kullanabileceğini 18 yaşından küçüklerin oy kullanamayacağını ternary yapı ile konsola yazdıran kodu yazınız. (10 P)

// const yas = 18

// yas < 18 ? console.log('Küçüktür') : console.log('Büyüktür')

// const cihaz = 'desktop'

// const isMobile = cihaz == 'mobil' ? 'mobile' : 'mobile değil'

// console.log(isMobile)

// 4- Haftanın günlerinin numaraları aşağıda belirtilmiştir. Buna göre belirtilen bir sayının hangi güne karşılık gelidiğini switch case yapı ile konsola yazdıran kodu yazınız. (15 P)

// pazar 0
// Pazartesi 1
// Salı 2
// Çarşamba 3
// Perşembe 4
// Cuma 5
// Cumartesi 6

// const gün = 8

// switch (gün) {
//   case 1:
//     console.log('pazartesi')

//     break

//   case 2:
//     console.log('Salı')

//     break
//   case 3:
//     console.log('Çarşamba')

//     break
//   case 4:
//     console.log('Perşembe')

//     break
//   case 5:
//     console.log('Cuma')

//     break
//   case 6:
//     console.log('Cumartesi')

//     break
//   case 0:
//     console.log('pazar')

//     break
//   default:
//     console.log('lütfen doğru gün giriniz')
//     break
// }

// 5-
// Bir dersten alınan notun harfini aşağıdaki duruma göre konsola yazdırınız? (15 P)
//  Not:
//  90'dan büyükse AA.
// - 80'den büyük yada 90'a eşitse AB,
// - 70'den büyük yada 80'a eşitse BB,
// - 60'den büyük yada 70'a eşitse BC,
// - 50'den büyük yada 60'a eşitse CC,
// - 40'den büyük yada 50'a eşitse CD,
// - 30'den büyük yada 40'a eşitse DD,
// - 30'dan küçük yada eşitse FF ,

// const not = 101

// if (not > 100 || not < 0) {
//   console.log(`Lütfen 100 den küçük bir not giriniz.`)
// } else if (not > 90) {
//   console.log(`${not} puan AA harfine karşılık gelir.`)
// } else if (not > 80) {
//   console.log(`${not} puan AB harfine karşılık gelir.`)
// } else if (not > 70) {
//   console.log(`${not} puan BB harfine karşılık gelir.`)
// }

// 6- Artık yıl sorusu
// Artık yıl, bir yıldaki günlerin 365 yerine 366 gün olmasına denir. Bu fazladan gün (artık gün), normalde 28 gün olan şubat ayına 29 Şubat'ın eklenmesi ile elde edilir.  Bunun hesaplanması için aşağıdaki algoritma kullanılır.

// Bir tarih 4 ile tam bölünüp 100 katları ile tam bölünemiyorsa, ve yıl 400 sayısına tam bölünüyorsa artık yıldır. BU iki şartın dışında yılarda şubat ayı 28 gün, artık yıllarda 29 gün olarak belirlenir.

// Yukarıdaki bilgilere göre bir yılın artık yıl olup olmadığını konsola yazdıran conditional statement'i yazınız. (20 P)

// const yil = Number(prompt('Lütfen bir yıl giriniz '))

// if (yil % 400 === 0) {
//   console.log(`${yil} artık yıldır.`)
// } else if (yil % 4 === 0 && yil % 100 !== 0) {
//   console.log(`${yil} artık yıldır.`)
// } else {
//   console.log(`${yil} artık yıl değildir.`)
// }

// 7- kullanıcıdan bir yıl ve ay alıyoruz o ayın kaç çektiğini konsola yazdıran kodu yazınız. (2024'ün 2. ayı 29 çeker.) (20 P)

// const yil = +prompt("Lütfen yıl giriniz.");
// const ay = +prompt("Lütfen ay sırası giriniz.");

// if (ay == 2) {
//   if (yil % 400 === 0 || (yil % 4 === 0 && yil % 100 !== 0)) {
//     console.log(`${yil} yılının ${ay} ayı 29 çeker.`);
//   } else {
//     console.log(`${yil} yılının ${ay} ayı 28 çeker.`);
//   }
// } else if (
//   ay == 1 ||
//   ay == 3 ||
//   ay == 5 ||
//   ay == 7 ||
//   ay == 8 ||
//   ay == 10 ||
//   ay == 12
// ) {
//   console.log(`${yil} yılının ${ay} ayı 31 çeker.`);
// } else if (ay == 4 || ay == 6 || ay == 9 || ay == 11) {
//   console.log(`${yil} yılının ${ay} ayı 30 çeker.`);
// } else {
//   console.log("Yanlış giriş yapıldı");
// }
