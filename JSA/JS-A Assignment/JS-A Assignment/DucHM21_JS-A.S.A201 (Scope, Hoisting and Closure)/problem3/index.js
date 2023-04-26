var a = 1;
function b() {
    a = 10;
    return;
    function a() {
    }
}
b();
console.log(a);  //1 : vì scope của a là global , bên trong hàm làm gì cũng không ảnh hưởng đến a bên ngoài hàm 