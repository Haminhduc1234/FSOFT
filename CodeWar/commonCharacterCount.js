function turnOn(machine) {
    machine.isOn = true;
}
let computer = {
    isOn: false
};
turnOn(computer);
console.log(computer); // true;
