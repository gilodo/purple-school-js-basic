// Условие
const userLanguage = "en";
const userLanguageLowerCase = userLanguage.toLowerCase();

switch (userLanguageLowerCase) {
  case "en":
    alert("Good afternoon!");
    break;
  case "de":
    alert("Gutten tag!");
    break;
  case "ru":
    alert("Добрый день!");
    break;
  default:
    alert("Sorry! Have not learned your language yet!");
}
