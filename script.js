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

var arr = [1, 2, 3, 4, 5, 6, 7] 

arrNew = sumSliceArray(arr, 2, 4)
console.log(arrNew)

//task 2

