function missing(arr1, arr2, l1, l2) {

    if (l1 > l2) {
        for (var i = 0; i < l1; i++) {
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
    if (l1 < l2) {
        for (var i = 0; i < l2; i++) {
            var f = 0;
            for (var j = 0; j < l1; j++) {
                if (arr2[i] == arr1[j]) {
                    f = f + 1;
                }
            }
            if (f == 0) {
                console.log(arr2[i]);
            }
        }
    }
}


var arr1 = [1, 4, 2, 5, 3];
var arr2 = [5, 4, 1, 2];
var l1 = arr1.length;
var l2 = arr2.length;
var x = missing(arr1, arr2, l1, l2);
