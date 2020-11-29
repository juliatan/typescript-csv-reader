import { Analyser } from "./Summary";
import { MatchData } from "./MatchData";
import { MatchResult } from "./MatchResult";

// implements is option. Asks Typescript for help to ensure we're creating this class which at a minimum contains
// the types an Analyser needs
export class WinsAnalysis implements Analyser {
  constructor(public teamName: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;

    // Count number of times Man United won
    for (let match of matches) {
      if (match[1] === this.teamName && match[5] === MatchResult.HomeWin) {
        wins++;
      } else if (
        match[2] === this.teamName &&
        match[5] === MatchResult.AwayWin
      ) {
        wins++;
      }
    }

    return `Team ${this.teamName} won ${wins} matches`
  }
}
