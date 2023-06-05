let days = 256;
let isGregorian = year > 1918;
let isLeapYear = isGregorian 
? year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0) 
 : year % 4 === 0;
    let month = Math.ceil(days / 30);
    let evenMonths = Math.floor(month / 2);
    let oddMonths = month - evenMonths;
    let febOffset = year === 1918 ? 15 : isLeapYear ? 1 : 2;
    let augOffset = month > 7 ? 1 : 0;
    let date = days - ((month - 1) * 30 + oddMonths - febOffset + augOffset) + 1;


    return `${date}.${month < 10 ? `0${month}` : month}.${year}`;
