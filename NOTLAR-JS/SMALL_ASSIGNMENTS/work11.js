// ODEV11 (ZOR?): Console'dan girilen bir sayinin basamak sayisini hesaplayarak console'a bastiran kodu donguler yardimi ile yaziniz.//


let bay=true
let basamak=1;
let kalan;
let sayi=+prompt("Lütfen  bir sayı giriniz.")
if (-10<sayi&&sayi<10) {
    console.log(`Girdiginiz sayının basamak sayısı: "${basamak}".`);
}
else{
while (bay) {
    kalan=Math.trunc(sayi/10)
    sayi=kalan
    basamak++
    if (-10<sayi&&sayi<10) {
        bay=false
    }
}
console.log(`Girdiginiz sayının basamak sayısı: "${basamak++}".`);
}