const people = {
    person1: {
        name: "Can",
        surname: "Canan",
        dob: "1990",
        job: "developer",
        salary: "140000",
        drivingLicense: true,
    },
    person2: {
        name: "John",
        surname: "Sweet",
        dob: "1990",
        job: "tester",
        salary: "110000",
        drivingLicense: false,
    },
    person3: {
        name: "Steve",
        surname: "Job",
        dob: "2000",
        job: "developer",
        salary: "90000",
        drivingLicense: true,
    },
};

//! ASSIGMENT
//? person2'nin adini ve maasini yazdiriniz.

console.log(
    `Person2'nin adı: ${people.person2.name} ve maaşı ${people.person2.salary}`
);



//? people objesindeki tum salary 'leri yazdirin (Dongu kullanilmali)

let maas = 0;
function maastoplam() {
    for (let kisi in people) {
        let person = people[kisi];
        maas = Number(person.salary);
        console.log(`people objesindeki tum maaslar: ${maas}`);
    }
}
maastoplam(maas);



//? job'i developer olanlarin dob degerlerini yazdiriniz.

let sum = 0;
function dob() {
    for (let kisi in people) {
        let person = people[kisi];
        if (person["job"] == "developer") {
            sum += Number(person.dob);
            console.log(
                `${person.name} is dobnummer: ${person.dob}. Toplam dob degeri: ${sum}`
            );
        }
    }
}
dob(sum);
