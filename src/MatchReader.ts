// this is a tuple - array of different types, where order matters
import {MatchResult} from "./MatchResult";
import {dateStringToDate} from "./utils";

type MatchData = [Date, string, string, number, number, MatchResult, string];

interface DataReader {
  read(): void;

  data: string[][];
}

// e.g. MatchReader might want to load data from a CSV or an API. As long as the CSV class or API class matches the
// DataReader interface, MatchReader can interface with it.

export class MatchReader {
  matches: MatchData[] = []

  constructor(public reader: DataReader) {
  }

  load(): void {
    this.reader.read()

    this.matches = this.reader.data.map((row: string[]): MatchData => {
      // row: 10/08/2018,Man United,Leicester,2,1,H,A Marriner
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult, // type assertion - we specifically tell Typescript what form this should take
        row[6]
      ];
    });
  };

}