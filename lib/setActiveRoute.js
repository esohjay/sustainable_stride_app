export const setActiveRoute = (routeName, isFocus) => {
  let iconName;
  switch (routeName) {
    case "Home":
      iconName = isFocus ? "home" : "home-outline";
      break;
    case "Estimate":
      iconName = isFocus ? "paw" : "paw-outline";
      break;
    case "Act":
      iconName = isFocus ? "medal" : "medal-outline";
      break;
    case "Track":
      iconName = isFocus ? "speedometer" : "speedometer-outline";
      break;
    case "Campaign":
      iconName = isFocus ? "leaf" : "leaf-outline";
      break;
    default:
      iconName = isFocus ? "home" : "home-outline";
      break;
  }
  return iconName;
};
