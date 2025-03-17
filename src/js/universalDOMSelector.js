//UniversalDOMSelector.js

class UniversalDOMSelector {
    constructor() {
        this.templateDOM();
        this.projectList();
        this.Form();
    }
    templateDOM() {
        this.taskPane = document.querySelector(".task-pane");

        //toolbars
        this.addTaskToolBtn = document.querySelector(".project-pane>.addTask");
        this.searchToolBtn = document.querySelector(".toolbars>#search");
        this.inboxToolBtn = document.querySelector(".toolbars>#inbox");
        this.todayToolBtn = document.querySelector(".toolbars>#today");
        this.upcomingToolBtn = document.querySelector(".toolbars>#upcoming");
        this.filterToolBtn = document.querySelector(".toolbars>#filter");

        //top-left bar
        // this.profile=document.querySelector("")
    }

    projectList() {
        this.projectContainer = document.querySelector(".project-container");
    }

    Form(){
        this.form = document.querySelector("#task-creation");
    }
}

export default new UniversalDOMSelector();