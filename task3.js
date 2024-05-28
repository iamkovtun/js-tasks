/**
 * Задача 3. Создать функцию, которая группирует студентов по возрасту.
На выходе требуется получить объект, где ключ - возраст, а значение - массив студентов, которые относятся к данной возрастной группе.

Исходный массив:

const students = [
  { name: 'alex', age: 20 },
  { name: 'mike', age: 24 },
  { name: 'masha', age: 20 },
  { name: 'stas', age: 18 },
];
Требуется получить ответ в следующем формате:

// '20': [{ name: 'alex', age: 20 }, { name: 'masha', age: 20 }],
// '24': [{ name: 'mike', age: 24 }],
// '18': [{ name: 'stas', age: 18 }],
 */

const students = [
    { name: 'alex', age: 20 },
    { name: 'mike', age: 24 },
    { name: 'masha', age: 20 },
    { name: 'stas', age: 18 },
  ];

const studentsGrouped = {}
  for (student of students) {
    if (studentsGrouped[student.age]) {
        studentsGrouped[student.age].push(student)
    } else {
        studentsGrouped[student.age] = [student]
    }
    
  }

console.log(studentsGrouped) 

/*{
  '18': [ { name: 'stas', age: 18 } ],
  '20': [ { name: 'alex', age: 20 }, { name: 'masha', age: 20 } ],
  '24': [ { name: 'mike', age: 24 } ]
}**/
