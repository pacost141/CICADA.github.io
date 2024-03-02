const languageBtn = document.getElementById('languageBtn');
const links = document.querySelectorAll('nav ul li a');
const rightsReserved = document.querySelector('footer p');
const mainTitle = document.querySelector('.about p:first-of-type');
const aboutTeamTitle = document.querySelector('.about h2');
const aboutTeamText = document.querySelector('.about p:nth-of-type(2)');
const serverFeaturesTitle = document.querySelector('.about h2:nth-of-type(2)');
const serverFeaturesList = document.querySelectorAll('.about ul li');
const joinUsText = document.querySelector('.about p:last-of-type');

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
        mainTitle.textContent = 'Добро пожаловать на сервер Minecraft CICADA!';
        aboutTeamTitle.textContent = '🔹О команде:';
        aboutTeamText.textContent = 'Наша команда администраторов стремится создать благоприятную атмосферу для игры в Vanilla Minecraft. Мы заботимся о наших игроках и гарантируем поддержку и помощь по вопросам игры.';
        serverFeaturesTitle.textContent = '🔹Особенности сервера:';
        serverFeaturesList[0].textContent = 'Чистый Minecraft без модов и плагинов';
        serverFeaturesList[1].textContent = 'Стандартный геймплей и мир Minecraft';
        serverFeaturesList[2].textContent = 'Спонтанные приключения и командные события';
        joinUsText.textContent = 'Присоединяйтесь к нам, чтобы насладиться оригинальным игровым опытом Minecraft и создать уютное сообщество любителей Vanilla сервера на CICADA!';
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
        mainTitle.textContent = 'Welcome to the Minecraft CICADA server!';
        aboutTeamTitle.textContent = '🔹About the Team:';
        aboutTeamText.textContent = 'Our team of administrators strives to provide a favorable atmosphere for playing Vanilla Minecraft. We care about our players and guarantee support and assistance with gaming queries.';
        serverFeaturesTitle.textContent = '🔹Server Features:';
        serverFeaturesList[0].textContent = 'Pure Minecraft without mods and plugins';
        serverFeaturesList[1].textContent = 'Standard gameplay and Minecraft world';
        serverFeaturesList[2].textContent = 'Spontaneous adventures and team events';
        joinUsText.textContent = 'Join us to enjoy the original Minecraft gaming experience and create a cozy community of Vanilla server enthusiasts on CICADA!';
        currentLanguage = 'en';
    }
}

languageBtn.addEventListener('click', toggleLanguage);