const obj = { data : 2};
var add = function (a, b) {
    console.log(this.data + a + b);
}
add.apply(obj, [10, 10]);