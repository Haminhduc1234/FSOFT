function test() {
    console.log(a);
    console.log(foo());
    var a = 1;
    function foo() {
        return 2;
    }
}

test(); // undefined 2

// function test() {
//     funtion foo(){}
//     var a;
//     console.log(a);
//     console.log(foo());
//     a = 1;
//     function foo(){
//         return 2;
//     }
// }
