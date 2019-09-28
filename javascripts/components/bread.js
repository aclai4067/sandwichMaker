import utilities from '../helpers/utilities.js';

const breadArr = [
    {
        id: 'bread0',
        type: 'Five Grain',
        price: 250
    },
    {
        id: 'bread1',
        type: 'Wheat Wrap',
        price: 175
    },
    {
        id: 'bread2',
        type: 'Sourdough',
        price: 150
    },
    {
        id: 'bread3',
        type: 'Rye',
        price: 100
    },
    {
        id: 'bread4',
        type: 'Ciabatta',
        price: 200
    },
    {
        id: 'bread5',
        type: 'Brioche',
        price: 200
    }
];

const getBreadSelection = () => {
    const selectedBreadArr = [];
    const breadCheckbox = document.getElementsByClassName('breadItem');
    for(let n = 0; n < breadArr.length; n++){
        const selectedBreadId = breadCheckbox[n].id;
        for(let x = 0; x < breadArr.length; x++){
            if(breadCheckbox[n].checked && selectedBreadId === breadArr[x].id){
                selectedBreadArr.push(breadArr[x]);
            }
        }
    }
    return selectedBreadArr;

};

const printBreadList = () => {
    let breadString = `
        <h5>Bread</h5>
        <ul>
    `;
    for (let i = 0; i < breadArr.length; i++) {
        breadString +=`
            <div class="custom-control custom-switch">
            <input type="radio" name="breads" class="custom-control-input breadItem" id="${breadArr[i].id}" required>
            <label class="custom-control-label" for="${breadArr[i].id}">${breadArr[i].type}</label>
            </div>
        `
    }
    breadString += `</ul>`
    utilities.printToDom('breadDiv', breadString);
};

export default { printBreadList, getBreadSelection };