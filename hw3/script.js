 'use strict'
let n = +prompt ('Введите номер n-ного члена последовательности Фибоначчи');
let f0 = 2;
let f1 = 5;
function fibonResult (f0, f1, n) {
   if (n == 0) {
       return f0;
   } else if (n == 1) {
       return f1; 
   } else if (n > 1) {
       return fibonResult(f0, f1, n - 1) + fibonResult(f0, f1, n - 2);
   } else if (n < 0) {
       return fibonResult(f0, f1, n + 2) - fibonResult(f0, f1, n + 1);
   }
}
alert(`${n}-й член последовательности Фибоначчи, с начальными числами ${f0} и ${f1} равен: ${fibonResult(f0, f1, n)}`);
