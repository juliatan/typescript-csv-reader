import fs from 'fs';

const matches = fs.readFileSync('football.csv', {
  // give us a string with the content of the CSV file
  encoding: 'utf-8'
}).split('\n').map((row: string): string[] => {
  return row.split(',')
})

console.log(matches)