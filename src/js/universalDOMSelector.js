//UniversalDOMSelector.js

class UniversalDOMSelector{
    constructor(){
        this.templateDOM();
    }
    templateDOM(){
        this.taskPane=document.querySelector(".task-pane");

        //toolbars
        this.addTaskToolBtn=document.querySelector(".project-pane>.addTask");
        this.searchToolBtn=document.querySelector(".toolbars>#search");
        this.inboxToolBtn=document.querySelector(".toolbars>#inbox");
        this.todayToolBtn=document.querySelector(".toolbars>#today");
        this.upcomingToolBtn=document.querySelector(".toolbars>#upcoming");
        this.filterToolBtn=document.querySelector(".toolbars>#filter");

        //top-left bar
        // this.profile=document.querySelector("")
    }
}

export default new UniversalDOMSelector();