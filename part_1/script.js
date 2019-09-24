const goods = [
    { title: 'Компьютерная мышь', price: 400, img: 'img/mouse.jpg' },
    { title: 'Жесткий диск SSD 1Tb', price: 10000, img: 'img/ssd.jpg' },
    { title: 'Материнская плата', price: 4000, img: 'img/motherboard.jpg' },
    { title: 'Видео-карта', price: 15000, img: 'img/videoCard.jpg' },
];
const cartButton = document.querySelector('.cart-button');

cartButton.classList.add('btn');

const renderList = (items) => {
    const renderedGoods = items.map(renderItem).join(' ');

    document.querySelector('.catalog').innerHTML = renderedGoods;
};

const renderItem = (item) => {
    return `<div class="item item-style"><img class="img-card" src="${item.img}" alt=""><h3>${item.title}</h3><p>${item.price}</p><button class="btn btn-card">Добавить</button></div>`;


};

renderList(goods);




