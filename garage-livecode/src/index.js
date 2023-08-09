// Live code: https://kitt.lewagon.com/camps/108/lectures/05-Front-End%20JS/02-AJAX%20and%20APIs#/0/0

// API
const GARAGE = "autoFixe";
const garageUrl = `https://wagon-garage-api.herokuapp.com/${GARAGE}/cars`

// Elements du DOM
const carsList = document.querySelector('.cars-list');
const form = document.querySelector('.car-form');
const cars = []

// Services pour l'API
const getCars = () => {
  fetch(garageUrl)
    .then(response => response.json())
    .then((data) => {
      displayCars(data);
    });
}

const postCar = (car) => {
  fetch(garageUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(car)
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data);
    });
}

const deleteCar = (id) => {
  fetch(`https://wagon-garage-api.herokuapp.com/cars/${id}`, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data);
    });
}

// Fonctions
const cardCar = (car) => {
  return `
    <div class="car">
      <div class="car-image">
        <img src="http://loremflickr.com/280/280/Ferrari${car.brand}${car.model}" />
        </div>
        <div class="car-info">
        <h4>${car.brand} ${car.model}</h4>
        <p><strong>Owner:</strong> ${car.owner}</p>
        <p><strong>Plate:</strong> ${car.plate}</p>
        <button data-id="${car.id}" class="delete">🗑</button>
        <input type="checkbox" id="name" name="name" value="name">
      </div>
    </div>
  `;
};

const insertCar = (car) => {
  carsList.insertAdjacentHTML('beforeend', cardCar(car));  
}

const displayCars = (cars) => {
  console.log(cars);
  cars.forEach((car) => {
    insertCar(car);
    const deleteButtons = document.querySelectorAll('.delete');
    deleteButtons.forEach((button) => {
  });
}

const resetForm = () => {
  form.reset();
}

const addCar = (event) => {
  event.preventDefault();
  console.log(event.target[0].value)
  const car = {
    brand: event.target[0].value,
    model: event.target[1].value,
    owner: event.target[2].value,
    plate: event.target[3].value
  };
  postCar(car);
  insertCar(car);
  resetForm();
}

const removeCar = (event) => {
  const car = event.currentTarget;
  const id = car.dataset.id;
  deleteCar(id);
  car.remove();
}

// Listeners
form.addEventListener('submit', addCar);

// Initialisation
getCars();