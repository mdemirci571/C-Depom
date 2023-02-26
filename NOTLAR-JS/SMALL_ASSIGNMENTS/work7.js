/*Soru-7:Tahmin Oyunu ● Program 0-100 arasında rasgele bir sayı tutmalı ve kullanıcının bu sayıyı 5 kerede (hak) bilmesini istemelidir. Her yanlışta hakkını bir düşürmeli ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirmelidir. Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler ... denemede bildiniz" diye bir bilgi mesajı yazdırmalıdır.*/

alert(
    " Tutulan sayıyı 5 kerede bilme hakkınız var. Her yanlışta hakkınız bir düşer. İyi Şanslar!!!"
);
const num = Math.round(Math.random() * 100);
console.log(num); //kontrol amaclı gösteriliyor
let deneme = 0;

do {
    let a = +prompt("0-100 arasında bir sayı giriniz");

    if (num !== a) {
        deneme += 1;
        skor = 5 - deneme;
        if (deneme === 5 && num !== a) {
            console.log(
                `${a} yazdınız. ${deneme}. denemedesiniz. ${skor} hakkınız kaldı. Üzgünüz bilemediniz.😥`
            );
        } else if (num < a) {
            console.log(
                `${a} yazdınız. Tahmininizi azaltın, ${deneme}. denemedesiniz. ${skor} hakkınız kaldı.`
            );
        } else {
            console.log(
                `${a} yazdınız. Tahmininizi artırın, ${deneme}. denemedesiniz. ${skor} hakkınız kaldı.`
            );
        }
    } else {
        deneme += 1;
        console.log(`Tebrikler! ${deneme}. denemede bildiniz.`);
        break;
    }
} while (deneme < 5);
