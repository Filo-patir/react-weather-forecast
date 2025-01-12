export enum Theme {
  LIGHT = 'Light',
  DARK = 'Dark',
}
export function checkTheme(): Theme {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return Theme.LIGHT;
  } else {
    return Theme.DARK;
  }
}
