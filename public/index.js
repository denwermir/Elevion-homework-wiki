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
      // Создаём новое окно
      const windowDiv = document.createElement('div');
      windowDiv.className = 'window';

      // Создаём заголовок окна
      const header = document.createElement('div');
      header.className = 'window-header';
      header.textContent = `Окно ${i}`;

      // Создаём кнопку закрытия
      const closeButton = document.createElement('button');
      closeButton.className = 'close-button';
      closeButton.textContent = '×';
      closeButton.onclick = () => windowDiv.remove();

      // Добавляем кнопку закрытия в заголовок
      header.appendChild(closeButton);

      // Создаём содержимое окна
      const content = document.createElement('div');
      content.className = 'window-content';

      // Загружаем содержимое файла
      const filePath = `articles/${i}.html`; // Путь к файлу
      const fileResponse = await fetch(filePath);

      // Проверяем, успешен ли запрос
      if (!fileResponse.ok) {
        throw new Error(`Ошибка HTTP: ${fileResponse.status}`);
      }

      // Получаем содержимое файла
      const html = await fileResponse.text();

      // Вставляем содержимое файла в содержимое окна
      content.innerHTML = html;

      // Добавляем заголовок и содержимое в окно
      windowDiv.appendChild(header);
      windowDiv.appendChild(content);

      // Добавляем окно в контейнер
      list.appendChild(windowDiv);

      console.log(`Окно для файла ${i}.html успешно создано.`);
  }
}

// Вызываем функцию при загрузке страницы
window.addEventListener('DOMContentLoaded', fetchHtmlFiles);