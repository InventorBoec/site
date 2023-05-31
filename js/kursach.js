document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var searchTerm = document.getElementById('search-input').value;
    console.log('Выполняется поиск: ' + searchTerm);
})

