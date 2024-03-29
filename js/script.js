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

const option = document.createElement('div');
option.classList.add('option');
site.appendChild(option);

const optionHeader = document.createElement('div');
optionHeader.classList.add('option__header');
option.appendChild(optionHeader);

const optionItems = document.createElement('div');
optionItems.classList.add('option__items');
option.appendChild(optionItems);

const optionHeaderTitle = document.createElement('h2');
optionHeaderTitle.classList.add('option__header__title');
optionHeaderTitle.textContent = 'Choose Your Option';
optionHeader.appendChild(optionHeaderTitle);

const optionHeaderSubTitle = document.createElement('span');
optionHeaderSubTitle.classList.add('option__header__sub__title');
optionHeaderSubTitle.textContent = 'But I must explain to you how all this mistaken idea of denouncing';
optionHeader.appendChild(optionHeaderSubTitle);

const optionItem = document.createElement('div');
optionItem.classList.add('option__item');
optionItem.innerHTML = `
                    <span class="option__item__sup__title">freelancer</span>
                    <h2 class="option__item__title">Initially designed to </h2>
                    <p class="option__item__info">But I must explain to you how all this mistaken idea of denouncing </p>
                    <button class="option__item_btn">start here</button>
`
optionItems.appendChild(optionItem);

const optionItemActive = document.createElement('div');
optionItemActive.classList.add('option__item', 'active');
optionItemActive.innerHTML = `
                          <span class="option__item__sup__title">studio</span>
                          <h2 class="option__item__title">Initially designed to </h2>
                          <p class="option__item__info">But I must explain to you how all this mistaken idea of denouncing </p>
                          <button class="option__item_btn">start here</button>
`
optionItems.appendChild(optionItemActive);