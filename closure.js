/*for(let i=0;i<3;i++)
{
    setTimeout(()=>{

        console.log(i)
    },1000)
}
*/
/*function makeFunc() {
    var name = 'Mozilla';
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
var myFunc = makeFunc();
myFunc();
*/
/*
function makefun(){
    var c=0;
    function count(){
        c=c+1;
        console.log(c);
    }
    return count;
}
var fun=makefun();
fun();*/
/*
function x(){
    let c=0;
    function change(i){
        c=c+i;
        console.log(c);
    }
    return{
        add: function () {
            change(2);
        },
        sub:function () 
        {
            change(-1);    
        }
    }
}

let x1=x();

x1.add();
x1.sub();*/

function x(){

    let i=0;
    function display(){
        console.log(i);

    }
    return display;
}
var x1=x();
x1();