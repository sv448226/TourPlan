ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [7.8385, 98.30], // Пхукет
        zoom: 15
    }, {
        searchControlProvider: 'yandex#search'
    });
}