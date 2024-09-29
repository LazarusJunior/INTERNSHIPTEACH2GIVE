interface BaseScores {
  math: number;
  english: number;
  science: number;
}

interface Scores1 extends BaseScores {
  [subject: string]: number;
}

// @ts-expect-error science should be provided
const scores: Scores1 = {
  math: 95,
  english: 90,
};

scores.athletics = 100;
scores.french = 75;
scores.spanish = 70;

console.log(scores);
