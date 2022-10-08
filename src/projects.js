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

    return {getTasks, addTask, tasks};
};

/* create todo item */
const newTodoItem = (task, dueDate, priority) => {
    const changeTask = function(newTask){
        this.task = newTask;
    };
    const changeDueDate = function(newDueDate){
        this.dueDate = newDueDate;
    }
    const changePriority = function(newPriority){
        this.priority = newPriority;
    }

    return {task, dueDate, priority, changeTask, changeDueDate, changePriority};
    
}

export {projects, newProject, newTodoItem};