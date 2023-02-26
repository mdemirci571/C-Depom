/***************** */
/*Soru-3: Girilen farklı 3 tamsayının toplamını, çarpımını, en küçüğünü ve en büyüğünü yazdıran programı yazınız.*/

let a=+prompt("1. sayıyı giriniz.")
let b=+prompt("2. sayıyı giriniz")

while (a===b) {
    console.log("Sayılar farklı olmalıdır. Yeniden deneyiniz");
    b=+prompt("2. sayıyı giriniz")

}

let c=+prompt("3. sayıyı giriniz")

while (c==a || c==b) {
    console.log("Sayılar farklı olmalıdır. Yeniden deneyiniz");
    c=+prompt("3. sayıyı giriniz")
  }
  let kuc=b;
  let buy= a;
  if (a<b) {
    buy=b;
    if(b<c){
        buy=c
    }
  }
  else if (a<c) {
    buy=c
  }

  if (a<b) {
    kuc=a;
    if(c<a){
        kuc=c
    }
  }
  else if (c<b) {
    kuc=c
  }
  toplam=a+b+c;
  çarpım=a*b*c;
  console.log(`3 farklı tamsayının toplamı: \ ${toplam}\, çarpımı: \ ${çarpım}\, en küçüğü: \ ${kuc}\ ve en büyüğü: \ ${buy}\ `);