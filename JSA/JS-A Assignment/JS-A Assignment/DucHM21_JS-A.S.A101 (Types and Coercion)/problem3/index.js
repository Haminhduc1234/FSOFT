function reverse(str) {
    str += '';
    str = str.split('_');
    for(let i = 0; i < str.length ; i++) {
        str[i] = str[i].slice(0,1).toUpperCase() + str[i].slice(1).toLowerCase();
    }
    return str.join('');
}
console.log(reverse('user_name'));

