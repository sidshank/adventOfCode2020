const puzzleInputString = `1000391
19,x,x,x,x,x,x,x,x,x,x,x,x,37,x,x,x,x,x,383,x,x,x,x,x,x,x,23,x,x,x,x,13,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,29,x,457,x,x,x,x,x,x,x,x,x,41,x,x,x,x,x,x,17`;

const puzzleInput = puzzleInputString.split('\n');
const earliestDepartureTimestamp = Number(puzzleInput[0]);
const busSchedule = puzzleInput[1].split(',').map(item => Number(item));
const busesInService = busSchedule.filter(item => !Number.isNaN(item));
const minutesToWaitForEachBus = busesInService.map(busId => {
  return (Math.ceil(earliestDepartureTimestamp / busId) * busId) - earliestDepartureTimestamp;
});
const leastWaitTime = Math.min(...minutesToWaitForEachBus);
const indexOfLeast = minutesToWaitForEachBus.indexOf(leastWaitTime);
const busIdToTake = busesInService[indexOfLeast];

console.log(`ID of the earliest bus you can take to the airport multiplied by the number of minutes you'll need to wait: ${busIdToTake * leastWaitTime}`);

// Part 2

const desiredDepartureDifferences = busesInService.map(busId => busSchedule.indexOf(busId));

function findTimestampOfConvergence(busesInService, desiredDepartureDifferences) {
  let timestampOfConvergence = 0;
  let multiplier = 1;
  for (let i = 0; i < busesInService.length; i++) {
    while (true) {
      if(( timestampOfConvergence + desiredDepartureDifferences[i] ) % busesInService[i] === 0) {
        multiplier *= busesInService[i];
        break;
      } else {
        timestampOfConvergence +=  multiplier; 
      }
    }
  }
  return timestampOfConvergence;
}

console.log(`earliest timestamp such that all of the listed bus IDs depart at offsets matching their positions in the list: ${findTimestampOfConvergence(
  busesInService,
  desiredDepartureDifferences,
)}`);