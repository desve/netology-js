'use strict'


// Домашнее задание к лекции 1.1 «Переменные, числа и строки»

// Задача №1
console.log('Задача №1');

var productName;
var productPrice;

// Задача №2
console.log('Задача №2');

var productName = 'Телепорт бытовой VZHIH-101';
var productPrice = '10000';
var textHello = 'Привет! Добро пожадовать в первый межгалактический интернет-магазин!';

console.log(textHello);
console.log(`В наличии имеется: "${productName}"`);
console.log(`Стоимость товара ${productPrice} Q`);

// Задача №3
console.log('Задача №3');

var productAmount = 2;     // Покупатель совершил две покупки
var productDiscount = 10   // Скидка 10 %
var textDiscount = `Внимание! Только сегодня! При покупке 2-х и более единиц товара предоставляется скидка ${productDiscount} %`;

console.log(textDiscount);
console.log(`Вы покупаете "${productName}" - ${productAmount} штуки`);

var productCost = (productAmount * productPrice) * (1 - productDiscount / 100);
console.log(`Цена покупки составит ${productCost} Q`);

// Задача №4. Дополнительная (необязательная)
console.log('Задача №4');

var moneyTotal = 52334224;    // Всего денег на счете магазина
var productCostPrice = 6500;  // Себестоимость товара

var productAmountPurchase = moneyTotal / productCostPrice | 0;
var moneyBalance = moneyTotal - productAmountPurchase * productCostPrice

console.log(`Мы можем закупить ${productAmountPurchase} единиц товара, после закупки на счету останется ${moneyBalance} Q`);


