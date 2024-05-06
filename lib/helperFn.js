export function getRandomNumbers() {
  let numbers = [];

  while (numbers.length < 3) {
    let randomNumber = Math.floor(Math.random() * 21); // Generates a random number between 0 and 20
    if (!numbers.includes(randomNumber)) {
      // Checks if the number is already in the array
      numbers.push(randomNumber); // Adds the number to the array if it's not already there
    }
  }

  return numbers;
}
