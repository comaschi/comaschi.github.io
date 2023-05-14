// Platos Cards -------------------------


class Plato {

    constructor(title, image, desc, price) {
        this.title = title;
        this.imageUrl = image;
        this.description = desc;
        this.price = price;
    }
}

class Item {
    constructor(plato) {
        this.plato = plato;
    }

    render() {
        const prodEl = document.createElement('li');
        prodEl.className = 'product-item';
        prodEl.innerHTML = `
          <div>
            <img src="${this.product.imageUrl}" alt="${this.product.title}" >
            <div class="product-item__content">
              <h2>${this.product.title}</h2>
              <h3>\$${this.product.price}</h3>
              <p>${this.product.description}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        `;
        const addCartButton = prodEl.querySelector('button');
        addCartButton.addEventListener('click', this.addToCart.bind(this));
        return prodEl;
    }
}


class PlatoList {
    platos = [
        new Plato(
            'Cordero Patagonico',
            'http://www.skorpios.cl/wp-content/uploads/El-cordero-patag%C3%B3nico-de-Skorpios.jpg',
            'A soft pillow!',
            7000
        ),
        new Plato(
            'Bife de Costilla',
            'https://www.lamejorparrilla.com/wp-content/uploads/2011/02/1470069566_1461178446bife-de-costilla.png',
            'Exquisito Bife de Costilla, asado a las brazas con Papas al natutal como guarnicion',
            4500
        ),

        new Plato(
            'Bife estilo Campo',
            'https://www.lamejorparrilla.com/wp-content/uploads/2011/02/1470069659_1461178373bife-estilo-campo.png',
            'Exquisito bife, asado a las brazas con Papas al natutal como guarnicion',
            5000
        ),

        new Plato(
            'Achuras',
            'https://www.lamejorparrilla.com/wp-content/uploads/2011/02/1470069637_1461178564achuras.png',
            'Exquisito bife, asado a las brazas con Papas al natutal como guarnicion',
            3500
        ),
        new Plato(
            'Entrana',
            'https://www.lamejorparrilla.com/wp-content/uploads/2017/11/don-julio-6.jpg',
            'Entraña blabalabla',
            5000
        ),
        new Plato(
            'Chivito',
            'https://www.lamejorparrilla.com/wp-content/uploads/2011/02/1470069323_1461178513chivito.png',
            'Chivito blabalabla',
            6500
        ),

        new Plato(
            'Tabla de Chorizos',
            'https://www.lamejorparrilla.com/wp-content/uploads/2017/11/don-julio-3.jpg',
            'Chivito blabalabla',
            6500
        ),

        new Plato(
            'Verduras Asadas',
            'https://www.lamejorparrilla.com/wp-content/uploads/2017/11/don-julio-5.jpg',
            'Verduras Asadas blabalabla',
            2500
        )
    ];

    constructor() { }

    render() {
        const itemList = document.createElement('div');
        itemList.className = 'sliderWidth';
        for (const item of this.platos) {
            itemList.innerHTML += `
            <div class="item">
            <div class="card">
              <div class="cardImage"
                style="background:url('${item.imageUrl}');background-size: cover; background-repeat: no-repeat;background-position-x: center;">
              </div>
              <div class="cardText">
                <h2>${item.title}</h2>
                <p>${item.description}</p>
              </div>
              <div class="cardPrecio">
                  <div class="value">\$${item.price}</div>
              </div> 
            </div> 
            </div>`;
        }
        return itemList;
    }

}


class App {
    static init() {
        const renderHook = document.querySelector('.sliderContainer');
        const platoList = new PlatoList();
        const platoListDiv= platoList.render();

        renderHook.append(platoListDiv);
    }
}

App.init();

// Platos Slider -------------------------

const leftBtn = document.querySelector('.btnLeft');

// querySelector('.btnLeft');
const rightBtn = document.querySelector('.btnRight');

let count = 0;
let inc = 0;
let margin = 0;
let slider = document.getElementsByClassName("sliderWidth")[0];
let itemDisplay = 0;
let item = document.getElementsByClassName("item");

if (screen.width >= 1300) {
    itemDisplay = document.getElementsByClassName("sliderContainer")[0].getAttribute('item-display-xl');
    margin = itemDisplay * 4.0;
};


if (screen.width >= 1042 && screen.width < 1300) {
    itemDisplay = document.getElementsByClassName("sliderContainer")[0].getAttribute('item-display-l');
    margin = itemDisplay * 5;
};


if (screen.width >= 814 && screen.width < 1042) {
    itemDisplay = document.getElementsByClassName("sliderContainer")[0].getAttribute('item-display-m');
    margin = itemDisplay * 6.8;
};

if (screen.width >= 516 && screen.width < 814) {
    itemDisplay = document.getElementsByClassName("sliderContainer")[0].getAttribute('item-display-s');
    margin = itemDisplay * 10;
};

if (screen.width < 516) {
    itemDisplay = document.getElementsByClassName("sliderContainer")[0].getAttribute('item-display-xs');
    margin = itemDisplay * 20;

};

let itemLeft = item.length % itemDisplay;
let itemSlide = Math.floor(item.length / itemDisplay) - 1;


console.log(screen.width + 'screen.width');
console.log(itemDisplay + 'itemDisplay');
console.log(itemLeft + 'itemLeft');
console.log(itemSlide + 'itemSlide');
console.log(margin + 'margin');
console.log(inc + 'inc');
console.log(count + 'count');



for (const i of item) {
    i.style.width = (screen.width / itemDisplay) - margin + "px";

}

leftBtn.addEventListener("click", () => {

    // console.log(itemDisplay + 'itemDisplay');
    // console.log(itemLeft + 'itemLeft');
    // console.log(itemSlide + 'itemSlide');
    // console.log(margin + 'margin');
    // console.log(screen.width + 'screen.width');
    // console.log(inc + 'inc');
    // console.log(count + 'count');

    if (inc !== 0) {
        if (inc === itemLeft) {
            inc -= itemLeft;
            count += (screen.width / itemDisplay) * itemLeft;
        } else {
            inc--;
            count += screen.width;
        }
    }

    slider.style.left = count + "px";


})

rightBtn.addEventListener("click", () => {

    if (inc !== itemSlide + itemLeft) {
        if (inc === itemSlide) {
            inc += itemLeft;
            count -= (screen.width / itemDisplay) * itemLeft;
        } else {
            inc++;
            count -= screen.width;
        }
    }
    slider.style.left = count + "px";



})