import { Application, Controller } from 'stimulus';
window.Stimulus = Application.start()

import listController from "./controllers/list_controller.js"
Stimulus.register("list", listController)

import listItemController from "./controllers/list_item_controller.js"
Stimulus.register("list-item", listItemController)
