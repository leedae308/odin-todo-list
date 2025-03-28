// innerHTMLTemplates.js

import TaskLoader from "./displayTask"
import DOMselector from "./universalDOMSelector";
import LocalStorage from "./backEnd/localStorage";
import arraySort from "./arraySorter";
import updateProject from "./displayProjectList";
import CreateTask from "./createTask";


class innerHTMLTemplate {
    constructor() {
        this.taskPane = DOMselector.taskPane;
        this.renderHome();
    }

    renderToday() {
        this.taskPane.innerHTML = this.pageTitle("Today") +
            this.addTaskTemplate() + this.addSortedTask();
        const form = document.querySelector("#task-creation");
        if (form) {
            new CreateTask(form, LocalStorage);
        }

    }

    renderProject() {
        this.taskPane.innerHTML = this.pageTitle("Add task") + this.addTaskTemplate();

        const form = document.querySelector("#task-creation");
        if (form) {
            new CreateTask(form, LocalStorage);
        }

    }

    renderHome() {
        this.taskPane.innerHTML = this.pageTitle("Todo") + this.homeTemplate();

    }

    addSortedTask() {
        const keys = Object.keys(arraySort.getCategorized());
        const sortedArray = arraySort.getCategorized();
        const resultArray = [];

        for (let i = 0; i < keys.length; i++) {
            resultArray.push(`<div class="project">
                <div class="sub-title">${keys[i]}</div>`)

            const tasksHTML = sortedArray[keys[i]].map(task => {
                var loadTask = new TaskLoader(task);
                return loadTask.getHTML();
            }).join(' ');
            resultArray.push(tasksHTML);
        }

        return resultArray.join(' ');

    }

    addTask() {
        return LocalStorage.retrieve().map(task => {
            var loadTask = new TaskLoader(task);
            return loadTask.getHTML();
        }
        ).join('');
    }

    pageTitle(pageTitle) {
        return `<div class="page-title">${pageTitle}</div>`
    }
    homeTemplate() {
        return `<div class="project">
                <div class="sub-title">My Projects</div>
                <div class="task">
                    <input type="checkbox" name="complete" id="filled" filled>
                    <div class="text">Dentist appointment</div>
                    <div class="time">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <title>repeat-variant</title>
                            <path
                                d="M6,5.75L10.25,10H7V16H13.5L15.5,18H7A2,2 0 0,1 5,16V10H1.75L6,5.75M18,18.25L13.75,14H17V8H10.5L8.5,6H17A2,2 0 0,1 19,8V14H22.25L18,18.25Z"
                                fill="currentColor" />
                        </svg>
                        10:00 AM
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <title>alarm</title>
                            <path
                                d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22A9,9 0 0,0 21,13A9,9 0 0,0 12,4M12.5,8H11V14L15.75,16.85L16.5,15.62L12.5,13.25V8M7.88,3.39L6.6,1.86L2,5.71L3.29,7.24L7.88,3.39M22,5.72L17.4,1.86L16.11,3.39L20.71,7.25L22,5.72Z" />
                        </svg>
                    </div>
                </div>
                <div class="task">
                    <input type="checkbox" name="complete">
                    <div class="text" id="complete">Buy Bread</div>
                </div>
                <div class="task">
                    <div class="plus">+</div>
                    <input type="text" class="add-text" placeholder="Add task">
                </div>
            </div>`}

    addTaskTemplate() {
        return `<form id="task-creation">
                <input type="text" name="task_title" placeholder="Task Title">
                <input type="text" name="task_description" placeholder="Description">
                <div class="buttons">
                    <button id="task-duedate"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.9 20.11 3 19 3M19 19H5V9H19V19M19 7H5V5H19V7Z"
                                fill="currentColor" />
                        </svg>Due Date</button>
                    <button id="task-priority"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <title>flag-outline</title>
                            <path
                                d="M12.36,6L12.76,8H18V14H14.64L14.24,12H7V6H12.36M14,4H5V21H7V14H12.6L13,16H20V6H14.4"
                                fill="currentColor" />
                        </svg>Priority</button>
                    <button id="task-reminder"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <title>alarm</title>
                            <path
                                d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22A9,9 0 0,0 21,13A9,9 0 0,0 12,4M12.5,8H11V14L15.75,16.85L16.5,15.62L12.5,13.25V8M7.88,3.39L6.6,1.86L2,5.71L3.29,7.24L7.88,3.39M22,5.72L17.4,1.86L16.11,3.39L20.71,7.25L22,5.72Z"
                                fill="currentColor" />
                        </svg>Reminder</button>
                    <button id="task-more"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <title>dots-horizontal</title>
                            <path
                                d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"
                                fill="currentColor" />
                        </svg></button>
                </div>
                <div class="bottom-form">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <title>pound</title>
                        <path
                            d="M5.41,21L6.12,17H2.12L2.47,15H6.47L7.53,9H3.53L3.88,7H7.88L8.59,3H10.59L9.88,7H15.88L16.59,3H18.59L17.88,7H21.88L21.53,9H17.53L16.47,15H20.47L20.12,17H16.12L15.41,21H13.41L14.12,17H8.12L7.41,21H5.41M9.53,9L8.47,15H14.47L15.53,9H9.53Z"
                            fill="currentColor" />
                    </svg>
                    <!-- <input list="projects"> -->
                    <select id="projects" name="drop_down">
                        <option value="Fitness" selected>Fitness</option>
                        <option value="Groceries">Groceries</option>
                        <option value="Appointments">Appointments</option>
                    </select>

                    <button id="task-cancel">Cancel</button>
                    <button type="submit" id="task-add">Add task</button>
                </div>

            </form>`
    }

}

class Update {

}

export default new innerHTMLTemplate();