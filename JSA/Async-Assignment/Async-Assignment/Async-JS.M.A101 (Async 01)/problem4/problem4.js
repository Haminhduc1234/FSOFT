// CASE 1
// -----------------------------------------------------
// console.log("A");
// setTimeout(function () { console.log("B"); }, 0);
// setTimeout(function () { console.log("C"); }, 0)
// console.log("D");
// -----------------------------------------------------
// => OUTPUT :  A D B C
// => A D là các lệnh đồng bộ nên sẽ được chạy trước , sau đấy hàm setTimeout được đưa lần lượt vào webAPI để đếm
// Sau khi các lệnh đồng bộ chạy xong chạy các lệnh bất đồng bộ đếm xong sẽ được đưa vào hàng đợi để chạy


// CASE 2
// -----------------------------------------------------
// setTimeout(function () {
//     setTimeout(function () {
//         console.log('A');
//     }, 0);
// }, 0);

// setTimeout(function () {
//     console.log('B');
// }, 0);

// setTimeout(function () {
//     setTimeout(function () {
//         console.log('C');
//     }, 0);
// }, 10);

// setTimeout(function () {
//     console.log('D');
// }, 0);
// -----------------------------------------------------
// => OUTPUT : B D A C
// Vì : Các lệnh bất đồng bộ sẽ đều được đợi và đếm
// Khi không có các lệnh đồng bộ thì lệnh đồng bộ nào được đưa vào trước khi đếm xong sẽ được thực thi nên B D sẽ được in ra trước
// setTimeout log ra A  và C sau khi đếm xong bên WebAPI lại có 1 setTimeout khác được đếm và lại được đưa 
// vào webAPI để đếm và khi đếm xong lần này nó mới được in ra nên A sẽ được in ra trước vì đếm 0ms
// còn D sẽ được in ra cuối cùng vì đêm 10ms


// CASE 3
// -----------------------------------------------------
// var x = 'A';

// setTimeout(function () {
//     console.log(x);
//     x = 'B';
// }, 3);

// setTimeout(function () {
//     console.log(x);
//     x = 'C';
// }, 2);
// setTimeout(function () { 
//     console.log(x); 
//     x = 'D'; 
// }, 1); 
// setTimeout(function () { 
//     console.log(x); 
// }, 4)
// -----------------------------------------------------
// => OUTPUT : A D B C

// A là biến cục bộ bên ngoài , khi hàm setTimeout thứ 3 đếm xong đầu tiên sẽ log ra x => lúc này là A
// x được cập nhật lại = D
// Các hàm setTimeout được đưa sang WebAPI được đếm đồng thời ,nhưng mất 1 khoảng delay hàm set sau mới được bắt đầu đếm
// nên hàm set đầu tiên đếm xong trước hàm set thứ 2 mặc dù thời gian là lớn hơn 
// => Log ra D và cập nhật lại x = B
// => Hàm set thứ 3 đếm 2s xong tiếp theo log ra x = B và cập nhật lại x = C
// => Cuối cùng hàm set cuối cùng đếm 4ms xong sau cùng nên chạy cuối cùng và log ra x lúc này là C


// CASE 4
// -----------------------------------------------------
var t1 = setTimeout(function () {
    console.log('A');
    setTimeout(function () {
        console.log('B');
    }, 0);
}, 100);
var t2 = setTimeout(function () {
    console.log('C');
    setTimeout(function () {
        console.log('D');
    }, 0);
}, 200);

clearTimeout(t1);
setTimeout(function () {
    clearTimeout(t2);
}, 250)
// -----------------------------------------------------
// => OUTPUT : C D
// => Vì t1 bị clearTimeout ngay từ đầu vì nó là lệnh đồng bộ 
//=> t2 được chạy vì clearTimeout lại được để trong 1 setTimeout khác 250ms trong khi nó đã log ra C D sau 200ms