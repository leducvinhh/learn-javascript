// ===============================================================================================
//                history dùng để quay lại hoặc tiến tới trang trước ~ sau
// ===============================================================================================
//window.history.back() //quay lại trang trước
//window.history.forward() //tiến tới trang sau


// ===============================================================================================
//                Query params dùng sử lý các tham số sau dấu ? trên url
// ===============================================================================================
// Tạo ra object URL
const url = new URL('https://google.com?_page=1&_limit=10')

// từ url trỏ vào object URLSearchParams
console.log(url.searchParams)

// hàm get để lấy ra key - value của query params
const getValue = url.searchParams.get('_page')
console.log(getValue)

// hàm set để thay đổi lại key - value của query params
url.searchParams.set('_page', 2)
console.log(url.searchParams.toString())

// hàm append dùng thêm key - value vào query params có thể trùng
url.searchParams.append('_page', 4)
console.log(url.searchParams.toString())

// hàm has để kiểm tra có 1 key nào đó trong query params không
console.log(url.searchParams.has('_page'))
console.log(url.searchParams.has('_page2'))

// const params = new URLSearchParams('_page=1&_limit=10')
// console.log(params.get('_page'));

// ===============================================================================================
//             Location dùng lấy ra vị trí hiện tại hoặc điều hướng trang
// ===============================================================================================

// window.location --> chứa các thông tin của vị trí page hiện tại
const btnReload = document.querySelector('#reload')
console.log(window.location)

// window.location.reload() hàm reload() dùng reload trang
btnReload.addEventListener('click', function() {
    window.location.reload()
})

// window.location.href, thuộc tính href dùng lấy ra full url, có thể dùng href để chuyển
// trang nhưng không khuyến khích
const btnHref = document.querySelector('#href')
btnHref.addEventListener('click', function() {
    console.log(window.location.href)
    // window.location.href = 'https://facebook.com'
})

// window.location.assign(), hàm assign dùng để đi tới url mới và có thể back về
const btnAssign = document.querySelector('#assign')
btnAssign.addEventListener('click', function() {
    window.location.assign('https://google.com')
})

// window.location.replace(), hàm replace dùng để đi tới url mới và không thể back về
const btnReplace = document.querySelector('#replace')
btnReplace.addEventListener('click', function() {
    window.location.replace('https://google.com')
})