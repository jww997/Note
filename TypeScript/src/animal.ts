interface Bird {
    fly: Boolean;
    sing: () => {}
}

interface Dog {
    fly: Boolean;
    bark: () => {}
}

// 类型断言的方式
function trainAnial(animal: Bird | Dog) {
    if (animal.fly) {
        (animal as Bird).sing();
    } else {
        (animal as Dog).bark()
    }
}

// 使用 in 语法来做类型保护
function trainAnialSecond(animal: Bird | Dog) {
    if ('sing' in animal) {
        animal.sing()
    } else {
        animal.bark();
    }
}

// 使用 typeof 语法来做类型保护
function add(first: string | number, second: string | number) {
    if (typeof first === "string" || typeof second === "string") {
        return `${first}${second}`
    }
    return first + second

}

class NumberObj {
    count: number
}

// 使用 instanceof 语法来做类型保护
function addSecond(first: object | NumberObj, second: object | NumberObj) {
    if (first instanceof NumberObj && second instanceof NumberObj) {

        return first.count + second.count
    }
    return 0
}