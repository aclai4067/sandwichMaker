import utilities from '../helpers/utilities.js';

const meatArr = [
    {
        id: 'meat0',
        type: 'Hot Chicken',
        price: 400
    },
    {
        id: 'meat1',
        type: 'Burger',
        price: 250
    },
    {
        id: 'meat2',
        type: 'Turkey',
        price: 150
    },
    {
        id: 'meat3',
        type: 'Bacon',
        price: 100
    },
    {
        id: 'meat4',
        type: 'Salami',
        price: 200
    }
];

const getMeatSelection = () => {
    const selectedMeatArr = [];
    const meatCheckbox = document.getElementsByClassName('meatItem');
    for(let n = 0; n <= meatArr.length; n++){
        const selectedMeatId = meatCheckbox[n].id;
        for(let x = 0; x < meatArr.length; x++){
            if(meatCheckbox[n].checked && selectedMeatId === meatArr[x].id){
                selectedMeatArr.push(meatArr[x]);
            }
        }
    }
    return selectedMeatArr;

};

const printMeatList = () => {
    let meatString = `
        <h5>Meat</h5>
        <ul>
        <div class="custom-control custom-switch">
            <input type="checkbox" name="meats" class="custom-control-input none meatItem" id="no-meat0">
            <label class="custom-control-label" for="no-meat0">No Meat</label>
        </div>
    `;
    for (let i = 0; i < meatArr.length; i++) {
        meatString +=`
            <div class="custom-control custom-switch">
            <input type="checkbox" name="meats" class="custom-control-input meatItem" id="${meatArr[i].id}">
            <label class="custom-control-label" for="${meatArr[i].id}">${meatArr[i].type}</label>
            </div>
        `
    }
    meatString += `</ul>`
    utilities.printToDom('meatDiv', meatString);
    const meatOptions = document.getElementsByClassName('meatItem');
    for(let n = 0; n <= meatArr.length; n++){
        meatOptions[n].addEventListener('click', (e) => {
            utilities.clearSelection(e, meatArr);
        })
    }
};

export default { printMeatList, getMeatSelection };