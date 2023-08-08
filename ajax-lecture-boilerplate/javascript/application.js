import Swal from 'sweetalert2';

console.log("Hello from JavaScript!");
const urlFakeApi = "https://reqres.in/api/register"

// const url = "https://api.github.com/users/dhh"

// fetch(url) // Make the HTTP request
//   .then(response => response.json()) // Wait for the response and parse it as JSON
//   .then((data) => {
//     console.log(data); // Wait for parsing, allowing us to manipulate the data
//   })

const form = document.querySelector('.form');

console.log(form)

form.addEventListener('submit', (event) => {
  event.preventDefault();
  loginFakeApi(event.target[0].value, event.target[1].value)
})

const loginFakeApi = (email, password) => {
  fetch(urlFakeApi, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({"email": email, "password": password})
  })
  .then((response) => {
    if (response.status === 200) {
      Swal.fire({title: 'Success', text: 'You are connected', icon: 'success'})
    } else {
      Swal.fire({title: 'Error!', text: 'Oups! Something went wrong', icon: 'error'})
    }
  })
  .then(data => console.log(data))
}