function getName(){
    return prompt('Your name: ', '');
}

function greet(){
    const userName = getName();
    console.log('Hello ' + userName);
    // alert('Nice to meet you! ' + userName);
}
// greet();


function replyGreet(){
    greet();
    alert('Nice to meet you!' );
}
replyGreet();