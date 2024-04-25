const body = document.querySelector("body");

const getPosts = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const table = document.createElement("table");
      const headerRow = document.createElement("tr");
      headerRow.innerHTML =
        "<th>User ID</th><th>ID</th><th>Title</th><th>Body</th>";
      table.append(headerRow);

      data.forEach((post) => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${post.userId}</td><td>${post.id}</td><td>${post.title}</td><td>${post.body}</td>`;
        table.append(row);
      });
      body.appendChild(table);
    })
    .catch((error) => console.error("Error:" + error));
};

getPosts("https://jsonplaceholder.typicode.com/posts");
