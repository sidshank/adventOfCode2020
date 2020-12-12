const joltageAdapters = [66,
7,
73,
162,
62,
165,
157,
158,
137,
125,
138,
59,
36,
40,
94,
95,
13,
35,
136,
96,
156,
155,
24,
84,
42,
171,
142,
3,
104,
149,
83,
129,
19,
122,
68,
103,
74,
118,
20,
110,
54,
127,
88,
31,
135,
26,
126,
2,
51,
91,
16,
65,
128,
119,
67,
48,
111,
29,
49,
12,
132,
17,
41,
166,
75,
146,
50,
30,
1,
164,
112,
34,
18,
72,
97,
145,
11,
117,
58,
78,
152,
90,
172,
163,
89,
107,
45,
37,
79,
159,
141,
105,
10,
115,
69,
170,
25,
100,
80,
4,
85,
169,
106,
57,
116,
23];

joltageAdapters.sort((a,b) => a - b);
joltageAdapterValues = [0, ...joltageAdapters, joltageAdapters[joltageAdapters.length - 1] + 3]
function getDiffDistribution(adapterValues) {
  return adapterValues.reduce((acc, joltageAdapter, index) => {
    if (index === 0) {
      return acc;
    }
    const diff = joltageAdapter - adapterValues[index - 1];
    if (diff === 1) {
      acc.oneDiff = acc.oneDiff + 1;
    } else if (diff === 3) {
      acc.threeDiff = acc.threeDiff + 1;
    }
    return acc;
  }, {oneDiff: 0, threeDiff: 0, twoDiff: 0});
  
}
const diffDistribution = getDiffDistribution(joltageAdapterValues);

console.log(diffDistribution);

console.log(`Number of 1 differences * number of 3 differences = ${diffDistribution.oneDiff * (diffDistribution.threeDiff)}`);

const joltageRuns = {};
let runCount = 0;
joltageAdapterValues.forEach((jolt, index) => {
  const joltDiff = jolt - (index === 0? 0 : joltageAdapterValues[index - 1])
  if (joltDiff === 1) {
    runCount += 1;
  } else {
    joltageRuns[runCount] = (joltageRuns[runCount] === undefined) ? 1 : (joltageRuns[runCount] + 1);
    runCount = 0; // reset
  }
});

// Account for the iteration count value at the end of the loop.
if (!joltageRuns[runCount]) {
  joltageRuns[runCount] = 1
} else {
  joltageRuns[runCount] += 1;
}

function getPossibleCombinations(numberOfRunCounts) {
  const possibleCombinations = [];
  const lastThreeResponses = [0, 0, 0];
  for (let i = 0; i <= numberOfRunCounts; i++) {
    const possibleCombination = Math.max(1, lastThreeResponses.reduce((acc, b) => acc + b, 0));
    lastThreeResponses.shift();
    lastThreeResponses.push(possibleCombination);
    possibleCombinations.push(possibleCombination);
  }
  return possibleCombinations;
}

const runCounts = Object.keys(joltageRuns)
const possibleCombinations = getPossibleCombinations(runCounts.length);

const numberOfCombinations = runCounts.reduce((acc, key) => {
  return acc * Math.pow(possibleCombinations[key], joltageRuns[key]);
}, 1);
 
console.log(`Number of possible combinations is: ${numberOfCombinations}`);