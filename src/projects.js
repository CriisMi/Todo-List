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
    const setTask = (newTask) => {
        this.task = newTask;
    }

    return {task, dueDate, priority};
    
}

export {projects, newProject, newTodoItem};