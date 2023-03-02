import "./functions.js";
import "./consts&arrs.js";
import "./emun.js";
import "./objects.js";
import "./class.js";
import "./namespace.js";
import "./generic.js";





interface IArray {
  length: number;
  push(item: any): void;
  pop(): void;
  getItem(index: number): any;
};

class MyArray implements IArray {
  private _array: any[] = [];

  get length () {
    return this._array.length;
  };

  getItem(index: number): any {
    return this._array[index];
  }

  pop(): void {
    this._array.pop();
  }

  push(item: any): void {
    this._array.push(item);
  }

};

const array: IArray = new MyArray();

array.push(23)
array.push(23)
array.push(23)
//
// console.log(array);





interface INotificationManager {
  send(phone: string, message: string): void;
};


class SmsNotificationManager implements INotificationManager {

  send(phone: string, message: string) {
    console.log(`Send by SMS to ${phone}, message: ${message}`);
  }

};

class TelegramNotificationManager implements INotificationManager {

  send(phone: string, message: string) {
    console.log(`Send by Telegram  ${phone}, message: ${message}`);
  }

};

function registrate (manager: INotificationManager) {
  console.log('Вы зарегистрировались!');
  manager.send('+79251155387', '9956');
};

// const input = prompt('Куда отправить смс?');
//
// if(input === 'telegram') {
//   registrate(new TelegramNotificationManager());
// };
//
// if(input === 'sms') {
//   registrate(new SmsNotificationManager());
// };
