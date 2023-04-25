// event.target, currentTarget
// const parent = document.querySelector('#parent');
// const child = document.querySelector('#child');
// const descendant = document.querySelector('#descendant');
//
// parent.addEventListener('click', event => {
//     console.log(event.currentTarget)
// })
//
// child.addEventListener('click', event => {
//     console.log(event.currentTarget)
// })
//
// descendant.addEventListener('click', event => {
//     console.log(event.currentTarget)
// })

// const elem = document.querySelector('div');
// elem?.addEventListener('click', event => {
//     console.log(event.target)
// })

// const user = {
//     name: 'Mike',
//     // hobbies: {
//     //     list: ['football', 'basketball'],
//     //     // getHobbies () {
//     //     //     console.log(this.list);
//     //     // }
//     // }
// }
//
// console.log(user.hobbies?.getHobbies())



// створити поле button, які по кліку виводять повідомлення в консоль за значеннями кнопок
// const buttonArea = document.querySelector('.buttonArea');
//
// buttonArea.addEventListener('click', event => {
//     console.log(event.target.textContent)
// })

// створити поле, де є кнопки які по кліку міняють колір
// const buttonArea = document.querySelector('.buttonArea');
//
// buttonArea.addEventListener('click', event => {
//     const currentButton = event.target;
//     currentButton.style.backgroundColor = currentButton.textContent;
// })

// створити маленький калькулятор використовуючі делегування

// let value1 = '';
// let value2 = '';
// let selectedOperator = '';
// const calculatorArea = document.querySelector('.calculator');
// const input = document.querySelector('input');
//
//
// calculatorArea.addEventListener('click', event => {
//     const selectedValue = event.target.textContent;
//
//     switch (selectedValue) {
//         case '+':
//             selectedOperator = selectedValue;
//             return;
//
//             case '-':
//             selectedOperator = selectedValue;
//             return;
//
//             case '/':
//             selectedOperator = selectedValue;
//             return;
//
//             case '*':
//             selectedOperator = selectedValue;
//             return;
//
//             case '=':
//                 doOperationWithValues();
//             return
//
//     }
//
//     if (value1 && selectedOperator && typeof +selectedValue === 'number') {
//         value2 += selectedValue;
//         return;
//     }
//
//     if (typeof +selectedValue === 'number') {
//         value1 += selectedValue;
//     }
//
//     console.log(value1)
// })
//
// function doOperationWithValues () {
//     switch (selectedOperator) {
//         case '+':
//             input.value = +value1 + +value2;
//             break;
//
//         case '-':
//             input.value = +value1 - +value2;
//             break;
//
//         case '/':
//             input.value = +value1 / +value2;
//             break;
//
//         case '*':
//             input.value = +value1 * +value2;
//             break;
//     }
//     cleanValues();
// }
//
// function cleanValues () {
//     value1 = '';
//     value2 = '';
//     selectedOperator = '';
// }

// const value1 = 10;
// const value2 = 5;
// const operator = 't';
//
// switch (operator) {
//     case '+':
//         console.log(value1 + value2);
//         break;
//     case '-':
//         console.log(value1 - value2);
//         break;
//     case '/':
//         console.log(value1 / value2);
//         break;
//     case '*':
//         console.log(value1 * value2);
//         break;
//
//     default:
//         console.log('Error')
// }
