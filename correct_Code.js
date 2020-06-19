const numbers = [1, 2];
function getNumbers() {
  setTimeout(() => {
    numbers.forEach(number => console.log(number))
    
  }, 1000)
}
function addNumber(number) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            numbers.push(number)
            resolve();
            }, 2000)



    });
    
  
}
getNumbers(numbers)
addNumber(3).then(()=>getNumbers(numbers));

    

