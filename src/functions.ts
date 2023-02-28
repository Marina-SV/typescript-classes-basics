const error = (msg: string): never => {
    throw new Error(msg)
}
// never для функций, который завершаются ошибкой

let a: string | number = 8
const create = (b: object | number):void => {
    console.log(b)
}
// void для функций, которые ничего не возвращают
create(a) // 8



const createPassword = (name: string = "Max", age?: number | string) =>
    `${name}${age}`

createPassword('Jack') // Jackundefined
    //  дефолтное значение для аргументов функции


const createSkills = (name: string, ...skills:[string]) =>
    `${name}, my skills is ${skills.join()}`

createSkills("Jack", "JS")
    // оператор rest


function oldFunc(name: string): string {
    return  `My name is ${name}`
}

let myFunc: (firstArg: string) => string

myFunc = oldFunc;
//console.log(myFunc("Bob"))