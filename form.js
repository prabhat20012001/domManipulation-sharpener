const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msj = document.querySelector('.msj');
const userList = document.querySelector('#users');
let userData = []; // Array to store user data

myForm.addEventListener('submit', onSubmit);

// Retrieve data from CRUD CRUD API
fetch("https://crudcrud.com/api/35408b6387144f4e9d14845fac46ebe6/appointmentData")
  .then(response => response.json())
  .then(data => {
    userData = data; // Update your userData array with the retrieved data
    renderUserList();
  })
  .catch(error => {
    console.error(error);
  });

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

    // Send a POST request to the CRUD CRUD API to add the new data
    axios.post("https://crudcrud.com/api/35408b6387144f4e9d14845fac46ebe6/appointmentData", userDataItem)
      .then(response => {
        nameInput.value = '';
        emailInput.value = '';
        renderUserList();
      })
      .catch(err => {
        console.error(err);
      });
  }
}

function deleteUser(userId) {
  axios.delete(`https://crudcrud.com/api/35408b6387144f4e9d14845fac46ebe6/appointmentData/${userId}`)
    .then(response => {
      // Handle the successful deletion response (if needed)
    })
    .catch(err => {
      console.error(err);
    });
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

      // Update the data on the CRUD CRUD API by sending a PUT or PATCH request

      // Render the updated user list
      renderUserList();
    });

    // Add an event listener to delete the data when the delete button is clicked
    deleteButton.addEventListener('click', () => {
      // Delete the user data by sending a DELETE request
      deleteUser(userDataItem._id);

      // Remove the user from the array
      userData.splice(index, 1);

      // Render the updated user list
      renderUserList();
    });

    li.appendChild(editButton);
    li.appendChild(deleteButton);
    userList.appendChild(li);
  });
}
