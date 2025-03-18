

async function fetchHtmlFiles() {
  const response = await fetch('/api/files/count-html?folder=C:/Users/User/Desktop/test/Elevion/Elevion-homework-wiki/public/articles');

  if (!response.ok) {
    throw new Error(`Ошибка HTTP: ${response.status}`);
  }

  const data = await response.json();

  let a = data.count;
  console.log('Количество HTML-файлов:', data.count);
  console.log('Список HTML-файлов:', data.files);

  const list = document.querySelector(".main_window");

  for (let i = 1; i <= a; i++) {
      const div = document.createElement('div');
      div.id = i;

      list.appendChild(div);

      const filePath = `articles/${i}.html`; // Путь к файлу
      const fileResponse = await fetch(filePath);

      if (!fileResponse.ok) {
        throw new Error(`Ошибка HTTP: ${fileResponse.status}`);
      }

      const html = await fileResponse.text();

      div.innerHTML = html;

      console.log(`Файл ${i}.html успешно загружен.`);

      var line = document.getElementById('line');
      const page_height = document.documentElement.scrollHeight;
      line.style.height = (page_height)+'px';
    }
    var line = document.getElementById('line');
    const page_height = document.documentElement.scrollHeight;
    line.style.height = (page_height)+'px';

    console.log ('b')


}


  window.addEventListener('DOMContentLoaded', fetchHtmlFiles);
