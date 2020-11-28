import fs from "fs";

const matches = fs
  .readFileSync("football.csv", {
    // give us a string with the content of the CSV file
    encoding: "utf-8",
  })
  .split("\n")
  .map((row: string): string[] => {
    return row.split(",");
  });

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
for (let match of matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(manUnitedWins);
