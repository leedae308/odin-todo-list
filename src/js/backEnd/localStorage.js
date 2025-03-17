class StoreLocal {
    constructor() {
        const savedTasks = window.localStorage.getItem("myTasks");
        this.tasks = savedTasks ? JSON.parse(savedTasks) : [];
    }

    store(task) {
        this.tasks = this.retrieve(); // Always load the latest tasks
        this.tasks.push(task);
        window.localStorage.setItem("myTasks", JSON.stringify(this.tasks));
    }

    retrieve() {
        const taskString = window.localStorage.getItem('myTasks');
        return taskString ? JSON.parse(taskString) : [];
    }
}


export default new StoreLocal();
