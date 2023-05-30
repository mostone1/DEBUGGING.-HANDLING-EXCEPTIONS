// task 1

function sumSliceArray(arr, first, second) {
   if (!Array.isArray(arr)) {
      throw new Error('Перший аргумент не є массивом');
   }
   if (first > arr.length) {
      throw new Error('Перше значення більше дліни массиву');
   }
   if (second > arr.length) {
      throw new Error('Друге значення більше длінни масиву');
   }
   if (typeof first != 'number' || typeof second != 'number') {
      throw new Error('Значення повинно бути числом');
   }
   return arr[first] + arr[second];

}

let arr = [1, 2, 3, 4, 5, 6, 7]

arrNew = sumSliceArray(arr, 2, 4)
console.log(arrNew)

//task 2

function checkAge() {
   let name = prompt('Your name');
   let age = parseInt(prompt('Your age'));
   let status = prompt('Your status');
   if (age < 18 || age > 70) {
      throw new RangeError('Age is out of range');
   } if (name === '' || age === '' || status === '') {
      throw new Error('The field is empty! Please enter your age')
   } if (status != 'admin' || status != 'moderator' || status != 'user') {
      throw new EvalError('Wrong status');
   } if (isNaN(age)) {
      throw new EvalError("Age must be a number")
   }
   alert('You can watch the movie!');
}

try {
   checkAge();
} catch (error) {
   alert(error.name + ': ' + error.message);
}
checkAge()

//task 3

function calcRectangleArea(width, height) {
   
   
   if (isNaN(rectangleWidth) || isNaN(rectangleHeight)) {
      throw new Error('Must be a number');
   }
   let result = rectangleWidth * rectangleHeight;
   alert(result + ' cm²');
}
   let rectangleWidth = parseInt(prompt("Enter width"));
   let rectangleHeight = parseInt(prompt("Enter height"))

   try {
      calcRectangleArea(rectangleWidth, rectangleHeight)
   } catch(error) {
      alert (error.name + ': ' + error.message);
   }

calcRectangleArea()

//task 4

class MonthException {
   constructor() {
   this.months = ["January", 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
}

showMonthName(month) {
   if (month >= 1 && month <= 12) {
      return this.months[month - 1];
   } else {
      throw new Error('Invalid month number');
   }
  }
}
const monthException = new MonthException()

function showMonthName(month) {
   try {
      return monthException.showMonthName(month);
   } catch (error) {
      console.log(error.name + ': ' + error.message);
   }
}

console.log(showMonthName(5));

//task 5

function showUser(id) {
   if (id < 0) {
      throw new Error('ID must not be negative: ' + id);
   }
   
   return { id: id };
}

function showUsers(ids) {
   if (!Array.isArray(ids)) {
      throw new Error('Invalid id')
   }


const users = []

for (let id of ids) {
   try {
      userssers.push(showUser(id));
   } catch (error) {
      console.log(error.name + ': ' + error.message);
   }
}

 return users;
}