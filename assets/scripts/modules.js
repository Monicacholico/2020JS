// class DOMHelper {
//     static clearEventListeners(element){
//         const cloneElement = element.cloneNode(true);
//         element.replaceWith(cloneElement);
//         return cloneElement;
//     }
//     static moveElement(elementId, newDestinationSelector) {
//         const element = document.getElementById(elementId);
//         const destinationElement = document.querySelector(newDestinationSelector);
//         destinationElement.append(element);
//         element.scrollIntoView({behavior: 'smooth'});
//     }
// }

// class Component {
//     constructor(hostElementId, insertBefore = false){
//         if(hostElementId){
//             this.hostElement = document.getElementById(hostElementId);
//         } else {
//             this.hostElement = document.body;
//         }
//         this.insertBefore = insertBefore;
//     }
//     detach() {
//         if(this.element) {
//             this.element.remove();
//             // this.element.parentElement.removeChild(this.element); for old browsers
//         }
//     }
//     show(){
//         this.hostElement.insertAdjacentElement(
//             this.insertBefore ? 'afterbegin': 'beforeend', 
//             this.element)
//     }
// }

// class Tooltip extends Component {
//     constructor(closeNotifierFunction, text, hostElementId){
//         super(hostElementId);
//         this.closeNotifier = closeNotifierFunction;
//         this.text = text;
//         this.create();
//     }
//     closeTooltip = () => {
//         this.detach();
//         this.closeNotifier();
//     }

//     create(){
//         const tooltipElement = document.createElement('div');
//         tooltipElement.className = 'card';
//        const tooltipTemplate = document.getElementById('tooltip');
//        const tooltipBody = document.importNode(tooltipTemplate.content, true);
//        tooltipBody.querySelector('p').textContent = this.text;
//        tooltipElement.append(tooltipBody);

//     //    tooltipElement.textContent = this.text;

//         const hostElPosLeft = this.hostElement.offsetLeft;
//         const hostElPosTop = this.hostElement.offsetTop;
//         const hostElHeight = this.hostElement.clientHeight;
//         const parentElementScrolling = this.hostElement.parentElement.scrollTop;

//         const x = hostElPosLeft + 20;
//         const y = hostElPosTop + parentElementScrolling - 10;

//         tooltipElement.style.position = 'absolute';
//         tooltipElement.style.left = x + 'px';
//         tooltipElement.style.top = y + 'px';


//         tooltipElement.addEventListener('click', this.closeTooltip);
//         this.element = tooltipElement;
//     }
// }

// class ProjectItem {
//     hasActiveTooltip = false;

//     constructor(id, updateProjectListsFunction, type){
//         this.id = id;
//         this.updateProjectListsHandler = updateProjectListsFunction;
//         this.connectMoreInfoButton();
//         this.connectSwitchButton(type);
//         this.connectDrag();
//     }

//     showMoreInfoHandler(){
//         if(this.hasActiveTooltip){
//             return;
//         }
//         const projectElement = document.getElementById(this.id);
//         const tooltipText = projectElement.dataset.extraInfo;
//         const tooltip = new Tooltip(() => {
//             this.hasActiveTooltip = false;
//         }, tooltipText, 
//         this.id);
//         tooltip.show();
//         this.hasActiveTooltip = true;
//     }

//     connectDrag(){
//         const item = document.getElementById(this.id);
//         item.addEventListener('dragstart', event => {
//             event.dataTransfer.setData('text/plain', this.id);
//             event.dataTransfer.effectAllowed = 'move';
//         });
//         item.addEventListener('dragend', event => {
//             console.log(event);
//         })
//     }

//     connectMoreInfoButton(){
//         const projectItemElement = document.getElementById(this.id);
//         const moreInfotBtn = projectItemElement.querySelector('button:first-of-type');
//         moreInfotBtn.addEventListener('click', this.showMoreInfoHandler.bind(this));
//     }

//     connectSwitchButton(type) {
//         const projectItemElement = document.getElementById(this.id);
//         let switchBtn = projectItemElement.querySelector('button:last-of-type');
//         switchBtn = DOMHelper.clearEventListeners(switchBtn);
//         switchBtn.textContent = type === 'active' ? 'Finish' : 'Activate';
//         console.log(switchBtn);
//         switchBtn.addEventListener('click', this.updateProjectListsHandler.bind(null, this.id));
//     }

//     update(updateProjectListsFn, type){
//         this.updateProjectListsHandler = updateProjectListsFn;
//         this.connectSwitchButton(type);
//     }

// }

// class ProjectList {
//     projects = [];

//     constructor(type){
//         this.type = type;
//         const prjItems = document.querySelectorAll(`#${type}-projects li`)
//         for(const prjItem of prjItems){
//             this.projects.push(new ProjectItem(prjItem.id, this.switchProject.bind(this), this.type))
//         }
//         console.log(this.projects)
//         this.connectDroppable();
//     }

//     connectDroppable(){
//         const list = document.querySelector(`#${this.type}-projects ul`);
//         list.addEventListener('dragenter', event => {
//             if(event.dataTransfer.types[0] === 'text/plain'){
//                 list.parentElement.classList.add('droppable');
//                 event.preventDefault();
//             }
//         })
//         list.addEventListener('dragover', event => {
//             if(event.dataTransfer.types[0] === 'text/plain'){
//             event.preventDefault();
//             }
//         });
//         list.addEventListener('dragleave', event => {
//             if(event.relatedTarget.closest(`#${this.type}-projects ul`) !== list)
//             list.parentElement.classList.remove('droppable');
//         });
//         list.addEventListener('drop', event => {
//             const prjTd = event.dataTransfer.getData('text/plain');
//             if(this.projects.find(p => p.id === prjTd)){
//                 return;
//             }
//             document
//             .getElementById(prjTd)
//             .querySelector('button:last-of-type')
//             .click();
//             list.parentElement.classList.remove('droppable');
//             // event.preventDefault();
//         })
//     }

//     setSwitchHandlerFunction(switchHandlerFunction){
//         this.switchHandler = switchHandlerFunction;
//     }

//     addProject(project) {
//         console.log(project);
//         this.projects.push(project)
//         DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
//         project.update(this.switchProject.bind(this), this.type);
//     }

//     switchProject(projectId) {
//         // const projectIndex = this.projects.findIndex(p => p.id === projectId)
//         // this.projects.splice(projectIndex, 1);
//         this.switchHandler(this.projects.find(p => p.id === projectId));
//         this.projects = this.projects.filter(p => p.id !== projectId);
//     }
// }
import { ProjectList } from './app/projectList.js'

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
        // this.startAnalytics();

        // const someScript = document.createElement('script');
        // someScript.textContent = 'alert("Hi there")';
        // document.head.append(someScript);

        const timerId = setTimeout(this.startAnalytics, 3000);
        document.getElementById('stop-analytics-btn').addEventListener('click', () => {
            clearTimeout(timerId);

        });

    }


        static startAnalytics() {
            const analyticsScript = document.createElement('script');
            analyticsScript.src = 'scripts/utility/analytics.js';
            analyticsScript.defer = true;
            document.head.append(analyticsScript);
    }
}

App.init();