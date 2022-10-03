import plusImg from './img/add.png';

const groupTab = (e) => {
    let project = e.target.closest('.projectTab');
    console.log(project);
    let addGroupTab = e.target.closest('.addGroupTab');
    let groupTab = document.createElement('div');
    groupTab.setAttribute('class', 'groupTab');
    let name = document.createElement('input');
    name.setAttribute('type', 'text');
    name.setAttribute('placeholder', 'task');
    groupTab.appendChild(name);
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