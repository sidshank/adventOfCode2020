const puzzleInput = [9,19,1,6,0,5,4];

function recordTurn(trackerObject, turnNumber, spokenNumber) {
  if (trackerObject[spokenNumber] === undefined) {
    trackerObject[spokenNumber] = [turnNumber];
  } else if (trackerObject[spokenNumber].length === 2) {
    trackerObject[spokenNumber] = [trackerObject[spokenNumber][1], turnNumber];
  } else {
    trackerObject[spokenNumber] = [trackerObject[spokenNumber][0], turnNumber];
  }
}

function findSpokenNumber(initialSequence, turnLimit) {
  const spokenBeforeTracking = {};
  let turnNumber = 1;
  let spokenNumber = -1;
  while (turnNumber <= turnLimit) {
    if (turnNumber <= initialSequence.length) {
      spokenNumber = initialSequence[turnNumber - 1];
      spokenBeforeTracking[spokenNumber] = [turnNumber];
    } else {
      if (spokenBeforeTracking[spokenNumber] === undefined || spokenBeforeTracking[spokenNumber].length === 1) {
        spokenNumber = 0;
        recordTurn(spokenBeforeTracking, turnNumber, spokenNumber);
      } else {
        const turnsWhenNumberWasSpoken = spokenBeforeTracking[spokenNumber];
        spokenNumber = turnsWhenNumberWasSpoken[1] - turnsWhenNumberWasSpoken[0];
        recordTurn(spokenBeforeTracking, turnNumber, spokenNumber);
      }
    }
    turnNumber += 1;
  }
  return spokenNumber;
}

console.log(`Spoken number at turn ${2020} is -> ${findSpokenNumber(puzzleInput, 2020)}`);
console.log(`Spoken number at turn ${30000000} is -> ${findSpokenNumber(puzzleInput, 30000000)}`);