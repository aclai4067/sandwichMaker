import utilities from '../helpers/utilities.js';

const cheeseArr = [
    {
        id: 'cheese0',
        type: 'Whipped Feta',
        price: 200
    },
    {
        id: 'cheese1',
        type: 'Brie',
        price: 250
    },
    {
        id: 'cheese2',
        type: 'Havarti',
        price: 150
    },
    {
        id: 'cheese3',
        type: 'Cheddar',
        price: 100
    },
    {
        id: 'cheese4',
        type: 'Munster',
        price: 100
    }
];

const getCheeseSelection = () => {
    const selectedCheeseArr = [];
    const cheeseCheckbox = document.getElementsByClassName('cheeseItem');
    for(let n = 0; n <= cheeseArr.length; n++){
        const selectedCheeseId = cheeseCheckbox[n].id;
        for(let x = 0; x < cheeseArr.length; x++){
            if(cheeseCheckbox[n].checked && selectedCheeseId === cheeseArr[x].id){
                selectedCheeseArr.push(cheeseArr[x]);
            }
        }
    }
    return selectedCheeseArr;

};

const printCheeseList = () => {
    let cheeseString = `
        <h5>Cheese</h5>
        <ul>
        <div class="custom-control custom-switch">
            <input type="checkbox" name="cheeses" class="custom-control-input none cheeseItem" id="no-cheese0">
            <label class="custom-control-label" for="no-cheese0">No Cheese</label>
        </div>
    `;
    for (let i = 0; i < cheeseArr.length; i++) {
        cheeseString +=`
            <div class="custom-control custom-switch">
            <input type="checkbox" name="cheeses" class="custom-control-input cheeseItem" id="${cheeseArr[i].id}">
            <label class="custom-control-label" for="${cheeseArr[i].id}">${cheeseArr[i].type}</label>
            </div>
        `
    }
    cheeseString += `</ul>`
    utilities.printToDom('cheeseDiv', cheeseString);
    const cheeseOptions = document.getElementsByClassName('cheeseItem');
    for(let n = 0; n <= cheeseArr.length; n++){
        cheeseOptions[n].addEventListener('click', (e) => {
            utilities.clearSelection(e, cheeseArr);
        })
    }
};

export default { printCheeseList, getCheeseSelection };