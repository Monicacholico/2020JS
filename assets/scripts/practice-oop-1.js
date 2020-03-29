
class Activity {
    constructor(title, text){
        this.title = title;
        this.text = text;
        this.build();
    }
    build(){
        const active = document.getElementById('active-projects');
        let html = '';
        const ul = active.querySelector('ul');
        console.log(ul);
        const li = document.createElement('li');
        li.className = 'card';
        ul.appendChild(li);
        li.innerHTML = `<h2>${this.title}</h2>
                <p>${this.text}</p>
                <button class="alt">More Info</button>
                <button>Finish</button>
        `;
        console.log(ul);
        console.log(li);
        li.append(html);
        ul.appendChild(li);
        // li.appendChild(html);
        // active.appendChild(ul);
        console.log(html)
    }
}

// build();


const activity1 = new Activity('Shopping', 'Buy goat cheese');

// activity1.build();
console.log(activity1);

// const active = document.getElementById('active-projects');

const finished = document.getElementById('finished-projects');
const finishedHtml = ``