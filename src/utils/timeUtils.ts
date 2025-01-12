function getDate(dt: number, timeZone: number): Date {
  const time = new Date(dt * 1000);
  const date = new Date(time.getTime() + time.getTimezoneOffset() * 60 * 1000 + timeZone * 1000);
  return date;
}

export function toLocalTime(dt: number, timeZone: number): string {
  const date = getDate(dt, timeZone);
  return `${date.getHours()}:${date.getMinutes()}`;
}
export function toLocalDayMonth(dt: number, timeZone: number): string {
  const date = getDate(dt, timeZone);
  return Intl.DateTimeFormat('en-US', {
    weekday: 'long', // 'short', 'narrow' for shorter version
    month: 'long', // 'short', 'numeric' for month number
    day: 'numeric',
  }).format(date);
}
