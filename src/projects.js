import { compareAsc, getYear, parseISO } from 'date-fns';

const projects = (() => {
    let projectsList = [];
    const getProjectsList = () => projectsList;
    const addProject = newProject => {
        projectsList.push(newProject);
    }

    return{getProjectsList, addProject};

    
})();

/* create project */
const newProject = () => {
    let tasks = [];
    const getTasks = () => tasks;
    const addTask = newTask => {
        tasks.push(newTask);
    }

    /* rearrange tasks cronologically */
    const rearrangeTasks = function() {
       tasks.sort((a, b) => compareAsc(parseISO(a.getDueDate()), parseISO(b.getDueDate())));
    }
    return {getTasks, addTask,rearrangeTasks, tasks};
};

/* create todo item */
const newTodoItem = (task, dueDate, priority) => {

    const getTask = function() {
        return this.task;
    };

    const getDueDate = function() {
        return this.dueDate;
    };
    const getPriority= function() {
        this.priority;
    };
    const changeTask = function(newTask){
        this.task = newTask;
    };
    const changeDueDate = function(newDueDate){
        this.dueDate = newDueDate;
    }
    const changePriority = function(newPriority){
        this.priority = newPriority;
    }

    return {getTask, getDueDate, getPriority, changeTask, changeDueDate, changePriority};
    
}

export {projects, newProject, newTodoItem};