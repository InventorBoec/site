document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    var searchTerm = document.getElementById('search-input').value;
    // Выполните действия с поисковым запросом, например, отправьте его на сервер или обработайте на клиентской стороне
    console.log('Выполняется поиск: ' + searchTerm);
})

