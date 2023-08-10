import { Application, Controller } from 'stimulus';
import DisableButtonController from "./controllers/disable_button_controller.js"
import MoviesController from './controllers/movies_controller.js'

window.Stimulus = Application.start()

Stimulus.register("disable-button", DisableButtonController)
Stimulus.register('movies', MoviesController)

