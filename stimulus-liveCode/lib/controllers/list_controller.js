import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['input', 'list', 'li']

  connect() {
    console.log("list controller connected")
  }

  createLi(nameElement) {
    return `
      <li 
        class="list-group-item d-flex justify-content-between 
        align-items-center" 
        data-controller="list-item"
        data-list-item-target="item"
        data-list-target='li'
      >
        <div data-list-item-target='name'>${nameElement}</div>
        <input data-list-item-target="inputText" type="text" class="form-control d-none" value="Nom de l'item">
        <button 
          data-list-item-target="buttonSave" 
          type="button" 
          class="btn btn-sm btn-light d-none"
          data-action="click->list-item#save"
        >
          Save
        </button>

        <div>
          <button 
            type="button" 
            class="btn btn-sm btn-light"
            data-action="click->list-item#update"
            data-list-item-target="buttonEdit"
          >edit</button>
          <button 
            type="button" 
            class="btn btn-sm btn-danger" 
            data-action="click->list-item#delete"
          >remove</button>
        </div>
      </li>
    `
  }

  addItem(event) {
    event.preventDefault()
    this.listTarget.insertAdjacentHTML('beforeEnd', this.createLi(this.inputTarget.value))
    this.inputTarget.value = ""
  }

  removeAllList() {
    this.liTargets.forEach(li => {
      li.remove();
    });
  }
}
