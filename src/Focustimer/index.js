import states from "./states.js"
import * as events from "./events.js"
import * as timer from "./timer.js"

export function start(minutes, seconds) {
  states.minutes = minutes
  states.seconds = seconds

  timer.updateDisplay()

  events.registerSeasons()
}
