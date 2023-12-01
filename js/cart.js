const cart = function() {
    const cartBtn = document.querySelector('.button-cart')
    const modalCart = document.getElementById('modal-cart')
    const modalClose = modalCart.querySelector('.modal-close')

    cartBtn.addEventListener('click', () => {
        modalCart.style.display = 'flex'
    })

    modalClose.addEventListener('click', () => {
        modalCart.style.display = ''
    })
}

cart()