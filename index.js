// click counter
// count=
// timer= 5
// button=> for clicks, log=> click1
// textarea=> to show clicks
// clear the text area
// return count back to 0
// timer shoul be reset
let counter = 0;
let timer = 5;
let intervalId = null;

const timerbtn = document.getElementById('timer');
const countValue = document.getElementById("counter-value");
const clearbtn = document.getElementById('clearbutton');
const clickbutton = document.getElementById('clickbutton');
const textarea = document.getElementById("clicksTextArea");


//To increase counter
clickbutton.addEventListener('click', () => {
    timer = 5
    counter++;
    countValue.innerHTML = counter;
    textarea.value += `✅Click ${counter}😊\n`;
    clearInterval(intervalId)
    intervalId = setInterval(function () {
        if (timer === 0) {
            clearInterval(intervalId)
            counter = 0
            textarea.value = 'GAMEOVER😵‍💫'
            countValue.innerHTML = counter;
            setTimeout(function () {
                textarea.value = ''
               

            }, 500)
        }
        if (timer > 0) {
            timer--
            countValue.innerHTML = counter;
            // textarea.value = ''
        }
    }, 400)

});

// To clear clickbutton back to 0
// clearbtn.addEventListener('click', () => {
//     counter = 0;
//     clearInterval(intervalId);
//     // timer = 5;
//     countValue.innerHTML = counter;
//     textarea.value = `NOTHING TO SEE HERE😒`;
// });




