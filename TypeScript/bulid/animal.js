function trainAnial(animal) {
    if (animal.fly) {
        animal.sing();
    }
    else {
        animal.bark();
    }
}
function trainAnialSecond(animal) {
    if ('sing' in animal) {
        animal.sing();
    }
    else {
        animal.bark();
    }
}
function add(first, second) {
    if (typeof first === "string" || typeof second === "string") {
        return "" + first + second;
    }
    return first + second;
}
var NumberObj = (function () {
    function NumberObj() {
    }
    return NumberObj;
}());
function addSecond(first, second) {
    if (first instanceof NumberObj && second instanceof NumberObj) {
        return first.count + second.count;
    }
    return 0;
}
