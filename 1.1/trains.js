'use strict'

var trainMscSpeed = 112, trainSmrSpeed = 73,
distance = 1056, time, distanceFromMsc;

time = distance / (trainMscSpeed + trainSmrSpeed);
distanceFromMsc = trainMscSpeed * time;

console.log(`Поезда встретятся через ${time} часов`);
console.log(`Встреча произойдет в ${distanceFromMsc} км от Москвы`);
