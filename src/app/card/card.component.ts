import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../app.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {

  @Input() card: Card;
  @Input() index: number;

  title = 'my card title';
  text = 'sample text';

  disabled = false;
  toggle = true;

  cardDate: Date = new Date();

  textColor: string;

  getImg = 'https://www.logostack.com/wp-content/uploads/designers/eclipse42/small-panda-01-600x420.jpg';

  ngOnInit() {
    setTimeout(() => {
      this.getImg = 'https://www.creativefabrica.com/wp-content/uploads/2020/02/10/Panda-Logo-Graphics-1-1-580x386.jpg';
    }, 1000);

    setTimeout(() => {
      this.disabled = true;
    }, 4000);
  }



  changeTitle() {
    this.card.title = 'hello world';
  }

  onInput(value) {
    this.title = value;
  }

  toggleTitle() {
    this.toggle = !this.toggle;
  }


}
