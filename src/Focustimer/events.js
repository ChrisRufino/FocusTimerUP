import { seasons } from "./elements.js"

export function registerSeasons() {
  seasons.addEventListener("click", (event) => {
    console.log(event.target)
  })
}
