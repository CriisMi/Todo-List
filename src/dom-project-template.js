export default function projectTemplate() {
    let content = document.querySelector('.content');

    let projectTemplate = document.createElement('div');
    projectTemplate.setAttribute('class', 'projectSection');
    content.appendChild(projectTemplate);
}