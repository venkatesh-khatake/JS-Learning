const element = document.getElementById('demo');

console.log(element.innerText);
console.log(element.innerHTML);
console.log(element.textContent);

const msg = document.getElementById('message');

// msg.innerText = "Hi! Venkatesh";

// msg.innerHTML = '<i>HI</i> <b>Venkatesh</b>!';

msg.textContent = '<i>Hi</i> <b>Venkatesh</b>';