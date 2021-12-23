/* Hide menu */

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector("header").style.top = "0";
    } else {
        document.querySelector("header").style.top = "-3.5rem";
    }
    return prevScrollpos = currentScrollPos;
}

/* Time Experience */

const expYear = document.querySelector('.date-exp')
const myAge = document.querySelector('#myAge')
const atualYear = new Date().getFullYear()

function countTime(el, atualYear, initialYear){
    const timeDiff = atualYear - initialYear
    return el.innerHTML = timeDiff
}

countTime(expYear, atualYear, 2008)
countTime(myAge, atualYear, 1984)


