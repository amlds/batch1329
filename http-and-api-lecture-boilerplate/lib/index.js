// TODO - Fetch an activity with the Bored API - Let's psuedocode!
const url = 'https://www.boredapi.com/api/activity/'

const button = document.querySelector('.btn');
const activity = document.querySelector('#activity')

const putInformation = (data, balise) => {
  balise.innerText = data
}

button.addEventListener('click', () => {
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      putInformation(data.activity, activity)
    });
})