const apiImg = 'https://loremflickr.com/320/240/'
const GARAGE = "autofixe";
const garageUrl = `https://wagon-garage-api.herokuapp.com/${GARAGE}/cars`
const carsList = document.querySelector('.cars-list')
const carForm = document.querySelector('.car-form')

export const getCars = () => {
  fetch(garageUrl)
    .then(response => response.json())
    .then((data) => displayCars(data))
}

export const postCar = (newCar) => {
  fetch(garageUrl, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newCar)
  })
    .then(response => response.json())
    .then((data) => getCars())
}

export const deleteCar = (id) => {
  fetch(`https://wagon-garage-api.herokuapp.com/cars/${id}`, {
  method: 'DELETE'
  })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      getCars();
    })
}

const displayCars = (cars) => {
  carsList.innerHTML = '';
  cars.forEach((car) => {
    carsList.insertAdjacentHTML('beforeend', cardCar(car))
  });

  const btnDeleteCar = document.querySelectorAll('#deleteCar');
  createBtnDelete(btnDeleteCar)
}

const createBtnDelete = (btnDeleteCar) => {
  btnDeleteCar.forEach(btn => {
    btn.addEventListener('click', (event) => {
      deleteCar(event.target.dataset.id)
    })
  });
}

const cardCar = (car) => {
  return `
    <div class="car">
      <div class="car-image">
        <img src="${apiImg}${car.brand}${car.model}" />
      </div>
      <div class="car-info">
        <h4>${car.brand} ${car.model}</h4>
        <p><strong>Owner:</strong> ${car.owner}</p>
        <p><strong>Plate:</strong> ${car.plate}</p>
        </div>
        <button id='deleteCar' data-id=${car.id}>delete</button>
    </div>
  `
}

const createNewCar = (event) => {
  const brand = event.target[0].value
  const model = event.target[1].value
  const plate = event.target[2].value
  const owner = event.target[3].value

  const newCar = {
    "brand": brand,
    "model": model,
    "owner": owner,
    "plate": plate
  }

  postCar(newCar)
}

carForm.addEventListener('submit', (event) => {
  event.preventDefault();
  createNewCar(event);
})


getCars()