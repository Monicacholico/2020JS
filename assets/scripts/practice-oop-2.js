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

class Component {
    constructor(hostElementId, insertBefore = false){
        if(hostElementId){
            this.hostElement = document.getElementById(hostElementId);
        } else {
            this.hostElement = document.body;
        }
        this.insertBefore = insertBefore;
    }
    detach() {
        if(this.element) {
            this.element.remove();
            // this.element.parentElement.removeChild(this.element); for old browsers
        }
    }
    show(){
        this.hostElement.insertAdjacentElement(
            this.insertBefore ? 'afterbegin': 'beforeend', 
            this.element)
    }
}

class Tooltip extends Component {
    constructor(closeNotifierFunction){
        super('finished-projects', true);
        this.closeNotifier = closeNotifierFunction;
        this.create();
    }
    closeTooltip = () => {
        this.detach();
        this.closeNotifier();
    }

    create(){
        const tooltipElement = document.createElement('div');
        tooltipElement.className = 'card';
        tooltipElement.textContent = 'DUMMY!'
        tooltipElement.addEventListener('click', this.closeTooltip);
        this.element = tooltipElement;
    }

   

   
}

class ProjectItem {
    hasActiveTooltip = false;

    constructor(id, updateProjectListsFunction, type){
        this.id = id;
        this.updateProjectListsHandler = updateProjectListsFunction;
        this.connectMoreInfoButton();
        this.connectSwitchButton(type);
    }

    showMoreInfoHandler(){
        if(this.hasActiveTooltip){
            return;
        }
        const tooltip = new Tooltip(() => {
            this.hasActiveTooltip = false;
        });
        tooltip.show();
        this.hasActiveTooltip = true;
    }

    connectMoreInfoButton(){
        const projectItemElement = document.getElementById(this.id);
        const moreInfotBtn = projectItemElement.querySelector('button:first-of-type');
        moreInfotBtn.addEventListener('click', this.showMoreInfoHandler);
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