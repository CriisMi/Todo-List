export default function projectTab() {
    let content = document.querySelector('.content');
    let addProjectTab = document.querySelector('.addProjectTab');
    let projectTab= document.createElement('div');
    projectTab.setAttribute('class', 'projectTab');
    content.insertBefore(projectTab, addProjectTab);
}
