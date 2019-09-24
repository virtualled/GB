const goods = [
    { title: 'Компьютерная мышь', price: 400 },
    { title: 'Жесткий диск SSD 1Tb', price: 10000 },
    { title: 'Материнская плата', price: 4000 },
    { title: 'Видео-карта', price: 15000 },
];

const styleHeader = () =>{
  const header = document.getElementById('header'),
        body = document.querySelector('body'),
        catalog = document.querySelector('.catalog');
        ;

  body.style.margin = '0';
  body.style.padding = '0';
  header.style.width = '100%';
  header.style.height = '50px';
  header.style.display = 'flex';
  header.style.background = '#4a76a8';
  // header.style.justifyContent = 'flex-end';
  header.style.flexDirection = 'row-reverse';





    catalog.style.display = 'flex';
    catalog.style.flexDirection = 'row';
    catalog.style.flexWrap = 'wrap';



};
const cartButton = document.querySelector('.cart-button');
const buttonStyle = (style) =>{
    style.style.backgroundColor = '#FFFFFF';
    style.style.border = '1px solid #CCCCCC';
    style.style.boxShadow = '0 1px 1px rgba(0, 0, 0, 0.075) inset';
    style.style.transition =  'border 0.2s linear 0s, box-shadow 0.2s linear 0s';
    style.style.borderRadius =  '4px';
    style.style.color =  '#555555';
    style.style.width = '120px';
    style.style.margin =  '10px 20px';
    style.style.fontSize =  '14px';
    style.style.textAlign = 'center';
    style.style.height =  '30px';
    style.style.lineHeight =  '20px';
    style.style.marginBottom =  '10px';
    style.style.padding =  '4px 6px';
    style.style.verticalAlign =  'middle';
    style.style.textDecoration = 'none';
};
buttonStyle(cartButton);
styleHeader();
const renderList = (items) => {
    const renderedGoods = items.map(renderItem).join(' ');

    document.querySelector('.catalog').innerHTML = renderedGoods;
}

const renderItem = (item) => {
    return `<div class="item"><h3>${item.title}</h3><p>${item.price}</p></div>`;
}

renderList(goods);

const items = document.querySelectorAll('.item'),
      p = document.querySelectorAll('p');

const card = () =>{
    console.log(items)

    let btn = document.createElement('button');
   // btn.className='cart-button';

    items.forEach((item) => {
        let btn = document.createElement('button');
        item.style.width = '200px';
        item.style.border = 'border-box';
        item.style.margin = '20px';
        item.style.height = '300px';
        item.style.width = '200px';
        item.style.border = '2px solid grey';
        item.appendChild(btn);
        console.log(btn);

    });
    const cardBtn = document.querySelectorAll('.item > button');
    cardBtn.forEach((item) =>{
        item.textContent = 'Добавить в корзину';
        item.style.marginLeft = '70px';
        buttonStyle(btn);
    });

    p.forEach((item) =>{
        item.style.marginLeft = '130px';
    });





};
card();

