function rotate(rotate_array)
{
for (let i = 0; i < 3; i++) {
    let first_element = rotate_array[0];

    for (var j = 0; j < rotate_array.length; j++) {
        rotate_array[j] = rotate_array[j + 1];
    }
    rotate_array[rotate_array.length - 1] = first_element;
}
return rotate_array;
}
let rotate_array = [1, 2, 3, 4, 5];
const final_array=rotate(rotate_array);
console.log(final_array);