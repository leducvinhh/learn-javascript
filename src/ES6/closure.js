function createCounter(number) {
    let current = number || 0

    function increase() {
        console.log(current ++)
    }
    function decrease() {
        console.log(current --)
    }
    function getValue() {
        console.log(current )
    }

    return {increase, decrease, getValue};
}
const counter1 = createCounter(0)
counter1.increase()
counter1.decrease()
counter1.getValue()