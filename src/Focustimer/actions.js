import states from "./states.js"
import * as music from "./audios.js"

export function toggleSoundClass(className, objetosStates) {
  states[objetosStates] = document.documentElement.classList.toggle(className)
}

export function soundTree() {
  toggleSoundClass("soundTree", "isSoundTree")

  music.forestSound.play()

  if (states.isSoundTree === false) {
    music.forestSound.pause()
  }

  // Object.keys(states).forEach((key) => {
  //   if (key !== "isSoundTree") {
  //     states[key] = false
  //   }
  // })
}

export function soundCloud() {
  toggleSoundClass("soundCloud", "isSoundCloud")

  music.cloudSound.play()

  if (states.isSoundCloud === false) {
    music.cloudSound.pause()
  }
}

export function soundStore() {
  toggleSoundClass("soundStore", "isSoundStore")

  music.coffeSound.play()

  if (states.isSoundStore === false) {
    music.coffeSound.pause()
  }
}

export function soundFire() {
  toggleSoundClass("soundFire", "isSoundStore")

  music.fireSound.play()

  if (states.isSoundFire === false) {
    music.fireSound.pause()
  }
}

// as ações abaixo será referente aos botões do Timer
// the actions below will refer to the Timer buttons
