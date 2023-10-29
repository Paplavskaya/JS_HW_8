const html = document.querySelector('html');
html.setAttribute("lang", 'en');

const head = document.querySelector('head');
head.innerHTML = `
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Call to Action</title>
                <link rel="stylesheet" href="./css/style.css">
`
const body = document.querySelector('body');

const site = document.createElement('div');
site.classList.add('site');
body.appendChild(site);

const option = document.createElement('div')
option.classList.add('option');
site.appendChild(option);