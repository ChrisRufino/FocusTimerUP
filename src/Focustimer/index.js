import states from "./states.js"
import * as events from "./events.js"

export function start(minutes, seconds) {
  start.minutes = minutes
  start.seconds = seconds

  events.registerSeasons()
}
