const languageBtn = document.getElementById('languageBtn');
const links = document.querySelectorAll('.btn-gray');
const rightsReserved = document.querySelector('footer p');
const mainTitle = document.querySelector('.hero h1');
const mainText = document.querySelector('.hero p');

let currentLanguage = 'en';

function toggleLanguage() {
    if (currentLanguage === 'en') {
        languageBtn.textContent = 'Язык';
        links.forEach(link => {
            switch (link.textContent) {
                case 'Home':
                    link.textContent = 'Главная';
                    break;
                case 'Pricing':
                    link.textContent = 'Ценообразование';
                    break;
                case 'About':
                    link.textContent = 'О нас';
                    break;
                case 'Contact':
                    link.textContent = 'Контакт';
                    break;
            }
        });
        rightsReserved.innerHTML = '&copy; 2024 CICADA. Все права защищены.';
        mainTitle.textContent = 'Добро пожаловать в цикаду';
        mainText.textContent = 'Ты принят!';
        currentLanguage = 'ru';
    } else {
        languageBtn.textContent = 'Language';
        links.forEach(link => {
            switch (link.textContent) {
                case 'Главная':
                    link.textContent = 'Home';
                    break;
                case 'Ценообразование':
                    link.textContent = 'Pricing';
                    break;
                case 'О нас':
                    link.textContent = 'About';
                    break;
                case 'Контакт':
                    link.textContent = 'Contact';
                    break;
            }
        });
        rightsReserved.innerHTML = '&copy; 2024 CICADA. All Rights Reserved.';
        mainTitle.textContent = 'Welcome to CICADA';
        mainText.textContent = 'You\'re accepted!';
        currentLanguage = 'en';
    }
}

languageBtn.addEventListener('click', toggleLanguage);