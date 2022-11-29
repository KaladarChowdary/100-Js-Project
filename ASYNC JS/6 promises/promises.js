const posts = [
  { title: "Post 1", body: "This is post 1" },
  { title: "Post 2", body: "This is post 2" },
];

function getPost() {
  setTimeout(() => {
    let output = "";

    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });

    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = true;

      if (!error) {
        resolve();
      } else {
        reject("Element couldn't be pushed");
      }
    }, 2000);
  });
}

createPost({ title: "Post 3", body: "This is post3" })
  .then(getPost)
  .catch((error) => {
    console.log(`Error: ${error}`);
  });
