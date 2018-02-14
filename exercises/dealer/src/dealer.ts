/**
 * Shuffle an array in place
 * @param a Array to shuffle
 */
function shuffleArray(a: any[]) {
  // Iterate over the array
  for (let i = a.length; i; i--) {
    // Get next index
    let j = Math.floor(Math.random() * i);
    // Swap positions
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
}

export enum Suit {
  Clubs, Diamonds, Hearts, Spades
};

export enum CardNumber {
  Ace, Two, Three, Four, Five,
  Six, Seven, Eight, Nine, Ten,
  Jack, Queen, King
};

type Card = [Suit, CardNumber];

function createDeck(): Card[] {
  let deck: Card[] = [];
  for (let suit = 0; suit < Object.keys(Suit).length / 2; suit++) {
    for (let cardNumber = 0; cardNumber < Object.keys(CardNumber).length / 2; cardNumber++) {
      deck.push([suit, cardNumber]);
    }
  }
  return deck;
}

export class Dealer {
  deck: Card[] = [];
  constructor() {
    this.deck = createDeck();
    shuffleArray(this.deck)
  }
  //deals 5 cards
  dealHand(numCards: number): Card[] {
    if (numCards > this.getLength() || numCards < 0) throw 'There are not enough cards left to deal this hand';
    return this.deck.splice(this.getLength() - numCards, numCards);
  }
  //returns number of cards left in deck
  getLength(): number {
    return this.deck.length;
  }
  //converts a card tuple into a string [0, 2] ==> 'Three of Clubs'
  readCard(card: Card): string {
    return `${CardNumber[card[1]]} of ${Suit[card[0]]}`;
  }
}

// let myDealer = new Dealer();
// console.log(myDealer.getLength());
// console.log(myDealer.dealHand(52));