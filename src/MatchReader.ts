import { MatchResult } from "./MatchResult";
import { dateStringToDate } from "./utils";
import { MatchData } from "./MatchData";
import { CsvFileReader } from "./CsvFileReader";

// e.g. MatchReader might want to load data from a CSV or an API. As long as the CSV class or API class matches the
// DataReader interface, MatchReader can interface with it.
interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  // static methods allow us to call it directly without having to create an instance of the class
  static fromCsv(filename: string): MatchReader {
    return new MatchReader(new CsvFileReader(filename));
  }

  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();

    this.matches = this.reader.data.map(
      (row: string[]): MatchData => {
        // row: 10/08/2018,Man United,Leicester,2,1,H,A Marriner
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult, // type assertion - we specifically tell Typescript what form this should take
          row[6],
        ];
      }
    );
  }
}
