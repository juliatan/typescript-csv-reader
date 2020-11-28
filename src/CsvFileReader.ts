import fs from "fs";
import { dateStringToDate } from "./utils";
import {MatchResult} from "./MatchResult";

// this is a tuple - array of different types, where order matters
type MatchData = [Date, string, string, number, number, MatchResult, string];

export class CsvFileReader {
  data: MatchData[] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        // give us a string with the content of the CSV file
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      })
      .map((row: string[]): MatchData => {
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
  }
}
