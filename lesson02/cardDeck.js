const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
const values = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
];

//The outer loop picks one suit (e.g., "Hearts")
for (let suit of suits) {
  //The inner loop goes through all values for that suit
  for (let value of values) {
    console.log(`${value} of ${suit}`);
  }
}
