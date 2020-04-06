class DOMHelper {
    static clearEventListeners(element){
        const cloneElement = element.cloneNode(true);
        element.replaceWith(cloneElement);
        return cloneElement;
    }
    static moveElement(elementId, newDestinationSelector) {
        const element = document.getElementById(elementId);
        const destinationElement = document.querySelector(newDestinationSelector);
        destinationElement.append(element);
    }
}
class Tooltip {}

class ProjectItem {
    constructor(id, updateProjectListsFunction, type){
        this.id = id;
        this.updateProjectListsHandler = updateProjectListsFunction;
        this.connectMoreInfoButton();
        this.connectSwitchButton(type);
    }

    connectMoreInfoButton(){

    }
    connectSwitchButton(type) {
        const projectItemElement = document.getElementById(this.id);
        let switchBtn = projectItemElement.querySelector('button:last-of-type');
        switchBtn = DOMHelper.clearEventListeners(switchBtn);
        switchBtn.textContent = type === 'active' ? 'Finish' : 'Activate';
        console.log(switchBtn);
        switchBtn.addEventListener('click', this.updateProjectListsHandler.bind(null, this.id));
    }

    update(updateProjectListsFn, type){
        this.updateProjectListsHandler = updateProjectListsFn;
        this.connectSwitchButton(type);
    }

}

class ProjectList {
    projects = [];

    constructor(type){
        this.type = type;
        const prjItems = document.querySelectorAll(`#${type}-projects li`)
        for(const prjItem of prjItems){
            this.projects.push(new ProjectItem(prjItem.id, this.switchProject.bind(this), this.type))
        }
        console.log(this.projects)
    }

    setSwitchHandlerFunction(switchHandlerFunction){
        this.switchHandler = switchHandlerFunction;
    }

    addProject(project) {
        console.log(project);
        this.projects.push(project)
        DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
        project.update(this.switchProject.bind(this), this.type);
    }

    switchProject(projectId) {
        // const projectIndex = this.projects.findIndex(p => p.id === projectId)
        // this.projects.splice(projectIndex, 1);
        this.switchHandler(this.projects.find(p => p.id === projectId));
        this.projects = this.projects.filter(p => p.id !== projectId);
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