function key_Value(dictionary){
    let key_Dictionary=[];
    let value_Dictionary=[];
    //console.log("Key ["+Object.keys(dict)+"]");
    key_Dictionary.push(Object.keys(dictionary));
    value_Dictionary.push(Object.values(dictionary));
    console.log("Key :- "+  key_Dictionary+"\nValues :- "+value_Dictionary);

}


key_Value({
    "a":1,
    "b":2
});