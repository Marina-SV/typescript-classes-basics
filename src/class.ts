// Полный синтаксис
class User {
    // 4 модификатора доступа
    public name: string;
    private age: number; // только внутри класса
    protected pass: number // только внутри класса и наследники
    readonly nickName: string; // только для чтения

    constructor(name: string, age: number, nickName: string, pass: number) {
        this.name = name;
        this.age = age;
        this.nickName = nickName;
        this.pass = pass
    }

}

const marina = new User("Marina", 30, "Marny", 566778)
console.log(marina)


// Сокращенный синтаксис
class Player {
    constructor(
        public name: string,
        private age: number,
        readonly nickName: string,
        protected pass: number) {
    }

}

const masha = new Player("Masha", 45, "Manya", 34665)
console.log(masha)

class Teacher {
    static secret = 12345; // принадлежит самому классу
    protected subject: string = "Math" // присваивается экземпляру класса
    public hasFamily = 'yes' // присваивается экземпляру класса

    constructor(public name: string, public age: number) {
    }

    getPass(): string {
        return `${this.name}${Teacher.secret}`
    }
}

let teacher = new Teacher("Vasya", 16)
console.log(teacher) // name, age, subject, hasFamily
console.log(teacher.getPass())

// Наследует конструктор родительского класса, нельзя вносить доп. св-ва или меньше свойств
class Purple extends Teacher {
    name: string = "Masha"
    // нет явного объявления конструктора
}

let purple = new Purple("", 56)
console.log(purple) // name: "Masha"

class Student extends Teacher {
    name: string = "Sasha"

    constructor(name: string, age: number) {
        super(name, age);
    }

    // Можно изменить метод дочернего класса
    getPass(): string {
        return `${this.name}${Teacher.secret}${this.age}`
    }
}

let student = new Student("", 23)
console.log(student)

// abstract class на прямую не создать экземпляр
// является неким interface как должны выглядеть потомки

abstract class Citizen {
    protected constructor(
        public name: string,
        public age: number) {
    }

    greet(): void {
        console.log(this.name)
    }

    abstract getPass(): string
}

class Marina extends Citizen {

    constructor(name: string, age: number) {
        super(name, age)
    }

    getPass(): string {
        return `${this.name}${Teacher.secret}`;
    }
}

let marina1 = new Marina("Marina", 30)
console.log(marina1)
marina1.greet()