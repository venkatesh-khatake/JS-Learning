// const element = document.getElementById('demo');

// console.log(element.innerText);
// console.log(element.innerHTML);
// console.log(element.textContent);

// const msg = document.getElementById('message');

// // msg.innerText = "Hi! Venkatesh";

// // msg.innerHTML = '<i>HI</i> <b>Venkatesh</b>!';

// msg.textContent = '<i>Hi</i> <b>Venkatesh</b>';



// =======================================
// let newDiv = document.createElement('div');
// newDiv.style.width = '200px';
// newDiv.style.height = '200px';
// newDiv.style.backgroundColor = 'crimson';

// document.body.appendChild(newDiv);

// document.body.removeChild(newDiv)
// ------------------------------------------

// Ek button banao jiska label ho "Change Image"

// Ek <img> tag banao bina src ke initially.

// Jab button pe click karo, image ka src set ho jaye kisi bhi image link se.

// Aur alt text bhi set karo.

// Console me us image ka src aur alt print karo using getAttribute().

// let changeBtn = document.getElementById('change');
// let img = document.getElementById('image');

// changeBtn.addEventListener('click',()=>{
//     img.setAttribute('src','https://images.unsplash.com/photo-1744198275588-06648407b39a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D')
//     img.setAttribute('alt','sample image');
//     img.setAttribute('width','300')
//     img.setAttribute('height','300')

//     console.log(img.getAttribute('src'));
// })


// function toggleBox() {
//     const box = document.getElementById("myBox");
//     box.classList.toggle("active");
//   }


//   function togglePara() {
//     const p = document.getElementById("para");
//     p.classList.toggle("hidden");
//   }

//  let box = document.getElementById('myBox');
//  let style = getComputedStyle(box);

//  console.log(style.color)
//  console.log(style.backgroundColor)
//  console.log(style.padding)


//  function toggleMode(){
//     document.querySelector('body').classList.toggle('dark')
//  }

 let google = document.getElementsByTagName('a')[0];

 google.addEventListener('click',(e) =>{
  e.preventDefault();
  console.log("You cannot open google")
 })


 let input = document.getElementById("keyInput");

  input.addEventListener("keydown", function (event) {
    console.log("Key Pressed: " + event.key);
  });

  input.addEventListener("keyup", function () {
    console.log("Key Released");
  });