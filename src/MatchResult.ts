// enum automatically creates a new Type called MatchResult
// enums are useful to tell other devs in the team that these are closely related values. Use only when we know all
// the possible outcomes - cannot dynamically change an enum config during runtime.
export enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
};
