let text1='JavaScript';
let text2='Jestem świetnym programistą';

function compare(a, b) {
    if (a.length > b.length) {
        return a;
    } else {
        return b;
    }
}

console.log (compare(text1, text2));