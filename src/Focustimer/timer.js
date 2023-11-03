import states from "./states.js"
import * as el from "./elements.js"

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? states.minutes

  seconds = seconds ?? states.seconds //*operator nullish coalesing

  el.minutes.textContent = String(minutes).padStart(2, "0")

  el.seconds.textContent = String(seconds).padStart(2, "0")
}
