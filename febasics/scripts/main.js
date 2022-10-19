// async programming
const fetchPosts = (cb) => {
  let posts;
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
  xhr.onreadystatechange = (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
      const response = e.target.response;
      posts = JSON.parse(response);
      cb(posts);
    }
  }
  xhr.send();
  return posts;
}

const handleFetchPostResult = (res) => {
  console.log('received posts', res[0])
}

const postsResponse = fetchPosts(handleFetchPostResult);
console.log(postsResponse);

// fetchPosts((posts) => {
//   fetchComments(posts, (comments) => {
//     fetchCommentsMeta(comments, (commentsMeta) => {
//     })
//   })
// })

// es6 => Promise API
// pending state
// fullfilled
// rejected
const promise = new Promise((resolve, reject) => {
  reject('rejected');
  resolve('resolved');
});
promise
  .then((res) => console.log('re', res))
  .catch((error) => console.error('e', error))


const fetchPostsPromisfy = () => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    xhr.onreadystatechange = (e) => {
      if (e.target.readyState === 4) {
        if (e.target.status === 200) {
          const response = e.target.response;
          const posts = JSON.parse(response);
          resolve(posts)
        } else {
          reject(e.target.response);
        }
      }
    }
    xhr.send();
  })
}

fetchPostsPromisfy().then(posts => console.log(posts)).catch(error => console.error(error))
