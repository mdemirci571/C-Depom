/*Soru-8: Klavyeden Q veya q karakteri girilene kadar not girişi yapan ve bu karakterlerden birisi girildiğinde O ana kadar girilen tüm notların ortalamasını hesaplayarak konsola ortalamayı bastıran uygulamayı yazınız.*/

let not;
let sum = 0;
let sayac = 0;
let toplam = 0;
while (not != "q") {
    not = prompt("sayı giriniz");
    if (not != "q") {
        sum = Number(sum) + Number(not);
        sayac += 1;
        toplam = sum / sayac;
        console.log(
            `Sayıların aritmetik ortalaması: ${toplam}, girilen sayı miktarı: ${sayac}. Çıkış yapmak için 'q'ye basınız. `
        );
    } else {
        console.log("Hoşçakalın");
    }
}