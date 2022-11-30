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
        reject(`Operation is failed`);
      }
    }, 2000);
  });
}

async function asyncCode() {
  try {
    await createPost({
      title: "Post 3",
      body: "This is post3",
    });

    getPost();
  } catch (e) {
    console.log(`Error: ${e}`);
  }
}

asyncCode();
