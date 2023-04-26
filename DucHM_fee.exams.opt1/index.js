var taxArr = document.getElementsByClassName('sumTax__Container');
var totalArr = document.getElementsByClassName('total');
var quanlityArr = document.getElementsByClassName('quanlity');
var priceArr = document.getElementsByClassName('price__X');
var discountArr = document.getElementsByClassName('discount_X');
var totalPrice = document.getElementsByClassName('total__Price');
var totalDiscount = document.getElementsByClassName('total__Discount');
var totalTax = document.getElementsByClassName('total__Tax');
function countTax(i) {
    var taxInstance;
    return taxInstance = Number(quanlityArr[i].value) * Number(priceArr[i].innerHTML) * 0.125
}

function countTotal(i) {
    var totalInstance;
    var sumTax = countTax(i);
    return totalInstance = Number(quanlityArr[i].value) * Number(priceArr[i].innerHTML) - Number(discountArr[i].innerHTML) + Number(sumTax);
}
function TotalPrice() {
    var totalPriceInstance = 0;
    var tempPrice;
    for (var i = 0; i < 3; i++) {
        if (countTotal(i) > 0) {
            tempPrice = countTotal(i);
            totalPriceInstance += tempPrice;
        }
    }
    return totalPriceInstance;
}
function TotalDiscount() {
    var totalDiscount = 0;
    for (var i = 0; i < 3; i++) {
        if (discountArr[i].innerHTML != '0' && quanlityArr[i].value > 0) {
            totalDiscount += Number(discountArr[i].innerHTML);
        }
    }
    return totalDiscount;
}

function TotalTax() {
    var countSumTax = 0;
    var tTax;
    for (var i = 0; i < 3; i++) {
        if (countTax(i) > 0) {
            tTax = countTax(i);
            countSumTax += tTax;
        }
    }
    return countSumTax;
}
function taxCucal(amount, price) {
    if (amount * price * (12.5) / 100 < 1) return 1;
    else return (amount * price * (12.5) / 100);
}
function plus(qty) {
    qty.value++;
    for (let i = 0; i < taxArr.length; i++) {
        if (quanlityArr[i].value > 0) {
            taxArr[i].textContent = countTax(i) > 1 ? countTax(i) : 1;
            totalArr[i].textContent = countTotal(i);
        }
    }
    totalPrice[0].textContent = TotalPrice();
    totalDiscount[0].textContent = TotalDiscount();
    totalTax[0].textContent = TotalTax();

}
function minus(qty) {
    if (qty.value > 0) {
        qty.value--;
    }
    for (let i = 0; i < taxArr.length; i++) {
        if (quanlityArr[i].value > 0) {
            taxArr[i].textContent = countTax(i);
            totalArr[i].textContent = countTotal(i);
        }
        else {
            taxArr[i].textContent = '';
            totalArr[i].textContent = '';
        }
    }
    totalPrice[0].textContent = TotalPrice();
    totalDiscount[0].textContent = TotalDiscount();
    totalTax[0].textContent = TotalTax();
}




function quantity() {
    var qtyInstances = document.getElementsByClassName('quanlity');
    Array.prototype.forEach.call(qtyInstances, function (el) {
        const wrap = el.parentElement;
        var plusBtn = wrap.querySelector('.qtyplus');
        var minusBtn = wrap.querySelector('.qtyminus');


        plusBtn.addEventListener('click', plus.bind(null, el));
        minusBtn.addEventListener('click', minus.bind(null, el));
        //     var textTax = el.parentElement.parentElement.parentElement.getElementsByClassName('sumTax__Container');
        //     var textPrice = el.parentElement.parentElement.parentElement.getElementsByClassName('price__X');
        //     console.log(textPrice);
        //     textTax[0].textContent = taxCucal(el.value) ;

    });
}

quantity();

let sumTax__Container = document.getElementsByClassName('.sumTax__Container');
for (let i = 0; i < sumTax__Container.length; i++) {
    var buttonDelete = sumTax__Container[i];
    buttonDelete.addEventListener('click', function (event) {
        var buttonDeleteClicked = event.target;
        buttonDeleteClicked.parentElement.parentElement.parentElement.parentElement.remove();
    })
}


var removeItem = document.querySelectorAll('#delete')
for (let i = 0; i < removeItem.length; i++) {
    var buttonDelete = removeItem[i];
    buttonDelete.addEventListener('click', function (event) {
        var buttonDeleteClicked = event.target;
        buttonDeleteClicked.parentElement.parentElement.parentElement.parentElement.remove();
    })
}