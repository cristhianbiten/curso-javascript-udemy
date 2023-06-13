const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;


ps.forEach(p => {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#fff';
});