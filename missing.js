function Missing_Element(arr1, arr2, l1, l2) {

    for (let i = 0; i < l1; i++) {
        var f = 0;
        for (var j = 0; j < l2; j++) {
            if (arr1[i] == arr2[j]) {
                f = f + 1;
            }
        }
        if (f == 0) {
            console.log(arr1[i]);
        }
    }

}
let arr1 = [5, 4, 1, 2];
let arr2 = [1, 4, 2, 5, 3];
let l1 = arr1.length;
let l2 = arr2.length;
if (l1 > l2) {
    Missing_Element(arr1, arr2, l1, l2);
}
else {
    Missing_Element(arr2, arr1, l2, l1);
}