// Create the main array with two arrays inside
const deck = [
  ["Hearts", "Diamonds", "Clubs", "Spades"], // suits array
  [
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
  ], // card values array
];

// Loop through the suits array (deck[0])
for (let suit of deck[0]) {
  // Loop through the card values array (deck[1])
  for (let card of deck[1]) {
    console.log(`${card} of ${suit}`);
  }
}
