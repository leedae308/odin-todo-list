class StoreLocal {
    constructor() {
        this.tasks = [];
        
    }

    store(task) {
        this.tasks.push(task);
        const taskString = JSON.stringify(this.tasks);
        window.localStorage.setItem("myTasks", taskString);
    }

    retrieve() {
        const taskString = window.localStorage.getItem('myTasks');
        if(taskString){
            return JSON.parse(taskString);
        }
        else return [];
    }
}


export default new StoreLocal();
