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

const userDataJSON = localStorage.getItem('userData');

// Parse the JSON string back into a JavaScript object
const userData = JSON.parse(userDataJSON) || {}; // Initialize an empty object if there's no existing data

// Create a new user object
const newUser = {
  name: nameInput.value,
  email: emailInput.value
};

// Append the new user data to the existing object
const newUserId = Object.keys(userData).length + 1;
userData[newUserId] = newUser;

// Store the updated object as a JSON string in local storage
localStorage.setItem('userData', JSON.stringify(userData));

nameInput.value=''
emailInput.value=''
}

}