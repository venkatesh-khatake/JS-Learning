let h1 = document.querySelector('h1');
let btn = document.querySelector('button');
let para = document.getElementsByClassName('para')[0];
let img = document.getElementsByTagName('img')[0];
let ul = document.getElementById('ul');

btn.addEventListener('click',()=>{

    h1.innerText = "DOM revision completed"
    para.style.color = 'blue';
    para.style.fontSize = '20px';
    
    alert('button was clicked');

    
    
    img.src = "https://image-processor-storage.s3.us-west-2.amazonaws.com/images/3cf61c1011912a2173ea4dfa260f1108/halo-of-neon-ring-illuminated-in-the-stunning-landscape-of-yosemite.jpg";
})

let li = document.createElement("li");
li.innerText = "List Item 2";
ul.prepend(li);



ul.removeChild(ul.lastElementChild);

let toggleBtn = document.getElementById('toggle');

toggleBtn.addEventListener('click',()=>{
    document.body.classList.toggle('dark')
})


let inc = document.getElementById('inc');
let dec = document.getElementById('dec');

let count = 0;

let span = document.getElementsByTagName('span')[0];

inc.addEventListener('click',()=>{
    count++;
    span.innerHTML = count;
})

dec.addEventListener('click',()=>{
    count--;
        span.innerHTML = count;

})

let input = document.getElementById('input');
let output = document.getElementById('output');

input.addEventListener('input',(e)=>{
    // e.preventDefault();
    output.innerHTML = input.value;
})



let taskInput = document.getElementById('task');
let addTask = document.getElementById('add-task');
let taskContainer = document.getElementById('task-container');

addTask.addEventListener('click',(e)=>{
    e.preventDefault();
    let li = document.createElement('li');
    li.innerText = taskInput.value;

    let del = document.createElement('button');
    del.innerText = "delete";
    del.className = "";

    del.addEventListener('click',(e)=>{
        li.remove();
    })
    li.appendChild(del);

    taskContainer.appendChild(li);

})


let key = document.getElementById('key');

document.addEventListener('keydown',(e)=>{
    key.innerHTML = e.key;
})
