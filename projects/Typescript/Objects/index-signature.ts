//using an inline index signature
const Scores: { [subject: string]: number } = {};

//using a type
type Scores = {
  [subject: string]: number;
};

//using an interface
interface ScoresInterface {
  [subject: string]: number;
}

//using Record
type ScoresRecord = Record<string, number>;

// Usage
scores.math = 95;
scores.english = 90;
scores.science = 85;

console.log(scores);
