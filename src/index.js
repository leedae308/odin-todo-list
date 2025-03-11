import "./css/template.css";
import displayModule from "./js/displayModule";

import Task from "./js/backEnd/task";
import LocalStore from "./js/backEnd/localStorage";

var myProject = LocalStore;

myProject.store(new Task("Do 30 minutes of yoga", undefined, undefined, true, true, false, "Fitness"));
myProject.store(new Task("Buy bread", undefined, undefined, false, true, true, "Groceries"));
myProject.store(new Task("Dentist Appointment", "GangNam Purun Cheegwa", "2025-03-12 09:00", true, true, false, "Fitness"));
myProject.store(new Task("Buy Chicken", undefined, "2025-03-12 12:00", false, true, false, "Groceries"));
myProject.store(new Task("See Dr. Vuglar", undefined, "2025-03-12 12:00", false, true, false, "Appointments"));

console.log(myProject.retrieve().sort((a, b) => a.projectName.localeCompare(b.projectName)));




