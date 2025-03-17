// arraySorter.js

import LocalStorage from "./backEnd/localStorage"


class ArraySort {
    constructor() {
    }
    getCategorized() {
        return LocalStorage.retrieve().reduce((acc, task) => {
            if (!acc[task.projectName]) {
                acc[task.projectName] = [];
            }
            acc[task.projectName].push(task);
            return acc;
        },{})
    }

    getProjectList(){
        return Object.keys(this.getCategorized());
    }
    
}

export default new ArraySort();