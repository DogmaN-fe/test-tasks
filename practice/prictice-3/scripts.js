const id = document.getElementById("id");
const title = document.getElementById("title");
const body = document.getElementById("body");
const userId = document.getElementById("userId");
const search = document.getElementById("searchInput");
const tableBody = document.getElementById("tableBody");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    // Функция отрисовки таблицы
    const renderTable = (posts) => {
      tableBody.innerHTML = "";
      posts.forEach((post) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${post.userId}</td>
            <td>${post.id}</td>
            <td>${post.title}</td>
            <td>${post.body}</td>`;
        tableBody.appendChild(row);
      });
    };

    // Функция фильтрации таблицы по колонке
    const sortTable = (column) => {
      if (column === sortColumn) {
        sortOrder *= -1;
      } else {
        sortColumn = column;
        sortOrder = 1;
      }
      posts.sort((a, b) => {
        const valA = a[Object.keys(a)[column]];
        const valB = b[Object.keys(b)[column]];

        if (valA < valB) return -1 * sortOrder;
        if (valA > valB) return 1 * sortOrder;
        return 0;
      });

      renderTable(posts);
    };

    const posts = data;

    // удаляем в теле каждого поста присутствует символ переноса строки для корректной работы поисковика
    posts.map((post) => {
      post.body = post.body.replaceAll(/\n/g, " ");
    });

    renderTable(posts);

    let sortOrder = 1;
    let sortColumn = 0;

    userId.addEventListener("click", () => {
      sortTable(0);
    });

    id.addEventListener("click", () => {
      sortTable(1);
    });

    title.addEventListener("click", () => {
      sortTable(2);
    });

    body.addEventListener("click", () => {
      sortTable(3);
    });

    search.addEventListener("input", () => {
      const searchTerm = search.value;
      if (String(searchTerm).length >= 3 && searchTerm !== "") {
        const filteredPosts = posts.filter(
          (post) =>
            post.title.includes(searchTerm) || post.body.includes(searchTerm)
        );
        renderTable(filteredPosts);
      } else if (searchTerm === "") {
        renderTable(posts);
      }
    });
  });
