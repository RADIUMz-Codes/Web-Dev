let getId = (element) => document.getElementById(element);

var scrn = getId('scrn');
var ac = getId('ac');
var signChange = getId('sign-change');
var percent = getId('percent');
var divide = getId('divide');
var product = getId('product');
var diff = getId('diff');
var plus = getId('plus');
var calc = getId('calc');
var deci = getId('deci');
var zero = getId('zero');
var one = getId('one');
var two = getId('two');
var three = getId('three');
var four = getId('four');
var five = getId('five');
var six = getId('six');
var seven = getId('seven');
var eight = getId('eight');
var nine = getId('nine');

var exp = '';
var ans = 0;


ac.addEventListener('click', () => {
    exp = '';
    ans = 0;
    scrn.innerText = '';
});

calc.addEventListener('click', () => {
    var expVal;
    if (exp !== '') {
        try {
            expVal = eval(exp);
        }
        catch (err) {
            scrn.innerText = 'Syntax Error';
            return;
        }
        ans += expVal;
        scrn.innerText = ans;
        exp = ans;
        ans = 0;
    }
});

function ups() {
    scrn.innerText = exp;
}

percent.addEventListener('click', () => {
    exp += '*0.01';
    ups();
});

divide.addEventListener('click', () => {
    exp += '/';
    ups();
});

product.addEventListener('click', () => {
    exp += '*';
    ups();
});

diff.addEventListener('click', () => {
    exp += '-';
    ups();
});

plus.addEventListener('click', () => {
    exp += '+';
    ups();
});

deci.addEventListener('click', () => {
    exp += '.';
    ups();
});

one.addEventListener('click', () => {
    exp += '1';
    ups();
});

two.addEventListener('click', () => {
    exp += '2';
    ups();
});

three.addEventListener('click', () => {
    exp += '3';
    ups();
});

four.addEventListener('click', () => {
    exp += '4';
    ups();
});

five.addEventListener('click', () => {
    exp += '5';
    ups();
});

six.addEventListener('click', () => {
    exp += '6';
    ups();
});

seven.addEventListener('click', () => {
    exp += '7';
    ups();
});

eight.addEventListener('click', () => {
    exp += '8';
    ups();
});

nine.addEventListener('click', () => {
    exp += '9';
    ups();
});

zero.addEventListener('click', ()=>{
    exp +='0';
    ups();
});