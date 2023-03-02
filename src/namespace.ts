

// похожи на объекты, но напрямую без export нельзя обратиться
// namespace своя область видимости
// устаревший подход, сейчас используют модули
namespace Utils {
    export const SECRET: string = "12345";
    const PI: number = 3.14;
    export const getPass = (name: string, age: number): string =>
        `${name}${age}`;
    export const isEmpty = <T>(data: T): boolean => !data
}

const myPass = Utils.getPass("Marina", 30)
console.log(myPass)

const SECRET = Utils.isEmpty(Utils.SECRET)
console.log(SECRET)