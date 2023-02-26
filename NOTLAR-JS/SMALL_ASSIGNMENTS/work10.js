// ODEV10: Console'dan girilen taban ve pozitif us degerlerine gore uslu sayi sonucunu hesaplayan kodu for veya while dongusu ile yaziniz.//

let taban= +prompt("Lütfen taban sayısı giriniz.")
let us= +prompt("Lütfen us giriniz.")

let result=1;
if (us==0) {
    result=1
}
else{
    for(i=0; i<us; i++){
        result=result*taban
    }
}
console.log(result);
