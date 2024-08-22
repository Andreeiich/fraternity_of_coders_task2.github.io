
function getPosts() {
  const xhr = new XMLHttpRequest(); // создаем XMLHttpRequest(), чтобы сделать HTTP-запрос к серверу
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true); // инициализируем запрос

  xhr.onload = function() { // срабатывает после того, как ответ получен
    if (xhr.status === 200) {
      const posts = JSON.parse(xhr.responseText);//метод, который используется для парсинга JSON-строки в JavaScript-объект. xhr.responseText - это свойство объекта XMLHttpRequest, которое содержит текстовый ответ от сервера.
      const table = document.createElement('table'); //создаем таблицу
      table.style.margin="10px";
      table.style.borderSpacing = '8px';
      const thead = document.createElement('thead');//создаем заголовок
      const tbody = document.createElement('tbody');// создаем тело таблицы
      table.appendChild(thead);//добавляем в таблицу заголовок
      table.appendChild(tbody);//добавляем в таблицу тело
      document.body.appendChild(table);// добавляем таблицу на страницу

      const headers = ['UserID','ID', 'Title', 'Body']; // создали массив
      const headerRow = document.createElement('tr'); // создали строку в таблице
      headers.forEach(header => {
        const th = document.createElement('th'); // создали заголовок столбца
        th.textContent = header;
        headerRow.appendChild(th); //добавили заголовок в строку таблицы
        headerRow.style.padding = "10px";
      });
      thead.appendChild(headerRow);

      posts.forEach(post => {
        const row = document.createElement('tr');// создали строку в таблице
        //создаем ячейки и вставляем туда данные из JSON
       
        const userId = document.createElement('td');
        const id = document.createElement('td');
        const title = document.createElement('td');
        const bodyT = document.createElement('td');
      
          userId.textContent = post.userId;
          id.textContent = post.id;
          title.textContent = post.title;
          bodyT.textContent = post.body;
          
        row.appendChild(userId);
        row.appendChild(id);
        row.appendChild(title);
        row.appendChild(bodyT);
                   
       
       tbody.appendChild(row);// добавляем строку на страницу
          
      });
    }
  };
  xhr.send();// отсылаем запрос
}

getPosts();


