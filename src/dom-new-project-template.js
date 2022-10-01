export default function projectTemplateNew() {
    let content = document.querySelector('.content');

    let projectTemplate = document.createElement('div');
    projectTemplate.setAttribute('class', 'projectSectionAdd');
    content.appendChild(projectTemplate);
}