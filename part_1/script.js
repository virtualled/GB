const goods = [
    { title: 'Компьютерная мышь', price: 400 },
    { title: 'Жесткий диск SSD 1Tb', price: 10000 },
    { title: 'Материнская плата', price: 4000 },
    { title: 'Видео-карта', price: 15000 },
];

const styleHeader = () =>{
  const header = document.getElementById('header'),
        body = document.querySelector('body'),
        catalog = document.querySelector('.catalog'),
        cartButton = document.querySelector('.cart-button');

  body.style.margin = '0';
  body.style.padding = '0';
  header.style.width = '100%';
  header.style.height = '50px';
  header.style.display = 'flex';
  header.style.background = '#4a76a8';
  // header.style.justifyContent = 'flex-end';
  header.style.flexDirection = 'row-reverse';


    cartButton.style.backgroundColor = '#FFFFFF';
    cartButton.style.border = '1px solid #CCCCCC';
    cartButton.style.boxShadow = '0 1px 1px rgba(0, 0, 0, 0.075) inset';
    cartButton.style.transition =  'border 0.2s linear 0s, box-shadow 0.2s linear 0s';
    cartButton.style.borderRadius =  '4px';
    cartButton.style.color =  '#555555';
    cartButton.style.width = '120px';
    cartButton.style.margin =  '10px 20px';
    cartButton.style.fontSize =  '14px';
    cartButton.style.textAlign = 'center';
    cartButton.style.height =  '30px';
    cartButton.style.lineHeight =  '20px';
    cartButton.style.marginBottom =  '10px';
    cartButton.style.padding =  '4px 6px';
    cartButton.style.verticalAlign =  'middle';
    cartButton.style.textDecoration = 'none';


    catalog.style.display = 'flex';
    catalog.style.flexDirection = 'row';
    catalog.style.flexWrap = 'wrap';



};
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
    items.forEach((item) => {
        item.style.width = '200px';
        item.style.border = 'border-box';
        item.style.margin = '20px';
        item.style.height = '300px';
        item.style.width = '200px';
        item.style.border = '2px solid grey';


    });
    p.forEach((item) =>{
        item.style.marginLeft = '130px';
    });





};
card();

