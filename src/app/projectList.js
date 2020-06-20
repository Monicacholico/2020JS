import { ProjectItem as PrjItem } from './projectItem.js';// you can use an alias see
import { ProjectItem } from './projectItem.js';
// import { moveElement } from '../utility/DOMHelper.js'
// import { DOMHelper, moveElement } from '../utility/DOMHelper.js'
import * as DOM from '../utility/DOMHelper.js'

export class ProjectList {
    // projects = [];

    constructor(type){
        this.type = type;
        this.projects = [];
        const prjItems = document.querySelectorAll(`#${type}-projects li`)
        for(const prjItem of prjItems){
            // this.projects.push(new ProjectItem(prjItem.id, this.switchProject.bind(this), this.type)) 
            this.projects.push(new PrjItem(prjItem.id, this.switchProject.bind(this), this.type)) // using the alias
        }
        console.log(this.projects)
        this.connectDroppable();
    }

    connectDroppable(){
        const list = document.querySelector(`#${this.type}-projects ul`);
        list.addEventListener('dragenter', event => {
            if(event.dataTransfer.types[0] === 'text/plain'){
                list.parentElement.classList.add('droppable');
                event.preventDefault();
            }
        })
        list.addEventListener('dragover', event => {
            if(event.dataTransfer.types[0] === 'text/plain'){
            event.preventDefault();
            }
        });
        list.addEventListener('dragleave', event => {
            if(event.relatedTarget.closest(`#${this.type}-projects ul`) !== list)
            list.parentElement.classList.remove('droppable');
        });
        list.addEventListener('drop', event => {
            const prjTd = event.dataTransfer.getData('text/plain');
            if(this.projects.find(p => p.id === prjTd)){
                return;
            }
            document
            .getElementById(prjTd)
            .querySelector('button:last-of-type')
            .click();
            list.parentElement.classList.remove('droppable');
            // event.preventDefault();
        })
    }

    setSwitchHandlerFunction(switchHandlerFunction){
        this.switchHandler = switchHandlerFunction;
    }

    addProject(project) {
        console.log(project);
        this.projects.push(project)
        DOM.moveElement(project.id, `#${this.type}-projects ul`);
        project.update(this.switchProject.bind(this), this.type);
    }

    switchProject(projectId) {
        // const projectIndex = this.projects.findIndex(p => p.id === projectId)
        // this.projects.splice(projectIndex, 1);
        this.switchHandler(this.projects.find(p => p.id === projectId));
        this.projects = this.projects.filter(p => p.id !== projectId);
    }
}