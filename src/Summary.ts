import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./WinsAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReport";

export interface Analyser {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {

  static winsAnalysisWithHtmlReport(teamName: string): Summary {
    return new Summary(new WinsAnalysis(teamName), new HtmlReport());
  }

  constructor(public analyser: Analyser, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyser.run(matches);
    this.outputTarget.print(output);
  }
}
