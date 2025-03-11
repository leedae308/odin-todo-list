// displayTask.js

class DisplayTask {
    constructor(task) {
        this.filled = (task.complete) ? 'checked' : "";
        this.title = task.title;
        this.reminder = (task.reminder) ? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <title>repeat-variant</title>
                            <path
                                d="M6,5.75L10.25,10H7V16H13.5L15.5,18H7A2,2 0 0,1 5,16V10H1.75L6,5.75M18,18.25L13.75,14H17V8H10.5L8.5,6H17A2,2 0 0,1 19,8V14H22.25L18,18.25Z"
                                fill="currentColor" />
                        </svg>` : "";
        this.complete = (task.complete) ? "id='complete'" : "";

        //need work on priority, duedate, and projectName;

        this.template = this.loadTaskTemplate();
    }

    loadTaskTemplate() {
        return `<div class="task">
                    <input type="checkbox" name="complete" ${this.filled}>
                    <div class="text" ${this.complete}>${this.title}</div>
                    <div class="time">
                        ${this.reminder}
                        7:30 AM
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <title>alarm</title>
                            <path
                                d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22A9,9 0 0,0 21,13A9,9 0 0,0 12,4M12.5,8H11V14L15.75,16.85L16.5,15.62L12.5,13.25V8M7.88,3.39L6.6,1.86L2,5.71L3.29,7.24L7.88,3.39M22,5.72L17.4,1.86L16.11,3.39L20.71,7.25L22,5.72Z" />
                        </svg>
                    </div>
                </div>`
    }

    getHTML(){
        return this.template;
    }
}

export default DisplayTask;