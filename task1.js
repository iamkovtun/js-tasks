/**Задача 1. Определить сколько раз каждый элемент встречается в массиве.
Имеется исходный массив:

const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];
Требуется получить ответ в следующем формате:

// {kiwi: 3, apple: 2, orange: 1} */


const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];

const counterValues = {}
fruits.forEach(function(fruit) {
    counterValues[fruit] = (counterValues[fruit] || 0) + 1
})
console.log(counterValues)