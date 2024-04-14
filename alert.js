//Задание 6.6.1

let a = 'Довод';
let aLow = a.toLowerCase();
let b = '';
for(let i = aLow.length - 1; i >= 0; i -= 1) {
    b += aLow[i];
};
if(aLow === b) {
    console.log(`Слово ${a} является палиндромом`);
} else {
    console.log(`Слово ${a} не является палиндромом`);
}


//Задание 6.6.2

const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ];
let arrNew = new Set(arr);
let arrNewArr = Array.from(arrNew);
console.log(arrNewArr);



//Задание 6.6.3


let userNum = +prompt('Введите число');
let arrUse = [];
for(let i = 0; i <= userNum; i++) {
    arrUse.push(i);
};
console.log(arrUse);



//Задание 6.6.4

let icon = ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x'];
let quarArr = [];
let index = 0;
for(let i = 0; i < 3; i++) {
    quarArr[i] = [];
    for(let x = 0; x < 3; x++) {
        quarArr[i] [x] = icon[index];
        index++;
    };
};

let res = '';
for(let i = 0; i < quarArr.length; i++) {
    for(let z = 0; z < quarArr[i].length; z++) {
        res += `${quarArr[i][z]}`;
    };
    res += '\n';
};
console.log(res);



//Задание 6.6.5

const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};
let arrValues = [];
for(let key in obj) {
    arrValues.push(obj[key])
}
console.log(arrValues)




