import utilities from '../helpers/utilities.js';

const condimentArr = [
    {
        id: 'condiment0',
        type: 'Rosemary Aioli',
        price: 100
    },
    {
        id: 'condiment1',
        type: 'Mustard',
        price: 10
    },
    {
        id: 'condiment2',
        type: 'Mayo',
        price: 20
    },
    {
        id: 'condiment3',
        type: 'Buffalo',
        price: 50
    },
    {
        id: 'condiment4',
        type: 'Ranch',
        price: 50
    }
];

const getCondimentSelection = () => {
    const selectedCondimentArr = [];
    const condimentCheckbox = document.getElementsByClassName('condimentItem');
    for(let n = 0; n < condimentArr.length; n++){
        const selectedCondimentId = condimentCheckbox[n].id;
        for(let x = 0; x < condimentArr.length; x++){
            if(condimentCheckbox[n].checked && selectedCondimentId === condimentArr[x].id){
                selectedCondimentArr.push(condimentArr[x]);
            }
        }
    }
    return selectedCondimentArr;

};

const printCondimentList = () => {
    let condimentString = `
        <h5>Condiment</h5>
        <ul>
    `;
    for (let i = 0; i < condimentArr.length; i++) {
        condimentString +=`
            <div class="custom-control custom-switch">
            <input type="checkbox" name="condiments" class="custom-control-input condimentItem" id="${condimentArr[i].id}">
            <label class="custom-control-label" for="${condimentArr[i].id}">${condimentArr[i].type}</label>
            </div>
        `
    }
    condimentString += `</ul>`
    utilities.printToDom('condimentDiv', condimentString);
};

export default { printCondimentList, getCondimentSelection };