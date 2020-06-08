const listElement = document.querySelector('.posts');
const postTemplate = document.getElementById('single-post');
const form = document.querySelector('#new-post form');
const fetchButton = document.querySelector('#available-posts button');
const postList = document.querySelector('ul');

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
                postEl.querySelector('p').textContent = post.body;
                postEl.querySelector('li').id = post.id;
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
// fetchPost();
fetchButton.addEventListener('click', fetchPost);
form.addEventListener('submit', event => {
    event.preventDefault();
    const enteredTitle = event.currentTarget.querySelector('#title').value;
    const enteredContent = event.currentTarget.querySelector('#content').value;
    createPost(enteredTitle, enteredContent);
})

postList.addEventListener('click', event => {
    if (event.target.tagName === 'BUTTON') {
        const postId = event.target.closest('li').id;
        sendHttpReques('DELETE',`https://jsonplaceholder.typicode.com/posts/${postId}`);
    }
})

