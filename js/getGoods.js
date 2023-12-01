const getGoods = () => {
    const links = document.querySelectorAll('.navigation-link')

    const getData = () => {
        fetch('/db/db.json')
            .then((responce) => responce.json())
            .then((data) => {
                localStorage.setItem('goods', JSON.stringify(data))
            })
    }

    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault()
            getData()
            console.log(localStorage);
            localStorage.removeItem('goods')
            console.log(localStorage);
        })
    })

    // localStorage.setItem('goods', JSON.stringify([1,2,3,4,5]))

    // const goods = JSON.parse(localStorage.getItem('goods'))

    // console.log(goods);
    // console.log(localStorage);

    // localStorage.removeItem('goods')

    // console.log(localStorage);
}

getGoods()