let $ = document;

let hourElem = $.getElementById('Hour');
let minutesElem = $.getElementById('Minutes');
let secondElem = $.getElementById('Second');

let hourNum = 12;
let minutesNum = 59;
let secondNum = 59;

// Time Magic

function timeMagic () {
    let intervalValue = setInterval(() => {
        if (secondNum <= 0 && minutesNum <= 0 && hourNum <= 0) {
            clearInterval(intervalValue)
        }

        if (secondNum < 10) {
            secondNum = '0'+secondNum;
        }

        if (secondNum === '0-1') {
            minutesNum--;
            secondNum = 59;
        }

        if (minutesNum <= -1) {
            hourNum--;
            minutesNum = 59;
        }

        if (hourNum < 10) {
            hourNum = String(hourNum)
            if (hourNum.indexOf('0') !== 0) {
                hourNum = '0'+hourNum;
            }
            if (hourNum === '0') {
                hourNum = '0'+hourNum;
            }
        }

        if (minutesNum < 10) {
            minutesNum = String(minutesNum)
            if (minutesNum.indexOf('0') !== 0) {
                minutesNum = '0'+minutesNum;
            }
            if (minutesNum === '0') {
                minutesNum = '0'+minutesNum;
            }
        }
        
        InsertInformation (hourNum , minutesNum , secondNum);

        secondNum--;
    }, 1000);
}

function InsertInformation (hour , minutes , second) {
    hourElem.innerHTML = hour;
    minutesElem.innerHTML = minutes;
    secondElem.innerHTML = second;
}

timeMagic();

// Time Magic