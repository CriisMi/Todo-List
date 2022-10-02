import plusImg from './img/add.png';

const groupTab = () => {
    let project = document.querySelector('.projectTab');
    let addGroupTab = document.querySelector('.addGroupTab');
    let groupTab = document.createElement('div');
    groupTab.setAttribute('class', 'groupTab');
    project.insertBefore(groupTab, addGroupTab);
}

const newGroupTab = () => {
    let project = document.querySelector('.projectTab');

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

export { groupTab, newGroupTab }