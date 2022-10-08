import plusImg from './img/add.png';
import { projects, newProject, newTodoItem } from './projects';

/* add todo element */
const groupTab = (e) => {
    let project = e.target.closest('.projectTab');
    let projectIndex = Array.from(project.parentNode.children).indexOf(project);
    let addGroupTab = e.target.closest('.addGroupTab');
    let groupTab = document.createElement('div');
    groupTab.setAttribute('class', 'groupTab');

    /* add name */
    let name = document.createElement('input');
    name.setAttribute('type', 'text');
    name.setAttribute('placeholder', 'Task');
    name.setAttribute('class', 'todoTask')
    groupTab.appendChild(name);

    /* add due date */
    let dueDate = document.createElement('input');
    dueDate.setAttribute('type', 'date');
    dueDate.setAttribute('placeholder', ' ');
    dueDate.setAttribute('class', 'todoDueDate');
    groupTab.appendChild(dueDate);

    /* add priority */
    let priorityList = document.createElement('select');
    priorityList.setAttribute('class', 'todoPriority');
    let priorityOptions = ['low', 'medium', 'high'];
    for (let i = 0; i < priorityOptions.length; i++) {
        let option = document.createElement("option");
        option.value = priorityOptions[i];
        option.text = priorityOptions[i];
        option.setAttribute('class', 'todoPriorityOption');
        priorityList.appendChild(option);
    }
    groupTab.appendChild(priorityList);

    
    (projects.getProjectsList())[projectIndex].addTask(newTodoItem('1','2','3'));

    project.insertBefore(groupTab, addGroupTab);
}

const newGroupTab = (projectTab) => {
    let project = projectTab;

    let addGroupTab = document.createElement('div');
    addGroupTab.setAttribute('class', 'addGroupTab');

    let addButton = document.createElement('button');
    addButton.setAttribute('class', 'add-new-group-btn');
    let btnImg = document.createElement('img');
    btnImg.src = plusImg;
    addButton.appendChild(btnImg);

    addButton.addEventListener('click', groupTab);

    addGroupTab.appendChild(addButton);   

    project.appendChild(addGroupTab);
}



const projectTab = () => {
    let content = document.querySelector('.content');
    let addProjectTab = document.querySelector('.addProjectTab');
    let projectTab= document.createElement('div');
    projectTab.setAttribute('class', 'projectTab');

    let projectsList = projects.getProjectsList();
    projects.addProject(newProject());
    console.log(projectsList);
    projectsList.forEach(project => console.log(project)); 

    newGroupTab(projectTab);

    content.insertBefore(projectTab, addProjectTab);
}

const newProjectTab = () => {
    let content = document.querySelector('.content');

    let addProjectTab = document.createElement('div');
    addProjectTab.setAttribute('class', 'addProjectTab');

    let addButton = document.createElement('button');
    addButton.setAttribute('class', 'add-new-project-btn');
    let btnImg = document.createElement('img');
    btnImg.src = plusImg;
    addButton.appendChild(btnImg);

    addButton.addEventListener('click', projectTab);

    addProjectTab.appendChild(addButton);

    content.appendChild(addProjectTab);
}

export { projectTab, newProjectTab, groupTab, newGroupTab}