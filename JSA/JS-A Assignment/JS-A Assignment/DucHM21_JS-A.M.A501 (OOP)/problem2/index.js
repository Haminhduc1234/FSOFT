class Group{
    constructor(x) {
        this.x = x;
    }
    has(n){
        return this.x.includes(n);
    }
    add(n) {
        if(!this.has(n)) this.x.push(n);
    }
    delete(n){
        if(this.has(n)) this.x.splice(this.x.indexOf(n),1);
    }
    static from(arr) {
        return new Group(arr);
    }


}
let group = Group.from([10,20]);
console.log(group.has(10));
console.log(group.has(30));

group.add(30);
console.log(group);
group.delete(10);
console.log(group);
console.log(group.has(10));

