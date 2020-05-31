// 3.1
const arr = [1, 2, 3, 4, 5];

const res = arr.map(item => item + 10);

console.log(res);

// 3.2
const users = { name: 'Diego', age: 23 };

/*
function showAge(user) {
 return user.age;
}
*/
const showAge = item => item.age;

console.log(showAge(users));

// 3.3
const name = 'lucio';
const age = 25;

const showUser = (name = 'Diego', age = 26) => ({name,age});

console.log(showUser(name, age));
console.log(showUser(name));


// 3.4 
const promise = () => new Promise(resolve, reject => resolve());

console.log(promise);