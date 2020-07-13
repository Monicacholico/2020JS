export class Modal {
    constructor(contentId, fallbackText){
        this.fallbackText = fallbackText;
        this.contentTemplateEl = document.getElementById(contentId);
        console.log(this.contentTemplateEl);
        this.modalTemplateEl = document.getElementById('modal-template');
    }
    greetin(){
        console.log('this is working');
    }

    show(){
        if('content' in document.createElement('template')) {
            const modalElements = document.importNode(
                this.modalTemplateEl.content, 
                true);
            this.modalElement = modalElements.querySelector('.modal');
            this.backdropElement = modalElements.querySelector('.backdrop');
            const contentElement = document.importNode(
                this.contentTemplateEl.content,
                true
            );

            this.modalElement.appendChild(contentElement);

            document.body.insertAdjacentElement('afterbegin', this.modalElement);
            document.body.insertAdjacentElement('afterbegin', this.backdropElement);
        } else {
            //fallback code
            alert();
        }
    }

    hide(){
        if(this.modalElement) {
            document.body.removeChild(this.modalElement); //thismodalElement.remove()
            document.body.removeChild(this.backdropElement);
            this.modalElement = null;
            this.backdropElement = null;
        }
    }
}