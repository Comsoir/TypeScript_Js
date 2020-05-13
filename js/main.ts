
// const getBtn: any = document.querySelector('button');
// const getInput: any = document.querySelector('.age');
//
// getBtn.onclick = () => {
//     let value = +getInput.value;
//     // if (value >= 16 && value < 60) {
//     //     console.log('welcome');
//     // } else if (value > 60) {
//     //     console.log('Ты дурак?')
//     // }
//     // else {
//     //     console.log('Ты не пройдешь.')
//     // }
//     switch (value) {
//         case 15:
//             console.log('Еще год потерти')
//             break;
//         case 16:
//             console.log('GG')
//             break;
//         default:
//             console.log('ookkk');
//     }
// }


// const getInput: any = document.querySelector('.numRoom');
// const getButton: any = document.querySelector('button');
// const getText: any = document.querySelector('.text')
//
// getButton.onclick = () => {
//     let myValue: any = +getInput.value;
//     console.log(myValue);
//     if (myValue >= 1 && myValue <= 32 ) {
//         getText.innerHTML = '1';
//     } else if (myValue >= 33 && myValue <= 43 ) {
//         getText.innerHTML = '2';
//     } else if (myValue >= 44 && myValue <= 64 ) {
//         getText.innerHTML = '3';
//     } else {
//         getText.innerHTML = '0';
//     }
// } //решено
// const getFirstInput: any = document.querySelector('.firstInput');
// const getSecondInput: any = document.querySelector('.secondInput');
// const getSelect: any = document.querySelector('select');
// const getBtn: any = document.querySelector('button');
// const getText: any = document.querySelector('.text')
//
// getBtn.onclick = () => {
//     let firstValue: number = +getFirstInput.value;
//     let secondValue: number = +getSecondInput.value;
//     let SelectOption: string = getSelect.options[getSelect.selectedIndex].value;
//
//     if (SelectOption == "+") {
//         getText.innerHTML = firstValue + secondValue;
//     } else if (SelectOption == "-") {
//         getText.innerHTML = firstValue - secondValue;
//     } else if (SelectOption == "/") {
//         getText.innerHTML = firstValue / secondValue;
//     } else if (SelectOption == "*") {
//         getText.innerHTML = firstValue * secondValue;
//     } else {
//         getText.innerHTML = 'пусто'
//     }
// }

// document.querySelector('button').onclick = () => {
//     const getInput: any = document.querySelector('#one');
//     document.querySelector('button').style.backgroundColor = getInput.value;
// };
// const getBtn: any = document.querySelector('.change');
//
// getBtn.onclick = () => {
//     let getInput: any = document.querySelector('#newCheckbox')
//     if(getInput.checked) {
//         console.log('Нажат')
//     } else {
//         console.log('Не нажат')
//     }
// }

/*************** Работа с формой input[type: password]
const getInput: any = document.querySelector('#inputPass');
const getBtn: any = document.querySelector('.button');
const getFirstItem: any = document.querySelector('.textFirst')
const getSecondItem: any = document.querySelector('.textSecond')

getBtn.onclick = () => {
    let getInputValue: any = getInput.value;
    console.log(getInputValue);
    getFirstItem.innerHTML = getInputValue;
    if (getInputValue.length >= 6) {
        getSecondItem.innerHTML = 1;
    } else {
        getSecondItem.innerHTML = 0;
    }
}
*/



/*************** Работа с формой input[type: radio]
const getInput: any = document.querySelector('#radioInput');
const getBtn: any = document.querySelector('.radioBtn');
const getSpan: any = document.querySelector('.radioText');

getBtn.onclick = () => {
    let getValue: number = getInput.value;
    let getInputCheck : boolean = getInput.checked;
    if (getInputCheck == true) {
        getSpan.innerHTML = getValue;
    } else {
        getSpan.innerHTML = 0;
    }
}
 */

/************ Работа с формой input[type: radio]
const getInput: any = document.querySelector('#inputRange');
const getText: any = document.querySelector('.inputText');

getInput.oninput = () => {
    getText.innerHTML = getInput.value;
}
 */

/************* Работа с text-area
const getTextArea: any = document.querySelector('#areaOne');
const getInput: any = document.querySelector('#areaInput');
const getBtn: any = document.querySelector('.areaBtn');
const getText: any = document.querySelector('.areaText');

getBtn.onclick = () => {
    let getInputValue: string = getInput.value;
    getText.innerHTML = getInputValue;
    getTextArea.value = getInputValue;
}
 */

/************ Работа с select(value)
const getSelect: any = document.querySelector('#selectOne');
const getText: any = document.querySelector('.selectText');


getSelect.onchange = () => {
    getText.innerHTML = getSelect.options[getSelect.selectedIndex].value;
};
 */

/****************** Работа с циклом For(по клику записывать 50 значений в div)
const getBtn: any = document.querySelector('.forBtn');
const getText: any = document.querySelector('.forText')

getBtn.onclick = () => {
    for (let i: number = 1; i < 51; i++ ) {
        getText.innerHTML += i + '   ';

    }
}
 */

/****************** Работа с циклом For(по клику записывать 122 значений в div(итерация 2))
const getBtn: any = document.querySelector('.forBtn');
const getText: any = document.querySelector('.forText')

getBtn.onclick = () => {
    for (let i: number = 2; i < 124; i = i + 2 ) {
        getText.innerHTML += i + '   ';

    }
}
 */

/***************** Работа с циклом For(от 25 до 7 c шагом 1.)
const getBtn: any = document.querySelector('.forBtn');
const getText: any = document.querySelector('.forText');

getBtn.onclick = () => {
    for(let steps: number = 25; steps > 0; steps--) {
        console.log(steps);
        getText.innerHTML +=steps + '   ';
        if (steps == 7) break;
    }
}
 */

/***************** Работа с циклом For(для инпута)

const getInput:any = document.querySelector('#forInput');
const getBtn:any = document.querySelector('.forBtn');
const getText: any = document.querySelector('.forText');

getBtn.onclick = () => {
    let getValue: any = getInput.value;
    let text: string = '';
    for (getValue; getValue > -1; getValue--) {
        text += getValue + "  ";
    }
    getText.innerHTML = text;
    console.log(getValue);
}
 */
