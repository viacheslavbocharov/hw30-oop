class Hamburger {
    static CHEES = { name: '+ Chees', price: 10, calories: 20 };
    static SALAD = { name: '+ Salad', price: 20, calories: 5 };
    static POTATO = { name: '+ Potato', price: 15, calories: 10 };
    static SPICES = { name: '+ Spices', price: 15, calories: 0 };
    static MAYO = { name: '+ Mayo', price: 15, calories: 10 };


    addExtra(extrasType) {
        this.extras.push(Hamburger[extrasType])
        this.price += Hamburger[extrasType].price
        this.calories += Hamburger[extrasType].calories
        this.showHamburgerCompoundInOrder();
        this.showHamburgerPriceInOrder();
        this.showHamburgerCaloriesInOrder();
    }


    deleteExtra(extrasType) {
        if (this.extras.length > 0) {

            const extraIndex = this.extras.findIndex(e => e.name === Hamburger[extrasType].name);

            if (extraIndex !== -1) {
                this.extras.splice(extraIndex, 1);
                this.price -= Hamburger[extrasType].price
                this.calories -= Hamburger[extrasType].calories
                this.showHamburgerCompoundInOrder();
                this.showHamburgerPriceInOrder();
                this.showHamburgerCaloriesInOrder();
            }
        }
    }


    showHamburgerCompoundInOrder() {
        const parent = document.querySelector('.order-list');
        parent.innerHTML = ''
        const newElement = document.createElement('div');
        newElement.classList.add('order-item');
        newElement.innerText = this.name;
        parent.appendChild(newElement);

        if (this.extras.length !== 0) {
            const parent = document.querySelector('.order-list');
            const elements = this.extras.map(filling => {
                const newElement = document.createElement('div');
                newElement.classList.add('order-item');
                newElement.innerText = filling.name;
                return newElement;
            });
            parent.append(...elements);
        }
    }



    showHamburgerPriceInOrder() {
        const parent = document.querySelector('.order-price');
        parent.innerText = `${this.price}MNT`
    }


    
    showHamburgerCaloriesInOrder() {
        const parent = document.querySelector('.order-calories');
        parent.innerText = `${this.calories}cal`
    }
   
};
