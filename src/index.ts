import {CsvFileReader} from "./CsvFileReader";

const reader = new CsvFileReader("football.csv"); 
reader.read()

// enum automatically creates a new Type called MatchResult
// enums are useful to tell other devs in the team that these are closely related values. Use only when we know all
// the possible outcomes - cannot dynamically change an enum config during runtime.
enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
};

let manUnitedWins = 0;

// Count number of times Man United won
for (let match of reader.data) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log('Man United won', manUnitedWins);
