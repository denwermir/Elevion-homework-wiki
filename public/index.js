/*async function fetchHtmlFiles() {
    // Отправляем GET-запрос к эндпоинту
    const response = await fetch('/api/files/count-html?folder=C:/Users/User/Desktop/test/Elevion-homework-wiki-1/Elevion-homework-wiki/public/articles');

    // Проверяем, успешен ли запрос
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    // Парсим JSON-ответ
    const data = await response.json();

    // Выводим данные в консоль
    let a = data.count;
    console.log('Количество HTML-файлов:', data.count);
    console.log('Список HTML-файлов:', data.files);
    let list = document.querySelector(".main_window")
    let div
    // Цикл, который работает n раз (n = количество HTML-файлов)
    for (let i = 1; i <= a; i++) {

      div = document.createElement('div')
      div.id=i

      const filePath = `/api/files/count-html?folder=C:/Users/User/Desktop/test/Elevion-homework-wiki-1/Elevion-homework-wiki/public/articlesarticles/${i}.html`; // Путь к файлу
      const response = await fetch(filePath);
      const html = await response.text();
      const element = document.getElementById(i);
      element.innerHTML = html;


      //list.append(div)
      console.log(i)
    }
}
// Вызываем функцию при загрузке страницы
window.addEventListener('DOMContentLoaded', fetchHtmlFiles);

*/


async function fetchHtmlFiles() {
    // Отправляем GET-запрос к эндпоинту
    const response = await fetch('/api/files/count-html?folder=C:/Users/User/Desktop/test/Elevion-homework-wiki-1/Elevion-homework-wiki/public/articles');

    // Проверяем, успешен ли запрос
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    // Парсим JSON-ответ
    const data = await response.json();

    // Выводим данные в консоль
    let a = data.count;
    console.log('Количество HTML-файлов:', data.count);
    console.log('Список HTML-файлов:', data.files);

    // Находим контейнер для вставки
    const list = document.querySelector(".main_window");

    // Цикл, который работает n раз (n = количество HTML-файлов)
    for (let i = 1; i <= a; i++) {
        // Создаём новый div
        const div = document.createElement('div');
        div.id = i;

        // Добавляем div в контейнер
        list.appendChild(div);

        // Загружаем содержимое файла
        const filePath = `articles/${i}.html`; // Путь к файлу
        const fileResponse = await fetch(filePath);

        // Проверяем, успешен ли запрос
        if (!fileResponse.ok) {
          throw new Error(`Ошибка HTTP: ${fileResponse.status}`);
        }

        // Получаем содержимое файла
        const html = await fileResponse.text();

        // Вставляем содержимое файла в div
        div.innerHTML = html;

        console.log(`Файл ${i}.html успешно загружен.`);
    }
}

// Вызываем функцию при загрузке страницы
window.addEventListener('DOMContentLoaded', fetchHtmlFiles);