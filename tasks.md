``` JavaScript
function evenOrOdd(number) {
  let x = number;
  x = x + 2;
  return x;
}
const result4 = evenOrOdd(5);
console.log(result4);


// Создайте функцию, которая принимает целое число в 
// качестве аргумента и возвращает "Четное" для четных чисел или "Нечетное" 
// для нечетных чисел.

// Function declaration

function calculateNumber(initialValue) {
  // initialValue - параметр функции типа number
  let x = initialValue;
  x = x + 100;
  x = x / 5;

  return x;
}

const result = calculateNumber(5334535);
const result1 = calculateNumber(5335);
// console.log(result);
// console.log(result1);

function calculateCercleArea(cercleRadius) {
  // initialValue - параметр функции типа number
  return 3.14 * cercleRadius ** 2; // параметр - это переменная
} // функция может принимать сколько угодно параметров

const cercleArea1 = calculateCercleArea(6); // (6) - это аргумент (значение переменной, которе мы передаем в функцию)
// console.log(cercleArea1);

const cercleArea2 = calculateCercleArea(16.2);
// console.log(cercleArea2);

function createHTMLElement(tag = "button", text = "отправить", id = null) {
  // нужно сохранять порядок записи параметров
  const element = document.createElement(tag);
  if (id) {
    // если id не null или undefined то присваиваем элементу id
    element.id = id;
  }
  element.innerHTML = text;

  return element;
}

const h1element = createHTMLElement("h1", "просто текст"); // аргументы идут в такомже порядке как и параметры
// console.log(h1element)                                  // если мы не хотим передавать аргументы, то мы можем использовать null
// document.body.append(h1element)

// const element = createHTMLElement();
// document.body.append(element)

function logArgsToControle() {
  // console.log(arguments);
  if (!arguments.length) {
    //1. если аргументов нет
    return; // то досрочно возвращаем завршение функции
  }
  for (let argument of arguments) {
    // console.log(arguments);
  }
  console.log("Больше аргументов нет"); // когда аргументы закончились выводим это сообщение
}

logArgsToControle(); // 1. если аргументов нет то возвращаем undefined

// Function expression

// sayHello(); - нельзя получить доступ к переменной до т ого как она была инициализированна

// const sayHello = function() {
//   console.log('Hello');
// }
// sayHello();

const sayBye = () => {
  // у стрелонной функции нет параметра аргументов
  // console.log('Bye');
};
sayBye();

const brokenLinks = ["vk", "youtybe", "instagram", "facebook"];
// https://vk.com

// коллбэк функция - это функция переданная в другую функцию в качестве аргумента
const fixLinksArray = (linksArray) => {
  const correctLinks = [];
  linksArray.forEach((brokenLink) =>
    correctLinks.push("https://" + brokenLink + ".com")
  );

  return correctLinks;
};

// console.log(fixLinksArray(brokenLinks));

// методы массивов

const people = [
  { name: "Олег", age: 15, budget: 20000 },
  { name: "Алексей", age: 15, budget: 3400 },
  { name: "Михаил", age: 15, budget: 5600 },
  { name: "Екатерина", age: 15, budget: 7000 },
  { name: "Вадим", age: 15, budget: 4500 },
  { name: "Елена", age: 15, budget: 8200 },
];

// ForEach

// Map

// Filter

// Reduce

// Find

// FindIndex

// Циклы FOR

// Цикл - это что-то замкнутое и повторяющееся действие из раза в раз

// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);
// console.log(1);

//     or

// 1. создаем переменную - счётчик i (индекс) = 0
// 2. указываем условие (i < 5) меньшели переменная i чем 5
// 3. переходим к телу цикла и выводим через console.log(1)
// 4. шаг (увеличиваем i на 1) Это эквивалентно операции i = i + 1

// for (1.начальное значение;2. условие; 4.) {
// 3.  console.log(1);

// создаем переменную - счётчик i и приравниваем ее к 0
// проверяем меньше ли i чем 5? получаем true
// выполняем console.log(1)
// } i++ прибавляем единицу к i
// снова проверяем меньше ли i чем 5? получаем true
// и так далее до тех пор пока i будет равна 5 и получим false тогда тело цикла не будет выполненно

for (let i = 0; i < 5; i++) {
  // console.log(1);   // для проверки можем выводить i в место 1
}

const arr = ["a", "b", "c", "d", "e"];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// модификация записи цикла FOR

// в letter находится следующий элемент массива a b c d e
// переменную letter можно назвать как угодно, например - eretete
for (let letter of arr) {
  // console.log(letter);
}

const user = {
  name: 'Олег',
  age: '15',
  isMaried: true,
};

for (let key in user) {
  // console.log(key); // получаем доступ к каждому ключу в объекте
  // console.log(key, user[key]);  // получаем свойство объекта
  // пишем [key] в квадратных скобках потомучто значение [key] динамическое 
  if (key === 'age') {
    break; // останавливает цикл
  }
  // console.log(user[key]);

}


//  в обратном порядке сначала i = 5, потом i = 4 и так далее
// for (let i = arr.length; i > 0; i--) {
  // console.log(arr[i - 1]);
// }

// Циклы WHILE

let x = 0;

// while (x < 5) {
// console.log(x);
// x++;
// break; // останавливает цикл
// }

// let word = '';
// while (word.length < 5) {
// const value = prompt('введите букву');
//   if (value.length === 0) { // если пользователь ничего не ввел то выходим  из цикла
//     break;
//   }
//   word = word + value;
//   console.log(word);
// }


// сначала делаем, а потом проверяем

// let h = 0;
// do {
//   console.log(h);
//   h++;
// } while (h < 5);

// // сначала проверяем, а потом делаем

// let y = 0;
// while (y < 5) {
//   console.log(y);
//   y++;
// } 
```