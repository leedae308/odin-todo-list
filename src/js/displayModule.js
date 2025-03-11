// displayModule.js

import DOMselector from "./universalDOMSelector";
import HTML from "./innerHTMLTemplates";


class DisplayModule {
    constructor() {
        this.init();
    }
    init() {
        this.Template = DOMselector;
        this.baseHtml = new HTML(this.Template.taskPane);
        this.Template.taskPane.innerHTML = "";
        this.attachEventListener();
    }
    attachEventListener() {
        this.underDevelopment("searchToolBtn", "inboxToolBtn", "upcomingToolBtn", "filterToolBtn");
        // alert(this.baseHtml.renderToday);
        this.Template.todayToolBtn.addEventListener("click", this.baseHtml.renderToday.bind(this.baseHtml));
        this.Template.addTaskToolBtn.addEventListener("click", this.baseHtml.renderProject.bind(this.baseHtml));
        // this.Template.todayToolBtn.addEventListener("click", ()=>alert());
    }


    //functions
    underDevelopment(...args) {
        args.forEach((element) => {
            if (this.Template[element]) {
                this.Template[element].addEventListener("click", this.alertUnderDevelopment);
            }
        })
    }
    alertUnderDevelopment = (e) => alert(`${(e.currentTarget.id).toUpperCase()} tool is under development`);






}

export default new DisplayModule();



// class ClearContent{

// }