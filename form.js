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

    if (userData.length === 0) {
      // If no users exist, add a new user
      userData.push(userDataItem);
      axios
        .post(
          "https://crudcrud.com/api/35408b6387144f4e9d14845fac46ebe6/appointmentData",
          userDataItem
        )
        .then(response => {
          nameInput.value = '';
          emailInput.value = '';
          renderUserList();
        })
        .catch(err => {
          console.error(err);
        });
    } else {
      // Check if there is an "Edit" button (indicating an existing user) and update the user
      if (document.querySelector('#updateButton')) {
        // Remove the "Update" button after updating the user
        document.querySelector('#updateButton').remove();
        renderUserList(); // Render the user list
      } else {
        // Add the new data to the array if it's a new user
        userData.push(userDataItem);
        axios
          .post(
            "https://crudcrud.com/api/35408b6387144f4e9d14845fac46ebe6/appointmentData",
            userDataItem
          )
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

function updateUser(userId, userDataItem) {
    axios.put(`https://crudcrud.com/api/35408b6387144f4e9d14845fac46ebe6/appointmentData/${userId}`, userDataItem)
      .then(response => {
        // Handle the successful update response (if needed)
        console.log("User updated successfully", response);
      })
      .catch(err => {
        console.error(err);
      });
  }
  

function renderUserList() {
  // Clear the existing user list
  userList.innerHTML = '';

  // Render each user item with edit and delete buttons
  userData.forEach((userDataItem, index) => {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${userDataItem.name}: ${userDataItem.email}`));

    const editButton = document.createElement('button');
    editButton.innerHTML = 'Edit';
    editButton.addEventListener('click', () => {
      // Populate the registration form with the user's details for editing
      nameInput.value = userDataItem.name;
      emailInput.value = userDataItem.email;
      // Add an "Update" button for submitting changes
      myForm.innerHTML += '<button id="updateButton">Update</button>';
      // Add an event listener for the "Update" button
      const updateButton = document.querySelector('#updateButton');
      updateButton.addEventListener('click', () => {
        // Update the user details in the array
        userData[index].name = nameInput.value;
        userData[index].email = emailInput.value;
        // Send a PUT request to update the user details on the API
        updateUser(userDataItem._id, userData[index]);
        // Render the updated user list
        renderUserList();
      });
    });

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
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
