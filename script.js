// Массив фонов, включая основной логотип
const backgrounds = [
    'Trash1.jpeg',
    'Trash2.jpeg',
    'Trash3.jpeg',
    'Trash4.jpeg',
    'Trash8.jpeg',
    'Trash6.jpeg',
    'Trash7.jpeg',
    'Garbage.jpeg' // Основной логотип
];

let currentIndex = 0;
let currentBackground = 1;

// Элементы для смены фонов
const background1 = document.getElementById('background-1');
const background2 = document.getElementById('background-2');

// Изначально устанавливаем первый фон
background1.style.backgroundImage = `url(${backgrounds[currentIndex]})`;
background1.style.opacity = 1;

// Функция для смены фона
function changeBackground() {
    const nextIndex = (currentIndex + 1) % backgrounds.length;
    const nextBackground = (currentBackground === 1) ? background2 : background1;
    const currentVisibleBackground = (currentBackground === 1) ? background1 : background2;

    // Задаем следующий фон
    nextBackground.style.backgroundImage = `url(${backgrounds[nextIndex]})`;

    // Плавное перекрытие
    nextBackground.style.opacity = 1;
    currentVisibleBackground.style.opacity = 0;

    currentIndex = nextIndex;
    currentBackground = (currentBackground === 1) ? 2 : 1;

    // Задержка 45 секунд для последнего логотипа
    const delay = (currentIndex === backgrounds.length - 1) ? 45000 : 5000;
    setTimeout(changeBackground, delay);
}

// Запуск анимации смены фонов
setTimeout(changeBackground, 5000);

