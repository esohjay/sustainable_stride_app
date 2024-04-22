export function calculatePercentageDifference(footprint, userFootprint) {
  if (userFootprint > footprint) {
    let percentageDifference = ((userFootprint - footprint) / footprint) * 100;
    return `${percentageDifference.toFixed(2)}% greater`;
  } else if (userFootprint < footprint) {
    let percentageDifference = ((footprint - userFootprint) / footprint) * 100;
    return `${percentageDifference.toFixed(2)}% lesser`;
  } else {
    return null;
  }
}
