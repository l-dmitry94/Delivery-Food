const cartButton = document.querySelector('#cart-button');
const modal = document.querySelector('#modal');
const close = document.querySelector('.close');

cartButton.addEventListener('click', function(e){
    modal.classList.add('open');
})
close.addEventListener('click', function(e){
    modal.classList.remove('open');
})

new WOW().init();