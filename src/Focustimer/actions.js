import states from "./states.js"
import * as music from "./audios.js"
import * as timer from "./timer.js"

// button countdown

export function startCount() {
  states.isRunning = document.documentElement.classList.toggle("running")

  timer.countdown()
}

export function pauseCount() {
  states.isRunning === false
  document.documentElement.classList.remove("running")
  timer.updateDisplay()
}

export function moreCount() {
  timer.fiveMinutes()
}

export function minusCount() {
  timer.removeMinutes()
}

// button imagens

export function toggleSoundClass(className, objetosStates) {
  states[objetosStates] = document.documentElement.classList.toggle(className)
}

export function soundTree() {
  toggleSoundClass("soundTree", "isSoundTree")

  music.forestSound.play()

  if (states.isSoundTree === false) {
    music.forestSound.pause()
  }
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
  toggleSoundClass("soundFire", "isSoundFire")

  music.fireSound.play()

  if (states.isSoundFire === false) {
    music.fireSound.pause()
  }
}
