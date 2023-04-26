for (var i = 0; i < 5; i++) {
    setTimeout(function () { console.log(i); }, i * 1000);
}
// OUPUT :  5 5 5 5 5
// Sử dụng let thay cho var vì let có thể cập nhật lại biến i ở ngay thời điểm hiện tại trong 1 closure 