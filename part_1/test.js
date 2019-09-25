// function Block(id, className, tagName) {
//     this.id = id;
//     this.className = className;
//     this.tagName = tagName;
//
//     this.element = null;  // узел DOM, который все отрисует
//     this.privateFoo = function () {
//
//     }
// }
// Block.prototype.render = function() {
//     if (!this.element){ // проверяет, существует ли элемент (если НЕ существует, то..)
//         this.element = document.createElement('this.tagName');
//         if (this.id){
//             this.element.id = this.id;
//         }
//         this.element.className = this.className;
//     return this.element;
//     }
// };
//
// function Menu(id,className, items) {  //Class Menu
//     Block.call(this, id, className, 'ul');
//     this.items =items;
// }
// Menu.prototype = Object.create(Block.prototype);
// Menu.prototype.render = function () {
//     Block.prototype.render.call(this);
//
//     this.items.forEach((item) =>{
//         if(item instanceof Block){
//             this.element.appendChild(item.render());
//         }
//     });
//     return this.element;
// };
//
// function MenuItem(title, href){
//     Block.call(this, null, 'menu-item', 'li');
//     this.title = title;
//     this.href = href;
// }
// MenuItem.prototype = Object.create(Block.prototype);
// MenuItem.prototype.render = function () {
//     Block.prototype.render.call(this);
//
//     const $link = document.createElement('a');
//     $link.textContent = this.title;
//     $link.href = this.href;
//
//     this.element.appendChild($link);
//
//     return  this.element;
// };
//


class Block {
    constructor(id, className, tagName){
        this.id = id;
        this.className = className;
        this.tagName = tagName;

        this.element = null;  // узел DOM, который все отрисует
    }
    render () {
        if (!this.element){ // проверяет, существует ли элемент (если НЕ существует, то..)
            this.element = document.createElement('this.tagName');
            if (this.id){
                this.element.id = this.id;
            }
            this.element.className = this.className;
            return this.element;
        }
    }


}

class Menu extends Block{
    constructor(id,className, items){
        super(id, className, 'ul');

        this.items =items;
    }
    render() {
        super.render();

        this.items.forEach((item) =>{
            if(item instanceof Block){
                this.element.appendChild(item.render());
            }
        });
        return this.element;
    }
}

class MenuItem extends Block {
    constructor(title, href){
        super(null, 'menu', 'li');

        this.title = title;
        this.href = href;
    }
   render() {
       super.render();

       const $link = document.createElement('a');
       $link.textContent = this.title;
       $link.href = this.href;

       this.element.appendChild($link);

       return  this.element;

   }


}


const menuItem1 = new MenuItem('Главная', '/');
const menuItem2 = new MenuItem('News', '/news');
const menuItem3 = new MenuItem('Blog', '/blog');

const menu = new Menu('menu', 'menu', [menuItem1, menuItem2, menuItem3]);

document.body.appendChild(menu.render());
