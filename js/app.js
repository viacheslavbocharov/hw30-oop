let myHamburger;



document.querySelector('.hamburger-list').addEventListener('click', (event) => {
    
    const hamburgerType = event.target.getAttribute('data-hamburger-type');

    if (hamburgerType) {
        switch (hamburgerType) {
            case 'smallHamburger':
                myHamburger = new SmallHamburger;
                break;
            case 'bigHamburger':
                myHamburger = new BigHamburger;
                break;
            default:
                break;
        }
        myHamburger.showHamburgerCompoundInOrder();
        myHamburger.showHamburgerPriceInOrder();
        myHamburger.showHamburgerCaloriesInOrder();

    }
});




document.querySelector('.item-list').addEventListener('click', (event) => {

    const extrasType = event.target.closest('[data-extras-type]').getAttribute('data-extras-type');
    const action = event.target.getAttribute('data-btn');

    if (myHamburger) {
        if (action) {
            switch (action) {
                case 'add':
                    myHamburger.addExtra(extrasType);
                    break;

                case 'del':
                    myHamburger.deleteExtra(extrasType);
                    break;

                default:
                    break;
            }
        }
    } else {
        alert("Choose hamburger first")
    }
});