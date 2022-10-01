import plusImg from './img/add.png';

export default function projectTemplateNew() {
    let content = document.querySelector('.content');

    let projectTemplate = document.createElement('div');
    projectTemplate.setAttribute('class', 'projectSectionAdd');

    let addButton = document.createElement('button');
    addButton.setAttribute('class', 'add-new-project-btn');
    let btnImg = document.createElement('img');
    btnImg.src = plusImg;
    addButton.appendChild(btnImg);
    projectTemplate.appendChild(addButton);

    content.appendChild(projectTemplate);
}