export const smoothCollapse = id => {
    let element = document.querySelector(`#${id}`)
    console.log(element);
    element.style.height = element.scrollHeight + 'px';

    element.classList.toggle('open');
    element.style.height = element.classList.contains('open') ? element.scrollHeight + 'px': 0;
}

export const closeSmoothCollapse = id => {
    let element = document.querySelector(`#${id}`);
    element.classList.remove('open');
    element.style.height = 0;
}