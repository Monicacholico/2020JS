const button = document.querySelector('button');
const output = document.querySelector('p');

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done');
    }, duration);
  });
  return promise;
};

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
      postData => {
        setTimer(2000).then( data => {
          console.log(data, postData);
        });
  }, error => {
      console.log(error);
  });
  setTimer(1000).then(() =>{
    console.log(data, postData);
  })
  console.log('Getting position...');
}

button.addEventListener('click', trackUserHandler);

// let result = 0;
// for (let i = 0; i < 100000; i++) {
//     result = result += i;
// }
// console.log(result);