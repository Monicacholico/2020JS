
class Activity {
    constructor(title, text){
        this.title = title;
        this.text = text;
        this.build();
        this.moveToFinish();
    }
    build(){
        const active = document.getElementById('active-projects');
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
        ul.appendChild(li);
    }
    moveToFinish(activity){
        const activityCard = document.getElementById('active-projects');
        const firstBtn = activityCard.querySelector('button');
        const finishBtn = firstBtn.nextElementSibling;
        finishBtn.addEventListener('click', function(){
            console.log(this.activity);
            console.log(this.activity.title);
            console.log(this.activity.text);
        })
    }
}

class ActivityDone extends Activity {
  
    constructor(){
        super('Miritas', 'Do pathways for Miritas');
        this.moveToFinish();
    }
    moveToFinish(){
        console.log(this.title);
    }
   
}

const activity1Done = new ActivityDone();
console.log(activity1Done);


const activity1 = new Activity('Shopping', 'Buy goat cheese');
const activity2 = new Activity('Working Out', 'Do Maria Khorova YouTube\'s class' );
console.log(activity1);

const activityCard = document.getElementById('active-projects');
const firstBtn = activityCard.querySelector('button');
const finishBtn = firstBtn.nextElementSibling;
console.log(finishBtn);
finishBtn.addEventListener('click', function(){
    
})
const finished = document.getElementById('finished-projects');
