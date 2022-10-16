
import {format, parseISO} from 'date-fns';
import plusImg from './img/add.png';
import {projectList, Project, Task } from './projects';

const todayFormated = format(new Date(), 'yyyy-MM-dd').toString();
let content = document.querySelector('.content');

const newProjectTab = () => {
    let addProjectTab = document.createElement('div');
    addProjectTab.setAttribute('class', 'addProjectTab');
    let addButton = createButton('add-new-project-btn');
    addButton.addEventListener('click', renderNewProject);
    addProjectTab.appendChild(addButton);
    content.appendChild(addProjectTab);
}

const renderNewProject = () => {
    let projectTab = document.createElement('div');
    projectTab.setAttribute('class', 'projectTab');
    let newProject = Project();
    projectList.addProject(newProject);
    projectTab.appendChild(newGroupTab(newProject));
    content.insertBefore(projectTab, content.lastChild);
}

// create add todo element tab 
const newGroupTab = (project) => {
    let addGroupTab = document.createElement('div');
    addGroupTab.setAttribute('class', 'addGroupTab');
    let addButton = createButton('add-new-group-btn');
    addButton.addEventListener('click', function() {
        let newTask = Task('New Task', todayFormated, 'low');
        project.addTask(newTask);
        let newItem = renderTodoItem(project, newTask);
        let projectTab = addButton.closest('.projectTab');
        projectTab.insertBefore(newItem, projectTab.lastChild);
    });
    addGroupTab.appendChild(addButton);   
    return addGroupTab;
};

const renderTodoItem = (project, task) => {
    let todoItem = document.createElement('div');
    todoItem.setAttribute('class', 'groupTab');
    todoItem.appendChild(renderNameElement(task));
    todoItem.appendChild(renderDueDateElement(task, project));
    todoItem.appendChild(renderPriorityListElement(task));
    return todoItem;
};

// render rearranged tasks 
const renderProject = (project) => {
    let projectIndex = projectList.getProjectsList().indexOf(project);
    let projTabs = content.children;
    let projectTab = projTabs.item(projectIndex);
    while (projectTab.firstChild) {
        projectTab.firstChild.remove();
    };
    projectTab.appendChild(newGroupTab(project));
    let tasks = project.getTasks();
    for (let i = 0; i < tasks.length; i++) {
        projectTab.insertBefore(renderTodoItem(project, tasks[i]), projectTab.lastChild);
    };
}

// create name 
const renderNameElement = (task) => {
    let nameElement = document.createElement('input');
    nameElement.setAttribute('type', 'text');
    nameElement.value = task.getName();
    nameElement.setAttribute('class', 'todoTask');
    nameElement.addEventListener('change', () =>{
        task.changeName(nameElement.value); 
    }); 
    return nameElement;
};

// create due date
const renderDueDateElement = (task, project) => {
    let dueDateElement = document.createElement('input');
    dueDateElement.setAttribute('type', 'date');
    dueDateElement.value = task.getDueDate();
    dueDateElement.addEventListener('change', (event) =>{
        task.changeDueDate(dueDateElement.value);      
        project.rearrangeTasks();
        project.getTasks().forEach(task => console.log(task.getDueDate()));
        renderProject(project); 
    }); 
    return dueDateElement;
};

// create priority element
const renderPriorityListElement = (task) => {
    let priorityListElement = document.createElement('select');
    priorityListElement.setAttribute('class', 'todoPriority');
    let priorityOptions = ['low', 'medium', 'high'];
    for (let i = 0; i < priorityOptions.length; i++) {
        let option = document.createElement("option");
        option.value = priorityOptions[i];
        option.text = priorityOptions[i];
        option.setAttribute('class', 'todoPriorityOption');
        priorityListElement.appendChild(option);
    };
    priorityListElement.value = task.getPriority();
    priorityListElement.addEventListener('change', (event) =>{
        task.changePriority(priorityListElement.value);
    }); 
    return priorityListElement;
};


const createButton = (btnClass) => {
    let addButton = document.createElement('button');
    addButton.setAttribute('class', btnClass);
    let btnImg = document.createElement('img');
    btnImg.src = plusImg;
    addButton.appendChild(btnImg);
    return addButton;
}

export {renderNewProject, newProjectTab};