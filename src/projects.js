import { compareAsc, parseISO } from 'date-fns';

const projectList = (() => {
    let projectsList = [];
    const getProjectsList = () => projectsList;
    const addProject = newProject => {
        projectsList.push(newProject);
    }

    return {getProjectsList, addProject};
})();

/* create project */
const Project = () => {
    let tasks = [];
    const getTasks = () => tasks;
    const addTask = newTask => {
        tasks.push(newTask);
    }
    /* rearrange tasks cronologically */
    const rearrangeTasks = function() {
       tasks.sort((a, b) => compareAsc(parseISO(a.getDueDate()), parseISO(b.getDueDate())));
    }
    return {getTasks, addTask, rearrangeTasks};
};
 
/* create todo item */
const Task = (name, dueDate, priority) => {
    const getName = () => name;
    const getDueDate = () => dueDate;
    const getPriority = () => priority;
    const changeName = newName => {
        name = newName;
    }
    const changeDueDate = newDueDate => {
        dueDate = newDueDate;
    }
    const changePriority = newPriority => {
        priority = newPriority;
    }

    return {getName, getDueDate, getPriority, changeName, changeDueDate, changePriority};
};

export {projectList, Project, Task};