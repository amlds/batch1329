import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['listMovies', 'input', 'card']
  static values = {
    baseUrl: String
  }

  connect() {
    console.log('Connect')
  }
  
  cardMovies(movie) {
    return `
      <li class="list-group-item border-0" data-movies-target='card'>
        <img src="${movie.Poster}" alt="" width="100" height="100%">
      </li>
    `
  }

  getMovies(event) {
    event.preventDefault();
    fetch(`${this.baseUrlValue}/?s=${this.inputTarget.value}&apikey=adf1f2d7`)
      .then(response => response.json())
      .then((data) => {
        this.listMoviesTarget.innerHTML = ''
        data.Search.forEach((movie) => {
          this.listMoviesTarget.insertAdjacentHTML('beforeend', this.cardMovies(movie))
        });
      });
  }
}
