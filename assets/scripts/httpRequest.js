const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');

function sendHttpReques(method, url, data) {
    const promise = new Promise( (resolve, reject) => {
        
        const xhr = new XMLHttpRequest();

        xhr.open(method, url);
    
        xhr.responseType = 'json'
        
        xhr.onload = function() {
            resolve(xhr.response);
            // const listOfPosts = JSON.parse(xhr.response);
 
        };
        xhr.send(JSON.stringify(data));
    });
    return promise;
}


async function fetchPost() {
    const responseData = await sendHttpReques(
        'GET', 
        'https://jsonplaceholder.typicode.com/posts'
        );
            const listOfPosts = responseData;
            console.log(listOfPosts);
            for(const post of listOfPosts) {
                const postEl = document.importNode(postTemplate.content, true);
                postEl.querySelector('h2').textContent = post.title.toUpperCase();
                postEl.querySelector('p').textContent = post.body
                listElement.append(postEl);
            }
 
        }
async function createPost(title, content) {
    const userId = Math.random();
    const post = {
        title: title,
        body: content,
        userId: userId
    };
    sendHttpReques('POST','https://jsonplaceholder.typicode.com/posts', post);

}
fetchPost();
createPost('DUMMY', 'A dummy post!');

