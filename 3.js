function myCalculator(num) {
    this.num = num
}

myCalculator.prototype.add = function (count) {
    this.num = this.num + count
    return this
}

myCalculator.prototype.minus = function (count) {
    this.num = this.num - count
    return this
}

myCalculator.prototype.multi = function (count) {
    this.num = this.num * count
    return this
}

myCalculator.prototype.div = function (count) {
    this.num = this.num / count
    return this
}

myCalculator.prototype.getValue = function () {
    return this.num
}



console.log(new myCalculator(121).add(1).minus(2).multi(3).div(4).getValue()); // 输出90