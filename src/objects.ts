// классическая типизация объекта
let user: { name: string, age: number } = {
    name: "Masha",
    age: 56
}
// user.location = "London" ошибка


// описание структуры объекта через type
type Person = {
    name: string,
    age: number,
    nickName?: string
}

let admin: Person;
admin = {
    name: "Pete",
    age: 54,
    nickName: "crazyAdmin"
}
// подходит для описания любого типа данных
type Name = string;

let userName: Name;
userName = "Vasya" // ok

// Описывают некоторые сущности, которые как минимум должны содержать описываемые параметры
// Может наследоваться и расширяться другими интерфейсами
interface IWorker {
    readonly name: string,
    age: number,
    address?: string,

    [propName: string]: any, // добавление строкового индекса
}

let ivan: IWorker = {
    name: "Ivan",
    age: 34,
    nickName: "crazyWorker",
    test: "test"
}

console.log(ivan.age)

interface IUser {
    name: string,
    age: number,
}

interface IPass {
    getPass(): string,
}

class Anton implements IPass, IUser {
    name = "Anton";
    age = 32;

    getPass(): string {
        return `${this.name}${this.age}`
    }

}