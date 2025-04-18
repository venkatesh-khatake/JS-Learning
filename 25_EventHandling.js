// let greetBtn = document.getElementById("greet");
// greetBtn.addEventListener("click",()=>{
//     let name = document.getElementById("name").value;
//     document.getElementById('greeting').innerText = `Hello ${name}! welcome`;
// });

// let box = document.getElementsByClassName('box')[0];

// box.addEventListener('mouseover',() =>{
//     box.style.backgroundColor = "green";
// });

// box.addEventListener('mouseout',() =>{
//     box.style.backgroundColor = 'blue';
// })

// const input = document.getElementById("myInput");

// input.addEventListener("keydown", () => {
//   console.log("Key pressed down");
// });

// input.addEventListener("keyup", () => {
//   console.log("Key released");
// });




// const btn = document.getElementById("btn");

// btn.addEventListener("click", (event) => {
//   console.log("Event Object: ", event);
//   console.log("Clicked Element: ", event.target);
// });
// =========================================================

// ✅ Task:
// Create a <div> box. When you hover on it,
//  the background should turn yellow, and when you 
// move the mouse away, it should turn back to white.

// let box = document.getElementsByClassName("box")[0];

// box.addEventListener('mouseover',()=>{
//     box.style.backgroundColor = "yellow";
// })

// box.addEventListener('mouseout',()=>{
//     box.style.backgroundColor = "white";
// })


let btns  = document.getElementsByClassName('btn');

for(let btn of btns){
    btn.addEventListener('click',(e)=>{
        alert(`${e.target.textContent} clicked`);
    })
}


document.getElementById('para').addEventListener('mouseover',()=>{
    document.getElementById('para').innerText = "Thanks for Hovering";
})

document.getElementById('para').addEventListener('mouseout',()=>{
    document.getElementById('para').innerText = "Hover me";
})


// ===============================

let input = document.getElementById('input');

input.addEventListener('input', (event) =>{
    document.getElementById('text').innerText = event.target.value;
})