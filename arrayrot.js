var array = [1, 2, 3, 4, 5];

for (var i = 0; i < 3; i++) {
    var f = array[0];

    for (var j = 0; j < array.length; j++) {
        array[j] = array[j + 1];
    }
    array[array.length - 1] = f;
}
console.log(array);