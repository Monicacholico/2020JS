import { DOMHelper } from '../utility/DOMHelper.js';
import { Tooltip} from './tooltip.js';
// see example to import 
// just when needed

export class ProjectItem {
    // hasActiveTooltip = false;

    constructor(id, updateProjectListsFunction, type){
        this.id = id;
        this.hasActiveTooltip = false;
        this.updateProjectListsHandler = updateProjectListsFunction;
        this.connectMoreInfoButton();
        this.connectSwitchButton(type);
        this.connectDrag();
    }

    showMoreInfoHandler(){
        if(this.hasActiveTooltip){
            return;
        }
        const projectElement = document.getElementById(this.id);
        const tooltipText = projectElement.dataset.extraInfo;
        // import('./tooltip.js').then( module => { // example how to import when you just needed
        //     const tooltip = new module.Tooltip(() => {
        //         this.hasActiveTooltip = false;
        //     }, tooltipText, 
        //     this.id);
        //     tooltip.show();
        //     this.hasActiveTooltip = true;
        // })
        const tooltip = new Tooltip(() => {
            this.hasActiveTooltip = false;
        }, tooltipText, 
        this.id);
        tooltip.show();
        this.hasActiveTooltip = true;
    }

    connectDrag(){
        const item = document.getElementById(this.id);
        item.addEventListener('dragstart', event => {
            event.dataTransfer.setData('text/plain', this.id);
            event.dataTransfer.effectAllowed = 'move';
        });
        item.addEventListener('dragend', event => {
            console.log(event);
        })
    }

    connectMoreInfoButton(){
        const projectItemElement = document.getElementById(this.id);
        const moreInfotBtn = projectItemElement.querySelector('button:first-of-type');
        moreInfotBtn.addEventListener('click', this.showMoreInfoHandler.bind(this));
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