/*Soru-6: Kullanicidan 0-100 arasinda bir not isteyen ve girilen not  0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda not girmeye zorlayan kodu while dongusu ile yaziniz.*/

let a=+prompt("0-100 arasınd bir sayı giriniz")

while (a<0||100<a) {
    alert(`Girdiginiz sayı: ${a}. Yanlış sayı girdiniz. Yeniden deneyiniz`);
    a=+prompt("0-100 arasınd bir sayı giriniz")
}
console.log(`Girdiginiz sayı: ${a}. Tebrikler!!!`);