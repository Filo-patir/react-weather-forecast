export function ToIcon(icon: string) {
  switch (icon) {
    case '01d':
      return require('../assets/images/sun.png');
    case '01n':
      return require('../assets/images/moon.png');
    case '02d':
      return require('../assets/images/sun_clouds.png');
    case '02n':
      return require('../assets/images/moon_clouds.png');
    case '03d':
      return require('../assets/images/clouds.png');
    case '03n':
      return require('../assets/images/clouds.png');
    case '04d':
      return require('../assets/images/clouds.png');
    case '04n':
      return require('../assets/images/clouds.png');
    case '09d':
      return require('../assets/images/rainy.png');
    case '09n':
      return require('../assets/images/rainy.png');
    case '10d':
      return require('../assets/images/sun_clouds_rain.png');
    case '10n':
      return require('../assets/images/moon_clouds_rain.png');
    case '11d':
      return require('../assets/images/storm.png');
    case '11n':
      return require('../assets/images/storm.png');
    case '13d':
      return require('../assets/images/clouds_snow.png');
    case '13n':
      return require('../assets/images/clouds_snow.png');
    case '50d':
      return require('../assets/images/mist.png');
    case '50n':
      return require('../assets/images/mist.png');
    default:
      return require('../assets/images/sun.png');
  }
}
