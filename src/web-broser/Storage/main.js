const info = {
    name:'Vin',
    age: 26,
    weight: 54
}
localStorage.setItem('student', JSON.stringify(info))

const test = localStorage.getItem('student')
console.log(JSON.parse(test))

localStorage.removeItem('student')

localStorage.clear()

// sectionStorage cũng có 4 hàm như local, chỉ khác nhau ở chỗ local sẽ tồn tại cho dù có đóng tab hoặc trình duyệt còn section thì khi đóng tab hoặc trình duyệt thì bị mất đi.