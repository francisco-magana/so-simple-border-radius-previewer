const shape = document.getElementById('shape');

const allBordersPlusButton = document.getElementById('general-button-plus');
const allBordersMinusButton = document.getElementById('general-button-minus');
const upLeft = document.getElementById('up-left');
const upRight = document.getElementById('up-right');
const downLeft = document.getElementById('down-left');
const downRight = document.getElementById('down-right');
const resetButton = document.getElementById('reset');

allBordersPlusButton.addEventListener('click', ()=> {
    changeAllBorders('plus')
});

allBordersMinusButton.addEventListener('click', ()=> {
    changeAllBorders('minus')
});

function changeAllBorders(type){
    let newBorderRadius
    const style = window.getComputedStyle(shape);
    let actualBorderRadius = style.getPropertyValue('border-radius');
    actualBorderRadius = parseInt(actualBorderRadius.substr(0, actualBorderRadius.length - 2), 10);
    if(type === 'plus'){
        newBorderRadius = actualBorderRadius + 1;
    }else {
        newBorderRadius = actualBorderRadius - 1;
    }
    upLeft.value = newBorderRadius;
    upRight.value = newBorderRadius;
    downLeft.value = newBorderRadius;
    downRight.value = newBorderRadius;
    if(newBorderRadius <= 100 && newBorderRadius >= 0){
        newBorderRadius = `${newBorderRadius}px`;
        console.log(newBorderRadius)
        shape.style.setProperty('border-radius', newBorderRadius);
    }else{
        Swal.fire('You reached the limit of the border radius');
    }
}

upLeft.addEventListener('change', (e) => {

    if(e.target.value > 100 || e.target.value < 0){
        e.preventDefault();
    }

    let value = upLeft.value
    shape.style.setProperty('border-top-left-radius', `${value}px`);
});

upRight.addEventListener('change', () => {
    let value = upRight.value;
    shape.style.setProperty('border-top-right-radius', `${value}px`);
});

downLeft.addEventListener('change', () => {
    let value = downLeft.value;
    shape.style.setProperty('border-bottom-left-radius', `${value}px`);
});

downRight.addEventListener('change', () => {
    let value = downRight.value;
    shape.style.setProperty('border-bottom-right-radius', `${value}px`);
});

resetButton.addEventListener('click', () => {
    shape.style.setProperty('border-radius', '0px');
});