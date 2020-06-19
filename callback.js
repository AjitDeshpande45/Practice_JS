async function a()
{
    console.log("In a");
    var a1=await name("name");
    console.log(a1);
    console.log("After await");
}
function name(a2)
{
    return a2;
}

console.log("Hello");
console.log("2nd");
var a3=a();
console.log(a3);
