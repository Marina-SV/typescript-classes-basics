// типизация объекта через type

let user: { name: string, age: number } = {
    name: "Masha",
    age: 56
}

// user.location = "London" ошибка

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