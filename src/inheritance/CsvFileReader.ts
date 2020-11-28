import fs from "fs";

// T is a generic type. This is just a name convention - it can be called anything.
// A genetic is a placeholder type. It's up to the child class to pass in a type, as an argument, that in effect
// replaces T.
export abstract class CsvFileReader<T> {
  data: T[] = [];

  constructor(public filename: string) {}

  // refactor to helper method to make this class more reusable and convert to abstract method
  abstract mapRow(row: string[]): T

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
      .map(this.mapRow);
  }

}
