function getNumbers() {
    setTimeout(() => {
    numbers.forEach  ( number => console.log(number))
 }, 1000)
}
function addNumber(number,callback) {
 setTimeout(() => {
 numbers.push(number)
 callback(numbers);
 }, 2000)
}

async function calc()
{
   
   getNumbers(numbers) ;
    addNumber(3,(numbers)=>{

        getNumbers(numbers);
    });
    
}
const numbers = [1, 2];
calc();
