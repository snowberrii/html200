let firstName = "Termwan";
let lastName = "Chiangpradit";
let currentAge = 18;
let drivingAge = 16;

if (currentAge < drivingAge) {
  let canDrive = drivingAge - currentAge;
  console.log(
    `${firstName} ${lastName} is too young to drive and have ${canDrive} more year${
      canDrive !== 1 ? "s" : ""
    } until can drive!`
  );
} else if (currentAge == drivingAge) {
  console.log(
    `${firstName} ${lastName} is ${currentAge}, which means you can now drive!`
  );
} else if (currentAge > drivingAge) {
  let canDrive = currentAge - drivingAge;
  console.log(
    `${firstName} ${lastName} is ${currentAge} and can drive since ${canDrive} year${
      canDrive !== 1 ? "s" : ""
    } ago.`
  );
}
