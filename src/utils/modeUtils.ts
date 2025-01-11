export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}
export function checkTheme() : Theme {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return Theme.LIGHT
  } else {
    return Theme.DARK
  }
}
