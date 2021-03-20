import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class CardComponent implements OnInit {

  colorTextOn: boolean;
  toggle = 'On`';

  show = false;

  text1 = 'Lorem it. in itaque nulla praesentium.';

  ngOnInit() {
    setTimeout(() => {
      this.text1 = 'sddsf dsf w grg sre w3 fd wr!';
    }, 1000);}


  toggleButtonOn() {
    this.colorTextOn = !this.colorTextOn;
    this.show = !this.show;

    if (this.show == false) {
      this.toggle = 'On';
    } else {
      this.toggle = 'Of';
    }

  }

  inputHendler(event: any) {
    const value = event.target.value;
    this.text1 = value;
  }

}
