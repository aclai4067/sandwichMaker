import utilities from '../helpers/utilities.js';

const veggieArr = [
    {
        id: 'veggie0',
        type: 'Kalamata Olive',
        price: 100
    },
    {
        id: 'veggie1',
        type: 'Onion',
        price: 20
    },
    {
        id: 'veggie2',
        type: 'Tomato',
        price: 30
    },
    {
        id: 'veggie3',
        type: 'Pickle',
        price: 0
    },
    {
        id: 'veggie4',
        type: 'Arugula',
        price: 80
    }
];

const getVeggieSelection = () => {
    const selectedVeggieArr = [];
    const veggieCheckbox = document.getElementsByClassName('veggieItem');
    for(let n = 0; n <= veggieArr.length; n++){
        const selectedVeggieId = veggieCheckbox[n].id;
        for(let x = 0; x < veggieArr.length; x++){
            if(veggieCheckbox[n].checked && selectedVeggieId === veggieArr[x].id){
                selectedVeggieArr.push(veggieArr[x]);
            }
        }
    }
    return selectedVeggieArr;

};

const printVeggieList = () => {
    let veggieString = `
        <h5>Veggies</h5>
        <ul>
        <div class="custom-control custom-switch">
            <input type="checkbox" name="veggies" class="custom-control-input none veggieItem" id="no-veggie0">
            <label class="custom-control-label" for="no-veggie0">No Veggies</label>
        </div>
    `;
    for (let i = 0; i < veggieArr.length; i++) {
        veggieString +=`
            <div class="custom-control custom-switch">
            <input type="checkbox" name="veggies" class="custom-control-input veggieItem" id="${veggieArr[i].id}">
            <label class="custom-control-label" for="${veggieArr[i].id}">${veggieArr[i].type}</label>
            </div>
        `
    }
    veggieString += `</ul>`
    utilities.printToDom('veggieDiv', veggieString);
    const veggieOptions = document.getElementsByClassName('veggieItem');
    for(let n = 0; n <= veggieArr.length; n++){
        veggieOptions[n].addEventListener('click', (e) => {
            utilities.clearSelection(e, veggieArr);
        })
    }
};

export default { printVeggieList, getVeggieSelection };