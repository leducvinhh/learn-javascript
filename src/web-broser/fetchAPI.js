async function start() {
    const url = 'https://js-post-api.herokuapp.com/api/students'

    async function getData(url) {
        return (await fetch(url)).json()
    }

    const btnElement = document.querySelector('button')
    if (btnElement) {
        btnElement.onclick = async function () {
            console.log(await getData(url))
        }
    }

}

document.addEventListener('DOMContentLoaded', start())