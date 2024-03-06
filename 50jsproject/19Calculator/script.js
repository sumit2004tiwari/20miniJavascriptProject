const buttons = document.getElementsByClassName("btn");
const input = document.getElementById("input");
let str = '';

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.textContent.trim() === 'AC') {
            str = '';
        } else if (e.target.textContent.trim() === 'Del') {
            str = str.slice(0, -1);
        } else if (e.target.textContent.trim() === '=') {
            try {
                str = eval(str);
            } catch (error) {
                str = 'Error';
            }
        } else {
            str += e.target.textContent.trim();
        }

        input.value = str;
    });
});



