const cartButton = document.querySelector('#cart-button');
const modal = document.querySelector('#modal');
const close = document.querySelector('.close');

cartButton.addEventListener('click', toggleModal);
close.addEventListener('click', toggleModal);

function toggleModal() {
    modal.classList.toggle('open');
}

new WOW().init();



const modalAuth = document.getElementById('modal-auth');
const auth = document.getElementById('button-auth');
const closeAuth = document.querySelector('.close-auth');
const formLogin = document.getElementById('form-login');
const loginInput = document.getElementById('login');
const userName = document.querySelector('.user-name');
const buttonOut = document.querySelector('.button-out');

let login = localStorage.getItem('deliveryFood');

function toggleModalAuth() {
    modalAuth.classList.toggle('open');
}


function logOut() {
    login = '';
    localStorage.removeItem('deliveryFood');
    userName.style.display = '';
    buttonOut.style.display = '';
    auth.style.display = '';
    buttonOut.removeEventListener('click', logOut);
    checkAuth();
}

function authorized() {
    console.log('Авторизован');
    userName.textContent = login;
    userName.style.display = 'inline';
    buttonOut.style.display = 'block';
    auth.style.display = 'none';
    buttonOut.addEventListener('click', logOut);
}

function notAuthorized() {
    console.log('Не авторизован');

    function logIn(e) {
        e.preventDefault();
        console.log('Логин');
        login = loginInput.value;
        localStorage.setItem('deliveryFood', login);
        toggleModalAuth();
        auth.removeEventListener('click', toggleModalAuth);
        closeAuth.removeEventListener('click', toggleModalAuth);
        formLogin.removeEventListener('submit', logIn);
        formLogin.reset();
        checkAuth();
    }
    auth.addEventListener('click', toggleModalAuth);
    closeAuth.addEventListener('click', toggleModalAuth);
    formLogin.addEventListener('submit', logIn);
}


function checkAuth() {
    if (login) {
        authorized();
    } else {
        notAuthorized();
    }
}
checkAuth();




//Работа с карточками

const restCards = document.querySelector('.restaurants__cards');
const banner = document.querySelector('.banner');
const restaurants = document.querySelector('.restaurants');

function createRestCard() {
    const card = `
    <a class="card wow animate__animated animate__fadeInUp"
    data-wow-delay="0.2s">
        <img src="img/restaurant-1.jpg" alt="" class="img">
        <div class="info">
            <div class="title">
                <h3>Пицца плюс</h3>
                <span>50 мин</span>
            </div>
            <div class="other">
                <div class="rating">
                    <img src="img/star.svg" alt="" class="star">
                    <span>4.5</span>
                </div>
                <div class="price">От 900 ₽</div>
                <div class="category">Пицца</div>
            </div>
        </div>
    </a>`;

    restCards.insertAdjacentHTML('beforeend', card);
}
createRestCard();
createRestCard();
createRestCard();


function openGoods(event){
    const target = event.target;
    const restaurant = target.closest('.restaurants__cards');
    if(restaurant){

    }
}

restCards.addEventListener('click', openGoods);
