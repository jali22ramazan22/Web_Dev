let user = undefined;
let password = undefined;

user = prompt("Введите свой логин", '');

if(user == 'Админ'){
    password = prompt("Введите пароль", "");
}
else if(user == '' || user == null){
    alert("Отменено");
}
else{
    alert("Я вас не знаю");
}


(password == "Я главный!") ?  alert("Здравствуйте!") : alert("Неверный Пароль");
