// createTask.js
import Task from "./backEnd/task"

class CreateTask {
    constructor(form, storage){
        this.form = form;
        this.storage = storage;
        this.retrieveData();
    }

    retrieveData(){
        this.form.addEventListener("submit", (event) => {
            event.preventDefault();

            const title = this.form.querySelector("[name='task_title']").value;
            const description = this.form.querySelector("[name='task_description']").value;
            const dropDownValue = this.form.querySelector("[name='drop_down']").value;

            this.storage.store(new Task(title, description, "2001-03-08", undefined, true, false, dropDownValue));

            alert("Successfully Added");
        });
    }
}

export default CreateTask;