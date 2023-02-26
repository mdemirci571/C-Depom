// ODEV9:  Console'dan girilen sayilarin ortalamasini bulan programi yaziniz. Program ilk olarak kullanicidan kac tane sayi gireceginin almali bu bilgi isiginda girilen sayilarin ortalmasini hesaplayarak yazdirmalidir.//

let sayıadeti= +prompt("Lütfen sayı adeti giriniz.")

let sum=0;
let j=1;
for (let i=0; i <sayıadeti; i++) {
    
    let sayı=+prompt(`Lütfen ${j}. sayıyı giriniz`)
    j++
    sum+=sayı;
   
}
sum=sum/sayıadeti;
console.log(`Sayıların ortalaması: ${sum}`);
