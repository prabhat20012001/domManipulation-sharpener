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
const userData = {
  name: nameInput.value,
  email: emailInput.value
};

// Store the user data object as a JSON string in local storage
localStorage.setItem('userData', JSON.stringify(userData));

nameInput.value=''
emailInput.value=''
}

}