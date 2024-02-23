import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import {imc, notANumber} from "./utils.js"

// variáveis

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = event => {
  event.preventDefault()

  const weight = inputWeight.value 
  const height = inputHeight.value

  const showAlertError = notANumber(weight) || notANumber(height)

  if (showAlertError) {
    AlertError.open()
    return;
  }

  AlertError.close()

  const result = imc(weight, height)
  const messagem = `Seu IMC é de ${result}`

  Modal.message.innerText = messagem
  Modal.open()
}

inputWeight.onsubmit = () => {
  AlertError.close()
}

inputHeight.onsubmit = () => {
  AlertError.close()
}


