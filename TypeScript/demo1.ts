// 泛型 generic 泛指的类型

function join1<T, P>(first: T, second: P) {
    return `${first}${second}`
}

function join2<T>(first: T, second: T): T {
    return first
}

join1<string, string>("1", "1")
join1<number, number>(1, 1)
join1<number, string>(1, "1")
join1(1, "1")

// function map<ABC>(params: ABC[]) {
function map<ABC>(params: Array<ABC>) {
    return params
}

map<string>(["123"])

const a: string = "123"

function join(first: string | number, second: string | number) {
    return `${first}${second}`
}

join("1", 1)

join(1, 1)