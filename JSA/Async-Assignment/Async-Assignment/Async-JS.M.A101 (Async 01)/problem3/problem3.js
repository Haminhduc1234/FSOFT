(function () {
    console.log(1);
    setTimeout(function () { console.log(2) }, 1000);
    setTimeout(function () { console.log(3) }, 0);
    console.log(4);
})();

//Output : 1 4 3 2 
// Bởi vì ban đầu , các lệnh đồng bộ sẽ được chạy trước nên 1 4 sẽ in ra trước 
// Các lệnh bất đồng bộ được lưu vào 1 stack để chờ , đếm hết thời gian chờ nó mới được in ra 
// Log ra 3 trước vì hàm setTimeout đếm 0s còn log ra 2 sau vì hàm setTimeout đếm 1s