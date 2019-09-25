class ItemList {
    constructor(){
        this.items = [];
        this.total = 0;
    }

    fetchItems() {
        this.items = [
            { title: 'Компьютерная мышь', price: 400, img: 'img/mouse.jpg' },
            { title: 'Жесткий диск SSD 1Tb', price: 10000, img: 'img/ssd.jpg' },
            { title: 'Материнская плата', price: 4000, img: 'img/motherboard.jpg' },
            { title: 'Видео-карта', price: 15000, img: 'img/videoCard.jpg' },
        ]

    }

    render(){
         return this.items.map((item) =>{
            return new Item(item.title, item.price, item.img).render();

        });

      // return  this.items.map((item) => new Item(item.title, item.price).render());

    }
    calcSum(){

       this.items.forEach((item) =>{
           this.total += item.price;
           return this.total;
       });
    }
}

class Item {
    constructor(title, price, img){
        this.title = title;
        this.price = price;
        this.img = img;
    }
    render() {
        return  `<div class="item item-style"><img class="img-card" src="${this.img}" alt=""><h3>${this.title}</h3><p>${this.price}</p><button class="btn btn-card">Добавить</button></div>`;
    }

}

class totalValue{

}
class addProduct{

}
class buy{

}


const items = new ItemList();
items.fetchItems();
items.calcSum();

document.querySelector('.catalog').innerHTML = items.render();



// const goods = [
//     { title: 'Компьютерная мышь', price: 400, img: 'img/mouse.jpg' },
//     { title: 'Жесткий диск SSD 1Tb', price: 10000, img: 'img/ssd.jpg' },
//     { title: 'Материнская плата', price: 4000, img: 'img/motherboard.jpg' },
//     { title: 'Видео-карта', price: 15000, img: 'img/videoCard.jpg' },
// ];
// const cartButton = document.querySelector('.cart-button');
//
// cartButton.classList.add('btn');
//
//
//
// const renderList = (items) => {
//     const renderedGoods = items.map(renderItem).join(' ');
//
//     document.querySelector('.catalog').innerHTML = renderedGoods;
// };
//
// const renderItem = (item) => {
//     return `<div class="item item-style"><img class="img-card" src="${item.img}" alt=""><h3>${item.title}</h3><p>${item.price}</p><button class="btn btn-card">Добавить</button></div>`;
//
//
// };
//
// renderList(goods);
//
//


