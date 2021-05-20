import "weather-icons/css/weather-icons.css";

export const weatherIcon = (icons, rangeId) => {
  switch (true) {
    case rangeId >= 200 && rangeId < 232:
      this.setState({ icon: icons.Thunderstorm });
      break;
    case rangeId >= 300 && rangeId <= 321:
      this.setState({ icon: icons.Drizzle });
      break;
    case rangeId >= 500 && rangeId <= 521:
      this.setState({ icon: icons.Rain });
      break;
    case rangeId >= 600 && rangeId <= 622:
      this.setState({ icon: icons.Snow });
      break;
    case rangeId >= 701 && rangeId <= 781:
      this.setState({ icon: icons.Atmosphere });
      break;
    case rangeId === 800:
      this.setState({ icon: icons.Clear });
      break;
    case rangeId >= 801 && rangeId <= 804:
      this.setState({ icon: icons.Clouds });
      break;
    default:
      this.setState({ icon: icons.Clouds });
  }
};
