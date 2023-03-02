// Общие типы. Обозначение типов в общем виде
// Дают возможность самому назначать типы

const getter = <T>(data: T): T => data;

console.log(getter(10).toString())
console.log(getter("rate").length)
// компилятор автоматически определяет какой тип данных принимает функция

getter<number>(10)
getter<string>("hi")
//мы определяем какой тип данных должна принимать функция

class Girl<T, K extends number> {
    constructor(
        public name:T,
        public age: K,
    ) {}

    public getPass(): string {
        return `${this.name}${this.age}`
    }

    public getSecret(): number {
        return this.age**2;
    }
}

const anna = new Girl("Masha", 56);

function map <T, K>(data: Array<T>, callback: (item: T, index: number, array: Array<T>) => K): Array<K> {
    const results: Array<K> = [];

    for (let i = 0; i < data.length; i++) {
      results.push(callback(data[i], i, data));
    }

    return results;
};

console.log(map([1, 2, 3], (item) => item ** 2));

interface IIUser<T extends string | number> {
    id:T,
    name:T
}


