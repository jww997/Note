
// <referen path="./components.ts"></referen>
namespace Home {
    export class Page {
        user: Components.User = { name: "123" }
        constructor() {
            new Components.Header()
            new Components.Content()
            new Components.Footer()
        }
    }
}
