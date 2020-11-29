import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const matchReader = MatchReader.fromCsv("football.csv"); // alternative, use static method
matchReader.load();

const summary = Summary.winsAnalysisWithHtmlReport('Man United')  // alternative, use static method
summary.buildAndPrintReport(matchReader.matches);
