const message = 'Hello JS!';
alert(message);

const userName = prompt('Enter Your Name');
alert ('Hello ' + userName);

const userAge = Number (prompt ('Enter your Age'));
alert('Your age is '+ userAge);

const nextAge = add(userAge, 1);
alert ('Next Year you wille be ' + nextAge);

if (userAge >= 18) {
    alert('You are adult')
} else {
    alert ('You are underaged')
}

function add (a,b) {
    const sum = a + b;
    return sum;
}