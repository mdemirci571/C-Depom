/*Soru-5: Girilen dereceyi fahrenayta veya fahrenaytı dereceye çeviren programi tasarlayınız. Çevirimin hangi birimden hangi birime olacağı program başında sorulmalıdır.*/

    let deger=+prompt("deger giriniz")
    let olcum= prompt("Hangi birime cevrim istiyorsunuz: C/F ? ")
    if (olcum==="C") {
        olcum = Math.round((deger-32) / 1.8)
console.log(` Girdiginiz fahrenheit degeri: \ ${olcum}\.`);

    }
    else if(olcum==="F") {
        olcum = Math.round(deger*1.8 + 32)
console.log(` Girdiginiz Celsius degeri: \ ${olcum}\.`);

    }
    else{
        console.log("Yanlış deger girdiniz.");
    }
