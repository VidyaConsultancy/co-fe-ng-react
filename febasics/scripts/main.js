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

// fetchPosts((error, posts) => {
//   if(error) // do something with the error
//   // if not proceed with next operation
//   fetchComments(posts, (error, comments) => {
//     fetchCommentsMeta(comments, (error, commentsMeta) => {
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

// const z = [].map().filter().slice(0).join()
// const a = [].map()
// const b = a.filter()
// const c = b.slice(0)
// const d = c.join()

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

// fetchPostsPromisfy()
//   .then(posts => posts, error => {throw error})
//   .then(posts => console.log(posts), error => console.info('error!!', error))
//   .catch(error => console.error(error))

// fetchPostsPromisfy()
//   .then(posts => {
//     fetchCommentsPromisfy(posts)
//       .then(comments => {
//         fetchCommentsMetaPromisfy(comments)
//           .then(commentsMeta => console.log(commentsMeta)).catch()
//         }).catch()
//   }).catch(error => console.error(error));

const fetchCommentsPromisfy = (posts) => {
  return new Promise((resolve, reject) => {
    resolve(['comments', 'comments'])
    reject('comments not received');
  })
}

const fetchCommentsMetaPromisfy = (comments) => {
  return new Promise((resolve, reject) => {
    reject('comments meta not received');
    resolve(['comments meta', 'comments meta'])
  })
}

fetchPostsPromisfy()
  .then(posts => fetchCommentsPromisfy(posts))
  .then(comments => {
    console.log('comments data', comments)
    return fetchCommentsMetaPromisfy(comments)
  })
  .then(commentsMeta => console.log('comments meta', commentsMeta))
  .catch(error => console.error(error));

fetchPostsPromisfy()
  .then(posts => posts)
  .catch(error => console.error(error))
