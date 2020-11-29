import { CsvFileReader } from "./CsvFileReader";
import { dateStringToDate } from "../utils";
import { MatchResult } from "../MatchResult";

// this is a tuple - array of different types, where order matters
type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CsvFileReader<MatchData> {
  // row: 10/08/2018,Man United,Leicester,2,1,H,A Marriner
  mapRow(row: string[]): MatchData {
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
}
