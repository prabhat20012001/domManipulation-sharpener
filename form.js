const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msj = document.querySelector('.msj');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

// Retrieve data from local storage
let userData = JSON.parse(localStorage.getItem('userData')) || [];

// Render the existing data when the page loads
renderUserList();

function onSubmit(e) {
    e.preventDefault();
    if (nameInput.value == '' || emailInput.value == '') {
        msj.classList.add('error');
        msj.innerHTML = 'Please enter all fields';
        setTimeout(() => msj.remove(), 1000);
    } else {
        const userDataItem = {
            name: nameInput.value,
            email: emailInput.value,
        };

        // Add the new data to the array
        userData.push(userDataItem);

        // Store the updated object as a JSON string in local storage
        localStorage.setItem('userData', JSON.stringify(userData));

        nameInput.value = '';
        emailInput.value = '';

        // Render the updated user list
        renderUserList();
    }
}

function renderUserList() {
    // Clear the existing user list
    userList.innerHTML = '';

    // Render each user item with delete and edit buttons
    userData.forEach((userDataItem, index) => {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${userDataItem.name}: ${userDataItem.email}`));

        const editButton = document.createElement('button');
        editButton.innerHTML = 'Edit';

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'Delete';

        // Add an event listener to edit the data when the edit button is clicked
        editButton.addEventListener('click', () => {
            // Set the input fields with the existing user data for editing
            nameInput.value = userDataItem.name;
            emailInput.value = userDataItem.email;

            // Remove the user data from the array
            userData.splice(index, 1);

            // Update local storage with the modified array
            localStorage.setItem('userData', JSON.stringify(userData));

            // Render the updated user list
            renderUserList();
        });

        // Add an event listener to delete the data when the delete button is clicked
        deleteButton.addEventListener('click', () => {
            userData.splice(index, 1);
            localStorage.setItem('userData', JSON.stringify(userData));
            renderUserList();
        });

        li.appendChild(editButton);
        li.appendChild(deleteButton);
        userList.appendChild(li);
    });
}