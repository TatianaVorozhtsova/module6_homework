// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
// Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

// При выполнении задания необходимо учесть, что массив может содержать не только числа,
//   но и, например, знаки, null и так далее.

// На этот раз оформите решение в виде функции, постарайтесь дать этой функции 
// корректное название, вызовите функцию, проанализируйте синтаксис.


const arr = [5, 0, 2, "Иван", 8, null, 3, 10, "list", "Анна", 14, 0, 25, null];
let evenNumbers = 0;
let oddNumbers = 0;
let zeroNumbers = 0;
let nullCount = 0;

function evenOddZeroNullCount() {
    for (i=0; i< arr.length; i++) {
  
        if (Number.isFinite (arr [i])) {
    
        if (arr [i] === 0) {
        zeroNumbers += 1;
        }
    
        if (arr [i] !== 0 && (arr [i]) % 2 === 0) {
        evenNumbers +=1;
        }
        else if ( (arr [i]) % 2 !== 0) {
        oddNumbers += 1;
        }
        }

        if (arr[i] === null) {
        nullCount += 1;
        } 
    } 
}

evenOddZeroNullCount();

console.log (`В данном массиве количество чётных чисел ${evenNumbers}, количество нечётных чисел ${oddNumbers}, количество нулей ${zeroNumbers}, количество элементов \"Null\" ${nullCount}.`)



