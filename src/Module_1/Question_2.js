const users = [
    {name: 'lucio', age: '26', company: 'Rocketseat'},
    {name: 'mario', age: '19', company: 'rocketseat'},
    {name: 'diego', age: '20', company: 'facebook'}
];

console.log(users);

// 2.1  MAP
const age = users.map(function(item) {
    return item.age;
});

//const age = users.map(item => item.age); Usando ArrowFunction

console.log(age);

// 2.2 filter 
const rocketseat = users.filter(function(item) {
    if(item.company == 'Rocketseat' && item.age > 18) {
        return item;
    }
});

// Usando arrowFunction
//const rocketseat = users.filter(item => item.company === 'Rocketseat' && item.age > 18);

console.log(rocketseat);

// 2.3 find
const search = users.find(function(item) {
    return item.company == 'google';
});

//const search = users.find(item => item.company === 'google');

console.log(search);

// 2.4
const res = users.map(item => ({...item, age: item.age * 2})).filter(item => item.age <= 50);

console.log(res);

