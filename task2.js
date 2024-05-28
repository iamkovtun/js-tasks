/**Задача 2. Создать массив который содержит только уникальные значения исходного массива.
Исходный массив:

const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple']; */

const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];


uniqValues = [...new Set(fruits)]

console.log(uniqValues)