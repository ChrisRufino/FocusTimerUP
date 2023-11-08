import states from "./states.js"
import * as el from "./elements.js"

export function countdown() {
  clearInterval(states.countdownID)
  if (!states.isRunning === true) {
    return
  }

  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  seconds--

  if (seconds < 0) {
    seconds = 59
    minutes--
  }

  if (minutes < 0) {
    updateDisplay()
    return
  }

  updateDisplay(minutes, seconds)

  states.countdownID = setTimeout(() => countdown(), 1000)
}

export function fiveMinutes() {
  states.minutes = states.minutes + 5

  el.minutes.textContent = String(states.minutes).padStart(2, "0")
}

export function removeMinutes() {
  states.minutes = states.minutes - 5

  el.minutes.textContent = String(states.minutes).padStart(2, "0")
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? states.minutes

  seconds = seconds ?? states.seconds //*operator nullish coalesing

  el.minutes.textContent = String(minutes).padStart(2, "0")

  el.seconds.textContent = String(seconds).padStart(2, "0")
}
