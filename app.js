let data = [
    {
        name: 'Rohan',
        age: '23'
    },
    {
        name: 'Amit',
        age: '30'
    },
    {
        name: 'Isha',
        age: '22'
    },
    {
        name: 'Monika',
        age: '32'
    },
    {
        name: 'Sachin',
        age: '27'
    },
    {
        name: 'Manish',
        age: '36'
    },
];

const info = document.querySelector('#info');

let details = data.map(function(item) {
    return '<div>' + item.name +' '+ 'is ' + item.age + ' years old.' + '</div>';
});

info.innerHTML = details.join('\n');