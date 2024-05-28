/**
 * Задача 6. Записать строку (символы строки) в обратном порядке
Наше исходное строковое значение:

const myStr = 'pizza';
От нас требуется получить строковое значение pizza, записанное в обратном порядке:

// azzip
 */

const myStr = 'pizza';
const reverseStr = myStr.split("").reverse().join("")

console.log(reverseStr) //azzip