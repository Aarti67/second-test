var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos?_limit=25', true);
xhr.onload = function() {
    if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        var tableBody = document.querySelector('#ajaxTable tbody');
        data.forEach(function(item) {
            var row = document.createElement('tr');
            row.innerHTML = `<td>${item.id}</td><td>${item.title}</td><td>${item.completed}</td>`;
            tableBody.appendChild(row);
        });
    } else {
        console.error('Failed to load data');
    }
};
xhr.send();

$.ajax({
    url: 'https://jsonplaceholder.typicode.com/todos?_limit=25',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
        var tableBody = $('#jqueryTable tbody');
        data.forEach(function(item) {
            var row = `<tr><td>${item.id}</td><td>${item.title}</td><td>${item.completed}</td></tr>`;
            tableBody.append(row);
        });
    },
    error: function(error) {
        console.error('Failed to load data', error);
    }
});

axios.get('https://jsonplaceholder.typicode.com/todos?_limit=25')
.then(function(response) {
    var data = response.data;
    var tableBody = document.querySelector('#axiosTable tbody');
    data.forEach(function(item) {
        var row = document.createElement('tr');
        row.innerHTML = `<td>${item.id}</td><td>${item.title}</td><td>${item.completed}</td>`;
        tableBody.appendChild(row);
    });
})
.catch(function(error) {
    console.error('Error fetching data with Axios:', error);
});