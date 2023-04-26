function foo(x, y) {
    var [arr1,arr2] = x;
    var [arr2,...arr3] = y;
    return [arr1,...arr3];
}
function bar() {
    var a1 = [2, 4];
    var a2 = [6, 8, 10, 12];
    return foo(a1,a2);
}
console.log(bar());

// DO NOT MODIFY BELOW CODE
console.log(bar().join('') === '281012');
 // true