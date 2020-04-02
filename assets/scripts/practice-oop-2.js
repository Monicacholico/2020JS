class Tooltip {}

class ProjectItem {
    constructor(id, updateProjectListsFunction){
        this.id = id;
        this.updateProjectListsFunction = updateProjectListsFunction;
        this.connectMoreInfoButton();
        this.connectSwitchButton();
    }

    connectMoreInfoButton(){

    }
    connectSwitchButton() {
        const projectItemElement = document.getElementById(this.id);
        const switchBtn = projectItemElement.querySelector('button:last-of-type');
        console.log(switchBtn);
        switchBtn.addEventListener('click', this.updateProjectListsHandler);
    }

}

// const listOf = new ProjectItem({
//     id: 'one'
// });

// listOf.connectSwitchButton();


class ProjectList {
    projects = [];

    constructor(type){
        this.type = type;
        const prjItems = document.querySelectorAll(`#${type}-projects li`)
        for(const prjItem of prjItems){
            this.projects.push(new ProjectItem(prjItem.id, this.switchProject.bind(this)))
        }
        console.log(this.projects)
    }

    setSwitchHandlerFunction(switchHandlerFunction){
        this.switchHandler = switchHandlerFunction;
    }

    addProject() {
        console.log(this);
    }

    switchProject(projectId) {
        // const projectIndex = this.projects.findIndex(p => p.id === projectId)
        // this.projects.splice(projectIndex, 1);
        this.switchHandler(this.projects.find(p => p.id === projectId));
        this.projects = this.projects(filter(p => p.id !== projectId));
    }
}

class App {
    static init() {
        const activeProjectList = new ProjectList('active');
        const finishedProjectsList = new ProjectList('finished');
        activeProjectList.setSwitchHandlerFunction(
            finishedProjectsList.addProject.bind(finishedProjectsList)
            );
        finishedProjectsList.setSwitchHandlerFunction(
            activeProjectList.addProject.bind(activeProjectList)
            );  
    }
}

App.init();