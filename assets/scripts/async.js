const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(postData => {
      console.log(postData)
  }, error => {
      console.log(error);
  });
  console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler);

// let result = 0;
// for (let i = 0; i < 100000; i++) {
//     result = result += i;
// }
// console.log(result);