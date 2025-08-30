const sections = document.querySelectorAll('section');
for (let i = 0; i < sections.length; i++) {
    const element = sections[i];
    if (i % 2 == 0) {
        element.classList.add('background-one')
    }
    else {
        element.classList.add('background-two')
    }
}
