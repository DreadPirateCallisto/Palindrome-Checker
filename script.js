const btn = document.getElementById('check-btn');
const inputElement = document.getElementById('text-input')

btn.addEventListener('click', function() {
    const inputValue = inputElement.value;

    if (inputValue === '') {
        alert('Please input a value');
    } else {
        palindromeChecker(inputValue);
    }
})

function strip(inputValue) {
    const lower = inputValue.toLowerCase();
    const array = lower.split('');
    const nonAlphanumericRegex = /[^a-zA-Z0-9]/;
    let newText = '';

    for (let i = 0; i < array.length; i++) {
        if (!nonAlphanumericRegex.test(array[i])) {
            newText += array[i];
        }
    }

    return newText;
}

function palindromeChecker(inputValue) {
    const textToCheck = strip(inputValue);
    const newText = textToCheck.split('').reverse().join('');
    const displayText = document.getElementById('result');
    if (textToCheck === newText) {
        displayText.innerHTML = `<strong>${inputValue}</strong> is a palindrome.`;
    } else {
        displayText.innerHTML = `<strong>${inputValue}</strong> is not a palindrome.`;
    }
}