let input = document.querySelector('#tag')
let description = document.querySelector('#description')

let map = new Map()
map.set('a', 'Создаёт гипертекстовые ссылки.')
map.set('body', 'Представляет тело документа (содержимое, не относящееся к метаданным документа).')
map.set('br', 'Перенос текста на новую строку.')
map.set('button', 'Создает интерактивную кнопку. Элемент может содержать текст или изображение.')
map.set('div', 'Элемент-контейнер для разделов HTML-документа. Используется для группировки блочных элементов с целью форматирования стилями.')
map.set('footer', 'Определяет завершающую область (нижний колонтитул) документа или раздела.')
map.set('form', 'Форма для сбора и отправки на сервер информации от пользователей. Не работает без атрибута action.')
map.set('header', 'Секция для вводной информации сайта или группы навигационных ссылок. Может содержать один или несколько заголовков, логотип, информацию об авторе.')
map.set('img', 'Встраивает изображения в HTML-документ с помощью атрибута src, значением которого является адрес встраиваемого изображения.')
map.set('input', 'Создает многофункциональные поля формы, в которые пользователь может вводить данные.')
map.set('link', 'Определяет отношения между документом и внешним ресурсом. Также используется для подключения внешних таблиц стилей.')
map.set('li', 'Элемент маркированного или нумерованного списка.')
map.set('ol', 'Упорядоченный нумерованный список. Нумерация может быть числовая или алфавитная.')
map.set('p', 'Параграфы в тексте.')
map.set('span', 'Контейнер для строчных элементов. Можно использовать для форматирования отрывков текста, например, выделения цветом отдельных слов.')
map.set('table', 'Элемент для создания таблицы.')
map.set('td', 'Создает ячейку таблицы.')
map.set('ul', 'Создает маркированный список.')
map.set('tr', 'Создает строку таблицы.')

input.addEventListener('blur', () => {
    if (map.has(input.value)) {
        description.textContent = map.get(input.value)
    } else {
        description.textContent = 'unknown'
    }
})