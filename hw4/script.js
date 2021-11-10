'use strict'

let arr = ['hello', 'world', 23, '23', null, undefined, {}, [], true, false, 1n, 2n, 13, 'str'];

let cleaner = null;
while(true) {
    cleaner = prompt('Введите тип даных, которые необходимо удалить в формате: string, boolean, number, object, undefined, bigint');
    if (cleaner == 'string' || cleaner == 'boolean' || cleaner == 'number' || cleaner == 'object' || cleaner == 'undefined' || cleaner == 'bigint' || cleaner === null) break;
}

function filterBy(innArray, delType) {
    let resultArr = innArray.filter(item => typeof item !== delType)

    return console.log(resultArr);
}

filterBy (arr, cleaner);

