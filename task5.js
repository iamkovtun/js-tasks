/**Задача 5. Получить единый массив из любимых пицц каждого друга
Имеется исходный массив friends:

const friends = [
  { name: 'alex', pizzas: ['cheese', 'pepperoni'] },
  { name: 'mike', pizzas: ['salami', 'margarita'] },
  { name: 'stas', pizzas: ['meat'] },
  { name: 'anna', pizzas: ['fish'] }
];
Нужно получить результат в следующем формате:

// ['cheese', 'pepperoni', 'salami', 'margarita', 'meat', 'fish']; */

const friends = [
    { name: 'alex', pizzas: ['cheese', 'pepperoni'] },
    { name: 'mike', pizzas: ['salami', 'margarita'] },
    { name: 'stas', pizzas: ['meat'] },
    { name: 'anna', pizzas: ['fish'] }
  ];


allPizzas = []
for (friend of friends) {
    allPizzas.push(...friend.pizzas)
  }

console.log(allPizzas)// [ 'cheese', 'pepperoni', 'salami', 'margarita', 'meat', 'fish' ]