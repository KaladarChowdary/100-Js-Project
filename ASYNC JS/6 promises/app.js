const posts = [
  { title: "Post 1", body: "This is postm1" },
  { title: "Post 2", body: "This is post 2" },
];

function getPost() {
  setTimeout(() => {
    let output = "";

    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });

    document.body.innerHTML = output;
  }, 2000);
}

getPost();
