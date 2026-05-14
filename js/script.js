// Переключение активного состояния кнопок в хедере
const headerMenuBtns = document.querySelectorAll('.header-bottom .menu-btn');
headerMenuBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        headerMenuBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
    });
});

// Переключение активного языка
const langBtns = document.querySelectorAll('.lang-btn');
langBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        langBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
    });
});

// Предотвращение перехода по ссылкам-заглушкам
const allLinks = document.querySelectorAll('a[href="#"]');
allLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    });
});