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


interface Point {
    x: number;
    y: number;
}



// наследование от нескольких интерфейсов
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



// Откидывает лишние параметры при утиной типизации
function logPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`);
}

const point3 = { x: 12, y: 26, z: 89 };
logPoint(point3); // logs "12, 26"

const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect);
