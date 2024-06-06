// Шифрование
function crypto(password) {
    const splitPassword = password.split('');                                             // Разбиваем пароль на буквы
    // alert(`Пароль разбитый на символы ${splitPassword}`);
    [firstLetter, secondLetter, ...otherLetters] = splitPassword;
    // alert(`Первая буква пароля ${firstLetter}, вторая буква пароля ${secondLetter}, остальные буквы пароля ${otherLetters}`);
    const temp = secondLetter;
    secondLetter = firstLetter;
    firstLetter = temp;
    const cryptoPass = firstLetter + secondLetter + otherLetters.reverse().join('');
    alert(`Зашифрованный пароль ${cryptoPass}`);
    return cryptoPass;
}
const cryptoPassword = crypto('password');

// Дешифрование
function check(cryptoPassword, password) {
    const splitCryptoPass = cryptoPassword.split('');
    [firstLetter, secondLetter, ...otherLetters] = splitCryptoPass;
    const temp = firstLetter;
    firstLetter = secondLetter;
    secondLetter = temp;
    const pass = firstLetter + secondLetter + otherLetters.reverse().join('');
    if (pass === password) {
        alert('true');
    } else {
        alert('false');
    }
}
check(cryptoPassword, 'password');