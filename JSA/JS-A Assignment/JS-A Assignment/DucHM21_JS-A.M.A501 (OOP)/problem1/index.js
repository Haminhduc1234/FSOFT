class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    plus(otherVec) {
        return new Vec(
            this.x + otherVec.x,
            this.y + otherVec.y
        );
    }
    minus(otherVec) {
        return new Vector(
            this.x - otherVec.x,
            this.y - otherVec.y
        );
    }
    length(){
        return Math.sqrt(this.x*this.x + this.y*this.y);
    }
}
console.log(new Vec(3,4).length());

