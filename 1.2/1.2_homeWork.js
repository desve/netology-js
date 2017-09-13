'use strict'

// Домашнее задание к лекции 1.2 «Управляющие конструкции»

// Задача №1
console.log(`Задача №1`);

// Сгенерируем случайные числа в диапазоне 1 - 100
var munberMin = 1;
var numberMax = 100;
var munberRandom = Math.random() * (numberMax - munberMin) + munberMin | 0;    // удаляем значения после запятой
var munberRandom_2 = Math.random() * (numberMax - munberMin) + munberMin | 0;  // удаляем значения после запятой

// на складе меньше
var productInStock_1 = munberRandom;
var productInOrder_1 = productInStock_1 + munberRandom_2; 
 
// на складе ровно столько
var productInStock_2 = munberRandom;
var productInOrder_2 = productInStock_2;  
 
// на складе больше   
var productInStock_3 = munberRandom + munberRandom_2;
var productInOrder_3 = munberRandom;

// Считаем остаток товара на складе
var productStockBalance_1 = productInStock_1 - productInOrder_1;
var productStockBalance_2 = productInStock_2 - productInOrder_2;
var productStockBalance_3 = productInStock_3 - productInOrder_3;

// Вариант 1- На складе нет такого количества товаров
if (productStockBalance_1 < 0) {
  console.log(`На складе нет такого количества товаров`);
} else if (productStockBalance_1 == 0) {
  console.log(`Вы забираете весь товар c нашего склада!`);
} else if (productStockBalance_1 > 0) {
  console.log(`Заказ оформлен`);
} else {
  console.log(`Что-то пошло не так)*`);
}

// Вариант 2- Вы забираете весь товар c нашего склада!
if (productStockBalance_2 < 0) {
  console.log(`На складе нет такого количества товаров`);
} else if (productStockBalance_2 == 0) {
  console.log(`Вы забираете весь товар c нашего склада!`);
} else if (productStockBalance_2 > 0) {
  console.log(`Заказ оформлен`);
} else {
  console.log(`Что-то пошло не так)*`);
}

// Вариант 3- Заказ оформлен
if (productStockBalance_3 < 0) {
  console.log(`На складе нет такого количества товаров`);
} else if (productStockBalance_3 == 0) {
  console.log(`Вы забираете весь товар c нашего склада!`);
} else if (productStockBalance_3 > 0) {
  console.log(`Заказ оформлен`);
} else {
  console.log(`Что-то пошло не так)*`);
}

// Задача №2
console.log(`Задача №2`);

// Выберем случайное значение из массмива
var placeOfDelivery = [`Луна`, `Крабовидная туманность`, `Галактика Туманность Андромеды`, `Туманность Ориона`, `Звезда смерти`];
var randomPlace = placeOfDelivery[Math.floor(Math.random() * placeOfDelivery.length)];

switch (randomPlace) {
  case `Луна` :
    console.log(`Стоимость доставки для области: ${randomPlace}: 150 Q`);
  break;
  case `Крабовидная туманность`:
    console.log(`Стоимость доставки для области: ${randomPlace}: 250 Q`);
  break;
  case `Галактика Туманность Андромеды`:
    console.log(`Стоимость доставки для области: ${randomPlace}: 550 Q`);
  break;
  case `Туманность Ориона`:
    console.log(`Стоимость доставки для области: ${randomPlace}: 600 Q`);
  break;
  case `Звезда смерти`:
    console.log(`${randomPlace}: договорная цена. У вас темно холодно и сташно!)*`);
  break;
  default: 
    console.log(`${randomPlace}: договорная цена. У вас темно холодно и сташно!)*`);
  break;
}

// Задача №3
console.log(`Задача №3`);

// Выберем случайную цену из массмива
var productPriceStorekeeper = [`150`, `250`, '550', '600', 150, 250, 550, 600];
var randomPrice = productPriceStorekeeper[Math.floor(Math.random() * productPriceStorekeeper.length)];
console.log(`Кладовщие ввел ${randomPrice}, ${typeof(randomPrice)}`);

try {
  if (typeof(randomPrice) == 'string') {
    throw `${randomPrice} не является числом`;
  }
  console.log(`Цена товара введена корректно`);
} catch (err) {
  console.log(`Вы допустили ошибку: ` + err);
}

// Задача №4
console.log(`Задача №4`);

// Выберем случайную планету из массмива
var planets = [`Земля`, `Юпитер`];
var buyerPlanet = planets[Math.floor(Math.random() * planets.length)];
console.log(`Мы выбрали - ${buyerPlanet}`);

// Сгенерируем случайный возраст в диапазоне 1 - 150
var agerMin = 1;
var ageMax = 150;
var buyerAge = Math.random() * (ageMax - agerMin) + agerMin | 0;    // удаляем значения после запятой
console.log(`Возраст - ${buyerAge} лет`);

if (buyerPlanet == `Земля` && buyerAge < 18) {
  console.log(`Вы не достигли совершеннолетия`);
} else if (buyerPlanet == `Земля` && buyerAge >= 18) {
  console.log(`Приятных покупок`);
} else if (buyerPlanet == `Юпитер` && buyerAge < 120) {
  console.log(`Сожалеем. Вернитесь на 120-й день рождения!`);
} else if (buyerPlanet == `Юпитер` && buyerAge >= 120) {
  console.log(`Чистого неба и удачных покупок!`);
} else {
  console.log(`Спасибо, что пользуетесь услугами нашего магазина!`);
}


