import { seasons } from "./elements.js"
import { controls } from "./elements.js"
import * as actions from "./actions.js"

export function registerSeasons() {
  seasons.addEventListener("click", (event) => {
    const action = event.target.dataset.action

    if (typeof actions[action] != "function") {
      return
    }
    actions[action]()
  })
}

export function registerControls() {
  controls.addEventListener("click", (event) => {
    const action = event.target.dataset.action

    if (typeof actions[action] != "function") {
      return
    }
    actions[action]()
  })
}
