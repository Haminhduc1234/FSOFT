function upper(strings, ...values) {
    return  `${strings[0]}${values[0].toUpperCase()}${strings[1]}${values[1].toUpperCase()}${strings[2]}${values[2].toUpperCase()}${strings[3]}`
}

var name = 'Nguyen Van A', account = 'ANV', classname = 'Fresher FrontEnd';
console.log(upper`Hello ${name} (@${account}), welcome to the ${classname}!!!`);
console.log(
    upper`Hello ${name} (@${account}), welcome to the ${classname}!!!` ===
    'Hello NGUYEN VAN A (@ANV), welcome to the FRESHER FRONTEND!!!'
);