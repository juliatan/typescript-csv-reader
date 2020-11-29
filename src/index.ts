import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
import { WinsAnalysis } from "./WinsAnalysis";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import {HtmlReport} from "./reportTargets/HtmlReport";

// Create an object that satisfies the DataReader interface
// const csvFileReader = new CsvFileReader("football.csv");

// Create an instance of MatchReader and pass in something satisfying the DataReader interface
// const matchReader = new MatchReader(csvFileReader);
const matchReader = MatchReader.fromCsv('football.csv') // alternative, use static method
matchReader.load();

const analyser = new WinsAnalysis("Man United");
// const outputTarget = new ConsoleReport();
const outputTarget = new HtmlReport();

// const summary = new Summary(analyser, outputTarget);
const summary = Summary.winsAnalysisWithHtmlReport('Man United')  // alternative, use static method
summary.buildAndPrintReport(matchReader.matches);
