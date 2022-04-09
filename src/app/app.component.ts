import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'memory-angular';
  cardPlaceholder = '/assets/images/ekonomik.jpg';
  clicks: number = 0;
  score: number = 0;

  selectedCards: Card[] = [];
  cards: Card[] = shuffle([
    {
      title: '1',
      image: '/assets/images/sobczi.jpg',
      status: false,
      matched: false,
    },
    {
      title: '1',
      image: '/assets/images/sobczi.jpg',
      status: false,
      matched: false,
    },
    {
      title: '2',
      image: '/assets/images/cotojest.jpg',
      status: false,
      matched: false,
    },
    {
      title: '2',
      image: '/assets/images/cotojest.jpg',
      status: false,
      matched: false,
    },
    {
      title: '3',
      image: '/assets/images/linux.jpg',
      status: false,
      matched: false,
    },
    {
      title: '3',
      image: '/assets/images/linux.jpg',
      status: false,
      matched: false,
    },
    {
      title: '4',
      image: '/assets/images/lukioooo.jpg',
      status: false,
      matched: false,
    },
    {
      title: '4',
      image: '/assets/images/lukioooo.jpg',
      status: false,
      matched: false,
    },
  ]);
  selectCard(card: Card) {
    if (card.matched == true) return;
    this.clicks++;
    if (card.status == true) {
      card.status = false;
      this.selectedCards.splice(this.selectedCards.indexOf(card), 1);
      return;
    }
    if (this.selectedCards.length >= 2) {
      alert('You can select only 2 cards at a time');
      return;
    }
    card.status = true;
    this.selectedCards.push(card);
    this.checkMatch();
  }

  checkMatch = (): boolean => {
    if (this.selectedCards.length != 2) {
      return false;
    }
    if (this.selectedCards[0].title == this.selectedCards[1].title) {
      this.selectedCards.forEach((card) => {
        card.matched = true;
      });
      this.selectedCards = [];
      this.score++;
      return true;
    }
    return false;
  };
}

type Card = {
  title: string;
  image: string;
  status: boolean;
  matched: boolean;
};

const shuffle = (a: Card[]) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
