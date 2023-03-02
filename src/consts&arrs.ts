const username: string = "Anton";

let null1: null = null;
let underfined: undefined = undefined;


let list: number[] = [4, 7, 9];
let list2: Array<number> = [4, 8, 9] // Generic type
// для массива любой длины
let list3: [number, number] = [7, 9]
// для массива фиксированной длины


let x: [string, number] = ["hello", 56]
// Tuple для массива фиксированного размера и фиксированных типов внутри
let y: [any, any] = ["fdf", 78]