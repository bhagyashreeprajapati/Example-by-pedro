// class Student {
//     // attribute, property, variable, member variable
//     country = "Portugal";

//     // method, function
//     getCountry() {
//         console.log(this.country);
//     }
// }
// // Instantiate an object
// let student1 = new Student();
// console.log(student1.country); // Portugal
// console.log(student1.getCountry()); // Portugal

// let student2 = new Student();
// console.log(student2.country); // Portugal
// console.log(student2.getCountry()); // Portugal

class Student {
    name;
    country;
    birthDate;

    constructor(name, country, birthDate) {
        this.name = name;
        this.country = country;
        this.birthDate = birthDate;
    }

    getCountry() {
        console.log(this.country);
    }

    showInfo() {
        return `${this.name} is from ${this.country} and is ${this.calculateAge()} years old.`;
    }

    calculateAge() {
        const today = new Date();
        const birthDate = new Date(this.birthDate);
        let age = today.getFullYear() - birthDate.getFullYear();
        let monthDifference = today.getMonth() - birthDate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
}

let student1 = new Student("Pedro", "Portugal", "1965-07-05");
console.log(student1.name); // Pedro
console.log(student1.getCountry()); // Portugal
console.log(student1.birthDate); // 1965-07-05
console.log(student1.calculateAge()); // 58
console.log(student1.showInfo()); // Pedro is from Portugal and is 58 years old.

let student2 = new Student("Miriam", "Germany", "2000-03-23");
console.log(student2.name); // Miriam
console.log(student2.country); // Germany
console.log(student2.getCountry()); // Germany
