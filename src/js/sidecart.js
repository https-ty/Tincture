// const openBtn = document.getElementById('open-cart-btn')
// const cart = document.getElementById('sidecart')
// const closeBtn = document.getElementById('close-button')
// const backdrop = document.querySelector('.backdrop')

// openBtn.addEventListener('click', openCart)
// closeBtn.addEventListener('click', closeCart)
// backdrop.addEventListener('click', closeCart)

// //Open Cart
// function openCart(){
//     cart.classList.add('open')
//     backdrop.style.display = 'block'
    
//     setTimeout(() =>{
//         backdrop.classList.add('show')
//     }, 0)
    
// }

// //Close Cart
// function closeCart(){
//     cart.classList.remove('open')
//     backdrop.classList.remove('show')

//     setTimeout(() =>{
//         backdrop.style.display = 'none'
//     }, 500)
// }

const openBtn = document.getElementById('open-cart-btn');
const cart = document.getElementById('sidecart');
const closeBtn = document.getElementById('close-button');
const backdrop = document.querySelector('.backdrop');

openBtn.addEventListener('click', openCart);
closeBtn.addEventListener('click', closeCart);
backdrop.addEventListener('click', closeCart);

// Open Cart
function openCart() {
    cart.classList.add('open');
    backdrop.style.display = 'block';
    
    setTimeout(() => {
        backdrop.classList.add('show');
    }, 0);

    // Hide scrollbars
    document.body.classList.add('no-scroll');
}

// Close Cart
function closeCart() {
    cart.classList.remove('open');
    backdrop.classList.remove('show');

    setTimeout(() => {
        backdrop.style.display = 'none';
    }, 500);

    // Show scrollbars
    document.body.classList.remove('no-scroll');
}
