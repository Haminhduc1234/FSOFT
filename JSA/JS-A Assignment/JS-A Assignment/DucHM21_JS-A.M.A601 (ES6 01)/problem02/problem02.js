var x = 2,
fns = [];

(() => {
    var x = 5;
    for (let i = 0; i < x; i++) {
        fns[i] = () => i;
    }
})();
// console.log(fns[2]());
// DO NOT MODIFY BELOW CODE
console.log(x * 2 === fns[x * 2]());
 // true