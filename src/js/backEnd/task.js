class Task {
    constructor(title, description = '', dueDate, priority = false, reminder = false, complete = false, projectName = "default") {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.reminder = reminder;
        this.complete = complete;
        this.projectName = projectName;
    }
}

export default Task;