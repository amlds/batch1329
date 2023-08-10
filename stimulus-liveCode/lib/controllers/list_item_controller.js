import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = [
      'item', 
      "inputText", 
      "buttonSave", 
      "buttonEdit", 
      'name'
    ]

  delete() {
    this.itemTarget.remove()
  }

  update() {
    this.inputTextTarget.classList.remove('d-none')
    this.inputTextTarget.value = this.nameTarget.innerText
    this.buttonSaveTarget.classList.remove('d-none')
    this.buttonEditTarget.classList.add('d-none')
    this.nameTarget.classList.add('d-none')
  }

  save() {
    this.nameTarget.innerText = this.inputTextTarget.value
    this.inputTextTarget.classList.add('d-none')
    this.buttonSaveTarget.classList.add('d-none')
    this.buttonEditTarget.classList.remove('d-none')
    this.nameTarget.classList.remove('d-none')
  }
}
