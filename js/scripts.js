const btnDec = document.querySelector('button');
const result = document.querySelector('#result');

function inverteTexto(str) {
    // const regex = /^[a-zA-Z\s]+$/
    // const cleandedStr = str.replace(regex, '').toLowerCase();
    const letras = str.split(' ');
    const reversedWords = letras.map(word =>
    word.toLowerCase().split('').reverse().join(''));

    return reversedWords.join(' ');
};

btnDec.addEventListener('click', () => {
    const inputText = document.querySelector('#input-text');
    const result = inverteTexto(inputText.value);
    document.querySelector('#result').innerText = `${result}`
})