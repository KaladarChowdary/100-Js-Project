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
        console.log(`   It is successful calling success function`);
        resolve();
        console.log(`   End of success function`);
      } else {
        console.log(`   It is failure calling failure function`);
        reject(`Operation is failed`);
        console.log(`   End of failure function`);
      }
    }, 2000);
  });
}

// createPost({ title: "Post 3", body: "This is post3" })
//   .then(getPost)
//   .catch((error) => {
//     console.log(`Error: ${error}`);
//   });

async function init() {
  await createPost({ title: "Post 3", body: "This is post3" });

  getPost();
}

init();
