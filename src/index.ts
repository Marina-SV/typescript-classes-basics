import "./functions.js";
import "./constant.js";
import "./emun.js";
import "./objects.js";
import "./class.js"






// Создание пользовательских типов
// (псевдоним для кастомного типа)
type Name = string;

let userName: Name;
userName = "Vasya" // ok




interface IStack {
  pop(): any;
  push(item: any): void;
};

// let stack: IStack;
//
// stack.push(1);