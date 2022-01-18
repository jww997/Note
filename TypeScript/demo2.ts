// interface Item {
//     name: string;

// }

class DataManager<T extends number | string> {
    constructor(private data: (T[])) { }
    getIten(index: number): T {
        return this.data[index]
    }
}

// const data = new DataManager<number>([1])
// data.getIten(0) 


// const data = new DataManager([{
//     name: "123"
// }])

interface Test {
    name: string;
}

const data = new DataManager<string>([])

// 如何使用泛型作为一个具体的类型注解
function hello<T>(params: T) {
    return params
}

const func: <T>(params: T) => T = hello