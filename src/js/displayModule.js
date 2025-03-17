// displayModule.js

import DOMselector from "./universalDOMSelector";
import HTML from "./innerHTMLTemplates";


class DisplayModule {
    constructor() {
        this.init();
    }
    init() {
        this.Template = DOMselector; // universal DOM Selector
        this.baseHtml = HTML; // HTML Template Loader for each pages
        this.attachEventListener();
    }


    attachEventListener() {
        this.underDevelopment("searchToolBtn", "inboxToolBtn", "upcomingToolBtn", "filterToolBtn");
        this.Template.todayToolBtn.addEventListener("click", this.baseHtml.renderToday.bind(this.baseHtml));
        this.Template.addTaskToolBtn.addEventListener("click", this.baseHtml.renderProject.bind(this.baseHtml));
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
