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

let manUnitedWins = 0;

// Count number of times Man United won
for (let match of matches) {
  if (match[1] === "Man United" && match[5] === "H") {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === "A") {
    manUnitedWins++;
  }
}

console.log(manUnitedWins);
