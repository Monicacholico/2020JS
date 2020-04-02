class Tooltip {}

class ProjectItem {
    constructor(id){
        this.id = id;
        this.connectMoreInfoButton();
        this.connectSwitchButton();
    }

    connectMoreInfoButton(){

    }
    connectSwitchButton() {
        const projectItemElement = document.getElementById(this.id);
        const switchBtn = projectItemElement.querySelector('button:last-of-type');
        console.log(switchBtn);
        // switchBtn.addEventListener('click', )
    }

}

// const listOf = new ProjectItem({
//     id: 'one'
// });

// listOf.connectSwitchButton();


class ProjectList {
    projects = [];

    constructor(type){
        const prjItems = document.querySelectorAll(`#${type}-projects li`)
        for(const prjItem of prjItems){
            this.projects.push(new ProjectItem(prjItem.id))
        }
        console.log(this.projects)
    }

    addProject() {}

    switchProject() {
        this.projects.splice()
    }
}

class App {
    static init() {
        const activeProjectList = new ProjectList('active');
        const finishedProjectList = new ProjectList('finished');
    }
}

App.init();