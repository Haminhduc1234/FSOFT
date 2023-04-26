function someFunction(number) {
    function otherFunction(input) {
        return a;
    } 
    a = 5;
    return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);

console.log(firstResult);
console.log(result); // 5 => closure trong js co the truy cap bien ben ngoai ham khi ham do nam ben trong mot ham khac




