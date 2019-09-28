const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const clearSelection = (e, topping) => {
    const eClass = e.target.classList.value;
    console.log(eClass);
    if (eClass.includes('none')){
        for (let i = 0; i < topping.length; i++){
            console.log(topping[i].id);
            document.getElementById(topping[i].id).checked = false;
        }
    } else {
        document.getElementById(`no-${topping[0].id}`).checked = false;
    }

};

export default { printToDom, clearSelection };