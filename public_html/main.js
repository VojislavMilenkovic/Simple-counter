
//setting initial value
let count = 0;

//selecting elements
let display = document.querySelector('#display');
let btns = document.querySelectorAll('.btn');


btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        //setting counter
        if (btn.classList.contains('countingup')) {
            count++;
            display.textContent = count;
        } else if (btn.classList.contains('countingdown')) {
            count--;
            display.textContent = count;
        } else {
            count = 0;
            display.textContent = count;
        }

        //setting color of value

        if (count > 0) {
            display.style.color = "green";
        }

        if (count < 0) {
            display.style.color = 'red';
        }

        if (count === 0) {
            display.style.color = '#000';

        }

    });
});
