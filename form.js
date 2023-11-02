const myForm=document.querySelector('#my-form')
const nameInput=document.querySelector('#name')
const emailInput=document.querySelector('#email')
const msj=document.querySelector(".msj")
const userList=document.querySelector("#users")


myForm.addEventListener('submit',onSubmit)

function onSubmit(e){
    e.preventDefault();
if(nameInput.value==''|| emailInput.value==''){
    msj.classList.add('error');
msj.innerHTML="please enter all fields"
setTimeout(()=>msj.remove(),1000)
}else{
const li=document.createElement('li')
li.appendChild(document.createTextNode(`${nameInput.value}:${emailInput.value}`))

userList.appendChild(li)
localStorage.setItem("name",nameInput.value)
localStorage.setItem("email",emailInput.value)

nameInput.value=''
emailInput.value=''
}

}